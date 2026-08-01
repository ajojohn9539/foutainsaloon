import React, { useState } from 'react';
import { salonInfo, getWhatsAppBookingUrl } from '../data/salonData';
import { Clock, MessageSquare, Tag, Check } from 'lucide-react';

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? salonInfo.services 
    : salonInfo.services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-slate-900/60 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            TRANSPARENT AED PRICING
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Our Premium Services & <span className="text-gold-gradient">AED Rates</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Select your desired treatment below and book directly via WhatsApp for guaranteed instant service with no waiting time.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {salonInfo.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gold-gradient text-slate-950 shadow-lg shadow-amber-500/20 font-bold scale-105'
                  : 'bg-slate-950 text-slate-300 border border-slate-800 hover:border-amber-500/40 hover:text-amber-300'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="glass-card rounded-3xl overflow-hidden glass-card-hover flex flex-col justify-between group"
            >
              {/* Image & Popular Tag */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {service.popular && (
                  <span className="absolute top-4 right-4 bg-gold-gradient text-slate-950 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                    POPULAR CHOICE
                  </span>
                )}

                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[11px] font-semibold text-amber-300 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-amber-500/20">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{service.time}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-xl font-extrabold text-amber-400 font-mono shrink-0">
                      {service.price}
                    </div>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-800/80">
                  <a
                    href={getWhatsAppBookingUrl(service.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 text-slate-200 hover:text-amber-400 font-bold text-xs flex items-center justify-center gap-2 transition-all group-hover:bg-amber-500/10"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                    <span>Book Service via WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
