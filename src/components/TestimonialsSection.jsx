import React from 'react';
import { salonInfo } from '../data/salonData';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[#c6a87c] text-xs font-bold uppercase tracking-widest block">
            CLIENT REVIEWS
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1c1c1c]">
            What Gentlemen Say <span className="text-[#c6a87c]">About Us</span>
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm">
            Read real feedback from executives, tourists, and residents visiting Fountain Gents Saloon Dubai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salonInfo.testimonials.map((review) => (
            <div 
              key={review.id}
              className="bg-[#faf8f5] p-8 rounded-3xl border border-gray-100 relative flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#c6a87c]/20 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex text-[#c6a87c] gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c6a87c]" />
                  ))}
                </div>

                <p className="text-gray-700 text-xs sm:text-sm italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c6a87c] font-bold text-white flex items-center justify-center font-serif text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
