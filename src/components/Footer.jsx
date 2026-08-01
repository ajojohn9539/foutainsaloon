import React from 'react';
import { salonInfo, getWhatsAppBookingUrl } from '../data/salonData';
import { Crown, Phone, MapPin, Clock, MessageSquare, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient p-0.5 shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white block leading-none">
                  CROWN & ROYAL
                </span>
                <span className="text-[9px] tracking-[0.2em] font-semibold text-amber-400 uppercase block mt-1">
                  GENTS SALOON DUBAI
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed">
              Dubai's premier gentlemen's sanctuary for master hair styling, precision shaves, luxury facials, and invigorating massages.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services & AED Menu</a></li>
              <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Customer Reviews</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Location & Hours</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Popular Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Executive Haircut (AED 35)</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Royal Hot Towel Beard Trim (AED 25)</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Gold Glowing Facial (AED 75)</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Scalp & Shoulder Reflexology (AED 40)</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Royal VIP Package (AED 120)</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{salonInfo.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{salonInfo.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{salonInfo.timing}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {salonInfo.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for Gentlemen in Dubai</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
