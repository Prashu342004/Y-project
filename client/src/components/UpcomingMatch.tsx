
import { SectionHeading } from "./utility/SectionHeading";

export function UpcomingMatch({ MatchDetails }: { MatchDetails: any }) {

function Matches(){
  return (
          <div>
            <div className="text-[12px] font-semibold uppercase tracking-[.22px] text-white/60">
              Next fixture
            </div>
            <div className="mt-1 text-[16px] font-extrabold tracking-[-.01em] text-white">
              Young Boys vs {MatchDetails?.club_name}
            </div>
            <div className="mt-2 text-[13px] text-white/70">
              {/*Need to format the date and time*/}
              <time>{MatchDetails?.time_date}</time>
              <span className="mx-2 text-white/35">•</span>
              {MatchDetails?.location}
            </div>
          </div>
  )
}
  return (
    <section className="py-2">
      <SectionHeading title="Upcoming Match" />
      <div className="rounded-3xl border border-white/10 bg-white/6 p-4 shadow-[0_18px_55px_rgba(0,0,0,.35)] backdrop-blur-xl">
        <div className="flex items-start justify-between gap-3">

        {MatchDetails?.time_date == undefined? <p>No upcoming matches</p> : <Matches />}
          {/* <div className="shrink-0 rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-right">
            <div className="text-[11px] font-semibold uppercase tracking-[.22px] text-white/60">
              Countdown
            </div>
            <div className="mt-1 font-mono text-[14px] font-bold text-white/85">
              {countdown}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

