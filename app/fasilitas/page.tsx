"use client";

import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Building2, BookHeart, CheckCircle2 } from "lucide-react";
import { desaData } from "../../src/data/desaData";
import { getAssetPath } from "../../src/utils/asset";

const categoryIcons: Record<string, React.ReactNode> = {
  "Pendidikan": <GraduationCap className="w-8 h-8 text-emerald-600" />,
  "Kesehatan": <Stethoscope className="w-8 h-8 text-emerald-600" />,
  "Fasilitas Publik": <Building2 className="w-8 h-8 text-emerald-600" />,
  "Keagamaan": <BookHeart className="w-8 h-8 text-emerald-600" />,
};

export default function FasilitasPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="relative py-24 text-white overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <img 
            src={getAssetPath("/header-fasilitas.png")} 
            alt="Balai Desa Genengsari" 
            className="w-full h-full object-cover object-[center_40%]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/70 to-slate-900/90 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-md"
          >
            Fasilitas Umum
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-emerald-100 max-w-2xl mx-auto font-light drop-shadow"
          >
            Daftar fasilitas layanan masyarakat yang tersedia untuk mendukung kegiatan warga Desa Genengsari.
          </motion.p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {desaData.facilities.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-emerald-200 transition-colors"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {categoryIcons[cat.category]}
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{cat.category}</h2>
              </div>
              
              <ul className="space-y-4">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 group/item hover:bg-emerald-50 hover:border-emerald-100 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 group-hover/item:text-emerald-600 transition-colors" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
