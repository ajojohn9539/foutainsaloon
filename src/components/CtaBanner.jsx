import React from 'react';
import { getWhatsAppUrl } from '../data/salonData';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#c6a87c] to-[#b59567] text-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="text-center md:text-left space-y-2">
          <span className="inline-block px-3 py-1 bg-white/20 text-white font-bold rounded-full text-xs uppercase tracking-wider mb-2">
            SPECIAL GENTS SALON OFFER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif leading-tight">
            Ready for Your Luxury Makeover?
          </h2>
          <p className="text-white/90 font-medium text-sm sm:text-base max-w-xl">
            Book your visit now with Fountain Gents Saloon master barbers in Dubai.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-white text-[#1c1c1c] hover:bg-[#1c1c1c] hover:text-white font-bold text-xs rounded-full shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#c6a87c]" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href="tel:+971558401265"
            className="px-8 py-4 border-2 border-white text-white font-bold text-xs rounded-full hover:bg-white hover:text-[#1c1c1c] transition-all inline-flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call +971 55 840 1265</span>
          </a>
        </div>

      </div>
    </section>
  );
}
