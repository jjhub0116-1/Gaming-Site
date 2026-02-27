import Navbar from "@/components/Navbar";

const Industries = () => {
    return (
        <div className="bg-[#020617] min-h-screen w-full overflow-hidden text-foreground font-body flex flex-col relative items-center justify-center p-4">
            <Navbar />

            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl aspect-video -z-10">
                {/* Background Glows */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-[64px] sm:blur-[128px] animate-pulse-glow" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-[64px] sm:blur-[128px] animate-pulse-glow" />
            </div>

            {/* Main Content Area - Center Aligned */}
            <div className="container max-w-4xl mx-auto px-4 text-center z-10 space-y-6 sm:space-y-8 flex flex-col items-center py-20 sm:py-0">

                {/* Floating Illustration - Left */}
                <div className="absolute left-[2%] sm:left-[5%] lg:left-[10%] top-[15%] sm:top-1/2 sm:-translate-y-1/2 w-24 h-24 sm:w-48 sm:h-48 lg:w-72 lg:h-72 animate-float pointer-events-none opacity-40 sm:opacity-100">
                    <img
                        src="/src/assets/industries-shield.png"
                        alt="Support Asset"
                        className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(139,92,246,0.3)] rotate-[-15deg]"
                    />
                </div>

                {/* Floating Illustration - Right */}
                <div className="absolute right-[2%] sm:right-[5%] lg:right-[10%] bottom-[15%] sm:top-1/2 sm:-translate-y-1/2 w-24 h-24 sm:w-48 sm:h-48 lg:w-72 lg:h-72 animate-float-delayed pointer-events-none opacity-40 sm:opacity-100">
                    <img
                        src="/src/assets/industries-controller.png"
                        alt="Gaming Asset"
                        className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(99,102,241,0.3)] rotate-[15deg]"
                    />
                </div>

                {/* Content */}
                <div className="space-y-4 sm:space-y-6 max-w-3xl animate-in fade-in zoom-in duration-700">
                    <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white uppercase leading-none italic">
                        WE'RE HERE <br />
                        <span className="text-white not-italic">TO HELP!</span>
                    </h1>

                    <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-medium max-w-xl mx-auto leading-relaxed px-4">
                        From technical integration to campaign optimization, get elite support
                        for everything in our ecosystem at our Help Center.
                    </p>

                    <div className="pt-4 sm:pt-6">
                        <button className="px-6 sm:px-10 py-3 sm:py-5 bg-primary hover:bg-primary/90 text-white font-display font-black rounded-xl sm:rounded-2xl transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] active:scale-95 text-base sm:text-lg tracking-widest uppercase outline-none">
                            Visit Help Center
                        </button>
                    </div>
                </div>
            </div>

            {/* Subtle Footer Bar */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-30">
                <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            </div>

        </div>
    );
};

export default Industries;
