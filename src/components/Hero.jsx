import React from 'react';
import { salonInfo, getWhatsAppUrl } from '../data/salonData';
import { MapPin, MessageSquare, ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#faf8f5] overflow-hidden">
      {/* Background Salon Image matching Fountain Gents Saloon */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat filter brightness-95"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=80')` }}
      />
      {/* Soft Vignette Overlay */}
      <div className="absolute inset-0 bg-black/25 z-0" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-16 w-full relative z-10">
        
        {/* Floating Glassmorphic Card - Fountain Gents Saloon */}
        <div className="shakirovna-glass-card p-8 sm:p-12 rounded-3xl max-w-xl space-y-6 shadow-2xl animate-in fade-in slide-in-from-left-4 duration-500">
          <p className="text-[#b59567] text-xs sm:text-sm font-semibold tracking-wide uppercase">
            {salonInfo.heroTagline}
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1c1c1c] leading-tight tracking-tight">
            Fountain Gents Saloon <br />
            <span className="text-[#c6a87c]">in Dubai</span>
          </h1>

          <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
            {salonInfo.heroSubtitle}
          </p>

          <p className="text-xs sm:text-sm text-gray-800 flex items-center gap-1.5 font-semibold pt-1">
            <MapPin className="w-4 h-4 text-[#c6a87c] shrink-0" />
            {salonInfo.location}
          </p>

          {/* Dual Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-shakirovna-gold font-bold text-xs sm:text-sm py-3.5 px-7 rounded-full shadow-md inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Book Appointment
            </a>

            <a
              href="#services"
              className="btn-shakirovna-outline font-semibold text-xs sm:text-sm py-3.5 px-7 rounded-full shadow-sm inline-flex items-center gap-2"
            >
              Explore Services
              <ArrowRight className="w-4 h-4 text-[#c6a87c]" />
            </a>
          </div>

          <div className="pt-2 flex items-center gap-2 text-xs text-gray-600 font-medium">
            <div className="flex text-amber-500 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
              ))}
            </div>
            <span>5.0 Star Rating (800+ Dubai Reviews)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
