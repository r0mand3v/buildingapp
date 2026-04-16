import mapDemo from "@/assets/map-demo.jpg";
import AnimateOnScroll from "./AnimateOnScroll";

const floatingCards = [
  { emoji: "🎵", title: "After en terraza", subtitle: "23 van · Palermo", pos: "top-[15%] -left-2 lg:-left-8" },
  { emoji: "⚽", title: "Fútbol 5 — Faltan 2", subtitle: "A 3 cuadras · Gratis", pos: "top-[60%] -right-2 lg:-right-8" },
  { emoji: "🍷", title: "Cena secreta", subtitle: "8 lugares · San Telmo", pos: "bottom-[10%] -left-2 lg:left-4" },
];

const LiveMapSection = () => {
  return (
    <section id="mapa" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <span className="inline-block text-primary font-display text-xs sm:text-sm uppercase tracking-[0.25em] mb-5">
            Mapa en vivo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Tu ciudad,{" "}
            <span className="text-gradient">como nunca la viste</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Un mapa 3D que cambia con la luz del día. De día soleado, atardecer
            naranja, noche con luces. Siempre hay algo pasando.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="relative max-w-5xl mx-auto">
            {/* Large glow */}
            <div className="absolute -inset-8 rounded-[2rem] opacity-30 blur-3xl" style={{ background: "radial-gradient(ellipse, hsl(48 100% 50% / 0.15), transparent 70%)" }} />

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden gradient-border">
              <div className="glass-strong rounded-3xl overflow-hidden">
                <img
                  src={mapDemo}
                  alt="Mapa 3D en vivo de Pipol mostrando eventos"
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="w-full h-auto"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Center badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <div className="glass-yellow rounded-full px-6 py-3 flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                    </span>
                    <span className="font-display font-semibold text-sm sm:text-base">
                      127 planes cerca tuyo ahora
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            {floatingCards.map((c, i) => (
              <div
                key={c.title}
                className={`absolute ${c.pos} hidden md:block animate-float-slow z-20`}
                style={{ animationDelay: `${i * 0.8}s` }}
              >
                <div className="glass-strong rounded-2xl p-3.5 glow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-lg">
                      {c.emoji}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{c.title}</p>
                      <p className="text-xs text-muted-foreground">{c.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default LiveMapSection;
