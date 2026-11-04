export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#050908]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_15%_-10%,rgba(16,185,129,0.20),transparent_60%),radial-gradient(ellipse_60%_45%_at_90%_5%,rgba(34,211,238,0.14),transparent_60%),radial-gradient(ellipse_50%_40%_at_60%_100%,rgba(163,230,53,0.08),transparent_65%)]" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="blob left-[-10%] top-[8%] h-[380px] w-[380px] bg-emerald-500/25" />
      <div
        className="blob right-[-8%] top-[26%] h-[340px] w-[340px] bg-cyan-400/20"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="blob bottom-[4%] left-[30%] h-[300px] w-[300px] bg-lime-400/10"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}
