import React from 'react';
import { salonInfo } from '../data/salonData';
import { Scissors, ShieldCheck, Sparkles, Crown, CheckCircle2 } from 'lucide-react';

export default function HighlightsSection() {
  const iconMap = {
    Scissors: Scissors,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
    Crown: Crown
  };

  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - RAAI INFRA STYLE */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            THE CROWN & ROYAL DIFFERENCE
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Why Gentlemen Choose <span className="text-gold-gradient">Crown & Royal</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We fuse traditional barber mastery with modern luxury techniques to deliver sharp cuts, pristine beard sculpting, and deeply refreshing spa treatments.
          </p>
        </div>

        {/* 4 HIGHLIGHT CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {salonInfo.highlights.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div 
                key={item.id} 
                className="glass-card p-8 rounded-2xl glass-card-hover group flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-gold-gradient group-hover:text-slate-950 transition-all duration-300 shadow-md">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 text-[11px] font-semibold text-amber-400/90 flex items-center gap-1.5 uppercase tracking-wider">
                  <span>Guaranteed Excellence</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
