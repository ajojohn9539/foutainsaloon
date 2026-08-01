import React from 'react';
import { Zap, ShieldCheck, DollarSign } from 'lucide-react';

export default function HighlightsSection() {
  return (
    <section id="about" className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Crown & Royal Saloon?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4">
            We combine years of grooming expertise with cutting-edge equipment to deliver excellence in every haircut and spa treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Highlight 1 */}
          <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition-all duration-300 group border border-slate-100">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition">
              <Zap className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Fast Execution</h3>
            <p className="text-slate-600">
              Optimized appointment workflows and master barbers ensure your services are completed on schedule with zero waiting.
            </p>
          </div>

          {/* Highlight 2 */}
          <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition-all duration-300 group border border-slate-100">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition">
              <ShieldCheck className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Safety & Hygiene First</h3>
            <p className="text-slate-600">
              We prioritize single-use towels, sterilized razors, and deep sanitization of all styling tools above all else.
            </p>
          </div>

          {/* Highlight 3 */}
          <div className="p-8 bg-slate-50 rounded-2xl hover:shadow-xl transition-all duration-300 group border border-slate-100">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 transition">
              <DollarSign className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Cost Effective</h3>
            <p className="text-slate-600">
              Luxury quality doesn't have to be expensive. We provide 5-star salon treatments at competitive market AED rates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
