import AnimateOnScroll from "./AnimateOnScroll";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sofi, 24",
    location: "Palermo",
    text: "Estaba aburrida un sábado y encontré un after a 3 cuadras. Terminé bailando hasta las 6 y conociendo a mis mejores amigas. Pipol me cambió la vida social, literal.",
    highlight: "Conocí a mis mejores amigas",
  },
  {
    name: "Mati, 27",
    location: "Belgrano",
    text: "Faltaba uno para el fútbol 5. Abrí Pipol, me sumé y ahora juego todos los jueves con los mismos pibes. Es como tener siempre un equipo disponible.",
    highlight: "Ahora juego todos los jueves",
  },
  {
    name: "Cami, 22",
    location: "Recoleta",
    text: "Con mi novio descubrimos una cena secreta en un rooftop que ni sabíamos que existía. Fue la mejor cita que tuvimos. Gracias Pipol, nos salvaste la relación jajaja.",
    highlight: "La mejor cita de nuestras vidas",
  },
  {
    name: "Fede, 29",
    location: "Villa Crespo",
    text: "Me mudé a Buenos Aires sin conocer a nadie. Con Pipol conocí a toda mi banda actual en menos de un mes. Literalmente toda mi vida social salió de acá.",
    highlight: "Toda mi vida social salió de acá",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-primary font-display text-xs sm:text-sm uppercase tracking-[0.25em] mb-5">
            Historias reales
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Gente que{" "}
            <span className="text-gradient">ya se animó</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            No te lo contamos nosotros. Te lo cuentan ellos.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 100}>
              <div className="feature-card h-full flex flex-col">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Highlight */}
                <p className="text-primary font-display font-semibold text-sm mb-3">
                  "{t.highlight}"
                </p>

                <p className="text-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                  {t.text}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center font-display font-bold text-primary text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
