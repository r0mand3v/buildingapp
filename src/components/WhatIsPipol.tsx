import { MapPin, Zap, Users, Video } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Mapa 3D en vivo",
    desc: "Ves todo lo que pasa a tu alrededor en tiempo real. El mapa cambia con la hora del día.",
  },
  {
    icon: Zap,
    title: "Unite con un toque",
    desc: "Encontrás un plan, tocás 'Unite' y listo. Sin vueltas, sin esperas.",
  },
  {
    icon: Users,
    title: "Conocé gente real",
    desc: "Chateá con la gente que va, coordiná y viví la experiencia juntos.",
  },
  {
    icon: Video,
    title: "Vibes reales",
    desc: "Mirá videos cortos de lo que está pasando. Sentí la onda antes de ir.",
  },
];

const WhatIsPipol = () => {
  return (
    <section id="qué-es" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            ¿Qué es Pipol?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            La app que responde:{" "}
            <span className="text-gradient">"¿Qué hacemos ahora?"</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un mapa 3D interactivo donde ves en tiempo real todo lo que está
            pasando cerca tuyo. Fiestas, partidos, juntadas, recitales, afters,
            y cualquier plan copado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="feature-card text-center group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsPipol;
