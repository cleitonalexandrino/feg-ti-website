import React from 'react';
import { ArrowRight, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export default function Hero({ onOpenQuote }) {
  const { settings, partners } = useAdmin();

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Olá! Gostaria de uma cotação com a F&G TI para minha empresa.');
    window.open(`https://wa.me/${settings.phone}?text=${text}`, '_blank');
  };

  const keyMetrics = [
    { number: `+${partners.length}`, label: 'Fabricantes Homologados', sub: 'Dell, HPE, Zebra, Lenovo, etc.' },
    { number: '100%', label: 'Atendimento Consultivo', sub: 'Engenharia de projeto antes da venda' },
    { number: 'B2B', label: 'Faturamento Corporativo', sub: 'Condições comerciais para PJ' },
    { number: 'Brasil', label: 'Cobertura Nacional', sub: 'Logística ágil e pronta entrega' }
  ];

  return (
    <section id="inicio" className="relative pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-32 overflow-hidden bg-[#020817]">
      
      {/* Official Brand Waves Backdrop Overlay */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <img 
          src="/images/brand_waves_bg.jpg" 
          alt="F&G TI Brand Waves" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-screen scale-105 filter blur-[0.5px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/70 via-[#020817]/85 to-[#020817]" />
      </div>

      {/* Subtle Radial Ambient Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 15%, rgba(0, 102, 255, 0.28) 0%, rgba(255, 106, 0, 0.12) 35%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Headline & Visual Impact */}
        <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Section Eyebrow Pill with Official Slogan */}
          <div className="eyebrow-pill text-slate-300 shadow-xl max-w-full truncate border-blue-500/30 bg-[#071738]/85">
            <span className="flex h-2 w-2 shrink-0 rounded-full bg-[#FF6A00] animate-ping" />
            <span className="text-white font-bold tracking-wider">TECNOLOGIA QUE SIMPLIFICA</span>
            <span className="text-blue-400 font-bold hidden xs:inline">·</span>
            <span className="text-[#FF8800] font-bold hidden xs:inline">PARCERIAS QUE FORTALECEM</span>
          </div>

          {/* Signature Headline Treatment: Crisp Pure White + Solar Flare Orange Split Gradient */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
            {settings.heroHeadline} <br />
            <span className="bg-gradient-to-r from-white via-[#FFAA44] to-[#FF6A00] bg-clip-text text-transparent">
              {settings.heroGradientText}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto font-normal leading-relaxed px-2">
            {settings.heroSubtitle}
          </p>

          {/* Dual CTA Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 px-2 sm:px-0">
            <button
              onClick={() => onOpenQuote()}
              className="btn-solar w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white shadow-xl shadow-[#FF6A00]/25 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>Solicitar Cotação Rápida</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#071738] hover:bg-[#091B42] border border-blue-500/25 hover:border-[#10B981]/50 shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981]" />
              <span>WhatsApp: {settings.displayPhone}</span>
            </button>

            <a
              href="#solucoes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              <span>Ver Soluções Corporativas</span>
              <span className="text-[#00D2FF]">↓</span>
            </a>
          </div>

          {/* Micro-Trust Checkmarks Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-10 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>Garantia Oficial Direta</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>Faturamento Corporativo PJ</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>Engenharia de Pré-Venda</span>
            </div>
          </div>

        </div>

        {/* 4-Column Authority KPI Metric Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {keyMetrics.map((item, idx) => (
            <div 
              key={idx} 
              className="enterprise-card relative p-4 sm:p-5 lg:p-6 rounded-2xl hover:-translate-y-1 group"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-[#FF6A00] transition-colors">
                {item.number}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1 leading-snug">
                {item.label}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 line-clamp-2">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
