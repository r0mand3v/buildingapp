import AnimateOnScroll from "./AnimateOnScroll";

const categories = [
  { name: "Deportes", count: "128 canchas", dot: "bg-blue-500" },
  { name: "Música", count: "47 shows esta semana", dot: "bg-pink-500" },
  { name: "Fiestas", count: "Todas las noches", dot: "bg-[hsl(var(--accent))]" },
  { name: "Comida", count: "Pop-ups y bares", dot: "bg-orange-500" },
  { name: "Cultura", count: "Arte, charlas, cine", dot: "bg-purple-500" },
  { name: "Aire libre", count: "Picnics, runs, trekking", dot: "bg-emerald-500" },
];

const ForYouSection = () => {
  return (
    <section id="descubrir" className="bg-surface text-foreground section-y">
      <div className="container-page">
        <AnimateOnScroll>
          <span className="eyebrow text-muted-foreground">Descubrir</span>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <h2 className="display-lg mt-6 max-w-[16ch]">Lo que te gusta. Curado para vos.</h2>
        </AnimateOnScroll>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((c, i) => (
            <AnimateOnScroll key={c.name} delay={i * 60}>
              <div className="group bg-white rounded-3xl p-8 h-56 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
                <span className={`block h-2.5 w-2.5 rounded-full ${c.dot}`} />
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.count}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForYouSection;
