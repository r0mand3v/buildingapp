import AnimateOnScroll from "./AnimateOnScroll";
import mockupMap from "@/assets/mockup-map.png";

const LiveMapSection = () => {
  return (
    <section id="mapa" className="bg-white text-foreground section-y overflow-hidden">
      <div className="container-page">
        <AnimateOnScroll>
          <span className="eyebrow text-muted-foreground">Inicio</span>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <h2 className="display-lg mt-6 max-w-[14ch]">Córdoba, en vivo.</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={160}>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Abrí el mapa. Mirá qué está pasando ahora cerca tuyo. Tocá un pin y sumate.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200} className="mt-20 sm:mt-28 relative">
          <div className="relative mx-auto max-w-[420px]">
            <img
              src={mockupMap}
              alt="App Pipol — pantalla de mapa"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-auto mockup-shadow animate-float"
            />
          </div>

          {/* Apple-keynote annotations (desktop only) */}
          <div className="hidden lg:block">
            <Annotation className="left-[18%] top-[28%]" label="Pins por categoría" align="right" />
            <Annotation className="right-[18%] top-[18%]" label="Buscar al toque" align="left" />
            <Annotation className="right-[14%] bottom-[22%]" label="Long-press para crear" align="left" />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

const Annotation = ({
  className,
  label,
  align,
}: {
  className: string;
  label: string;
  align: "left" | "right";
}) => (
  <div className={`absolute ${className} flex items-center gap-3 ${align === "left" ? "" : "flex-row-reverse"}`}>
    <span className="text-[12px] font-medium text-muted-foreground whitespace-nowrap">{label}</span>
    <span className="block h-px w-16 bg-foreground/20" />
    <span className="block h-1.5 w-1.5 rounded-full bg-foreground" />
  </div>
);

export default LiveMapSection;
