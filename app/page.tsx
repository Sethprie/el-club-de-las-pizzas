'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuGrid from '@/components/MenuGrid';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <Hero />
      <MenuGrid />
      <Contact />
      <Location />
      <Footer />
    </main>
  );
}
