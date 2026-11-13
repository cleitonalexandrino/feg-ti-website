import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Desafios TI', href: '#desafios' },
    { name: 'Soluções & Produtos', href: '#solucoes' },
    { name: 'Fabricantes', href: '#fabricantes' },
    { name: 'Zebra & Aruba', href: '#destaques' },
    { name: 'Diferenciais', href: '#diferenciais' },
  ];

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent('Olá! Gostaria de falar com um consultor da F&G TI sobre soluções e cotações corporativas.');
    window.open(`https://wa.me/5511957109304?text=${text}`, '_blank');
  };

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#060A11]/95 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-2.5 sm:py-3' 
          : 'bg-gradient-to-b from-[#060A11]/90 to-transparent py-3 sm:py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            
            {/* Brand Logo + B2B Badge */}
            <a href="#inicio" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl overflow-hidden shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300 border border-white/10">
                <img 
                  src="/images/logo_fgti.png" 
                  alt="F&G TI" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    F&G TI
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
                    B2B
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 -mt-0.5 hidden xs:inline-block">
                  Soluções em Tecnologia
                </span>
              </div>
            </a>

            {/* Desktop Center Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white transition-colors py-1 relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-[#F97316] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Dual Conversion Actions: Ghost WhatsApp + Solid Orange CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Ghost / Outlined WhatsApp Button */}
              <button
                onClick={handleWhatsAppDirect}
                className="hidden md:inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold text-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/30 transition-all hover:scale-105 cursor-pointer"
                title="Atendimento via WhatsApp: +55 11 95710-9304"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="hidden lg:inline">(11) 95710-9304</span>
                <span className="lg:hidden">WhatsApp</span>
              </button>

              {/* Solid Orange Primary CTA Button */}
              <button
                onClick={() => onOpenQuote()}
                className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] shadow-lg shadow-[#F97316]/25 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <span>Solicitar Cotação</span>
                <ArrowRight className="w-3.5 h-3.5 hidden xs:inline" />
              </button>

              {/* Mobile / Tablet Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
                aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#F97316]" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="fixed top-14 sm:top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#080D16] border-b border-white/10 p-5 shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Menu de Navegação
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                F&G TI B2B
              </span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left text-sm sm:text-base font-medium text-slate-200 hover:text-[#F97316] hover:bg-white/[0.04] px-3 py-3 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-600 text-xs">→</span>
                </button>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppDirect();
                }}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl text-sm font-semibold text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/30 active:scale-98 transition-transform cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#10B981]" />
                <span>WhatsApp Oficial: (11) 95710-9304</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] active:scale-98 transition-transform shadow-lg shadow-[#F97316]/20 cursor-pointer"
              >
                <span>Solicitar Cotação Corporativa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
