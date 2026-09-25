"use client";

import { useState } from "react";
import { SCHOOL_TIMETABLE, TIMETABLE_METADATA } from "../data/schedule";

export default function SchoolSchedule() {
  const [selectedDayIdx, setSelectedDayIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"timeline" | "matrix">("timeline");

  const activeDay = SCHOOL_TIMETABLE[selectedDayIdx];

  return (
    <section id="schedule" className="scroll-mt-28 space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b-4 border-secondary pb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary text-surface px-2.5 py-1 font-courier text-xs font-bold uppercase tracking-widest mb-3">
            <span>SEC-TIMETABLE // OFFICIAL SYLLABUS MATRIX</span>
          </div>
          <h2 className="headline-lg mb-2">Jadwal Pelajaran Kelas XII</h2>
          <p className="font-space-mono text-sm sm:text-base font-bold text-primary">
            {TIMETABLE_METADATA.targetClass} • {TIMETABLE_METADATA.institution}
          </p>
          <p className="text-xs sm:text-sm font-courier text-secondary/80 mt-1">
            {TIMETABLE_METADATA.academicYear} • Ref: {TIMETABLE_METADATA.source}
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 self-start md:self-auto">
          <div className="flex items-center bg-surface-container border-2 border-secondary shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] p-1">
            <button
              type="button"
              onClick={() => setViewMode("timeline")}
              className={`px-3 py-1.5 font-space-mono text-xs font-bold uppercase transition-all ${
                viewMode === "timeline"
                  ? "bg-primary text-surface shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                  : "text-secondary hover:bg-surface"
              }`}
            >
              Timeline View
            </button>
            <button
              type="button"
              onClick={() => setViewMode("matrix")}
              className={`px-3 py-1.5 font-space-mono text-xs font-bold uppercase transition-all ${
                viewMode === "matrix"
                  ? "bg-secondary text-surface shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                  : "text-secondary hover:bg-surface"
              }`}
            >
              Tabel Matriks
            </button>
          </div>
        </div>
      </div>

      {viewMode === "timeline" ? (
        /* TIMELINE VIEW (Interactive Day by Day) */
        <div className="space-y-6">
          {/* Day Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-courier text-xs font-bold mr-2 uppercase opacity-70">PILIH HARI MISI:</span>
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
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b-2 border-secondary pb-4 mb-6">
              <div>
                <span className="font-courier text-xs text-primary font-bold tracking-widest uppercase">
                  {activeDay.code} {"//"} {activeDay.day}
                </span>
                <h3 className="font-space-mono text-2xl font-bold text-secondary mt-0.5">
                  AGENDA KBM: {activeDay.dayIndo}
                </h3>
                <p className="font-courier text-xs opacity-75 mt-1">
                  Kegiatan Awal (06:30 - 07:10): <strong>{activeDay.morningActivity}</strong>
                </p>
              </div>
              <div className="font-courier text-xs bg-surface-container px-3 py-1.5 border border-secondary">
                TOTAL BLOK: {activeDay.periods.length} PERIODE
              </div>
            </div>

            {/* Periods List */}
            <div className="space-y-3.5">
              {activeDay.periods.map((period, i) => (
                <div
                  key={i}
                  className={`p-3.5 sm:p-4 border-2 border-secondary transition-all flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                    period.type === "ISTIRAHAT"
                      ? "bg-[#efeded] border-dashed opacity-85"
                      : period.type === "PEMBIASAAN"
                      ? "bg-[#f5f0e6] shadow-[2px_2px_0px_0px_rgba(26,26,26,0.6)]"
                      : period.type === "KEJURUAN"
                      ? "bg-surface hover:bg-[#f5f3f3] shadow-[4px_4px_0px_0px_rgba(26,26,26,0.9)]"
                      : "bg-surface hover:bg-[#f5f3f3] shadow-[3px_3px_0px_0px_rgba(26,26,26,0.6)]"
                  }`}
                >
                  {/* Left: Period Number & Time */}
                  <div className="flex items-center gap-3.5 min-w-[210px]">
                    <div
                      className={`w-11 h-11 border-2 border-secondary flex items-center justify-center font-space-mono font-bold text-xs sm:text-sm shrink-0 ${
                        period.type === "KEJURUAN"
                          ? "bg-primary text-surface"
                          : period.type === "ISTIRAHAT"
                          ? "bg-secondary text-surface"
                          : period.type === "PEMBIASAAN"
                          ? "bg-[#474744] text-surface"
                          : "bg-surface text-secondary"
                      }`}
                    >
                      {period.period}
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
                    {period.instructor !== "-" && (
                      <p className="font-courier text-xs opacity-80 mt-0.5">
                        Guru / Pengampu: <strong>{period.instructor}</strong>
                      </p>
                    )}
                  </div>

                  {/* Right: Room & Badge */}
                  <div className="flex items-center gap-3 self-end md:self-auto shrink-0">
                    <div className="text-right font-courier text-xs hidden sm:block">
                      <span className="opacity-60 block text-[9px]">LOKASI:</span>
                      <strong className="text-secondary">{period.room}</strong>
                    </div>
                    <span
                      className={`font-courier text-[10px] font-bold px-2 py-0.5 border ${
                        period.type === "KEJURUAN"
                          ? "border-primary text-primary bg-primary/10"
                          : period.type === "ISTIRAHAT"
                          ? "border-secondary/40 text-secondary opacity-60"
                          : period.type === "PEMBIASAAN"
                          ? "border-secondary text-secondary bg-[#eae8e7]"
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
        </div>
      ) : (
        /* MATRIX TABLE VIEW (Full aSc Timetable Grid Layout) */
        <div className="space-y-4">
          <div className="dossier-card bg-surface p-4 sm:p-6 overflow-x-auto shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
            <div className="text-center pb-4 mb-4 border-b-2 border-secondary">
              <h3 className="font-space-mono font-bold text-lg uppercase text-secondary">
                {TIMETABLE_METADATA.academicYear}
              </h3>
              <p className="font-space-mono font-bold text-primary text-2xl tracking-tight">
                {TIMETABLE_METADATA.targetClass}
              </p>
              <p className="font-courier text-xs font-bold text-secondary/70">
                {TIMETABLE_METADATA.institution}
              </p>
            </div>

            {/* Matrix Grid */}
            <table className="w-full min-w-[850px] border-collapse border-2 border-secondary font-courier text-xs">
              <thead>
                <tr className="bg-secondary text-surface text-center">
                  <th className="border border-secondary/50 p-2 font-bold w-20">HARI</th>
                  <th className="border border-secondary/50 p-1 text-[10px]">
                    SAIH<br />
                    <span className="opacity-70 text-[9px]">06:30-07:10</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[10px]">
                    1<br />
                    <span className="opacity-70 text-[9px]">07:10-07:50</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[10px]">
                    2<br />
                    <span className="opacity-70 text-[9px]">07:50-08:30</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[10px]">
                    3<br />
                    <span className="opacity-70 text-[9px]">08:30-09:10</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[9px] bg-[#333] text-surface">
                    IST 1<br />
                    <span className="opacity-70 text-[8px]">09:10-09:25</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[10px]">
                    4<br />
                    <span className="opacity-70 text-[9px]">09:25-10:05</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[10px]">
                    5<br />
                    <span className="opacity-70 text-[9px]">10:05-10:45</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[10px]">
                    6<br />
                    <span className="opacity-70 text-[9px]">10:45-11:25</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[9px] bg-[#333] text-surface">
                    IST 2<br />
                    <span className="opacity-70 text-[8px]">11:25-12:30</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[10px]">
                    7<br />
                    <span className="opacity-70 text-[9px]">12:30-13:10</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[10px]">
                    8<br />
                    <span className="opacity-70 text-[9px]">13:10-13:50</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[10px]">
                    9<br />
                    <span className="opacity-70 text-[9px]">13:50-14:30</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[10px]">
                    10<br />
                    <span className="opacity-70 text-[9px]">14:30-15:10</span>
                  </th>
                  <th className="border border-secondary/50 p-1 text-[10px]">
                    11<br />
                    <span className="opacity-70 text-[9px]">15:10-15:50</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* SENIN */}
                <tr className="border-b border-secondary">
                  <td className="p-2 font-bold font-space-mono bg-surface-container border border-secondary text-center">
                    SENIN
                  </td>
                  <td className="p-1.5 border border-secondary text-center bg-[#fdfaf5]">
                    <strong className="block text-[11px]">Upacara</strong>
                  </td>
                  <td colSpan={3} className="p-2 border border-secondary text-center bg-surface">
                    <span className="font-bold text-xs block text-primary">Matematika</span>
                    <span className="text-[10px] opacity-75">Ani Ismayani, M.Pd.</span>
                  </td>
                  <td rowSpan={5} className="border border-secondary text-center bg-[#eae8e7] text-[10px] font-bold p-1">
                    <div className="[writing-mode:vertical-rl] rotate-180 mx-auto tracking-widest text-secondary/70">
                      ISTIRAHAT KE-1
                    </div>
                  </td>
                  <td colSpan={2} className="p-2 border border-secondary text-center bg-surface">
                    <span className="font-bold text-xs block text-primary">Matematika</span>
                    <span className="text-[10px] opacity-75">Ani Ismayani, M.Pd.</span>
                  </td>
                  <td className="p-1 border border-secondary text-center bg-[#f4ebe8]">
                    <span className="font-bold text-[10px] block">Konsentrasi RPL</span>
                  </td>
                  <td rowSpan={5} className="border border-secondary text-center bg-[#eae8e7] text-[10px] font-bold p-1">
                    <div className="[writing-mode:vertical-rl] rotate-180 mx-auto tracking-widest text-secondary/70">
                      ISTIRAHAT KE-2 (ISHOMA)
                    </div>
                  </td>
                  <td colSpan={5} className="p-2 border border-secondary text-center bg-[#f4ebe8]">
                    <strong className="text-xs block text-primary">Konsentrasi RPL</strong>
                    <span className="text-[10px] opacity-80">Yaqub Hadi Permana, S.T.</span>
                  </td>
                </tr>

                {/* SELASA */}
                <tr className="border-b border-secondary">
                  <td className="p-2 font-bold font-space-mono bg-surface-container border border-secondary text-center">
                    SELASA
                  </td>
                  <td className="p-1.5 border border-secondary text-center bg-[#fdfaf5]">
                    <strong className="block text-[10px] leading-tight">Selasa Segar<br />(Senam)</strong>
                  </td>
                  <td colSpan={3} className="p-2 border border-secondary text-center bg-[#f4ebe8]">
                    <strong className="text-xs block text-primary">Konsentrasi RPL</strong>
                    <span className="text-[10px] opacity-80">Fajar M. Sukmawijaya, M.Kom.</span>
                  </td>
                  <td className="p-1 border border-secondary text-center bg-[#f4ebe8]">
                    <span className="font-bold text-[10px] block">Konsentrasi RPL</span>
                  </td>
                  <td className="p-1 border border-secondary text-center bg-surface">
                    <strong className="text-xs">L</strong>
                  </td>
                  <td className="p-1 border border-secondary text-center bg-[#f4ebe8]">
                    <span className="font-bold text-[10px] block">Konsentrasi RPL</span>
                  </td>
                  <td colSpan={5} className="p-2 border border-secondary text-center bg-[#f4ebe8]">
                    <strong className="text-xs block text-primary">Konsentrasi RPL</strong>
                    <span className="text-[10px] opacity-80">Sarah Siti Sumaerah, S.T.</span>
                  </td>
                </tr>

                {/* RABU */}
                <tr className="border-b border-secondary">
                  <td className="p-2 font-bold font-space-mono bg-surface-container border border-secondary text-center">
                    RABU
                  </td>
                  <td className="p-1.5 border border-secondary text-center bg-[#fdfaf5]">
                    <strong className="block text-[10px] leading-tight">Cahaya Rabu<br />(Literasi)</strong>
                  </td>
                  <td colSpan={3} className="p-2 border border-secondary text-center bg-surface">
                    <strong className="text-xs block text-primary">Bahasa Inggris</strong>
                    <span className="text-[10px] opacity-75">Tini Murtiningsih, S.Pd.</span>
                  </td>
                  <td colSpan={2} className="p-2 border border-secondary text-center bg-surface">
                    <strong className="text-xs block text-primary">Bahasa Indonesia</strong>
                    <span className="text-[10px] opacity-75">Eva Yuliani, S.Pd.</span>
                  </td>
                  <td className="p-1 border border-secondary text-center bg-[#f4ebe8]">
                    <span className="font-bold text-[10px] block">Konsentrasi RPL</span>
                    <span className="text-[9px] opacity-75 block">Yayat Ruhiyat, S.ST</span>
                  </td>
                  <td className="p-1 border border-secondary text-center bg-[#f4ebe8]">
                    <span className="font-bold text-[10px] block">Konsentrasi RPL</span>
                    <span className="text-[9px] opacity-75 block">Yayat Ruhiyat, S.ST</span>
                  </td>
                  <td className="p-1 border border-secondary text-center bg-surface">
                    <strong className="text-xs">BK</strong>
                  </td>
                  <td colSpan={3} className="p-2 border border-secondary text-center bg-[#f4ebe8]">
                    <strong className="text-xs block text-primary">KIK</strong>
                    <span className="text-[10px] opacity-80">Renita Anjarsari, S.Pd., M.M.</span>
                  </td>
                </tr>

                {/* KAMIS */}
                <tr className="border-b border-secondary">
                  <td className="p-2 font-bold font-space-mono bg-surface-container border border-secondary text-center">
                    KAMIS
                  </td>
                  <td className="p-1.5 border border-secondary text-center bg-[#fdfaf5]">
                    <strong className="block text-[10px] leading-tight">Kamis Alami<br />(Ekologi)</strong>
                  </td>
                  <td colSpan={2} className="p-2 border border-secondary text-center bg-[#f4ebe8]">
                    <strong className="text-xs block text-primary">Pilihan PPLG</strong>
                    <span className="text-[10px] opacity-80">Dewi Kania, S.Pd.</span>
                  </td>
                  <td className="p-1 border border-secondary text-center bg-surface">
                    <span className="font-bold text-[10px] block">Bahasa Indonesia</span>
                  </td>
                  <td className="p-1 border border-secondary text-center bg-surface">
                    <span className="font-bold text-[10px] block">Bahasa Indonesia</span>
                  </td>
                  <td colSpan={2} className="p-2 border border-secondary text-center bg-surface">
                    <strong className="text-xs block text-primary">Bahasa Inggris</strong>
                    <span className="text-[10px] opacity-75">Tini Murtiningsih, S.Pd.</span>
                  </td>
                  <td className="p-1 border border-secondary text-center bg-surface">
                    <span className="font-bold text-[10px] block">Bahasa Inggris</span>
                  </td>
                  <td colSpan={4} className="p-2 border border-secondary text-center bg-[#f4ebe8]">
                    <strong className="text-xs block text-primary">Konsentrasi RPL</strong>
                    <span className="text-[10px] opacity-80">A. Luddie Tri S., S.T. (Wali Kelas XII)</span>
                  </td>
                </tr>

                {/* JUMAT */}
                <tr>
                  <td className="p-2 font-bold font-space-mono bg-surface-container border border-secondary text-center">
                    JUM&apos;AT
                  </td>
                  <td className="p-1.5 border border-secondary text-center bg-[#fdfaf5]">
                    <strong className="block text-[11px]">Kerohanian</strong>
                  </td>
                  <td colSpan={2} className="p-2 border border-secondary text-center bg-[#f4ebe8]">
                    <strong className="text-xs block text-primary">Pilihan PPLG</strong>
                    <span className="text-[10px] opacity-80">Yaqub Hadi Permana, S.T.</span>
                  </td>
                  <td className="p-1 border border-secondary text-center bg-surface">
                    <strong className="text-xs">PKn</strong>
                  </td>
                  <td className="p-1 border border-secondary text-center bg-surface">
                    <strong className="text-xs">PKn</strong>
                  </td>
                  <td colSpan={2} className="p-2 border border-secondary text-center bg-surface">
                    <strong className="text-xs block text-primary">PABP</strong>
                    <span className="text-[10px] opacity-75">Dikdik Juanda, S.Pd.I., M.M.Pd.</span>
                  </td>
                  <td colSpan={5} className="p-2 border border-secondary text-center bg-[#f5f3f3] text-secondary/50 font-bold text-xs">
                    [ SHOLAT JUM&apos;AT & KEPULANGAN ]
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Motivational Quote Banner from Image */}
      <div className="border-2 border-secondary bg-[#e6e3e0] p-4 sm:p-5 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
        <div className="flex items-start gap-3">
          <span className="text-2xl font-space-mono text-primary font-bold shrink-0 leading-none">“</span>
          <div className="flex-1">
            <p className="font-hanken text-xs sm:text-sm font-semibold italic text-secondary leading-relaxed">
              &quot;{TIMETABLE_METADATA.quote}&quot;
            </p>
            <p className="font-courier text-[11px] font-bold text-primary mt-1 text-right sm:text-left">
              — {TIMETABLE_METADATA.quoteAuthor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
