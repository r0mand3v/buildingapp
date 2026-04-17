import AnimateOnScroll from "./AnimateOnScroll";

const vibes = [
  { emoji: "🎶", title: "Recital bajo las estrellas", user: "Sofi", time: "Hace 3 min", gradient: "from-pink-600/40 via-purple-600/30 to-indigo-600/40" },
  { emoji: "🍻", title: "After en San Telmo", user: "Mati", time: "Hace 1 min", gradient: "from-amber-600/40 via-orange-600/30 to-red-600/40" },
  { emoji: "⚽", title: "Gol de media cancha", user: "Nico", time: "Ahora", gradient: "from-green-600/40 via-emerald-600/30 to-teal-600/40" },
  { emoji: "🎨", title: "Expo urbana increíble", user: "Cami", time: "Hace 8 min", gradient: "from-blue-600/40 via-cyan-600/30 to-sky-600/40" },
  { emoji: "🔥", title: "Rooftop party", user: "Fede", time: "Ahora", gradient: "from-red-600/40 via-orange-600/30 to-yellow-600/40" },
  { emoji: "🧉", title: "Picnic en Costanera", user: "Luli", time: "Hace 5 min", gradient: "from-lime-600/40 via-green-600/30 to-emerald-600/40" },
  { emoji: "🎤", title: "Open mic — Palermo", user: "Joaco", time: "Hace 2 min", gradient: "from-violet-600/40 via-purple-600/30 to-fuchsia-600/40" },
  { emoji: "🏀", title: "3vs3 en la plaza", user: "Tomi", time: "Ahora", gradient: "from-orange-600/40 via-amber-600/30 to-yellow-600/40" },
];

const VibeCard = ({ v }: { v: typeof vibes[0] }) => (
  <div className={`vibe-card min-w-[200px] sm:min-w-[240px] aspect-[9/16] relative bg-gradient-to-br ${v.gradient} flex flex-col justify-between p-4`}>
    {/* Top: live indicator */}
    <div className="flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>
      <span className="text-[10px] uppercase tracking-[0.15em] text-foreground/70 font-semibold">En vivo</span>
    </div>

    {/* Center emoji */}
    <div className="text-7xl text-center my-auto drop-shadow-2xl">{v.emoji}</div>

    {/* Bottom info */}
    <div className="glass-strong rounded-2xl p-3">
      <p className="font-semibold text-[13px] leading-tight tracking-tight">{v.title}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-[11px] text-foreground/60">@{v.user}</span>
        <span className="text-[11px] text-primary font-medium">{v.time}</span>
      </div>
    </div>
  </div>
);

const VibesSection = () => {
  return (
    <section id="vibes" className="section-padding overflow-hidden bg-background">
      <div className="container-narrow">
        <AnimateOnScroll className="text-center mb-14">
          <span className="inline-block text-xs sm:text-[13px] font-medium text-primary tracking-tight mb-6">
            Vibes
          </span>
          <h2 className="headline-lg text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] mb-6">
            <span className="text-gradient-mute">Sentí la onda</span>
            <br />
            <span className="text-foreground/40">antes de ir.</span>
          </h2>
          <p className="text-foreground/60 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Videos cortos de lo que está pasando ahora mismo. Mirá los Vibes,
            sentí la onda y decidí a dónde ir.
          </p>
        </AnimateOnScroll>
      </div>

      {/* Row 1 - left */}
      <div className="relative mb-4">
        <div className="marquee gap-4 animate-slide-left">
          {[...vibes, ...vibes].map((v, i) => (
            <VibeCard key={`r1-${i}`} v={v} />
          ))}
        </div>
      </div>

      {/* Row 2 - right */}
      <div className="relative">
        <div className="marquee gap-4 animate-slide-right">
          {[...vibes.slice(4), ...vibes.slice(0, 4), ...vibes.slice(4), ...vibes.slice(0, 4)].map((v, i) => (
            <VibeCard key={`r2-${i}`} v={v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibesSection;
