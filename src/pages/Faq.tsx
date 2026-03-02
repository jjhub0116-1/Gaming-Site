import Navbar from "@/components/Navbar";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
    {
        question: "How do I load money into my Juwa account using the agent link?",
        answer: (
            <div>
                <p className="mb-4">Loading your Juwa account is simple through our website-based agent system. Here’s how it works:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Contact us for the official agent link.</li>
                    <li>Confirm your username and deposit amount.</li>
                    <li>Send the payment through the approved method.</li>
                    <li>We load credits into your Juwa account.</li>
                </ul>
                <p>Most deposits are processed quickly. We ensure clear communication before and after loading so you can start playing without delays.</p>
            </div>
        )
    },
    {
        question: "Can I become a Juwa agent?",
        answer: (
            <div>
                <p className="mb-4">Yes, if you’re interested in becoming a Juwa agent, you can contact us directly through our website. We offer competitive and affordable agent rates for those looking to start their own player network.</p>
                <p className="mb-2 font-bold">As an agent, you can:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Load player accounts</li>
                    <li>Manage redemptions</li>
                    <li>Build your own customer base</li>
                    <li>Earn from player activity</li>
                </ul>
                <p>We provide guidance and support to help you get started. Reach out to us for the best and most affordable agent setup options.</p>
            </div>
        )
    },
    {
        question: "What is Juwa Online Casino and how does it work?",
        answer: (
            <div>
                <p className="mb-4">Juwa Online Casino is a popular sweepstakes-style gaming platform that allows players to enjoy trending slot games through an agent-based system. Instead of using traditional banking methods, players fund their accounts through a verified Juwa agent who loads credits directly.</p>
                <p className="mb-2 font-bold">Here’s how it works:</p>
                <ul className="list-decimal pl-5 space-y-2 mb-4">
                    <li>You contact us to set up your Juwa account.</li>
                    <li>You choose your deposit amount.</li>
                    <li>We load credits into your account.</li>
                    <li>You log in through the Juwa app or website and start playing.</li>
                </ul>
                <p>Juwa is known for smooth gameplay, fast access, and a growing player community. Having a reliable agent ensures quick deposits, secure transactions, and responsive support.</p>
            </div>
        )
    },
    {
        question: "How do I create a Juwa account and start playing?",
        answer: (
            <div>
                <p className="mb-4">Creating a Juwa account is simple and fast. Since Juwa operates through agents, registration is handled directly through us.</p>
                <p className="mb-2 font-bold">To get started:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Contact us through our website.</li>
                    <li>Provide your preferred username.</li>
                    <li>Choose your deposit amount.</li>
                    <li>We load your account with credits.</li>
                    <li>Log in and begin playing immediately.</li>
                </ul>
                <p>Most accounts are activated within minutes. If you’re new to Juwa online casino, we provide step-by-step assistance to make the process smooth and hassle-free.</p>
            </div>
        )
    },
    {
        question: "Can I play Juwa online without downloading the app?",
        answer: (
            <div>
                <p className="mb-4">Yes. Juwa offers both app download and web based access.</p>
                <p className="mb-2 font-bold">You can:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Download the Juwa app on your mobile device, or</li>
                    <li>Play directly through the Juwa website using your login details.</li>
                </ul>
                <p>Both options give you full access to your account, balance, and available games. If you need the latest Juwa download link or secure website login, simply contact us and we’ll provide the correct access information.</p>
            </div>
        )
    },
    {
        question: "How do Juwa deposits work?",
        answer: (
            <div>
                <p className="mb-4">Juwa uses a secure agent-based deposit system. Instead of entering card details online, you send your deposit to us, and we load credits into your account.</p>
                <p className="mb-2 font-bold">The deposit process:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Contact us with your deposit amount.</li>
                    <li>Send payment using the approved method.</li>
                    <li>We credit your Juwa account.</li>
                    <li>You receive confirmation and can start playing.</li>
                </ul>
                <p>Deposits are typically processed quickly. We also explain minimum deposit requirements and answer any questions before funding your account.</p>
            </div>
        )
    },
    {
        question: "How do withdrawals and payouts work on Juwa?",
        answer: (
            <div>
                <p className="mb-4">Withdrawing your winnings is straightforward. When you’re ready to cash out:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Contact us with your withdrawal request.</li>
                    <li>We verify your account balance.</li>
                    <li>Your payout is processed through the agreed payment method.</li>
                </ul>
                <p>Processing times may vary depending on the amount and timing, but we aim for fast and reliable payouts. Before you start playing, we clearly explain minimum withdrawal limits and payout terms to ensure transparency.</p>
            </div>
        )
    },
    {
        question: "Is Juwa fair and safe to play?",
        answer: (
            <div>
                <p className="mb-4">Juwa is widely recognized for offering fair, random-based slot gameplay similar to other sweepstakes-style platforms. Game outcomes are randomly generated, providing equal opportunities for players.</p>
                <p className="mb-2 font-bold">For safe play:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Always work with a verified agent.</li>
                    <li>Never share your login details.</li>
                    <li>Understand deposit and withdrawal policies beforehand.</li>
                </ul>
                <p>When you play through us, you receive direct support and assistance whenever needed.</p>
            </div>
        )
    },
    {
        question: "What games are available on Juwa Online Casino?",
        answer: (
            <div>
                <p className="mb-4">Juwa mainly features exciting slot-style games designed for fast and mobile-friendly gameplay. These include:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Classic slot machines</li>
                    <li>Themed video slots</li>
                    <li>Jackpot-style games</li>
                </ul>
                <p>The platform focuses on slot entertainment rather than table games. Many players enjoy Juwa because it’s simple to navigate, visually engaging, and easy to play from both mobile devices and desktop browsers.</p>
            </div>
        )
    },
    {
        question: "What is the minimum deposit for Juwa?",
        answer: (
            <div>
                <p className="mb-4">Minimum deposit amounts can vary. Before loading your account, we inform you of:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>The minimum deposit required</li>
                    <li>Available credit packages</li>
                    <li>Minimum withdrawal limits</li>
                </ul>
                <p>If you’re unsure how much to deposit, contact us and we’ll recommend a suitable starting amount based on your budget and playing preference.</p>
            </div>
        )
    },
    {
        question: "Why is Juwa trending among online casino players?",
        answer: (
            <div>
                <p className="mb-4">Juwa is trending because of its:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Quick account setup</li>
                    <li>Agent-based credit loading system</li>
                    <li>Mobile-friendly access</li>
                    <li>Smooth gameplay experience</li>
                    <li>Fast payouts when handled by a responsive agent</li>
                </ul>
                <p>Players appreciate the simple process, no complicated banking steps or long verification delays. With proper support, the experience remains efficient and convenient.</p>
            </div>
        )
    },
    {
        question: "How can I contact a trusted Juwa agent?",
        answer: (
            <div>
                <p className="mb-4">If you’re ready to start playing Juwa online casino, the best way is to contact us directly through our website. We assist with:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>New account creation</li>
                    <li>Deposits and credit loading</li>
                    <li>Withdrawals and payout processing</li>
                    <li>General account support</li>
                </ul>
                <p>Reach out through our website today, and we’ll guide you step by step to get started with Juwa quickly and securely.</p>
            </div>
        )
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
