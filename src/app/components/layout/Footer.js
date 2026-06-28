import { navLinks, profile } from "@/app/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-white/10 bg-white/[0.03] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-white/50 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-bold tracking-tight text-white">Adrian Flores</p>
          <p className="mt-1">{profile.location}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
          <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            Resume
          </a>
        </div>

        <p className="text-xs uppercase tracking-[0.18em] text-white/35">&copy; {currentYear} Adrian Flores</p>
      </div>
    </footer>
  );
}
