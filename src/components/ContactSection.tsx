import { IconPhone, IconMail, IconMapPin } from "./Icon";

export function ContactSection() {
    return (
        <section className="py-6">
            <div className="mx-auto max-w-lg">
                <div className="rounded-[2rem] border border-white/5 bg-[#121418] p-6 shadow-lg">
                    <h3 className="mb-6 text-[10px] font-bold uppercase tracking-wider text-[#f5c84b]">
                        CONTACT DETAILS
                    </h3>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-[#f5c84b]">
                                <IconPhone className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-xs text-white/40 mb-0.5">Mobile</div>
                                <div className="text-sm font-bold text-white">+44 7911 123456</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-[#f5c84b]">
                                <IconMail className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-xs text-white/40 mb-0.5">Email</div>
                                <div className="text-sm font-bold text-white break-all">m.rashford@academy.com</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-[#f5c84b]">
                                <IconMapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-xs text-white/40 mb-0.5">Training Ground</div>
                                <div className="text-sm font-bold text-white">Old Trafford, Manchester</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
