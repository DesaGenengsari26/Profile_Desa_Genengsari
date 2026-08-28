import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Web Profil Resmi Desa Genengsari - Kemusu, Boyolali",
    template: "%s | Desa Genengsari",
  },
  description: "Website Resmi Pemerintah Desa Genengsari, Kecamatan Kemusu, Kabupaten Boyolali. Pusat informasi publik seputar profil desa, sejarah, demografi, potensi ekonomi, dan fasilitas umum.",
  keywords: [
    "Desa Genengsari",
    "Genengsari Kemusu",
    "Genengsari Boyolali",
    "Profil Desa Genengsari",
    "Pemerintah Desa Genengsari",
    "Kedung Ombo Genengsari",
    "KKN Desa Genengsari",
  ],
  authors: [{ name: "Pemerintah Desa Genengsari" }],
  openGraph: {
    title: "Web Profil Resmi Desa Genengsari",
    description: "Website Resmi Pemerintah Desa Genengsari, Kecamatan Kemusu, Kabupaten Boyolali.",
    url: "https://desagenengsari26.github.io/Profile_Desa_Genengsari/",
    siteName: "Desa Genengsari",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Profil Resmi Desa Genengsari",
    description: "Website Resmi Pemerintah Desa Genengsari, Kecamatan Kemusu, Kabupaten Boyolali.",
  },
  verification: {
    google: "ujNVHg_5DX_iAv1OAGm1LRWkQPgBfRdpZ2ffVM645f0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-slate-50 min-h-screen flex flex-col selection:bg-emerald-500/30`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
