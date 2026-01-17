import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Ramzi Green | Sustainable Packaging Solutions in UAE',
  description: 'Premium bamboo and sugarcane packaging products. 100% biodegradable, compostable, and eco-friendly solutions for businesses in UAE and beyond.',
  keywords: 'eco-friendly packaging, sustainable packaging, bamboo plates, sugarcane containers, biodegradable tableware, UAE, Ajman',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-0 bg-linear-to-r from-green-600 to-green-400`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}