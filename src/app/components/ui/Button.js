import Link from "next/link";

const variants = {
  glass:
    "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:border-violet-400/50 hover:bg-white/[0.14] hover:shadow-[0_0_28px_rgba(139,92,246,0.28)]",
  violet:
    "border border-violet-500/80 bg-violet-600 text-white shadow-[0_12px_30px_rgba(124,58,237,0.28)] hover:bg-violet-500 hover:shadow-[0_0_34px_rgba(139,92,246,0.35)]",
  ghost:
    "border border-white/10 bg-white/[0.04] text-white/75 hover:border-white/20 hover:bg-white/[0.08] hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "glass",
  className = "",
  target,
  rel,
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.18em]",
    "transition-all duration-300 active:scale-95",
    variants[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
