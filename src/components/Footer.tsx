import pipolLogo from "@/assets/pipol-logo.png";

const cols = [
  { title: "Producto", links: ["Mapa", "Vibes", "Descubrir", "Canchas"] },
  { title: "Pipol", links: ["Sobre nosotros", "Carreras", "Prensa", "Contacto"] },
  { title: "Soporte", links: ["Ayuda", "Comunidad", "Estado"] },
  { title: "Legal", links: ["Privacidad", "Términos", "Cookies"] },
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
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l}
                    </a>
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
