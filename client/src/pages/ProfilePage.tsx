import { ProfileHero } from "../components/ProfileHero";
import { StatsSection } from "../components/StatsSection";
import { ContactSection } from "../components/ContactSection";
import { useFetch } from "../lib/fetch";
import { AttendanceTable } from "../components/AttendanceTable";
import { useState } from "react";

export function ProfilePage() {
  const { data } = useFetch('/profile');

  const PlayerDetails = data?.players_detail;
  const ContactDetails = data?.contact_info;
  const AttendanceDetails = data?.attendance_data;

  const [isVisible, setIsVisible] = useState(false);

  function isTableVisible(value: boolean) {
    setIsVisible(value);
  }

  return (
    <div className="min-h-screen">
      <ProfileHero PlayerDetails={PlayerDetails} />
      <div className="bg-black/20 mx-auto w-full rounded-2xl flex flex-col sm:flex-row sm:gap-4 sm:justify-center sm:flex-wrap">
        <StatsSection
          AttendanceDetails={AttendanceDetails}
          TableVisibility={isTableVisible}
        />
        <ContactSection ContactDetails={ContactDetails} />
        {isVisible && (
          <AttendanceTable AttendanceDetails={AttendanceDetails} />
        )}
      </div>
    </div>
  );
}
