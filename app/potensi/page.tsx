"use client";

import { motion } from "framer-motion";
import { Store, MessageCircle, MapPin } from "lucide-react";
import { desaData } from "../../src/data/desaData";
import { getAssetPath } from "../../src/utils/asset";

export default function PotensiPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="relative py-24 text-white overflow-hidden bg-emerald-950">
        <div className="absolute inset-0 z-0">
          <img 
            src={getAssetPath("/header-potensi.jpg")} 
            alt="Acara Adat dan Potensi Desa Genengsari" 
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
            Potensi & UMKM
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-emerald-100 max-w-2xl mx-auto font-light drop-shadow"
          >
            Mengenal kekayaan alam, produk pertanian, peternakan, dan industri kreatif warga Desa Genengsari.
          </motion.p>
        </div>
      </section>

      {/* Potensi Desa Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Potensi Desa</h2>
          <p className="text-slate-600">Komoditas utama dan sumber daya unggulan Desa Genengsari.</p>
        </div>

        {/* Top Row: 2 Items (Pertanian Padi & Pertanian Jagung) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {desaData.potentials.slice(0, 2).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={getAssetPath(item.image)} 
                  alt={item.title} 
                  className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{item.title}</h3>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row: 3 Items (Peternakan Puyuh, Kelestarian Budaya, Keindahan Alam) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {desaData.potentials.slice(2).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 2) * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={getAssetPath(item.image)} 
                  alt={item.title} 
                  className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{item.title}</h3>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* UMKM Unggulan Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-4">
              <Store className="w-4 h-4 text-emerald-600" />
              Produk Kreatif & Usaha Lokal
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              UMKM Unggulan
            </h2>
            <p className="text-slate-600 text-lg">
              Daftar Usaha Mikro, Kecil, dan Menengah (UMKM) serta olahan produk kreatif khas warga Desa Genengsari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {desaData.umkm.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group flex flex-col h-full hover:border-emerald-200 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 flex items-center justify-center">
                  <img 
                    src={getAssetPath(item.image)} 
                    alt={item.name}  
                    className={`w-full h-full ${item.objectFit || 'object-cover'} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                    {item.category}
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <a
                        href={`https://wa.me/${item.phone || '6281398163646'}?text=Halo,%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(item.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-semibold hover:underline"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        WhatsApp: {item.displayPhone || "0813-9816-3646"}
                      </a>
                      <span className="font-medium text-slate-700">{item.owner}</span>
                    </div>

                    <a
                      href={item.mapsUrl || "https://maps.google.com/?q=Genengsari+Kemusu+Boyolali"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-600/20"
                    >
                      <MapPin className="w-4 h-4" />
                      Lihat Lokasi di Google Maps
                    </a>
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
