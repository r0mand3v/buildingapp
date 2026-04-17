import mapDemo from "@/assets/map-demo.jpg";
import AnimateOnScroll from "./AnimateOnScroll";

const floatingCards = [
  { emoji: "🎵", title: "After en terraza", subtitle: "23 van · Palermo", pos: "top-[12%] -left-2 lg:-left-10" },
  { emoji: "⚽", title: "Fútbol 5 — Faltan 2", subtitle: "A 3 cuadras · Gratis", pos: "top-[55%] -right-2 lg:-right-10" },
  { emoji: "🍷", title: "Cena secreta", subtitle: "8 lugares · San Telmo", pos: "bottom-[8%] -left-2 lg:left-6" },
];

const LiveMapSection = () => {
  return (
    <section id="mapa" className="section-padding relative overflow-hidden bg-background">
      <div className="container-narrow">
        <AnimateOnScroll className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-xs sm:text-[13px] font-medium text-primary tracking-tight mb-6">
            Mapa en vivo
          </span>
          <h2 className="headline-lg text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] mb-7">
            <span className="text-gradient-mute">Tu ciudad,</span>
            <br />
            <span className="text-gradient-warm">como nunca la viste.</span>
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Un mapa 3D que cambia con la luz del día. De día soleado, atardecer
            naranja, noche con luces. Siempre hay algo pasando.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="relative max-w-[1080px] mx-auto">
            {/* Apple-style ambient glow */}
            <div className="absolute -inset-12 rounded-[3rem] opacity-40 blur-3xl pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(48 100% 50% / 0.18), transparent 70%)" }} />

            {/* Main card */}
            <div className="relative rounded-[32px] overflow-hidden surface-card">
              <div className="relative">
                <img
                  src={mapDemo}
                  alt="Mapa 3D en vivo de Pipol mostrando eventos"
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="w-full h-auto"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* Live counter — bottom */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                  <div className="glass-strong rounded-full px-5 py-2.5 flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <span className="text-[13px] font-medium tracking-tight">
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
                      <p className="text-[13px] font-semibold tracking-tight">{c.title}</p>
                      <p className="text-[11px] text-foreground/50">{c.subtitle}</p>
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
