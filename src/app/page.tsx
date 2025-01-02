import AboutSection from "@/components/AboutSection";
import BirthdayCountdown from "@/components/BirthdayCountdown";
import FavoriteThings from "@/components/FavoriteThings";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import InteractiveNightSky from "@/components/InteractiveNightSky";
import LandingPage from "@/components/LandingPage";
import MessageWall from "@/components/MessageWall";

export default function Home() {
  return (
    <main className="relative">
      <div className="night-overlay fixed inset-0 pointer-events-none"></div>
      <div className="stars absolute inset-0 pointer-events-none"></div>
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

