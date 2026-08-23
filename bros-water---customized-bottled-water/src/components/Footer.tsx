import React from 'react';
import { Droplets, Phone, MessageCircle, Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/contentData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 font-['Plus_Jakarta_Sans',sans-serif] border-t border-slate-800">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-slate-900 py-10 px-4 border-b border-cyan-800/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs uppercase font-bold text-cyan-300 tracking-wider">
              Ready To Elevate Your Event?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit',sans-serif] text-white mt-1">
              Customized Water Bottles for Your Brand & Special Moments
            </h3>
            <p className="text-sm text-cyan-100/80 mt-1 max-w-xl">
              Get in touch with BROS WATER at Dewas Naka, Indore. Fast turnarounds, 100% waterproof labels, and FSSAI purity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenBooking}
              id="footer-book-now-cta"
              className="px-6 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm shadow-lg transition-transform hover:scale-105"
            >
              Book Your Order
            </button>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20BROS%20WATER,%20I%20want%20to%20place%20an%20order`}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-whatsapp-cta"
              className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                <Droplets className="w-6 h-6" />
              </div>
              <span className="font-['Outfit',sans-serif] font-extrabold text-2xl tracking-tight text-white">
                BROS <span className="text-cyan-400">WATER</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Customized Water Bottles for Your Brand & Special Moments. Premium packaged drinking water with high-definition waterproof custom branding for weddings, conferences, restaurants, and celebrations.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Dewas Naka, Indore, Madhya Pradesh, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Mon – Sun: 9:00 AM – 8:00 PM</span>
              </p>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-['Outfit',sans-serif]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('customizer')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Customized Bottles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-choose-us')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Why Choose BROS WATER
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Key Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-['Outfit',sans-serif]">
              Main Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-cyan-300 transition-colors text-left"
                  >
                    • {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-['Outfit',sans-serif]">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-500 block">Call Us:</span>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="font-bold text-white hover:text-cyan-400 text-sm"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-slate-500 block">WhatsApp:</span>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-slate-500 block">Email:</span>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-slate-300 hover:text-cyan-400 text-xs break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong>BROS WATER</strong>. All rights reserved. Dewas Naka, Indore, Madhya Pradesh.
          </p>
          <div className="flex items-center gap-4">
            <span>Packaged Drinking Water • FSSAI Standards</span>
            <span>•</span>
            <span>100% Recyclable PET</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
