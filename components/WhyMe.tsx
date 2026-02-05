import { CheckCircle2 } from "lucide-react";

export default function WhyMe() {
    const values = [
        {
            title: "Double Degree Expertise",
            desc: "Kombinasi langka antara sarjana Teknik Elektro (S.T.) dan Komputer (S.Kom.), memberikan perspektif holistik."
        },
        {
            title: "End-to-End Solutions",
            desc: "Satu atap untuk perakitan hardware, coding software, hingga deployment model AI kompleks."
        },
        {
            title: "Local Impact, Global Standard",
            desc: "Berbasis di Padangsidimpuan namun menerapkan standar kerja dan kualitas internasional."
        }
    ];

    return (
        <section className="relative bg-[#0a0a0a] py-32 px-6 md:px-12 z-10 overflow-hidden">
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-sm font-mono text-emerald-400 mb-2 tracking-widest uppercase">The Value Proposition</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-8">Why Me?</h3>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Saya tidak hanya menulis kode; saya merancang sistem. Saya tidak hanya memperbaiki hardware; saya memahami jiwanya. Pendekatan multi-disiplin ini adalah kunci untuk inovasi yang berkelanjutan.
                        </p>
                        <div className="p-6 bg-emerald-900/20 rounded-xl border border-emerald-500/20">
                            <p className="text-emerald-100 italic">
                                "Saya adalah jembatan antara ide abstrak dan eksekusi teknis yang solid."
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {values.map((val, idx) => (
                            <div key={idx} className="flex gap-4 p-6 bg-white/5 rounded-xl border-l-4 border-emerald-500 hover:bg-white/10 transition-colors">
                                <CheckCircle2 className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{val.title}</h4>
                                    <p className="text-gray-400">{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
