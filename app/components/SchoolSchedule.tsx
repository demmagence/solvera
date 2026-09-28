"use client";

import { useState } from "react";
import { SCHOOL_TIMETABLE } from "../data/schedule";

export default function SchoolSchedule() {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);

  const activeDay = SCHOOL_TIMETABLE[selectedDayIdx];

  return (
    <section id="schedule" className="scroll-mt-28 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b-4 border-secondary pb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary text-surface px-2.5 py-1 font-courier text-xs font-bold uppercase tracking-widest mb-3">
            <span>SEC-TIMETABLE // ACADEMIC SYLLABUS</span>
          </div>
          <h2 className="headline-lg mb-3">Tactical Timetable (Jadwal Sekolah)</h2>
          <p className="text-base sm:text-lg opacity-90 max-w-2xl leading-relaxed border-l-4 border-primary pl-4 font-hanken">
            Master operational timetable for <strong>PPLG RPL 2</strong>. Field operatives are expected to occupy their designated
            workstations and lab environments at designated deployment times.
          </p>
        </div>
        <div className="text-right self-start md:self-auto">
          <div className="border border-secondary px-3 py-1.5 bg-surface inline-block shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]">
            <span className="label-sm opacity-70">TIMETABLE REF: SCH-PPLG2</span>
          </div>
        </div>
      </div>

      {/* Day Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-courier text-xs font-bold mr-2 uppercase opacity-70">SELECT OPERATION DAY:</span>
        {SCHOOL_TIMETABLE.map((dayData, idx) => (
          <button
            key={dayData.day}
            type="button"
            onClick={() => setSelectedDayIdx(idx)}
            className={`px-4 py-2 font-space-mono text-xs font-bold uppercase transition-all border border-secondary ${
              selectedDayIdx === idx
                ? "bg-primary text-surface shadow-[3px_3px_0px_0px_rgba(26,26,26,1)]"
                : "bg-surface text-secondary hover:bg-surface-container shadow-sm"
            }`}
          >
            {dayData.dayIndo}
          </button>
        ))}
      </div>

      {/* Timetable Matrix Card */}
      <div className="dossier-card bg-surface p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b-2 border-secondary pb-4 mb-6">
          <div>
            <span className="font-courier text-xs text-primary font-bold tracking-widest uppercase">
              {activeDay.code} {"//"} {activeDay.day}
            </span>
            <h3 className="font-space-mono text-2xl font-bold text-secondary mt-0.5">
              AGENDA HARIAN: {activeDay.dayIndo}
            </h3>
          </div>
          <div className="font-courier text-xs bg-surface-container px-3 py-1 border border-secondary">
            TOTAL PERIODS: {activeDay.periods.length} BLOCKS
          </div>
        </div>

        {/* Periods List */}
        <div className="space-y-4">
          {activeDay.periods.map((period, i) => (
            <div
              key={i}
              className={`p-4 border-2 border-secondary transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                period.type === "ISTIRAHAT"
                  ? "bg-[#efeded] border-dashed opacity-80"
                  : period.type === "KEJURUAN"
                  ? "bg-surface hover:bg-[#f5f3f3] shadow-[4px_4px_0px_0px_rgba(26,26,26,0.8)]"
                  : "bg-surface hover:bg-[#f5f3f3] shadow-[3px_3px_0px_0px_rgba(26,26,26,0.6)]"
              }`}
            >
              {/* Left Info: Period Number & Time */}
              <div className="flex items-center gap-4 min-w-[220px]">
                <div
                  className={`w-10 h-10 border-2 border-secondary flex items-center justify-center font-space-mono font-bold text-sm shrink-0 ${
                    period.type === "KEJURUAN"
                      ? "bg-primary text-surface"
                      : period.type === "ISTIRAHAT"
                      ? "bg-secondary text-surface"
                      : "bg-surface text-secondary"
                  }`}
                >
                  {period.period.toString().padStart(2, "0")}
                </div>
                <div>
                  <span className="font-space-mono text-xs font-bold block text-secondary">{period.time}</span>
                  <span className="font-courier text-[10px] text-primary font-bold tracking-wider">{period.code}</span>
                </div>
              </div>

              {/* Middle: Subject & Instructor */}
              <div className="flex-1">
                <h4 className="font-space-mono text-base font-bold text-secondary leading-snug">
                  {period.subject}
                </h4>
                <p className="font-courier text-xs opacity-75 mt-0.5">
                  Pengampu / Koordinator: <strong>{period.instructor}</strong>
                </p>
              </div>

              {/* Right: Room & Badge */}
              <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                <div className="text-right font-courier text-xs">
                  <span className="opacity-60 block text-[10px]">SECTOR LOC:</span>
                  <strong className="text-secondary">{period.room}</strong>
                </div>
                <span
                  className={`font-courier text-[10px] font-bold px-2 py-0.5 border ${
                    period.type === "KEJURUAN"
                      ? "border-primary text-primary bg-primary/10"
                      : period.type === "ISTIRAHAT"
                      ? "border-secondary/40 text-secondary opacity-60"
                      : "border-secondary text-secondary"
                  }`}
                >
                  {period.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
