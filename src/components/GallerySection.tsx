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
  "/Images/toshi1.jpeg",
  "/Images/toshi2.jpeg",
  "/Images/toshi3.jpeg",
  "/Images/toshi4.jpg",
  "/Images/toshi5.jpeg",
  "/Images/toshi6.jpeg",
  "/Images/toshi7.jpg",
  "/Images/toshi8.jpg",
  "/Images/toshi9.jpg",
  "/Images/toshi10.jpg",
  "/Images/toshi11.jpg",
  "/Images/toshi12.jpg",
];

export default GallerySection;
