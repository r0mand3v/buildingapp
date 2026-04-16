const vibes = [
  {
    emoji: "🎶",
    title: "Recital en Palermo",
    user: "Sofi",
    time: "Hace 12 min",
    color: "from-pink-500/20 to-purple-500/20",
  },
  {
    emoji: "🍻",
    title: "After en San Telmo",
    user: "Mati",
    time: "Hace 5 min",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    emoji: "⚽",
    title: "Partido en el parque",
    user: "Nico",
    time: "Hace 2 min",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    emoji: "🎨",
    title: "Expo de arte urbano",
    user: "Cami",
    time: "Hace 18 min",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    emoji: "🔥",
    title: "Rooftop party",
    user: "Fede",
    time: "Ahora",
    color: "from-red-500/20 to-yellow-500/20",
  },
  {
    emoji: "🧉",
    title: "Picnic en Costanera",
    user: "Luli",
    time: "Hace 8 min",
    color: "from-lime-500/20 to-green-500/20",
  },
];

const VibesSection = () => {
  return (
    <section id="vibes" className="section-padding overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Vibes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Mirá la <span className="text-gradient">onda real</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Videos cortos de lo que está pasando ahora mismo. Sentí el vibe
            antes de ir.
          </p>
        </div>

        {/* Scrolling vibes */}
        <div className="relative">
          <div className="flex gap-4 animate-slide-left" style={{ width: "200%" }}>
            {[...vibes, ...vibes].map((v, i) => (
              <div
                key={i}
                className={`vibe-card min-w-[200px] sm:min-w-[240px] aspect-[9/16] relative bg-gradient-to-br ${v.color} flex flex-col justify-end p-4`}
              >
                <div className="text-5xl mb-3">{v.emoji}</div>
                <div className="glass-strong rounded-xl p-3">
                  <p className="font-display font-semibold text-sm">
                    {v.title}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-muted-foreground">
                      @{v.user}
                    </span>
                    <span className="text-xs text-primary">{v.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default VibesSection;
