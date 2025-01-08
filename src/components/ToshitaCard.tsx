import { AnimatedToshitaimonials } from "@/components/ui/animated-testimonials";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function ToshitaCard() {
  const Toshitaimonials = [
    {
      id: 1,
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "/toshita.jpg",
    },
    {
      id: 2,
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "/toshita.jpg",
    },
    {
      id: 3,
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "/toshita.jpg",
    },
    {
      id: 4,
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "/toshita.jpg",
    },
    {
      id: 5,
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/toshita.jpg",
    },
  ];

  return (
    <SectionWrapper id="about" title="Memories">
      <div className="z-[6]">
        <AnimatedToshitaimonials Toshitaimonials={Toshitaimonials} />
      </div>
    </SectionWrapper>
  );
}

export default ToshitaCard;