import React from 'react';
import { salonInfo, getWhatsAppBookingUrl } from '../data/salonData';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-gold-gradient relative overflow-hidden text-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="text-center md:text-left space-y-2">
          <span className="inline-block px-3 py-1 bg-slate-950 text-amber-400 font-bold rounded-full text-xs uppercase tracking-wider mb-2">
            FAST & RELIABLE SERVICE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif leading-tight">
            Ready to Refresh Your Look?
          </h2>
          <p className="text-slate-900 font-medium text-base sm:text-lg max-w-xl">
            Book your appointment now with Dubai's master barbers. Walk-ins & scheduled visits welcome!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <a
            href={getWhatsAppBookingUrl("Appointment Request")}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-slate-950 text-white hover:text-amber-400 font-bold text-sm rounded-2xl shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5 text-amber-400" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${salonInfo.whatsapp}`}
            className="px-8 py-4 bg-slate-900/10 border-2 border-slate-950/40 text-slate-950 font-bold text-sm rounded-2xl hover:bg-slate-950 hover:text-white transition-all inline-flex items-center gap-2"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Call Us Directly</span>
          </a>
        </div>

      </div>
    </section>
  );
}
