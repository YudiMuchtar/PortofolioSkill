export default function Experience() {
    const works = [
        {
            title: "Sistem Otomasi Pertanian Berbasis AIoT",
            desc: "Membangun sistem monitoring lahan real-time yang mampu mengatur irigasi dan pemupukan secara otomatis berdasarkan data sensor.",
            tech: ["Arduino/ESP32", "Python (AI)", "Flutter"],
            type: "Smart Farming"
        },
        {
            title: "Enterprise Maintenance & Hardware Support",
            desc: "Layanan pemeliharaan infrastruktur hardware untuk skala industri, memastikan zero-downtime pada sistem krusial.",
            tech: ["Hardware Diagnostics", "System Recovery", "Industrial Std"],
            type: "Infrastructure"
        },
        {
            title: "Multi-Platform Application Suites",
            desc: "Pengembangan software manajemen internal yang berjalan sinkron di desktop (Windows/Linux), web, dan smartphone (Android/iOS).",
            tech: ["Cross-Platform", "Cloud Sync", "Secure API"],
            type: "Software Dev"
        }
    ];

    return (
        <section className="relative bg-[#121212] py-24 px-6 md:px-12 z-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-sm font-mono text-emerald-400 mb-2 tracking-widest uppercase">Portfolio Highlight</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white">Work Experience & Projects</h3>
                    </div>
                    <p className="text-gray-400 mt-4 md:mt-0 max-w-md text-right hidden md:block">
                        Solusi nyata yang telah diimplementasikan di lapangan.
                    </p>
                </div>

                <div className="space-y-8">
                    {works.map((work, idx) => (
                        <div key={idx} className="group relative bg-white/5 rounded-xl p-8 md:p-10 hover:bg-white/10 transition-colors border border-white/5 hover:border-emerald-500/30">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                <div className="flex-1">
                                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-4 text-center">
                                        {work.type}
                                    </span>
                                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-emerald-200 transition-colors">
                                        {work.title}
                                    </h4>
                                    <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
                                        {work.desc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
                                    {work.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 border border-white/10 rounded-md text-xs text-gray-400 font-mono">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
