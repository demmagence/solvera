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
  period: string; // e.g. "SAIH", "1", "2", "Istirahat 1", etc.
  time: string;
  code: string;
  subject: string;
  instructor: string;
  room: string;
  type: "KEJURUAN" | "UMUM" | "ISTIRAHAT" | "PEMBIASAAN";
}

export interface DayTimetable {
  day: string;
  dayIndo: string;
  code: string;
  morningActivity: string;
  periods: LessonPeriod[];
}

export const TIMETABLE_METADATA = {
  institution: "SMKN 1 CIANJUR",
  academicYear: "Semester Ganjil TP 2026/2027 (Periode 1)",
  targetClass: "XII PPLG-RPL 2",
  quote: "Barangsiapa tidak mau merasakan lelahnya mencari ilmu, ia akan merasakan hinanya kebodohan di sepanjang hidupnya",
  quoteAuthor: "Imam Syafi'i",
  source: "aSc Timetables",
};

export const SCHOOL_TIMETABLE: DayTimetable[] = [
  {
    day: "MONDAY",
    dayIndo: "SENIN",
    code: "SCH-MON-01",
    morningActivity: "Upacara Bendera",
    periods: [
      { period: "SAIH", time: "06:30 - 07:10", code: "UPC-01", subject: "Upacara Bendera", instructor: "Pembina Upacara", room: "Lapangan Upacara", type: "PEMBIASAAN" },
      { period: "1", time: "07:10 - 07:50", code: "MTK-01", subject: "Matematika", instructor: "Ani Ismayani, M.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "2", time: "07:50 - 08:30", code: "MTK-01", subject: "Matematika", instructor: "Ani Ismayani, M.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "3", time: "08:30 - 09:10", code: "MTK-01", subject: "Matematika", instructor: "Ani Ismayani, M.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "REC 1", time: "09:10 - 09:25", code: "IST-01", subject: "Istirahat ke-1", instructor: "-", room: "Area Sekolah", type: "ISTIRAHAT" },
      { period: "4", time: "09:25 - 10:05", code: "MTK-01", subject: "Matematika", instructor: "Ani Ismayani, M.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "5", time: "10:05 - 10:45", code: "MTK-01", subject: "Matematika", instructor: "Ani Ismayani, M.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "6", time: "10:45 - 11:25", code: "RPL-01", subject: "Konsentrasi RPL", instructor: "Tim Kejuruan RPL", room: "Lab Software", type: "KEJURUAN" },
      { period: "REC 2", time: "11:25 - 12:30", code: "IST-02", subject: "Istirahat ke-2 (Ishoma)", instructor: "-", room: "Masjid & Area Istirahat", type: "ISTIRAHAT" },
      { period: "7", time: "12:30 - 13:10", code: "RPL-02", subject: "Konsentrasi RPL", instructor: "Yaqub Hadi Permana, S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "8", time: "13:10 - 13:50", code: "RPL-02", subject: "Konsentrasi RPL", instructor: "Yaqub Hadi Permana, S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "9", time: "13:50 - 14:30", code: "RPL-02", subject: "Konsentrasi RPL", instructor: "Yaqub Hadi Permana, S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "10", time: "14:30 - 15:10", code: "RPL-02", subject: "Konsentrasi RPL", instructor: "Yaqub Hadi Permana, S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "11", time: "15:10 - 15:50", code: "RPL-02", subject: "Konsentrasi RPL", instructor: "Yaqub Hadi Permana, S.T.", room: "Lab Software", type: "KEJURUAN" },
    ],
  },
  {
    day: "TUESDAY",
    dayIndo: "SELASA",
    code: "SCH-TUE-02",
    morningActivity: "Selasa Segar (Senam)",
    periods: [
      { period: "SAIH", time: "06:30 - 07:10", code: "SNM-01", subject: "Selasa Segar (Senam Pagi)", instructor: "Instruktur Olahraga", room: "Lapangan Olahraga", type: "PEMBIASAAN" },
      { period: "1", time: "07:10 - 07:50", code: "RPL-03", subject: "Konsentrasi RPL", instructor: "Fajar M. Sukmawijaya, M.Kom.", room: "Lab Software", type: "KEJURUAN" },
      { period: "2", time: "07:50 - 08:30", code: "RPL-03", subject: "Konsentrasi RPL", instructor: "Fajar M. Sukmawijaya, M.Kom.", room: "Lab Software", type: "KEJURUAN" },
      { period: "3", time: "08:30 - 09:10", code: "RPL-03", subject: "Konsentrasi RPL", instructor: "Fajar M. Sukmawijaya, M.Kom.", room: "Lab Software", type: "KEJURUAN" },
      { period: "REC 1", time: "09:10 - 09:25", code: "IST-01", subject: "Istirahat ke-1", instructor: "-", room: "Area Sekolah", type: "ISTIRAHAT" },
      { period: "4", time: "09:25 - 10:05", code: "RPL-04", subject: "Konsentrasi RPL", instructor: "Tim Kejuruan RPL", room: "Lab Software", type: "KEJURUAN" },
      { period: "5", time: "10:05 - 10:45", code: "LIT-01", subject: "L (Literasi / Pengayaan)", instructor: "Tim Pembiasaan Literasi", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "6", time: "10:45 - 11:25", code: "RPL-04", subject: "Konsentrasi RPL", instructor: "Tim Kejuruan RPL", room: "Lab Software", type: "KEJURUAN" },
      { period: "REC 2", time: "11:25 - 12:30", code: "IST-02", subject: "Istirahat ke-2 (Ishoma)", instructor: "-", room: "Masjid & Area Istirahat", type: "ISTIRAHAT" },
      { period: "7", time: "12:30 - 13:10", code: "RPL-05", subject: "Konsentrasi RPL", instructor: "Sarah Siti Sumaerah, S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "8", time: "13:10 - 13:50", code: "RPL-05", subject: "Konsentrasi RPL", instructor: "Sarah Siti Sumaerah, S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "9", time: "13:50 - 14:30", code: "RPL-05", subject: "Konsentrasi RPL", instructor: "Sarah Siti Sumaerah, S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "10", time: "14:30 - 15:10", code: "RPL-05", subject: "Konsentrasi RPL", instructor: "Sarah Siti Sumaerah, S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "11", time: "15:10 - 15:50", code: "RPL-05", subject: "Konsentrasi RPL", instructor: "Sarah Siti Sumaerah, S.T.", room: "Lab Software", type: "KEJURUAN" },
    ],
  },
  {
    day: "WEDNESDAY",
    dayIndo: "RABU",
    code: "SCH-WED-03",
    morningActivity: "Cahaya Rabu (Literasi)",
    periods: [
      { period: "SAIH", time: "06:30 - 07:10", code: "LIT-02", subject: "Cahaya Rabu (Literasi)", instructor: "Tim Literasi Sekolah", room: "Ruang XII RPL 2", type: "PEMBIASAAN" },
      { period: "1", time: "07:10 - 07:50", code: "ING-01", subject: "Bahasa Inggris", instructor: "Tini Murtiningsih, S.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "2", time: "07:50 - 08:30", code: "ING-01", subject: "Bahasa Inggris", instructor: "Tini Murtiningsih, S.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "3", time: "08:30 - 09:10", code: "ING-01", subject: "Bahasa Inggris", instructor: "Tini Murtiningsih, S.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "REC 1", time: "09:10 - 09:25", code: "IST-01", subject: "Istirahat ke-1", instructor: "-", room: "Area Sekolah", type: "ISTIRAHAT" },
      { period: "4", time: "09:25 - 10:05", code: "IND-01", subject: "Bahasa Indonesia", instructor: "Eva Yuliani, S.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "5", time: "10:05 - 10:45", code: "IND-01", subject: "Bahasa Indonesia", instructor: "Eva Yuliani, S.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "6", time: "10:45 - 11:25", code: "RPL-06", subject: "Konsentrasi RPL", instructor: "Yayat Ruhiyat, S.ST", room: "Lab Software", type: "KEJURUAN" },
      { period: "REC 2", time: "11:25 - 12:30", code: "IST-02", subject: "Istirahat ke-2 (Ishoma)", instructor: "-", room: "Masjid & Area Istirahat", type: "ISTIRAHAT" },
      { period: "7", time: "12:30 - 13:10", code: "RPL-06", subject: "Konsentrasi RPL", instructor: "Yayat Ruhiyat, S.ST", room: "Lab Software", type: "KEJURUAN" },
      { period: "8", time: "13:10 - 13:50", code: "BK-01", subject: "BK (Bimbingan Konseling)", instructor: "Guru BK", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "9", time: "13:50 - 14:30", code: "KIK-01", subject: "KIK (Kreativitas & Inovasi Kejuruan)", instructor: "Renita Anjarsari, S.Pd., M.M.", room: "Lab Software / Bengkel", type: "KEJURUAN" },
      { period: "10", time: "14:30 - 15:10", code: "KIK-01", subject: "KIK (Kreativitas & Inovasi Kejuruan)", instructor: "Renita Anjarsari, S.Pd., M.M.", room: "Lab Software / Bengkel", type: "KEJURUAN" },
      { period: "11", time: "15:10 - 15:50", code: "KIK-01", subject: "KIK (Kreativitas & Inovasi Kejuruan)", instructor: "Renita Anjarsari, S.Pd., M.M.", room: "Lab Software / Bengkel", type: "KEJURUAN" },
    ],
  },
  {
    day: "THURSDAY",
    dayIndo: "KAMIS",
    code: "SCH-THU-04",
    morningActivity: "Kamis Alami (Ekologi)",
    periods: [
      { period: "SAIH", time: "06:30 - 07:10", code: "EKO-01", subject: "Kamis Alami (Ekologi)", instructor: "Tim Lingkungan Hidup", room: "Area Kampus Hijau", type: "PEMBIASAAN" },
      { period: "1", time: "07:10 - 07:50", code: "PIL-01", subject: "Pilihan PPLG", instructor: "Dewi Kania, S.Pd.", room: "Lab Software", type: "KEJURUAN" },
      { period: "2", time: "07:50 - 08:30", code: "PIL-01", subject: "Pilihan PPLG", instructor: "Dewi Kania, S.Pd.", room: "Lab Software", type: "KEJURUAN" },
      { period: "3", time: "08:30 - 09:10", code: "IND-02", subject: "Bahasa Indonesia", instructor: "Eva Yuliani, S.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "REC 1", time: "09:10 - 09:25", code: "IST-01", subject: "Istirahat ke-1", instructor: "-", room: "Area Sekolah", type: "ISTIRAHAT" },
      { period: "4", time: "09:25 - 10:05", code: "IND-02", subject: "Bahasa Indonesia", instructor: "Eva Yuliani, S.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "5", time: "10:05 - 10:45", code: "ING-02", subject: "Bahasa Inggris", instructor: "Tini Murtiningsih, S.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "6", time: "10:45 - 11:25", code: "ING-02", subject: "Bahasa Inggris", instructor: "Tini Murtiningsih, S.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "REC 2", time: "11:25 - 12:30", code: "IST-02", subject: "Istirahat ke-2 (Ishoma)", instructor: "-", room: "Masjid & Area Istirahat", type: "ISTIRAHAT" },
      { period: "7", time: "12:30 - 13:10", code: "ING-02", subject: "Bahasa Inggris", instructor: "Tini Murtiningsih, S.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "8", time: "13:10 - 13:50", code: "RPL-07", subject: "Konsentrasi RPL", instructor: "A. Luddie Tri S., S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "9", time: "13:50 - 14:30", code: "RPL-07", subject: "Konsentrasi RPL", instructor: "A. Luddie Tri S., S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "10", time: "14:30 - 15:10", code: "RPL-07", subject: "Konsentrasi RPL", instructor: "A. Luddie Tri S., S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "11", time: "15:10 - 15:50", code: "RPL-07", subject: "Konsentrasi RPL", instructor: "A. Luddie Tri S., S.T.", room: "Lab Software", type: "KEJURUAN" },
    ],
  },
  {
    day: "FRIDAY",
    dayIndo: "JUM'AT",
    code: "SCH-FRI-05",
    morningActivity: "Kerohanian",
    periods: [
      { period: "SAIH", time: "06:30 - 07:10", code: "ROH-01", subject: "Kerohanian (Kajian / Doa)", instructor: "Tim Rohis / Pembina", room: "Masjid / Lapangan", type: "PEMBIASAAN" },
      { period: "1", time: "07:10 - 07:50", code: "PIL-02", subject: "Pilihan PPLG", instructor: "Yaqub Hadi Permana, S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "2", time: "07:50 - 08:30", code: "PIL-02", subject: "Pilihan PPLG", instructor: "Yaqub Hadi Permana, S.T.", room: "Lab Software", type: "KEJURUAN" },
      { period: "3", time: "08:30 - 09:10", code: "PKN-01", subject: "PKn", instructor: "Guru PKn", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "REC 1", time: "09:10 - 09:25", code: "IST-01", subject: "Istirahat ke-1", instructor: "-", room: "Area Sekolah", type: "ISTIRAHAT" },
      { period: "4", time: "09:25 - 10:05", code: "PKN-01", subject: "PKn", instructor: "Guru PKn", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "5", time: "10:05 - 10:45", code: "PAB-01", subject: "PABP (Pendidikan Agama & Budi Pekerti)", instructor: "Dikdik Juanda, S.Pd.I., M.M.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "6", time: "10:45 - 11:25", code: "PAB-01", subject: "PABP (Pendidikan Agama & Budi Pekerti)", instructor: "Dikdik Juanda, S.Pd.I., M.M.Pd.", room: "Ruang XII RPL 2", type: "UMUM" },
      { period: "POST", time: "11:25 - 13:00", code: "REL-01", subject: "Sholat Jum'at & Kepulangan", instructor: "Dewan Keagamaan", room: "Masjid Sekolah", type: "PEMBIASAAN" },
    ],
  },
];
