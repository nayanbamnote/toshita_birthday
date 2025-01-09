import { AnimatedToshitaimonials } from "@/components/ui/animated-testimonials";
import { SectionWrapper } from "@/components/ui/section-wrapper";

export function ToshitaCard() {
  const Toshitaimonials = [
    {
      id: 1,
      quote:
        "My sister’s mood swings are like server responses — sometimes 200 OK, sometimes 500 Internal Screaming Error! 😆",
      name: "Nayan",
      designation: null,
      src: "/Thumbnail/thumb1.jpeg",
    },
    {
      id: 2,
      quote:
        "Happy vadhdivas toshuuu✨🫶🏻 Ashich amhala navin navin shabd shikvat ja",
      name: "Tanush",
      designation: null,
      src: "/Thumbnail/thumb3.jpeg",
    },
    {
      id: 3,
      quote:
        "You are such a cutiepie toshuu 😘",
      name: "Vidhi",
      designation: null,
      src: "/Thumbnail/thumb6.jpeg",
    },
    {
      id: 4,
      quote:
        "Let's celebrate it together after our boards.",
      name: "Kashish",
      designation: null,
      src: "/placeholder.webp",
    },
    {
      id: 5,
      quote:
        "Wishing you an incredible birthday and a year of love and success And u are my bestfriend more than cousin 💗🫂",
      name: "Samidha",
      designation: null,
      src: "/Thumbnail/thumb4.jpg",
    },
    {
      id: 6,
      quote:
        "ho dada tula thodya vedat send krto",
      name: "Ranuak",
      designation: null,
      src: "/Thumbnail/thumb5.jpeg",
    },
    {
      id: 7,
      quote:
        "Best secret keeper Ani sis pn",
      name: "Vaidhahi",
      designation: null,
      src: "/placeholder.webp",
    },
    {
      id: 8,
      quote:
        "happy birthday toshita tai mi sagdhyat pahile video send kela",
      name: "Mayank & Viaana",
      designation: null,
      src: "/placeholder.webp",
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