import React, { useState } from 'react';
import { salonInfo, getWhatsAppBookingUrl } from '../data/salonData';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="glass-nav py-4 px-6 md:px-12 flex items-center justify-between">
      {/* Logo Section matching Raai Infra */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="w-11 h-11 bg-amber-500 rounded-xl flex items-center justify-center font-black text-slate-900 text-xl shadow-md group-hover:scale-105 transition-transform">
          R
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-slate-900 font-black text-base uppercase tracking-widest group-hover:text-amber-500 transition-colors">
            CROWN & ROYAL SALOON
          </span>
          <span className="text-amber-500 text-xs font-semibold tracking-wider">
            <span className="text-amber-600">R</span>edefining{" "}
            <span className="text-amber-600">A</span>waited{" "}
            <span className="text-amber-600">A</span>esthetic{" "}
            <span className="text-amber-600">I</span>mpression
          </span>
        </div>
      </a>

      {/* Center Nav Links */}
      <div className="hidden md:flex items-center space-x-8 font-semibold text-slate-700 text-sm">
        <a href="#" className="hover:text-amber-500 transition">Home</a>
        <a href="#about" className="hover:text-amber-500 transition">About</a>
        <a href="#services" className="hover:text-amber-500 transition">Services</a>
        <a href="#testimonials" className="hover:text-amber-500 transition">Reviews</a>
        <a href="#contact" className="hover:text-amber-500 transition">Contact</a>
      </div>

      {/* Right Get Quote / Book Visit CTA matching Raai Infra */}
      <div className="hidden md:flex items-center gap-4">
        <a 
          href={`tel:${salonInfo.whatsapp}`}
          className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-amber-500 transition px-3 py-2"
        >
          <Phone className="w-4 h-4 text-amber-500" />
          <span>{salonInfo.phoneDisplay}</span>
        </a>

        <a 
          href={getWhatsAppBookingUrl()} 
          target="_blank" 
          rel="noreferrer"
          className="btn-construction"
        >
          Get a Quote
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden p-2 text-slate-800"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl md:hidden">
          <a href="#" onClick={() => setMobileOpen(false)} className="block font-semibold text-amber-500 py-1">Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="block font-semibold text-slate-700 py-1">About</a>
          <a href="#services" onClick={() => setMobileOpen(false)} className="block font-semibold text-slate-700 py-1">Services</a>
          <a href="#testimonials" onClick={() => setMobileOpen(false)} className="block font-semibold text-slate-700 py-1">Reviews</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block font-semibold text-slate-700 py-1">Contact</a>
          <div className="pt-2 border-t border-slate-100">
            <a 
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-construction w-full text-center"
            >
              Get a Quote / Book Visit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
