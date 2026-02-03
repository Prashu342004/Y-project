import { Footer } from "../components/Footer";
import { GroundSection } from "../components/GroundSection";
import { Hero } from "../components/Hero";
import { ImageCarousel } from "../components/ImageCarousel";
import { MobileNavbar } from "../components/MobileNavbar";
import { PlayersSection } from "../components/PlayersSection";
import { UpcomingMatch } from "../components/UpcomingMatch";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <MobileNavbar />
      <main className="relative">
        <Hero />
        <ImageCarousel />
        <UpcomingMatch />
        <PlayersSection />
        <Footer />
      </main>
    </div>
  );
}

