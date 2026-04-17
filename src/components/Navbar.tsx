import { useState, useEffect } from "react";
import pipolLogo from "@/assets/pipol-icon.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Producto", href: "#que-es" },
    { label: "Mapa", href: "#mapa" },
    { label: "Vibes", href: "#vibes" },
    { label: "Cómo funciona", href: "#como-funciona" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 sm:px-8 h-12 sm:h-14">
        {/* Logo — Apple-style minimal */}
        <a href="#" className="flex items-center gap-2 group" aria-label="Pipol">
          <span className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(48 100% 55%), hsl(42 100% 45%))" }}>
            <img src={pipolLogo} alt="" className="w-4 h-4 object-contain" />
          </span>
          <span className="font-semibold text-[15px] tracking-tight">Pipol</span>
        </a>

        {/* Desktop nav — Apple thin links */}
        <div className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-foreground/80 hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#descargar" className="hidden sm:inline-flex text-[13px] font-medium text-primary hover:text-primary/80 transition-colors">
            Descargar →
          </a>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Menú"
          >
            <span className={`w-4 h-px bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
            <span className={`w-4 h-px bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-4 h-px bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-strong border-t border-border/30 px-6 py-4 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-foreground/90 hover:text-primary transition-colors text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#descargar"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-primary font-medium text-base"
          >
            Descargar Pipol →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
