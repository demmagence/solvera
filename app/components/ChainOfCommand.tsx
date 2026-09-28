"use client";

import { useState } from "react";

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
            Command structure and division responsibilities. Switch periods below to examine operational rosters.
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
          <div className="w-14 h-14 rounded-full border-4 border-secondary mx-auto mb-3 flex items-center justify-center bg-surface-container">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <circle cx="12" cy="11" r="3" />
            </svg>
          </div>
          <h3 className="font-space-mono font-bold text-xl mb-0.5">WALI KELAS</h3>
          <p className="label-md text-primary mb-3">Ibu Sarah Siti Sumaerah</p>
          <div className="border-t border-dashed border-secondary/40 pt-2.5 flex justify-between items-center text-xs font-courier">
            <span className="opacity-70">ROLE: ADVISOR</span>
            <span className="text-primary font-bold">ACTIVE COMMAND</span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* KM KELAS 12 */}
              <div className="dossier-card p-6 bg-surface">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="label-sm opacity-60">CHIEF OPERATIVE</span>
                    <h3 className="font-space-mono font-bold text-xl text-secondary">KETUA MURID (KM)</h3>
                    <p className="font-space-mono font-bold text-primary text-base mt-0.5">PANCA SATIA NUGRAHA</p>
                  </div>
                  <div className="p-2 border border-secondary bg-surface-container">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <div className="border-t border-secondary pt-3">
                  <p className="text-sm font-hanken opacity-85 leading-relaxed">
                    Pemimpin skuad operasional kelas XII, koordinator komando utama, dan penanggung jawab tertinggi pelaksanaan
                    seluruh misi akademik dan disiplin.
                  </p>
                </div>
              </div>

              {/* WAKIL KM KELAS 12 */}
              <div className="dossier-card p-6 bg-surface">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="label-sm opacity-60">DEPUTY CHIEF</span>
                    <h3 className="font-space-mono font-bold text-xl text-secondary">WAKIL KETUA MURID</h3>
                    <p className="font-space-mono font-bold text-primary text-base mt-0.5">DIKA PRAYOGA GUNAWAN</p>
                  </div>
                  <div className="p-2 border border-secondary bg-surface-container">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                <div className="border-t border-secondary pt-3">
                  <p className="text-sm font-hanken opacity-85 leading-relaxed">
                    Mendampingi komando KM, mengoordinasikan eksekusi taktis divisi internal, serta memastikan rantai logistik dan
                    kontinuitas skuad berjalan presisi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LEVEL 3: SEKRETARIAT & BENDAHARA KELAS 12 */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="bg-secondary text-surface px-4 py-1 font-courier font-bold uppercase tracking-widest text-xs border-l-4 border-r-4 border-primary inline-block">
                Level 3 // Core Administration & Treasury
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Sekretaris */}
              <div className="dossier-card p-5 bg-[#e6e3e0]">
                <span className="label-sm opacity-60">REGISTRY LEAD</span>
                <h4 className="font-space-mono font-bold text-base mt-1">SEKRETARIS</h4>
                <p className="font-space-mono font-bold text-primary text-sm mb-3">SYAHIRA BILQIS HUMAIRA</p>
                <div className="border-t border-secondary pt-2.5 text-xs font-hanken opacity-80 leading-relaxed">
                  Pencatatan logbook taktis, pengarsipan berkas dokumen penting, dan pengelolaan administrasi kelas.
                </div>
              </div>

              {/* Wakil Sekretaris */}
              <div className="dossier-card p-5 bg-[#e6e3e0]">
                <span className="label-sm opacity-60">REGISTRY DEPUTY</span>
                <h4 className="font-space-mono font-bold text-base mt-1">WAKIL SEKRETARIS</h4>
                <p className="font-space-mono font-bold text-primary text-sm mb-3">FARIZ DZULHAMI</p>
                <div className="border-t border-secondary pt-2.5 text-xs font-hanken opacity-80 leading-relaxed">
                  Mendukung dokumentasi berkas harian, presensi, serta pendataan sistem operasional kelas.
                </div>
              </div>

              {/* Bendahara */}
              <div className="dossier-card p-5 bg-[#e6e3e0]">
                <span className="label-sm opacity-60">FISCAL DIRECTOR</span>
                <h4 className="font-space-mono font-bold text-base mt-1">BENDAHARA</h4>
                <p className="font-space-mono font-bold text-primary text-sm mb-3">KIANO DEVARO RIDHO</p>
                <div className="border-t border-secondary pt-2.5 text-xs font-hanken opacity-80 leading-relaxed">
                  Pengawasan peredaran kas operasional, alokasi anggaran misi, dan pengelolaan keuangan skuad.
                </div>
              </div>

              {/* Wakil Bendahara */}
              <div className="dossier-card p-5 bg-[#e6e3e0]">
                <span className="label-sm opacity-60">FISCAL DEPUTY</span>
                <h4 className="font-space-mono font-bold text-base mt-1">WAKIL BENDAHARA</h4>
                <p className="font-space-mono font-bold text-primary text-sm mb-3">MUHAMMAD DERYL FABIENSYAH</p>
                <div className="border-t border-secondary pt-2.5 text-xs font-hanken opacity-80 leading-relaxed">
                  Rekonsiliasi transaksi kas, pencatatan belanja logistik, dan audit saldo operasional rutin.
                </div>
              </div>
            </div>
          </div>

          {/* LEVEL 4: SEKSI-SEKSI (SIE) KELAS 12 */}
          <div className="space-y-6">
            <div className="text-center">
              <span className="bg-secondary text-surface px-4 py-1 font-courier font-bold uppercase tracking-widest text-xs border-l-4 border-r-4 border-primary inline-block">
                Level 4 // Field Divisions (Seksi Operasional)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Sie Kebersihan */}
              <div className="dossier-card p-6 bg-surface">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="label-sm opacity-60">SECTOR SANITATION</span>
                    <h4 className="font-space-mono font-bold text-lg">SIE KEBERSIHAN</h4>
                    <p className="font-space-mono font-bold text-primary text-sm mt-0.5">M ARKAN RAIHAN NUGRAHA</p>
                  </div>
                  <div className="p-2 border border-secondary bg-surface-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </div>
                </div>
                <div className="border-t border-secondary pt-3 text-xs sm:text-sm font-hanken opacity-85 leading-relaxed">
                  Memimpin protokol sterilisasi ruang kelas, inspeksi jadwal piket harian, dan kenyamanan lingkungan kerja.
                </div>
              </div>

              {/* Sie Peralatan */}
              <div className="dossier-card p-6 bg-surface">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="label-sm opacity-60">ARMOURY & LOGISTICS</span>
                    <h4 className="font-space-mono font-bold text-lg">SIE PERALATAN</h4>
                    <p className="font-space-mono font-bold text-primary text-sm mt-0.5">JIBRIL IBNI JUBAIR</p>
                  </div>
                  <div className="p-2 border border-secondary bg-surface-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                </div>
                <div className="border-t border-secondary pt-3 text-xs sm:text-sm font-hanken opacity-85 leading-relaxed">
                  Inventarisasi sarana hardware, pengawasan perangkat keras/elektronik di ruang belajar, dan kesiapan fasilitas.
                </div>
              </div>

              {/* Sie Keagamaan */}
              <div className="dossier-card p-6 bg-surface">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="label-sm opacity-60">MORAL & SPIRITUAL</span>
                    <h4 className="font-space-mono font-bold text-lg">SIE KEAGAMAAN</h4>
                    <p className="font-space-mono font-bold text-primary text-sm mt-0.5">ADIFTYA RAHMAD</p>
                  </div>
                  <div className="p-2 border border-secondary bg-surface-container">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <div className="border-t border-secondary pt-3 text-xs sm:text-sm font-hanken opacity-85 leading-relaxed">
                  Pembinaan ketahanan moral spiritual skuad, memimpin doa/ibadah bersama, dan menjaga etika serta keharmonisan.
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* KM KELAS 11 */}
              <div className="dossier-card p-6 bg-surface">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="label-sm opacity-60">COMMANDER (RET.)</span>
                    <h3 className="font-space-mono font-bold text-xl text-secondary">KETUA MURID (KM)</h3>
                    <p className="font-space-mono font-bold text-primary text-base mt-0.5">M. ARSA PRAYATA</p>
                  </div>
                  <div className="p-2 border border-secondary bg-surface-container">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <div className="border-t border-secondary pt-3">
                  <p className="text-sm font-hanken opacity-85 leading-relaxed">
                    Memimpin skuad operasional kelas XI PPLG RPL 2, koordinasi taktis tingkat tinggi, dan penanggung jawab utama
                    misi awal pembentukan Solvera.
                  </p>
                </div>
              </div>

              {/* WAKIL KM KELAS 11 */}
              <div className="dossier-card p-6 bg-surface">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="label-sm opacity-60">DEPUTY COMMANDER</span>
                    <h3 className="font-space-mono font-bold text-xl text-secondary">WAKIL KETUA MURID</h3>
                    <p className="font-space-mono font-bold text-primary text-base mt-0.5">M. ARKAN RAIHAN NUGRAHA</p>
                  </div>
                  <div className="p-2 border border-secondary bg-surface-container">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
                <div className="border-t border-secondary pt-3">
                  <p className="text-sm font-hanken opacity-85 leading-relaxed">
                    Mendukung komando utama periode kelas XI, koordinasi logistik taktis internal, dan penjamin kontinuitas
                    operasional skuad.
                  </p>
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
              <div className="dossier-card p-6 bg-[#e6e3e0]">
                <h4 className="font-space-mono font-bold text-lg mb-2 flex items-center gap-2">
                  <span>DIVISI SEKRETARIS (XI)</span>
                </h4>
                <div className="space-y-3 font-courier text-xs">
                  <div className="p-2 bg-surface border border-secondary flex justify-between">
                    <span className="font-bold">01. Syahira</span>
                    <span className="opacity-60">Logbook & Arsip Taktis</span>
                  </div>
                  <div className="p-2 bg-surface border border-secondary flex justify-between">
                    <span className="font-bold">02. Rahma</span>
                    <span className="opacity-60">Risalah Rapat & Profil</span>
                  </div>
                  <div className="p-2 bg-surface border border-secondary flex justify-between">
                    <span className="font-bold">03. Putri</span>
                    <span className="opacity-60">Presensi & Ketertiban</span>
                  </div>
                </div>
              </div>

              {/* Divisi Bendahara XI */}
              <div className="dossier-card p-6 bg-[#e6e3e0]">
                <h4 className="font-space-mono font-bold text-lg mb-2 flex items-center gap-2">
                  <span>DIVISI BENDAHARA (XI)</span>
                </h4>
                <div className="space-y-3 font-courier text-xs">
                  <div className="p-2 bg-surface border border-secondary flex justify-between">
                    <span className="font-bold">01. Nazwatus Shifa</span>
                    <span className="opacity-60">Aliran Kas & Anggaran</span>
                  </div>
                  <div className="p-2 bg-surface border border-secondary flex justify-between">
                    <span className="font-bold">02. Resna Rahmawati</span>
                    <span className="opacity-60">Pelaporan & Iuran</span>
                  </div>
                  <div className="p-2 bg-surface border border-secondary flex justify-between">
                    <span className="font-bold">03. Ropi&apos;i Alawi</span>
                    <span className="opacity-60">Audit & Rekonsiliasi</span>
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
              <div className="dossier-card p-5 bg-surface">
                <h5 className="font-space-mono font-bold text-sm text-primary mb-1">SEKSI KEAGAMAAN</h5>
                <p className="font-courier text-xs font-bold mb-2">Ibnu & Jihan</p>
                <p className="font-hanken text-xs opacity-75">Pembinaan spiritual skuad dan pengawalan kegiatan ibadah.</p>
              </div>

              <div className="dossier-card p-5 bg-surface">
                <h5 className="font-space-mono font-bold text-sm text-primary mb-1">SEKSI PENDIDIKAN</h5>
                <p className="font-courier text-xs font-bold mb-2">Andhika & Rafa</p>
                <p className="font-hanken text-xs opacity-75">Strategi kurikulum intelijen dan koordinasi persiapan ujian.</p>
              </div>

              <div className="dossier-card p-5 bg-surface">
                <h5 className="font-space-mono font-bold text-sm text-primary mb-1">SEKSI OLAHRAGA</h5>
                <p className="font-courier text-xs font-bold mb-2">Jibril & Asyraf</p>
                <p className="font-hanken text-xs opacity-75">Kebugaran fisik dan koordinasi kegiatan keolahragaan skuad.</p>
              </div>

              <div className="dossier-card p-5 bg-surface">
                <h5 className="font-space-mono font-bold text-sm text-primary mb-1">SEKSI KEBERSIHAN</h5>
                <p className="font-courier text-xs font-bold mb-2">Dika & Keanu</p>
                <p className="font-hanken text-xs opacity-75">Sterilisasi sektor utama dan pemeliharaan kebersihan kelas.</p>
              </div>

              <div className="dossier-card p-5 bg-surface">
                <h5 className="font-space-mono font-bold text-sm text-primary mb-1">SEKSI PERALATAN</h5>
                <p className="font-courier text-xs font-bold mb-2">Deryl & Fariz</p>
                <p className="font-hanken text-xs opacity-75">Inventarisasi perkakas dan fasilitas presentasi lab.</p>
              </div>

              <div className="dossier-card p-5 bg-surface">
                <h5 className="font-space-mono font-bold text-sm text-primary mb-1">SEKSI KEAMANAN</h5>
                <p className="font-courier text-xs font-bold mb-2">Kiano & Alyandra</p>
                <p className="font-hanken text-xs opacity-75">Patroli ketertiban sektor dan penegakan protokol disiplin.</p>
              </div>
            </div>

            {/* Seksi Dokumentasi XI */}
            <div className="dossier-card p-6 bg-[#e6e3e0] max-w-3xl mx-auto">
              <h5 className="font-space-mono font-bold text-base text-primary mb-2 text-center">
                SEKSI DOKUMENTASI (4 OPERATIVES)
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-courier text-xs">
                <div className="p-2 border border-secondary bg-surface font-bold">Jihan</div>
                <div className="p-2 border border-secondary bg-surface font-bold">Nesya</div>
                <div className="p-2 border border-secondary bg-surface font-bold">Haidar</div>
                <div className="p-2 border border-secondary bg-surface font-bold">Ilisha</div>
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
