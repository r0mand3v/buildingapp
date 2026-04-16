import AnimateOnScroll from "./AnimateOnScroll";
import { Bike, Dumbbell, MapPin } from "lucide-react";

const sports = [
  { emoji: "⚽", label: "Fútbol 5" },
  { emoji: "🏀", label: "Básquet 3v3" },
  { emoji: "🎾", label: "Pádel" },
  { emoji: "🏃", label: "Running" },
  { emoji: "🏐", label: "Vóley playa" },
  { emoji: "🚴", label: "Ciclismo" },
];

const SportsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(48 100% 50% / 0.4), transparent 70%)" }} />

      <div className="container mx-auto relative z-10">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-primary font-display text-xs sm:text-sm uppercase tracking-[0.25em] mb-5">
            Para cuando querés moverte
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            El partido está{" "}
            <span className="text-gradient">esperándote</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            ¿Querés jugar un fútbol 5 ahora? ¿Un 3v3 de básquet? ¿Un pádel?
            En Pipol siempre falta uno. Y ese uno podés ser vos.
          </p>
        </AnimateOnScroll>

        {/* Sports grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-14 max-w-2xl mx-auto">
          {sports.map((s, i) => (
            <AnimateOnScroll key={s.label} delay={i * 60}>
              <div className="glass-yellow rounded-2xl px-5 py-4 flex items-center gap-3 hover:glow-sm transition-all duration-300 hover:scale-105 cursor-default">
                <span className="text-2xl">{s.emoji}</span>
                <span className="font-display font-semibold text-sm">{s.label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom highlights */}
        <AnimateOnScroll>
          <div className="glass-strong rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto gradient-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-3">
                <MapPin className="w-8 h-8 text-primary" />
                <p className="font-display font-bold text-2xl text-gradient">500+</p>
                <p className="text-muted-foreground text-sm">partidos activos ahora</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Dumbbell className="w-8 h-8 text-primary" />
                <p className="font-display font-bold text-2xl text-gradient">12</p>
                <p className="text-muted-foreground text-sm">deportes disponibles</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <Bike className="w-8 h-8 text-primary" />
                <p className="font-display font-bold text-2xl text-gradient">30 seg</p>
                <p className="text-muted-foreground text-sm">para sumarte a un plan</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default SportsSection;
