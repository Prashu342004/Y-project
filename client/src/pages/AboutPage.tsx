import { PhilosophySection } from "../components/PhilosophySection";
import { CoachesSection } from "../components/CoachesSection";
import { LocationSection } from "../components/LocationSection";
import { Button } from "../components/utility/Button";
export function AboutPage() {
    return (
        <div className="min-h-screen pt-24">
            <PhilosophySection />
            <CoachesSection />
            <LocationSection />

            <div className="my-4">
                <Button onClick={() => { }} label="Join academy" />
            </div>
        </div>
    );
}
