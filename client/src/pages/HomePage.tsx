import { Hero } from "../components/Hero";
import { ImageCarousel } from "../components/ImageCarousel";
import { PlayersSection } from "../components/PlayersSection";
import { UpcomingMatch } from "../components/UpcomingMatch";
import { useFetch } from "../lib/fetch";

export function HomePage() {
  const { data, error } = useFetch("");
  
  console.log({ data, error });

  return (
    <div className="min-h-screen">
      <Hero />
      <ImageCarousel />
      <UpcomingMatch />
      <PlayersSection />
    </div>
  );
}

