import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solvera Class // Active Mandate: Kelas XII PPLG RPL 2",
  description: "Current Chain of Command and Operational Directives for Kelas XII PPLG RPL 2",
};

export default function Kelas12Page() {
  const k12Leaders = [
    { title: "WALI KELAS", name: "A. Luddie Tri S., S.T.", clearance: "L1", desc: "Penasihat Komando Utama & Wali Kelas XII", id: "ADV-01", photo: undefined },
    { title: "KETUA MURID (KM)", name: "Panca Satia Nugraha", clearance: "L2", desc: "Komandan Operasional Kelas XII", id: "AGT-27", photo: "/students/agt-27.jpg" },
    { title: "WAKIL KETUA MURID", name: "Dika Prayoga Gunawan", clearance: "L2", desc: "Wakil Komando & Logistik Taktis", id: "AGT-04", photo: "/students/agt-04.jpg" },
    { title: "SEKRETARIS", name: "Syahira Bilqis Humaira", clearance: "L2", desc: "Kepala Arsip & Administrasi", id: "AGT-35", photo: "/students/agt-35.jpg" },
    { title: "WAKIL SEKRETARIS", name: "Fariz Dzulhami", clearance: "L2", desc: "Administrasi & Presensi Operasi", id: "AGT-07", photo: "/students/agt-07.jpg" },
    { title: "BENDAHARA", name: "Kiano Devaro Ridho", clearance: "L2", desc: "Kepala Kas & Alokasi Anggaran", id: "AGT-12", photo: "/students/agt-12.jpg" },
    { title: "WAKIL BENDAHARA", name: "Muhammad Deryl Fabiensyah", clearance: "L2", desc: "Audit Finansial & Perlengkapan", id: "AGT-21", photo: "/students/agt-21.jpg" },
    { title: "SIE KEBERSIHAN", name: "M Arkan Raihan Nugraha", clearance: "L2", desc: "Kepala Sterilisasi & Sanitasi Sektor", id: "AGT-13", photo: "/students/agt-13.jpg" },
    { title: "SIE PERALATAN", name: "Jibril Ibni Jubair", clearance: "L2", desc: "Kepala Inventaris & Hardware Lab", id: "AGT-10", photo: "/students/agt-10.jpg" },
    { title: "SIE KEAGAMAAN", name: "Adiftya Rahmad", clearance: "L2", desc: "Pembina Moral & Ketahanan Spiritual", id: "AGT-01", photo: "/students/agt-01.jpg" },
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
          cycle with verified operative portraits.
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
                <div className="flex items-start gap-4 mb-3">
                  {/* Photo Frame */}
                  <div className="relative w-16 h-20 shrink-0 bg-secondary border-2 border-secondary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
                    {lead.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={lead.photo}
                        alt={lead.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-surface-container text-secondary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          <circle cx="12" cy="11" r="3" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.12)_50%,rgba(0,0,0,0.12))] bg-[length:100%_4px] pointer-events-none opacity-60"></div>
                    <span className="absolute top-0.5 left-0.5 bg-primary text-surface font-space-mono text-[7px] font-bold px-1">
                      {lead.id}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-courier text-[10px] text-primary font-bold">{lead.title}</span>
                      <span className="font-courier text-[9px] border border-secondary px-1 bg-surface font-bold">
                        {lead.clearance}
                      </span>
                    </div>
                    <strong className="font-space-mono text-sm sm:text-base block text-secondary leading-snug">
                      {lead.name}
                    </strong>
                  </div>
                </div>
              </div>
              <p className="font-hanken text-xs opacity-75 mt-2 pt-2 border-t border-dashed border-secondary/30">
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
