import { Hero } from "../components/Hero";
import { ImageCarousel } from "../components/ImageCarousel";
import { PlayersSection } from "../components/PlayersSection";
import { UpcomingMatch } from "../components/UpcomingMatch";
import { useFetch } from "../lib/fetch";

export function HomePage() {
  const { data } = useFetch("",'get');
  setInterval(()=>{
    const responseFromPing = useFetch("/ping",'get');
    console.log(responseFromPing); 
  },30000)
  let Player_data = data?.players_detail;
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

