export default function GlassCard({
  as: Component = "div",
  className = "",
  children,
  hover = true,
  shine = true,
  ...props
}) {
  return (
    <Component
      className={[
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-xl",
        "shadow-[0_8px_32px_rgba(0,0,0,0.4)] ring-1 ring-white/[0.08]",
        hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(139,92,246,0.2)]" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {shine && <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />}
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
