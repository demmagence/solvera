export default function Home() {
  return (
    <div className="space-y-16">
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
            {/* Fake barcode */}
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

        {/* Chart Tree */}
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

          {/* Line down from Chief */}
          <div className="w-0.5 h-8 bg-secondary"></div>
          {/* Horizontal line connecting Sec and Treas */}
          <div className="w-[400px] h-0.5 bg-secondary"></div>
          
          <div className="flex justify-between w-[500px]">
            {/* Line down to Sec */}
            <div className="w-0.5 h-8 bg-secondary ml-[50px]"></div>
            {/* Line down to Field */}
            <div className="w-0.5 h-20 bg-secondary absolute mt-[-2px] left-1/2 -translate-x-1/2 z-0"></div>
            {/* Line down to Treas */}
            <div className="w-0.5 h-8 bg-secondary mr-[50px]"></div>
          </div>

          {/* Second Level: Secretary and Treasurer */}
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

          {/* Badge for Field Divisions */}
          <div className="bg-secondary text-surface px-4 py-1 mt-6 z-10 font-courier font-bold uppercase tracking-widest text-sm relative border-l-4 border-r-4 border-primary">
            Field Divisions
          </div>

          {/* Line down to Field Branches */}
          <div className="w-0.5 h-8 bg-secondary"></div>
          {/* Horizontal line connecting Field Divisions */}
          <div className="w-[600px] md:w-[700px] h-0.5 bg-secondary"></div>
          
          <div className="flex justify-between w-[600px] md:w-[700px]">
             <div className="w-0.5 h-8 bg-secondary ml-8"></div>
             <div className="w-0.5 h-8 bg-secondary"></div>
             <div className="w-0.5 h-8 bg-secondary mr-8"></div>
          </div>

          {/* Third Level: Field Divisions */}
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
    </div>
  );
}
