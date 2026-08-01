import React, { useState, useEffect } from 'react';
import { salonInfo, getWhatsAppBookingUrl } from '../data/salonData';
import { Crown, Phone, MessageSquare, Menu, X, ChevronRight } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-xl' : 'bg-slate-950/80 border-b border-slate-800/60 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gold-gradient p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Crown className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white block leading-none">
              CROWN & ROYAL
            </span>
            <span className="text-[10px] tracking-[0.2em] font-semibold text-amber-400/90 uppercase block mt-1">
              GENTS SALOON DUBAI
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">Home</a>
          <a href="#about" className="text-slate-300 hover:text-amber-400 transition-colors">Why Choose Us</a>
          <a href="#services" className="text-slate-300 hover:text-amber-400 transition-colors">Services & Pricing</a>
          <a href="#testimonials" className="text-slate-300 hover:text-amber-400 transition-colors">Reviews</a>
          <a href="#contact" className="text-slate-300 hover:text-amber-400 transition-colors">Location & Contact</a>
        </nav>

        {/* Right Call & WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href={`tel:${salonInfo.whatsapp}`}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors px-3 py-2 rounded-lg bg-slate-900 border border-slate-800"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{salonInfo.phoneDisplay}</span>
          </a>

          <a 
            href={getWhatsAppBookingUrl()} 
            target="_blank" 
            rel="noreferrer"
            className="btn-primary text-xs py-2.5 px-5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Book Visit</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-amber-500/20 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <a href="#" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-amber-400 font-semibold py-2">
            <span>Home</span> <ChevronRight className="w-4 h-4" />
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-slate-300 py-2">
            <span>Why Choose Us</span> <ChevronRight className="w-4 h-4" />
          </a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-slate-300 py-2">
            <span>Services & Pricing</span> <ChevronRight className="w-4 h-4" />
          </a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-slate-300 py-2">
            <span>Reviews</span> <ChevronRight className="w-4 h-4" />
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-between text-slate-300 py-2">
            <span>Contact & Map</span> <ChevronRight className="w-4 h-4" />
          </a>
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <a 
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full py-3 text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book Appointment via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
