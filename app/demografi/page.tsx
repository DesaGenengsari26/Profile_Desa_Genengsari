"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Map, Navigation } from "lucide-react";
import { desaData } from "../../src/data/desaData";

export default function DemografiPage() {
  const totalOccupations = desaData.demographics.occupations.reduce((acc, curr) => acc + curr.percentage, 0);

  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Data Demografi
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-emerald-100 max-w-2xl mx-auto"
          >
            Statistik penduduk, struktur mata pencaharian, dan letak geografis wilayah Desa Genengsari.
          </motion.p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Gender Split */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Komposisi Penduduk</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-700">Laki-laki</span>
                  <span className="font-bold text-emerald-600">{desaData.demographics.gender.lakiLaki} Jiwa</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "51.1%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-emerald-500 h-4 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-700">Perempuan</span>
                  <span className="font-bold text-amber-500">{desaData.demographics.gender.perempuan} Jiwa</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "48.9%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="bg-amber-400 h-4 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Distances */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Navigation className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Aksesibilitas Wilayah</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="font-medium text-slate-700">Kecamatan Juwangi</span>
                <span className="font-bold text-emerald-600 bg-emerald-100 px-4 py-1.5 rounded-full">{desaData.distances.juwangi}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="font-medium text-slate-700">Pusat Kab. Boyolali</span>
                <span className="font-bold text-emerald-600 bg-emerald-100 px-4 py-1.5 rounded-full">{desaData.distances.boyolaliCenter}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="font-medium text-slate-700">Kota Surakarta (Solo)</span>
                <span className="font-bold text-emerald-600 bg-emerald-100 px-4 py-1.5 rounded-full">{desaData.distances.solo}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Occupations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Mata Pencaharian Utama</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {desaData.demographics.occupations.map((occ, i) => (
              <div key={i} className="group">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-700">{occ.name}</span>
                  <span className="font-bold text-emerald-600">{occ.percentage}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${occ.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="bg-emerald-500 h-3 rounded-full group-hover:bg-amber-400 transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
