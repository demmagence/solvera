"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { SQUAD_SLIDES } from "../data/gallery";
import { STUDENTS_DATA } from "../data/students";

export default function SquadGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState<"ALL" | "COMMAND" | "K12" | "FIELD">("ALL");
  const cardRef = useRef<HTMLDivElement>(null);

  // Swipe / Drag Gestures for the deck
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let startX = 0;
    let startY = 0;
    let dx = 0;
    let dy = 0;
    let isDragging = false;
    let isTransitioning = false;

    const handleStart = (clientX: number, clientY: number) => {
      if (isTransitioning) return;
      isDragging = true;
      startX = clientX;
      startY = clientY;
      dx = 0;
      dy = 0;
      card.style.transition = "none";
    };

    const handleMove = (clientX: number, clientY: number, e: Event) => {
      if (!isDragging) return;
      dx = clientX - startX;
      dy = clientY - startY;
      const rotate = dx * 0.05;

      if (Math.abs(dx) > 10 && e.cancelable) {
        e.preventDefault();
      }

      card.style.transform = `translate3d(${dx}px, ${dy}px, 0) rotate(${rotate}deg)`;
    };

    const handleEnd = () => {
      if (!isDragging) return;
      isDragging = false;

      const threshold = 110;
      if (Math.abs(dx) > threshold) {
        isTransitioning = true;
        const direction = dx > 0 ? 1 : -1;
        const targetX = direction * (window.innerWidth + 200);
        const targetY = dy + (dy > 0 ? 100 : -100);
        const targetRotate = direction * 35;

        card.style.transition = "transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.35s ease-out";
        card.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) rotate(${targetRotate}deg)`;
        card.style.opacity = "0";

        setTimeout(() => {
          setCurrentSlide((prev) => {
            const len = SQUAD_SLIDES.length;
            if (direction > 0) {
              return prev === 0 ? len - 1 : prev - 1;
            } else {
              return prev === len - 1 ? 0 : prev + 1;
            }
          });

          card.style.transition = "none";
          card.style.transform = "translate3d(0, 20px, 0) scale(0.95) rotate(0deg)";
          card.style.opacity = "0";

          // Force reflow
          void card.offsetHeight;

          card.style.transition = "transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.15), opacity 0.3s ease-out";
          card.style.transform = "translate3d(0, 0, 0) scale(1) rotate(-0.5deg)";
          card.style.opacity = "1";

          setTimeout(() => {
            card.style.transform = "";
            card.style.transition = "";
            card.style.opacity = "";
            isTransitioning = false;
          }, 350);
        }, 350);
      } else {
        card.style.transition = "transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.25)";
        card.style.transform = "translate3d(0, 0, 0) rotate(-0.5deg)";

        setTimeout(() => {
          if (!isDragging && !isTransitioning) {
            card.style.transform = "";
            card.style.transition = "";
          }
        }, 250);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a") || e.button !== 0) return;
      handleStart(e.clientX, e.clientY);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY, e);
    };

    const onMouseUp = () => {
      handleEnd();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    const onTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a")) return;
      handleStart(e.touches[0].clientX, e.touches[0].clientY);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onTouchEnd);
    };

    const onTouchMove = (e: TouchEvent) => {
      handleMove(e.touches[0].clientX, e.touches[0].clientY, e);
    };

    const onTouchEnd = () => {
      handleEnd();
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };

    card.addEventListener("mousedown", onMouseDown);
    card.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      card.removeEventListener("mousedown", onMouseDown);
      card.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  // Filtered Students
  const filteredAgents = useMemo(() => {
    return STUDENTS_DATA.filter((agent) => {
      const matchesSearch =
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.alias.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (agent.roleK12 && agent.roleK12.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (agent.roleK11 && agent.roleK11.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (filterCategory === "COMMAND") {
        return agent.clearance === "L1" || agent.clearance === "L2";
      }
      if (filterCategory === "K12") {
        return (
          agent.roleK12 &&
          !agent.roleK12.includes("Field Operative") &&
          !agent.roleK12.includes("Academic Intelligence")
        );
      }
      if (filterCategory === "FIELD") {
        return agent.clearance === "FIELD";
      }

      return true;
    });
  }, [searchQuery, filterCategory]);

  const slide = SQUAD_SLIDES[currentSlide];

  return (
    <section id="gallery" className="scroll-mt-28 space-y-16">
      {/* Header */}
      <div className="border-b-4 border-secondary pb-8">
        <div className="inline-flex items-center gap-2 bg-secondary text-surface px-2.5 py-1 font-courier text-xs font-bold uppercase tracking-widest mb-3">
          <span>SEC-EVIDENCE-VAULT</span>
        </div>
        <h2 className="headline-lg mb-3">Squad Gallery & Dossiers</h2>
        <p className="text-base sm:text-lg opacity-90 max-w-3xl leading-relaxed font-hanken">
          Photographic surveillance documentation and complete personnel dossiers of Solvera Class operatives. Swipe cards
          or use tactical navigation buttons to inspect declassified visual evidence.
        </p>
      </div>

      {/* Group Photo Slideshow */}
      <div className="flex flex-col items-center pt-2">
        <div
          ref={cardRef}
          className={`bg-surface p-4 sm:p-5 border-2 border-secondary shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] rotate-[-0.5deg] w-full relative select-none cursor-grab active:cursor-grabbing will-change-transform transition-[max-width] duration-300 ease-in-out ${slide.widthClass}`}
        >
          {/* Visual classified overlay effect */}
          <div
            className={`border border-secondary relative overflow-hidden bg-secondary flex items-center justify-center transition-all duration-300 ${slide.aspect}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover pointer-events-none"
              draggable="false"
              loading={currentSlide === 0 ? "eager" : "lazy"}
            />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1))] bg-[length:100%_4px] mix-blend-overlay pointer-events-none"></div>

            {/* Top Secret Badge Overlay */}
            <div className="absolute top-4 left-4 bg-primary text-surface font-space-mono font-bold text-xs px-3 py-1 border border-primary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] z-10 tracking-widest rotate-[-3deg]">
              {slide.securityLevel}
            </div>

            <div className="absolute bottom-3 right-3 bg-secondary/80 text-surface text-[10px] font-courier px-2 py-0.5 backdrop-blur">
              DATE: {slide.date}
            </div>
          </div>

          {/* Caption & Controls */}
          <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-t border-dashed border-secondary/35 pt-4">
            <div>
              <h3 className="font-space-mono text-xl sm:text-2xl font-bold tracking-tighter uppercase">{slide.title}</h3>
              <p className="font-courier text-xs opacity-60 mt-1 uppercase">REF NO: {slide.ref}</p>
              <p className="font-hanken text-sm opacity-90 mt-2 max-w-xl leading-relaxed">{slide.desc}</p>

              <div className="flex flex-wrap items-center gap-4 mt-3.5">
                <span className="font-space-mono text-[10px] text-primary mt-0.5 tracking-wider uppercase font-bold flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                  [ SWIPE / DRAG DOSIR UNTUK BERGANTI ]
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3 shrink-0 self-end md:self-auto">
              {/* Previous / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? SQUAD_SLIDES.length - 1 : prev - 1))}
                  className="px-3 py-1 bg-surface border border-secondary text-xs font-space-mono font-bold shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:bg-secondary hover:text-surface transition-colors"
                  aria-label="Previous Slide"
                >
                  ◄ PREV
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev === SQUAD_SLIDES.length - 1 ? 0 : prev + 1))}
                  className="px-3 py-1 bg-surface border border-secondary text-xs font-space-mono font-bold shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:bg-secondary hover:text-surface transition-colors"
                  aria-label="Next Slide"
                >
                  NEXT ►
                </button>
              </div>

              <div className="border border-secondary px-3 py-1 flex items-center gap-2 bg-surface-container-low">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                <span className="font-courier text-xs font-bold uppercase">
                  EVIDENCE {currentSlide + 1} OF {SQUAD_SLIDES.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Indicator Dots */}
        <div className="flex items-center gap-2 mt-6">
          {SQUAD_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 transition-all border border-secondary ${
                idx === currentSlide ? "w-8 bg-primary" : "w-2.5 bg-secondary/40 hover:bg-secondary"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-secondary opacity-30 my-12"></div>

      {/* ======================================================== */}
      {/* AGENT DOSSIERS (35 COMPLETE STUDENTS LIST) */}
      {/* ======================================================== */}
      <div id="dossiers" className="scroll-mt-28 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-secondary pb-4">
          <div>
            <h3 className="headline-md border-l-4 border-primary pl-4">AGENT DOSSIERS</h3>
            <p className="font-hanken text-xs sm:text-sm opacity-80 pl-4 mt-1">
              Showing <strong>{filteredAgents.length}</strong> of <strong>{STUDENTS_DATA.length}</strong> classified operatives.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="Search agent / alias / role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 pl-9 bg-surface border-2 border-secondary font-courier text-xs focus:outline-none focus:border-primary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] placeholder:text-secondary/50"
              />
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute left-2.5 top-2.5 text-secondary opacity-60 pointer-events-none"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-2 text-xs font-bold text-secondary/60 hover:text-secondary"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-courier text-xs font-bold mr-2 uppercase opacity-60">FILTER DOSSIERS:</span>
          {(
            [
              { key: "ALL", label: `ALL AGENTS (${STUDENTS_DATA.length})` },
              { key: "COMMAND", label: "COMMAND STAFF (L1/L2)" },
              { key: "K12", label: "KELAS 12 ROSTER" },
              { key: "FIELD", label: "FIELD OPERATIVES" },
            ] as const
          ).map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setFilterCategory(cat.key)}
              className={`px-3 py-1 font-courier text-xs font-bold uppercase transition-all border border-secondary ${
                filterCategory === cat.key
                  ? "bg-secondary text-surface shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                  : "bg-surface text-secondary hover:bg-surface-container"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-[#e6e3e0] p-4 border-2 border-secondary shadow-[5px_5px_0px_0px_rgba(26,26,26,1)] relative transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(26,26,26,1)] flex flex-col justify-between"
            >
              {/* Agent Tag Tab */}
              <div className="absolute -top-[13px] left-[-2px] bg-surface border-2 border-secondary px-2 py-0.5 z-10 flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="font-courier text-[10px] font-bold tracking-wider">{agent.id}</span>
              </div>

              {/* Clearance Stamp */}
              <div className="absolute top-3 right-3">
                <span
                  className={`font-courier text-[9px] font-bold px-1.5 py-0.5 border ${
                    agent.clearance === "L2"
                      ? "border-primary text-primary bg-primary/10"
                      : "border-secondary text-secondary opacity-70"
                  }`}
                >
                  {agent.clearance}
                </span>
              </div>

              <div>
                {/* Visual Avatar Box */}
                <div className="bg-surface p-2.5 pb-3 border border-secondary shadow-sm mb-3 mt-1">
                  <div className="aspect-[4/3] bg-[#d9d9d9] flex flex-col items-center justify-center border border-secondary/40 text-secondary/40 relative overflow-hidden">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span className="font-courier text-[9px] tracking-widest uppercase mt-1 opacity-70">
                      DOSSIER PHOTO SECURED
                    </span>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.06)_50%,rgba(0,0,0,0.06))] bg-[length:100%_4px] mix-blend-overlay"></div>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  <h4 className="font-space-mono text-base font-bold tracking-tight text-secondary leading-tight">
                    {agent.name}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-courier text-xs font-bold text-primary">ALIAS: &quot;{agent.alias}&quot;</span>
                    <span className="font-courier text-[10px] opacity-60">({agent.nickname})</span>
                  </div>
                </div>

                {/* Roles Details */}
                <div className="border-t border-dashed border-secondary/40 pt-2.5 mb-3 text-xs font-hanken space-y-1">
                  {agent.roleK12 && (
                    <div className="flex items-start gap-1">
                      <span className="font-courier font-bold text-[10px] text-primary shrink-0">[XII]:</span>
                      <span className="font-semibold text-secondary">{agent.roleK12}</span>
                    </div>
                  )}
                  {agent.roleK11 && (
                    <div className="flex items-start gap-1 text-secondary/75 text-[11px]">
                      <span className="font-courier text-[10px] opacity-60 shrink-0">[XI]:</span>
                      <span>{agent.roleK11}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Specialties */}
              <div className="border-t border-secondary pt-2.5 space-y-1.5 bg-surface/40 -mx-4 -mb-4 p-3">
                <div className="flex items-center gap-1.5 text-xs text-secondary/90">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary shrink-0">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span className="font-hanken text-[11px] font-medium leading-tight">{agent.specialty1}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-secondary/90">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary shrink-0">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span className="font-hanken text-[11px] font-medium leading-tight">{agent.specialty2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="p-8 border-2 border-dashed border-secondary text-center bg-surface-container font-courier">
            <p className="text-sm font-bold text-primary">[ NO MATCHING DOSSIER FOUND IN ARCHIVE ]</p>
            <p className="text-xs opacity-70 mt-1">Try refining your search keyword or clearing the filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
