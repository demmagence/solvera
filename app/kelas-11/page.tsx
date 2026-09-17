import Link from "next/link";
import { Metadata } from "next";
import { STUDENTS_DATA } from "../data/students";

export const metadata: Metadata = {
  title: "Solvera Class // Archive: Kelas XI PPLG RPL 2",
  description: "Historical Chain of Command and Dossiers for Kelas XI PPLG RPL 2",
};

export default function Kelas11Page() {
  const k11Agents = STUDENTS_DATA.filter(
    (a) => a.roleK11 && !a.roleK11.includes("Field Operative")
  );

  return (
    <div className="space-y-12">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 font-courier text-xs">
        <Link href="/" className="hover:text-primary underline">
          ← BACK TO MAIN HEADQUARTERS
        </Link>
        <span className="opacity-40">/</span>
        <span className="text-primary font-bold">ARCHIVE: KELAS XI</span>
      </div>

      <div className="border-b-4 border-secondary pb-6">
        <div className="bg-secondary text-surface px-3 py-1 font-courier text-xs font-bold uppercase tracking-widest inline-block mb-3">
          HISTORICAL ARCHIVE // PERIOD 2024 - 2025
        </div>
        <h1 className="headline-lg">Dossier: Kelas XI PPLG RPL 2</h1>
        <p className="font-hanken text-base opacity-85 mt-2 max-w-2xl">
          Complete structural registry and appointed positions for Solvera Class during the initial Class XI operational
          cycle.
        </p>
      </div>

      {/* Leadership Table */}
      <div className="dossier-card p-6 sm:p-8 bg-surface">
        <h2 className="headline-md border-b-2 border-secondary pb-3 mb-6">
          EXECUTIVE COMMAND & DIVISIONS (KELAS XI)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border-2 border-secondary bg-[#e6e3e0]">
            <span className="font-courier text-[10px] text-primary font-bold block">LEVEL 1 // WALI KELAS</span>
            <strong className="font-space-mono text-base block mt-1">Ibu Sarah Siti Sumaerah</strong>
            <p className="font-hanken text-xs opacity-75 mt-1">Pembina & Penasihat Taktis</p>
          </div>

          <div className="p-4 border-2 border-secondary bg-[#e6e3e0]">
            <span className="font-courier text-[10px] text-primary font-bold block">LEVEL 2 // KETUA MURID (KM)</span>
            <strong className="font-space-mono text-base block mt-1">Muhammad Arsa Prayata</strong>
            <p className="font-hanken text-xs opacity-75 mt-1">Komandan Operasional Kelas XI</p>
          </div>

          <div className="p-4 border-2 border-secondary bg-[#e6e3e0]">
            <span className="font-courier text-[10px] text-primary font-bold block">LEVEL 2 // WAKIL KETUA</span>
            <strong className="font-space-mono text-base block mt-1">M. Arkan Raihan Nugraha</strong>
            <p className="font-hanken text-xs opacity-75 mt-1">Wakil Komandan Operasional</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-secondary">
          <h3 className="font-space-mono font-bold text-sm text-secondary uppercase mb-4 tracking-wider">
            APPOINTED DIVISION STAFF (KELAS XI)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {k11Agents.map((agent) => (
              <div key={agent.id} className="p-3 border border-secondary bg-surface-container-low font-courier text-xs">
                <span className="text-[10px] text-primary font-bold block">{agent.id}</span>
                <strong className="font-space-mono text-xs block text-secondary truncate">{agent.name}</strong>
                <span className="text-[11px] opacity-75 block mt-1">{agent.roleK11}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center pt-4">
        <Link
          href="/kelas-12"
          className="btn-primary inline-flex items-center gap-2"
        >
          <span>VIEW KELAS XII ACTIVE MANDATE</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
