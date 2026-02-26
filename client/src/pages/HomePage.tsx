import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { ImageCarousel } from "../components/ImageCarousel";
import { PlayersSection } from "../components/PlayersSection";
import { UpcomingMatch } from "../components/UpcomingMatch";
import { useFetch } from "../lib/fetch";
import { api } from "../lib/axiosInstance";

export function HomePage() {
  const { data } = useFetch("", 'get');

  useEffect(() => {
    const intervalId = setInterval(() => {
      api.get("/ping")
        .then(res => {
          console.log(res.data?.success);
        })
        .catch(err => {
          console.error("Ping failed:", err);
        });
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

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

