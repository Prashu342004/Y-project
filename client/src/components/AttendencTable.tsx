
export default function AttendencTable({ AttendanceDetails }: { AttendanceDetails: any }) {
    let DateOfAbsent = AttendanceDetails?.date_of_absent
    let DateOfPresent = AttendanceDetails?.date_of_present
    let NonRepeatingTotalWorkingDays: any[] = []
    if(DateOfAbsent && DateOfPresent){
        let TotalWorkingDays = [...DateOfAbsent, ...DateOfPresent].sort((a, b) => a - b)
        NonRepeatingTotalWorkingDays = [...new Set(TotalWorkingDays)]
    }
    let totalRows = NonRepeatingTotalWorkingDays.length
    
    return (
        <div className="order-2 sm:order-3 col-span-2 text-white/50 mb-1 p-5 rounded-2xl border border-white/5 bg-[#121418] w-full">
            <div className="text-md text-[#f5c84b] mb-2">Attendance Dates</div>
            <div className={`grid grid-flow-col ${totalRows > 20 ? "grid-rows-[repeat(15,minmax(0,1fr))]" : "grid-rows-10"} `}>
                {NonRepeatingTotalWorkingDays.map((date) => {
                    return <div className="flex justify-between items-center text-white px-2 py-4 border-b border-white/10">
                        <span className="text-[13px]">{date}</span>
                        <div className={`${DateOfPresent.includes(date) ? "bg-green-500" : "bg-red-500"} w-3 aspect-square`}></div>
                    </div>
                })}
            </div>
        </div>
    )
}
