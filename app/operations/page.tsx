export default function Operations() {
  const schedule = [
    { day: "MONDAY", agents: ["Agent A. Smith", "Agent B. Jones"], status: "[ PENDING ]", isPending: true },
    { day: "TUESDAY", agents: ["Agent C. Davis", "Agent D. Evans"], status: "[ STANDBY ]", isPending: false },
    { day: "WEDNESDAY", agents: ["Agent E. Ford", "Agent F. Green"], status: "[ STANDBY ]", isPending: false },
    { day: "THURSDAY", agents: ["Agent G. Hall", "Agent H. Irwin"], status: "[ STANDBY ]", isPending: false },
    { day: "FRIDAY", agents: ["Agent I. Clark", "Agent J. Lewis"], status: "[ STANDBY ]", isPending: false },
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 border-b-4 border-secondary pb-8">
        <div className="max-w-3xl">
          <h1 className="headline-lg mb-4">Daily Maintenance Protocol</h1>
          <p className="text-lg opacity-90 max-w-2xl leading-relaxed border-l-4 border-secondary pl-4">
            Classified assignment roster for sector sanitation. All designated agents are required to execute their assigned maintenance operations within the stipulated timeframes. Failure to comply will result in disciplinary review.
          </p>
        </div>
        <div className="text-right">
           <div className="border border-secondary px-3 py-1 bg-surface inline-block">
             <span className="label-sm opacity-60">FILE REF: CLN-SCH-01</span>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Shift Assignments */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="headline-md border-b-2 border-secondary pb-2">SHIFT ASSIGNMENTS</h2>
          
          <div className="bg-[#e6e3e0] border-2 border-secondary shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-secondary/30 relative">
               <div className="absolute top-0 left-0 bg-secondary text-surface px-3 py-1 label-sm z-10">
                 CURRENT ROSTER
               </div>
               <div className="col-span-3 pt-6 font-courier font-bold text-sm">Op Day</div>
               <div className="col-span-6 pt-6 font-courier font-bold text-sm">Agents on Duty</div>
               <div className="col-span-3 pt-6 font-courier font-bold text-sm text-right">Status</div>
            </div>

            {/* Table Body */}
            <div className="p-4 space-y-6">
              {schedule.map((shift, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pb-6 border-b border-dashed border-secondary/30 last:border-0 last:pb-0">
                  <div className="md:col-span-3 font-space-mono font-bold">{shift.day}</div>
                  
                  <div className="md:col-span-6 flex flex-wrap gap-4">
                    {shift.agents.map((agent, i) => (
                      <div key={i} className="border border-secondary bg-surface px-3 py-1 font-courier text-sm min-w-[140px]">
                        {agent}
                      </div>
                    ))}
                  </div>

                  <div className={`md:col-span-3 text-right font-courier font-bold text-sm ${shift.isPending ? 'text-primary' : 'opacity-60'}`}>
                    {shift.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Rules of Engagement */}
        <div className="lg:col-span-4 space-y-10">
          <div className="space-y-6">
            <h2 className="headline-md border-b-2 border-secondary pb-2 flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
              RULES OF ENGAGEMENT
            </h2>

            <div className="dossier-card bg-surface p-6 pb-8 relative mt-8">
              {/* Mandatory Stamp */}
              <div className="absolute -top-4 -right-4 bg-primary text-surface font-space-mono font-bold text-sm px-4 py-1 rotate-6 border-2 border-primary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] z-10">
                MANDATORY
              </div>

              <ul className="space-y-6 mt-4">
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 border border-secondary mt-1 flex-shrink-0"></div>
                  <p className="font-courier text-sm leading-relaxed">
                    <strong>Sweep Sector Alpha:</strong> Complete floor sweep required before 0800 hours.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 border border-secondary mt-1 flex-shrink-0"></div>
                  <p className="font-courier text-sm leading-relaxed">
                    <strong>Surface Decontamination:</strong> Wipe all desk surfaces with approved solvent.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 border border-secondary mt-1 flex-shrink-0"></div>
                  <p className="font-courier text-sm leading-relaxed">
                    <strong>Waste Extraction:</strong> Empty all bins to central disposal unit.
                  </p>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t-[3px] border-dashed border-secondary">
                <div className="flex items-start gap-3 text-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                  <p className="font-courier text-sm font-bold underline underline-offset-4">
                    Failure to complete tasks will result in immediate re-assignment to double-shifts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Classified Visual Placeholder */}
          <div className="bg-[#e6e3e0] p-4 border-2 border-secondary shadow-[6px_6px_0px_0px_rgba(26,26,26,1)]">
            <div className="aspect-[4/3] bg-[#d9d9d9] border border-secondary flex flex-col items-center justify-center relative overflow-hidden text-secondary/40">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <div className="bg-surface border border-secondary px-3 py-1 font-space-mono text-sm font-bold uppercase tracking-widest text-secondary absolute z-10">
                CLASSIFIED VISUAL
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1))] bg-[length:100%_4px] mix-blend-overlay"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
