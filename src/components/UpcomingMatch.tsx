import { useEffect, useMemo, useState } from "react";
import { formatCountdown, formatKickoff, nextMatch } from "../lib/time";
import { SectionHeading } from "./SectionHeading";

export function UpcomingMatch() {
  const kickoff = useMemo(() => nextMatch(), []);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const msLeft = kickoff.getTime() - now.getTime();
  const countdown = msLeft <= 0 ? "Kickoff!" : formatCountdown(msLeft);

  return (
    <section className="pt-6">
      <SectionHeading title="Upcoming Match" />


        <div className="rounded-3xl border border-white/10 bg-white/6 p-4 shadow-[0_18px_55px_rgba(0,0,0,.35)] backdrop-blur-xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[.22px] text-white/60">
                League fixture
              </div>
              <div className="mt-1 text-[16px] font-extrabold tracking-[-.01em] text-white">
                Young Boys vs Riverside FC
              </div>
              <div className="mt-2 text-[13px] text-white/70">
              {/* value change dynamically and formatting is based on that*/}
                <time dateTime={kickoff.toISOString()}>{formatKickoff(kickoff)}</time>
                <span className="mx-2 text-white/35">•</span>
                Kingsfield Stadium
              </div>
            </div>

            <div className="shrink-0 rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-right">
              <div className="text-[11px] font-semibold uppercase tracking-[.22px] text-white/60">
                Countdown
              </div>
              <div className="mt-1 font-mono text-[14px] font-bold text-white/85">
                {countdown}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-black/25 bg-[radial-gradient(130%_130%_at_20%_10%,#FFE39B,#F5C84B_55%,#D9A400_120%)] px-4 py-3.5 text-[14px] font-extrabold text-black transition active:scale-[0.99]"
            >
              View Fixtures
            </a>
          </div>
        </div>
    </section>
  );
}

