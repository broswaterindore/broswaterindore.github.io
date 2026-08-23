import React from 'react';
import { ShieldCheck, Droplets, Zap, Palette, Layers, Recycle, CheckCircle2 } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/contentData';

export const WhyChooseSection: React.FC = () => {
  const getIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-cyan-600' };
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Droplets':
        return <Droplets {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Palette':
        return <Palette {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Recycle':
        return <Recycle {...props} />;
      default:
        return <ShieldCheck {...props} />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            Why BROS WATER
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-slate-900">
            Why Choose BROS WATER Indore?
          </h2>
          <p className="text-base text-slate-600">
            We combine pharmaceutical-grade drinking water purification with cutting-edge label printing technology right here at Dewas Naka, Indore.
          </p>
        </div>

        {/* 6 Key Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              id={`why-card-${idx}`}
              className="p-7 rounded-3xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-100/90 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold font-['Outfit',sans-serif] text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Quality Promise</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-cyan-400">
                500+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                Weddings & Events Powered
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-cyan-400">
                100%
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                Waterproof Synthetic Vinyl
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-cyan-400">
                24 – 48h
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                Rapid Indore Dispatch
              </div>
            </div>

            <div className="pt-4 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-cyan-400">
                7-Stage
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                RO + UV Purification
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
