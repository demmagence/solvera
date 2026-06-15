"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let startX = 0;
    let startY = 0;
    let dx = 0;
    let dy = 0;
    let isDragging = false;
    let isTransitioning = false;

    const handleStart = (clientX: number, clientY: number) => {
      if (isTransitioning) return;
      isDragging = true;
      startX = clientX;
      startY = clientY;
      dx = 0;
      dy = 0;
      card.style.transition = "none";
    };

    const handleMove = (clientX: number, clientY: number, e: Event) => {
      if (!isDragging) return;
      dx = clientX - startX;
      dy = clientY - startY;
      const rotate = dx * 0.05;
      
      if (Math.abs(dx) > 10 && e.cancelable) {
        e.preventDefault();
      }

      card.style.transform = `translate3d(${dx}px, ${dy}px, 0) rotate(${rotate}deg)`;
    };

    const handleEnd = () => {
      if (!isDragging) return;
      isDragging = false;

      const threshold = 120;
      if (Math.abs(dx) > threshold) {
        isTransitioning = true;
        const direction = dx > 0 ? 1 : -1;
        const targetX = direction * (window.innerWidth + 200);
        const targetY = dy + (dy > 0 ? 100 : -100);
        const targetRotate = direction * 35;

        card.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease-out";
        card.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) rotate(${targetRotate}deg)`;
        card.style.opacity = "0";

        setTimeout(() => {
          setCurrentSlide((prev) => {
            const len = 6;
            if (direction > 0) {
              return prev === 0 ? len - 1 : prev - 1;
            } else {
              return prev === len - 1 ? 0 : prev + 1;
            }
          });

          card.style.transition = "none";
          card.style.transform = "translate3d(0, 20px, 0) scale(0.95) rotate(0deg)";
          card.style.opacity = "0";

          // Force reflow
          card.offsetHeight;

          card.style.transition = "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.15), opacity 0.35s ease-out";
          card.style.transform = "translate3d(0, 0, 0) scale(1) rotate(-0.5deg)";
          card.style.opacity = "1";

          setTimeout(() => {
            card.style.transform = "";
            card.style.transition = "";
            card.style.opacity = "";
            isTransitioning = false;
          }, 400);

        }, 400);
      } else {
        card.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.25)";
        card.style.transform = "translate3d(0, 0, 0) rotate(-0.5deg)";
        
        setTimeout(() => {
          if (!isDragging && !isTransitioning) {
            card.style.transform = "";
            card.style.transition = "";
          }
        }, 300);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a") || e.button !== 0) return;
      handleStart(e.clientX, e.clientY);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY, e);
    };

    const onMouseUp = () => {
      handleEnd();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    const onTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a")) return;
      handleStart(e.touches[0].clientX, e.touches[0].clientY);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onTouchEnd);
    };

    const onTouchMove = (e: TouchEvent) => {
      handleMove(e.touches[0].clientX, e.touches[0].clientY, e);
    };

    const onTouchEnd = () => {
      handleEnd();
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };

    card.addEventListener("mousedown", onMouseDown);
    card.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      card.removeEventListener("mousedown", onMouseDown);
      card.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  const slides = [
    { url: "/squad/1.jpg", title: "OPERASI INSIDEN UTAMA", ref: "SQ-OP-01", desc: "Dokumentasi taktis seluruh agen skuad di sektor utama.", aspect: "aspect-[4/3] w-full" },
    { url: "/squad/2.jpg", title: "BRIEFING HARIAN REGEMENTAL", ref: "SQ-OP-02", desc: "Pengumpulan bukti lapangan dan pembagian sektor investigasi.", aspect: "aspect-[4/3] w-full" },
    { url: "/squad/3.jpg", title: "TACTICAL BRIEFING SEKRETARIS", ref: "SQ-OP-03", desc: "Sinkronisasi dokumen intelijen skuad.", aspect: "aspect-[3/4] max-w-md mx-auto w-full" },
    { url: "/squad/4.jpg", title: "EVALUASI ANALITIS LOGISTIK", ref: "SQ-OP-04", desc: "Peninjauan aset taktis dan keuangan operasional.", aspect: "aspect-[4/3] w-full" },
    { url: "/squad/5.jpg", title: "SIMULASI PENGAMANAN SEKTOR", ref: "SQ-OP-05", desc: "Latihan koordinasi pertahanan perimeter dan pengawalan.", aspect: "aspect-[16/9] w-full" },
    { url: "/squad/6.jpg", title: "RAPAT DEWAN KOMANDO", ref: "SQ-OP-06", desc: "Pengambilan keputusan misi kritis oleh staf wali kelas.", aspect: "aspect-[4/3] w-full" }
  ];

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

        {/* ======================================================== */}
        {/* SECTION 1.3: CHAIN OF COMMAND */}
        {/* ======================================================== */}
        <div className="pt-12">
          <div className="flex items-end justify-between border-b-4 border-secondary pb-4 mb-16">
            <h2 className="headline-md">Chain of Command</h2>
            <span className="label-sm border border-secondary px-2 py-1 bg-surface-container">ORG-CHART-V1.0</span>
          </div>

          <div className="flex flex-col items-center">
            
            {/* WALI KELAS SECTION */}
            {/* ======================================================== */}
            {/* LEVEL 1: WALI KELAS */}
            {/* ======================================================== */}
            <div className="dossier-card w-72 p-6 text-center z-10 bg-surface">
              <div className="absolute top-[-10px] left-[-10px] bg-primary text-surface px-2 py-1 label-sm">
                Clearance L1
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-secondary mx-auto mb-4 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><circle cx="12" cy="11" r="3" /></svg>
              </div>
              <h3 className="font-space-mono font-bold text-xl mb-1">WALI KELAS</h3>
              <p className="label-md text-primary mb-4">Ibu Sarah Siti Sumaerah</p>
              <div className="border-t border-dashed border-secondary/30 pt-3">
                <p className="label-sm">Status: <span className="text-primary font-bold">ACTIVE</span></p>
              </div>
            </div>

            {/* Connecting Lines: Level 1 -> Level 2 */}
            <div className="w-0.5 h-8 bg-secondary"></div>
            <div className="w-[400px] h-0.5 bg-secondary"></div>
            <div className="flex justify-between w-[500px] relative">
              <div className="w-0.5 h-8 bg-secondary ml-[50px]"></div>
              <div className="w-0.5 h-20 bg-secondary absolute mt-[-2px] left-1/2 -translate-x-1/2 z-0"></div>
              <div className="w-0.5 h-8 bg-secondary mr-[50px]"></div>
            </div>

            {/* COMMANDERS SECTION */}
            {/* ======================================================== */}
            {/* LEVEL 2: KETUA & WAKIL KETUA MURID */}
            {/* ======================================================== */}
            <div className="flex flex-col md:flex-row justify-between gap-12 w-full max-w-[680px] z-10 relative">
              
              {/* KETUA MURID */}
              <div className="dossier-card flex-1 p-5 bg-surface relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-space-mono font-bold text-lg mb-1">KETUA MURID</h3>
                    <p className="label-sm text-primary">M. ARSA PRAYATA</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                </div>
                <div className="border-t border-secondary pt-3">
                  <p className="text-sm font-hanken opacity-80">Memimpin skuad operasional kelas, koordinasi taktis tingkat tinggi, dan penanggung jawab utama misi.</p>
                </div>
              </div>

              {/* WAKIL KETUA MURID */}
              <div className="dossier-card flex-1 p-5 bg-surface relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-space-mono font-bold text-lg mb-1">WAKIL KETUA MURID</h3>
                    <p className="label-sm text-primary">M. ARKAN RAIHAN NUGRAHA</p>
                  </div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <div className="border-t border-secondary pt-3">
                  <p className="text-sm font-hanken opacity-80">Mendukung komando utama, koordinasi logistik taktis internal, dan penjamin kontinuitas operasional skuad.</p>
                </div>
              </div>
            </div>

            {/* Connecting Lines: Level 2 -> Level 3 */}
            <div className="w-0.5 h-12 bg-secondary"></div>

            {/* SUB-SECTIONS (FIELD DIVISIONS) */}
            {/* ======================================================== */}
            
            {/* DIVISION: SEKRETARIS */}
            {/* ======================================================== */}
            <div className="w-full flex flex-col items-center">
              <div className="bg-secondary text-surface px-4 py-1 z-10 font-courier font-bold uppercase tracking-widest text-sm relative border-l-4 border-r-4 border-primary">
                Sekretaris Division
              </div>
              <div className="w-0.5 h-8 bg-secondary"></div>
              <div className="w-[600px] md:w-[700px] h-0.5 bg-secondary"></div>
              <div className="flex justify-between w-[600px] md:w-[700px] mb-4">
                <div className="w-0.5 h-4 bg-secondary ml-8"></div>
                <div className="w-0.5 h-4 bg-secondary"></div>
                <div className="w-0.5 h-4 bg-secondary mr-8"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 w-full max-w-[900px] justify-between">
                {/* Sekretaris 01 */}
                <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Sekretaris 01</p>
                      <h3 className="font-space-mono font-bold text-lg">Syahira</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Bertanggung jawab atas pencatatan log book, administrasi surat menyurat, dan pengarsipan berkas taktis.</p>
                  </div>
                </div>

                {/* Sekretaris 02 */}
                <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Sekretaris 02</p>
                      <h3 className="font-space-mono font-bold text-lg">Rahma</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Mengelola risalah rapat skuad, pendataan profil agen, dan distribusi instruksi komando.</p>
                  </div>
                </div>

                {/* Sekretaris 03 */}
                <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Sekretaris 03</p>
                      <h3 className="font-space-mono font-bold text-lg">Putri</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Mendokumentasikan data presensi agen dan memelihara ketertiban catatan administratif berkala.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-0.5 h-8 bg-secondary"></div>

            {/* DIVISION: BENDAHARA */}
            {/* ======================================================== */}
            <div className="w-full flex flex-col items-center">
              <div className="bg-secondary text-surface px-4 py-1 z-10 font-courier font-bold uppercase tracking-widest text-sm relative border-l-4 border-r-4 border-primary">
                Bendahara Division
              </div>
              <div className="w-0.5 h-8 bg-secondary"></div>
              <div className="w-[600px] md:w-[700px] h-0.5 bg-secondary"></div>
              <div className="flex justify-between w-[600px] md:w-[700px] mb-4">
                <div className="w-0.5 h-4 bg-secondary ml-8"></div>
                <div className="w-0.5 h-4 bg-secondary"></div>
                <div className="w-0.5 h-4 bg-secondary mr-8"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 w-full max-w-[900px] justify-between">
                {/* Bendahara 01 */}
                <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Bendahara 01</p>
                      <h3 className="font-space-mono font-bold text-lg">NAZWATUS SHIFA</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Mengawasi aliran dana logistik, pencatatan kas skuad, dan keamanan anggaran operasional.</p>
                  </div>
                </div>

                {/* Bendahara 02 */}
                <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Bendahara 02</p>
                      <h3 className="font-space-mono font-bold text-lg">RESNA RAHMAWATI</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Mengelola pelaporan keuangan mingguan, penagihan iuran taktis, dan perencanaan dana darurat.</p>
                  </div>
                </div>

                {/* Bendahara 03 */}
                <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Bendahara 03</p>
                      <h3 className="font-space-mono font-bold text-lg">ROPI'I ALAWI</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Audit aset finansial kelas, verifikasi pengeluaran kebutuhan lapangan, dan rekonsiliasi kas operasional.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-0.5 h-8 bg-secondary"></div>

            {/* DIVISION: SEKSI KEAGAMAAN */}
            {/* ======================================================== */}
            <div className="w-full flex flex-col items-center">
              <div className="bg-secondary text-surface px-4 py-1 z-10 font-courier font-bold uppercase tracking-widest text-sm relative border-l-4 border-r-4 border-primary">
                Seksi Keagamaan
              </div>
              <div className="w-0.5 h-8 bg-secondary"></div>
              <div className="w-[400px] h-0.5 bg-secondary"></div>
              <div className="flex justify-between w-[400px] mb-4">
                <div className="w-0.5 h-4 bg-secondary ml-8"></div>
                <div className="w-0.5 h-4 bg-secondary mr-8"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 w-full max-w-[800px] justify-center">
                {/* Keagamaan 01 */}
                <div className="dossier-card flex-1 max-w-[380px] p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Keagamaan 01</p>
                      <h3 className="font-space-mono font-bold text-lg">Ibnu</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Membina ketahanan spiritual skuad, mengoordinasi kegiatan ibadah bersama, dan pembinaan moral.</p>
                  </div>
                </div>

                {/* Keagamaan 02 */}
                <div className="dossier-card flex-1 max-w-[380px] p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Keagamaan 02</p>
                      <h3 className="font-space-mono font-bold text-lg">Jihan</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Mengelola agenda perayaan hari besar keagamaan dan memelihara toleransi antar agen kelas.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-0.5 h-8 bg-secondary"></div>

            {/* DIVISION: SEKSI PENDIDIKAN */}
            {/* ======================================================== */}
            <div className="w-full flex flex-col items-center">
              <div className="bg-secondary text-surface px-4 py-1 z-10 font-courier font-bold uppercase tracking-widest text-sm relative border-l-4 border-r-4 border-primary">
                Seksi Pendidikan
              </div>
              <div className="w-0.5 h-8 bg-secondary"></div>
              <div className="w-[400px] h-0.5 bg-secondary"></div>
              <div className="flex justify-between w-[400px] mb-4">
                <div className="w-0.5 h-4 bg-secondary ml-8"></div>
                <div className="w-0.5 h-4 bg-secondary mr-8"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 w-full max-w-[800px] justify-center">
                {/* Pendidikan 01 */}
                <div className="dossier-card flex-1 max-w-[380px] p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Pendidikan 01</p>
                      <h3 className="font-space-mono font-bold text-lg">Andhika</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Merancang strategi akademik, distribusi bahan intelijen kurikulum, dan mentoring inteligensia.</p>
                  </div>
                </div>

                {/* Pendidikan 02 */}
                <div className="dossier-card flex-1 max-w-[380px] p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Pendidikan 02</p>
                      <h3 className="font-space-mono font-bold text-lg">Rafa</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Koordinasi persiapan ujian, pemantauan performa akademik skuad, dan penyediaan referensi studi.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-0.5 h-8 bg-secondary"></div>

            {/* DIVISION: SEKSI OLAHRAGA */}
            {/* ======================================================== */}
            <div className="w-full flex flex-col items-center">
              <div className="bg-secondary text-surface px-4 py-1 z-10 font-courier font-bold uppercase tracking-widest text-sm relative border-l-4 border-r-4 border-primary">
                Seksi Olahraga
              </div>
              <div className="w-0.5 h-8 bg-secondary"></div>
              <div className="w-[400px] h-0.5 bg-secondary"></div>
              <div className="flex justify-between w-[400px] mb-4">
                <div className="w-0.5 h-4 bg-secondary ml-8"></div>
                <div className="w-0.5 h-4 bg-secondary mr-8"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 w-full max-w-[800px] justify-center">
                {/* Olahraga 01 */}
                <div className="dossier-card flex-1 max-w-[380px] p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Olahraga 01</p>
                      <h3 className="font-space-mono font-bold text-lg">Jibril</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 0-4 4v5c0 2.2 1.8 4 4 4s4-1.8 4-4V6a4 4 0 0 0-4-4z" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Mengatur program pembinaan fisik skuad, koordinasi latihan kebugaran, dan taktik olahraga lapangan.</p>
                  </div>
                </div>

                {/* Olahraga 02 */}
                <div className="dossier-card flex-1 max-w-[380px] p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Olahraga 02</p>
                      <h3 className="font-space-mono font-bold text-lg">Asyraf</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 0-4 4v5c0 2.2 1.8 4 4 4s4-1.8 4-4V6a4 4 0 0 0-4-4z" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Memonitor kesiapan stamina fisik agen dan memimpin skuad dalam kompetisi fisik eksternal.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-0.5 h-8 bg-secondary"></div>

            {/* DIVISION: SEKSI KEBERSIHAN */}
            {/* ======================================================== */}
            <div className="w-full flex flex-col items-center">
              <div className="bg-secondary text-surface px-4 py-1 z-10 font-courier font-bold uppercase tracking-widest text-sm relative border-l-4 border-r-4 border-primary">
                Seksi Kebersihan
              </div>
              <div className="w-0.5 h-8 bg-secondary"></div>
              <div className="w-[400px] h-0.5 bg-secondary"></div>
              <div className="flex justify-between w-[400px] mb-4">
                <div className="w-0.5 h-4 bg-secondary ml-8"></div>
                <div className="w-0.5 h-4 bg-secondary mr-8"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 w-full max-w-[800px] justify-center">
                {/* Kebersihan 01 */}
                <div className="dossier-card flex-1 max-w-[380px] p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Kebersihan 01</p>
                      <h3 className="font-space-mono font-bold text-lg">Dika</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Memimpin sterilisasi sektor utama, sanitasi berkala, dan pemeliharaan kenyamanan markas.</p>
                  </div>
                </div>

                {/* Kebersihan 02 */}
                <div className="dossier-card flex-1 max-w-[380px] p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Kebersihan 02</p>
                      <h3 className="font-space-mono font-bold text-lg">Keanu</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Mengelola pengelolaan limbah operasional, pemeliharaan kebersihan koridor, dan kesiapan alat kebersihan.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-0.5 h-8 bg-secondary"></div>

            {/* DIVISION: SEKSI PERALATAN */}
            {/* ======================================================== */}
            <div className="w-full flex flex-col items-center">
              <div className="bg-secondary text-surface px-4 py-1 z-10 font-courier font-bold uppercase tracking-widest text-sm relative border-l-4 border-r-4 border-primary">
                Seksi Peralatan
              </div>
              <div className="w-0.5 h-8 bg-secondary"></div>
              <div className="w-[400px] h-0.5 bg-secondary"></div>
              <div className="flex justify-between w-[400px] mb-4">
                <div className="w-0.5 h-4 bg-secondary ml-8"></div>
                <div className="w-0.5 h-4 bg-secondary mr-8"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 w-full max-w-[800px] justify-center">
                {/* Peralatan 01 */}
                <div className="dossier-card flex-1 max-w-[380px] p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Peralatan 01</p>
                      <h3 className="font-space-mono font-bold text-lg">Deryl</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Inventarisasi aset perlengkapan kelas, pengadaan peralatan operasional, dan perawatan logistik pendukung.</p>
                  </div>
                </div>

                {/* Peralatan 02 */}
                <div className="dossier-card flex-1 max-w-[380px] p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Peralatan 02</p>
                      <h3 className="font-space-mono font-bold text-lg">Fariz</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Manajemen distribusi perkakas kelas, pemeliharaan sistem kelistrikan, dan kesiapan sarana presentasi.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-0.5 h-8 bg-secondary"></div>

            {/* DIVISION: SEKSI KEAMANAN */}
            {/* ======================================================== */}
            <div className="w-full flex flex-col items-center">
              <div className="bg-secondary text-surface px-4 py-1 z-10 font-courier font-bold uppercase tracking-widest text-sm relative border-l-4 border-r-4 border-primary">
                Seksi Keamanan
              </div>
              <div className="w-0.5 h-8 bg-secondary"></div>
              <div className="w-[400px] h-0.5 bg-secondary"></div>
              <div className="flex justify-between w-[400px] mb-4">
                <div className="w-0.5 h-4 bg-secondary ml-8"></div>
                <div className="w-0.5 h-4 bg-secondary mr-8"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 w-full max-w-[800px] justify-center">
                {/* Keamanan 01 */}
                <div className="dossier-card flex-1 max-w-[380px] p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Keamanan 01</p>
                      <h3 className="font-space-mono font-bold text-lg">Kiano</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Patroli ketertiban sektor, penjagaan pintu masuk operasional, dan mediasi konflik antar agen.</p>
                  </div>
                </div>

                {/* Keamanan 02 */}
                <div className="dossier-card flex-1 max-w-[380px] p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Keamanan 02</p>
                      <h3 className="font-space-mono font-bold text-lg">Alyandra</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Pencegahan kebocoran informasi taktis, penegakan protokol disiplin kelas, dan pengawasan perimeter.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-0.5 h-8 bg-secondary"></div>

            {/* DIVISION: SEKSI DOKUMENTASI */}
            {/* ======================================================== */}
            <div className="w-full flex flex-col items-center">
              <div className="bg-secondary text-surface px-4 py-1 z-10 font-courier font-bold uppercase tracking-widest text-sm relative border-l-4 border-r-4 border-primary">
                Seksi Dokumentasi
              </div>
              <div className="w-0.5 h-8 bg-secondary"></div>
              <div className="w-[600px] md:w-[700px] h-0.5 bg-secondary"></div>
              <div className="flex justify-between w-[600px] md:w-[700px] mb-4">
                <div className="w-0.5 h-4 bg-secondary ml-8"></div>
                <div className="w-0.5 h-4 bg-secondary ml-24"></div>
                <div className="w-0.5 h-4 bg-secondary mr-24"></div>
                <div className="w-0.5 h-4 bg-secondary mr-8"></div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 w-full max-w-[950px] justify-between">
                {/* Dokumentasi 01 */}
                <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Dokumentasi 01</p>
                      <h3 className="font-space-mono font-bold text-lg">Jihan</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Perekaman visual operasi kelas, dokumentasi momen bersejarah, dan kurator galeri skuad.</p>
                  </div>
                </div>

                {/* Dokumentasi 02 */}
                <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Dokumentasi 02</p>
                      <h3 className="font-space-mono font-bold text-lg">Nesya</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Penyuntingan materi dokumentasi, desain publikasi intelijen, dan pengelolaan arsip media.</p>
                  </div>
                </div>

                {/* Dokumentasi 03 */}
                <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Dokumentasi 03</p>
                      <h3 className="font-space-mono font-bold text-lg">Haidar</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Pengambilan gambar taktis lapangan, liputan kegiatan skuad, dan pemeliharaan alat perekam.</p>
                  </div>
                </div>

                {/* Dokumentasi 04 */}
                <div className="dossier-card flex-1 p-5 bg-[#e6e3e0]">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="label-sm opacity-60 mb-1">Seksi Dokumentasi 04</p>
                      <h3 className="font-space-mono font-bold text-lg">Ilisha</h3>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                  </div>
                  <div className="border-t border-secondary pt-3">
                    <p className="text-sm font-hanken opacity-80">Manajemen pustaka dokumentasi digital, penyusunan kliping visual kelas, dan dokumentasi profil agen.</p>
                  </div>
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

        {/* Group Photo Slideshow */}
        <div className="flex flex-col items-center pt-8">
          <div 
            ref={cardRef}
            className="bg-surface p-4 border-2 border-secondary shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] rotate-[-0.5deg] max-w-3xl w-full relative select-none cursor-grab active:cursor-grabbing will-change-transform"
          >
            
            {/* Visual classified overlay effect */}
            <div className={`border border-secondary relative overflow-hidden bg-secondary flex items-center justify-center transition-all duration-300 ${slides[currentSlide].aspect}`}>
              <img 
                src={slides[currentSlide].url} 
                alt={slides[currentSlide].title} 
                className="w-full h-full object-cover transition-opacity duration-300 pointer-events-none"
                draggable="false"
              />

              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1))] bg-[length:100%_4px] mix-blend-overlay pointer-events-none"></div>
              
              {/* Top Secret Badge Overlay */}
              <div className="absolute top-4 left-4 bg-primary text-surface font-space-mono font-bold text-xs px-3 py-1 border border-primary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] z-10 tracking-widest rotate-[-3deg]">
                DECLASSIFIED
              </div>
            </div>
            
            {/* Caption & Metadata */}
            <div className="mt-4 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-t border-dashed border-secondary/35 pt-4">
              <div>
                <h2 className="font-space-mono text-2xl font-bold tracking-tighter uppercase">{slides[currentSlide].title}</h2>
                <p className="font-courier text-xs opacity-60 mt-1 uppercase">REF NO: {slides[currentSlide].ref}</p>
                <p className="font-hanken text-sm opacity-90 mt-2 max-w-xl">{slides[currentSlide].desc}</p>
                
                {/* Swipe Gesture Visual Instruction Hint */}
                <p className="font-space-mono text-[10px] text-primary/75 mt-3.5 tracking-wider uppercase font-bold flex items-center gap-1.5 pointer-events-none">
                  <svg className="w-3.5 h-3.5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>
                  [ DRAG / SWIPE DOSIR KARTU UNTUK NAVIGASI ]
                </p>
              </div>
              <div className="border border-secondary px-3 py-1.5 flex items-center gap-2 bg-surface-container-low shrink-0 self-end md:self-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                <span className="font-courier text-xs font-bold uppercase">EVIDENCE {currentSlide + 1} OF 6</span>
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
