import { SectionHeading } from "./utility/SectionHeading";

let players = [
  {
    id: 1,
    name: "Player 1",
    position: "Position 1",
    number: 1,
  },
  {
    id: 2,
    name: "Player 2",
    position: "Position 2",
    number: 2,
  },
  {
    id: 3,
    name: "Player 3",
    position: "Position 3",
    number: 3,
  },
  {
    id: 4,
    name: "Player 4",
    position: "Position 4",
    number: 4,
  },
  {
    id: 5,
    name: "Player 5",
    position: "Position 5",
    number: 5,
  },
]

function PlayerSilhouette() {
  return (
    <svg viewBox="0 0 120 140" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="pgrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="rgba(255,255,255,.18)" />
          <stop offset="1" stopColor="rgba(255,255,255,.04)" />
        </linearGradient>
      </defs>
      <path
        d="M60 14c11 0 20 9 20 20s-9 20-20 20-20-9-20-20S49 14 60 14Zm0 52c18 0 32 14 32 32v24H28V98c0-18 14-32 32-32Z"
        fill="url(#pgrad)"
      />
      <path
        d="M28 122h64"
        stroke="rgba(255,255,255,.10)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlayersSection({Player_data}: {Player_data: []}) {
  return (
    <section>
      <SectionHeading title="Meet the Squad" />

      <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
        {Player_data?.map((data: any) => (
          <article
            key={data.id}
            className="w-[68vw] max-w-[320px] snap-start"
            aria-label={`${data.name} player card`}
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/6 shadow-[0_18px_55px_rgba(0,0,0,.35)] backdrop-blur-xl">
              <div className="relative h-40 bg-[radial-gradient(120%_120%_at_20%_10%,rgba(245,200,75,.14),transparent_60%),radial-gradient(100%_100%_at_90%_15%,rgba(60,199,214,.12),transparent_60%),linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.02))]">
                <div className="absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/35 px-2.5 py-1.5 text-[12px] font-extrabold text-white/85">
                  #{data.number}
                </div>
                <div className="mx-auto h-40 w-32 opacity-90">
                  {data.photo ? <img src={data.photo} alt={data.name} /> : <PlayerSilhouette />}
                </div>
              </div>

              <div className="p-5">
                <div className="text-[12px] font-extrabold tracking-[-.01em] text-white">
                  {data.name}
                </div>
                <div className="text-[13px] text-white/70 whitespace-nowrap">{data.position}</div>
                <a
                  href="#"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-black/20 px-2 py-3 text-[10px] font-bold text-white/85 transition hover:bg-white/5 active:scale-[0.99]"
                >
                  View profile
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

