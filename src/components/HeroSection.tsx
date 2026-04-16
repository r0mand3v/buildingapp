import heroBg from "@/assets/hero-bg.jpg";
import { Apple, Play } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { num: "2.4K+", label: "planes activos ahora" },
  { num: "180K+", label: "personas conectadas" },
  { num: "45+", label: "ciudades" },
];

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Mapa 3D de la ciudad de noche"
          width={1920}
          height={1080}
          className="w-full h-full object-cover scale-105"
          style={{ filter: "brightness(0.5) saturate(1.2)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
        {/* Radial glow from center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(ellipse, hsl(48 100% 50% / 0.3), transparent 70%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 sm:px-6 text-center pt-32 pb-12">
        {/* Live badge */}
        <div
          className={`inline-flex items-center gap-2.5 glass-yellow rounded-full px-5 py-2.5 mb-10 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
          </span>
          <span className="text-sm text-foreground/80 font-medium">
            Esto está pasando ahora mismo
          </span>
        </div>

        {/* Title */}
        <h1
          className={`font-display text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.92] mb-7 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          Tu ciudad está
          <br />
          <span className="text-gradient-warm">pasando.</span>
          <br />
          <span className="text-muted-foreground text-[1.8rem] sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            ¿Estás adentro?
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          Eventos, partidos, juntadas y experiencias en tiempo real.
          <br className="hidden sm:block" />
          Abrí Pipol y encontrá tu plan ahora.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <a href="#" className="btn-primary text-base w-full sm:w-auto">
            <Apple className="w-5 h-5" />
            Descargar gratis para iOS
          </a>
          <a href="#" className="btn-glass text-base w-full sm:w-auto">
            <Play className="w-5 h-5 fill-current" />
            Descargar gratis para Android
          </a>
        </div>

        {/* Stats */}
        <div
          className={`flex flex-wrap justify-center gap-8 sm:gap-12 transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl sm:text-3xl font-bold text-gradient">{s.num}</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1400ms" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-primary animate-float" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
