import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solvera Class // Active Mandate: Kelas XII PPLG RPL 2",
  description: "Current Chain of Command and Operational Directives for Kelas XII PPLG RPL 2",
};

export default function Kelas12Page() {
  const k12Leaders = [
    { title: "WALI KELAS", name: "A. Luddie Tri S., S.T.", clearance: "L1", desc: "Penasihat Komando Utama & Wali Kelas XII" },
    { title: "KETUA MURID (KM)", name: "Panca Satia Nugraha", clearance: "L2", desc: "Komandan Operasional Kelas XII" },
    { title: "WAKIL KETUA MURID", name: "Dika Prayoga Gunawan", clearance: "L2", desc: "Wakil Komando & Logistik Taktis" },
    { title: "SEKRETARIS", name: "Syahira Bilqis Humaira", clearance: "L2", desc: "Kepala Arsip & Administrasi" },
    { title: "WAKIL SEKRETARIS", name: "Fariz Dzulhami", clearance: "L2", desc: "Administrasi & Presensi Operasi" },
    { title: "BENDAHARA", name: "Kiano Devaro Ridho", clearance: "L2", desc: "Kepala Kas & Alokasi Anggaran" },
    { title: "WAKIL BENDAHARA", name: "Muhammad Deryl Fabiensyah", clearance: "L2", desc: "Audit Finansial & Perlengkapan" },
    { title: "SIE KEBERSIHAN", name: "M Arkan Raihan Nugraha", clearance: "L2", desc: "Kepala Sterilisasi & Sanitasi Sektor" },
    { title: "SIE PERALATAN", name: "Jibril Ibni Jubair", clearance: "L2", desc: "Kepala Inventaris & Hardware Lab" },
    { title: "SIE KEAGAMAAN", name: "Adiftya Rahmad", clearance: "L2", desc: "Pembina Moral & Ketahanan Spiritual" },
  ];

  return (
    <div className="space-y-12">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 font-courier text-xs">
        <Link href="/" className="hover:text-primary underline">
          ← BACK TO MAIN HEADQUARTERS
        </Link>
        <span className="opacity-40">/</span>
        <span className="text-primary font-bold">ACTIVE MANDATE: KELAS XII</span>
      </div>

      <div className="border-b-4 border-secondary pb-6">
        <div className="bg-primary text-surface px-3 py-1 font-courier text-xs font-bold uppercase tracking-widest inline-block mb-3">
          CURRENT MANDATE // PERIOD 2025 - 2026
        </div>
        <h1 className="headline-lg">Dossier: Kelas XII PPLG RPL 2</h1>
        <p className="font-hanken text-base opacity-85 mt-2 max-w-2xl">
          Active operational hierarchy and assigned leadership cabinet for Solvera Class during the final Class XII graduation
          cycle.
        </p>
      </div>

      {/* Leadership Table */}
      <div className="dossier-card p-6 sm:p-8 bg-surface">
        <div className="flex justify-between items-center border-b-2 border-secondary pb-3 mb-6">
          <h2 className="headline-md">EXECUTIVE COMMAND (KELAS XII)</h2>
          <span className="font-courier text-xs font-bold text-primary">[ RATIFIED & ACTIVE ]</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {k12Leaders.map((lead, idx) => (
            <div
              key={idx}
              className="p-5 border-2 border-secondary bg-[#e6e3e0] shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-courier text-[10px] text-primary font-bold">{lead.title}</span>
                  <span className="font-courier text-[9px] border border-secondary px-1 bg-surface font-bold">
                    {lead.clearance}
                  </span>
                </div>
                <strong className="font-space-mono text-base block text-secondary">{lead.name}</strong>
              </div>
              <p className="font-hanken text-xs opacity-75 mt-3 pt-2 border-t border-dashed border-secondary/30">
                {lead.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 pt-4 font-courier">
        <Link href="/kelas-11" className="p-3 border-2 border-secondary bg-surface text-xs font-bold hover:bg-surface-container">
          ← VIEW KELAS XI ARCHIVE
        </Link>
        <Link href="/" className="btn-primary text-xs flex items-center gap-2">
          <span>RETURN TO HEADQUARTERS</span>
          <span>►</span>
        </Link>
      </div>
    </div>
  );
}
