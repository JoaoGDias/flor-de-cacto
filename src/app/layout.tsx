import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'
import "./globals.css";
import { CartProvider } from '@/context/CartContext';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const outfit = Outfit({
  display: 'swap',
  variable: '--font-outfit',
  subsets: ['latin'],
})
 
const pjs = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pjs',
})

export const metadata: Metadata = {
  title: "Flor de Cacto",
  description: "Moda clássica, versátil e atemporal com aquele toque de modernidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${outfit.variable} ${pjs.variable} antialiased `}
      >
        <Header />
          <CartProvider>
            {children}
          </CartProvider>
          <Newsletter />      
        <Footer />
      </body>
    </html>
  );
}
