import React, { useState } from 'react';
import { salonInfo, getWhatsAppUrl } from '../data/salonData';
import { Clock, MessageSquare } from 'lucide-react';

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? salonInfo.services 
    : salonInfo.services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[#c6a87c] text-xs font-bold uppercase tracking-widest block">
            OUR GENTS SERVICES
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1c1c1c] tracking-tight">
            Services & Treatment <span className="text-[#c6a87c]">Menu</span>
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Select your desired treatment below and book directly via WhatsApp for instant appointment confirmation.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {salonInfo.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#c6a87c] text-white shadow-md font-bold scale-105'
                  : 'bg-[#faf6f0] text-gray-700 hover:bg-[#c6a87c]/20 hover:text-[#c6a87c]'
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
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image & Popular Badge */}
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {service.popular && (
                  <span className="absolute top-4 right-4 bg-[#c6a87c] text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                    POPULAR CHOICE
                  </span>
                )}

                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[11px] font-semibold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5 text-[#c6a87c]" />
                  <span>{service.time}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#1c1c1c] group-hover:text-[#c6a87c] transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-xl font-extrabold text-[#c6a87c] font-mono shrink-0">
                      {service.price}
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={getWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-full bg-[#faf6f0] border border-[#c6a87c]/30 hover:bg-[#c6a87c] text-gray-800 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-[#c6a87c] group-hover:text-white" />
                    <span>Book via WhatsApp</span>
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
