import AboutSection from "@/components/AboutSection";
import BirthdayCountdown from "@/components/BirthdayCountdown";
import FavoriteThings from "@/components/FavoriteThings";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import InteractiveNightSky from "@/components/InteractiveNightSky";
import LandingPage from "@/components/LandingPage";
import MessageWall from "@/components/MessageWall";
import StarryBackground from "@/components/StarryBackground";

export default function Home() {
  return (
    <main className="relative">
      <StarryBackground />
      <div className=" bg-black/10 fixed inset-0 pointer-events-none"></div>
      <LandingPage />
      <AboutSection />
      <GallerySection />
      <InteractiveNightSky />
      <FavoriteThings />
      <BirthdayCountdown />
      <MessageWall />
      <Footer />
    </main>
  )
}

