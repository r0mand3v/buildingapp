import AnimateOnScroll from "./AnimateOnScroll";
import pipolIcon from "@/assets/pipol-icon.png";

const FinalCTA = () => {
  return (
    <section id="descargar" className="section-padding relative overflow-hidden bg-background">
      {/* Apple-style massive ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(48 100% 50% / 0.5), transparent 60%)" }}
      />

      <div className="container-narrow relative z-10">
        <AnimateOnScroll>
          <div className="text-center max-w-3xl mx-auto">
            {/* Logo */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-10" style={{ background: "linear-gradient(135deg, hsl(48 100% 55%), hsl(42 100% 45%))", boxShadow: "0 0 60px hsl(48 100% 50% / 0.4)" }}>
              <img src={pipolIcon} alt="Pipol" className="w-9 h-9 object-contain" />
            </div>

            <h2 className="headline-xl text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] mb-8">
              <span className="text-gradient-mute">No te quedes</span>
              <br />
              <span className="text-gradient-warm">afuera.</span>
            </h2>
            <p className="text-foreground/65 text-lg sm:text-xl md:text-2xl mb-12 max-w-xl mx-auto leading-tight tracking-tight">
              La ciudad está prendida. Descargá Pipol y empezá a vivir lo que te estás perdiendo.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center mb-8">
              <a href="#" className="btn-primary w-full sm:w-auto">
                Descargar para iOS
              </a>
              <a href="#" className="btn-glass w-full sm:w-auto">
                Descargar para Android
              </a>
            </div>

            <p className="text-foreground/40 text-[13px] tracking-tight">
              Gratis. Sin compromiso. Sin spam. Solo planes buenos.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FinalCTA;
