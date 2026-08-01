import React from 'react';
import { salonInfo } from '../data/salonData';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6 md:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Col 1 */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Crown & Royal Saloon</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Leading the future of gents grooming with high-quality hair styling equipment, precision beard sculpting, and expert spa services in Dubai.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-amber-500 transition">Our Story</a></li>
            <li><a href="#about" className="hover:text-amber-500 transition">Why Choose Us</a></li>
            <li><a href="#services" className="hover:text-amber-500 transition">Services & Rates</a></li>
            <li><a href="#testimonials" className="hover:text-amber-500 transition">Reviews</a></li>
            <li><a href="#contact" className="hover:text-amber-500 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact Info</h4>
          <div className="flex flex-col sm:flex-row gap-6">
            <p className="text-slate-400 text-sm leading-relaxed flex-grow">
              <span className="text-white font-bold block mb-1">Crown & Royal Gents Saloon Pvt Ltd</span>
              Downtown Commercial District,<br />
              Business Bay Plaza, 1st Floor,<br />
              Dubai, United Arab Emirates<br />
              <span className="block mt-2 font-semibold text-white">Phone: {salonInfo.phoneDisplay}</span>
              <span className="block font-semibold text-white">Email: {salonInfo.email}</span>
            </p>
            <a 
              href={`https://api.whatsapp.com/send/?phone=${salonInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="group relative w-32 h-32 rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700 hover:border-amber-500 transition-all flex-shrink-0 self-start md:self-center bg-slate-950 flex flex-col items-center justify-center p-3 text-center"
              title="Click to view location"
            >
              <MapPin className="w-8 h-8 text-amber-500 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">Dubai Branch</span>
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500 max-w-7xl mx-auto">
        &copy; {new Date().getFullYear()} Crown & Royal Saloon Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
