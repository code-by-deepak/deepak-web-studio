import { useEffect, useState } from "react";
import { Zap, Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass border-b border-border" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground">
            <Zap className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <span>Deepak <span className="text-gradient">Web Studio</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_30px_oklch(0.68_0.21_250/0.5)] hover:shadow-[0_0_50px_oklch(0.68_0.21_250/0.8)] transition-shadow"
        >
          Hire Me →
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border mt-3">
          <ul className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block text-foreground/80">
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground"
            >
              Hire Me →
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
