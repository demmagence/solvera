import type { Metadata } from "next";
import { Space_Mono, Hanken_Grotesk, Courier_Prime } from "next/font/google";
import Link from "next/link";
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
  title: "Solvera Class",
  description: "Top Secret Document for Class XI PPLG RPL 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${hankenGrotesk.variable} ${courierPrime.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-hanken bg-surface text-secondary texture-bg">
        {/* Navigation Bar */}
        <header className="border-b-4 border-secondary bg-surface sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/#profile" className="font-space-mono font-bold text-2xl text-primary flex items-center gap-3">
              {/* Logo Kelas */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/image.png" 
                alt="Solvera Logo" 
                className="w-10 h-10 object-contain rounded-full border border-secondary bg-surface"
              />
              <span className="uppercase tracking-tighter">Solvera Class</span>
            </Link>
            
            <nav className="flex gap-8 font-courier font-bold text-sm uppercase tracking-wide">
              <Link href="/#profile" className="hover:text-primary hover:underline decoration-2 underline-offset-4 decoration-primary transition-all">Class Profile</Link>
              <Link href="/#gallery" className="hover:text-primary hover:underline decoration-2 underline-offset-4 decoration-primary transition-all">Squad Gallery</Link>
              <Link href="/#operations" className="hover:text-primary hover:underline decoration-2 underline-offset-4 decoration-primary transition-all">Operations Board</Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 md:py-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-secondary text-surface py-8 border-t-8 border-primary">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center font-courier text-xs uppercase gap-4">
            <p className="font-bold opacity-80 text-center md:text-left">© SOLVERA CLASS - TOP SECRET DOCUMENT</p>
            <p className="font-space-mono text-primary font-bold text-lg tracking-widest hidden md:block">SOLVERA</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
