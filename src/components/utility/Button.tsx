export function Button(props: { label: string }) {
    return (
        <a
            href="#"
            className="inline-flex w-[200px] sm:max-w-[350px] h-[40px] items-center justify-center rounded-2xl border border-black/25 bg-[radial-gradient(130%_130%_at_20%_10%,#FFE39B,#F5C84B_55%,#D9A400_120%)] px-4 py-3.5 text-[14px] font-extrabold text-black transition active:scale-[0.99]"
        >
           {props.label}
        </a>
    )
}
