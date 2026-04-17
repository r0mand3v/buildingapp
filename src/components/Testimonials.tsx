import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    name: "Sofi",
    age: 24,
    location: "Palermo",
    text: "Estaba aburrida un sábado y encontré un after a 3 cuadras. Terminé bailando hasta las 6 y conociendo a mis mejores amigas.",
    highlight: "Conocí a mis mejores amigas",
  },
  {
    name: "Mati",
    age: 27,
    location: "Belgrano",
    text: "Faltaba uno para el fútbol 5. Abrí Pipol, me sumé y ahora juego todos los jueves con los mismos pibes.",
    highlight: "Ahora juego todos los jueves",
  },
  {
    name: "Cami",
    age: 22,
    location: "Recoleta",
    text: "Con mi novio descubrimos una cena secreta en un rooftop que ni sabíamos que existía. Fue la mejor cita que tuvimos.",
    highlight: "La mejor cita de nuestras vidas",
  },
  {
    name: "Fede",
    age: 29,
    location: "Villa Crespo",
    text: "Me mudé a Buenos Aires sin conocer a nadie. Con Pipol conocí a toda mi banda actual en menos de un mes.",
    highlight: "Toda mi vida social salió de acá",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimateOnScroll className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs sm:text-[13px] font-medium text-primary tracking-tight mb-6">
            Historias reales
          </span>
          <h2 className="headline-lg text-4xl sm:text-6xl md:text-7xl lg:text-[5rem]">
            <span className="text-gradient-mute">Gente que</span>
            <br />
            <span className="text-gradient-warm">ya se animó.</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 100}>
              <div className="feature-card h-full flex flex-col">
                {/* Apple-style large quote */}
                <p className="headline-lg text-2xl sm:text-3xl mb-6 text-gradient-warm leading-tight">
                  "{t.highlight}."
                </p>

                <p className="text-foreground/65 text-[15px] leading-relaxed mb-8 flex-1">
                  {t.text}
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-border/40">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-primary-foreground text-sm" style={{ background: "linear-gradient(135deg, hsl(48 100% 55%), hsl(42 100% 45%))" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-[14px] font-semibold tracking-tight">{t.name}, {t.age}</p>
                    <p className="text-[12px] text-foreground/50">{t.location}</p>
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
