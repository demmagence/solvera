export interface PiketDay {
  day: string;
  dayIndo: string;
  dutyTime: string;
  agents: string[]; // nicknames/names
  leadAgent: string;
  sector: string;
  status: "[ ACTIVE DUTY ]" | "[ STANDBY ]" | "[ SCHEDULED ]";
}

export const PIKET_ROSTER: PiketDay[] = [
  {
    day: "MONDAY",
    dayIndo: "SENIN",
    dutyTime: "06:30 - 07:15 & 15:30 - 16:15",
    agents: ["Rheivan", "Rafi", "Rofi", "Ilisha", "Fariz", "Arkan", "Adif", "Fajar"],
    leadAgent: "Arkan",
    sector: "Sector Alpha (Front & Command Desk)",
    status: "[ ACTIVE DUTY ]",
  },
  {
    day: "TUESDAY",
    dayIndo: "SELASA",
    dutyTime: "06:30 - 07:15 & 15:30 - 16:15",
    agents: ["Haidar", "Farrel", "Resna", "Andhika", "Ibnu", "Jihan", "Nazwa"],
    leadAgent: "Andhika",
    sector: "Sector Bravo (Sanitation & Library)",
    status: "[ STANDBY ]",
  },
  {
    day: "WEDNESDAY",
    dayIndo: "RABU",
    dutyTime: "06:30 - 07:15 & 15:30 - 16:15",
    agents: ["Dika", "Bama", "Syahira", "Keanu", "Kiano", "Asyraf", "Arsa"],
    leadAgent: "Dika",
    sector: "Sector Charlie (Midstation & Devices)",
    status: "[ STANDBY ]",
  },
  {
    day: "THURSDAY",
    dayIndo: "KAMIS",
    dutyTime: "06:30 - 07:15 & 15:30 - 16:15",
    agents: ["Revan", "Rafa", "Nesya", "Rashqa", "Dimitar", "Rahma"],
    leadAgent: "Rafa",
    sector: "Sector Delta (Archives & Corridor)",
    status: "[ STANDBY ]",
  },
  {
    day: "FRIDAY",
    dayIndo: "JUM'AT",
    dutyTime: "06:30 - 07:00 & 11:30 - 12:30",
    agents: ["Putri", "Dzaky", "Fagian", "Jibril", "Deryl", "Afdal", "Panca"],
    leadAgent: "Panca",
    sector: "Sector Echo (Perimeter & Hardware)",
    status: "[ STANDBY ]",
  },
];

export interface LessonPeriod {
  period: number;
  time: string;
  code: string;
  subject: string;
  instructor: string;
  room: string;
  type: "KEJURUAN" | "UMUM" | "ISTIRAHAT";
}

export interface DayTimetable {
  day: string;
  dayIndo: string;
  code: string;
  periods: LessonPeriod[];
}

export const SCHOOL_TIMETABLE: DayTimetable[] = [
  {
    day: "MONDAY",
    dayIndo: "SENIN",
    code: "SCH-MON-01",
    periods: [
      { period: 1, time: "07:00 - 07:45", code: "UPC-01", subject: "Upacara Bendera / Briefing Pagi", instructor: "Staf Pendidik", room: "Field / Yard", type: "UMUM" },
      { period: 2, time: "07:45 - 09:15", code: "PPLG-01", subject: "Pemodelan Perangkat Lunak (PPL)", instructor: "Guru Pengampu", room: "Lab Software 2", type: "KEJURUAN" },
      { period: 3, time: "09:15 - 09:30", code: "REC-01", subject: "Tactical Recess / Istirahat", instructor: "-", room: "Mess Hall", type: "ISTIRAHAT" },
      { period: 4, time: "09:30 - 11:45", code: "PBO-01", subject: "Pemrograman Berorientasi Objek (PBO)", instructor: "Guru Kejuruan", room: "Lab Software 2", type: "KEJURUAN" },
      { period: 5, time: "11:45 - 12:30", code: "REC-02", subject: "Ishoma / Spiritual Routine", instructor: "-", room: "Mosque", type: "ISTIRAHAT" },
      { period: 6, time: "12:30 - 14:45", code: "WEB-01", subject: "Pemrograman Web & Perangkat Bergerak", instructor: "Guru Kejuruan", room: "Lab Software 2", type: "KEJURUAN" },
    ],
  },
  {
    day: "TUESDAY",
    dayIndo: "SELASA",
    code: "SCH-TUE-02",
    periods: [
      { period: 1, time: "07:00 - 08:30", code: "MTK-01", subject: "Matematika Terapan & Logika", instructor: "Guru Mapel", room: "Ruang XI PPLG 2", type: "UMUM" },
      { period: 2, time: "08:30 - 10:00", code: "ING-01", subject: "Bahasa Inggris Komunikasi Teknis", instructor: "Guru Mapel", room: "Ruang XI PPLG 2", type: "UMUM" },
      { period: 3, time: "10:00 - 10:15", code: "REC-01", subject: "Tactical Recess / Istirahat", instructor: "-", room: "Mess Hall", type: "ISTIRAHAT" },
      { period: 4, time: "10:15 - 12:00", code: "DB-01", subject: "Basis Data & SQL Architecture", instructor: "Guru Kejuruan", room: "Lab Software 1", type: "KEJURUAN" },
      { period: 5, time: "12:00 - 12:45", code: "REC-02", subject: "Ishoma / Spiritual Routine", instructor: "-", room: "Mosque", type: "ISTIRAHAT" },
      { period: 6, time: "12:45 - 15:00", code: "PRJ-01", subject: "Projek Kreatif & Kewirausahaan (PKK)", instructor: "Guru PKK", room: "Ruang Kreatif", type: "KEJURUAN" },
    ],
  },
  {
    day: "WEDNESDAY",
    dayIndo: "RABU",
    code: "SCH-WED-03",
    periods: [
      { period: 1, time: "07:00 - 09:15", code: "WEB-02", subject: "Fullstack Web & API Development", instructor: "Guru Kejuruan", room: "Lab Software 2", type: "KEJURUAN" },
      { period: 2, time: "09:15 - 09:30", code: "REC-01", subject: "Tactical Recess / Istirahat", instructor: "-", room: "Mess Hall", type: "ISTIRAHAT" },
      { period: 3, time: "09:30 - 11:45", code: "MOB-01", subject: "Pengembangan Aplikasi Mobile", instructor: "Guru Kejuruan", room: "Lab Software 2", type: "KEJURUAN" },
      { period: 4, time: "11:45 - 12:30", code: "REC-02", subject: "Ishoma / Spiritual Routine", instructor: "-", room: "Mosque", type: "ISTIRAHAT" },
      { period: 5, time: "12:30 - 14:45", code: "IND-01", subject: "Bahasa Indonesia & Penulisan Laporan", instructor: "Guru Mapel", room: "Ruang XI PPLG 2", type: "UMUM" },
    ],
  },
  {
    day: "THURSDAY",
    dayIndo: "KAMIS",
    code: "SCH-THU-04",
    periods: [
      { period: 1, time: "07:00 - 08:30", code: "PAI-01", subject: "Pendidikan Agama & Budi Pekerti", instructor: "Guru Agama", room: "Ruang XI PPLG 2", type: "UMUM" },
      { period: 2, time: "08:30 - 10:00", code: "PKN-01", subject: "Pendidikan Pancasila & Kewarganegaraan", instructor: "Guru PKN", room: "Ruang XI PPLG 2", type: "UMUM" },
      { period: 3, time: "10:00 - 10:15", code: "REC-01", subject: "Tactical Recess / Istirahat", instructor: "-", room: "Mess Hall", type: "ISTIRAHAT" },
      { period: 4, time: "10:15 - 12:00", code: "PBO-02", subject: "PBO Lanjutan & Architecture Pattern", instructor: "Guru Kejuruan", room: "Lab Software 2", type: "KEJURUAN" },
      { period: 5, time: "12:00 - 12:45", code: "REC-02", subject: "Ishoma / Spiritual Routine", instructor: "-", room: "Mosque", type: "ISTIRAHAT" },
      { period: 6, time: "12:45 - 15:00", code: "SEC-01", subject: "Cyber Security & Code Review", instructor: "Guru Kejuruan", room: "Lab Software 2", type: "KEJURUAN" },
    ],
  },
  {
    day: "FRIDAY",
    dayIndo: "JUM'AT",
    code: "SCH-FRI-05",
    periods: [
      { period: 1, time: "07:00 - 08:00", code: "SEN-01", subject: "Kebugaran Fisik / Senam Pagi", instructor: "Instruktur", room: "Main Ground", type: "UMUM" },
      { period: 2, time: "08:00 - 09:30", code: "PJOK-01", subject: "Pendidikan Jasmani & Kesehatan", instructor: "Guru PJOK", room: "Field / Arena", type: "UMUM" },
      { period: 3, time: "09:30 - 09:45", code: "REC-01", subject: "Tactical Recess / Istirahat", instructor: "-", room: "Mess Hall", type: "ISTIRAHAT" },
      { period: 4, time: "09:45 - 11:30", code: "EKS-01", subject: "Evaluasi Mingguan & Pembinaan Wali Kelas", instructor: "Ibu Sarah Siti Sumaerah", room: "Ruang XI PPLG 2", type: "UMUM" },
      { period: 5, time: "11:30 - 13:00", code: "REL-01", subject: "Sholat Jum'at & Sanitasi Sektor", instructor: "Dewan Keagamaan", room: "Mosque", type: "UMUM" },
    ],
  },
];
