import { useEffect, useRef } from "react";
import ColorCursorTrail from "@/components/ColorCursorTrail";
import FloatingPowder from "@/components/FloatingPowder";
import HeroSection from "@/components/HeroSection";
import InteractiveSection from "@/components/InteractiveSection";
import FunnyMessages from "@/components/FunnyMessages";
import MemoriesSection from "@/components/MemoriesSection";
import FinalSection from "@/components/FinalSection";
import { useScrollConfetti } from "@/components/ColorSplash";

const Index = () => {
  const lastScroll = useRef(0);
  const triggerConfetti = useScrollConfetti();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScroll.current) > 400) {
        triggerConfetti();
        lastScroll.current = scrollY;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggerConfetti]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingPowder />
      <ColorCursorTrail />
      <HeroSection />
      <InteractiveSection />
      <FunnyMessages />
      <MemoriesSection />
      <FinalSection />
    </div>
  );
};

export default Index;
