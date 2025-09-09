"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useState, useEffect } from "react";

export default function Faq() {
  const [vh, setVh] = useState<number>(0);

  useEffect(() => {
    const updateVh = () => {
      // Imposta l'altezza minima per evitare problemi su mobile
      const vh = Math.max(window.innerHeight, 600);
      setVh(vh);
    };
    
    updateVh();
    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  return (
    <div
      id="faq"
      style={{ minHeight: vh }}
      className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 bg-background py-10"
    >
      {/* Titolo e descrizione */}
      <div className="flex flex-col items-center justify-center gap-2 max-w-md text-center px-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
          Domande Frequenti
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground text-center mt-2">
          Scopri tutto quello che c'è da sapere su Reviu' e su come può aiutare
          la tua attività a crescere.
        </p>
      </div>

      {/* Accordion FAQ */}
      <div className="w-full max-w-lg px-4 sm:px-6 space-y-4">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-border rounded-lg overflow-hidden border">
            <AccordionTrigger className="hover:no-underline px-4 py-4 text-left flex items-center">
              Come è nato Reviu' e qual è la sua missione?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-4 pb-4">
              Reviu' nasce da un'idea semplice: trasformare il feedback in un'esperienza unica. 
              La missione? Aiutare le attività a crescere... ma in un modo diverso dal solito.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-border rounded-lg overflow-hidden border">
            <AccordionTrigger className="hover:no-underline px-4 py-4 text-left flex items-center">
              In che modo Reviu' migliora l'esperienza dei clienti?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-4 pb-4">
              Non è solo una recensione, è un piccolo gioco, un momento piacevole che lascia un segno. 
              I clienti partecipano volentieri… e tu raccogli molto di più di un semplice voto.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-border rounded-lg overflow-hidden border">
            <AccordionTrigger className="hover:no-underline px-4 py-4 text-left flex items-center">
              È complicato iniziare a usare Reviu'?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-4 pb-4">
              Per niente. Una volta installato il nostro espositore, il resto viene da sé. 
              Il difficile sarà solo abituarsi ai risultati.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
