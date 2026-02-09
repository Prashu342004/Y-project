import { IconPhone, IconMail, } from "./utility/Icon";

export function ContactSection({ ContactDetails }: { ContactDetails: any }) {
    return (
        <section className="order-3 sm:order-2 py-2">
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
                                <div className="text-sm font-bold text-white">{ContactDetails?.mobile_no}</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-[#f5c84b]">
                                <IconMail className="h-5 w-5" />
                            </div>
                            <div>
                                <div className="text-xs text-white/40 mb-0.5">Email</div>
                                <div className="text-sm font-bold text-white break-all">{ContactDetails?.email}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
