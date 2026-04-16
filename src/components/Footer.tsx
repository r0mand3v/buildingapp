const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-2xl font-bold text-gradient">
              Pipol
            </span>
            <p className="text-muted-foreground text-sm mt-1">
              Tu ciudad, como nunca la viviste.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              TikTok
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contacto
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © 2026 Pipol. Todos los derechos reservados. Hecho con 💛 en Buenos
            Aires.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
