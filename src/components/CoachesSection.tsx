import { SectionHeading } from "./SectionHeading";

type Coach = {
    id: string;
    name: string;
    role: string;
    desc: string;
    image: string; // Using placeholder or generic vector for now since prompt image had vectors
};

const coaches: Coach[] = [
    {
        id: "c1",
        name: "Coach Marcus",
        role: "Head Coach",
        desc: "UEFA Pro License • 12 years at Academy",
        image: "https://generated.vusercontent.net/placeholder-user.jpg", // We will likely verify this visual later
    }
];

export function CoachesSection() {
    return (
        <section className="py-8">
            <SectionHeading
                title="Meet Our Coaches"
            />

            <div className="scrollbar-hide mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
                {coaches.map((coach) => (
                    <div key={coach.id} className="relative w-[280px] shrink-0 snap-start overflow-hidden rounded-[32px] bg-white/5">
                        {/* Placeholder for the grey gradient background seen in image */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/80"></div>

                        {/* Image placeholder - trying to match the vector style from the input would require specific assets, using a gradient placeholder for now if no asset */}
                        <div className="h-[320px] w-full bg-gray-500/20 mix-blend-overlay">
                        <img src={coach.image} alt={coach.name} className="h-full w-full object-cover" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6 pt-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-[#F5C84B]">{coach.role}</div>
                            <div className="mt-1 text-2xl font-extrabold text-white">{coach.name}</div>
                            <div className="mt-2 text-[13px] text-white/70">{coach.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
