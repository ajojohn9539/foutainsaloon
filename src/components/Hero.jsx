import React from 'react';
import { salonInfo, getWhatsAppUrl } from '../data/salonData';
import { Scissors, Sparkles, Armchair, Calendar, ArrowRight } from 'lucide-react';

export default function Hero() {
  const features = [
    {
      icon: Scissors,
      title: "EXPERT BARBERS",
      desc: "Skilled & experienced professionals"
    },
    {
      icon: Sparkles,
      title: "PREMIUM PRODUCTS",
      desc: "High-quality products for the best results"
    },
    {
      icon: Armchair,
      title: "RELAXING ENVIRONMENT",
      desc: "Modern, clean & comfortable space"
    },
    {
      icon: Calendar,
      title: "EASY BOOKING",
      desc: "Book your appointment with ease"
    }
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-black overflow-hidden font-sans">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat filter brightness-90"
        style={{ backgroundImage: `url('/images/bgmainimage.jpg')` }}
      />

      {/* Dark Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0" />

      {/* Spacer for Top Header */}
      <div className="h-20" />

      {/* Hero Central Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full relative z-10 my-auto">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight uppercase">
            LOOK GOOD. <br />
            <span className="text-[#00c9c3] text-teal-400">FEEL CONFIDENT.</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-200 font-medium max-w-lg leading-relaxed">
            Professional grooming services in a luxurious environment.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="bg-[#009698] hover:bg-[#008183] text-white font-bold text-xs sm:text-sm py-3.5 px-8 rounded-lg shadow-lg tracking-wider uppercase transition-all duration-300 transform hover:scale-105"
            >
              OUR SERVICES
            </a>

            <a
              href={getWhatsAppUrl("Booking from Hero")}
              target="_blank"
              rel="noreferrer"
              className="border-2 border-white/80 hover:border-white bg-black/20 hover:bg-white/10 text-white font-bold text-xs sm:text-sm py-3.5 px-8 rounded-lg shadow-md tracking-wider uppercase transition-all duration-300"
            >
              BOOK NOW
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Feature Strip (Dark Teal Bar) */}
      <div className="relative z-10 bg-[#064e4b]/95 backdrop-blur-md border-t border-teal-500/20 py-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a 
                key={index} 
                href={getWhatsAppUrl(item.title)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-white p-2 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-[#009698]/30 border border-[#00c9c3]/40 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#009698] transition-all">
                  <IconComponent className="w-6 h-6 text-[#00c9c3] group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white group-hover:text-[#00c9c3] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-teal-100/80 font-medium">
                    {item.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
