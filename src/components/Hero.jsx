import React from 'react';
import { salonInfo, getWhatsAppBookingUrl } from '../data/salonData';
import { Sparkles, MapPin, Clock, MessageSquare, ArrowRight, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center py-20 overflow-hidden bg-slate-950">
      {/* Background Image with Dark Vignette Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105 filter brightness-75"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1920&q=80')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* ESTABLISHED BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{salonInfo.heroBadge}</span>
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
              Building the Future of <br />
              <span className="text-gold-gradient">Gents Grooming</span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-slate-300 text-base sm:text-xl max-w-2xl font-normal leading-relaxed">
              {salonInfo.heroSubtitle}
            </p>

            {/* LOCATION & TIMINGS TAGS */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 font-medium pt-1">
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-xl backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{salonInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-3.5 py-2 rounded-xl backdrop-blur-sm">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{salonInfo.timing}</span>
              </div>
            </div>

            {/* DUAL ACTION BUTTONS */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-sm font-bold py-4 px-8"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book Appointment Now</span>
              </a>

              <a
                href="#services"
                className="btn-outline text-sm font-bold py-4 px-8"
              >
                <span>View Menu & Prices</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* RATING BADGE */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-800/80">
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-400">
                <span className="font-bold text-white">4.9 / 5</span> Rating based on 850+ Google Reviews in Dubai
              </p>
            </div>
          </div>

          {/* Right Column: Floating Feature Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="glass-card p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group hover:border-amber-500/40 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all" />

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">EXCLUSIVE GENTS LOUNGE</span>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 rounded-full text-xs font-semibold">AED Specials</span>
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-white">Haircut + Beard + Hot Towel Spa</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Get our signature combo package including precision haircut, beard line-up, organic face scrub, and scalp reflexology.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 line-through">AED 90</span>
                  <div className="text-3xl font-extrabold text-amber-400 font-mono">AED 60</div>
                </div>
                <a
                  href={getWhatsAppBookingUrl("Special Combo Package (AED 60)")}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gold-gradient text-slate-950 font-bold text-xs hover:scale-105 transition-transform"
                >
                  Book Package
                </a>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Single-use sterilized accessories</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>No waiting line - Scheduled WhatsApp appointment</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM STATS BAR - RAAI INFRA STYLE */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80">
          {salonInfo.stats.map((stat, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/60 text-center hover:border-amber-500/30 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-gold-gradient font-serif mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
