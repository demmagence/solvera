import type { Metadata } from "next";
import { Space_Mono, Hanken_Grotesk, Courier_Prime } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  variable: "--font-courier",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solvera Class // XI & XII PPLG RPL 2",
  description: "Classified Operational Dossier for Solvera Class (XI & XII PPLG RPL 2)",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${spaceMono.variable} ${hankenGrotesk.variable} ${courierPrime.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-hanken bg-surface text-secondary texture-bg selection:bg-primary selection:text-surface">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-14">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-secondary text-surface py-8 border-t-8 border-primary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center font-courier text-xs uppercase gap-4">
            <div className="text-center md:text-left space-y-1">
              <p className="font-bold tracking-wider">© SOLVERA CLASS - TOP SECRET DOCUMENT</p>
              <p className="opacity-60 text-[10px]">
                XI & XII PPLG RPL 2 // REPOSITORY FOR INTERNAL SECURITY PROTOCOL 88
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="label-sm border border-surface/40 px-2 py-0.5 text-[10px]">
                CLEARANCE: CONFIDENTIAL
              </span>
              <p className="font-space-mono text-primary font-bold text-lg tracking-widest hidden md:block">
                SOLVERA
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
