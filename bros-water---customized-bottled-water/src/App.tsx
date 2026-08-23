import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveBottleStudio } from './components/InteractiveBottleStudio';
import { HowItWorks } from './components/HowItWorks';
import { GallerySection } from './components/GallerySection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { FaqSection } from './components/FaqSection';
import { BookingFormSection } from './components/BookingFormSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { QuoteModal } from './components/QuoteModal';
import { QuoteSummary, GalleryItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeQuote, setActiveQuote] = useState<QuoteSummary | null>(null);
  const [transferredConfig, setTransferredConfig] = useState<{
    bottleSize?: string;
    capColor?: string;
    labelFinish?: string;
    quantity?: number;
    eventName?: string;
    eventSubtitle?: string;
    logoPreviewUrl?: string | null;
  } | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleStudioConfigSelect = (config: {
    bottleSize: string;
    capColor: string;
    labelFinish: string;
    quantity: number;
    eventName: string;
    eventSubtitle: string;
    logoPreviewUrl?: string | null;
  }) => {
    setTransferredConfig(config);
    scrollToSection('book-order');
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setTransferredConfig((prev) => ({
      ...prev,
      eventName: `${serviceTitle} Requirement`,
    }));
    scrollToSection('book-order');
  };

  const handleGallerySelect = (item: GalleryItem) => {
    setTransferredConfig((prev) => ({
      ...prev,
      bottleSize: item.size,
      capColor: item.capColor,
      eventName: item.title,
    }));
    scrollToSection('customizer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-500 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar
        onNavigate={scrollToSection}
        activeSection={activeSection}
        onOpenBooking={() => scrollToSection('book-order')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Page */}
        <Hero
          onBookNow={() => scrollToSection('book-order')}
          onExploreCustomizer={() => scrollToSection('customizer')}
          onExploreServices={() => scrollToSection('services')}
        />

        {/* 2. About Us */}
        <AboutSection />

        {/* 3. Our Services (9 Main Services) */}
        <ServicesSection
          onSelectService={handleServiceSelect}
          onBookNow={() => scrollToSection('book-order')}
        />

        {/* 4. Customized Bottles (Interactive 3D Studio) */}
        <InteractiveBottleStudio
          onSelectConfiguration={handleStudioConfigSelect}
        />

        {/* 5. How It Works (4 Steps) */}
        <HowItWorks onStartOrder={() => scrollToSection('book-order')} />

        {/* 6. Gallery Portfolio */}
        <GallerySection onSelectDesignTemplate={handleGallerySelect} />

        {/* 7. Why Choose BROS WATER */}
        <WhyChooseSection />

        {/* 8. Online Booking Form / Request a Quote */}
        <BookingFormSection
          initialConfig={transferredConfig}
          onQuoteGenerated={(quote) => setActiveQuote(quote)}
        />

        {/* 9. FAQ */}
        <FaqSection />

        {/* 10. Contact Us Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenBooking={() => scrollToSection('book-order')}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions onQuickBook={() => scrollToSection('book-order')} />

      {/* Interactive Quote Confirmation Modal */}
      {activeQuote && (
        <QuoteModal
          quote={activeQuote}
          onClose={() => setActiveQuote(null)}
        />
      )}
    </div>
  );
}
