const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-14 px-5 sm:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="font-display text-2xl font-bold text-gradient inline-flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs" style={{ background: "linear-gradient(135deg, hsl(48 100% 50%), hsl(42 100% 45%))" }}>
                <span className="font-black" style={{ color: "hsl(225 25% 3%)" }}>P</span>
              </span>
              Pipol
            </span>
            <p className="text-muted-foreground text-sm mt-2">
              Tu ciudad, como nunca la viviste.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors duration-300">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">TikTok</a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">Contacto</a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">Prensa</a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 Pipol. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-xs">
            Hecho con 💛 en Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
