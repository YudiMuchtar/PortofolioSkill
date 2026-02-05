import { Mail, MapPin, Phone, Globe, Youtube, Facebook, Music, ExternalLink } from "lucide-react";

export default function Contact() {
    const socialLinks = [
        {
            name: "Web Portfolio",
            url: "https://yudimuchtarpksiregar.com",
            icon: <Globe className="w-5 h-5" />,
            action: "Visit"
        },
        {
            name: "YouTube Channel",
            url: "https://youtube.com/@yudimuchtarpksiregar689?si=Xyz8LpN8DF2aQceT",
            icon: <Youtube className="w-5 h-5" />,
            action: "Subscribe"
        },
        {
            name: "Facebook Page",
            url: "https://web.facebook.com/yudi.pksiregar/",
            icon: <Facebook className="w-5 h-5" />,
            action: "Follow"
        },
        {
            name: "Music Bio",
            url: "https://www.soundon.global/bio/yudi",
            icon: <Music className="w-5 h-5" />,
            action: "Stream"
        }
    ];

    return (
        <footer className="relative bg-[#050505] pt-24 pb-12 px-6 md:px-12 z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                    {/* Call to Action Column */}
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                            Jangan Biarkan <br /> <span className="text-emerald-500">Bisnis Tertinggal.</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-xl mb-12">
                            Teknologi bergerak cepat. Pesaing Anda mungkin sudah pakai AI. Mari diskusi bagaimana kita bisa buat bisnis Anda lebih canggih sekarang juga.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="text-emerald-500 w-5 h-5" />
                                <span>Kota Padangsidimpuan, Sumatera Utara</span>
                            </div>
                            <a href="mailto:yudimuchtarpksiregar@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors w-fit">
                                <Mail className="text-emerald-500 w-5 h-5" />
                                <span>yudimuchtarpksiregar@gmail.com</span>
                            </a>
                            <a href="https://wa.me/6281396084064" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors w-fit">
                                <Phone className="text-emerald-500 w-5 h-5" />
                                <span>+62 813 9608 4064</span>
                            </a>
                        </div>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Connect With Me</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {socialLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-emerald-900/20 border border-white/10 hover:border-emerald-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-emerald-400 group-hover:text-emerald-300 transition-colors">
                                            {link.icon}
                                        </div>
                                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{link.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {link.action} <ExternalLink className="w-3 h-3" />
                                    </div>
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-500 text-sm mt-8 leading-relaxed">
                            Mari berkolaborasi atau sekadar berdiskusi mengenai masa depan teknologi dan seni. Klik link di atas untuk terhubung langsung.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600 font-mono">
                    <p>© {new Date().getFullYear()} Yudi Muchtar PK Siregar. All rights reserved.</p>
                    <p>Engineered with Next.js & Framer Motion.</p>
                </div>

            </div>
        </footer>
    );
}
