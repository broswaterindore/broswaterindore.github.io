import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles, X, ChevronUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/contentData';

interface FloatingActionsProps {
  onQuickBook: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onQuickBook }) => {
  const [showNotification, setShowNotification] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Quick helper bubble */}
      {showNotification && (
        <div className="hidden sm:flex items-center gap-2.5 bg-slate-900 text-white py-2 px-3.5 rounded-2xl shadow-xl border border-slate-700 text-xs animate-in slide-in-from-bottom-3 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            Need bottles in Indore? <strong>WhatsApp us for quick 3D mockup!</strong>
          </span>
          <button
            onClick={() => setShowNotification(false)}
            className="text-slate-400 hover:text-white ml-1 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2.5">
        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          title="Scroll to Top"
          className="w-11 h-11 rounded-full bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 shadow-lg flex items-center justify-center transition-all hover:scale-105"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        {/* Quick Call */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          title={`Call ${BUSINESS_INFO.phone}`}
          id="floating-call-btn"
          className="w-12 h-12 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-xl shadow-cyan-600/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Direct WhatsApp Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20BROS%20WATER,%20I%20am%20interested%20in%20customized%20water%20bottles`}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Us"
          id="floating-whatsapp-btn"
          className="h-12 px-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 flex items-center gap-2 font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 group"
        >
          <MessageCircle className="w-5 h-5 fill-white/20" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
