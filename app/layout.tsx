import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../src/components/Navbar";
import { Footer } from "../src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desa Genengsari | Website Resmi",
  description: "Website Resmi Pemerintah Desa Genengsari, Kecamatan Kemusu, Kabupaten Boyolali. Informasi seputar profil, demografi, potensi, dan layanan desa.",
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
