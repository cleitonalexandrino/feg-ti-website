import React, { useState } from 'react';
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
    <div className="min-h-screen bg-[#060A17] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
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
    </div>
  );
}
