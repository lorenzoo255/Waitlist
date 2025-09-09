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

  // Aggiorna altezza viewport visibile reale
  useEffect(() => {
    const updateVh = () => setVh(window.innerHeight);
    updateVh();
    window.addEventListener("resize", updateVh);
    return () => window.removeEventListener("resize", updateVh);
  }, []);

  return (
    <div
      id="faq"
      style={{ height: vh }}
      className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 bg-background"
    >
      {/* Titolo e descrizione */}
      <div className="flex flex-col items-center justify-center gap-2 max-w-md text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
          Domande Frequenti
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground text-center mt-2">
          Scopri tutto quello che c'è da sapere su Reviu' e su come può aiutare
          la tua attività a crescere.
        </p>
      </div>

      {/* Accordion FAQ */}
      <div className="w-full max-w-lg px-4 sm:px-6 mt-8">
        <Accordion type="single" collapsible className="w-full flex flex-col gap-3">
          <AccordionItem value="item-1" className="border-border">
            <AccordionTrigger className="hover:no-underline px-4 py-3 text-left">
              Come è nato Reviu' e qual è la sua missione?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-4 pb-3">
              Reviu' nasce dall'esperienza di chi ha sentito la necessità di ottenere feedback autentici dai propri clienti. La nostra missione è aiutare le attività a crescere, migliorando la qualità del servizio e la presenza digitale, attraverso un coinvolgimento attivo e divertente dei clienti nel processo di miglioramento.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-border">
            <AccordionTrigger className="hover:no-underline px-4 py-3 text-left">
              In che modo Reviu' migliora l'esperienza dei clienti?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-4 pb-3">
              La piattaforma permette ai tuoi clienti di lasciare recensioni in maniera semplice e piacevole, con la possibilità di ricevere incentivi e premi per la loro partecipazione. In questo modo si arricchisce la loro esperienza e si rafforza il legame con la tua attività.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-border">
            <AccordionTrigger className="hover:no-underline px-4 py-3 text-left">
              È complicato iniziare a usare Reviu'?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-4 pb-3">
              Assolutamente no! Ti basterà posizionare un nostro espositore all'interno del tuo locale e il sistema sarà subito pronto. Da quel momento non dovrai fare altro che goderti i benefici che Reviu' porterà alla tua attività.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
