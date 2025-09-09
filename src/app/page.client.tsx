"use client";

import { useRef } from "react";

import Faq from "~/components/faq";
import Hero from "~/components/hero";
import { Confetti, ConfettiRef } from "~/components/magicui/confetti";

export function LandingPage({ waitlistPeople }: { waitlistPeople: number }) {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <main className="mx-auto max-w-screen-2xl w-full h-full flex-1 flex flex-col relative snap-y snap-mandatory">
      <Confetti
        ref={confettiRef}
        className="fixed inset-0 z-50 pointer-events-none"
        manualstart={true}
      />
      
      {/* Hero Section - Centrale e a tutta altezza con snap */}
      <div className="h-screen flex items-center justify-center py-4 md:py-10 snap-start snap-always">
        <Hero waitlistPeople={waitlistPeople} />
      </div>
      
      {/* FAQ Section - Visibile solo quando si scrolla con snap */}
      <div className="h-screen flex items-center justify-center py-4 md:py-10 snap-start snap-always">
        <Faq />
      </div>
    </main>
  );
}