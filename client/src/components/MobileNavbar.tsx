import { NavLink } from "react-router-dom";
import { cn } from "../lib/cn";
import { IconHamburger, Profile } from "./utility/Icon";
import { useState } from "react";

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          {/* Logo Section */}
          <div className="grid place-items-start py-2 shrink-0 w-1/3">
            <NavLink to="/" className="grid h-11 w-11 place-items-center rounded-full border border-black/25 bg-[radial-gradient(120%_120%_at_20%_20%,#FFE08B,#F5C84B_45%,#9A6C00_110%)] text-[13px] font-extrabold tracking-[.6px] text-black shadow-[0_14px_40px_rgba(245,200,75,.10)]">
              YB
            </NavLink>
          </div>

          {/* Desktop Links (Hidden on mobile) */}
          <div className="hidden sm:flex gap-4 items-center w-full justify-between">
            <div>
            <NavLink to="/about" className={({ isActive }) =>
              `w-fit px-6 py-2.5 rounded-2xl border text-[13px] font-extrabold tracking-[1px] transition uppercase
     ${isActive
                ? "bg-[radial-gradient(120%_120%_at_20%_20%,#FFE08B,#F5C84B_45%,#9A6C00_110%)] text-black border-white"
                : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
              }`
            }>
              About Us
            </NavLink>
            <NavLink to="/login" className={({ isActive }) =>
              `m-1 w-fit px-6 py-2.5 rounded-2xl border text-[13px] font-extrabold tracking-[1px] transition uppercase
              ${isActive ? "bg-[radial-gradient(120%_120%_at_20%_20%,#FFE08B,#F5C84B_45%,#9A6C00_110%)] text-black border-white"
                : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
              }`
            }>
              Login
            </NavLink>
            </div>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "bg-[radial-gradient(120%_120%_at_20%_20%,#FFE08B,#F5C84B_45%,#9A6C00_110%)] text-black border-white rounded-full p-1 transition" : "bg-white/10 text-white border border-black/25 rounded-full p-1 transition hover:bg-white/20"}>
              <Profile className="size-8" />
            </NavLink>
          </div>

          {/* Actions: Hamburger and Profile */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden grid place-items-center size-10 rounded-xl bg-white/5 border border-white/10 text-white active:scale-95 transition-all"
            >
              <IconHamburger className={cn("size-6 transition-transform", isOpen && "rotate-90")} />
            </button>

          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={cn(
            "sm:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col gap-2 p-3 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-2xl shadow-2xl">
             <NavLink
              to="/profile"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => cn(
                "w-full p-4 rounded-xl text-center text-[13px] font-extrabold tracking-[1px] uppercase transition",
                isActive ? "bg-[#F5C84B] text-black" : "bg-white/5 text-white hover:bg-white/10"
              )}
            >
              Profile
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => cn(
                "w-full p-4 rounded-xl text-center text-[13px] font-extrabold tracking-[1px] uppercase transition",
                isActive ? "bg-[#F5C84B] text-black" : "bg-white/5 text-white hover:bg-white/10"
              )}
            >
              About Us
            </NavLink>
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => cn(
                "w-full p-4 rounded-xl text-center text-[13px] font-extrabold tracking-[1px] uppercase transition",
                isActive ? "bg-[#F5C84B] text-black" : "bg-white/5 text-white hover:bg-white/10"
              )}
            >
              Login
            </NavLink>
           
          </div>
        </div>
      </div>
    </header>
  );
}


