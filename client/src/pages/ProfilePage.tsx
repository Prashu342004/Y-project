import { ProfileHero } from "../components/ProfileHero";
import { StatsSection } from "../components/StatsSection";
import { ContactSection } from "../components/ContactSection";
import { useFetch } from "../lib/fetch";

export function ProfilePage() {
const {data, error} = useFetch('/profile')
console.log(data);

    return (
        <div className="min-h-screen">
            <ProfileHero />
            <StatsSection />
            <ContactSection />
        </div>
    );
}
