"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import { GROUP_ALBUM_PHOTOS, GroupPhoto } from "../data/groupAlbum";

export default function FullGroupGallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"ALL" | "BATCH1" | "BATCH2" | "BATCH3">("ALL");
  const [viewMode, setViewMode] = useState<"GRID" | "DOSSIER">("GRID");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  // Filtered photos based on search & filter
  const filteredPhotos = useMemo(() => {
    return GROUP_ALBUM_PHOTOS.filter((photo, idx) => {
      // Filter tab
      if (activeFilter === "BATCH1" && (idx < 0 || idx >= 15)) return false;
      if (activeFilter === "BATCH2" && (idx < 15 || idx >= 30)) return false;
      if (activeFilter === "BATCH3" && idx < 30) return false;

      // Search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      return (
        photo.id.toLowerCase().includes(q) ||
        photo.ref.toLowerCase().includes(q) ||
        photo.title.toLowerCase().includes(q) ||
        photo.filename.toLowerCase().includes(q) ||
        photo.subtitle.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, activeFilter]);

  // Selected photo object in modal
  const activePhoto: GroupPhoto | null = useMemo(() => {
    if (selectedPhotoIndex === null) return null;
    return GROUP_ALBUM_PHOTOS[selectedPhotoIndex] || null;
  }, [selectedPhotoIndex]);

  // Navigate lightbox
  const showPrev = useCallback(() => {
    setSelectedPhotoIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? GROUP_ALBUM_PHOTOS.length - 1 : prev - 1;
    });
    setZoomLevel(1);
  }, []);

  const showNext = useCallback(() => {
    setSelectedPhotoIndex((prev) => {
      if (prev === null) return null;
      return prev === GROUP_ALBUM_PHOTOS.length - 1 ? 0 : prev + 1;
    });
    setZoomLevel(1);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedPhotoIndex(null);
    setZoomLevel(1);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        showPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        showNext();
      } else if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, showPrev, showNext, closeModal]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPhotoIndex]);

  return (
    <div className="space-y-10">
      {/* Top Breadcrumb & Return Nav */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-courier text-xs border-b border-secondary/30 pb-4">
        <div className="flex items-center gap-2">
          <Link href="/#gallery" className="hover:text-primary underline flex items-center gap-1.5 font-bold">
            <span>← RETURN TO SQUAD BRIEFING</span>
          </Link>
          <span className="opacity-40">/</span>
          <span className="text-primary font-bold">ARSIP OPERASIONAL: 50 FOTO BERSAMA</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-primary text-surface px-2.5 py-0.5 font-bold uppercase tracking-widest text-[10px] shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
            ARCHIVE CLASSIFICATION: DECLASSIFIED
          </span>
          <span className="font-bold border border-secondary px-2 py-0.5 text-[10px] bg-surface">
            TOTAL: 50 BUKTI DOKUMENTER
          </span>
        </div>
      </div>

      {/* Header Dossier Section */}
      <div className="bg-[#e6e3e0] border-4 border-secondary p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] relative">
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 border-2 border-primary text-primary font-space-mono text-xs font-bold px-3 py-1 rotate-3 tracking-widest bg-surface shadow-[2px_2px_0px_0px_rgba(184,51,42,1)]">
          CONFIDENTIAL DOSSIER
        </div>

        <div className="max-w-3xl space-y-3">
          <span className="font-courier text-xs font-bold text-primary tracking-widest uppercase block">
            [ MISSION SQUAD ALBUM // KODE OPERASI: LX1-3507 s/d LX1-3556 ]
          </span>
          <h1 className="font-space-mono text-2xl sm:text-4xl font-bold tracking-tighter uppercase text-secondary">
            Galeri Lengkap 50 Foto Angkatan
          </h1>
          <p className="font-hanken text-sm sm:text-base opacity-90 leading-relaxed">
            Arsip lengkap dokumentasi resolusi tinggi formasi skuad Solvera Class (XII PPLG RPL 2).
            Seluruh 50 foto telah diekstrak dan dioptimalkan ke standar MozJPEG progresif untuk peninjauan taktis kilat.
            Klik salah satu foto untuk membuka <strong>Mode Lightbox Interaktif</strong> (Navigasi keyboard ◄/►, Zoom & Unduh).
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t-2 border-dashed border-secondary/40 font-courier text-xs">
          <div className="bg-surface p-3 border border-secondary">
            <span className="text-[10px] opacity-60 block">TOTAL EVIDENCE</span>
            <strong className="font-space-mono text-base text-primary">50 UNIT FOTO</strong>
          </div>
          <div className="bg-surface p-3 border border-secondary">
            <span className="text-[10px] opacity-60 block">ORIGINAL SOURCE</span>
            <strong className="font-space-mono text-base text-secondary">DSLR RECON</strong>
          </div>
          <div className="bg-surface p-3 border border-secondary">
            <span className="text-[10px] opacity-60 block">OPT RES</span>
            <strong className="font-space-mono text-base text-secondary">1920 × 1280 FHD</strong>
          </div>
          <div className="bg-surface p-3 border border-secondary">
            <span className="text-[10px] opacity-60 block">STATUS ARSIP</span>
            <strong className="font-space-mono text-base text-primary">LENGKAP 100%</strong>
          </div>
        </div>
      </div>

      {/* Control Bar: Filters, Search, and View Mode */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-surface p-4 border-2 border-secondary shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 font-courier text-xs">
          <button
            type="button"
            onClick={() => setActiveFilter("ALL")}
            className={`px-3 py-1.5 font-bold transition-all border border-secondary ${
              activeFilter === "ALL"
                ? "bg-primary text-surface shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                : "bg-surface hover:bg-surface-container"
            }`}
          >
            SEMUA (50)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("BATCH1")}
            className={`px-3 py-1.5 font-bold transition-all border border-secondary ${
              activeFilter === "BATCH1"
                ? "bg-primary text-surface shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                : "bg-surface hover:bg-surface-container"
            }`}
          >
            BAGIAN 1 (01-15)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("BATCH2")}
            className={`px-3 py-1.5 font-bold transition-all border border-secondary ${
              activeFilter === "BATCH2"
                ? "bg-primary text-surface shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                : "bg-surface hover:bg-surface-container"
            }`}
          >
            BAGIAN 2 (16-30)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("BATCH3")}
            className={`px-3 py-1.5 font-bold transition-all border border-secondary ${
              activeFilter === "BATCH3"
                ? "bg-primary text-surface shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
                : "bg-surface hover:bg-surface-container"
            }`}
          >
            BAGIAN 3 (31-50)
          </button>
        </div>

        {/* Right side: Search & View Mode Switcher */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 md:w-64">
            <input
              type="text"
              placeholder="Cari foto (GRP-01, 3510, dll)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-1.5 pl-8 bg-surface-container-low border border-secondary font-courier text-xs focus:outline-none focus:border-primary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] placeholder:text-secondary/50"
            />
            <svg
              className="absolute left-2.5 top-2.5 text-secondary/60"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-2 font-courier text-xs font-bold text-primary hover:opacity-75"
              >
                ✕
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center border border-secondary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] overflow-hidden">
            <button
              type="button"
              onClick={() => setViewMode("GRID")}
              className={`p-1.5 transition-colors ${
                viewMode === "GRID" ? "bg-secondary text-surface" : "bg-surface hover:bg-surface-container text-secondary"
              }`}
              title="Grid Tampilan Cepat"
              aria-label="Grid View"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("DOSSIER")}
              className={`p-1.5 transition-colors ${
                viewMode === "DOSSIER" ? "bg-secondary text-surface" : "bg-surface hover:bg-surface-container text-secondary"
              }`}
              title="Tampilan Dossier Terperinci"
              aria-label="Dossier View"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="3" />
                <line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="3" />
                <line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Results Count & Instructions */}
      <div className="flex items-center justify-between text-xs font-courier text-secondary/70">
        <div>
          Menampilkan <strong className="text-secondary">{filteredPhotos.length}</strong> dari{" "}
          <strong>{GROUP_ALBUM_PHOTOS.length}</strong> foto bukti dokumenter.
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-primary font-bold">
          <span>[ KLIK FOTO UNTUK INSPEKSI PENUH & UNDUH ]</span>
        </div>
      </div>

      {/* ======================================================== */}
      {/* GRID VIEW MODE */}
      {/* ======================================================== */}
      {viewMode === "GRID" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => {
            const globalIndex = GROUP_ALBUM_PHOTOS.findIndex((p) => p.id === photo.id);
            return (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoIndex(globalIndex)}
                className="group cursor-pointer bg-surface border-2 border-secondary shadow-[5px_5px_0px_0px_rgba(26,26,26,1)] hover:shadow-[7px_7px_0px_0px_rgba(184,51,42,1)] hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden"
              >
                {/* Photo Container */}
                <div className="relative aspect-[16/10] bg-secondary overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Scanline Noir Filter */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.15)_50%,rgba(0,0,0,0.15))] bg-[length:100%_4px] pointer-events-none opacity-60 group-hover:opacity-20 transition-opacity"></div>

                  {/* Identification Tag */}
                  <div className="absolute top-2.5 left-2.5 bg-primary text-surface font-space-mono font-bold text-[10px] px-2 py-0.5 border border-primary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                    {photo.id}
                  </div>

                  {/* Quick Inspect Hover Indicator */}
                  <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <span className="bg-surface text-secondary px-3 py-1.5 font-space-mono text-xs font-bold border-2 border-secondary shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                      INSPEKSI FOTO
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-2 bg-secondary/85 text-surface font-courier text-[9px] px-1.5 py-0.5 backdrop-blur">
                    {photo.filename}
                  </div>
                </div>

                {/* Footer Details */}
                <div className="p-3.5 bg-surface flex-1 flex flex-col justify-between border-t border-secondary">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-courier text-secondary/60">
                      <span>REF: {photo.ref}</span>
                      <span className="text-primary font-bold">{photo.classification}</span>
                    </div>
                    <h2 className="font-space-mono font-bold text-sm text-secondary mt-1 group-hover:text-primary transition-colors">
                      {photo.title}
                    </h2>
                    <p className="font-hanken text-xs opacity-75 mt-0.5 line-clamp-1">{photo.subtitle}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-dashed border-secondary/30 font-courier text-[10px]">
                    <span className="opacity-70">{photo.camera}</span>
                    <span className="font-bold underline text-secondary group-hover:text-primary">
                      BUKA DETAIL →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ======================================================== */}
      {/* DOSSIER CARD VIEW MODE */}
      {/* ======================================================== */}
      {viewMode === "DOSSIER" && (
        <div className="space-y-6">
          {filteredPhotos.map((photo) => {
            const globalIndex = GROUP_ALBUM_PHOTOS.findIndex((p) => p.id === photo.id);
            return (
              <div
                key={photo.id}
                className="bg-surface border-2 border-secondary shadow-[6px_6px_0px_0px_rgba(26,26,26,1)] p-4 sm:p-6 flex flex-col md:flex-row gap-6 items-center"
              >
                {/* Photo Thumbnail */}
                <div
                  onClick={() => setSelectedPhotoIndex(globalIndex)}
                  className="w-full md:w-80 aspect-[16/10] shrink-0 bg-secondary border-2 border-secondary relative overflow-hidden cursor-pointer group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-primary text-surface font-space-mono font-bold text-[10px] px-2 py-0.5 border border-primary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                    {photo.id}
                  </div>
                  <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-surface text-secondary px-2.5 py-1 font-space-mono text-xs font-bold border border-secondary shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]">
                      KLIK UNTUK MEMPERBESAR
                    </span>
                  </div>
                </div>

                {/* Dossier Meta Details */}
                <div className="flex-1 space-y-3 w-full">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-dashed border-secondary/35 pb-2">
                    <span className="font-courier text-xs font-bold text-primary">{photo.ref}</span>
                    <span className="font-courier text-xs bg-surface-container px-2 py-0.5 border border-secondary/50 font-bold">
                      {photo.classification}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-space-mono text-lg sm:text-xl font-bold uppercase">{photo.title}</h2>
                    <p className="font-hanken text-xs sm:text-sm opacity-85 mt-1">{photo.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-courier text-xs bg-[#e6e3e0] p-3 border border-secondary/40">
                    <div>
                      <span className="text-[10px] opacity-60 block">FILE ARTIFACT:</span>
                      <strong className="text-secondary">{photo.filename}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] opacity-60 block">TIMESTAMP:</span>
                      <strong className="text-secondary">{photo.date}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] opacity-60 block">EQUIPMENT:</span>
                      <strong className="text-secondary">{photo.camera}</strong>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedPhotoIndex(globalIndex)}
                      className="px-4 py-1.5 bg-primary text-surface font-space-mono text-xs font-bold shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:bg-primary/90 transition-colors flex items-center gap-2"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                      INSPEKSI PENUH
                    </button>
                    <a
                      href={photo.src}
                      download={photo.filename}
                      className="px-4 py-1.5 bg-surface text-secondary border border-secondary font-courier text-xs font-bold shadow-[2px_2px_0px_0px_rgba(26,26,26,1)] hover:bg-surface-container transition-colors flex items-center gap-2"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      UNDUH ARSIP
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Empty State */}
      {filteredPhotos.length === 0 && (
        <div className="bg-surface border-2 border-secondary p-12 text-center space-y-4 shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
          <p className="font-space-mono text-base font-bold text-primary">TIDAK DITEMUKAN ARSIP DENGAN KATA KUNCI TERSEBUT</p>
          <p className="font-courier text-xs opacity-75">
            Coba gunakan kata kunci lain seperti &quot;GRP&quot;, &quot;35&quot;, atau klik &quot;SEMUA (50)&quot; untuk reset filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery("");
              setActiveFilter("ALL");
            }}
            className="px-4 py-2 bg-primary text-surface font-space-mono text-xs font-bold shadow-[2px_2px_0px_0px_rgba(26,26,26,1)]"
          >
            RESET PENCARIAN
          </button>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t-2 border-secondary">
        <Link
          href="/#gallery"
          className="font-courier text-xs font-bold border-2 border-secondary px-4 py-2 bg-surface hover:bg-surface-container shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] transition-colors"
        >
          ← KEMBALI KE SQUAD GALLERY UTAMA
        </Link>
        <Link
          href="/#schedule"
          className="font-space-mono text-xs font-bold bg-primary text-surface px-5 py-2 shadow-[3px_3px_0px_0px_rgba(26,26,26,1)] hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <span>LIHAT JADWAL MATA PELAJARAN</span>
          <span>►</span>
        </Link>
      </div>

      {/* ======================================================== */}
      {/* FULLSCREEN LIGHTBOX MODAL WITH ZOOM & SLIDER */}
      {/* ======================================================== */}
      {activePhoto !== null && selectedPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Inspeksi Arsip Foto Skuad"
          className="fixed inset-0 z-50 bg-secondary/95 backdrop-blur-md flex flex-col justify-between animate-in fade-in duration-200"
          onClick={closeModal}
        >
          {/* Top Bar of Modal */}
          <div
            className="w-full bg-[#1a1a1a] text-surface border-b-2 border-primary/50 px-4 sm:px-6 py-3 flex items-center justify-between select-none z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="bg-primary text-surface font-space-mono text-xs font-bold px-2 py-0.5">
                {activePhoto.id}
              </span>
              <div className="flex flex-col">
                <span className="font-space-mono text-xs sm:text-sm font-bold text-surface tracking-tight uppercase">
                  {activePhoto.title}
                </span>
                <span className="font-courier text-[10px] text-surface/60">
                  {activePhoto.ref} • {activePhoto.filename} • {activePhoto.date}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Zoom Controls */}
              <div className="hidden sm:flex items-center border border-surface/30 font-courier text-xs bg-surface/10 rounded">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(1, z - 0.5))}
                  className="px-2.5 py-1 hover:bg-surface/20"
                  title="Zoom Out"
                >
                  −
                </button>
                <span className="px-2 text-[10px] opacity-80">{Math.round(zoomLevel * 100)}%</span>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.5))}
                  className="px-2.5 py-1 hover:bg-surface/20"
                  title="Zoom In"
                >
                  +
                </button>
              </div>

              {/* Direct Download Button */}
              <a
                href={activePhoto.src}
                download={activePhoto.filename}
                className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-surface text-secondary font-courier text-xs font-bold border border-surface shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] hover:bg-primary hover:text-surface transition-colors"
                title="Unduh foto resolusi asli"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>UNDUH</span>
              </a>

              {/* Counter */}
              <span className="font-courier text-xs text-primary font-bold px-2 py-0.5 bg-surface/10 border border-primary/40">
                {selectedPhotoIndex + 1} / {GROUP_ALBUM_PHOTOS.length}
              </span>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                className="p-1.5 bg-primary text-surface hover:bg-primary/80 transition-colors font-bold text-sm border border-surface/40 flex items-center justify-center w-8 h-8"
                aria-label="Tutup Modal Lightbox"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Main Photo View Area */}
          <div
            className="flex-1 relative flex items-center justify-center p-2 sm:p-6 overflow-auto select-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            {/* Prev Arrow Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 bg-secondary/80 hover:bg-primary text-surface border-2 border-surface/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] transition-all font-space-mono font-bold text-lg hover:scale-110 active:scale-95"
              aria-label="Previous Photo"
            >
              ◄
            </button>

            {/* Next Arrow Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 bg-secondary/80 hover:bg-primary text-surface border-2 border-surface/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)] transition-all font-space-mono font-bold text-lg hover:scale-110 active:scale-95"
              aria-label="Next Photo"
            >
              ►
            </button>

            {/* The Image */}
            <div
              className="max-w-5xl max-h-[72vh] flex items-center justify-center relative transition-transform duration-200"
              style={{ transform: `scale(${zoomLevel})` }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-w-full max-h-[72vh] object-contain border-4 border-surface shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-black"
              />

              {/* Watermark badge */}
              <div className="absolute top-4 left-4 bg-primary text-surface font-space-mono font-bold text-[11px] px-2.5 py-0.5 border border-surface shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] tracking-widest">
                {activePhoto.classification}
              </div>
            </div>
          </div>

          {/* Filmstrip Bottom Thumbnails Navigation */}
          <div
            className="w-full bg-[#141414] border-t-2 border-surface/20 p-2 sm:p-3 select-none z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto py-1 scrollbar-thin">
              {GROUP_ALBUM_PHOTOS.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setSelectedPhotoIndex(idx);
                    setZoomLevel(1);
                  }}
                  className={`relative shrink-0 w-14 sm:w-16 h-10 sm:h-12 border-2 overflow-hidden transition-all ${
                    idx === selectedPhotoIndex
                      ? "border-primary scale-110 shadow-[0_0_10px_rgba(184,51,42,0.8)] z-10"
                      : "border-surface/30 opacity-50 hover:opacity-100"
                  }`}
                  aria-label={`Lihat foto ${idx + 1}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.id} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] font-courier text-surface text-center py-0.5 truncate">
                    {p.id}
                  </span>
                </button>
              ))}
            </div>
            <div className="text-center font-courier text-[10px] text-surface/50 pt-1">
              [ PETUNJUK: GUNAKAN TOMBOL PANAH ◄ / ► ATAU KLIK STRIP FILM UNTUK BERPINDAH FOTO | ESC UNTUK TUTUP ]
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
