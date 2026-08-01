import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HighlightsSection from './components/HighlightsSection';
import ServicesSection from './components/ServicesSection';
import CtaBanner from './components/CtaBanner';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HighlightsSection />
        <ServicesSection />
        <CtaBanner />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
