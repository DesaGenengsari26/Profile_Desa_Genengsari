"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getAssetPath } from "../utils/asset";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil", href: "/profil" },
    { name: "Demografi", href: "/demografi" },
    { name: "Potensi", href: "/potensi" },
    { name: "Fasilitas", href: "/fasilitas" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-emerald-900/40 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src={getAssetPath("/logo-desa.png")}
              alt="Logo Desa Genengsari"
              className="w-10 h-10 rounded-full object-cover shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform"
            />
            <div className={`font-bold text-xl tracking-tight transition-all ${isScrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
              Desa <span className="text-amber-500">Genengsari</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-all hover:text-amber-500 relative ${
                      isScrolled ? "text-slate-600" : "text-slate-100 drop-shadow-md"
                    } ${isActive ? 'text-emerald-500' : ''}`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 rounded-full" layoutId="underline" />
                    )}
                  </Link>
                );
              })}
            </div>
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Admin%20Desa%20Genengsari,%20saya%20ingin%20bertanya%20mengenai%20layanan%20administrasi."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-emerald-600/20 text-sm hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              Layanan Desa
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                      isActive 
                        ? "bg-emerald-50 text-emerald-600" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-emerald-600"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-4">
                <a 
                  href="https://wa.me/6281234567890?text=Halo%20Admin%20Desa%20Genengsari,%20saya%20ingin%20bertanya%20mengenai%20layanan%20administrasi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-medium transition-colors text-center shadow-md shadow-emerald-600/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Layanan Desa
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
