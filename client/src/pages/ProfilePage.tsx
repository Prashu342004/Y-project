import { ProfileHero } from "../components/ProfileHero";
import { StatsSection } from "../components/StatsSection";
import { ContactSection } from "../components/ContactSection";
import { useFetch } from "../lib/fetch";
import AttendencTable from "../components/AttendencTable";
import { useState, useEffect } from "react";

export function ProfilePage() {
    const { data, error } = useFetch('/profile')
    const PlayerDetails = data?.players_detail
    const ContactDetails = data?.contact_info
    const AttendenceDetails = data?.attendence_data
    const [isVisible, setIsVisible] = useState(false)

    function isTableVisible(isVisible: boolean) {
        setIsVisible(isVisible)
    }

    return (

        <div className="min-h-screen">
            <ProfileHero PlayerDetails={PlayerDetails} />
            <div className="bg-black/20 mx-auto w-full rounded-2xl flex flex-col sm:flex-row sm:gap-4 sm:justify-center sm:flex-wrap">
                <StatsSection AttendenceDetails={AttendenceDetails} TableVisibility={isTableVisible} />
                <ContactSection ContactDetails={ContactDetails} />
                {isVisible && <AttendencTable AttendanceDetails={AttendenceDetails} />}
            </div>
        </div>
    );
}
