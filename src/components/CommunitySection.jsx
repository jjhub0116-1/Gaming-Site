import { ArrowRight, MessageSquare, Trophy, Heart } from "lucide-react";

const CommunitySection = () => {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl aspect-video -z-10 opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[128px]" />
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">

                    {/* Image Side */}
                    <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-xl aspect-[4/3] rounded-[48px] overflow-hidden border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-700">
                            <img
                                src="/src/assets/community-characters.png"
                                alt="Community Characters"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />

                            {/* Floating Content on Image */}
                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-primary flex items-center justify-center text-[10px] font-black">
                                                {i}
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Join 50,000+ players</p>
                                        <p className="text-white/50 text-xs">Active in our global community</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Small Floating Accents */}
                        <div className="absolute -top-6 -right-6 p-4 bg-accent text-accent-foreground rounded-2xl shadow-xl animate-float hidden md:block">
                            <Trophy className="w-6 h-6" />
                        </div>
                        <div className="absolute top-1/2 -left-8 p-4 bg-primary text-white rounded-2xl shadow-xl animate-float-delayed hidden md:block">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
                        <header className="space-y-4">
                            <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
                                BUILD YOUR <br />
                                <span className="text-primary not-italic">LEGACY.</span>
                            </h2>
                            <p className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Our community isn't just a place to play—it's where friendships are forged,
                                strategies are mastered, and legends are born.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { label: "Community Events", desc: "Weekly tournaments and meetups.", icon: Trophy },
                                { label: "Elite Support", desc: "24/7 dedicated help desk.", icon: Heart }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start text-left">
                                    <div className="p-3 bg-white/5 border border-white/10 rounded-2xl">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1 tracking-wide uppercase text-sm">{item.label}</h4>
                                        <p className="text-white/40 text-sm leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <button className="px-10 py-5 bg-white text-black font-display font-black rounded-2xl hover:bg-white/90 transition-all shadow-xl active:scale-95 text-base tracking-widest uppercase flex items-center justify-center lg:justify-start gap-3 mx-auto lg:mx-0">
                                JOIN COMMUNITY <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
