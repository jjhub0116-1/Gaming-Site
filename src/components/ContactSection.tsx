import { Button } from "./ui/button";

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-dark-surface">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#5865F2] via-[#4752C4] to-[#353F95] p-12 md:p-20 text-center shadow-2xl">
                    {/* Decorative 3D Assets (Simulated with the generated image) */}
                    <div className="absolute top-[-40px] right-[-40px] w-48 h-48 opacity-80 animate-float pointer-events-none hidden md:block">
                        <img src="/contact-icon.png" alt="3D Gaming Icon" className="w-full h-full object-contain rotate-12" />
                    </div>
                    <div className="absolute bottom-[-40px] left-[-40px] w-40 h-40 opacity-60 animate-float-delayed pointer-events-none hidden md:block">
                        <img src="/contact-icon.png" alt="3D Gaming Icon" className="w-full h-full object-contain -rotate-12 scale-x-[-1]" />
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-8 tracking-tight">
                            READY TO SCALE YOUR <br className="hidden sm:block" />
                            GAMING <span className="text-[#00D1FF]">EMPIRE?</span>
                        </h2>

                        <p className="text-white/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
                            Connect with our team to get your exclusive access to the world's leading
                            gaming advertisement platform.
                        </p>

                        <a
                            href="https://t.me/octpusgaming"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <button className="px-10 py-4 bg-[#172855] text-white font-black tracking-widest rounded-xl shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-md border border-white/10 active:scale-95 group">
                                CONTACT US NOW
                                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </a>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
