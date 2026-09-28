"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#profile", label: "Class Profile", code: "DIR-01" },
    { href: "/#command", label: "Chain of Command", code: "ORG-02" },
    { href: "/#gallery", label: "Squad Gallery", code: "EVD-03" },
    { href: "/#dossiers", label: "Agents Roster", code: "AGT-04" },
    { href: "/#operations", label: "Piket & Ops", code: "OPS-05" },
    { href: "/#schedule", label: "Timetable", code: "SCH-06" },
    { href: "/gallery", label: "Mission Album", code: "ALB-07" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b-4 border-secondary ${
        scrolled ? "bg-surface/95 backdrop-blur shadow-md" : "bg-surface"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link
          href="/#profile"
          className="font-space-mono font-bold text-xl sm:text-2xl text-primary flex items-center gap-3 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative w-10 h-10 rounded-full border-2 border-secondary bg-surface overflow-hidden shrink-0 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/image.png"
              alt="Solvera Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="uppercase tracking-tighter leading-none group-hover:text-secondary transition-colors">
              Solvera Class
            </span>
            <span className="font-courier text-[10px] text-secondary/70 tracking-widest uppercase">
              XI • XII PPLG RPL 2
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 font-courier font-bold text-xs uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-secondary/90 hover:text-primary hover:underline decoration-2 underline-offset-4 decoration-primary transition-colors flex items-center gap-1.5"
            >
              <span className="text-[10px] text-primary/70">{link.code}:</span>
              <span>{link.label}</span>
            </Link>
          ))}
          <div className="border-l-2 border-secondary/30 pl-4">
            <span className="label-sm bg-primary text-surface px-2 py-0.5 border border-secondary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] text-[11px]">
              RESTRICTED
            </span>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 border-2 border-secondary bg-surface-container shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] active:translate-x-0.5 active:translate-y-0.5"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b-4 border-secondary px-6 py-6 shadow-xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="font-courier text-[11px] text-primary uppercase font-bold border-b border-dashed border-secondary/40 pb-2 flex justify-between items-center">
            <span>[ SYSTEM PROTOCOL 88 - ACTIVE DIRECTIVES ]</span>
            <span className="bg-secondary text-surface px-1.5 py-0.5 text-[9px]">DOC-VER-2.0</span>
          </div>
          <div className="grid grid-cols-1 gap-2 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 font-space-mono text-sm font-bold border border-secondary/30 bg-surface-container-low hover:bg-surface-container hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-courier text-xs text-primary font-bold">{link.code}</span>
                  <span className="uppercase">{link.label}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-dashed border-secondary/30 flex justify-between items-center text-xs font-courier opacity-75">
            <span>CLEARANCE: LEVEL-2 AUTHORIZED</span>
            <span className="font-bold text-primary">STATUS: OPEN</span>
          </div>
        </div>
      )}
    </header>
  );
}
