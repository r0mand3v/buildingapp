import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-display text-2xl font-bold text-gradient">
          Pipol
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Qué es", "Mapa", "Vibes", "Cómo funciona"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <a href="#descargar" className="btn-primary text-sm px-6 py-2.5">
          Descargar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
