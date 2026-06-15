export default function Gallery() {
  const agents = [
    { name: "J. DOE", alias: "SPECTER", skill1: "Forensics Expert", skill2: "Cryptography" },
    { name: "S. SMITH", alias: "WHISPER", skill1: "Interrogation", skill2: "Undercover Ops" },
    { name: "M. JONES", alias: "HAWK", skill1: "Surveillance", skill2: "Tactical Entry" },
    { name: "A. DAVIS", alias: "GHOST", skill1: "Infiltration", skill2: "Cyber Ops" },
    { name: "R. EVANS", alias: "SHADOW", skill1: "Reconnaissance", skill2: "Demolitions" },
    { name: "K. BAKER", alias: "EAGLE", skill1: "Sharpshooter", skill2: "Intelligence" },
  ];

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="border-b-4 border-secondary pb-8">
        <h1 className="headline-lg mb-4">Squad Gallery - Classified Images</h1>
        <p className="text-lg opacity-90 max-w-3xl">
          Photographic documentation of active agents. Unauthorized distribution is strictly prohibited. Refer to individual dossiers for detailed service records.
        </p>
      </div>

      {/* The Entire Squad Photo */}
      <div className="flex justify-center pt-8">
        <div className="bg-surface p-4 border-2 border-secondary shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] rotate-[-1deg] max-w-3xl w-full">
          <div className="aspect-[16/9] bg-[#d9d9d9] border border-secondary flex flex-col items-center justify-center text-secondary opacity-50 relative overflow-hidden">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-4"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <p className="font-space-mono text-xl font-bold uppercase tracking-widest">Image Redacted</p>
            <p className="font-courier text-sm">Class Group Photo Placeholder</p>
            
            {/* Scanlines overlay */}
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
              {/* Top Tab */}
              <div className="absolute -top-[14px] left-[-2px] bg-surface border-2 border-secondary px-2 py-0.5 z-10">
                <span className="font-courier text-[10px] font-bold">AGENT {(index + 1).toString().padStart(2, '0')}</span>
              </div>
              
              {/* Polaroid Photo Frame */}
              <div className="bg-surface p-3 pb-8 border border-secondary shadow-sm mb-4">
                <div className="aspect-square bg-[#d9d9d9] flex flex-col items-center justify-center border border-secondary/50 text-secondary/40">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              </div>

              {/* Agent Info */}
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
    </div>
  );
}
