import AnimateOnScroll from "./AnimateOnScroll";

const scenarios = [
  {
    eyebrow: "Con amigos",
    title: "El after está\na 4 cuadras.",
    desc: "Estás con los pibes sin saber qué hacer. Abrís Pipol y a 5 cuadras hay un after prendido. No lo pensás dos veces.",
    gradient: "from-amber-500/15 via-orange-500/8 to-transparent",
  },
  {
    eyebrow: "Con tu pareja",
    title: "Una cita\nque no se olvida.",
    desc: "Querés hacer algo distinto. Pipol te muestra una cena secreta en un rooftop que ni sabías que existía.",
    gradient: "from-pink-500/15 via-rose-500/8 to-transparent",
  },
  {
    eyebrow: "Para conocer gente",
    title: "Amigos nuevos\nen una hora.",
    desc: "Te mudaste o querés ampliar tu círculo. Unite a un plan abierto y conocé gente real, no solo perfiles.",
    gradient: "from-blue-500/15 via-indigo-500/8 to-transparent",
  },
  {
    eyebrow: "Cuando querés moverte",
    title: "Faltan 2\npara el partido.",
    desc: "Tenés las botines puestas. Abrís Pipol, te sumás en un toque y salís a jugar. Así de fácil.",
    gradient: "from-green-500/15 via-emerald-500/8 to-transparent",
  },
];

const ForYouSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <AnimateOnScroll className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs sm:text-[13px] font-medium text-primary tracking-tight mb-6">
            Para vos
          </span>
          <h2 className="headline-lg text-4xl sm:text-6xl md:text-7xl lg:text-[5rem]">
            <span className="text-gradient-mute">Sea cual sea tu plan,</span>
            <br />
            <span className="text-gradient-warm">Pipol te lo muestra.</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {scenarios.map((s, i) => (
            <AnimateOnScroll key={s.eyebrow} delay={i * 100}>
              <div className={`feature-card h-full bg-gradient-to-br ${s.gradient}`}>
                <span className="text-[12px] uppercase tracking-[0.18em] text-primary font-semibold">
                  {s.eyebrow}
                </span>
                <h3 className="headline-lg text-3xl sm:text-4xl mt-4 mb-5 whitespace-pre-line text-gradient-mute">
                  {s.title}
                </h3>
                <p className="text-foreground/60 text-[15px] leading-relaxed">
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

export default ForYouSection;
