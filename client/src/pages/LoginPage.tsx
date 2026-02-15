import { IconMail, IconLock } from "../components/utility/Icon";
import { useState } from "react";
import { api } from "../lib/axiosInstance";
import { useNavigate } from "react-router-dom";


export function LoginPage() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitForm(e: React.SubmitEvent) {
    e.preventDefault();
    
    api.post("/auth/login",{email,password})
    .then((res) => { if(res.data.success){navigate("/profile")}})
    .catch(err => console.log(err))
  }
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

        <form className="space-y-6" onSubmit={submitForm}>

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
                onChange={
                  (e) => setEmail(e.target.value)
                }
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
                Forgot Password?
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
                onChange={
                  (e) => setPassword(e.target.value)
                }
                required
              />
            </div>
          </div>
          <button className="inline-flex w-[200px] sm:max-w-[350px] h-[40px] items-center justify-center rounded-2xl border border-black/25 bg-[radial-gradient(130%_130%_at_20%_10%,#FFE39B,#F5C84B_55%,#D9A400_120%)] px-4 py-3.5 text-[14px] font-extrabold text-black transition active:scale-[0.99]"
         type="submit">Login</button>

        </form>

      </div>
    </div>
  );
}
