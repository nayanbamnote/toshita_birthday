"use client";
import { ParallaxScroll } from "./ui/parallax-scroll";
import { SectionWrapper } from "@/components/ui/section-wrapper";

function GallerySection() {
  return (
    <SectionWrapper title="Photo Gallery" id="gallery">
      <div className="z-[6]">
        <ParallaxScroll images={images} />
      </div>
    </SectionWrapper>
  );
}

const images = [
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
  "/toshita1.jpg",
  "/toshita.jpg",
];

export default GallerySection;
