import type { Metadata } from "next";
import { Bodoni_Moda, Figtree } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { FinalCtaFooter } from "@/components/final-cta-footer";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mista Osteria | Testo fermentisano 72 sata, pica iz prave vatre",
  description:
    "Mista Osteria je pizzeria u kojoj testo fermentira 72 sata, a sastojci stižu iz Italije. Pogledajte meni, poreklo namirnica i rezervišite sto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${bodoni.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <FinalCtaFooter />
      </body>
    </html>
  );
}
