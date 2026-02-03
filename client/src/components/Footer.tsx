import { IconInstagram } from "./Icon";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto w-full max-w-6xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center text-white/70 shadow-[0_18px_55px_rgba(0,0,0,.35)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-sm flex-col gap-1 items-start">
            <div className="flex items-center gap-2 text-[14px] text-white/80">
              <IconInstagram className="h-5 w-5" />
              <span>@youngboys.fc</span>
            </div>
            <a
              href="mailto:info@youngboysfc.com"
              className="text-[14px] text-white/75 hover:text-white"
            >
              info@youngboysfc.com
            </a>
            <div className="pt-2 text-[12px] text-white/55">
              © {new Date().getFullYear()} Young Boys Football Club
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

