import { cn } from "../lib/cn";
import { IconMenu, IconSearch } from "./Icon";

export function MobileNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto w-full max-w-6xl px-4 pt-3">
        <div
          className={cn(
            "grid grid-cols-3 items-center",
            "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl",
            "shadow-[0_18px_55px_rgba(0,0,0,.35)]",
          )}
        >
          <button
            type="button"
            aria-label="Open menu"
            className="grid h-12 place-items-center rounded-2xl text-white/85 transition active:scale-[0.98]"
          >
            <IconMenu className="h-5 w-5" />
          </button>

          <div className="grid place-items-center py-2">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-black/25 bg-[radial-gradient(120%_120%_at_20%_20%,#FFE08B,#F5C84B_45%,#9A6C00_110%)] text-[13px] font-extrabold tracking-[.6px] text-black shadow-[0_14px_40px_rgba(245,200,75,.10)]">
              YB
            </div>
          </div>

          <button
            type="button"
            aria-label="Search"
            className="grid h-12 place-items-center rounded-2xl text-white/85 transition active:scale-[0.98]"
          >
            <IconSearch className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

