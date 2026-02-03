import { SectionHeading } from "./utility/SectionHeading";
export function LocationSection() {
    return (
        <section className="py-8">
            <SectionHeading title="Location & Timings" />

            <div className="mt-6 overflow-hidden rounded-3xl bg-[#0F1523] border border-white/10 sm:flex sm:p-2 justify-center">
                {/* Map Placeholder - visualized as green field in the design */}
                <div className="h-50 w-50 sm:w-2/4 sm:mx-auto flex items-center justify-center">
                    <iframe className="w-full h-full p-2 rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.7784261316433!2d75.78331611145751!3d23.172745745662862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39637442a5108b93%3A0xa5b29c8bf6b23947!2sHariharnath%20Shastri%20Nagar%20Maidan!5e0!3m2!1sen!2sin!4v1770119396496!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="p-6 sm:border border-white/10 rounded-3xl sm:w-2/4">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-white/60">Our Ground</div>
                    <div className="mt-1 text-lg font-bold text-white">Shastri Nagar, Ujjain</div>
                    <div className="text-[14px] text-white/60">Hariharnath Shastri Nagar Maidan</div>

                    <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
                        <div className="flex justify-between items-center text-[14px]">
                            <span className="text-white/60">Mon - Sat</span>
                            <span className="font-bold text-white">04:00 p.m - 07:00 p.m</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
