import React, { useState } from 'react';
import { salonInfo, getWhatsAppUrl } from '../data/salonData';
import { Menu, X, MapPin, Check, MessageSquare } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [offerModalOpen, setOfferModalOpen] = useState(false);

  const offerServices = [
    { name: "Hair Cut", price: "15 AED - 20 AED" },
    { name: "Beard Trim/Shave", price: "15 AED - 20 AED" },
    { name: "Hair Cut + Beard", price: "30 AED - 40 AED" },
    { name: "Hair straightening", price: "40 AED - 50 AED" },
    { name: "Kids Hair Cut", price: "15 AED - 20 AED" },
    { name: "Hair Color", price: "30 AED" },
    { name: "Beard Color", price: "25 AED - 30 AED" },
    { name: "Facial", price: "50 AED" },
    { name: "Face Scrub", price: "20 AED" },
    { name: "Head oil Massage", price: "10 AED - 15 AED" },
    { name: "Hair Treatment", price: "20 AED - 30 AED" },
    { name: "Threading", price: "10 AED" },
  ];

  return (
    <>
      {/* Top Moving Offer Bar */}
      <div
        onClick={() => setOfferModalOpen(true)}
        className="absolute top-0 left-0 right-0 z-[60] bg-[#c6a87c] text-white text-xs font-bold tracking-widest py-1.5 cursor-pointer hover:bg-[#b09367] transition-colors flex items-center overflow-hidden"
      >
        <marquee behavior="scroll" direction="left" scrollamount="6">
          🎉 GRAND OPENING OFFER! CLICK HERE TO VIEW OUR SPECIAL DISCOUNTED PRICING MENU 🎉
        </marquee>
      </div>

      <header className="absolute top-7 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-white/10 text-white">
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
    </header >

      {/* Offer Modal */ }
  {
    offerModalOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-[#faf8f5] rounded-3xl w-full max-w-4xl p-6 sm:p-10 relative shadow-2xl max-h-[95vh] overflow-y-auto">
          <button
            onClick={() => setOfferModalOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-800 transition-colors bg-white rounded-full shadow-sm"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-8 mt-2">
            <h2 className="font-serif text-3xl font-bold text-[#1c1c1c] uppercase tracking-wider">Grand Opening Offer</h2>
            <p className="text-[#c6a87c] text-sm font-semibold mt-2">Special Pricing for a Limited Time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
            {offerServices.map((service, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#c6a87c]" />
                  <span className="text-sm font-bold text-gray-800">{service.name}</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#c6a87c] uppercase">{service.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={getWhatsAppUrl("Grand Opening Offer")}
              target="_blank"
              rel="noreferrer"
              className="bg-[#c6a87c] hover:bg-[#b09367] text-white font-bold text-sm py-4 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center gap-3"
            >
              <MessageSquare className="w-5 h-5" />
              Book Any Treatment via WhatsApp
            </a>
          </div>
        </div>
      </div>
    )
  }
    </>
  );
}
