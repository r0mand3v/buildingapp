import { Apple, Play } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="descargar" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="glass-strong rounded-3xl p-8 sm:p-12 md:p-16 text-center max-w-3xl mx-auto glow-md">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            No te quedes
            <br />
            <span className="text-gradient">afuera</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            La ciudad está prendida y vos acá leyendo. Descargá Pipol y empezá
            a vivir lo que te estás perdiendo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary text-base">
              <Apple className="w-5 h-5" />
              Descargar para iOS
            </a>
            <a href="#" className="btn-glass text-base">
              <Play className="w-5 h-5" />
              Descargar para Android
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
