import React, { useState } from 'react';
import { salonInfo, getWhatsAppUrl } from '../data/salonData';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Executive Scissor & Fade Haircut (AED 35)',
    date: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Shakirovna Salon! Appointment Request:%0A*Name*: ${formData.name}%0A*Phone*: ${formData.phone}%0A*Service*: ${formData.service}%0A*Date*: ${formData.date}%0A*Notes*: ${formData.notes}`;
    window.open(`https://api.whatsapp.com/send/?phone=${salonInfo.whatsapp}&text=${msg}`, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#faf8f5] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[#c6a87c] text-xs font-bold uppercase tracking-widest block">
                VISIT SHAKIROVNA SALON
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1c1c]">
                Location & <span className="text-[#c6a87c]">Contacts</span>
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                Located in Commercial Zone, Dubai. Visit us for an executive haircut or schedule your spa massage.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#faf6f0] text-[#c6a87c] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Salon Address</h4>
                  <p className="text-xs text-gray-600">{salonInfo.location}</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#faf6f0] text-[#c6a87c] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-xs text-gray-600">{salonInfo.timing}</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#faf6f0] text-[#c6a87c] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Direct Call & WhatsApp</h4>
                  <p className="text-xs text-gray-600">{salonInfo.phoneDisplay}</p>
                </div>
              </div>
            </div>

            <div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-shakirovna-gold w-full py-4 text-xs rounded-full shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Quick WhatsApp Booking (+971 55 840 1265)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl space-y-6">
              <div className="border-b border-gray-100 pb-6 space-y-1">
                <h3 className="font-serif text-2xl font-bold text-gray-900">Book Appointment</h3>
                <p className="text-gray-500 text-xs">Fill in your details to trigger an automated WhatsApp booking message.</p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-lg font-bold text-gray-900">Request Sent to WhatsApp!</h4>
                  <p className="text-xs text-gray-600">Your appointment message has been created in WhatsApp. Tap send to confirm with the counter.</p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2 bg-gray-900 text-white text-xs font-semibold rounded-full"
                  >
                    Submit Another Booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700">Your Full Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-gray-200 text-gray-900 text-xs focus:border-[#c6a87c] outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700">Phone / WhatsApp Number</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-gray-200 text-gray-900 text-xs focus:border-[#c6a87c] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700">Treatment Selection</label>
                      <select 
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-gray-200 text-gray-900 text-xs focus:border-[#c6a87c] outline-none"
                      >
                        <option>Executive Scissor & Fade Haircut (AED 35)</option>
                        <option>Shakirovna Signature Hot Towel Shave (AED 25)</option>
                        <option>Deep Cleansing Gold Collagen Facial (AED 75)</option>
                        <option>European Scalp & Shoulder Massage (AED 40)</option>
                        <option>Shakirovna Full VIP Grooming Package (AED 120)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-700">Preferred Date & Time</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Today at 6:30 PM"
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-gray-200 text-gray-900 text-xs focus:border-[#c6a87c] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700">Special Notes</label>
                    <textarea 
                      rows="3"
                      placeholder="Any specific requests or preferred barber..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-gray-200 text-gray-900 text-xs focus:border-[#c6a87c] outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-shakirovna-gold w-full py-4 text-xs rounded-full shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Booking to WhatsApp</span>
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
