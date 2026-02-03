import { Hero } from "../components/Hero";
import { ImageCarousel } from "../components/ImageCarousel";
import { PlayersSection } from "../components/PlayersSection";
import { UpcomingMatch } from "../components/UpcomingMatch";

export function HomePage() {
  return (
    <div className="min-h-screen">
        <Hero />
        <ImageCarousel />
        <UpcomingMatch />
        <PlayersSection />
    </div>
  );
}

