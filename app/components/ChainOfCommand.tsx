"use client";

import { useState } from "react";

interface AgentPhotoProps {
  photo?: string;
  name: string;
  id?: string;
  alias?: string;
  size?: "sm" | "md" | "lg" | "full";
}

function AgentPhoto({ photo, name, id, alias, size = "md" }: AgentPhotoProps) {
  const sizeClasses = {
    sm: "w-11 h-14 sm:w-12 sm:h-16",
    md: "w-20 h-26 sm:w-24 sm:h-32",
    lg: "w-24 h-32 sm:w-28 sm:h-36",
    full: "w-full aspect-[4/5]",
  }[size];

  return (
    <div
      className={`relative ${sizeClasses} shrink-0 bg-secondary border-2 border-secondary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] overflow-hidden group select-none`}
    >
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#242424] text-surface p-1 text-center">
          <span className="font-space-mono text-[8px] font-bold text-primary tracking-widest">[ CLASSIFIED ]</span>
          <span className="font-courier text-[7px] opacity-60 mt-0.5">NO PHOTO</span>
        </div>
      )}

      {/* Scanline Noir Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.12)_50%,rgba(0,0,0,0.12))] bg-[length:100%_4px] pointer-events-none opacity-60"></div>

      {/* ID Badge */}
      {id && (
        <span className="absolute top-1 left-1 bg-primary text-surface font-space-mono text-[8px] font-bold px-1 py-0.2 shadow-[1px_1px_0px_0px_rgba(26,26,26,1)]">
          {id}
        </span>
      )}

      {/* Alias */}
      {alias && (
        <span className="absolute bottom-1 right-1 bg-secondary/85 text-surface font-courier text-[7px] sm:text-[8px] px-1 backdrop-blur">
          {alias}
        </span>
      )}
    </div>
  );
}

export default function ChainOfCommand() {
  const [selectedClass, setSelectedClass] = useState<"12" | "11">("12");

  return (
    <section id="command" className="scroll-mt-28 space-y-12">
      {/* Section Header & Interactive Class Period Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-secondary pb-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-secondary text-surface px-2.5 py-1 font-courier text-xs font-bold uppercase tracking-widest mb-3">
            <span>SEC-COMMAND-MATRIX</span>
          </div>
          <h2 className="headline-md">Chain of Command Hierarchy</h2>
          <p className="font-hanken text-sm sm:text-base opacity-85 mt-1 max-w-xl">
            Command structure and division responsibilities. Switch periods below to examine operational rosters with complete operative portraits.
          </p>
        </div>

        {/* Tactical Class Period Switcher */}
        <div className="flex items-center gap-2 bg-surface-container p-1.5 border-2 border-secondary shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] self-start md:self-auto">
          <button
            type="button"
            onClick={() => setSelectedClass("12")}
            className={`px-4 py-2 font-space-mono text-xs font-bold uppercase transition-all ${
              selectedClass === "12"
                ? "bg-primary text-surface shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                : "text-secondary hover:bg-surface"
            }`}
          >
            ★ Kelas XII (Current)
          </button>
          <button
            type="button"
            onClick={() => setSelectedClass("11")}
            className={`px-4 py-2 font-space-mono text-xs font-bold uppercase transition-all ${
              selectedClass === "11"
                ? "bg-secondary text-surface shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                : "text-secondary hover:bg-surface"
            }`}
          >
            Kelas XI (Archive)
          </button>
        </div>
      </div>

      {/* Roster Badge Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-surface-container-low border border-secondary px-4 py-3 font-courier text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
          <span className="font-bold text-secondary uppercase">
            {selectedClass === "12"
              ? "ACTIVE PERIOD: KELAS XII PPLG RPL 2 // CURRENT MANDATE"
              : "HISTORICAL LOG: KELAS XI PPLG RPL 2 // PREVIOUS OPERATION"}
          </span>
        </div>
        <span className="text-[11px] opacity-60">DOC-REF: ORG-{selectedClass}-MTRX</span>
      </div>

      {/* ======================================================== */}
      {/* LEVEL 1: WALI KELAS (COMMANDING OFFICER) */}
      {/* ======================================================== */}
      <div className="flex flex-col items-center">
        <div className="dossier-card w-full max-w-sm p-6 text-center z-10 bg-surface">
          <div className="absolute top-[-10px] left-[-10px] bg-primary text-surface px-2.5 py-1 label-sm">
            Clearance L1
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-secondary mx-auto mb-3 flex items-center justify-center bg-surface-container shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <circle cx="12" cy="11" r="3" />
            </svg>
          </div>
          <h3 className="font-space-mono font-bold text-xl mb-0.5">
            WALI KELAS {selectedClass === "12" ? "XII" : "XI"}
          </h3>
          <p className="label-md text-primary mb-3">
            {selectedClass === "12" ? "A. Luddie Tri S., S.T." : "Sarah Siti Sumaerah, S.T."}
          </p>
          <div className="border-t border-dashed border-secondary/40 pt-2.5 flex justify-between items-center text-xs font-courier">
            <span className="opacity-70">ROLE: ADVISOR</span>
            <span className="text-primary font-bold">
              {selectedClass === "12" ? "ACTIVE COMMAND" : "HISTORICAL COMMAND"}
            </span>
          </div>
        </div>

        {/* Tree connector stem */}
        <div className="w-0.5 h-10 bg-secondary"></div>
      </div>

      {/* ======================================================== */}
      {/* CONDITIONAL ORGANIGRAM RENDERING */}
      {/* ======================================================== */}
      {selectedClass === "12" ? (
        /* KELAS 12 ORGANIGRAM */
        <div className="space-y-12 animate-in fade-in duration-200">
          {/* LEVEL 2: KM & WAKIL KELAS 12 */}
          <div>
            <div className="text-center mb-6">
              <span className="bg-secondary text-surface px-4 py-1 font-courier font-bold uppercase tracking-widest text-xs border-l-4 border-r-4 border-primary inline-block">
                Level 2 // Executive Command (Kelas 12)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* KM KELAS 12 */}
              <div className="dossier-card p-5 sm:p-6 bg-surface flex flex-col sm:flex-row gap-5 items-start">
                <AgentPhoto
                  photo="/students/agt-27.jpg"
                  name="Panca Satia Nugraha"
                  id="AGT-27"
                  alias="MARSHAL"
                  size="lg"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="label-sm opacity-60 text-[10px]">CHIEF OPERATIVE</span>
                    <span className="font-courier text-[10px] text-primary font-bold bg-surface-container px-1.5 py-0.5 border border-secondary/40">
                      CLEARANCE L2
                    </span>
                  </div>
                  <h3 className="font-space-mono font-bold text-lg sm:text-xl text-secondary">
                    KETUA MURID (KM)
                  </h3>
                  <p className="font-space-mono font-bold text-primary text-base mt-0.5">
                    PANCA SATIA NUGRAHA
                  </p>
                  <div className="border-t border-secondary/40 pt-2.5 mt-2.5">
                    <p className="text-xs sm:text-sm font-hanken opacity-85 leading-relaxed">
                      Pemimpin skuad operasional kelas XII, koordinator komando utama, dan penanggung jawab tertinggi pelaksanaan seluruh misi akademik dan disiplin.
                    </p>
                  </div>
                </div>
              </div>

              {/* WAKIL KM KELAS 12 */}
              <div className="dossier-card p-5 sm:p-6 bg-surface flex flex-col sm:flex-row gap-5 items-start">
                <AgentPhoto
                  photo="/students/agt-04.jpg"
                  name="Dika Prayoga Gunawan"
                  id="AGT-04"
                  alias="AEGIS"
                  size="lg"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="label-sm opacity-60 text-[10px]">DEPUTY CHIEF</span>
                    <span className="font-courier text-[10px] text-primary font-bold bg-surface-container px-1.5 py-0.5 border border-secondary/40">
                      CLEARANCE L2
                    </span>
                  </div>
                  <h3 className="font-space-mono font-bold text-lg sm:text-xl text-secondary">
                    WAKIL KETUA MURID
                  </h3>
                  <p className="font-space-mono font-bold text-primary text-base mt-0.5">
                    DIKA PRAYOGA GUNAWAN
                  </p>
                  <div className="border-t border-secondary/40 pt-2.5 mt-2.5">
                    <p className="text-xs sm:text-sm font-hanken opacity-85 leading-relaxed">
                      Mendampingi komando KM, mengoordinasikan eksekusi taktis divisi internal, serta memastikan rantai logistik dan kontinuitas skuad berjalan presisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LEVEL 3: SEKRETARIAT & BENDAHARA KELAS 12 */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="bg-secondary text-surface px-4 py-1 font-courier font-bold uppercase tracking-widest text-xs border-l-4 border-r-4 border-primary inline-block">
                Level 3 // Core Administration & Treasury (Kelas 12)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Sekretaris */}
              <div className="dossier-card p-4 sm:p-5 bg-[#e6e3e0] flex flex-col justify-between">
                <div>
                  <AgentPhoto
                    photo="/students/agt-35.jpg"
                    name="Syahira Bilqis Humaira"
                    id="AGT-35"
                    alias="ORACLE"
                    size="full"
                  />
                  <div className="flex justify-between items-center mb-0.5 mt-3">
                    <span className="label-sm opacity-60 text-[10px]">REGISTRY LEAD</span>
                    <span className="font-courier text-[9px] text-primary font-bold">L2</span>
                  </div>
                  <h4 className="font-space-mono font-bold text-base">SEKRETARIS</h4>
                  <p className="font-space-mono font-bold text-primary text-xs sm:text-sm mt-0.5 mb-2 truncate">
                    SYAHIRA BILQIS HUMAIRA
                  </p>
                </div>
                <div className="border-t border-secondary/40 pt-2 text-xs font-hanken opacity-80 leading-relaxed">
                  Pencatatan logbook taktis, pengarsipan berkas dokumen penting, dan pengelolaan administrasi kelas.
                </div>
              </div>

              {/* Wakil Sekretaris */}
              <div className="dossier-card p-4 sm:p-5 bg-[#e6e3e0] flex flex-col justify-between">
                <div>
                  <AgentPhoto
                    photo="/students/agt-07.jpg"
                    name="Fariz Dzulhami"
                    id="AGT-07"
                    alias="WRENCH"
                    size="full"
                  />
                  <div className="flex justify-between items-center mb-0.5 mt-3">
                    <span className="label-sm opacity-60 text-[10px]">REGISTRY DEPUTY</span>
                    <span className="font-courier text-[9px] text-primary font-bold">L2</span>
                  </div>
                  <h4 className="font-space-mono font-bold text-base">WAKIL SEKRETARIS</h4>
                  <p className="font-space-mono font-bold text-primary text-xs sm:text-sm mt-0.5 mb-2 truncate">
                    FARIZ DZULHAMI
                  </p>
                </div>
                <div className="border-t border-secondary/40 pt-2 text-xs font-hanken opacity-80 leading-relaxed">
                  Mendukung dokumentasi berkas harian, presensi, serta pendataan sistem operasional kelas.
                </div>
              </div>

              {/* Bendahara */}
              <div className="dossier-card p-4 sm:p-5 bg-[#e6e3e0] flex flex-col justify-between">
                <div>
                  <AgentPhoto
                    photo="/students/agt-12.jpg"
                    name="Kiano Devaro Ridho"
                    id="AGT-12"
                    alias="LOCKDOWN"
                    size="full"
                  />
                  <div className="flex justify-between items-center mb-0.5 mt-3">
                    <span className="label-sm opacity-60 text-[10px]">FISCAL DIRECTOR</span>
                    <span className="font-courier text-[9px] text-primary font-bold">L2</span>
                  </div>
                  <h4 className="font-space-mono font-bold text-base">BENDAHARA</h4>
                  <p className="font-space-mono font-bold text-primary text-xs sm:text-sm mt-0.5 mb-2 truncate">
                    KIANO DEVARO RIDHO
                  </p>
                </div>
                <div className="border-t border-secondary/40 pt-2 text-xs font-hanken opacity-80 leading-relaxed">
                  Pengawasan peredaran kas operasional, alokasi anggaran misi, dan pengelolaan keuangan skuad.
                </div>
              </div>

              {/* Wakil Bendahara */}
              <div className="dossier-card p-4 sm:p-5 bg-[#e6e3e0] flex flex-col justify-between">
                <div>
                  <AgentPhoto
                    photo="/students/agt-21.jpg"
                    name="Muhammad Deryl Fabiensyah"
                    id="AGT-21"
                    alias="ANVIL"
                    size="full"
                  />
                  <div className="flex justify-between items-center mb-0.5 mt-3">
                    <span className="label-sm opacity-60 text-[10px]">FISCAL DEPUTY</span>
                    <span className="font-courier text-[9px] text-primary font-bold">L2</span>
                  </div>
                  <h4 className="font-space-mono font-bold text-base">WAKIL BENDAHARA</h4>
                  <p className="font-space-mono font-bold text-primary text-xs sm:text-sm mt-0.5 mb-2 truncate">
                    M DERYL FABIENSYAH
                  </p>
                </div>
                <div className="border-t border-secondary/40 pt-2 text-xs font-hanken opacity-80 leading-relaxed">
                  Rekonsiliasi transaksi kas, pencatatan belanja logistik, dan audit saldo operasional rutin.
                </div>
              </div>
            </div>
          </div>

          {/* LEVEL 4: SEKSI-SEKSI (SIE) KELAS 12 */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="bg-secondary text-surface px-4 py-1 font-courier font-bold uppercase tracking-widest text-xs border-l-4 border-r-4 border-primary inline-block">
                Level 4 // Field Divisions (Seksi Operasional Kelas 12)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Sie Kebersihan */}
              <div className="dossier-card p-5 sm:p-6 bg-surface flex flex-col sm:flex-row gap-4 items-start">
                <AgentPhoto
                  photo="/students/agt-13.jpg"
                  name="M Arkan Raihan Nugraha"
                  id="AGT-13"
                  alias="HAWK"
                  size="md"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <span className="label-sm opacity-60 text-[10px]">SECTOR SANITATION</span>
                    <span className="font-courier text-[10px] text-primary font-bold">L2</span>
                  </div>
                  <h4 className="font-space-mono font-bold text-base sm:text-lg">SIE KEBERSIHAN</h4>
                  <p className="font-space-mono font-bold text-primary text-xs sm:text-sm mt-0.5">
                    M ARKAN RAIHAN NUGRAHA
                  </p>
                  <div className="border-t border-secondary/40 pt-2.5 mt-2.5 text-xs font-hanken opacity-85 leading-relaxed">
                    Memimpin protokol sterilisasi ruang kelas, inspeksi jadwal piket harian, dan kenyamanan lingkungan kerja.
                  </div>
                </div>
              </div>

              {/* Sie Peralatan */}
              <div className="dossier-card p-5 sm:p-6 bg-surface flex flex-col sm:flex-row gap-4 items-start">
                <AgentPhoto
                  photo="/students/agt-10.jpg"
                  name="Jibril Ibni Jubair"
                  id="AGT-10"
                  alias="TITAN"
                  size="md"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <span className="label-sm opacity-60 text-[10px]">ARMOURY & LOGISTICS</span>
                    <span className="font-courier text-[10px] text-primary font-bold">L2</span>
                  </div>
                  <h4 className="font-space-mono font-bold text-base sm:text-lg">SIE PERALATAN</h4>
                  <p className="font-space-mono font-bold text-primary text-xs sm:text-sm mt-0.5">
                    JIBRIL IBNI JUBAIR
                  </p>
                  <div className="border-t border-secondary/40 pt-2.5 mt-2.5 text-xs font-hanken opacity-85 leading-relaxed">
                    Inventarisasi sarana hardware, pengawasan perangkat keras/elektronik di ruang belajar, dan kesiapan fasilitas.
                  </div>
                </div>
              </div>

              {/* Sie Keagamaan */}
              <div className="dossier-card p-5 sm:p-6 bg-surface flex flex-col sm:flex-row gap-4 items-start">
                <AgentPhoto
                  photo="/students/agt-01.jpg"
                  name="Adiftya Rahmad"
                  id="AGT-01"
                  alias="VANGUARD"
                  size="md"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <span className="label-sm opacity-60 text-[10px]">MORAL & SPIRITUAL</span>
                    <span className="font-courier text-[10px] text-primary font-bold">L2</span>
                  </div>
                  <h4 className="font-space-mono font-bold text-base sm:text-lg">SIE KEAGAMAAN</h4>
                  <p className="font-space-mono font-bold text-primary text-xs sm:text-sm mt-0.5">
                    ADIFTYA RAHMAD
                  </p>
                  <div className="border-t border-secondary/40 pt-2.5 mt-2.5 text-xs font-hanken opacity-85 leading-relaxed">
                    Pembinaan ketahanan moral spiritual skuad, memimpin doa/ibadah bersama, dan menjaga etika serta keharmonisan.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* KELAS 11 ORGANIGRAM (HISTORICAL) */
        <div className="space-y-12 animate-in fade-in duration-200">
          {/* LEVEL 2: KM & WAKIL KELAS 11 */}
          <div>
            <div className="text-center mb-6">
              <span className="bg-secondary text-surface px-4 py-1 font-courier font-bold uppercase tracking-widest text-xs border-l-4 border-r-4 border-primary inline-block">
                Level 2 // Executive Command (Kelas 11 Archive)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* KM KELAS 11 */}
              <div className="dossier-card p-5 sm:p-6 bg-surface flex flex-col sm:flex-row gap-5 items-start">
                <AgentPhoto
                  photo="/students/agt-19.jpg"
                  name="Muhammad Arsa Prayata"
                  id="AGT-19"
                  alias="APEX"
                  size="lg"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="label-sm opacity-60 text-[10px]">COMMANDER (RET.)</span>
                    <span className="font-courier text-[10px] text-primary font-bold bg-surface-container px-1.5 py-0.5 border border-secondary/40">
                      CLEARANCE L2
                    </span>
                  </div>
                  <h3 className="font-space-mono font-bold text-lg sm:text-xl text-secondary">
                    KETUA MURID (KM)
                  </h3>
                  <p className="font-space-mono font-bold text-primary text-base mt-0.5">
                    MUHAMMAD ARSA PRAYATA
                  </p>
                  <div className="border-t border-secondary/40 pt-2.5 mt-2.5">
                    <p className="text-xs sm:text-sm font-hanken opacity-85 leading-relaxed">
                      Memimpin skuad operasional kelas XI PPLG RPL 2, koordinasi taktis tingkat tinggi, dan penanggung jawab utama misi awal pembentukan Solvera.
                    </p>
                  </div>
                </div>
              </div>

              {/* WAKIL KM KELAS 11 */}
              <div className="dossier-card p-5 sm:p-6 bg-surface flex flex-col sm:flex-row gap-5 items-start">
                <AgentPhoto
                  photo="/students/agt-13.jpg"
                  name="M. Arkan Raihan Nugraha"
                  id="AGT-13"
                  alias="HAWK"
                  size="lg"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="label-sm opacity-60 text-[10px]">DEPUTY COMMANDER</span>
                    <span className="font-courier text-[10px] text-primary font-bold bg-surface-container px-1.5 py-0.5 border border-secondary/40">
                      CLEARANCE L2
                    </span>
                  </div>
                  <h3 className="font-space-mono font-bold text-lg sm:text-xl text-secondary">
                    WAKIL KETUA MURID
                  </h3>
                  <p className="font-space-mono font-bold text-primary text-base mt-0.5">
                    M. ARKAN RAIHAN NUGRAHA
                  </p>
                  <div className="border-t border-secondary/40 pt-2.5 mt-2.5">
                    <p className="text-xs sm:text-sm font-hanken opacity-85 leading-relaxed">
                      Mendukung komando utama periode kelas XI, koordinasi logistik taktis internal, dan penjamin kontinuitas operasional skuad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIVISI SEKRETARIS & BENDAHARA KELAS 11 */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="bg-secondary text-surface px-4 py-1 font-courier font-bold uppercase tracking-widest text-xs border-l-4 border-r-4 border-primary inline-block">
                Level 3 // Administration & Finance (Kelas 11)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Divisi Sekretaris XI */}
              <div className="dossier-card p-5 sm:p-6 bg-[#e6e3e0]">
                <h4 className="font-space-mono font-bold text-base sm:text-lg mb-4 flex items-center justify-between border-b border-secondary/40 pb-2">
                  <span>DIVISI SEKRETARIS (XI)</span>
                  <span className="font-courier text-xs text-primary font-bold">3 OPERATIVES</span>
                </h4>
                <div className="space-y-3 font-courier text-xs">
                  <div className="p-2.5 bg-surface border border-secondary flex items-center gap-3">
                    <AgentPhoto
                      photo="/students/agt-35.jpg"
                      name="Syahira Bilqis Humaira"
                      id="AGT-35"
                      size="sm"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <strong className="text-secondary font-bold">01. Syahira Bilqis Humaira</strong>
                        <span className="text-[10px] text-primary font-bold">ORACLE</span>
                      </div>
                      <span className="opacity-70 text-[11px] block mt-0.5">Logbook & Arsip Taktis</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-surface border border-secondary flex items-center gap-3">
                    <AgentPhoto
                      photo="/students/agt-30.jpg"
                      name="Rahma Santika Al Anshor"
                      id="AGT-30"
                      size="sm"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <strong className="text-secondary font-bold">02. Rahma Santika Al Anshor</strong>
                        <span className="text-[10px] text-primary font-bold">DOSSIER</span>
                      </div>
                      <span className="opacity-70 text-[11px] block mt-0.5">Risalah Rapat & Profil</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-surface border border-secondary flex items-center gap-3">
                    <AgentPhoto
                      photo="/students/agt-28.jpg"
                      name="Putri Maulidia Yusuf"
                      id="AGT-28"
                      size="sm"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <strong className="text-secondary font-bold">03. Putri Maulidia Yusuf</strong>
                        <span className="text-[10px] text-primary font-bold">SCRIBE</span>
                      </div>
                      <span className="opacity-70 text-[11px] block mt-0.5">Presensi & Ketertiban</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divisi Bendahara XI */}
              <div className="dossier-card p-5 sm:p-6 bg-[#e6e3e0]">
                <h4 className="font-space-mono font-bold text-base sm:text-lg mb-4 flex items-center justify-between border-b border-secondary/40 pb-2">
                  <span>DIVISI BENDAHARA (XI)</span>
                  <span className="font-courier text-xs text-primary font-bold">3 OPERATIVES</span>
                </h4>
                <div className="space-y-3 font-courier text-xs">
                  <div className="p-2.5 bg-surface border border-secondary flex items-center gap-3">
                    <AgentPhoto
                      photo="/students/agt-25.jpg"
                      name="Nazwatus Shifa"
                      id="AGT-25"
                      size="sm"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <strong className="text-secondary font-bold">01. Nazwatus Shifa</strong>
                        <span className="text-[10px] text-primary font-bold">VAULT</span>
                      </div>
                      <span className="opacity-70 text-[11px] block mt-0.5">Aliran Kas & Anggaran</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-surface border border-secondary flex items-center gap-3">
                    <AgentPhoto
                      photo="/students/agt-32.jpg"
                      name="Resna Rahmawati"
                      id="AGT-32"
                      size="sm"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <strong className="text-secondary font-bold">02. Resna Rahmawati</strong>
                        <span className="text-[10px] text-primary font-bold">RESERVE</span>
                      </div>
                      <span className="opacity-70 text-[11px] block mt-0.5">Pelaporan & Iuran</span>
                    </div>
                  </div>

                  <div className="p-2.5 bg-surface border border-secondary flex items-center gap-3">
                    <AgentPhoto
                      photo="/students/agt-24.jpg"
                      name="Muhammad Rofi'i Alawi"
                      id="AGT-24"
                      size="sm"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <strong className="text-secondary font-bold">03. Muhammad Rofi&apos;i Alawi</strong>
                        <span className="text-[10px] text-primary font-bold">LEDGER</span>
                      </div>
                      <span className="opacity-70 text-[11px] block mt-0.5">Audit & Rekonsiliasi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEKSI-SEKSI LAPANGAN KELAS 11 */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="bg-secondary text-surface px-4 py-1 font-courier font-bold uppercase tracking-widest text-xs border-l-4 border-r-4 border-primary inline-block">
                Level 4 // Field Operations (Kelas 11)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Seksi Keagamaan */}
              <div className="dossier-card p-5 bg-surface flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AgentPhoto photo="/students/agt-08.jpg" name="Ibnu Hambal" id="AGT-08" size="sm" />
                    <AgentPhoto photo="/students/agt-11.jpg" name="Jihan Fauziah" id="AGT-11" size="sm" />
                  </div>
                  <h5 className="font-space-mono font-bold text-sm text-primary mb-1">SEKSI KEAGAMAAN</h5>
                  <p className="font-courier text-xs font-bold mb-1">Ibnu Hambal & Jihan Fauziah</p>
                </div>
                <p className="font-hanken text-xs opacity-75 mt-2 pt-2 border-t border-secondary/30">
                  Pembinaan spiritual skuad dan pengawalan kegiatan ibadah.
                </p>
              </div>

              {/* Seksi Pendidikan */}
              <div className="dossier-card p-5 bg-surface flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AgentPhoto photo="/students/agt-02.jpg" name="Andhika Noor Hidayat" id="AGT-02" size="sm" />
                    <AgentPhoto photo="/students/agt-29.jpg" name="Rafa Khadafi" id="AGT-29" size="sm" />
                  </div>
                  <h5 className="font-space-mono font-bold text-sm text-primary mb-1">SEKSI PENDIDIKAN</h5>
                  <p className="font-courier text-xs font-bold mb-1">Andhika Noor & Rafa Khadafi</p>
                </div>
                <p className="font-hanken text-xs opacity-75 mt-2 pt-2 border-t border-secondary/30">
                  Strategi kurikulum intelijen dan koordinasi persiapan ujian.
                </p>
              </div>

              {/* Seksi Olahraga */}
              <div className="dossier-card p-5 bg-surface flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AgentPhoto photo="/students/agt-10.jpg" name="Jibril Ibni Jubair" id="AGT-10" size="sm" />
                    <AgentPhoto name="Muhammad Asyraf" id="AGT-20" size="sm" />
                  </div>
                  <h5 className="font-space-mono font-bold text-sm text-primary mb-1">SEKSI OLAHRAGA</h5>
                  <p className="font-courier text-xs font-bold mb-1">Jibril Ibni & M. Asyraf</p>
                </div>
                <p className="font-hanken text-xs opacity-75 mt-2 pt-2 border-t border-secondary/30">
                  Kebugaran fisik dan koordinasi kegiatan keolahragaan skuad.
                </p>
              </div>

              {/* Seksi Kebersihan */}
              <div className="dossier-card p-5 bg-surface flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AgentPhoto photo="/students/agt-04.jpg" name="Dika Prayoga Gunawan" id="AGT-04" size="sm" />
                    <AgentPhoto photo="/students/agt-15.jpg" name="Moch Keanu Alvino" id="AGT-15" size="sm" />
                  </div>
                  <h5 className="font-space-mono font-bold text-sm text-primary mb-1">SEKSI KEBERSIHAN</h5>
                  <p className="font-courier text-xs font-bold mb-1">Dika Prayoga & Moch Keanu</p>
                </div>
                <p className="font-hanken text-xs opacity-75 mt-2 pt-2 border-t border-secondary/30">
                  Sterilisasi sektor utama dan pemeliharaan kebersihan kelas.
                </p>
              </div>

              {/* Seksi Peralatan */}
              <div className="dossier-card p-5 bg-surface flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AgentPhoto photo="/students/agt-21.jpg" name="Muhammad Deryl" id="AGT-21" size="sm" />
                    <AgentPhoto photo="/students/agt-07.jpg" name="Fariz Dzulhami" id="AGT-07" size="sm" />
                  </div>
                  <h5 className="font-space-mono font-bold text-sm text-primary mb-1">SEKSI PERALATAN</h5>
                  <p className="font-courier text-xs font-bold mb-1">M. Deryl & Fariz Dzulhami</p>
                </div>
                <p className="font-hanken text-xs opacity-75 mt-2 pt-2 border-t border-secondary/30">
                  Inventarisasi perkakas dan fasilitas presentasi lab.
                </p>
              </div>

              {/* Seksi Keamanan */}
              <div className="dossier-card p-5 bg-surface flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AgentPhoto photo="/students/agt-12.jpg" name="Kiano Devaro Ridho" id="AGT-12" size="sm" />
                  </div>
                  <h5 className="font-space-mono font-bold text-sm text-primary mb-1">SEKSI KEAMANAN</h5>
                  <p className="font-courier text-xs font-bold mb-1">Kiano Devaro Ridho</p>
                </div>
                <p className="font-hanken text-xs opacity-75 mt-2 pt-2 border-t border-secondary/30">
                  Patroli ketertiban sektor dan penegakan protokol disiplin.
                </p>
              </div>
            </div>

            {/* Seksi Dokumentasi XI */}
            <div className="dossier-card p-6 bg-[#e6e3e0] max-w-3xl mx-auto">
              <h5 className="font-space-mono font-bold text-base text-primary mb-4 text-center">
                SEKSI DOKUMENTASI (4 OPERATIVES)
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-courier text-xs">
                <div className="p-3 border border-secondary bg-surface flex flex-col items-center gap-2">
                  <AgentPhoto photo="/students/agt-11.jpg" name="Jihan Fauziah" id="AGT-11" size="sm" />
                  <span className="font-bold">Jihan</span>
                </div>
                <div className="p-3 border border-secondary bg-surface flex flex-col items-center gap-2">
                  <AgentPhoto photo="/students/agt-26.jpg" name="Nesya Kirani" id="AGT-26" size="sm" />
                  <span className="font-bold">Nesya</span>
                </div>
                <div className="p-3 border border-secondary bg-surface flex flex-col items-center gap-2">
                  <AgentPhoto photo="/students/agt-23.jpg" name="Muhammad Haidar" id="AGT-23" size="sm" />
                  <span className="font-bold">Haidar</span>
                </div>
                <div className="p-3 border border-secondary bg-surface flex flex-col items-center gap-2">
                  <AgentPhoto photo="/students/agt-09.jpg" name="Ilisha Neola" id="AGT-09" size="sm" />
                  <span className="font-bold">Ilisha</span>
                </div>
              </div>
              <p className="font-hanken text-xs opacity-75 text-center mt-3">
                Perekaman visual operasi kelas, penyuntingan materi multimedia, dan pengelolaan arsip galeri intelijen.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
