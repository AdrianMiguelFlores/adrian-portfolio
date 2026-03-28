"use client";

const Footer = () => {
  return (
    <footer className="relative w-full mt-20 pb-12 font-sans overflow-hidden">
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-24 bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 mt-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          
          <div className="group relative px-10 py-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-700 hover:border-white/30 hover:bg-white/10 hover:-translate-y-1.5 overflow-hidden">
            
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none z-0" />
            
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/50 to-transparent opacity-40 group-hover:opacity-100 transition-opacity z-10" />
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none z-0" />
            
            <span className="relative z-10 text-2xl font-black tracking-tighter uppercase text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              Adi <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 group-hover:from-purple-300 group-hover:to-purple-400 transition-all duration-500">
                Flores
              </span>
            </span>

            <div className="absolute inset-x-6 bottom-0 h-px bg-linear-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out shadow-[0_0_15px_rgba(168,85,247,0.4)] z-10" />
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-px bg-linear-to-r from-transparent via-purple-500/60 to-transparent" />
            
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
              &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> <span className="text-white/60 ml-1">Digital Portfolio</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;