import React, { useState } from 'react';
import { salonInfo, getWhatsAppBookingUrl } from '../data/salonData';
import { MapPin, Phone, Clock, Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Executive Haircut',
    date: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello! I would like to request an appointment booking:%0A*Name*: ${formData.name}%0A*Phone*: ${formData.phone}%0A*Service*: ${formData.service}%0A*Date*: ${formData.date}%0A*Notes*: ${formData.notes}`;
    window.open(`https://api.whatsapp.com/send/?phone=${salonInfo.whatsapp}&text=${msg}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Salon Details & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                VISIT OUR SALOON
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Location & <span className="text-gold-gradient">Working Hours</span>
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed">
                Conveniently located in Downtown Dubai. Drop in for a quick fresh haircut or schedule your weekend grooming session.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Salon Address</h4>
                  <p className="text-xs text-slate-400">{salonInfo.location}</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Opening Hours</h4>
                  <p className="text-xs text-slate-400">{salonInfo.timing}</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Contact & WhatsApp</h4>
                  <p className="text-xs text-slate-400">{salonInfo.phoneDisplay}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full py-4 text-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl space-y-6">
              <div className="border-b border-slate-800/80 pb-6 space-y-2">
                <h3 className="font-serif text-2xl font-bold text-white">Book Your Visit</h3>
                <p className="text-slate-400 text-xs">Fill in your details to quickly dispatch your booking request via WhatsApp.</p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Booking Dispatched!</h4>
                  <p className="text-xs text-slate-300">Your appointment details have been prepared in WhatsApp. Check your chat to confirm with our counter.</p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2 bg-slate-900 border border-slate-700 text-xs font-semibold text-white rounded-xl"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Phone / WhatsApp Number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Select Service</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 outline-none"
                      >
                        <option>Signature Executive Haircut (AED 35)</option>
                        <option>Royal Hot Towel Beard Trim (AED 25)</option>
                        <option>Gold Glowing Facial (AED 75)</option>
                        <option>Scalp & Shoulder Massage (AED 40)</option>
                        <option>The Ultimate Royal VIP Package (AED 120)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Preferred Date & Time</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Tomorrow at 5:00 PM"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Special Notes or Instructions</label>
                    <textarea 
                      rows="3"
                      placeholder="Any specific barber or style request..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:border-amber-500 outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-xs font-bold shadow-xl"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Booking Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
