import AnimateOnScroll from "./AnimateOnScroll";
import c1 from "@/assets/complejo-1.jpg";
import c2 from "@/assets/complejo-2.jpg";
import c3 from "@/assets/complejo-3.jpg";
import c4 from "@/assets/complejo-4.jpg";
import { ArrowRight } from "lucide-react";

const complejos = [
  { img: c1, name: "La Bombonerita", sport: "Fútbol 5", zone: "Nueva Córdoba" },
  { img: c2, name: "Glass Padel Club", sport: "Pádel", zone: "Cerro de las Rosas" },
  { img: c3, name: "Polideportivo Norte", sport: "Básquet", zone: "Alta Córdoba" },
  { img: c4, name: "Red Clay Center", sport: "Tenis", zone: "Villa Belgrano" },
];

const SportsSection = () => {
  return (
    <section id="canchas" className="bg-white text-foreground section-y overflow-hidden">
      <div className="container-page">
        <AnimateOnScroll>
          <span className="eyebrow text-muted-foreground">Canchas</span>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <h2 className="display-lg mt-6 max-w-[16ch]">Reservá. Jugá. Repetí.</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={160}>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Los mejores complejos de Córdoba, en tu bolsillo.
          </p>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll delay={200} className="mt-16">
        <div
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ paddingLeft: "max(1.25rem, 5vw)", paddingRight: "max(1.25rem, 5vw)" }}
        >
          {complejos.map((c) => (
            <article key={c.name} className="snap-start shrink-0 w-[78vw] sm:w-[420px] group">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-surface">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-end justify-between mt-5 px-1">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{c.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {c.sport} · {c.zone}
                  </p>
                </div>
                <a href="#download" className="link-arrow text-foreground hover:text-foreground/70">
                  Reservar <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default SportsSection;
