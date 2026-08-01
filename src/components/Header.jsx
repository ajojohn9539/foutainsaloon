import React, { useState } from 'react';
import { salonInfo, getWhatsAppUrl } from '../data/salonData';
import { ChevronDown, Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left Logo - Fountain Gents Saloon Serif Style */}
        <a href="#" className="flex flex-col">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#1c1c1c] uppercase">
            FOUNTAIN GENTS SALOON
          </span>
          <span className="text-[9px] tracking-[0.25em] text-[#c6a87c] font-semibold uppercase">
            Style, Precision & Comfort
          </span>
        </a>

        {/* Center Navigation Links with Dropdown */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="text-[#c6a87c] font-semibold hover:text-[#b59567] transition-colors">
            Home
          </a>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-gray-700 hover:text-[#c6a87c] py-2 transition-colors">
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#c6a87c]' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl p-3 space-y-1 animate-in fade-in duration-200">
                <p className="text-[10px] uppercase tracking-wider text-[#c6a87c] font-bold px-3 py-1">Services for Him</p>
                {salonInfo.categories.filter(c => c.id !== 'all').map((cat) => (
                  <a
                    key={cat.id}
                    href={`#services`}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-3 py-2 text-xs text-gray-700 hover:bg-[#faf6f0] hover:text-[#c6a87c] rounded-xl font-medium transition-colors"
                  >
                    {cat.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#services" className="text-gray-700 hover:text-[#c6a87c] transition-colors uppercase tracking-wider text-xs font-bold bg-[#faf6f0] px-3 py-1 rounded-full text-[#c6a87c]">
            SPECIAL OFFER
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-[#c6a87c] transition-colors">
            Price List
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-[#c6a87c] transition-colors">
            Reviews
          </a>
          <a href="#contact" className="text-gray-700 hover:text-[#c6a87c] transition-colors">
            Contacts
          </a>
        </div>

        {/* Right Section - Phone & Book Button */}
        <div className="hidden md:flex items-center gap-6">
          <a 
            href={`tel:${salonInfo.whatsapp}`} 
            className="text-xs font-semibold text-gray-800 hover:text-[#c6a87c] transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#c6a87c]" />
            {salonInfo.phoneDisplay}
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className="border border-[#c6a87c] text-[#1c1c1c] hover:bg-[#c6a87c] hover:text-white font-medium text-xs py-2.5 px-6 rounded-full transition-all duration-300 shadow-sm"
          >
            Book a Visit
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-gray-700"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-5 space-y-4 shadow-xl">
          <a href="#" onClick={() => setMobileOpen(false)} className="block text-sm font-semibold text-[#c6a87c]">Home</a>
          <a href="#services" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-700">Services & Categories</a>
          <a href="#pricing" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-700">AED Price Menu</a>
          <a href="#testimonials" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-700">Reviews</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-sm text-gray-700">Contacts</a>
          <div className="pt-3 border-t border-gray-100">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-shakirovna-gold w-full py-3 rounded-full text-xs"
            >
              <MessageSquare className="w-4 h-4" />
              Book a Visit (+971 55 840 1265)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
