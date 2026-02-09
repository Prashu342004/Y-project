import { useState } from "react";
import { IconViewAll } from "./utility/Icon";

export function StatsSection({ AttendenceDetails, TableVisibility }: { AttendenceDetails: any, TableVisibility: (isVisible: boolean) => void }) {
  const [showTable, setShowTable] = useState(false)
  function ShowsTable() {
   showTable? setShowTable(false) : setShowTable(true)
   TableVisibility(showTable)
   console.log(showTable)
  }

  return (
    <section className=" py-2">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-4">
        {/* Attendance Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#121418] p-5 shadow-lg">
          <div className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">
            ATTENDANCE
          </div>
          <div className="flex items-center justify-between">
            <div className="text-3xl font-black text-white">
              {AttendenceDetails?.percentage}<span className="text-xl text-[#f5c84b]">%</span>
            </div>
            <span onClick={() => ShowsTable()} className="text-xl text-[#f5c84b] cursor-pointer">
              <IconViewAll className="size-6" />
            </span>

          </div>
        </div>

        {/* Fee Status Card */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#121418] p-5 shadow-lg">
          <div className="text-[10px] font-bold uppercase tracking-wider text-white/50 mb-1">
            FEE STATUS
          </div>
          <div className="text-xl font-black text-[#f5c84b] mb-1">
            {`${AttendenceDetails?.fee_status}`}
          </div>
          <div className="text-[10px] font-medium text-white/40">
            NEXT: 15 OCT
          </div>
        </div>




      </div>
    </section>
  );
}
