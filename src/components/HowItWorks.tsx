import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    num: "01",
    emoji: "🗺️",
    title: "Abrí el mapa",
    desc: "Ves todo lo que pasa cerca tuyo. Filtrá por tipo, horario o mood.",
  },
  {
    num: "02",
    emoji: "👀",
    title: "Mirá los Vibes",
    desc: "Videos reales de la gente que ya está ahí. Sentí la onda antes de ir.",
  },
  {
    num: "03",
    emoji: "🚀",
    title: "Unite con un toque",
    desc: "Tocá 'Unite', chateá con la gente, pagá si hace falta. Listo.",
  },
  {
    num: "04",
    emoji: "✨",
    title: "Viví y compartí",
    desc: "Subí tu Vibe para que otros vean la onda real. Repetí mañana.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-padding relative">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-primary font-display text-xs sm:text-sm uppercase tracking-[0.25em] mb-5">
            Cómo funciona
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Tan fácil como{" "}
            <span className="text-gradient">abrir y salir</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Cuatro pasos. Cinco minutos. Un plan increíble.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <AnimateOnScroll key={s.num} delay={i * 120}>
              <div className="feature-card text-center relative group h-full">
                {/* Step connector */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-3 w-6 h-px bg-gradient-to-r from-primary/40 to-transparent z-10" />
                )}
                <div className="text-5xl mb-5">{s.emoji}</div>
                <span className="text-primary/60 font-display text-xs tracking-[0.3em] uppercase font-medium">
                  Paso {s.num}
                </span>
                <h3 className="font-display text-lg font-semibold mt-3 mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
