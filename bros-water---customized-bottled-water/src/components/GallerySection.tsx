import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/contentData';
import { GalleryItem } from '../types';
import { Sparkles, X, CheckCircle, ArrowRight, Eye } from 'lucide-react';

interface GallerySectionProps {
  onSelectDesignTemplate: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectDesignTemplate }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'wedding' | 'corporate' | 'hotel' | 'birthday' | 'bulk'>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'wedding', label: 'Weddings & Receptions' },
    { id: 'corporate', label: 'Corporate & Summits' },
    { id: 'hotel', label: 'Hotels & Cafes' },
    { id: 'birthday', label: 'Birthdays & Kids' },
    { id: 'bulk', label: 'Bulk & Marathons' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold uppercase tracking-wider">
            Our Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-slate-900">
            Real Showcase Gallery
          </h2>
          <p className="text-base text-slate-600">
            Browse our customized bottles delivered for royal weddings, corporate tech events, fine-dine cafes, and large celebrations across Indore & MP.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gallery-filter-${cat.id}`}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Graphic Bottle Presentation Box */}
              <div
                className="relative h-60 bg-gradient-to-b from-slate-100 to-cyan-50/50 p-6 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
                onClick={() => setActiveModalItem(item)}
              >
                {/* Visual Bottle Representation */}
                <div className="flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
                  {/* Cap */}
                  <div
                    className="w-10 h-5 rounded-t-sm shadow-sm"
                    style={{ backgroundColor: item.accentColor }}
                  />
                  {/* Neck */}
                  <div className="w-8 h-4 bg-white/90 border-x border-cyan-200" />
                  {/* Shoulder */}
                  <div className="w-20 h-6 bg-white/90 rounded-t-2xl border-t border-x border-cyan-200" />
                  {/* Body with label */}
                  <div className="w-22 h-24 bg-white border-x border-cyan-200 relative flex items-center justify-center p-1">
                    <div
                      className="w-full h-full rounded-xs flex flex-col items-center justify-center p-1 text-center text-white text-[8px] font-bold shadow-xs"
                      style={{ backgroundColor: item.accentColor }}
                    >
                      <span className="uppercase tracking-wider line-clamp-1">{item.title}</span>
                      <span className="text-[7px] text-white/80 font-normal mt-0.5">BROS WATER</span>
                    </div>
                  </div>
                  {/* Base */}
                  <div className="w-22 h-4 bg-cyan-100/90 rounded-b-md border-b border-x border-cyan-300" />
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-slate-800 border border-slate-200 shadow-xs">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* View Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-white text-slate-900 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" /> View Details
                  </span>
                </div>
              </div>

              {/* Card Meta & Action */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-cyan-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                    Client: {item.client}
                  </p>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-700">{item.size}</span>
                  <button
                    onClick={() => onSelectDesignTemplate(item)}
                    id={`gallery-order-similar-btn-${item.id}`}
                    className="text-xs font-bold text-slate-800 hover:text-cyan-600 flex items-center gap-1"
                  >
                    <span>Order Similar</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-left space-y-4">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800">
                {activeModalItem.categoryLabel}
              </span>

              <h3 className="text-2xl font-extrabold font-['Outfit',sans-serif] text-slate-900">
                {activeModalItem.title}
              </h3>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
                <div>
                  <span className="font-bold text-slate-900">Client / Occasion: </span>
                  {activeModalItem.client}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Bottle Size: </span>
                  {activeModalItem.size}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Cap Color: </span>
                  {activeModalItem.capColor}
                </div>
                <div>
                  <span className="font-bold text-slate-900">Label Specs: </span>
                  HD Waterproof Polypropylene Vinyl (Submerged ice test passed)
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeModalItem.description}
              </p>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => {
                    const item = activeModalItem;
                    setActiveModalItem(null);
                    onSelectDesignTemplate(item);
                  }}
                  id="modal-order-this-design-btn"
                  className="flex-1 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Customize This Design</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
