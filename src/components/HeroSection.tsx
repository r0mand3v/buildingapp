import heroBg from "@/assets/hero-bg.jpg";
import pipolIcon from "@/assets/pipol-icon.png";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-background">
      {/* Background — Apple-like single hero image, very dark */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35) saturate(1.1) contrast(1.1)" }}
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, hsl(0 0% 0% / 0.7) 100%)" }} />
      </div>

      {/* Content — Apple-style centered, generous spacing */}
      <div className="relative z-10 w-full max-w-[1120px] mx-auto px-5 sm:px-8 text-center pt-32 sm:pt-36 pb-16 flex-1 flex flex-col items-center justify-center">
        {/* Logo mark */}
        <div
          className={`mb-8 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto" style={{ background: "linear-gradient(135deg, hsl(48 100% 55%), hsl(42 100% 45%))", boxShadow: "0 0 40px hsl(48 100% 50% / 0.3)" }}>
            <img src={pipolIcon} alt="Pipol" className="w-8 h-8 object-contain" />
          </div>
        </div>

        {/* Eyebrow */}
        <div
          className={`mb-6 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="text-[13px] sm:text-sm font-medium text-primary tracking-tight">
            Presentamos Pipol
          </span>
        </div>

        {/* Apple-style massive headline */}
        <h1
          className={`headline-xl text-[3.25rem] sm:text-7xl md:text-8xl lg:text-[7.5rem] mb-6 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="text-gradient-mute block">Tu ciudad</span>
          <span className="text-gradient-warm block">está pasando.</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg sm:text-2xl md:text-[28px] text-foreground/70 max-w-2xl mx-auto mb-3 leading-tight tracking-tight transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          ¿Estás adentro?
        </p>

        <p
          className={`text-base sm:text-lg text-foreground/55 max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          El mapa vivo de tu ciudad. Eventos, partidos y experiencias en tiempo real.
        </p>

        {/* CTAs — Apple style: primary + ghost link */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "550ms" }}
        >
          <a href="#descargar" className="btn-primary w-full sm:w-auto">
            Descargar Pipol
          </a>
          <a href="#que-es" className="btn-ghost">
            Conocé más <span aria-hidden>›</span>
          </a>
        </div>

        {/* Live indicator — bottom subtle */}
        <div
          className={`mt-16 inline-flex items-center gap-2.5 transition-all duration-1000 ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs text-foreground/50 tracking-tight">
            2.487 planes activos en este momento
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
