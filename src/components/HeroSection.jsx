import { Send, Instagram } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="advertising"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center"
        style={{ marginTop: "70px" }}
      >
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white glow-text mb-6 text-center w-full">
         Available 60+ Games 
          <br />
        The One-Stop Network
        </h1>

        <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-body font-medium">
Access player download links, agent Links, and distributor connections all in one trusted and fully connected platform.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://t.me/octpusgaming"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 rounded-xl bg-[#172855] text-white font-display text-base font-bold tracking-wider transition-all duration-300 backdrop-blur-md border border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(34,158,217,0.3)] hover:border-blue-400/30 active:scale-95"
          >
            <Send className="w-5 h-5 text-blue-400 transition-transform group-hover:rotate-12" />
            Connect on Telegram
            <div className="absolute inset-0 rounded-xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
          </a>

          <a
            href="https://www.instagram.com/octpuscity?igsh=NWkyNzFoMG52azQ2"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-8 py-4 rounded-xl bg-[#172855] text-white font-display text-base font-bold tracking-wider transition-all duration-300 backdrop-blur-md border border-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-10px_rgba(225,48,108,0.3)] hover:border-pink-500/30 active:scale-95"
          >
            <Instagram className="w-5 h-5 text-pink-500 transition-transform group-hover:scale-110" />
            Connect on Instagram
            <div className="absolute inset-0 rounded-xl bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
