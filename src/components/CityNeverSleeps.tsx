import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  {
    title: "En vivo.",
    desc: "No es un catálogo viejo de eventos. Es lo que está pasando ahora mismo, con fotos y videos de los que ya están ahí.",
  },
  {
    title: "Espontáneo.",
    desc: "Estás aburrido, abrís Pipol, en cinco minutos tenés plan. Sin organizar nada. Sin esperar a nadie.",
  },
  {
    title: "Real.",
    desc: "No es scrollear fotos. Es salir de tu casa, conocer gente, vivir cosas que no te esperabas.",
  },
];

const CityNeverSleeps = () => {
  return (
    <section id="que-es" className="section-padding relative bg-background">
      <div className="container-narrow">
        {/* Apple-style massive statement headline */}
        <AnimateOnScroll className="text-center mb-20 sm:mb-28">
          <span className="inline-block text-xs sm:text-[13px] font-medium text-primary tracking-tight mb-6">
            ¿Qué es Pipol?
          </span>
          <h2 className="headline-lg text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] max-w-[1000px] mx-auto">
            <span className="text-gradient-mute">El mapa vivo</span>
            <br />
            <span className="text-foreground/40">de tu ciudad.</span>
          </h2>
        </AnimateOnScroll>

        {/* Three pillars — Apple style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/50 rounded-[28px] overflow-hidden">
          {features.map((f, i) => (
            <AnimateOnScroll key={f.title} delay={i * 100}>
              <div className="bg-background p-8 sm:p-10 h-full">
                <h3 className="headline-lg text-2xl sm:text-3xl mb-4 text-gradient-warm">
                  {f.title}
                </h3>
                <p className="text-foreground/60 text-[15px] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityNeverSleeps;
