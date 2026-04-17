import AnimateOnScroll from "./AnimateOnScroll";

const HowItWorks = () => {
  return (
    <section className="bg-black text-white section-y">
      <div className="container-page">
        <AnimateOnScroll>
          <span className="eyebrow text-white/45">Crear</span>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <h2 className="display-lg mt-6 max-w-[14ch]">
            Armá el plan.
            <br />
            <span className="text-white/55">En 30 segundos.</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={160} className="mt-20">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10">
            <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-3">
              {["Tocá un punto", "Poné qué onda", "Listo. Compartilo."].map((s, i) => (
                <div
                  key={s}
                  className={`flex flex-col justify-end p-8 sm:p-12 ${
                    i > 0 ? "sm:border-l border-t sm:border-t-0 border-white/10" : ""
                  }`}
                >
                  <span className="text-white/40 text-sm font-mono">0{i + 1}</span>
                  <p className="mt-3 text-xl sm:text-2xl font-semibold tracking-tight">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HowItWorks;
