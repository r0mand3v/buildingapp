import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    num: "01",
    title: "Abrí el mapa.",
    desc: "Ves todo lo que pasa cerca tuyo. Filtrá por tipo, horario o mood.",
  },
  {
    num: "02",
    title: "Mirá los Vibes.",
    desc: "Videos reales de la gente que ya está ahí. Sentí la onda antes de ir.",
  },
  {
    num: "03",
    title: "Unite con un toque.",
    desc: "Tocá 'Unite', chateá con la gente, pagá si hace falta. Listo.",
  },
  {
    num: "04",
    title: "Viví y compartí.",
    desc: "Subí tu Vibe para que otros vean la onda real. Repetí mañana.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="section-padding relative bg-background">
      <div className="container-narrow">
        <AnimateOnScroll className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs sm:text-[13px] font-medium text-primary tracking-tight mb-6">
            Cómo funciona
          </span>
          <h2 className="headline-lg text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] mb-6">
            <span className="text-gradient-mute">Tan simple</span>
            <br />
            <span className="text-gradient-warm">como abrir y salir.</span>
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg max-w-xl mx-auto">
            Cuatro pasos. Cinco minutos. Un plan increíble.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/50 rounded-[28px] overflow-hidden">
          {steps.map((s, i) => (
            <AnimateOnScroll key={s.num} delay={i * 80}>
              <div className="bg-background p-7 sm:p-8 h-full flex flex-col">
                <span className="text-primary font-semibold text-[13px] tracking-tight mb-4">
                  {s.num}
                </span>
                <h3 className="headline-lg text-xl sm:text-2xl mb-3 text-gradient-mute">
                  {s.title}
                </h3>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
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
