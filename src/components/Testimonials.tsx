import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sofi, 24",
    text: "Estaba aburrida un sábado y encontré un after a 3 cuadras. Terminé conociendo a mis mejores amigas.",
    rating: 5,
  },
  {
    name: "Mati, 27",
    text: "Faltaba uno para el fútbol 5. Abrí Pipol, me uní y ahora juego todos los jueves con los pibes.",
    rating: 5,
  },
  {
    name: "Cami, 22",
    text: "Con mi novio descubrimos una cena secreta en un rooftop que ni sabíamos que existía. Increíble.",
    rating: 5,
  },
  {
    name: "Fede, 29",
    text: "Me mudé a Buenos Aires sin conocer a nadie. Con Pipol conocí a toda mi banda actual. Literal.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Historias reales
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            La gente que{" "}
            <span className="text-gradient">ya se animó</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="feature-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                "{t.text}"
              </p>
              <span className="text-muted-foreground text-sm font-medium">
                — {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
