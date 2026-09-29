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
          cycle with verified operative portraits.
        </p>
      </div>

      {/* Leadership Table */}
      <div className="dossier-card p-6 sm:p-8 bg-surface">
        <h2 className="headline-md border-b-2 border-secondary pb-3 mb-6">
          EXECUTIVE COMMAND & DIVISIONS (KELAS XI)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Wali Kelas XI */}
          <div className="p-4 border-2 border-secondary bg-[#e6e3e0] shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] flex items-start gap-3.5">
            <div className="w-14 h-18 shrink-0 bg-surface-container border-2 border-secondary flex items-center justify-center text-secondary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <circle cx="12" cy="11" r="3" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-courier text-[10px] text-primary font-bold block">LEVEL 1 // WALI KELAS</span>
              <strong className="font-space-mono text-sm sm:text-base block mt-0.5 text-secondary">
                Sarah Siti Sumaerah, S.T.
              </strong>
              <p className="font-hanken text-xs opacity-75 mt-1">Pembina & Penasihat Taktis</p>
            </div>
          </div>

          {/* KM Kelas XI */}
          <div className="p-4 border-2 border-secondary bg-[#e6e3e0] shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] flex items-start gap-3.5">
            <div className="relative w-14 h-18 shrink-0 bg-secondary border-2 border-secondary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/students/agt-19.jpg"
                alt="Muhammad Arsa Prayata"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.12)_50%,rgba(0,0,0,0.12))] bg-[length:100%_4px] pointer-events-none opacity-60"></div>
              <span className="absolute top-0.5 left-0.5 bg-primary text-surface font-space-mono text-[7px] font-bold px-0.5">
                AGT-19
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-courier text-[10px] text-primary font-bold block">LEVEL 2 // KETUA MURID (KM)</span>
              <strong className="font-space-mono text-sm sm:text-base block mt-0.5 text-secondary">
                Muhammad Arsa Prayata
              </strong>
              <p className="font-hanken text-xs opacity-75 mt-1">Komandan Operasional Kelas XI</p>
            </div>
          </div>

          {/* Wakil KM Kelas XI */}
          <div className="p-4 border-2 border-secondary bg-[#e6e3e0] shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] flex items-start gap-3.5">
            <div className="relative w-14 h-18 shrink-0 bg-secondary border-2 border-secondary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/students/agt-13.jpg"
                alt="M. Arkan Raihan Nugraha"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.12)_50%,rgba(0,0,0,0.12))] bg-[length:100%_4px] pointer-events-none opacity-60"></div>
              <span className="absolute top-0.5 left-0.5 bg-primary text-surface font-space-mono text-[7px] font-bold px-0.5">
                AGT-13
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="font-courier text-[10px] text-primary font-bold block">LEVEL 2 // WAKIL KETUA</span>
              <strong className="font-space-mono text-sm sm:text-base block mt-0.5 text-secondary">
                M. Arkan Raihan Nugraha
              </strong>
              <p className="font-hanken text-xs opacity-75 mt-1">Wakil Komandan Operasional</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t-2 border-secondary">
          <h3 className="font-space-mono font-bold text-sm text-secondary uppercase mb-4 tracking-wider">
            APPOINTED DIVISION STAFF (KELAS XI)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {k11Agents.map((agent) => (
              <div
                key={agent.id}
                className="p-3 border-2 border-secondary bg-surface-container-low font-courier text-xs shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] flex items-center gap-3"
              >
                <div className="relative w-12 h-15 shrink-0 bg-secondary border border-secondary overflow-hidden">
                  {agent.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={agent.photo}
                      alt={agent.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#242424] text-surface p-0.5 text-center">
                      <span className="font-space-mono text-[7px] font-bold text-primary">[ CLASSIFIED ]</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.12)_50%,rgba(0,0,0,0.12))] bg-[length:100%_4px] pointer-events-none opacity-60"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-primary font-bold block">{agent.id}</span>
                  <strong className="font-space-mono text-xs block text-secondary truncate">{agent.name}</strong>
                  <span className="text-[11px] opacity-75 block mt-0.5 truncate">{agent.roleK11}</span>
                </div>
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
