import React from 'react';
import { salonInfo, getWhatsAppUrl } from '../data/salonData';
import { MapPin, Phone, Clock, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-400 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <a href="#" className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-widest text-white uppercase">
                SHAKIROVNA SALON
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#c6a87c] font-semibold uppercase mt-0.5">
                Style, Elegance & Self-Care
              </span>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed">
              Dubai's premier European gents salon & spa lounge for executive hair cuts, hot towel shaves, facial treatments, and reflexology massages.
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-[#c6a87c] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#c6a87c] transition-colors">The Shakirovna Experience</a></li>
              <li><a href="#services" className="hover:text-[#c6a87c] transition-colors">Services & Categories</a></li>
              <li><a href="#pricing" className="hover:text-[#c6a87c] transition-colors">Full AED Price Menu</a></li>
              <li><a href="#contact" className="hover:text-[#c6a87c] transition-colors">Location & Contacts</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Services Menu</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-[#c6a87c] transition-colors">Executive Scissor Cut (AED 35)</a></li>
              <li><a href="#services" className="hover:text-[#c6a87c] transition-colors">Hot Towel Royal Shave (AED 25)</a></li>
              <li><a href="#services" className="hover:text-[#c6a87c] transition-colors">Gold Collagen Spa Facial (AED 75)</a></li>
              <li><a href="#services" className="hover:text-[#c6a87c] transition-colors">Scalp & Shoulder Reflexology (AED 40)</a></li>
              <li><a href="#services" className="hover:text-[#c6a87c] transition-colors">Shakirovna VIP Package (AED 120)</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">Contact & Location</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c6a87c] shrink-0 mt-0.5" />
                <span>{salonInfo.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c6a87c] shrink-0" />
                <span>{salonInfo.phoneDisplay}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c6a87c] shrink-0" />
                <span>{salonInfo.timing}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Shakirovna Gents Salon Dubai. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Designed for Luxury Gents in Dubai</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
