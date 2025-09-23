import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyGym - Academia e Fitness",
  description: "MyGym é sua academia completa com equipamentos modernos, personal trainers qualificados e ambiente motivador. Transforme seu corpo e sua vida conosco!",
  keywords: "academia, fitness, musculação, personal trainer, exercícios, saúde, bem-estar, MyGym",
  authors: [{ name: "MyGym Team" }],
  creator: "MyGym",
  publisher: "MyGym",
  robots: "index, follow",
  openGraph: {
    title: "MyGym - Academia e Fitness",
    description: "Transforme seu corpo e sua vida na MyGym. Academia completa com equipamentos modernos e personal trainers qualificados.",
    type: "website",
    locale: "pt_BR",
    siteName: "MyGym",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyGym - Academia e Fitness",
    description: "Transforme seu corpo e sua vida na MyGym. Academia completa com equipamentos modernos e personal trainers qualificados.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
