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

      {/* subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.20] [background-image:linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:radial-gradient(closest-side_at_50%_35%,rgba(0,0,0,.95),rgba(0,0,0,.10),transparent)]"
      />

      <main className="relative">
        <Hero />
        <ImageCarousel />
        <GroundSection />
        <UpcomingMatch />
        <PlayersSection />
        <Footer />
      </main>
    </div>
  );
}

