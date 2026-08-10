"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  MapPin, 
  Waves, 
  Crown, 
  Home, 
  Sparkles, 
  FileText, 
  ChevronRight, 
  ChevronLeft,
  Calendar,
  UserCheck,
  Compass,
  Scroll,
  Feather
} from "lucide-react";
import { desaHistoryData } from "../data/desaHistoryData";
import { getAssetPath } from "../utils/asset";

export function SejarahInteractive() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeDusunId, setActiveDusunId] = useState<string>("genengsari");
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleTabChange = (newTab: number) => {
    setActiveTab(newTab);
    scrollToTop();
  };

  const tabs = [
    { id: 0, label: "Asal-Usul & Peta 1927", icon: BookOpen },
    { id: 1, label: "Silsilah Pemimpin", icon: Crown },
    { id: 2, label: "Era Kedung Ombo", icon: Waves },
    { id: 3, label: "Sejarah 5 Dusun", icon: Home },
    { id: 4, label: "Budaya & Situs", icon: Sparkles },
    { id: 5, label: "Penutup & Sumber", icon: FileText },
  ];

  const currentDusun = desaHistoryData.dusunList.find((d) => d.id === activeDusunId) || desaHistoryData.dusunList[0];

  return (
    <div ref={sectionRef} className="w-full scroll-mt-28">
      {/* Quick Stats / Highlights Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
        <div className="bg-emerald-50/80 border border-emerald-100 p-4 rounded-2xl flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-emerald-700 font-medium">Asal Wilayah</div>
            <div className="text-sm font-bold text-slate-800">Kemusu Wetan</div>
          </div>
        </div>
        <div className="bg-amber-50/80 border border-amber-100 p-4 rounded-2xl flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Scroll className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-amber-700 font-medium">Dokumen Historis</div>
            <div className="text-sm font-bold text-slate-800">Peta Kolonial 1927</div>
          </div>
        </div>
        <div className="bg-cyan-50/80 border border-cyan-100 p-4 rounded-2xl flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-cyan-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Waves className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-cyan-700 font-medium">Titik Balik Utama</div>
            <div className="text-sm font-bold text-slate-800">Kedung Ombo (1989)</div>
          </div>
        </div>
        <div className="bg-indigo-50/80 border border-indigo-100 p-4 rounded-2xl flex items-center gap-3 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <Home className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-indigo-700 font-medium">Struktur Wilayah</div>
            <div className="text-sm font-bold text-slate-800">5 Dusun Definitif</div>
          </div>
        </div>
      </div>

      {/* Chapter Tabs Navigation */}
      <div className="bg-slate-100/80 p-1.5 sm:p-2 rounded-2xl mb-8 overflow-x-auto no-scrollbar border border-slate-200/60 shadow-xs">
        <div className="flex gap-1.5 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-[1.02]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Chapter Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl shadow-slate-900/5"
        >
          {/* TAB 0: Asal Usul & Peta 1927 */}
          {activeTab === 0 && (
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
                  <BookOpen className="w-3.5 h-3.5" /> Bab 1: Asal-Usul & Landasan Geografis
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {desaHistoryData.asalUsul.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  Rekonstruksi sejarah kawasan Sungai Serang, Kemusu Wetan, dan pemaknaan nama Genengsari.
                </p>
              </div>

              {/* Etymology Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                {desaHistoryData.asalUsul.etymology.map((item, i) => (
                  <div 
                    key={i} 
                    className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950 to-slate-900 text-white border border-emerald-800/40 relative overflow-hidden shadow-md"
                  >
                    <div className="absolute right-3 bottom-3 opacity-10 text-emerald-400 font-serif text-6xl font-bold">
                      {item.word[0]}
                    </div>
                    <div className="text-amber-400 font-serif text-2xl font-bold mb-1">
                      "{item.word}"
                    </div>
                    <p className="text-emerald-100 text-sm leading-relaxed">
                      {item.meaning}
                    </p>
                  </div>
                ))}
              </div>

              {/* Four Initial Kebayanan */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 sm:p-6">
                <h4 className="font-bold text-amber-900 text-base mb-2 flex items-center gap-2">
                  <Scroll className="w-5 h-5 text-amber-600" />
                  Empat Kebayanan Awal (Peta Topografische Dienst 1927)
                </h4>
                <p className="text-amber-800/90 text-sm mb-4 leading-relaxed">
                  Berdasarkan peta tahun 1927 karya Topografische Dienst Weltevreden (Batavia), wilayah ini awalnya terbagi dalam 4 kebayanan bersejarah sebelum pembangunan waduk:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {desaHistoryData.asalUsul.kebayananAwal.map((k, i) => (
                    <div key={i} className="bg-white px-4 py-3 rounded-xl border border-amber-200 text-center font-bold text-slate-800 text-sm shadow-xs">
                      📍 Kebayanan {k}
                    </div>
                  ))}
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg text-justify">
                {desaHistoryData.asalUsul.paragraphs.map((p, idx) => (
                  <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-emerald-700 first-letter:mr-1">
                    {p}
                  </p>
                ))}
              </div>

              {/* Visual Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="rounded-2xl overflow-hidden shadow-md relative group h-48">
                  <img src={getAssetPath("/nyi-ageng-serang.jpg")} alt="Nyi Ageng Serang" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-amber-300 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    Nyi Ageng Serang
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md relative group h-48">
                  <img src={getAssetPath("/sejarah-3.jpg")} alt="Masjid Tertua di Kemusu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-amber-300 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    Masjid Tertua Kemusu
                  </span>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md relative group h-48">
                  <img src={getAssetPath("/sejarah-soedirman.jpg")} alt="Jendral Soedirman di Kemusu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold text-amber-300 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    Jendral Soedirman di Kemusu
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 1: Silsilah Pemimpin */}
          {activeTab === 1 && (
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-3">
                  <Crown className="w-3.5 h-3.5" /> Bab 2: Silsilah Kepemimpinan Desa
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Sejarah Kepemimpinan Desa Genengsari
                </h3>
                <p className="text-slate-500 text-sm">
                  Perjalanan para tokoh kepala desa yang memimpin Genengsari lintas generasi.
                </p>
              </div>

              {/* Leaders Timeline Grid */}
              <div className="relative border-l-2 border-emerald-200 ml-4 sm:ml-6 space-y-6 my-8 pl-6 sm:pl-8">
                {desaHistoryData.leaders.map((leader, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="relative bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="absolute -left-[37px] sm:-left-[45px] top-6 w-6 h-6 rounded-full bg-emerald-500 border-4 border-white shadow-sm flex items-center justify-center text-[10px] font-bold text-white">
                      {i + 1}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                        📅 {leader.period}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {leader.role}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 mb-1">
                      {leader.name}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {leader.context}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Era Kedung Ombo */}
          {activeTab === 2 && (
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-semibold mb-3">
                  <Waves className="w-3.5 h-3.5" /> Bab 3: Titik Balik Sejarah
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {desaHistoryData.kedungOmbo.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  Transformasi lanskap, sosial-kemasyarakatan, dan pergeseran wilayah akibat megaproyek 1980-an.
                </p>
              </div>

              {/* Kedung Ombo Featured Image Banner */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg h-64 sm:h-80 group">
                <img 
                  src={getAssetPath("/sejarah-2.jpg")} 
                  alt="Waduk Kedung Ombo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    Diresmikan 14 Januari 1989
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold mb-1">Pembangunan Waduk Kedung Ombo</h4>
                  <p className="text-cyan-100 text-xs sm:text-sm max-w-2xl">
                    Megaproyek pengelolaan air Jawa Tengah yang mengubah susunan permukiman dan persebaran penduduk Desa Genengsari.
                  </p>
                </div>
              </div>

              {/* Milestones Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {desaHistoryData.kedungOmbo.milestones.map((m, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200/70 p-4 rounded-2xl">
                    <span className="text-xs font-bold text-cyan-700 bg-cyan-100 px-2.5 py-1 rounded-md mb-2 inline-block">
                      {m.year}
                    </span>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">{m.label}</h5>
                    <p className="text-slate-500 text-xs">{m.detail}</p>
                  </div>
                ))}
              </div>

              {/* Paragraphs */}
              <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg text-justify">
                {desaHistoryData.kedungOmbo.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Sejarah 5 Dusun */}
          {activeTab === 3 && (
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-3">
                  <Home className="w-3.5 h-3.5" /> Bab 4: Eksplorasi 5 Dusun Genengsari
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Sejarah & Pembentukan Dusun
                </h3>
                <p className="text-slate-500 text-sm">
                  Pilih dusun di bawah ini untuk melihat latar belakang penamaan, batas historis, dan situs penting masing-masing dusun.
                </p>
              </div>

              {/* Dusun Selector Pills */}
              <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
                {desaHistoryData.dusunList.map((d) => {
                  const isSelected = activeDusunId === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setActiveDusunId(d.id)}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        isSelected
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-[1.02]"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {d.name}
                    </button>
                  );
                })}
              </div>

              {/* Active Dusun Content Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDusun.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-indigo-50/40 border border-indigo-100 rounded-3xl p-6 sm:p-8 space-y-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-indigo-100 pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full mb-2 inline-block">
                        {currentDusun.type}
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        {currentDusun.name}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-slate-500 block">Karakter Wilayah</span>
                      <span className="text-sm font-bold text-indigo-900 bg-white px-3 py-1.5 rounded-xl border border-indigo-200 inline-block mt-1 shadow-xs">
                        ✨ {currentDusun.badge}
                      </span>
                    </div>
                  </div>

                  {/* Etymology Breakdown */}
                  <div className="bg-white p-5 rounded-2xl border border-indigo-100 shadow-xs space-y-1">
                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                      Makna & Etimologi Nama
                    </div>
                    <div className="text-lg font-bold text-slate-900">
                      {currentDusun.etymology.breakdown}
                    </div>
                    <p className="text-slate-600 text-sm italic">
                      "{currentDusun.etymology.meaning}"
                    </p>
                  </div>

                  {/* Paragraphs */}
                  <div className="space-y-4 text-slate-700 leading-relaxed text-base text-justify">
                    {currentDusun.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {/* Key Figures or Places */}
                  {currentDusun.keyFiguresOrPlaces && currentDusun.keyFiguresOrPlaces.length > 0 && (
                    <div className="pt-2">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Tokoh & Situs Penting
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {currentDusun.keyFiguresOrPlaces.map((place, i) => (
                          <span key={i} className="bg-white px-3.5 py-1.5 rounded-xl text-xs font-bold text-indigo-900 border border-indigo-200 shadow-xs flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* TAB 4: Budaya & Situs */}
          {activeTab === 4 && (
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> Bab 5: Kebudayaan & Memori Kolektif
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  {desaHistoryData.budayaDanSitus.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  Warisan seni tradisional, ritus kebudayaan, dan landmark alam bersejarah di Desa Genengsari.
                </p>
              </div>

              {/* Reog Turangga Muda Highlight */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div className="bg-purple-50 border border-purple-100 p-6 rounded-3xl space-y-4">
                    <span className="px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-bold inline-block">
                      🎭 Kesenian Khas
                    </span>
                    <h4 className="text-2xl font-bold text-purple-950">
                      {desaHistoryData.budayaDanSitus.reog.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {desaHistoryData.budayaDanSitus.reog.description}
                    </p>
                    <div>
                      <div className="text-xs font-bold text-purple-900 uppercase tracking-wider mb-2">
                        Unsur Utama Pertunjukan:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {desaHistoryData.budayaDanSitus.reog.elements.map((el, i) => (
                          <span key={i} className="bg-white px-3 py-1.5 rounded-xl text-xs font-bold text-purple-900 border border-purple-200 shadow-xs">
                            ✨ {el}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl space-y-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold inline-block">
                      🌱 Tradisi Warga
                    </span>
                    <h4 className="text-xl font-bold text-emerald-950">
                      {desaHistoryData.budayaDanSitus.bersihDusun.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {desaHistoryData.budayaDanSitus.bersihDusun.description}
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden shadow-xl relative h-72 lg:h-full min-h-[300px] group">
                  <img 
                    src={getAssetPath("/kelestarian-budaya.jpg")} 
                    alt="Reog Turangga Muda Desa Genengsari" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 right-4 text-xs font-semibold text-amber-300 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl text-center border border-amber-500/30">
                    Pelestarian Kesenian Reog Turangga Muda Genengsari
                  </span>
                </div>
              </div>

              {/* 5 Situs Bersejarah */}
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  Lima Tempat Bersejarah & Landmark Alam
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {desaHistoryData.budayaDanSitus.situsList.map((s, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-200/70 p-5 rounded-2xl hover:border-purple-300 transition-colors">
                      <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-md mb-2 inline-block">
                        {s.category}
                      </span>
                      <h5 className="font-bold text-slate-900 text-base mb-1">{s.name}</h5>
                      <p className="text-slate-600 text-xs">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Penutup & Sumber */}
          {activeTab === 5 && (
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold mb-3">
                  <FileText className="w-3.5 h-3.5" /> Bab 6: Penutup & Referensi
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Penutup & Sumber Historiografi
                </h3>
                <p className="text-slate-500 text-sm">
                  Refleksi sejarah desa serta rujukan wawancara lisan, arsip peta kolonial 1927, dan media sezaman.
                </p>
              </div>

              {/* Reflection Box */}
              <div className="bg-gradient-to-br from-emerald-900 via-slate-900 to-emerald-950 text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-emerald-800/40 space-y-4">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <Feather className="w-4 h-4" /> Catatan Reflektif Sejarah Genengsari
                </div>
                <div className="space-y-3 text-emerald-100 text-sm sm:text-base leading-relaxed text-justify">
                  {desaHistoryData.penutup.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Sources Bibliography Section */}
              <div className="space-y-6 pt-4">
                <h4 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-emerald-600" />
                  Daftar Sumber Historiografi
                </h4>

                {/* Oral Interviews */}
                <div className="space-y-3">
                  <h5 className="font-bold text-slate-800 text-sm text-emerald-700">
                    🗣️ Sumber Wawancara Lisan (Penelitian 2026)
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {desaHistoryData.sources.wawancara.map((src, i) => (
                      <div key={i} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs space-y-1">
                        <div className="font-bold text-slate-900 text-sm">
                          {src.name} <span className="text-slate-400 font-normal">({src.date})</span>
                        </div>
                        <div className="text-slate-600">{src.topic}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Maps & Archives */}
                <div className="space-y-3">
                  <h5 className="font-bold text-slate-800 text-sm text-amber-700">
                    🗺️ Sumber Arsip dan Peta
                  </h5>
                  {desaHistoryData.sources.arsipPeta.map((map, i) => (
                    <div key={i} className="bg-amber-50/60 p-4 rounded-xl border border-amber-200/80 text-xs space-y-1">
                      <div className="font-bold text-amber-950 text-sm">
                        {map.institution} ({map.year})
                      </div>
                      <div className="text-amber-900 italic font-medium">{map.title}</div>
                      <div className="text-amber-800/80">{map.publisher} — {map.location}</div>
                    </div>
                  ))}
                </div>

                {/* Newspapers */}
                <div className="space-y-3">
                  <h5 className="font-bold text-slate-800 text-sm text-cyan-700">
                    📰 Sumber Surat Kabar Sezaman
                  </h5>
                  {desaHistoryData.sources.suratKabar.map((news, i) => (
                    <div key={i} className="bg-cyan-50/60 p-4 rounded-xl border border-cyan-200/80 text-xs space-y-1">
                      <div className="font-bold text-cyan-950 text-sm">
                        {news.publisher} ({news.year})
                      </div>
                      <div className="text-cyan-900">{news.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Pagination / Chapter Stepper Footer */}
      <div className="flex items-center justify-between mt-6 px-2">
        <button
          onClick={() => handleTabChange(Math.max(0, activeTab - 1))}
          disabled={activeTab === 0}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === 0
              ? "opacity-40 cursor-not-allowed text-slate-400"
              : "text-emerald-700 hover:bg-emerald-50 bg-white border border-emerald-200 shadow-xs cursor-pointer"
          }`}
        >
          <ChevronLeft className="w-4 h-4" /> Bab Sebelumnya
        </button>
        <span className="text-xs text-slate-400 font-medium">
          Bab {activeTab + 1} dari {tabs.length}
        </span>
        <button
          onClick={() => handleTabChange(Math.min(tabs.length - 1, activeTab + 1))}
          disabled={activeTab === tabs.length - 1}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === tabs.length - 1
              ? "opacity-40 cursor-not-allowed text-slate-400"
              : "text-emerald-700 hover:bg-emerald-50 bg-white border border-emerald-200 shadow-xs cursor-pointer"
          }`}
        >
          Bab Selanjutnya <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
