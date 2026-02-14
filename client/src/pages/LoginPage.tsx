import { Link } from "react-router-dom";
import { IconMail, IconLock } from "../components/utility/Icon";

export function LoginPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-[2.5rem] border border-white/10 bg-[#121418]/60 p-8 shadow-2xl backdrop-blur-2xl sm:p-10">
        <div className="mb-10 text-center">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5c84b]">
            Welcome Back
          </h2>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white">
            Login
          </h1>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-white/50 ml-1">
              Email Address
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-white/30">
                <IconMail className="h-5 w-5" />
              </div>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-2xl border border-white/5 bg-white/5 py-4 pl-12 pr-4 text-sm text-white placeholder:text-white/20 focus:border-[#f5c84b]/50 focus:outline-none focus:ring-1 focus:ring-[#f5c84b]/50 transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between ml-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Password
              </label>
              <a href="#" className="text-[11px] font-bold text-[#f5c84b] hover:opacity-80 transition-opacity">
                Forgot?
              </a>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-white/30">
                <IconLock className="h-5 w-5" />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-2xl border border-white/5 bg-white/5 py-4 pl-12 pr-4 text-sm text-white placeholder:text-white/20 focus:border-[#f5c84b]/50 focus:outline-none focus:ring-1 focus:ring-[#f5c84b]/50 transition-all"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gold-gradient py-4 text-sm font-extrabold text-black transition-all hover:shadow-[0_0_20px_rgba(245,200,75,0.3)] active:scale-[0.98]"
          >
            <span>Login to Dashboard</span>
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm text-white/40">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-bold text-[#f5c84b] hover:underline underline-offset-4 decoration-2"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
