import React from 'react';
import { salonInfo, getWhatsAppUrl } from '../data/salonData';
import { Award, ShieldCheck, Sparkles, Heart, PhoneCall } from 'lucide-react';

export default function HighlightsSection() {
  const highlights = [
    {
      icon: Award,
      title: "Master European Craftsmanship",
      desc: "Our experienced barbers specialize in precision haircuts, sharp beard line-ups, and modern fades tailored to your face shape."
    },
    {
      icon: ShieldCheck,
      title: "Strict Hygiene & Safety",
      desc: "Single-use disposable towels, sterilized razors, and deep equipment sanitization after every client."
    },
    {
      icon: Sparkles,
      title: "Best Value in Dubai",
      desc: "Premium salon experience at unbeatable AED rates—from 15 AED waxing to 35 AED executive haircuts!"
    },
    {
      icon: Heart,
      title: "Relaxing Spa Ambiance",
      desc: "Enjoy hot towels, scalp reflexology, complimentary espresso, and a warm atmosphere."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#faf8f5] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#c6a87c] text-xs font-bold uppercase tracking-widest block">
              THE SHAKIROVNA EXPERIENCE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1c1c] tracking-tight leading-tight">
              Why Gentlemen Choose <br />
              <span className="text-[#c6a87c]">Shakirovna Gents Salon</span>
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              We combine traditional barber mastery with modern European spa techniques to deliver sharp styles, clean shaves, and deeply relaxing skin treatments.
            </p>

            {/* Features list */}
            <div className="space-y-4 pt-2">
              {highlights.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-[#c6a87c]/40 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#faf6f0] text-[#c6a87c] flex items-center justify-center shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Feature Box */}
          <div className="lg:col-span-6">
            <div className="glass-card p-8 sm:p-10 space-y-8 text-center rounded-3xl border-[#c6a87c]/30 shadow-xl relative overflow-hidden bg-white">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#c6a87c] to-[#b59567] flex items-center justify-center text-white shadow-lg">
                <PhoneCall className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-gray-900">Need Quick Advice or Booking?</h3>
                <p className="text-gray-600 text-xs max-w-md mx-auto">
                  Touch the button below to start instant WhatsApp chat with our salon counter or call us directly.
                </p>
              </div>

              <div className="bg-[#faf6f0] p-6 rounded-2xl border border-[#c6a87c]/20 space-y-2">
                <span className="text-xs text-[#c6a87c] font-bold uppercase tracking-wider block">Official WhatsApp Contact</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-mono block">
                  {saloonInfo.phoneDisplay}
                </span>
                <p className="text-[11px] text-gray-500">Available 9:00 AM – 11:30 PM Every Day</p>
              </div>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-shakirovna-gold w-full py-4 text-xs font-bold rounded-full justify-center shadow-lg"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
