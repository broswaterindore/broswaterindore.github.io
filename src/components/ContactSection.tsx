import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/contentData';

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;

    const text =
      `*GENERAL INQUIRY — BROS WATER INDORE*\n\n` +
      `👤 *Name:* ${inquiryName}\n` +
      `📞 *Phone:* ${inquiryPhone}\n` +
      `💬 *Message:* ${inquiryMessage || 'Interested in customized water bottles'}\n\n` +
      `Please contact me back!`;

    const encoded = encodeURI(text);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-slate-900">
            Contact BROS WATER
          </h2>
          <p className="text-base text-slate-600">
            Visit our bottling facility at Dewas Naka, Indore or connect with us instantly over phone or WhatsApp for quotes and samples.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Card (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-3xl p-8 text-white shadow-xl border border-slate-700/80 space-y-8">
            {/* Header info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold mb-3 border border-cyan-500/30">
                <Sparkles className="w-3.5 h-3.5" /> Direct Factory & Sales Office
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-['Outfit',sans-serif] text-white">
                BROS WATER
              </h3>
              <p className="text-sm font-semibold text-cyan-400 mt-1">
                Customized Water Bottles & Labels
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-5 text-sm">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-900/60 border border-cyan-700/60 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Plant & Office Location
                  </span>
                  <p className="text-white font-semibold mt-0.5 leading-snug">
                    Dewas Naka, Indore, Madhya Pradesh, India
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">PIN: 452010 (Near AB Road Bypass Hub)</p>
                </div>
              </div>

              {/* Mobile Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-900/60 border border-blue-700/60 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Phone & Call Support
                  </span>
                  <p className="mt-0.5">
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      id="contact-call-link"
                      className="text-lg font-bold text-cyan-300 hover:text-cyan-200 transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-700/60 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    WhatsApp Direct Line
                  </span>
                  <p className="mt-0.5">
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20BROS%20WATER,%20I%20am%20contacting%20you%20from%20your%20website`}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="contact-whatsapp-link"
                      className="text-lg font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                    >
                      <span>{BUSINESS_INFO.phone}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-900/60 border border-amber-700/60 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Business Hours
                  </span>
                  <p className="text-white font-semibold mt-0.5">
                    Monday – Sunday
                  </p>
                  <p className="text-xs font-bold text-amber-300 mt-0.5">
                    9:00 AM – 8:00 PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-900/60 border border-purple-700/60 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Email Inquiries
                  </span>
                  <p className="mt-0.5">
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      id="contact-email-link"
                      className="text-slate-200 hover:text-cyan-300 transition-colors font-medium"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Bar */}
            <div className="pt-4 border-t border-slate-700/80 flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex-1 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 font-bold text-xs text-white flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Plant Manager</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20BROS%20WATER,%20I%20would%20like%20to%20visit%20your%20Dewas%20Naka%20plant`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs text-white flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Message</span>
              </a>
            </div>
          </div>

          {/* Right Column: Quick Inquiry Form & Indore Location Map (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Inquiry Form */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <h3 className="text-lg font-bold font-['Outfit',sans-serif] text-slate-900">
                Send a Quick Message
              </h3>
              <p className="text-xs text-slate-600 mt-1 mb-5">
                Have a quick question or want to request physical bottle samples in Indore?
              </p>

              {submitted ? (
                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-600" />
                  <h4 className="text-sm font-bold">Inquiry Forwarded!</h4>
                  <p className="text-xs text-emerald-700">
                    Your inquiry details were forwarded to our WhatsApp desk. We will respond within 15 minutes!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-900 underline pt-2"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendQuery} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-form-name"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Rahul Jain"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-cyan-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-form-phone"
                      required
                      maxLength={10}
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      placeholder="e.g. 98260XXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-cyan-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Requirement
                    </label>
                    <textarea
                      rows={3}
                      id="contact-form-message"
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="e.g. Looking for 300 bottles for a wedding on 15th December in Indore..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-none focus:border-cyan-600"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-form-submit-btn"
                    className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <Send className="w-4 h-4 text-cyan-400" />
                    <span>Send Message to BROS WATER</span>
                  </button>
                </form>
              )}
            </div>

            {/* Location Map Visual Box */}
            <div className="bg-slate-100 rounded-3xl p-5 border border-slate-200 text-left overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  <span className="text-xs font-bold text-slate-800">
                    Location: Dewas Naka, Indore
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dewas+Naka+Indore+Madhya+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map visual simulation */}
              <div className="h-44 w-full rounded-2xl bg-gradient-to-tr from-cyan-900 to-slate-800 relative overflow-hidden flex items-center justify-center p-4 text-center text-white">
                <div className="space-y-2 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="font-extrabold text-sm">BROS WATER PLANT</div>
                  <div className="text-[11px] text-cyan-300">
                    Dewas Naka Industrial & Commercial Hub, Indore (M.P.)
                  </div>
                  <p className="text-[10px] text-slate-300">
                    Connecting AB Road, MR-10, Super Corridor & Bypass
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
