"use client";

import { useRef, useEffect } from "react";

import Faq from "~/components/faq";
import Hero from "~/components/hero";
import { Confetti, ConfettiRef } from "~/components/magicui/confetti";

export function LandingPage({ waitlistPeople }: { waitlistPeople: number }) {
  const confettiRef = useRef<ConfettiRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Aggiorna l'altezza del viewport su mobile
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVh();
    window.addEventListener('resize', updateVh);
    window.addEventListener('orientationchange', updateVh);

    return () => {
      window.removeEventListener('resize', updateVh);
      window.removeEventListener('orientationchange', updateVh);
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-container">
      <Confetti
        ref={confettiRef}
        className="fixed inset-0 z-50 pointer-events-none"
        manualstart={true}
      />
      
      {/* Hero Section - Centrale e a tutta altezza con snap */}
      <div className="snap-section flex items-center justify-center py-4 md:py-10">
        <Hero waitlistPeople={waitlistPeople} />
      </div>
      
      {/* FAQ Section - Visibile solo quando si scrolla con snap */}
      <div className="snap-section flex items-center justify-center py-4 md:py-10">
        <Faq />
      </div>
    </div>
  );
}