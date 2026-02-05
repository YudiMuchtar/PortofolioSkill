import { CheckCircle2 } from "lucide-react";

export default function WhyMe() {
    const values = [
        {
            title: "Expertise Ganda (S.T. & S.Kom)",
            desc: "Paham Hardware & Software sekaligus. Tidak perlu sewa dua ahli berbeda, saya tangani semuanya dari kabel hingga koding."
        },
        {
            title: "Solusi All-in-One",
            desc: "Mulai dari perakitan alat, pembuatan aplikasi, hingga sistem berjalan otomatis. Satu pintu, beres semua."
        },
        {
            title: "Standar Internasional",
            desc: "Kualitas kerja setara perusahaan teknologi global, diterapkan langsung untuk memajukan bisnis lokal Anda."
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
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">Solusi Tepat Guna <br /> dengan AI & IoT</h3>
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            Mengapa harus rumit jika bisa canggih dan sederhana? Saya menghadirkan teknologi yang langsung menjawab masalah bisnis Anda dengan efisiensi tinggi.
                        </p>
                        <div className="p-6 bg-emerald-900/20 rounded-xl border border-emerald-500/20">
                            <p className="text-emerald-100 italic">
                                "Teknologi bukan hanya soal kode, tapi soal bagaimana bisnis Anda berjalan lebih cepat, hemat, dan otomatis."
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
