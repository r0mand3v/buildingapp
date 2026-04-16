import mapDemo from "@/assets/map-demo.jpg";

const LiveMapSection = () => {
  return (
    <section id="mapa" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-display text-sm uppercase tracking-widest mb-4 block">
            Mapa en vivo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Tu ciudad,{" "}
            <span className="text-gradient">como nunca la viste</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Un mapa 3D que cambia según la hora del día. De día, de noche, de
            madrugada: siempre hay algo pasando.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Glow behind */}
          <div className="absolute inset-0 rounded-3xl glow-lg opacity-30 blur-3xl bg-primary/20" />

          <div className="relative rounded-3xl overflow-hidden glass border-primary/20">
            <img
              src={mapDemo}
              alt="Mapa 3D en vivo de Pipol"
              loading="lazy"
              width={1280}
              height={720}
              className="w-full h-auto"
            />
            {/* Overlay pins */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="glass rounded-2xl px-6 py-4 flex items-center gap-3 animate-float">
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                <span className="font-display font-semibold text-sm">
                  127 planes cerca tuyo ahora
                </span>
              </div>
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute -left-4 top-1/4 glass rounded-xl p-3 hidden lg:block animate-float" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-xs">🎵</div>
              <div>
                <p className="text-xs font-semibold">After en terraza</p>
                <p className="text-xs text-muted-foreground">23 personas van</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 top-2/3 glass rounded-xl p-3 hidden lg:block animate-float" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-xs">⚽</div>
              <div>
                <p className="text-xs font-semibold">Fútbol 5 - Faltan 2</p>
                <p className="text-xs text-muted-foreground">A 3 cuadras</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMapSection;
