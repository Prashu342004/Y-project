import { ProfileHero } from "../components/ProfileHero";
import { StatsSection } from "../components/StatsSection";
import { ContactSection } from "../components/ContactSection";

export function ProfilePage() {
    return (
        <div className="min-h-screen">
                <ProfileHero />
                <StatsSection />
                <ContactSection />
        </div>
    );
}
