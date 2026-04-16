import { Users, Heart, UserPlus } from "lucide-react";

const personas = [
  {
    icon: Users,
    title: "Para cuando salís con amigos",
    desc: "Encontrá afters, fiestas en terrazas, partidos de fútbol 5 y planes grupales increíbles. Todo a un toque.",
    emoji: "🎉",
  },
  {
    icon: Heart,
    title: "Para cuando estás con tu pareja",
    desc: "Descubrí cenas secretas, recitales íntimos, experiencias gastronómicas y rincones únicos de la ciudad.",
    emoji: "💫",
  },
  {
    icon: UserPlus,
    title: "Para cuando querés conocer gente",
    desc: "Unite a planes abiertos, meetups, torneos y juntadas donde conocer personas nuevas que comparten tus intereses.",
    emoji: "🤝",
  },
];

const ForYouSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Para vos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Sea lo que sea que busques,{" "}
            <span className="text-gradient">Pipol te lo muestra</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <div key={p.title} className="feature-card group relative overflow-hidden">
              <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                {p.emoji}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
