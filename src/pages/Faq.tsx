import Navbar from "@/components/Navbar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
    {
        question: "What are Discord Quests?",
        answer: "Discord Quests are interactive experiences that allow players to earn rewards while playing their favorite games and streaming them to friends on Discord."
    },
    {
        question: "Where do Quests show up?",
        answer: "Quests appear in the Gift Inventory, on the Quest bar in the bottom left of the Discord app, and within the Discovery section."
    },
    {
        question: "Where are Quests available?",
        answer: "Quests are available globally on Discord for desktop and mobile devices, subject to regional availability and developer participation."
    },
    {
        question: "What Quest formats are there?",
        answer: "There are several formats including streaming quests, gameplay quests, and discovery quests, each with unique requirements and rewards."
    },
    {
        question: "What are the Quest rewards?",
        answer: "Rewards vary by Quest and can include exclusive in-game items, Discord Nitro, avatar decorations, and other digital collectibles."
    }
];

const Faq = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <Navbar />

            <main className="container mx-auto px-4 pt-40 pb-20 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-display font-black mb-12 text-center bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    FREQUENTLY ASKED QUESTIONS
                </h2>

                <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqData.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-white/10 mb-2">
                                <AccordionTrigger className="text-lg md:text-xl font-display font-bold hover:no-underline hover:text-blue-400 text-left py-6 transition-colors">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/70 text-base md:text-lg leading-relaxed pb-6">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </main>

            {/* Background decoration */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
            </div>
        </div>
    );
};

export default Faq;
