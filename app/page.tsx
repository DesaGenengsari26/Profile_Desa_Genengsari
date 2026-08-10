"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, Sprout, Store, Map, Users, LayoutDashboard, ChevronRight } from "lucide-react";
import Link from "next/link";
import { desaData } from "../src/data/desaData";
import { getAssetPath } from "../src/utils/asset";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1696819646359-5d77448b0d3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxpbmRvbmVzaWFuJTIwdmlsbGFnZXxlbnwxfHx8fDE3ODQ0NTk0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Desa Genengsari Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/60 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 backdrop-blur-sm border border-amber-500/30 text-sm font-medium uppercase tracking-wider mb-2">
              Website Resmi Pemerintah Desa
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Desa <span className="text-emerald-400">Genengsari</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto font-light">
              {desaData.general.vision}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link href="/profil" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 group">
                Jelajahi Profil
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/potensi" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2">
                Lihat Potensi Desa
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Stats Grid */}
      <section className="relative -mt-20 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-24">
        <div className="bg-white rounded-3xl shadow-2xl shadow-emerald-900/10 p-8 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { label: "Populasi", value: desaData.stats.population, icon: <Users className="w-6 h-6 text-emerald-500" /> },
              { label: "Luas Wilayah", value: desaData.stats.area, icon: <Map className="w-6 h-6 text-emerald-500" /> },
              { label: "Kepadatan", value: desaData.stats.density, icon: <LayoutDashboard className="w-6 h-6 text-emerald-500" /> },
              { label: "Administrasi", value: desaData.stats.divisions, icon: <Store className="w-6 h-6 text-emerald-500" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col items-center text-center ${i > 0 ? "pt-8 md:pt-0" : ""}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <h4 className="text-3xl font-bold text-slate-800 mb-1">{stat.value}</h4>
                <p className="text-slate-500 font-medium text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Preview Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-3">Struktur Organisasi</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Pemerintah Desa</h3>
            <p className="text-slate-600">Jajaran pimpinan yang berdedikasi untuk melayani dan memajukan Desa Genengsari.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {desaData.leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img src={getAssetPath(leader.image)} alt={leader.name} className={`w-full h-full object-cover ${leader.objectPosition || 'object-top'} group-hover:scale-105 transition-transform duration-700`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h4 className="text-xl font-bold mb-1">{leader.name}</h4>
                    <p className="text-emerald-400 font-medium">{leader.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Potentials Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Potensi Unggulan</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Kekayaan Alam & Ekonomi Lokal</h3>
            </div>
            <Link href="/potensi" className="text-emerald-600 font-semibold flex items-center gap-2 hover:text-emerald-700 transition-colors group">
              Lihat Semua Potensi
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {desaData.potentials.slice(0, 2).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative rounded-3xl overflow-hidden h-[400px] shadow-lg"
              >
                <div className="absolute inset-0">
                  <img src={getAssetPath(item.image)} alt={item.title} className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} transition-transform duration-700 group-hover:scale-105`} />
                </div>
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors duration-300" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="bg-white p-8 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <h4 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto overflow-hidden">
                      {item.description}
                    </p>
                    <Link href="/potensi" className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700">
                      Pelajari Selengkapnya <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
