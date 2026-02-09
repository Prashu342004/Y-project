import { ProfileHero } from "../components/ProfileHero";
import { StatsSection } from "../components/StatsSection";
import { ContactSection } from "../components/ContactSection";
import { useFetch } from "../lib/fetch";

export function ProfilePage() {
const {data, error} = useFetch('/profile')
const PlayerDetails = data?.players_detail
const ContactDetails = data?.contact_info
const AttendenceDetails = data?.attendence_data

    return (
        <div className="min-h-screen">
            <ProfileHero PlayerDetails={PlayerDetails} />
            <StatsSection AttendenceDetails={AttendenceDetails} />
            <ContactSection ContactDetails={ContactDetails} />
        </div>
    );
}
  