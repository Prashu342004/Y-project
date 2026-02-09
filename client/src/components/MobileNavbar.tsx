import { NavLink } from "react-router-dom";
import { cn } from "../lib/cn";
import { Profile } from "./utility/Icon";

export function MobileNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-[1200px] px-4 pt-3">
        <div
          className={cn(
            "flex items-center justify-between",
            "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
            "shadow-[0_18px_55px_rgba(0,0,0,.35)] px-4",
          )}
        >
          <div className="hidden xs:grid place-items-center py-2">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-black/25 bg-[radial-gradient(120%_120%_at_20%_20%,#FFE08B,#F5C84B_45%,#9A6C00_110%)] text-[13px] font-extrabold tracking-[.6px] text-black shadow-[0_14px_40px_rgba(245,200,75,.10)]">
              YB
            </div>
          </div>
          <div className="flex gap-1 xs:gap-4 ">
            <NavLink to="/" className={({ isActive }) =>
              `w-fit place-items-center rounded-3xl p-2 sm:p-4 border text-[13px] font-extrabold tracking-[.6px]
     shadow-[0_14px_40px_rgba(245,200,75,.10)] transition
     ${isActive
                ? "bg-[radial-gradient(120%_120%_at_20%_20%,#FFE08B,#F5C84B_45%,#9A6C00_110%)] text-black border-white"
                : "bg-white/10 text-white border-black/25 hover:bg-white/20"
              }`
            }>
              HOME
            </NavLink>
            <NavLink to="/about" className={({ isActive }) =>
              `w-fit place-items-center rounded-3xl p-2 sm:p-4 border text-[13px] font-extrabold tracking-[.6px]
     shadow-[0_14px_40px_rgba(245,200,75,.10)] transition
     ${isActive
                ? "bg-[radial-gradient(120%_120%_at_20%_20%,#FFE08B,#F5C84B_45%,#9A6C00_110%)] text-black border-white"
                : "bg-white/10 text-white border-black/25 hover:bg-white/20"
              }`
            }>
              ABOUT US
            </NavLink>
          </div>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "bg-[radial-gradient(120%_120%_at_20%_20%,#FFE08B,#F5C84B_45%,#9A6C00_110%)] text-black border-white rounded-full p-1" : "bg-white/10 text-white border border-black/25 rounded-full p-1"}>

            <Profile className="size-8" />

          </NavLink>

        </div>
      </div>
    </header>
  );
}

