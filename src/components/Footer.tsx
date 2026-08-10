"use client";

import { MapPin, Mail, Globe, Phone } from "lucide-react";
import Link from "next/link";
import { desaData } from "../data/desaData";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

import { getAssetPath } from "../utils/asset";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={getAssetPath("/logo-desa.png")}
                alt="Logo Desa Genengsari"
                className="w-10 h-10 rounded-full object-cover shadow-lg shadow-emerald-500/20"
              />
              <div className="font-bold text-2xl tracking-tight text-white">
                Desa <span className="text-amber-500">Genengsari</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Membangun kemandirian desa melalui sektor pertanian yang tangguh dan pelestarian budaya lokal untuk kesejahteraan bersama.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${desaData.general.email}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all shadow-md shadow-black/20">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/pemdes_genengsari/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-md shadow-black/20">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/profil" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Profil Desa
                </Link>
              </li>
              <li>
                <Link href="/potensi" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Potensi & UMKM
                </Link>
              </li>
              <li>
                <Link href="/demografi" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Data Demografi
                </Link>
              </li>
              <li>
                <Link href="/fasilitas" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Fasilitas Umum
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{desaData.general.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{desaData.general.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{desaData.general.domain}</span>
              </li>
              <li className="flex items-start gap-3 pt-2 border-t border-slate-800">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Pengembang (Kontak KKN):</span>
                  <a 
                    href="https://wa.me/6281398163646?text=Halo,%20saya%20terkait%20pengembangan%20website%20Desa%20Genengsari." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-amber-400 font-medium hover:underline flex items-center gap-1"
                  >
                    0813-9816-3646 (WA)
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Lokasi</h4>
            <div className="w-full h-48 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15823.111956557876!2d110.74900745!3d-7.489721799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a111111111111%3A0x1111111111111111!2sGenengsari%2C%20Kemusu%2C%20Boyolali!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
              ></iframe>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 text-sm text-slate-500">
          <div className="flex flex-col gap-1.5 text-center md:text-left">
            <p>© {new Date().getFullYear()} Pemerintah Desa Genengsari. Hak Cipta Dilindungi.</p>
            <p className="text-xs text-slate-400 font-medium">
              Dibangun Oleh Tim II KKN Reguler Universitas Diponegoro Tahun 2026
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/kontak" className="hover:text-emerald-400 transition-colors">Kebijakan Privasi</Link>
            <Link href="/kontak" className="hover:text-emerald-400 transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
