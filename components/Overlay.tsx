"use client";

import { MotionValue, motion, useTransform, useScroll } from "framer-motion";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Section 1: 0% - 20%
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Section 2: 25% - 45%
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.45], [50, -50]);

    // Section 3: 50% - 70%
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.6, 0.75], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

    return (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-6">

            {/* Section 1 - HERO */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="text-center max-w-4xl"
            >
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                    Architecting Intelligent <br /> <span className="text-emerald-400">Ecosystems</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 font-light tracking-wide uppercase">
                    High-End Engineering <br /> for a Smarter Future
                </p>
            </motion.div>

            {/* Section 2 - INTRO */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute left-0 md:left-[10%] max-w-2xl text-left pl-6 md:pl-0 border-l-2 border-emerald-500/50"
            >
                <p className="text-sm text-emerald-400 font-mono mb-4">PROFILE_ID: YUDI_MUCHTAR</p>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                    Engineer Multi-Disiplin
                </h2>
                <p className="text-base md:text-xl text-gray-300 leading-relaxed">
                    Menggabungkan presisi <span className="text-white font-semibold">Teknologi Elektro</span>, kecerdasan <span className="text-white font-semibold">AI & IoT</span>, serta inovasi <span className="text-white font-semibold">Pertanian Modern</span>.
                </p>
            </motion.div>

            {/* Section 3 - HOOK */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute right-0 md:right-[10%] text-right max-w-xl pr-6 md:pr-0"
            >
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
                    Transformasi Teknologi
                </h2>
                <p className="text-xl md:text-2xl text-gray-400">
                    di Tangan yang Tepat.
                </p>
                <div className="mt-8 inline-block px-4 py-2 border border-emerald-500/30 rounded-full bg-emerald-900/10 backdrop-blur-md">
                    <span className="text-emerald-400 font-mono text-sm">S.T. & S.Kom. Double Degree</span>
                </div>
            </motion.div>

        </div>
    );
}
