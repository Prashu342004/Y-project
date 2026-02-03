export function StatsSection() {
  return (
    <section className=" py-2">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-4">
        {/* Attendance Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#121418] p-5 shadow-lg">
          <div className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">
            ATTENDANCE
          </div>
          <div className="flex items-end justify-between">
            <div className="text-3xl font-black text-white">
              94<span className="text-xl text-[#f5c84b]">%</span>
            </div>
            <div className="h-8 w-1.5 rounded-full bg-[#f5c84b] shadow-[0_0_10px_rgba(245,200,75,0.5)]"></div>
          </div>
        </div>

        {/* Fee Status Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#121418] p-5 shadow-lg">
          <div className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">
            FEE STATUS
          </div>
          <div className="text-xl font-black text-[#f5c84b] mb-1">
            PAID
          </div>
          <div className="text-[10px] font-medium text-white/40">
            NEXT: 15 OCT
          </div>
        </div>
      </div>
    </section>
  );
}
