import { SectionHeading } from "./SectionHeading";

export function PhilosophySection() {
  return (
    <section className="py-8">
      <SectionHeading title="Our Philosophy" />
      
      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <p className="text-[15px] leading-relaxed text-white/80 md:text-lg">
          Founded on the principles of <span className="text-[#F5C84B] font-bold">excellence</span> and <span className="text-[#F5C84B] font-bold">discipline</span>, our academy is more than a training ground. We nurture the next generation of football stars through a curriculum that balances technical skill with tactical intelligence.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/5 p-5">
            <div className="text-3xl font-extrabold text-[#F5C84B]">15+</div>
            <div className="mt-1 text-[11px] font-bold tracking-wider text-white/60 uppercase">Years Experience</div>
          </div>
          <div className="rounded-2xl bg-white/5 p-5">
            <div className="text-3xl font-extrabold text-[#F5C84B]">500+</div>
            <div className="mt-1 text-[11px] font-bold tracking-wider text-white/60 uppercase">Elite Graduates</div>
          </div>
        </div>
      </div>
    </section>
  );
}
