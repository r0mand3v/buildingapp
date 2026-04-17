import pipolIcon from "@/assets/pipol-icon.png";

const linkGroups = [
  {
    title: "Producto",
    links: ["Mapa en vivo", "Vibes", "Para vos", "Deportes"],
  },
  {
    title: "Empresa",
    links: ["Sobre Pipol", "Trabajá con nosotros", "Prensa", "Contacto"],
  },
  {
    title: "Soporte",
    links: ["Centro de ayuda", "Comunidad", "Términos", "Privacidad"],
  },
  {
    title: "Seguinos",
    links: ["Instagram", "TikTok", "Twitter", "YouTube"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 pt-20 pb-10 px-5 sm:px-8 bg-background">
      <div className="container-narrow">
        {/* Top: logo + tagline */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(48 100% 55%), hsl(42 100% 45%))" }}>
                <img src={pipolIcon} alt="" className="w-5 h-5 object-contain" />
              </span>
              <span className="font-semibold text-lg tracking-tight">Pipol</span>
            </div>
            <p className="text-foreground/55 text-[14px] max-w-xs leading-relaxed">
              El mapa vivo de tu ciudad. Eventos, partidos y experiencias en tiempo real.
            </p>
          </div>

          {/* Link grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {linkGroups.map((g) => (
              <div key={g.title}>
                <h4 className="text-[12px] font-semibold tracking-tight text-foreground mb-4">
                  {g.title}
                </h4>
                <ul className="space-y-3">
                  {g.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-[13px] text-foreground/55 hover:text-foreground transition-colors duration-200">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-foreground/40 text-[12px] tracking-tight">
            © 2026 Pipol. Todos los derechos reservados.
          </p>
          <p className="text-foreground/40 text-[12px] tracking-tight">
            Hecho en Buenos Aires.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
