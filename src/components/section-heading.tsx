import type { ReactNode } from "react";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  desc?: string;
  align?: "start" | "center";
};

export function SectionHeading({ kicker, title, desc, align = "start" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/90">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {kicker}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold leading-[1.25] text-ink sm:text-4xl">{title}</h2>
      {desc ? <p className="mt-4 text-[15px] leading-7 text-muted">{desc}</p> : null}
    </div>
  );
}
