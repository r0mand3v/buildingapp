import AnimateOnScroll from "./AnimateOnScroll";

const sports = [
  { emoji: "⚽", label: "Fútbol 5" },
  { emoji: "🏀", label: "Básquet 3v3" },
  { emoji: "🎾", label: "Pádel" },
  { emoji: "🏃", label: "Running" },
  { emoji: "🏐", label: "Vóley" },
  { emoji: "🚴", label: "Ciclismo" },
];

const stats = [
  { num: "500+", label: "partidos activos" },
  { num: "12", label: "deportes disponibles" },
  { num: "30s", label: "para sumarte" },
];

const SportsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 pointer-events-none" style={{ background: "radial-gradient(circle, hsl(48 100% 50% / 0.5), transparent 70%)" }} />

      <div className="container-narrow relative z-10">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-xs sm:text-[13px] font-medium text-primary tracking-tight mb-6">
            Deportes
          </span>
          <h2 className="headline-lg text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] mb-6">
            <span className="text-gradient-mute">El partido</span>
            <br />
            <span className="text-gradient-warm">te está esperando.</span>
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            ¿Querés jugar un fútbol 5 ahora? ¿Un 3v3 de básquet? ¿Un pádel?
            En Pipol siempre falta uno. Y ese uno podés ser vos.
          </p>
        </AnimateOnScroll>

        {/* Sports pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-2xl mx-auto">
          {sports.map((s, i) => (
            <AnimateOnScroll key={s.label} delay={i * 50}>
              <div className="glass-yellow rounded-full px-5 py-2.5 flex items-center gap-2.5 hover:scale-105 transition-transform duration-300">
                <span className="text-lg">{s.emoji}</span>
                <span className="font-medium text-[14px] tracking-tight">{s.label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Stats — Apple style */}
        <AnimateOnScroll>
          <div className="surface-card p-10 sm:p-14 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="headline-xl text-5xl sm:text-6xl mb-3 text-gradient-warm">
                    {s.num}
                  </p>
                  <p className="text-foreground/55 text-[14px] tracking-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default SportsSection;
