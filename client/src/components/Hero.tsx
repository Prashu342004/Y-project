import { Button } from "./utility/Button";

export function Hero() {
  return (
    <section className="pt-20">
        <div className="relative overflow-hidden mx-auto w-full rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] p-2 shadow-[0_30px_80px_rgba(0,0,0,.55)]">
            <img className="rounded-3xl w-full" src= "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?auto=format&fit=crop&w=1200&q=80" alt="" />
            <div className="absolute bottom-2">
              <Button onClick={() => {}} label="Join the Academy" />
            </div>

        </div>
    </section> 
  );
}

