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
                className="text-center max-w-6xl"
            >
                {/* Crystal Clear Card: Minimal opacity, slight blur, strong borders */}
                <div className="p-8 md:p-14 rounded-[3rem] bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
                    <h1 className="text-4xl md:text-8xl font-black tracking-tighter text-white mb-6 drop-shadow-2xl">
                        Architecting Intelligent <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400 drop-shadow-lg">Ecosystems</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-100 font-medium tracking-wide uppercase drop-shadow-xl max-w-4xl mx-auto leading-relaxed">
                        High-End Engineering For AI & IoT <br />
                        <span className="text-sm md:text-xl text-emerald-200 block mt-2">
                            Smart Home • Smart City • Smart Farming <br />
                            Build Website / Mobile / Software FullStack Developer
                        </span>
                    </p>
                </div>
            </motion.div>

            {/* Section 2 - INTRO */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute left-4 md:left-[10%] max-w-2xl text-left"
            >
                <div className="p-6 md:p-10 rounded-3xl bg-black/20 backdrop-blur-sm border-l-4 border-emerald-500/80 shadow-2xl">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
                        <p className="text-xs md:text-sm text-emerald-300 font-mono tracking-widest drop-shadow-md">
                            PROFILE_ID: YUDI_MUCHTAR
                        </p>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
                        Engineer Multi-Disiplin
                    </h2>
                    <p className="text-base md:text-xl text-white leading-relaxed font-light drop-shadow-lg">
                        Menggabungkan presisi <span className="text-emerald-300 font-semibold">Teknologi Elektro</span>, kecerdasan <span className="text-cyan-300 font-semibold">AI & IoT</span>, serta inovasi <span className="text-green-300 font-semibold">Smart Farming</span>.
                    </p>
                </div>
            </motion.div>

            {/* Section 3 - HOOK */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute right-4 md:right-[10%] text-right max-w-xl"
            >
                <div className="p-6 md:p-10 rounded-3xl bg-gradient-to-l from-white/5 to-transparent backdrop-blur-sm border-r-4 border-emerald-500/80 shadow-2xl">
                    <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-2xl">
                        Transformasi Teknologi
                    </h2>
                    <p className="text-xl md:text-3xl text-gray-100 mb-8 font-light drop-shadow-xl">
                        di Tangan yang Tepat.
                    </p>
                    <div className="inline-flex items-center gap-3 px-6 py-3 border border-emerald-500/30 rounded-full bg-emerald-950/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
                        <span className="text-emerald-200 font-mono text-sm md:text-base font-bold tracking-wider drop-shadow-lg">
                            S.T. & S.Kom. Double Degree
                        </span>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
