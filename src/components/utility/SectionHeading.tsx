import type { ReactNode } from "react";

export function SectionHeading(props: { title: string; right?: ReactNode }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3 px-4">
      <h2 className="m-0 text-[16px] font-extrabold tracking-[-.02em] text-white">
        {props.title}
      </h2>
      {props.right ? <div className="text-[13px]">{props.right}</div> : null}
    </div>
  );
}

