import React from 'react';
import {
  Sparkles,
  Printer,
  CalendarCheck,
  HeartHandshake,
  Building2,
  UtensilsCrossed,
  PartyPopper,
  Megaphone,
  Boxes,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES } from '../data/contentData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
  onBookNow: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookNow,
}) => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6' };
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Printer':
        return <Printer {...props} />;
      case 'CalendarCheck':
        return <CalendarCheck {...props} />;
      case 'HeartHandshake':
        return <HeartHandshake {...props} />;
      case 'Building2':
        return <Building2 {...props} />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed {...props} />;
      case 'PartyPopper':
        return <PartyPopper {...props} />;
      case 'Megaphone':
        return <Megaphone {...props} />;
      case 'Boxes':
        return <Boxes {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            Our Main Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-slate-900">
            Specialized Custom Bottled Water Services
          </h2>
          <p className="text-base text-slate-600">
            From intimate birthday celebrations to royal destination weddings and multi-city corporate events, BROS WATER delivers high-definition branding and pure hydration.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100/80 text-cyan-700 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200/80">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg sm:text-xl font-bold font-['Outfit',sans-serif] text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-600 mt-1">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {service.description}
                </p>

                {/* Recommended sizes and ideal for */}
                <div className="mt-5 pt-4 border-t border-slate-200/70 space-y-2">
                  <div className="text-[11px] font-semibold text-slate-500">
                    <span className="text-slate-700">Popular For: </span>
                    {service.popularFor.join(' • ')}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500">
                    <span className="text-slate-700">Recommended Size: </span>
                    <span className="text-cyan-700 font-bold">{service.recommendedSize}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-2">
                <button
                  onClick={() => {
                    onSelectService(service.title);
                    onBookNow();
                  }}
                  id={`service-book-btn-${service.id}`}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-700 group-hover:text-white bg-white group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 border border-slate-300 group-hover:border-transparent transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <span>Book {service.title.split(' ')[0]} Order</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
