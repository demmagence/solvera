"use client";

import { useState } from "react";
import { PIKET_ROSTER } from "../data/schedule";

export default function OperationsBoard() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);

  const activeShift = PIKET_ROSTER[activeDayIndex];

  return (
    <section id="operations" className="scroll-mt-28 space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b-4 border-secondary pb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary text-surface px-2.5 py-1 font-courier text-xs font-bold uppercase tracking-widest mb-3">
            <span>SEC-OPS-PROTOCOL // SANITATION</span>
          </div>
          <h2 className="headline-lg mb-3">Daily Maintenance Protocol</h2>
          <p className="text-base sm:text-lg opacity-90 max-w-2xl leading-relaxed border-l-4 border-secondary pl-4 font-hanken">
            Classified assignment roster for sector sanitation and operational room maintenance. All designated agents are
            strictly required to execute their assigned maintenance routines before morning briefing and post-dismissal.
          </p>
        </div>
        <div className="text-right self-start md:self-auto">
          <div className="border border-secondary px-3 py-1.5 bg-surface inline-block shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">
            <span className="label-sm opacity-70">FILE REF: CLN-SCH-01</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Shift Assignments */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-secondary pb-2">
            <h3 className="headline-md">SHIFT ASSIGNMENTS (PIKET)</h3>
            <span className="font-courier text-xs font-bold text-primary">[ 5-DAY ROTATION MATRIX ]</span>
          </div>

          {/* Quick Day Selector Buttons */}
          <div className="flex flex-wrap gap-2 pt-1">
            {PIKET_ROSTER.map((shift, idx) => (
              <button
                key={shift.day}
                type="button"
                onClick={() => setActiveDayIndex(idx)}
                className={`px-3 py-1.5 font-space-mono text-xs font-bold uppercase transition-all border border-secondary ${
                  activeDayIndex === idx
                    ? "bg-primary text-surface shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]"
                    : "bg-surface text-secondary hover:bg-surface-container shadow-sm"
                }`}
              >
                {shift.dayIndo} ({shift.day.slice(0, 3)})
              </button>
            ))}
          </div>

          {/* Active Shift Feature Card */}
          <div className="dossier-card p-6 bg-surface">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b-2 border-secondary/20 pb-3 mb-4">
              <div>
                <span className="font-courier text-xs text-primary font-bold tracking-wider uppercase">
                  OPERATIONAL DAY: {activeShift.day} ({activeShift.dayIndo})
                </span>
                <h4 className="font-space-mono text-lg font-bold text-secondary mt-0.5">{activeShift.sector}</h4>
              </div>
              <div className="font-courier text-xs border border-primary px-2.5 py-1 text-primary bg-primary/5 font-bold">
                LEAD AGENT: {activeShift.leadAgent}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-courier text-[11px] opacity-70 block mb-1">DESIGNATED SHIFT TIMEFRAMES:</span>
                <p className="font-space-mono text-xs font-bold bg-[#eae8e7] p-2 border border-secondary inline-block">
                  ⏰ {activeShift.dutyTime}
                </p>
              </div>

              <div>
                <span className="font-courier text-[11px] opacity-70 block mb-2">AGENTS ON ACTIVE DUTY ({activeShift.agents.length} OPERATIVES):</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {activeShift.agents.map((agentName, i) => (
                    <div
                      key={i}
                      className="border border-secondary bg-surface-container-low p-2 font-courier text-xs flex items-center gap-2 shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                      <strong className="text-secondary truncate">{agentName}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Full Weekly Table View */}
          <div className="bg-[#e6e3e0] border-2 border-secondary shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
            <div className="p-4 border-b border-secondary/30 bg-secondary text-surface flex justify-between items-center">
              <span className="font-courier font-bold text-xs uppercase tracking-widest">
                COMPLETE ROSTER MANIFEST
              </span>
              <span className="font-courier text-[10px] opacity-80">ALL SQUAD UNITS</span>
            </div>

            <div className="p-4 space-y-5">
              {PIKET_ROSTER.map((shift, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-3 items-center p-3 transition-colors border-b border-dashed border-secondary/30 last:border-0 ${
                    activeDayIndex === idx ? "bg-surface/80 border-l-4 border-l-primary" : ""
                  }`}
                >
                  <div className="md:col-span-3">
                    <span className="font-space-mono font-bold text-sm text-secondary block">{shift.dayIndo}</span>
                    <span className="font-courier text-[10px] opacity-60 uppercase">{shift.day}</span>
                  </div>

                  <div className="md:col-span-6 flex flex-wrap gap-1.5">
                    {shift.agents.map((agent, i) => (
                      <span
                        key={i}
                        className="border border-secondary bg-surface px-2 py-0.5 font-courier text-xs text-secondary/90"
                      >
                        {agent}
                      </span>
                    ))}
                  </div>

                  <div className="md:col-span-3 text-left md:text-right font-courier font-bold text-xs">
                    <span className={idx === activeDayIndex ? "text-primary font-bold" : "opacity-60"}>
                      {shift.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rules of Engagement */}
        <div className="lg:col-span-4 space-y-8">
          <div className="space-y-4">
            <h3 className="headline-md border-b-2 border-secondary pb-2 flex items-center gap-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
              RULES OF ENGAGEMENT
            </h3>

            <div className="dossier-card bg-surface p-6 relative">
              <div className="absolute -top-3.5 -right-3 bg-primary text-surface font-space-mono font-bold text-xs px-3 py-0.5 rotate-3 border border-primary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] z-10">
                MANDATORY PROTOCOL
              </div>

              <ul className="space-y-4 font-courier text-xs sm:text-sm mt-2">
                <li className="flex items-start gap-2.5">
                  <div className="w-3.5 h-3.5 border border-secondary mt-1 flex-shrink-0 bg-secondary"></div>
                  <p className="leading-relaxed">
                    <strong>Sweep Sector Alpha:</strong> Complete floor sweeping and desk alignment required before 0700 hours.
                  </p>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-3.5 h-3.5 border border-secondary mt-1 flex-shrink-0 bg-secondary"></div>
                  <p className="leading-relaxed">
                    <strong>Surface Decontamination:</strong> Wipe whiteboard, faculty desks, and remove debris from lab workstations.
                  </p>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-3.5 h-3.5 border border-secondary mt-1 flex-shrink-0 bg-secondary"></div>
                  <p className="leading-relaxed">
                    <strong>Waste Extraction:</strong> Empty all bins to central disposal unit and secure electricity switches at dismissal.
                  </p>
                </li>
              </ul>

              <div className="mt-6 pt-4 border-t-2 border-dashed border-secondary">
                <div className="flex items-start gap-2.5 text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <p className="font-courier text-xs font-bold leading-snug">
                    Neglecting designated duties incurs disciplinary remediation and double-shift assignment on subsequent cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Classified Protocol Seal Box */}
          <div className="bg-[#e6e3e0] p-4 border-2 border-secondary shadow-[5px_5px_0px_0px_rgba(26,26,26,1)]">
            <div className="aspect-[4/3] bg-[#d9d9d9] border border-secondary flex flex-col items-center justify-center relative overflow-hidden text-secondary/40 p-4 text-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <div className="bg-surface border border-secondary px-3 py-1 font-space-mono text-xs font-bold uppercase tracking-widest text-secondary shadow-sm">
                INSPECTION VERIFIED
              </div>
              <p className="font-courier text-[10px] text-secondary/60 mt-2">DEPT OF SANITATION & DISCIPLINE</p>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.06)_50%,rgba(0,0,0,0.06))] bg-[length:100%_4px] mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
