import { IconCheck } from "./Icon";

export function ProfileHero() {
    return (
        <div className="relative pt-20 pb-6">
            <div className="mx-auto max-w-lg">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                    <img
                        src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D"
                        alt="Marcus Rashford"
                        className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6">
                        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-3">
                            Marcus Rashford
                        </h1>
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#f5c84b] px-4 py-2 text-sm font-bold text-black shadow-lg shadow-[#f5c84b]/20">
                            <span>Academy Member</span>
                            <IconCheck className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
