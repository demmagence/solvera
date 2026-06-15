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
      className={`${spaceMono.variable} ${hankenGrotesk.variable} ${courierPrime.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-hanken bg-surface text-secondary texture-bg">
        {/* Navigation Bar */}
        <header className="border-b-4 border-secondary bg-surface sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="font-space-mono font-bold text-2xl text-primary flex items-center gap-2">
              <span className="uppercase tracking-tighter">Solvera Class</span>
            </Link>
            
            <nav className="hidden md:flex gap-8 font-courier font-bold text-sm uppercase tracking-wide">
              <Link href="/" className="hover:text-primary hover:underline decoration-2 underline-offset-4 decoration-primary transition-all">Class Profile</Link>
              <Link href="/gallery" className="hover:text-primary hover:underline decoration-2 underline-offset-4 decoration-primary transition-all">Squad Gallery</Link>
              <Link href="/operations" className="hover:text-primary hover:underline decoration-2 underline-offset-4 decoration-primary transition-all">Operations Board</Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="text-secondary hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </button>
              <button className="btn-primary text-sm py-2 px-6">
                LOGIN
              </button>
            </div>
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
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 opacity-80">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Contact HQ</a>
              <a href="#" className="hover:text-primary">Terms of Engagement</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
