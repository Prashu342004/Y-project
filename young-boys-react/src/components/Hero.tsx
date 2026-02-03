export function Hero() {
  return (
    <section className="px-4 pt-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))] p-5 shadow-[0_30px_80px_rgba(0,0,0,.55)]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/35 p-6">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 [background:radial-gradient(900px_380px_at_20%_10%,rgba(245,200,75,.14),transparent_60%),radial-gradient(800px_380px_at_80%_20%,rgba(60,199,214,.12),transparent_60%),linear-gradient(180deg,rgba(0,0,0,.35),rgba(0,0,0,.65))]"
            />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-[.22px] text-white/65">
                Young Boys Football Club
              </div>

              <h1 className="mt-3 text-[40px] font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
                Build Champions
                <br />
                Through Discipline
              </h1>

              <p className="mt-3 max-w-[42ch] text-[14.5px] leading-relaxed text-white/70">
                Teamwork. Passion. Consistency. A modern academy built for players
                who want more than talent—who want a standard.
              </p>

              <div className="mt-5 grid gap-3">
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-black/25 bg-[radial-gradient(130%_130%_at_20%_10%,#FFE39B,#F5C84B_55%,#D9A400_120%)] px-4 py-3.5 text-[14px] font-extrabold text-black transition active:scale-[0.99]"
                >
                  Join the Academy
                </a>
                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-white/18 bg-black/10 px-4 py-3.5 text-[14px] font-bold text-white/90 transition hover:bg-white/5 active:scale-[0.99]"
                >
                  Watch Highlights
                </a>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-[12px] text-white/70">
                <span className="font-semibold text-white/80">Premium academy pathway</span>
                <span className="text-white/55">U13 • U15 • U17 • U19</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

