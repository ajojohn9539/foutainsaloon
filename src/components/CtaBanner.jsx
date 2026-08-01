import React from 'react';
import { getWhatsAppBookingUrl } from '../data/salonData';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-amber-500 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
            Ready to Refresh Your Style?
          </h2>
          <p className="text-slate-800 text-lg font-medium">
            Contact us today for a free consultation and appointment booking.
          </p>
        </div>
        <a 
          href={getWhatsAppBookingUrl("General Inquiry")}
          target="_blank"
          rel="noreferrer"
          className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition shadow-2xl uppercase tracking-wider text-sm inline-block text-center"
        >
          Contact Us Now
        </a>
      </div>
    </section>
  );
}
