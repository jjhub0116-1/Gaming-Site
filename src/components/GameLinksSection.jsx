import { useState, useEffect } from "react";

const tabs = ["Player Link", "Agent Link"];

// ... existing code ...
const playerGames = [
  { _id: "1", name: "Dragon Fire", image: "/src/assets/game-dragon-fire.jpg", link: "#" },
  { _id: "2", name: "Cyber Race", image: "/src/assets/game-cyberrace.jpg", link: "#" },
  { _id: "3", name: "Demon Hunter", image: "/src/assets/game-demon-hunter.jpg", link: "#" },
  { _id: "4", name: "Shadow Ninja", image: "/src/assets/game-shadow-ninja.jpg", link: "#" },
  { _id: "5", name: "Cosmic Wars", image: "/src/assets/game-cosmic-wars.jpg", link: "#" },
  { _id: "6", name: "Mystic Forest", image: "/src/assets/game-mystic-forest.jpg", link: "#" },
  { _id: "7", name: "Samurai Gold", image: "/src/assets/game-samurai.jpg", link: "#" },
  { _id: "8", name: "Viking Raid", image: "/src/assets/game-viking.jpg", link: "#" },
];

const agentGames = [
  { _id: "a1", name: "Atlantis", image: "/src/assets/game-atlantis.jpg", link: "#" },
  { _id: "a2", name: "Castle Siege", image: "/src/assets/game-castle-siege.jpg", link: "#" },
  { _id: "a3", name: "Pharaoh", image: "/src/assets/game-pharaoh.jpg", link: "#" },
  { _id: "a4", name: "Pirate Gold", image: "/src/assets/game-pirate-gold.jpg", link: "#" },
  { _id: "a5", name: "Elemental", image: "/src/assets/game-elemental.jpg", link: "#" },
  { _id: "a6", name: "Gladiator", image: "/src/assets/game-gladiator.jpg", link: "#" },
  { _id: "a7", name: "Zombie War", image: "/src/assets/game-zombie.jpg", link: "#" },
  { _id: "a8", name: "Dragon Fire", image: "/src/assets/game-dragon-fire.jpg", link: "#" },
];

const GameLinksSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const games = activeTab === 0 ? playerGames : agentGames;

  return (
    <section id="games" className="py-20 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] min-h-screen relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl aspect-video -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-center text-white mb-4 tracking-tighter uppercase italic">
          Game <span className="text-primary not-italic">Links</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-12" />

        <div className="flex justify-center gap-8 mb-16">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`font-display text-lg sm:text-xl font-bold tracking-widest pb-3 transition-all relative ${activeTab === i
                ? "text-white"
                : "text-white/40 hover:text-white/70"
                }`}
            >
              {tab}
              {activeTab === i && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full animate-in fade-in slide-in-from-left-2 duration-300" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto">
          {games.map((game) => (
            <a
              key={game._id}
              href={game.link}
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square rounded-[32px] overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-500 shadow-2xl group-hover:shadow-primary/20 relative">
                <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <span className="text-white font-display text-[10px] tracking-[0.3em] font-black uppercase">Play Now</span>
                </div>
              </div>
              <span className="mt-5 font-display text-sm sm:text-base font-bold text-white/90 tracking-wide transition-colors group-hover:text-white relative">
                {game.name}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary/50 group-hover:w-full transition-all duration-300" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ... existing code ...
export default GameLinksSection;

