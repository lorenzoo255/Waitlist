"use client";
import { useState, useEffect } from "react";
import People from "./people";
import { Logo } from "./svgs";
import Form from "./form";

export default function Hero({ waitlistPeople }: { waitlistPeople: number }) {
  const year = 2025;
  const [isSuccess, setIsSuccess] = useState(false);
  const [vh, setVh] = useState<number>(0);

  // Aggiorna l'altezza visibile reale della viewport
  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    updateVh();
    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  return (
    <div
      style={{ height: vh }}
      className="relative w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
    >
      {/* Logo e badge */}
      <div className="flex flex-col items-center justify-center gap-3">
        <Logo />
        <div className="flex items-center gap-2 rounded-full border border-border px-3 py-1 relative">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
          </span>
          <p className="uppercase text-sm font-medium">
            Disponibile da fine {year}
          </p>
        </div>
      </div>

      {/* Titolo e payoff */}
      <div className="flex flex-col items-center justify-center gap-2 max-w-2xl text-center mt-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground px-2">
          {isSuccess
            ? "Benvenuto nella lista d'attesa!"
            : "Trasforma le recensioni in crescita per la tua attività"}
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground text-center max-w-md px-4 mt-1">
          {isSuccess
            ? "Hai riservato con successo il tuo posto. Ti avviseremo non appena lanceremo Reviu'."
            : "La voce dei tuoi clienti, la crescita del tuo business, la ricompensa per la loro fedeltà."}
        </p>
      </div>

      {/* Persone in lista */}
      <div className="w-full flex justify-center px-4 mt-2">
        <div className="flex justify-center">
          <People count={waitlistPeople} />
        </div>
      </div>

      {/* Indicatore di scroll */}
      <div className="hidden md:block absolute bottom-9 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
