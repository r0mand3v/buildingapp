import AnimateOnScroll from "./AnimateOnScroll";
import { Apple, Play } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="descargar" className="section-padding relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, hsl(48 100% 50% / 0.4), transparent 60%)" }}
      />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, hsl(330 90% 60% / 0.3), transparent 70%)" }}
      />

      <div className="container mx-auto relative z-10">
        <AnimateOnScroll>
          <div className="glass-strong rounded-[2rem] p-8 sm:p-12 md:p-20 text-center max-w-4xl mx-auto gradient-border glow-md">
            {/* Emoji */}
            <div className="text-6xl mb-8">🔥</div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              No te quedes
              <br />
              <span className="text-gradient-warm">afuera</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-12 max-w-lg mx-auto leading-relaxed">
              La ciudad está prendida y vos acá scrolleando.
              <br className="hidden sm:block" />
              Descargá Pipol y empezá a vivir lo que te estás perdiendo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary text-base sm:text-lg !px-10 !py-5">
                <Apple className="w-6 h-6" />
                Descargar para iOS
              </a>
              <a href="#" className="btn-glass text-base sm:text-lg !px-10 !py-5">
                <Play className="w-6 h-6 fill-current" />
                Descargar para Android
              </a>
            </div>

            <p className="text-muted-foreground text-xs mt-8">
              Gratis. Sin compromiso. Sin spam. Solo planes buenos.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FinalCTA;
