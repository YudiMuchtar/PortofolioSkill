import { Terminal, Lightbulb, Music, Mic, Sprout, Building, Home, Monitor, Smartphone, Globe, Layers } from 'lucide-react';

export default function Competencies() {
    const mainDomains = [
        {
            title: "Advanced Solution Architect (AI & IoT)",
            subtitle: "Transforming environments into intelligent ecosystems.",
            icon: <Lightbulb className="w-10 h-10 text-emerald-400" />,
            color: "border-emerald-500/30 bg-emerald-900/10",
            services: [
                {
                    title: "Smart Home Solutions",
                    desc: "Otomatisasi hunian responsif, hemat energi, dan aman berbasis kontrol suara & sensor cerdas.",
                    icon: <Home className="w-5 h-5 text-emerald-500" />
                },
                {
                    title: "Smart City Infrastructure",
                    desc: "Sistem monitoring kota, manajemen limbah digital, dan optimasi trafik berbasis data real-time.",
                    icon: <Building className="w-5 h-5 text-emerald-500" />
                },
                {
                    title: "Smart Farming (Next-Gen)",
                    desc: "Pertanian presisi AIoT untuk memprediksi kesehatan tanaman dan otomatisasi nutrisi lahan.",
                    icon: <Sprout className="w-5 h-5 text-emerald-500" />
                }
            ]
        },
        {
            title: "Future-Ready Multi-Platform Ecosystems",
            subtitle: "Integrasi tanpa batas, kecerdasan buatan di setiap perangkat.",
            icon: <Layers className="w-10 h-10 text-blue-400" />,
            color: "border-blue-500/30 bg-blue-900/10",
            services: [
                {
                    title: "AI-Native Desktop Core",
                    desc: "Aplikasi native (Win/Linux) performa tinggi yang dipersenjatai pemrosesan AI lokal untuk efisiensi mutlak.",
                    icon: <Monitor className="w-5 h-5 text-blue-500" />
                },
                {
                    title: "Cognitive Web Architecture",
                    desc: "Full-Stack Web modern yang tidak hanya responsif, tapi cerdas—beradaptasi dengan teknologi masa depan.",
                    icon: <Globe className="w-5 h-5 text-blue-500" />
                },
                {
                    title: "Seamless Mobile Intelligence",
                    desc: "Sinergi Android/iOS yang terhubung secara neural dengan pusat data, membawa kekuatan superkomputer ke saku Anda.",
                    icon: <Smartphone className="w-5 h-5 text-blue-500" />
                }
            ]
        }
    ];

    const creativeDomain = {
        title: "The Sonic Alchemist (Music & Art)",
        subtitle: "Menggabungkan seni dan teknologi untuk karya futuristik.",
        items: [
            {
                label: "AI Music Production",
                desc: "Komposisi harmoni AI."
            },
            {
                label: "Vocal & Composition",
                desc: "Vokal humanis x Audio digital."
            }
        ]
    };

    return (
        <section className="relative bg-[#121212] py-24 px-6 md:px-12 z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-sm font-mono text-emerald-400 mb-2 tracking-widest uppercase">Expertise & Passion</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Core Competencies</h3>
                </div>

                {/* Main Technical Domains */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
                    {mainDomains.map((domain, idx) => (
                        <div key={idx} className={`p-8 rounded-3xl border ${domain.color} backdrop-blur-md hover:bg-white/[0.02] transition-all duration-500 flex flex-col h-full`}>
                            <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit">
                                {domain.icon}
                            </div>

                            <h4 className="text-3xl font-bold text-white mb-2">{domain.title}</h4>
                            <p className="text-gray-400 font-mono text-sm mb-10 italic">"{domain.subtitle}"</p>

                            <div className="space-y-6 mt-auto">
                                {domain.services.map((service, sIdx) => (
                                    <div key={sIdx} className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-white/10">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 p-2 rounded-lg bg-black/40 group-hover:bg-black/60 transition-colors">
                                                {service.icon}
                                            </div>
                                            <div>
                                                <h5 className="text-lg font-bold text-white mb-1">{service.title}</h5>
                                                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Subtle Creative Section */}
                <div className="relative rounded-2xl border border-purple-500/20 bg-purple-900/5 p-8 md:p-12 overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="p-4 rounded-full bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                                <Music className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-1">{creativeDomain.title}</h4>
                                <p className="text-gray-500 italic text-sm">{creativeDomain.subtitle}</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
                            {creativeDomain.items.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                    <div>
                                        <h5 className="text-white font-medium text-sm">{item.label}</h5>
                                        <p className="text-gray-600 text-xs">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
