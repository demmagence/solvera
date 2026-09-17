import ClassProfile from "./components/ClassProfile";
import ChainOfCommand from "./components/ChainOfCommand";
import SquadGallery from "./components/SquadGallery";
import OperationsBoard from "./components/OperationsBoard";
import SchoolSchedule from "./components/SchoolSchedule";

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-28">
      {/* SECTION 1: CLASS PROFILE & DIRECTIVES */}
      <ClassProfile />

      {/* Divider */}
      <div className="border-t-4 border-secondary opacity-30"></div>

      {/* SECTION 2: CHAIN OF COMMAND (KELAS 11 & 12 TOGGLE) */}
      <ChainOfCommand />

      {/* Divider */}
      <div className="border-t-4 border-secondary opacity-30"></div>

      {/* SECTION 3: SQUAD GALLERY & ALL 35 AGENT DOSSIERS */}
      <SquadGallery />

      {/* Divider */}
      <div className="border-t-4 border-secondary opacity-30"></div>

      {/* SECTION 4: OPERATIONS BOARD (PIKET SENIN-JUMAT & RULES) */}
      <OperationsBoard />

      {/* Divider */}
      <div className="border-t-4 border-secondary opacity-30"></div>

      {/* SECTION 5: TACTICAL TIMETABLE (JADWAL SEKOLAH) */}
      <SchoolSchedule />
    </div>
  );
}
