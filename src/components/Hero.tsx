```tsx
import React from 'react';
import {
  Sparkles,
  MessageCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Droplet,
  Award,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/contentData';

interface HeroProps {
  onBookNow: () => void;
  onExploreCustomizer: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookNow,
  onExploreCustomizer,
  onExploreServices,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-cyan-50/70 via-white to-slate-50">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-cyan-200/40 via-blue-100/30 to-teal-100/30 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute -top-10 right-0 w-96 h-96 bg-cyan-300/20 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200/80 text-cyan-900 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Indore’s Premier Custom Bottled Water Plant • Dewas Naka
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-['Outfit',sans-serif] tracking-tight text-slate-950 leading-[1.12]">
                <span className="text-slate-900">BROS WATER — </span>
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Customized Water Bottles
                </span>{' '}
                for Every Occasion
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                “Make your event, business, or celebration more memorable with
                professionally customized water bottles. Choose your bottle
                requirements, share your design, and place your order with
                BROS WATER.”
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">

              <button
                onClick={onBookNow}
                id="hero-book-order-btn"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-600/30 hover:shadow-cyan-600/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-5 h-5 text-cyan-200" />
                <span>Book Your Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* FIXED WHATSAPP LINK */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20BROS%20WATER,%20I%20want%20to%20place%20an%20order%20for%20customized%20water%20bottles`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-base font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-300 hover:bg-emerald-200/90 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600/20" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="hero-call-now-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-base font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 text-cyan-600" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* TRUST BADGES */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    FSSAI Certified
                  </h4>
                  <p className="text-[11px] text-slate-500">7-Stage RO + UV</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Droplet className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Waterproof HD
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Ice-Bucket Proof
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    24-48h Dispatch
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Dewas Naka Plant
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">
                    Low 100 MOQ
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Free Design Proof
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-200/90 shadow-cyan-900/10">

              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold text-slate-600 ml-1">
                    Live Bottle Preview
                  </span>
                </div>

                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                  HD Waterproof Vinyl
                </span>
              </div>

              {/* BOTTLE */}
              <div className="my-6 relative py-4 flex flex-col items-center justify-center min-h-[300px] bg-gradient-to-b from-slate-50 to-cyan-50/50 rounded-2xl border border-dashed border-cyan-200">

                <div className="w-14 h-7 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-t-md shadow-md flex items-center justify-center border-t border-amber-300">
                  <div className="w-full h-1 bg-amber-700/40" />
                </div>

                <div className="w-10 h-6 bg-gradient-to-r from-cyan-100/90 via-white to-cyan-100/90 border-x border-cyan-300/40" />

                <div className="w-28 h-8 bg-gradient-to-b from-cyan-100/90 via-white to-cyan-50/80 rounded-t-[28px] border-t border-x border-cyan-300/40" />

                <div className="w-32 h-44 bg-gradient-to-r from-cyan-100/80 via-white/95 to-cyan-100/80 border-x border-cyan-300/40 relative flex items-center justify-center shadow-inner overflow-hidden">

                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-200/20 to-cyan-400/20 pointer-events-none" />

                  <div className="w-full py-3 px-2 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg border-y-2 border-amber-400/80 text-center relative">

                    <div className="absolute top-0.5 right-1 text-[8px] text-amber-300 font-mono">
                      250ml
                    </div>

                    <div className="text-[10px] text-amber-400 font-bold tracking-wider uppercase">
                      Royal Wedding
                    </div>

                    <div className="font-['Outfit',sans-serif] font-bold text-sm text-white tracking-wide truncate px-1">
                      AARAV & PRIYA
                    </div>

                    <div className="text-[9px] text-slate-300 mt-0.5">
                      24.11.2026 • Sayaji Indore
                    </div>

                    <div className="mt-1 flex items-center justify-center gap-1 text-[8px] text-cyan-300 font-semibold">
                      <Sparkles className="w-2.5 h-2.5" />
                      BROS WATER
                    </div>

                  </div>
                </div>

                <div className="w-32 h-6 bg-gradient-to-b from-cyan-100/80 to-cyan-200/80 rounded-b-xl border-b border-x border-cyan-300/60 shadow-md" />

                <div className="absolute -left-3 top-8 bg-white/95 backdrop-blur-xs p-2.5 rounded-xl shadow-lg border border-slate-100 text-left">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">
                    Cap Options
                  </p>
                  <p className="text-xs font-extrabold text-slate-900">
                    Gold • Black • Blue
                  </p>
                </div>

                <div className="absolute -right-3 bottom-12 bg-white/95 backdrop-blur-xs p-2.5 rounded-xl shadow-lg border border-slate-100 text-left">
                  <p className="text-[10px] font-bold text-slate-500 uppercase">
                    Local Delivery
                  </p>
                  <p className="text-xs font-extrabold text-emerald-600">
                    Free at Dewas Naka
                  </p>
                </div>

              </div>

              {/* ACTION */}
              <div className="space-y-3 pt-2">

                <button
                  onClick={onExploreCustomizer}
                  id="hero-try-studio-btn"
                  className="w-full py-3 rounded-xl font-bold text-sm text-cyan-800 bg-cyan-100/80 hover:bg-cyan-200/80 transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-600" />
                  <span>Open Interactive 3D Bottle Designer</span>
                </button>

                <div className="flex items-center justify-between text-xs text-slate-500 px-1">

                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    100% Leak Proof
                  </span>

                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Recyclable PET
                  </span>

                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Fast Proofs
                  </span>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
```
