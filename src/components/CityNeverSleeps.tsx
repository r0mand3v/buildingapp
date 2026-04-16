import AnimateOnScroll from "./AnimateOnScroll";
import { Clock, Wifi, Flame, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Clock,
    title: "Siempre está pasando algo",
    desc: "De día, de noche, de madrugada. Pipol nunca duerme porque tu ciudad tampoco.",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    icon: Wifi,
    title: "Todo en tiempo real",
    desc: "No es un catálogo viejo. Es lo que está pasando ahora, con fotos y videos de los que ya están ahí.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Flame,
    title: "La espontaneidad es todo",
    desc: "¿Estás aburrido? En 5 minutos tenés un plan. Sin organizar nada, sin esperar a nadie.",
    gradient: "from-red-500/10 to-pink-500/10",
  },
  {
    icon: Sparkles,
    title: "Experiencias reales",
    desc: "No es scrollear fotos. Es salir de tu casa, conocer gente, vivir cosas que no te esperabas.",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
];

const CityNeverSleeps = () => {
  return (
    <section id="que-es" className="section-padding relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-primary font-display text-xs sm:text-sm uppercase tracking-[0.25em] mb-5">
            La ciudad nunca duerme
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            ¿Qué hacés hoy?
            <br />
            <span className="text-gradient">Pipol te lo resuelve.</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Imaginate abrir una app y ver todo lo que está pasando cerca tuyo
            ahora mismo. Fiestas en terrazas, partidos, juntadas, recitales, afters.
            Eso es Pipol.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {cards.map((c, i) => (
            <AnimateOnScroll key={c.title} delay={i * 120}>
              <div className={`feature-card group relative overflow-hidden h-full bg-gradient-to-br ${c.gradient}`}>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-3">
                  {c.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {c.desc}
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
