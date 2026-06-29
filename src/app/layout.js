import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { profile } from "./data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${profile.name} | Portfolio`,
  description: `Personal portfolio and professional milestones of ${profile.shortName}.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} 
          antialiased bg-slate-950 text-slate-50 
          selection:bg-primary-500/30 selection:text-primary-200
        `}
      >

        <div className="relative z-10 flex flex-col">
          <Navbar />
          
          <main className="grow mt-10 md:mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}