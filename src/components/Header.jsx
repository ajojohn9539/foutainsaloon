import React, { useState } from 'react';
import { salonInfo, getWhatsAppUrl } from '../data/salonData';
import { Menu, X, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Left Teal Logo Badge */}
        <a href="#" className="flex items-center gap-3">
          <div className="bg-[#009698] text-white px-4 py-2 rounded-lg flex flex-col justify-center shadow-md">
            <span className="text-[11px] font-semibold tracking-wide text-yellow-300 font-sans leading-tight">
              صالون فونتين للرجال
            </span>
            <span className="font-extrabold text-sm sm:text-base tracking-tighter leading-none mt-0.5">
              FOUNTAIN GENTS SALON
            </span>
            <span className="text-[7px] text-teal-100 tracking-widest leading-none self-end mt-0.5">
              L.L.C
            </span>
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-widest uppercase">
          <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
            HOME
          </a>
          <a href="#services" className="text-white/90 hover:text-teal-400 transition-colors">
            SERVICES
          </a>
          <a href="#about" className="text-white/90 hover:text-teal-400 transition-colors">
            GALLERY
          </a>
          <a href="#about" className="text-white/90 hover:text-teal-400 transition-colors">
            ABOUT US
          </a>
          <a href="#contact" className="text-white/90 hover:text-teal-400 transition-colors">
            CONTACT
          </a>
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://maps.app.goo.gl/Sf11sAKcxFvbSMDo9?g_st=iwb"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-white/90 hover:text-teal-400 transition-colors text-xs font-bold uppercase tracking-widest"
          >
            <MapPin className="w-4 h-4" />
            LOCATION
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="bg-[#009698] hover:bg-[#008183] text-white font-bold text-xs py-2.5 px-6 rounded-md uppercase tracking-wider shadow-md transition-all duration-300"
          >
            BOOK APPOINTMENT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-lg px-6 py-6 space-y-4 border-b border-white/10">
          <a href="#" onClick={() => setMobileOpen(false)} className="block text-xs font-bold uppercase tracking-wider text-teal-400">HOME</a>
          <a href="#services" onClick={() => setMobileOpen(false)} className="block text-xs font-bold uppercase tracking-wider text-white">SERVICES</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="block text-xs font-bold uppercase tracking-wider text-white">GALLERY</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="block text-xs font-bold uppercase tracking-wider text-white">ABOUT US</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-xs font-bold uppercase tracking-wider text-white">CONTACT</a>
          <a 
            href="https://maps.app.goo.gl/Sf11sAKcxFvbSMDo9?g_st=iwb" 
            target="_blank" 
            rel="noreferrer" 
            onClick={() => setMobileOpen(false)} 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-teal-400"
          >
            <MapPin className="w-4 h-4" /> LOCATION
          </a>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="bg-[#009698] w-full py-3 text-center text-xs font-bold uppercase tracking-wider block rounded-md"
            >
              BOOK APPOINTMENT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
