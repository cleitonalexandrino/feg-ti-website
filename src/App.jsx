import React, { useState } from 'react';
import { AdminProvider } from './context/AdminContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Challenges from './components/Challenges';
import SolutionsHub from './components/SolutionsHub';
import Spotlights from './components/Spotlights';
import PartnersGrid from './components/PartnersGrid';
import WhyChooseUs from './components/WhyChooseUs';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import AdminModal from './components/AdminModal';

export default function App() {
  const [quoteCategory, setQuoteCategory] = useState('');
  const [quoteBrand, setQuoteBrand] = useState('');
  const [quoteChallenge, setQuoteChallenge] = useState('');

  const scrollToQuote = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = (category = '') => {
    setQuoteCategory(category);
    scrollToQuote();
  };

  const handleSelectPartner = (partnerName) => {
    setQuoteBrand(partnerName);
    scrollToQuote();
  };

  const handleSelectChallenge = (challengeTitle) => {
    setQuoteChallenge(challengeTitle);
    scrollToQuote();
  };

  return (
    <AdminProvider>
      <div className="min-h-screen bg-[#060A11] text-slate-100 flex flex-col font-sans selection:bg-[#F97316] selection:text-white">
        {/* Top sticky navigation */}
        <Navbar onOpenQuote={handleOpenQuote} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenQuote={handleOpenQuote} />
          
          <Challenges onSelectChallenge={handleSelectChallenge} />
          
          <SolutionsHub onSelectCategory={handleOpenQuote} />
          
          <Spotlights onOpenQuoteWithBrand={handleSelectPartner} />
          
          <PartnersGrid onSelectPartner={handleSelectPartner} />
          
          <WhyChooseUs onOpenQuote={handleOpenQuote} />
          
          <QuoteForm 
            preselectedCategory={quoteCategory} 
            preselectedBrand={quoteBrand}
            preselectedChallenge={quoteChallenge}
          />
        </main>

        {/* Corporate Footer */}
        <Footer />

        {/* Instant Floating WhatsApp Support */}
        <WhatsAppFloat />

        {/* Admin Management Dashboard Modal */}
        <AdminModal />
      </div>
    </AdminProvider>
  );
}
