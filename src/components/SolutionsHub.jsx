import React, { useState } from 'react';
import { solutionsData } from '../data/solutionsData';
import { 
  Laptop, 
  Barcode, 
  Shield, 
  Zap, 
  Printer, 
  Video, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  ExternalLink,
  Layers3
} from 'lucide-react';

const iconMap = {
  Laptop: Laptop,
  Barcode: Barcode,
  Shield: Shield,
  Zap: Zap,
  Printer: Printer,
  Video: Video,
  Layers: Layers
};

export default function SolutionsHub({ onSelectCategory }) {
  const [activeTab, setActiveTab] = useState('devices');

  const currentSolution = solutionsData.find(s => s.id === activeTab) || solutionsData[0];
  const CurrentIcon = iconMap[currentSolution.icon] || Laptop;

  return (
    <section id="solucoes" className="py-16 sm:py-24 lg:py-28 relative bg-[#060A11]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Title with Eyebrow Pill */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="eyebrow-pill text-[#F97316] border-[#F97316]/30">
            <Layers3 className="w-3.5 h-3.5 text-[#F97316]" />
            <span>PORTFÓLIO ESTRATÉGICO COMPLETO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            7 Pilares Estratégicos para <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-blue-400 to-[#3B82F6] bg-clip-text text-transparent">
              impulsionar sua operação
            </span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#94A3B8] px-2">
            Da estação de trabalho do colaborador à nuvem e cibersegurança: conheça nossas linhas de produtos corporativos homologados.
          </p>
        </div>

        {/* Horizontal Category Pill Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-3 sm:pb-4 no-scrollbar justify-start xl:justify-center mb-6 sm:mb-10 px-1">
          {solutionsData.map((item) => {
            const Icon = iconMap[item.icon] || Laptop;
            const isSelected = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/25 border border-[#3B82F6] scale-[1.02]'
                    : 'bg-[#0D1422] text-slate-400 hover:text-white hover:bg-[#111927] border border-white/[0.08]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#3B82F6]'}`} />
                <span>{item.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Container */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#0D1422] border border-white/[0.08] p-5 sm:p-8 lg:p-12 shadow-2xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start lg:items-center">
            
            {/* Left Column: Pillar Detail & Homologated Equipment */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              <div className="flex items-start sm:items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-[#3B82F6] shrink-0">
                  <CurrentIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#F97316]">
                    PILAR HOMOLOGADO
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                    {currentSolution.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-medium leading-snug">
                {currentSolution.subtitle}
              </p>

              <p className="text-xs sm:text-sm lg:text-base text-[#94A3B8] leading-relaxed">
                {currentSolution.description}
              </p>

              {/* 2-Column Checkmark List of Homologated Equipment */}
              <div className="space-y-2.5 pt-1 sm:pt-2">
                <p className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Equipamentos e Capacidades Homologadas:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {currentSolution.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Orange Primary CTA Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => onSelectCategory(currentSolution.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] shadow-lg shadow-[#F97316]/25 transition-all active:scale-98 cursor-pointer"
                >
                  <span>Solicitar Cotação para {currentSolution.title.split('&')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Authorized Vendor Badges Card */}
            <div className="lg:col-span-5 rounded-2xl bg-[#080D16] border border-white/[0.08] p-5 sm:p-7 space-y-4 sm:space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white">
                    Fabricantes Oficiais neste Pilar
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/30 whitespace-nowrap">
                  {currentSolution.partners.length} Fabricantes
                </span>
              </div>

              <p className="text-[11px] sm:text-xs text-[#94A3B8]">
                A F&G TI possui canal direto e condições corporativas oficiais com os principais fabricantes deste segmento:
              </p>

              {/* Partners Chips Grid */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {currentSolution.partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D1422] border border-white/[0.08] text-[11px] sm:text-xs font-semibold text-slate-200 hover:text-white hover:border-[#3B82F6]/50 hover:bg-[#111927] transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0" />
                    <span>{partner}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] sm:text-xs text-[#94A3B8]">
                <span>Precisa de homologação técnica?</span>
                <a href="#contato" className="text-blue-400 font-semibold hover:underline flex items-center gap-1">
                  <span>Falar com especialista</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
