export function GroundSection() {
  return (
    <section className="pt-6">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-[0_30px_80px_rgba(0,0,0,.55)]">
          <img
            src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-90"
            loading="lazy"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20"
          />

          <div className="relative px-5 py-10">
            <div className="text-xs font-semibold uppercase tracking-[.22px] text-white/70">
              Home Ground
            </div>
            <div className="mt-2 text-[22px] font-extrabold tracking-[-.02em] text-white">
              Where Champions Are Made
            </div>
            <div className="mt-2 max-w-[50ch] text-[13.5px] leading-relaxed text-white/70">
              A disciplined environment built for growth—every session, every rep,
              every match.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

