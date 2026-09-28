export interface GallerySlide {
  id: string;
  url: string;
  title: string;
  ref: string;
  desc: string;
  aspect: string;
  widthClass: string;
  date: string;
  securityLevel: "DECLASSIFIED" | "CONFIDENTIAL" | "TOP SECRET";
}

export const SQUAD_SLIDES: GallerySlide[] = [
  {
    id: "SQ-01",
    url: "/squad/1.jpg",
    title: "OPERASI INSIDEN UTAMA",
    ref: "SQ-OP-01",
    desc: "Dokumentasi taktis seluruh agen skuad di sektor utama. Formasi lengkap kelas XI PPLG RPL 2.",
    aspect: "aspect-[4/3] w-full",
    widthClass: "max-w-3xl",
    date: "OCTOBER 2024",
    securityLevel: "DECLASSIFIED",
  },
  {
    id: "SQ-02",
    url: "/squad/2.jpg",
    title: "BRIEFING HARIAN REGEMENTAL",
    ref: "SQ-OP-02",
    desc: "Pengumpulan bukti lapangan dan pembagian sektor investigasi akademik harian.",
    aspect: "aspect-[4/3] w-full",
    widthClass: "max-w-3xl",
    date: "NOVEMBER 2024",
    securityLevel: "DECLASSIFIED",
  },
  {
    id: "SQ-03",
    url: "/squad/3.jpg",
    title: "TACTICAL BRIEFING SEKRETARIS",
    ref: "SQ-OP-03",
    desc: "Sinkronisasi berkas dokumen intelijen skuad dan pencatatan presensi oleh tim sekretariat.",
    aspect: "aspect-[3/4] w-full",
    widthClass: "max-w-md",
    date: "DECEMBER 2024",
    securityLevel: "DECLASSIFIED",
  },
  {
    id: "SQ-04",
    url: "/squad/4.jpg",
    title: "EVALUASI ANALITIS LOGISTIK",
    ref: "SQ-OP-04",
    desc: "Peninjauan aset taktis, pengelolaan pembukuan kas skuad, dan koordinasi bendahara.",
    aspect: "aspect-[4/3] w-full",
    widthClass: "max-w-3xl",
    date: "JANUARY 2025",
    securityLevel: "DECLASSIFIED",
  },
  {
    id: "SQ-05",
    url: "/squad/5.jpg",
    title: "SIMULASI PENGAMANAN SEKTOR",
    ref: "SQ-OP-05",
    desc: "Latihan koordinasi pertahanan perimeter dan simulasi kesiapsiagaan operasional harian.",
    aspect: "aspect-[16/9] w-full",
    widthClass: "max-w-3xl",
    date: "FEBRUARY 2025",
    securityLevel: "DECLASSIFIED",
  },
  {
    id: "SQ-06",
    url: "/squad/6.jpg",
    title: "RAPAT DEWAN KOMANDO",
    ref: "SQ-OP-06",
    desc: "Pengambilan keputusan misi kritis bersama staf komando dan pembina wali kelas.",
    aspect: "aspect-[4/3] w-full",
    widthClass: "max-w-3xl",
    date: "MARCH 2025",
    securityLevel: "DECLASSIFIED",
  },
];
