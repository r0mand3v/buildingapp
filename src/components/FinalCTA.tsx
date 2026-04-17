import AnimateOnScroll from "./AnimateOnScroll";

const FinalCTA = () => {
  return (
    <section id="download" className="bg-black text-white section-y">
      <div className="container-page text-center">
        <AnimateOnScroll>
          <span className="eyebrow text-white/45">Disponible ahora</span>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <h2 className="display-lg mt-6 mx-auto max-w-[14ch]">Descargá Pipol.</h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={160}>
          <p className="mt-6 mx-auto max-w-md text-lg text-white/60">Gratis para iOS y Android.</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={220}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#" className="btn-pill-light min-w-[200px]">
              <AppleIcon /> App Store
            </a>
            <a href="#" className="btn-pill-outline-light min-w-[200px]">
              <PlayIcon /> Google Play
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="mt-16 mx-auto inline-flex flex-col items-center gap-4">
            <div className="w-40 h-40 rounded-2xl bg-white p-4 grid place-items-center">
              <QRPlaceholder />
            </div>
            <p className="text-sm text-white/45">Escaneá desde tu celular</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
    <path d="M16.365 1.43c0 1.14-.43 2.21-1.27 3.05-.85.86-1.99 1.49-3.16 1.39-.13-1.13.4-2.31 1.18-3.13.85-.9 2.13-1.55 3.25-1.31zM20.5 17.25c-.55 1.27-.81 1.84-1.51 2.97-.97 1.57-2.34 3.52-4.04 3.54-1.51.02-1.9-.99-3.96-.98-2.06.01-2.49 1-4 .98-1.7-.02-2.99-1.78-3.96-3.34C.27 16.06.07 11.06 2.06 8.4c1.32-1.77 3.4-2.81 5.36-2.81 1.99 0 3.24 1.1 4.89 1.1 1.6 0 2.58-1.1 4.88-1.1 1.74 0 3.59.95 4.9 2.59-4.31 2.36-3.61 8.5-1.59 9.07z" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
    <path d="M3.6 1.7c-.3.3-.5.7-.5 1.2v18.2c0 .5.2.9.5 1.2l10.5-10.5L3.6 1.7zm12.4 8.3l3.4-2-3.4-1.9-2.6 2.6 2.6 1.3zm-2.6 2.6L4.6 22.7l11.4-6.5-2.6-3.6z" />
  </svg>
);

const QRPlaceholder = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-black" aria-hidden>
    {[...Array(64)].map((_, i) => {
      const x = (i % 8) * 12 + 2;
      const y = Math.floor(i / 8) * 12 + 2;
      const fill = (i * 7) % 3 === 0;
      return fill ? <rect key={i} x={x} y={y} width="10" height="10" fill="currentColor" /> : null;
    })}
    <rect x="2" y="2" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="4" />
    <rect x="72" y="2" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="4" />
    <rect x="2" y="72" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="4" />
  </svg>
);

export default FinalCTA;
