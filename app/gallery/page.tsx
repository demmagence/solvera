import { Metadata } from "next";
import FullGroupGallery from "../components/FullGroupGallery";

export const metadata: Metadata = {
  title: "Mission Album // Arsip 50 Foto Skuad Solvera Class",
  description: "Arsip lengkap 50 foto bersama angkatan Solvera Class (XII PPLG RPL 2) dengan penampil lightbox interaktif beresolusi tinggi.",
};

export default function GalleryPage() {
  return (
    <div className="w-full">
      <FullGroupGallery />
    </div>
  );
}
