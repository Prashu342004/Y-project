export function Hero() {
  return (
    <section className="pt-20">
        <div className="relative overflow-hidden mx-auto w-full rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] p-2 shadow-[0_30px_80px_rgba(0,0,0,.55)]">
            <img className="rounded-3xl w-full" src= "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?auto=format&fit=crop&w=1200&q=80" alt="" />
            <div className="absolute bottom-2">
                <a
                  href="#"
                  className="inline-flex w-full xs:w-[350px] items-center justify-center rounded-2xl border border-black/25 bg-[radial-gradient(130%_130%_at_20%_10%,#FFE39B,#F5C84B_55%,#D9A400_120%)] px-4 py-3.5 text-[14px] font-extrabold text-black transition active:scale-[0.99]"
                >
                  Join the Academy
                </a>
            </div>

        </div>
    </section>
  );
}

