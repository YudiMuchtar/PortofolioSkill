"use client";

import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Overlay from "./Overlay";

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, 119]);

    // Preload Images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;
        const totalFrames = 120;

        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            const formattedIndex = i.toString().padStart(3, "0");
            img.src = `/sequence/frame_${formattedIndex}.png`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // Render Loop
    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Safety check for index
        let imageIndex = Math.round(index);
        if (imageIndex < 0) imageIndex = 0;
        if (imageIndex >= images.length) imageIndex = images.length - 1;

        const img = images[imageIndex];
        if (!img) return;

        // Canvas sizing (handled by resize logic, but ensuring here)
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Draw Image - Object Fit: Cover Logic
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);

        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
    };

    // React to Scroll Changes
    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (isLoaded) {
            render(latest);
        }
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            render(currentIndex.get());
        }
    }, [isLoaded]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) render(currentIndex.get());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded]);


    return (
        <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Static Fallback Image - Visible immediately */}
                <img
                    src="/sequence/frame_000.png"
                    alt="Hero Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Canvas - Fades in or simply overlays once ready */}
                <canvas
                    ref={canvasRef}
                    className={`block w-full h-full object-cover absolute inset-0 z-10 transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                />

                <Overlay scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}
