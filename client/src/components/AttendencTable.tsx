
export default function AttendencTable({AttendanceDetails}: {AttendanceDetails: any}) {
    const DateOfAbsent = AttendanceDetails?.date_of_absent
    const DateOfPresent = AttendanceDetails?.date_of_present
    const TotalWorkingDays = [...DateOfAbsent, ...DateOfPresent].sort()
    // sorting does not work as intended 
    const NonRepeatingTotalWorkingDays = [...new Set(TotalWorkingDays)]
    console.log(NonRepeatingTotalWorkingDays)
  return (
    <div className="text-[10px] col-span-2 font-bold uppercase tracking-wider text-white/50 mb-1 p-5 rounded-2xl border border-white/5 bg-[#121418] w-full">
        <div className="text-md text-[#f5c84b] mb-2">Attendance Dates</div>
        <div>
            {NonRepeatingTotalWorkingDays.map((date)=>{
              return <div className="flex justify-between items-center text-white px-2 py-4 border-b border-white/10">
                <span className="text-[13px]">{date}</span>
                <div className={`${DateOfAbsent.includes(date) ? "bg-red-500" : "bg-green-500"} w-3 aspect-square`}></div>
              </div>
            })}
        </div>
    </div>
  )
}
