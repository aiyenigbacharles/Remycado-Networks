import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/rcn-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Operations", href: "#operations" },
  { label: "Leadership", href: "#leadership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logo} alt="RCN Logo" className="h-14 w-14 md:h-20 md:w-20 object-contain" loading="eager" />
          <span className="text-on-navy font-heading font-bold text-sm md:text-base leading-tight">
            Remycado<br />Networks
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-on-navy/80 hover:text-on-navy text-sm font-medium transition-colors">
              {l.label}
            </button>
          ))}
          <a href="tel:+2348144719799" className="flex items-center gap-1.5 bg-accent-red text-accent-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-on-navy p-2 min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <button key={l.href} onClick={() => scrollTo(l.href)} className="text-on-navy/80 hover:text-on-navy text-left py-3 px-2 text-base font-medium min-h-[44px] transition-colors">
                  {l.label}
                </button>
              ))}
              <a href="tel:+2348144719799" className="flex items-center justify-center gap-2 bg-accent-red text-accent-foreground px-4 py-3 rounded-md text-base font-semibold mt-2 min-h-[44px]">
                <Phone className="h-5 w-5" /> Call Now
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
