import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import pipolLogo from "@/assets/pipol-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Mapa", href: "#mapa" },
    { label: "Vibes", href: "#vibes" },
    { label: "Descubrir", href: "#descubrir" },
    { label: "Canchas", href: "#canchas" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-12">
        <a href="#" className="flex items-center gap-2" aria-label="Pipol">
          <img src={pipolLogo} alt="Pipol" className="h-6 w-auto invert" />
        </a>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium transition-colors ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#download"
            className={`btn-pill text-[13px] h-9 px-4 transition-all ${
              scrolled
                ? "bg-foreground text-background hover:bg-foreground/85"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            Descargar
          </a>
        </div>

        <button
          className={`md:hidden h-9 w-9 inline-flex items-center justify-center rounded-full ${
            scrolled ? "hover:bg-foreground/5 text-foreground" : "hover:bg-white/10 text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden nav-blur border-t border-foreground/5">
          <div className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground/90"
              >
                {l.label}
              </a>
            ))}
            <a href="#download" onClick={() => setOpen(false)} className="btn-pill-dark mt-3 self-start">
              Descargar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
