const steps = [
  {
    num: "01",
    title: "Abrí el mapa",
    desc: "Ves todo lo que está pasando cerca tuyo en tiempo real.",
    emoji: "🗺️",
  },
  {
    num: "02",
    title: "Elegí tu plan",
    desc: "Filtrá por tipo, horario o vibes. Mirá fotos y videos reales.",
    emoji: "🎯",
  },
  {
    num: "03",
    title: "Unite con un toque",
    desc: "Tocá 'Unite', chateá con la gente que va y salí.",
    emoji: "🚀",
  },
  {
    num: "04",
    title: "Viví y compartí",
    desc: "Subí tu Vibe para que otros vean la onda. Repetí.",
    emoji: "✨",
  },
];

const HowItWorks = () => {
  return (
    <section id="cómo-funciona" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Cómo funciona
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Tan fácil como{" "}
            <span className="text-gradient">abrir y salir</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-primary/40 to-transparent z-0" />
              )}
              <div className="feature-card text-center relative z-10">
                <div className="text-4xl mb-4">{s.emoji}</div>
                <span className="text-primary font-display text-xs tracking-widest uppercase">
                  Paso {s.num}
                </span>
                <h3 className="font-display text-lg font-semibold mt-2 mb-3">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
