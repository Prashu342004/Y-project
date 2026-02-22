import { Hero } from "../components/Hero";
import { ImageCarousel } from "../components/ImageCarousel";
import { PlayersSection } from "../components/PlayersSection";
import { UpcomingMatch } from "../components/UpcomingMatch";
import { useFetch } from "../lib/fetch";

export function HomePage() {
  const { data, error } = useFetch("",'get');
  let Player_data = data?.players_detail;
  console.log(Player_data);
  
  const MatchDetails = data?.upcoming_matches;

  

  return (
    <div className="min-h-screen">
      <Hero />
      <ImageCarousel />
      <UpcomingMatch MatchDetails={MatchDetails} />
      <PlayersSection Player_data={Player_data} />
    </div>
  );
}

