import AnimateOnScroll from "./AnimateOnScroll";
import { Users, Heart, UserPlus, Trophy } from "lucide-react";

const scenarios = [
  {
    icon: Users,
    emoji: "🎉",
    title: "Cuando salís con tus amigos",
    desc: "Estás con los pibes sin saber qué hacer. Abrís Pipol y a 5 cuadras hay un after prendido. No lo pensás dos veces.",
    accent: "from-amber-500/20 to-orange-500/10",
  },
  {
    icon: Heart,
    emoji: "💫",
    title: "Cuando estás con tu pareja",
    desc: "Querés hacer algo distinto. Pipol te muestra una cena secreta en un rooftop que ni sabías que existía. Date de arranque.",
    accent: "from-pink-500/20 to-rose-500/10",
  },
  {
    icon: UserPlus,
    emoji: "🤝",
    title: "Cuando querés conocer gente",
    desc: "Te mudaste o querés ampliar tu círculo. Unite a un plan abierto y en una hora tenés amigos nuevos. Posta.",
    accent: "from-blue-500/20 to-indigo-500/10",
  },
  {
    icon: Trophy,
    emoji: "⚽",
    title: "Cuando querés jugar un partido ya",
    desc: "Faltan 2 para el fútbol 5. Vos tenés las botines puestas. En Pipol te sumás en un toque y salís a jugar.",
    accent: "from-green-500/20 to-emerald-500/10",
  },
];

const ForYouSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-primary font-display text-xs sm:text-sm uppercase tracking-[0.25em] mb-5">
            Para vos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sea cual sea tu plan,
            <br />
            <span className="text-gradient">Pipol te lo muestra</span>
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {scenarios.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 100}>
              <div className={`feature-card group relative overflow-hidden h-full bg-gradient-to-br ${s.accent}`}>
                <div className="absolute top-5 right-5 text-4xl opacity-15 group-hover:opacity-30 transition-opacity duration-500">
                  {s.emoji}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-500">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 leading-tight">
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

export default ForYouSection;
