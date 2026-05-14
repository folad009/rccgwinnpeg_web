import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Pastors", href: "/meet-the-pastor" },
  { name: "Visit", href: "/visit" },
  { name: "Sermons", href: "/sermons" },
  { name: "Connect", href: "/connect" },
  { name: "Watch Live", href: "/watch" },
];

export function GenerationNavbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeHref = useMemo(() => location.pathname, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/rccg-living-seed-logo.png"
            alt="RCCG Living Seed Winnipeg — The Redeemed Christian Church of God"
            className="h-12 sm:h-14 w-auto max-h-[72px] object-contain object-left"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-[15px] font-medium transition-colors hover:text-church-orange",
                activeHref === link.href ? "text-church-orange font-semibold" : scrolled ? "text-slate-600" : "text-slate-900",
              )}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/give"
            className="bg-church-orange text-white px-5 py-2 rounded-full text-[15px] font-medium hover:bg-church-gold transition-colors flex items-center gap-2"
          >
            <Heart className="w-4 h-4" />
            Give
          </Link>
        </div>

        <button
          className="md:hidden text-slate-900"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-slate-100 p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-lg font-medium hover:text-church-orange transition-colors",
                  activeHref === link.href ? "text-church-orange" : "text-slate-900",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/give"
              onClick={() => setIsOpen(false)}
              className="bg-church-orange text-white px-5 py-3 rounded-lg text-center font-medium hover:bg-church-gold transition-colors flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4" /> Give
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

