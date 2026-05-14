import { cn } from "@/lib/utils";
import { Menu, X, Heart } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Ministries", href: "/ministries" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(menuRef.current, 
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <img src="/images/rccg-living-seed-church-logo.webp" alt="RCCG Living Seed Winnipeg" className="w-40" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-[15px] font-medium transition-colors hover:text-orange-600",
                location.pathname === link.href ? "text-orange-600 font-semibold" : 
                scrolled ? "text-slate-600" : "text-slate-800"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/give"
            className="bg-orange-600 text-white px-5 py-2 rounded-full text-[15px] font-medium hover:bg-orange-700 transition-colors flex items-center gap-2"
          >
            <Heart className="w-4 h-4" /> Give
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 p-6 md:hidden flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-lg font-medium hover:text-orange-600",
                location.pathname === link.href ? "text-orange-600" : "text-slate-800"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/give"
            className="bg-orange-600 text-white px-5 py-3 rounded-lg text-center font-medium hover:bg-orange-700 transition-colors"
          >
            Give Online
          </Link>
        </div>
      )}
    </nav>
  );
}
