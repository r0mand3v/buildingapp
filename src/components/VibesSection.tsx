import AnimateOnScroll from "./AnimateOnScroll";
import mockupVibes from "@/assets/mockup-vibes.png";

const VibesSection = () => {
  return (
    <section id="vibes" className="bg-black text-white section-y overflow-hidden">
      <div className="container-page grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 lg:sticky lg:top-32">
          <AnimateOnScroll>
            <span className="eyebrow text-white/45">Vibes</span>
          </AnimateOnScroll>
          <AnimateOnScroll delay={80}>
            <h2 className="display-lg mt-6 max-w-[14ch]">
              Antes de ir,
              <br />
              <span className="text-white/55">sentilo.</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={160}>
            <p className="mt-6 max-w-md text-lg text-white/60 leading-relaxed">
              Videos cortos de la gente que ya está adentro. Mirá la energía real antes de salir.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <AnimateOnScroll delay={120}>
            <img
              src={mockupVibes}
              alt="App Pipol — pantalla de Vibes"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full max-w-[380px] h-auto mockup-shadow-dark"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default VibesSection;
