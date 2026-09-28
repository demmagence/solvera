export default function ClassProfile() {
  return (
    <section id="profile" className="scroll-mt-28 space-y-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b-4 border-secondary pb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary text-surface px-3 py-1 font-courier text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            FILE REF: SC-001 // CLASSIFIED INTEL
          </div>
          <h1 className="headline-lg mb-3 tracking-tight">Dossier: Class Profile</h1>
          <p className="text-base sm:text-lg border-l-4 border-primary pl-4 opacity-90 max-w-2xl leading-relaxed font-hanken">
            Comprehensive overview of Solvera Class operational directives, command protocol, and tactical directives for{" "}
            <strong>PPLG RPL 2</strong>. Unauthorized disclosure of this document is strictly prohibited under protocol 88.
          </p>
        </div>

        <div className="flex flex-row md:flex-col items-start md:items-end justify-between md:justify-start gap-2 border border-secondary p-3 bg-surface-container-low shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
          <div className="font-courier text-xs text-left md:text-right">
            <p className="opacity-60 uppercase text-[10px]">Registry Status</p>
            <p className="text-primary font-bold tracking-wider text-sm">[ DECLASSIFIED ]</p>
          </div>
          <div className="font-courier text-xs text-left md:text-right border-t md:border-t-0 md:pt-0 pt-2 border-secondary/20">
            <p className="opacity-60 uppercase text-[10px]">Active Operatives</p>
            <p className="font-bold text-secondary text-sm">35 REGISTERED AGENTS</p>
          </div>
        </div>
      </div>

      {/* Briefing & Directives Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-secondary text-surface px-3 py-1 inline-block label-md">
            Doc Ref: VN-88 // STRATAGEM
          </div>
          <h2 className="headline-md">Confidential Briefing</h2>
          <p className="opacity-90 leading-relaxed font-hanken text-sm sm:text-base">
            Primary directives establishing the foundational goals, strategic syllabus mastery, and operational parameters of
            the squad across academic sectors.
          </p>

          {/* Quick Metrics */}
          <div className="space-y-3 pt-2">
            <div className="p-3 border border-secondary bg-[#eae8e7] font-courier text-xs">
              <span className="opacity-60 block text-[10px]">SECTOR DOMAIN:</span>
              <strong className="text-secondary text-sm">PPLG (Pengembangan Perangkat Lunak & Gim)</strong>
            </div>
            <div className="p-3 border border-secondary bg-[#eae8e7] font-courier text-xs">
              <span className="opacity-60 block text-[10px]">BASE OF OPERATIONS:</span>
              <strong className="text-secondary text-sm">Lab Software 2 & Tactical Room RPL 2</strong>
            </div>
          </div>

          <div className="pt-2 opacity-50">
            {/* Barcode SVG */}
            <svg width="140" height="36" viewBox="0 0 100 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
            <p className="font-courier text-[10px] tracking-widest mt-1 opacity-70">AUTH-SEC-PPLG2-2026</p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="dossier-card p-6 sm:p-8 md:p-10 bg-[#e6e3e0]">
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="w-6 sm:w-8 h-2 sm:h-3 bg-secondary"></div>
              <div className="w-12 sm:w-16 h-2 sm:h-3 bg-secondary"></div>
            </div>

            <div className="space-y-8 sm:space-y-10">
              <section>
                <h3 className="label-md text-primary border-b-2 border-primary/30 inline-block mb-3">
                  Directive Alpha: Strategic Vision
                </h3>
                <div className="border-l-4 border-secondary pl-4 sm:pl-6 py-1">
                  <p className="text-lg sm:text-xl font-bold font-hanken leading-snug">
                    To establish a formidable academic intelligence network, fostering elite analytical minds capable of
                    decoding complex syllabus matrices and executing flawless software engineering operations.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="label-md text-primary border-b-2 border-primary/30 inline-block mb-4">
                  Directive Beta: Mission Objectives
                </h3>
                <ul className="space-y-5 font-hanken text-sm sm:text-base">
                  <li className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-6 h-6 border-2 border-primary text-primary flex items-center justify-center mt-0.5 font-bold font-courier text-xs">
                      ✓
                    </div>
                    <p className="leading-relaxed">
                      <strong>Rigorous Integrity:</strong> Maintain uncompromising academic discipline through peer-review,
                      collaborative code architecture, and high standards across all technical competencies.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-6 h-6 border-2 border-primary text-primary flex items-center justify-center mt-0.5 font-bold font-courier text-xs">
                      ✓
                    </div>
                    <p className="leading-relaxed">
                      <strong>Tactical Execution:</strong> Deploy modern study stratagems to secure superior mission success rates in
                      vocational assessments, standardized national exams, and software project showcases.
                    </p>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-6 h-6 border-2 border-primary text-primary flex items-center justify-center mt-0.5 font-bold font-courier text-xs">
                      ✓
                    </div>
                    <p className="leading-relaxed">
                      <strong>Solidarity & Comradeship:</strong> Cultivate an environment of absolute comradeship, strategic
                      mutual defense, and collective growth among all 35 active operatives within Solvera Class.
                    </p>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
