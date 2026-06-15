export default function Home() {
  const agents = [
    { name: "J. DOE", alias: "SPECTER", skill1: "Forensics Expert", skill2: "Cryptography" },
    { name: "S. SMITH", alias: "WHISPER", skill1: "Interrogation", skill2: "Undercover Ops" },
    { name: "M. JONES", alias: "HAWK", skill1: "Surveillance", skill2: "Tactical Entry" },
    { name: "A. DAVIS", alias: "GHOST", skill1: "Infiltration", skill2: "Cyber Ops" },
    { name: "R. EVANS", alias: "SHADOW", skill1: "Reconnaissance", skill2: "Demolitions" },
    { name: "K. BAKER", alias: "EAGLE", skill1: "Sharpshooter", skill2: "Intelligence" },
  ];

  const schedule = [
    { day: "MONDAY", agents: ["Agent A. Smith", "Agent B. Jones"], status: "[ PENDING ]", isPending: true },
    { day: "TUESDAY", agents: ["Agent C. Davis", "Agent D. Evans"], status: "[ STANDBY ]", isPending: false },
    { day: "WEDNESDAY", agents: ["Agent E. Ford", "Agent F. Green"], status: "[ STANDBY ]", isPending: false },
    { day: "THURSDAY", agents: ["Agent G. Hall", "Agent H. Irwin"], status: "[ STANDBY ]", isPending: false },
    { day: "FRIDAY", agents: ["Agent I. Clark", "Agent J. Lewis"], status: "[ STANDBY ]", isPending: false },
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* ======================================================== */}
      {/* SECTION 1: CLASS PROFILE */}
      {/* ======================================================== */}
      <section id="profile" className="scroll-mt-28 space-y-16">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 border-b-4 border-secondary pb-8">
          <div className="max-w-3xl">
            <h1 className="headline-lg mb-4">Dossier: Class Profile</h1>
            <p className="text-lg border-l-4 border-primary pl-4 opacity-90 max-w-2xl">
              Comprehensive overview of Solvera Class operational directives and command hierarchy. Unauthorized distribution of this material is strictly prohibited under protocol 88.
            </p>
          </div>
          <div className="text-right flex flex-col items-end gap-1">
            <span className="label-sm opacity-60">File Ref: SC-001</span>
            <span className="label-sm opacity-60">Status: <span className="text-primary font-bold">Classified</span></span>
          </div>
        </div>

        {/* Briefing & Directives Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-6">
            <div className="bg-secondary text-surface px-3 py-1 inline-block label-md">
              Doc Ref: VN-88
            </div>
            <h2 className="headline-md">Confidential Briefing</h2>
            <p className="opacity-90 leading-relaxed">
              Primary directives establishing the foundational goals, strategic outlook, and operational parameters of the unit.
            </p>
            <div className="pt-4 opacity-50">
              {/* Barcode SVG */}
              <svg width="100" height="40" viewBox="0 0 100 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="4" height="40" />
                <rect x="6" y="0" width="2" height="40" />
                <rect x="12" y="0" width="6" height="40" />
                <rect x="20" y="0" width="2" height="40" />
                <rect x="24" y="0" width="4" height="40" />
                <rect x="32" y="0" width="8" height="40" />
                <rect x="42" y="0" width="2" height="40" />
                <rect x="48" y="0" width="4" height="40" />
                <rect x="54" y="0" width="2" height="40" />
                <rect x="60" y="0" width="6" height="40" />
                <rect x="70" y="0" width="4" height="40" />
                <rect x="78" y="0" width="2" height="40" />
                <rect x="84" y="0" width="6" height="40" />
                <rect x="94" y="0" width="4" height="40" />
              </svg>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="dossier-card p-8 md:p-10 bg-[#e6e3e0]">
              <div className="absolute top-4 right-4 flex gap-2">
                 <div className="w-8 h-3 bg-secondary"></div>
                 <div className="w-16 h-3 bg-secondary"></div>
              </div>
              
              <div className="space-y-10">
                <section>
                  <h3 className="label-md text-primary border-b-2 border-primary/30 inline-block mb-4">Directive Alpha: Vision</h3>
                  <div className="border-l-4 border-secondary pl-6">
                    <p className="text-xl font-bold font-hanken">
                      To establish a formidable academic intelligence network, fostering elite analytical minds capable of decoding complex syllabus matrices and executing flawless scholarly operations.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="label-md text-primary border-b-2 border-primary/30 inline-block mb-4">Directive Beta: Mission Objectives</h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 border-2 border-primary text-primary flex items-center justify-center mt-1">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 5L5 9L13 1" /></svg>
                      </div>
                      <p className="leading-relaxed font-hanken">Maintain uncompromising academic integrity through rigorous peer-review and operational discipline across all subjects.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 border-2 border-primary text-primary flex items-center justify-center mt-1">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 5L5 9L13 1" /></svg>
                      </div>
                      <p className="leading-relaxed font-hanken">Deploy advanced study stratagems to ensure a flawless mission success rate in standardized assessments and field examinations.</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 border-2 border-primary text-primary flex items-center justify-center mt-1">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 5L5 9L13 1" /></svg>
                      </div>
                      <p className="leading-relaxed font-hanken">Cultivate an environment of absolute solidarity, strategic cooperation, and mutual defense among all active agents within the class.</p>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Chain of Command Section */}
        <div className="pt-12">
          <div className="flex items-end justify-between border-b-4 border-secondary pb-4 mb-16">
            <h2 className="headline-md">Chain of Command</h2>
            <span className="label-sm border border-secondary px-2 py-1 bg-surface-container">ORG-CHART-V1.0</span>
          </div>

          <div className="flex flex-col items-center">
            {/* Top Level: Chief of Ops */}
            <div className="dossier-card w-72 p-6 text-center z-10 bg-surface">
              <div className="absolute top-[-10px] left-[-10px] bg-primary text-surface px-2 py-1 label-sm">
                Clearance L1
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-secondary mx-auto mb-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="11" r="3" /></svg>
              </div>
              <h3 className="font-space-mono font-bold text-xl mb-1">CHIEF OF OPS</h3>
              <p className="label-md text-primary mb-4">Class Leader</p>
              <div className="border-t border-dashed border-secondary/30 pt-3">
                <p className="label-sm">Status: <span className="text-primary font-bold">ACTIVE</span></p>
              </div>
            </div>

            {/* Tree connecting lines */}
            <div className="w-0.5 h-8 bg-secondary"></div>
            <div className="w-[400px] h-0.5 bg-secondary"></div>
            
            <div className="flex justify-between w-[500px]">
              <div className="w-0.5 h-8 bg-secondary ml-[50px]"></div>
              <div className="w-0.5 h-20 bg-secondary absolute mt-[-2px] left-1/2 -translate-x-1/2 z-0"></div>
              <div className="w-0.5 h-8 bg-secondary mr-[50px]"></div>
            </div>

            {/* Second Level */}
            <div className="flex justify-between w-[640px] z-10 relative">
              <div className="dossier-card w-64 p-5 bg-surface relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-space-mono font-bold text-lg mb-1">INTEL DIVISION</h3>
                    <p className="label-sm text-primary">Secretary</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                </div>
                <div className="border-t border-secondary pt-3">
                  <p className="text-sm font-hanken opacity-80">Documentation and records.</p>
                </div>
              </div>

              <div className="dossier-card w-64 p-5 bg-surface relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-space-mono font-bold text-lg mb-1">RESOURCE CMD</h3>
                    <p className="label-sm text-primary">Treasurer</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                </div>
                <div className="border-t border-secondary pt-3">
                  <p className="text-sm font-hanken opacity-80">Financial logistics and assets.</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary text-surface px-4 py-1 mt-6 z-10 font-courier font-bold uppercase tracking-widest text-sm relative border-l-4 border-r-4 border-primary">
              Field Divisions
            </div>

            <div className="w-0.5 h-8 bg-secondary"></div>
            <div className="w-[600px] md:w-[700px] h-0.5 bg-secondary"></div>
            
            <div className="flex justify-between w-[600px] md:w-[700px]">
               <div className="w-0.5 h-8 bg-secondary ml-8"></div>
               <div className="w-0.5 h-8 bg-secondary"></div>
               <div className="w-0.5 h-8 bg-secondary mr-8"></div>
            </div>

            {/* Third Level */}
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-[900px] justify-between">
              {/* Academic */}
              <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="label-sm opacity-60 mb-1">Seksi 01</p>
                    <h3 className="font-space-mono font-bold text-lg">ACADEMIC</h3>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                </div>
                <div className="border-t border-secondary pt-3">
                  <p className="text-sm font-hanken opacity-80">Responsible for study material distribution, intel gathering, and exam preparation logistics.</p>
                </div>
              </div>

              {/* Enforcement */}
              <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="label-sm opacity-60 mb-1">Seksi 02</p>
                    <h3 className="font-space-mono font-bold text-lg">ENFORCEMENT</h3>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div className="border-t border-secondary pt-3">
                  <p className="text-sm font-hanken opacity-80">Maintains strict discipline, enforces operational protocols, and secures the class perimeter.</p>
                </div>
              </div>

              {/* Sanitation */}
              <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="label-sm opacity-60 mb-1">Seksi 03</p>
                    <h3 className="font-space-mono font-bold text-lg">SANITATION</h3>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M2 14h20" /><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" /><path d="M12 14V4" /><path d="M9 7h6" /></svg>
                </div>
                <div className="border-t border-secondary pt-3">
                  <p className="text-sm font-hanken opacity-80">Executes scheduled tactical sweeps to maintain a pristine and orderly operational environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thick Divider line between sections */}
      <div className="border-t-4 border-secondary opacity-30"></div>

      {/* ======================================================== */}
      {/* SECTION 2: SQUAD GALLERY */}
      {/* ======================================================== */}
      <section id="gallery" className="scroll-mt-28 space-y-16">
        {/* Header */}
        <div className="border-b-4 border-secondary pb-8">
          <h1 className="headline-lg mb-4">Squad Gallery - Classified Images</h1>
          <p className="text-lg opacity-90 max-w-3xl">
            Photographic documentation of active agents. Unauthorized distribution is strictly prohibited. Refer to individual dossiers for detailed service records.
          </p>
        </div>

        {/* Group Photo */}
        <div className="flex justify-center pt-8">
          <div className="bg-surface p-4 border-2 border-secondary shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] rotate-[-1deg] max-w-3xl w-full">
            <div className="aspect-[16/9] bg-[#d9d9d9] border border-secondary flex flex-col items-center justify-center text-secondary opacity-50 relative overflow-hidden">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-4"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
              <p className="font-space-mono text-xl font-bold uppercase tracking-widest">Image Redacted</p>
              <p className="font-courier text-sm">Class Group Photo Placeholder</p>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1))] bg-[length:100%_4px] mix-blend-overlay"></div>
            </div>
            <div className="mt-4 flex justify-between items-end">
              <div>
                <h2 className="font-space-mono text-2xl font-bold tracking-tighter">THE ENTIRE SQUAD</h2>
                <p className="font-courier text-xs opacity-60">REF NO: SQ-2024-X</p>
              </div>
              <div className="border border-secondary px-2 py-1 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="font-courier text-xs font-bold">EVIDENCE 1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-secondary opacity-30 my-16"></div>

        {/* Agent Dossiers */}
        <div>
          <h2 className="headline-md border-l-4 border-primary pl-4 mb-10">AGENT DOSSIERS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {agents.map((agent, index) => (
              <div key={index} className="bg-[#e6e3e0] p-4 border-2 border-secondary shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] relative transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
                <div className="absolute -top-[14px] left-[-2px] bg-surface border-2 border-secondary px-2 py-0.5 z-10">
                  <span className="font-courier text-[10px] font-bold">AGENT {(index + 1).toString().padStart(2, '0')}</span>
                </div>
                
                <div className="bg-surface p-3 pb-8 border border-secondary shadow-sm mb-4">
                  <div className="aspect-square bg-[#d9d9d9] flex flex-col items-center justify-center border border-secondary/50 text-secondary/40">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  </div>
                </div>

                <h3 className="font-space-mono text-xl font-bold tracking-tighter mb-1">{agent.name}</h3>
                <p className="font-courier text-xs border-b border-dashed border-secondary inline-block mb-4">ALIAS: "{agent.alias}"</p>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary opacity-60"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <span className="font-hanken text-sm opacity-80">{agent.skill1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary opacity-60"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <span className="font-hanken text-sm opacity-80">{agent.skill2}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thick Divider line between sections */}
      <div className="border-t-4 border-secondary opacity-30"></div>

      {/* ======================================================== */}
      {/* SECTION 3: OPERATIONS BOARD */}
      {/* ======================================================== */}
      <section id="operations" className="scroll-mt-28 space-y-16">
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
          {/* Shift Assignments */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="headline-md border-b-2 border-secondary pb-2">SHIFT ASSIGNMENTS</h2>
            
            <div className="bg-[#e6e3e0] border-2 border-secondary shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-secondary/30 relative">
                 <div className="absolute top-0 left-0 bg-secondary text-surface px-3 py-1 label-sm z-10">
                   CURRENT ROSTER
                 </div>
                 <div className="col-span-3 pt-6 font-courier font-bold text-sm">Op Day</div>
                 <div className="col-span-6 pt-6 font-courier font-bold text-sm">Agents on Duty</div>
                 <div className="col-span-3 pt-6 font-courier font-bold text-sm text-right">Status</div>
              </div>

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

          {/* Rules of Engagement */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <h2 className="headline-md border-b-2 border-secondary pb-2 flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                RULES OF ENGAGEMENT
              </h2>

              <div className="dossier-card bg-surface p-6 pb-8 relative mt-8">
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

            {/* Classified Visual */}
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
      </section>
    </div>
  );
}
