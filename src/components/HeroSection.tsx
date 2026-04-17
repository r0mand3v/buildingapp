import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      {/* Subtle radial light, no decoration */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, hsl(0 0% 18%) 0%, transparent 70%)",
        }}
      />

      <div className="relative container-page text-center pt-32 pb-24 w-full">
        <div
          className={`transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <span className="eyebrow text-white/50">Pipol · Córdoba</span>
        </div>

        <h1
          className={`display-xl mt-8 mx-auto max-w-[18ch] transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "120ms" }}
        >
          Encontrá tu gente.
          <br />
          <span className="text-white/55">Viví Córdoba.</span>
        </h1>

        <p
          className={`mt-8 mx-auto max-w-xl text-lg sm:text-xl text-white/60 leading-relaxed transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "260ms" }}
        >
          Eventos, canchas, planes y tu tribu — todo en un mapa.
        </p>

        <div
          className={`mt-12 flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <a href="#download" className="btn-pill-light">
            Descargar app
          </a>
          <a href="#mapa" className="link-arrow text-white/85 hover:text-white">
            Ver cómo funciona <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
