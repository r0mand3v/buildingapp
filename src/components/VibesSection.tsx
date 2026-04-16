import AnimateOnScroll from "./AnimateOnScroll";

const vibes = [
  { emoji: "🎶", title: "Recital bajo las estrellas", user: "Sofi", time: "Hace 3 min", gradient: "from-pink-600/30 via-purple-600/20 to-indigo-600/30" },
  { emoji: "🍻", title: "After en San Telmo", user: "Mati", time: "Hace 1 min", gradient: "from-amber-600/30 via-orange-600/20 to-red-600/30" },
  { emoji: "⚽", title: "Gol de media cancha", user: "Nico", time: "Ahora", gradient: "from-green-600/30 via-emerald-600/20 to-teal-600/30" },
  { emoji: "🎨", title: "Expo urbana increíble", user: "Cami", time: "Hace 8 min", gradient: "from-blue-600/30 via-cyan-600/20 to-sky-600/30" },
  { emoji: "🔥", title: "Rooftop party", user: "Fede", time: "Ahora", gradient: "from-red-600/30 via-orange-600/20 to-yellow-600/30" },
  { emoji: "🧉", title: "Picnic en Costanera", user: "Luli", time: "Hace 5 min", gradient: "from-lime-600/30 via-green-600/20 to-emerald-600/30" },
  { emoji: "🎤", title: "Open mic — Palermo", user: "Joaco", time: "Hace 2 min", gradient: "from-violet-600/30 via-purple-600/20 to-fuchsia-600/30" },
  { emoji: "🏀", title: "3vs3 en la plaza", user: "Tomi", time: "Ahora", gradient: "from-orange-600/30 via-amber-600/20 to-yellow-600/30" },
];

const VibeCard = ({ v }: { v: typeof vibes[0] }) => (
  <div className={`vibe-card min-w-[180px] sm:min-w-[220px] aspect-[9/16] relative bg-gradient-to-br ${v.gradient} flex flex-col justify-between p-4`}>
    {/* Top: live indicator */}
    <div className="flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>
      <span className="text-[10px] uppercase tracking-wider text-foreground/60 font-medium">En vivo</span>
    </div>

    {/* Center emoji */}
    <div className="text-6xl text-center my-auto">{v.emoji}</div>

    {/* Bottom info */}
    <div className="glass-strong rounded-xl p-3">
      <p className="font-display font-semibold text-sm leading-tight">{v.title}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-[11px] text-muted-foreground">@{v.user}</span>
        <span className="text-[11px] text-primary font-medium">{v.time}</span>
      </div>
    </div>
  </div>
);

const VibesSection = () => {
  return (
    <section id="vibes" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <AnimateOnScroll className="text-center mb-12">
          <span className="inline-block text-primary font-display text-xs sm:text-sm uppercase tracking-[0.25em] mb-5">
            Vibes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sentí la{" "}
            <span className="text-gradient">onda real</span>{" "}
            antes de ir
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Videos cortos de lo que está pasando ahora mismo. Mirá los Vibes,
            sentí la onda y decidí a dónde ir.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Row 1 - left */}
      <div className="relative mb-4">
        <div className="flex gap-4 animate-slide-left" style={{ width: "max-content" }}>
          {[...vibes, ...vibes].map((v, i) => (
            <VibeCard key={`r1-${i}`} v={v} />
          ))}
        </div>
      </div>

      {/* Row 2 - right */}
      <div className="relative">
        <div className="flex gap-4 animate-slide-right" style={{ width: "max-content" }}>
          {[...vibes.slice(4), ...vibes.slice(0, 4), ...vibes.slice(4), ...vibes.slice(0, 4)].map((v, i) => (
            <VibeCard key={`r2-${i}`} v={v} />
          ))}
        </div>
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none fixed-edges">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default VibesSection;
