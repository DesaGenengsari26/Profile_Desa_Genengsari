"use client";

import { motion } from "framer-motion";
import { BookOpen, Target, Heart } from "lucide-react";
import { desaData } from "../../src/data/desaData";
import { SejarahInteractive } from "../../src/components/SejarahInteractive";
import { getAssetPath } from "../../src/utils/asset";

export default function ProfilPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="relative py-24 text-white overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <img 
            src={getAssetPath("/perangkat-desa.jpg")} 
            alt="Perangkat Desa Genengsari" 
            className="w-full h-full object-cover object-[center_15%]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/75 via-emerald-950/65 to-slate-900/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-md"
          >
            Profil Desa
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-emerald-100 max-w-2xl mx-auto font-light drop-shadow"
          >
            Mengenal lebih dekat sejarah, visi, misi, dan jajaran kepemerintahan Desa Genengsari.
          </motion.p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 flex items-center justify-center sm:justify-start gap-3">
            <BookOpen className="w-9 h-9 text-emerald-600" />
            Sejarah Desa Genengsari
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed">
            Perjalanan historis dari era Kemusu Wetan, empat kebayanan awal, peristiwa Waduk Kedung Ombo, hingga terbentuknya lima dusun definitif.
          </p>
        </motion.div>

        <SejarahInteractive />
      </section>

      {/* Vision Mission */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Visi</h3>
              <p className="text-lg text-slate-600 italic leading-relaxed">
                "{desaData.general.vision}"
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-xl shadow-emerald-900/5 border border-emerald-100"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Misi</h3>
              <ul className="space-y-4">
                {desaData.general.mission.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Org Chart */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Pemerintahan Desa</h2>
        <p className="text-slate-600 mb-16 max-w-2xl mx-auto">Struktur organisasi pemerintahan Desa Genengsari periode saat ini.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {desaData.leadership.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group"
            >
              <div className="aspect-square relative overflow-hidden">
                <img src={getAssetPath(leader.image)} alt={leader.name} className={`w-full h-full object-cover ${leader.objectPosition || 'object-top'} group-hover:scale-110 transition-transform duration-500`} />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900">{leader.name}</h4>
                <p className="text-emerald-600 font-medium">{leader.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
