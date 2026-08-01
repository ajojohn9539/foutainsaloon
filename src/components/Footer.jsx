import React from 'react';
import { salonInfo, getWhatsAppUrl } from '../data/salonData';
import { MapPin, Phone, Clock, Mail, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-gray-400 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Col 1 */}
          <div className="space-y-4">
            <a href="#" className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-widest text-white uppercase">
                FOUNTAIN GENTS SALOON
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#c6a87c] font-semibold uppercase mt-0.5">
                Style, Precision & Comfort
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
              <li><a href="#about" className="hover:text-[#c6a87c] transition-colors">The Fountain Experience</a></li>
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
              <li><a href="#services" className="hover:text-[#c6a87c] transition-colors">Fountain VIP Package (AED 120)</a></li>
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
                <a href={`tel:${salonInfo.phone.replace(/\\s+/g, '')}`} className="hover:text-[#c6a87c] transition-colors">{salonInfo.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c6a87c] shrink-0" />
                <a href={`mailto:${salonInfo.email}`} className="hover:text-[#c6a87c] transition-colors">{salonInfo.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#c6a87c] shrink-0" />
                <span>{salonInfo.timing}</span>
              </li>
            </ul>
            <div className="pt-3">
              <a 
                href="https://maps.app.goo.gl/mAP45cgXz4v9qoKZ8" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-1.5 text-[#c6a87c] hover:text-white transition-colors text-xs font-bold uppercase tracking-wider"
              >
                <Star className="w-4 h-4 fill-current" /> READ OUR GOOGLE REVIEWS
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Fountain Gents Saloon Dubai. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Designed by Ajo John</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
