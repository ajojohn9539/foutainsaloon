import React from 'react';
import { salonInfo } from '../data/salonData';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            CUSTOMER REVIEWS
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            What Gentlemen Say <span className="text-gold-gradient">About Us</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Read authentic reviews from executives, residents, and visitors who rely on Crown & Royal Gents Saloon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salonInfo.testimonials.map((review) => (
            <div 
              key={review.id}
              className="glass-card p-8 rounded-3xl relative flex flex-col justify-between glass-card-hover"
            >
              <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-gradient font-bold text-slate-950 flex items-center justify-center font-serif text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-slate-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
