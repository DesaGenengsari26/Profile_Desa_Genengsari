"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, HelpCircle } from "lucide-react";
import { desaData } from "../../src/data/desaData";

export default function KontakPage() {

  const faqs = [
    {
      q: "Bagaimana cara mengurus pembuatan KTP baru?",
      a: "Bawa Fotokopi KK, Surat Pengantar RT/RW, dan Pas Foto 3x4 (2 lembar) ke Balai Desa pada jam kerja."
    },
    {
      q: "Kapan jam operasional pelayanan Balai Desa?",
      a: "Pelayanan buka setiap hari Senin - Jumat, pukul 08:00 - 14:00 WIB."
    },
    {
      q: "Bagaimana prosedur permohonan Surat Keterangan Usaha (SKU)?",
      a: "Bawa Fotokopi KTP, KK, dan Surat Pengantar dari RT/RW setempat yang menyatakan jenis usaha Anda."
    },
    {
      q: "Apa saja syarat membuat Surat Pengantar Nikah (NA)?",
      a: "Persiapkan Fotokopi KTP, KK, Akta Kelahiran, Ijazah Terakhir, Pas Foto 3x4 (2 lembar), dan Surat Pengantar dari RT/RW."
    },
    {
      q: "Kapan jadwal rutin Posyandu Balita dan Lansia?",
      a: "Kegiatan Posyandu dilaksanakan setiap pertengahan bulan. Tanggal pastinya akan diumumkan melalui grup WhatsApp setiap RT/RW."
    },
    {
      q: "Bagaimana cara mengecek penerima Bantuan Sosial (Bansos)?",
      a: "Bapak/Ibu bisa mendatangi langsung Balai Desa membawa KTP/KK untuk dilakukan pengecekan data di sistem, atau menghubungi Admin Desa via WhatsApp."
    },
    {
      q: "Apakah layanan administrasi di Balai Desa dipungut biaya?",
      a: "Seluruh layanan administrasi kependudukan tingkat desa bersifat GRATIS (tidak dipungut biaya apapun)."
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="bg-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Kontak & Layanan
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-emerald-100 max-w-2xl mx-auto"
          >
            Pusat informasi dan bantuan layanan administrasi untuk masyarakat Desa Genengsari.
          </motion.p>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Contact Info & FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Informasi Kontak</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Alamat Balai Desa</h4>
                    <p className="text-slate-600 leading-relaxed">{desaData.general.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Telepon Layanan</h4>
                    <p className="text-slate-600">(0276) 32XXXX (Contoh)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Resmi</h4>
                    <p className="text-slate-600">{desaData.general.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-amber-500" />
                Pertanyaan Umum (FAQ)
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-lg text-slate-900 mb-3">{faq.q}</h4>
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
