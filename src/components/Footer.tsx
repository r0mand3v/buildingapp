import { Link } from "react-router-dom";
import pipolLogo from "@/assets/pipol-logo.png";

const cols = [
  { title: "Producto", links: [{ label: "Mapa", href: "#" }, { label: "Vibes", href: "#" }, { label: "Descubrir", href: "#" }, { label: "Canchas", href: "#" }] },
  { title: "Pipol", links: [{ label: "Sobre nosotros", href: "#" }, { label: "Carreras", href: "#" }, { label: "Prensa", href: "#" }, { label: "Contacto", href: "#" }] },
  { title: "Soporte", links: [{ label: "Ayuda", href: "#" }, { label: "Comunidad", href: "#" }, { label: "Estado", href: "#" }] },
  { title: "Legal", links: [{ label: "Privacidad", href: "/privacy-policy" }, { label: "Términos", href: "#" }, { label: "Cookies", href: "#" }] },
];

const Footer = () => {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="container-page py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <img src={pipolLogo} alt="Pipol" className="h-6 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground max-w-[14rem]">Hecho en Córdoba.</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-semibold text-foreground/80">{c.title}</h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("/") ? (
                      <Link
                        to={l.href}
                        className="inline-block text-sm px-3 py-1 rounded-full border border-foreground/20 text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pipol. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">Córdoba, Argentina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
