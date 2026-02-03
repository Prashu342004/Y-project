import { PhilosophySection } from "../components/PhilosophySection";
import { CoachesSection } from "../components/CoachesSection";
import { LocationSection } from "../components/LocationSection";
import { MobileNavbar } from "../components/MobileNavbar";
import { Footer } from "../components/Footer";

export function AboutPage() {
    return (
        <div className="min-h-screen">
            <MobileNavbar />
            <main className="relative pt-24 pb-24">
                <PhilosophySection />
                <CoachesSection />
                <LocationSection />

                <div className="mt-4">
                    <button className="w-full rounded-2xl bg-[#F5C84B] py-4 text-[16px] font-extrabold text-black transition active:scale-[0.98] flex items-center justify-center gap-2">
                        Join academy
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}
