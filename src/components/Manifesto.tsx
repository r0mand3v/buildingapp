import AnimateOnScroll from "./AnimateOnScroll";

const Manifesto = () => {
  return (
    <section className="bg-[hsl(var(--accent))] text-black section-y">
      <div className="container-page text-center">
        <AnimateOnScroll>
          <span className="eyebrow text-black/55">Manifiesto</span>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <h2 className="display-xl mt-8 mx-auto max-w-[16ch]">
            Pipol no es una app. Es Córdoba moviéndose.
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={160}>
          <p className="mt-10 mx-auto max-w-xl text-lg sm:text-xl text-black/70 leading-relaxed">
            Salí. Sumate. Conocé. La ciudad pasa cuando vos pasás.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Manifesto;
