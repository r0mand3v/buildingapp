import heroBg from "@/assets/hero-bg.jpg";
import { Apple, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Mapa 3D de la ciudad"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-sm text-muted-foreground">
            +2.400 planes activos ahora mismo
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Tu ciudad está
          <br />
          <span className="text-gradient">pasando.</span>
          <br />
          <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            ¿Estás adentro?
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Descubrí eventos, partidos, juntadas y experiencias en tiempo real.
          Uníte ahora mismo.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a href="#" className="btn-primary text-base">
            <Apple className="w-5 h-5" />
            Descargar para iOS
          </a>
          <a href="#" className="btn-glass text-base">
            <Play className="w-5 h-5" />
            Descargar para Android
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 opacity-0 animate-fade-up"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 mx-auto flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-primary animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
