import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, PhoneCall, Lock } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export default function Navbar({ onOpenQuote }) {
  const { settings, setIsAdminOpen } = useAdmin();
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
    { name: 'Zebra & Aruba', href: '#destaques' },
    { name: 'Diferenciais', href: '#diferenciais' },
  ];

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent('Olá! Gostaria de falar com um consultor da F&G TI sobre soluções e cotações corporativas.');
    window.open(`https://wa.me/${settings.phone}?text=${text}`, '_blank');
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
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#020817]/95 backdrop-blur-md border-b border-blue-500/20 shadow-2xl py-2 sm:py-2.5' 
          : 'bg-gradient-to-b from-[#020817]/90 to-transparent py-3 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            
            {/* Novo Logotipo Oficial F&G TI */}
            <a href="#inicio" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
              <img 
                src="/images/logo_fgti.png" 
                alt="F&G TI - Soluções em Tecnologia" 
                className="h-8 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30 hidden xs:inline-block">
                B2B
              </span>
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0066FF] to-[#FF6A00] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Dual Conversion Actions: Ghost WhatsApp + Solid Orange CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Ghost / Outlined WhatsApp Button */}
              <button
                onClick={handleWhatsAppDirect}
                className="hidden md:inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl text-xs font-semibold text-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/30 transition-all hover:scale-105 cursor-pointer"
                title={`Atendimento via WhatsApp: ${settings.displayPhone}`}
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="hidden lg:inline">{settings.displayPhone}</span>
                <span className="lg:hidden">WhatsApp</span>
              </button>

              {/* Solid Solar Orange Primary CTA Button */}
              <button
                onClick={() => onOpenQuote()}
                className="btn-solar inline-flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#FF6A00]/25 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <span>Solicitar Cotação</span>
                <ArrowRight className="w-3.5 h-3.5 hidden xs:inline" />
              </button>

              {/* Mobile / Tablet Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-blue-900/30 transition-colors focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
                aria-label={mobileMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF6A00]" /> : <Menu className="w-6 h-6" />}
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

          <div className="fixed top-14 sm:top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#040E26] border-b border-blue-500/20 p-5 shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Menu de Navegação
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAdminOpen(true);
                }}
                className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FF6A00]/20 text-[#FF6A00] border border-[#FF6A00]/30 flex items-center gap-1 cursor-pointer"
              >
                <Lock className="w-3 h-3" />
                <span>Painel Admin</span>
              </button>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left text-sm sm:text-base font-medium text-slate-200 hover:text-[#FF6A00] hover:bg-white/[0.04] px-3 py-3 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>{link.name}</span>
                  <span className="text-blue-400 text-xs">→</span>
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
                <span>WhatsApp: {settings.displayPhone}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="btn-solar w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl text-sm font-bold text-white active:scale-98 transition-transform shadow-lg shadow-[#FF6A00]/20 cursor-pointer"
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
