import React, { useState } from 'react';
import { FAQS } from '../data/contentData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/contentData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQS
      : FAQS.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-slate-900">
            Got Questions? We Have Answers
          </h2>
          <p className="text-base text-slate-600">
            Everything you need to know about ordering customized water bottles with BROS WATER in Indore.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'orders', label: 'Orders & MOQ' },
            { id: 'design', label: 'Labels & Design' },
            { id: 'delivery', label: 'Indore Delivery' },
            { id: 'payment', label: 'Payment & Advance' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  id={`faq-toggle-${faq.id}`}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 font-['Outfit',sans-serif]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-cyan-100 text-cyan-800 rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in-50 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Question Helpline */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-cyan-50 border border-cyan-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-cyan-950">Have a custom question or specific requirements?</h4>
            <p className="text-xs text-slate-600 mt-0.5">Chat directly with our plant manager at Dewas Naka, Indore.</p>
          </div>
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hi%20BROS%20WATER,%20I%20have%20a%20question%20regarding%20customized%20water%20bottles`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp ({BUSINESS_INFO.phone})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
