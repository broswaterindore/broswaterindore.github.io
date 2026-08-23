```tsx
import { useState } from 'react';
import { motion } from 'motion/react';

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
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.getElementById(sectionId);

    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navOffset;

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
      
      <Navbar
        onNavigate={scrollToSection}
        activeSection={activeSection}
        onOpenBooking={() => scrollToSection('book-order')}
      />

      <main className="flex-1">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Hero
            onBookNow={() => scrollToSection('book-order')}
            onExploreCustomizer={() => scrollToSection('customizer')}
            onExploreServices={() => scrollToSection('services')}
          />
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <AboutSection />
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <ServicesSection
            onSelectService={handleServiceSelect}
            onBookNow={() => scrollToSection('book-order')}
          />
        </motion.div>

        {/* Customized Bottles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
        >
          <InteractiveBottleStudio
            onSelectConfiguration={handleStudioConfigSelect}
          />
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <HowItWorks
            onStartOrder={() => scrollToSection('book-order')}
          />
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <GallerySection
            onSelectDesignTemplate={handleGallerySelect}
          />
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <WhyChooseSection />
        </motion.div>

        {/* Booking */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <BookingFormSection
            initialConfig={transferredConfig}
            onQuoteGenerated={(quote) => setActiveQuote(quote)}
          />
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <FaqSection />
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          <ContactSection />
        </motion.div>

      </main>

      <Footer
        onNavigate={scrollToSection}
        onOpenBooking={() => scrollToSection('book-order')}
      />

      <FloatingActions
        onQuickBook={() => scrollToSection('book-order')}
      />

      {activeQuote && (
        <QuoteModal
          quote={activeQuote}
          onClose={() => setActiveQuote(null)}
        />
      )}
    </div>
  );
}
```
