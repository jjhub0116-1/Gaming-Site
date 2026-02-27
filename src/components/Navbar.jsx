import { useState } from "react";
import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";


const navLinks = [
  { label: "ADVERTISING", href: "/#advertising" },
  { label: "INDUSTRIES", href: "/industries", hasDropdown: false },
  { label: "SUCCESS STORIES", href: "/#stories" },
  { label: "FAQ", href: "/faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 pointer-events-none pt-4 sm:pt-6">
      <div className="container mx-auto flex items-center justify-between px-4 pointer-events-auto">
        {/* Logo - Independent */}
        <Link to="/" className="font-display text-xl font-bold tracking-wider text-white flex items-center gap-2 shrink-0 drop-shadow-lg">
          <Gamepad2 className="text-primary w-8 h-8" />
          <span>Gaming<span className="text-accent">Site</span></span>
        </Link>


        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`px-7 py-3 text-[11px] sm:text-[12px] font-black tracking-[0.15em] transition-all duration-300 font-display rounded-[12px] flex items-center gap-1.5 active:scale-95 transform-gpu backdrop-blur-md border border-white/5 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)] hover:-translate-y-1 text-white ${link.label === "ADVERTISING"
                ? "bg-[#172855] border-primary/20 shadow-[0_8px_20px_-4px_rgba(99,102,241,0.2)]"
                : "bg-[#172855]/90 hover:bg-[#172855]"
                }`}
            >
              {link.label}
              {link.hasDropdown && <span className="ml-1 text-[10px] opacity-30">▼</span>}
            </Link>
          ))}
        </div>

        {/* Login Button - Independent */}
        <a
          href="#login"
          className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-white text-black font-display text-xs font-black tracking-widest hover:bg-white/90 transition-all shadow-xl active:scale-95"
        >
          LOG IN
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-2xl bg-black/40 backdrop-blur-lg p-2 rounded-lg"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 pointer-events-auto shadow-2xl animate-in fade-in zoom-in duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-bold tracking-widest text-foreground/80 hover:text-accent font-display py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a href="#login" className="flex justify-center px-5 py-3 rounded-xl bg-primary text-white font-display text-sm font-bold tracking-wider">
                LOG IN
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
