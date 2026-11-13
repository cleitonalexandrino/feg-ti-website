import React, { useState, useMemo } from 'react';
import { partnerCategories, allPartners } from '../data/partnersData';
import { Search, Building2, ArrowRight, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function PartnersGrid({ onSelectPartner }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showInfographic, setShowInfographic] = useState(false);

  // Filter partners
  const filteredPartners = useMemo(() => {
    return allPartners.filter((partner) => {
      const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
      const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            partner.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            partner.badge.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <section id="fabricantes" className="py-16 sm:py-24 lg:py-28 relative bg-[#060A11] border-t border-white/[0.08]">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-60 sm:w-96 h-60 sm:h-96 bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Header with Eyebrow Pill */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="eyebrow-pill text-blue-400 border-blue-500/30">
            <Building2 className="w-3.5 h-3.5 text-blue-400" />
            <span>ECOSSISTEMA DE PARCEIROS HOMOLOGADOS</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Confira todos os <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-[#FB923C] to-[#F97316] bg-clip-text text-transparent">
              fabricantes parceiros oficiais
            </span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#94A3B8] px-2">
            Mais de 40 marcas globais líderes de mercado. Parceria oficial, faturamento corporativo direto e suporte técnico homologado.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-3 sm:space-y-4">
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            {/* Real-time search input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Buscar por marca (ex: Zebra, Dell, HPE)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-xl bg-[#080D16] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-all"
              />
            </div>

            {/* Toggle Original Infographic Modal */}
            <button
              onClick={() => setShowInfographic(!showInfographic)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-[#0D1422] border border-white/10 hover:text-white hover:border-slate-600 transition-all cursor-pointer"
            >
              <ImageIcon className="w-4 h-4 text-[#F97316] shrink-0" />
              <span>{showInfographic ? 'Ocultar Infográfico Oficial' : 'Ver Infográfico Oficial de Fabricantes'}</span>
            </button>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 no-scrollbar px-1">
            {partnerCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/30'
                      : 'bg-[#0D1422] text-slate-400 hover:text-white hover:bg-[#111927] border border-white/[0.08]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

        </div>

        {/* Infographic Preview (if toggled) */}
        {showInfographic && (
          <div className="p-3 sm:p-6 rounded-2xl bg-[#0D1422] border border-white/10 shadow-2xl animate-fadeIn space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-white/[0.08]">
              <span className="font-semibold text-white truncate mr-2">Infográfico Oficial F&G TI: Ecossistema de Parceiros</span>
              <button 
                onClick={() => setShowInfographic(false)}
                className="text-[#F97316] hover:text-orange-300 font-bold shrink-0 cursor-pointer"
              >
                Fechar ✕
              </button>
            </div>
            <div className="rounded-xl overflow-hidden bg-[#080D16] max-w-4xl mx-auto border border-white/[0.08]">
              <img 
                src="/images/parceiros_infografico.jpg" 
                alt="Infográfico Oficial Fabricantes F&G TI" 
                className="w-full h-auto object-contain max-h-[80vh]"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* 4-Column Responsive Vendor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredPartners.map((partner, idx) => (
            <div
              key={idx}
              className="enterprise-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#F97316] transition-colors truncate">
                    {partner.name}
                  </h4>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#111927] text-slate-300 border border-white/10 shrink-0">
                    {partner.badge}
                  </span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3">
                  {partner.desc}
                </p>
              </div>

              {/* Bottom Metadata: Domain Tag Left, Cotar Action Link Right */}
              <div className="mt-3.5 pt-2.5 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-medium text-[#64748B] uppercase">
                  {partner.category}
                </span>
                <button
                  onClick={() => onSelectPartner(partner.name)}
                  className="text-[11px] sm:text-xs font-semibold text-[#F97316] hover:text-orange-300 inline-flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Cotar {partner.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-10 sm:py-12 rounded-2xl bg-[#0D1422] border border-white/[0.08] space-y-3 px-4">
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              Nenhum fabricante encontrado para a busca "{searchTerm}".
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
              className="text-xs font-bold text-[#F97316] hover:underline cursor-pointer"
            >
              Limpar filtros e exibir todos os fabricantes
            </button>
          </div>
        )}

        {/* Bottom Fallback Banner for Unrepresented Brands */}
        <div className="rounded-2xl bg-[#0D1422] border border-white/[0.08] p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Não encontrou o equipamento ou marca que procura?
            </h4>
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              Nosso time comercial possui acesso a centenas de distribuidores e parceiros adicionais em todo o Brasil.
            </p>
          </div>
          <button
            onClick={() => onSelectPartner('Outras Marcas / Demanda Específica')}
            className="w-full sm:w-auto whitespace-nowrap px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-lg shadow-[#2563EB]/25 transition-all active:scale-98 cursor-pointer"
          >
            Consultar Demanda Específica
          </button>
        </div>

      </div>
    </section>
  );
}
