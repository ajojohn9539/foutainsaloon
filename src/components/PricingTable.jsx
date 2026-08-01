import React from 'react';
import { salonInfo, getWhatsAppUrl } from '../data/salonData';
import { Check, MessageSquare } from 'lucide-react';

export default function PricingTable() {
  return (
    <section id="pricing" className="py-24 bg-[#faf8f5] border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[#c6a87c] text-xs font-bold uppercase tracking-widest block">
            FULL SALON MENU
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1c1c]">
            Complete AED <span className="text-[#c6a87c]">Price List</span>
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm">
            All prices are net in UAE Dirhams (AED) with zero hidden fees.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {salonInfo.priceList.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#c6a87c] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">{item.title}</span>
                </div>
                <span className="font-mono text-sm sm:text-base font-extrabold text-[#c6a87c] shrink-0 ml-4">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <a
              href={getWhatsAppUrl("Full Price List Booking")}
              target="_blank"
              rel="noreferrer"
              className="btn-shakirovna-gold py-4 px-10 rounded-full text-xs font-bold shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              Book Any Treatment via WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
