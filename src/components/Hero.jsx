import React from 'react';
import { salonInfo, getWhatsAppBookingUrl } from '../data/salonData';

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Slate-900 Overlay matching Raai Infra */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury Gents Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 bg-amber-500 text-slate-900 font-bold rounded-full mb-6 text-sm">
            ESTABLISHED {salonInfo.established}
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Building the Future of <span className="text-amber-500">Grooming</span>
          </h1>

          <p className="text-xl text-slate-200 mb-10 leading-relaxed">
            Crown & Royal Saloon provides end-to-end haircut solutions, beard sculpting, and high-performance spa services across Dubai.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#services" className="btn-construction text-center">
              View Our Services
            </a>
            <a href="#about" className="btn-construction-outline text-center">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
