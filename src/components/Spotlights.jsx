import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall 
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export default function Spotlights({ onOpenQuoteWithBrand }) {
  const { settings } = useAdmin();

  const handleWhatsApp = (brand) => {
    const text = encodeURIComponent(`Olá! Gostaria de receber uma cotação especial para soluções ${brand} com a F&G TI.`);
    const phone = settings?.phone || '5511957109304';
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="destaques" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-[#040E26] border-y border-blue-500/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-12 sm:space-y-20 lg:space-y-24">
        
        {/* Spotlight 1: Zebra Technologies (Warm Enterprise Solar Orange Theme) */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#071738] border border-[#FF6A00]/40 p-5 sm:p-8 lg:p-12 shadow-2xl overflow-hidden">
          
          <div className="absolute top-0 right-1/4 w-60 sm:w-96 h-60 sm:h-96 bg-[#FF6A00]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              <div className="eyebrow-pill text-[#FF6A00] border-[#FF6A00]/30 bg-[#091B42]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>PARCERIA ESTRATÉGICA F&G TI | ZEBRA TECHNOLOGIES</span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Do estoque ao Checkout, <br />
                <span className="text-[#FF6A00]">Zebra transforma operações</span> com mais inteligência.
              </h3>

              <p className="text-xs sm:text-base lg:text-lg text-[#94A3B8] leading-relaxed">
                Soluções que conectam sua operação, aumentam a produtividade e garantem mais eficiência em toda a jornada: centros de distribuição, logística, indústrias e varejo.
              </p>

              {/* 4-Card Mini KPI Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-1">
                <div className="p-3 rounded-xl bg-[#091B42] border border-blue-500/20 text-center space-y-1">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00] mx-auto" />
                  <div className="text-[11px] sm:text-xs font-bold text-white leading-snug">Mais Produtividade</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400">Separação ágil</div>
                </div>
                <div className="p-3 rounded-xl bg-[#091B42] border border-blue-500/20 text-center space-y-1">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00] mx-auto" />
                  <div className="text-[11px] sm:text-xs font-bold text-white leading-snug">Mais Precisão</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400">Zero falhas</div>
                </div>
                <div className="p-3 rounded-xl bg-[#091B42] border border-blue-500/20 text-center space-y-1">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00] mx-auto" />
                  <div className="text-[11px] sm:text-xs font-bold text-white leading-snug">Processos Inteligentes</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400">Tempo real</div>
                </div>
                <div className="p-3 rounded-xl bg-[#091B42] border border-blue-500/20 text-center space-y-1">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6A00] mx-auto" />
                  <div className="text-[11px] sm:text-xs font-bold text-white leading-snug">Resultados Reais</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400">Em toda a rede</div>
                </div>
              </div>

              {/* Hardware SKUs List */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#091B42] border border-blue-500/20 space-y-1.5">
                <span className="text-[10px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Equipamentos Zebra Homologados pela F&G TI:
                </span>
                <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 leading-relaxed">
                  • Coletores de dados móveis Android robustos (TC21, TC26, MC3300) <br />
                  • Impressoras térmicas industriais e de mesa (ZD220, ZD230, ZT231, ZT411) <br />
                  • Leitores de código de barras 1D e 2D de alta velocidade (DS2208, DS9308)
                </p>
              </div>

              {/* Dual CTAs */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                <button
                  onClick={() => onOpenQuoteWithBrand('Zebra Technologies - Automação & Coletores')}
                  className="btn-solar w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#FF6A00]/25 transition-all active:scale-98 cursor-pointer"
                >
                  <span>Solicitar Cotação Zebra</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleWhatsApp('Zebra')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/30 transition-all active:scale-98 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#10B981]" />
                  <span>WhatsApp: Condições Zebra</span>
                </button>
              </div>

            </div>

            {/* Right: Promotional Campaign Artwork */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#091B42]">
                <img 
                  src="/images/zebra_destaque.jpg" 
                  alt="Zebra Technologies e F&G TI - Do estoque ao checkout"
                  className="w-full h-auto max-h-[380px] sm:max-h-[460px] object-cover sm:object-contain group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 sm:mt-3 text-center">
                <span className="text-[10px] sm:text-[11px] text-[#94A3B8] font-medium">
                  Campanha Oficial: Renove sua operação com a F&G TI & Zebra
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Spotlight 2: HPE Aruba Networking (Cobalt & Cyan Theme) */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#071738] border border-blue-500/40 p-5 sm:p-8 lg:p-12 shadow-2xl overflow-hidden">
          
          <div className="absolute top-0 left-1/4 w-60 sm:w-96 h-60 sm:h-96 bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center relative z-10">
            
            {/* Left/Top on mobile: Artwork */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative group">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#091B42]">
                <img 
                  src="/images/hpe_aruba_destaque.jpg" 
                  alt="HPE Aruba Networking e F&G TI"
                  className="w-full h-auto max-h-[380px] sm:max-h-[460px] object-cover sm:object-contain group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 sm:mt-3 text-center">
                <span className="text-[10px] sm:text-[11px] text-[#94A3B8] font-medium">
                  Campanha Oficial: Infraestrutura de Rede com Estratégia, Segurança e Resultado
                </span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 sm:space-y-6">
              
              <div className="eyebrow-pill text-[#00D2FF] border-blue-500/35 bg-[#091B42]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>PARCERIA OFICIAL F&G TI | HPE ARUBA NETWORKING</span>
              </div>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Infraestrutura de rede com <br />
                <span className="text-[#00D2FF]">estratégia, segurança e resultado.</span>
              </h3>

              <p className="text-xs sm:text-base lg:text-lg text-[#94A3B8] leading-relaxed">
                Uma infraestrutura de rede eficiente vai muito além da conectividade: ela contribui diretamente para a continuidade das operações, o planejamento de TI e o crescimento do seu negócio.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#091B42] border border-blue-500/20 flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[11px] sm:text-xs font-bold text-white">Maior Previsibilidade</h5>
                    <p className="text-[10px] sm:text-[11px] text-[#94A3B8] leading-snug">Mais confiança para planejar seus projetos de infraestrutura de rede.</p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#091B42] border border-blue-500/20 flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[11px] sm:text-xs font-bold text-white">Redução de Riscos</h5>
                    <p className="text-[10px] sm:text-[11px] text-[#94A3B8] leading-snug">Soluções confiáveis para apoiar a continuidade operacional sem paradas.</p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#091B42] border border-blue-500/20 flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[11px] sm:text-xs font-bold text-white">Planejamento Simplificado</h5>
                    <p className="text-[10px] sm:text-[11px] text-[#94A3B8] leading-snug">Tecnologia moderna alinhada às reais necessidades do seu ambiente.</p>
                  </div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#091B42] border border-blue-500/20 flex items-start gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-[11px] sm:text-xs font-bold text-white">Mais Competitividade</h5>
                    <p className="text-[10px] sm:text-[11px] text-[#94A3B8] leading-snug">Redes modernas, seguras e preparadas para acompanhar a evolução do negócio.</p>
                  </div>
                </div>
              </div>

              {/* Dual CTAs */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
                <button
                  onClick={() => onOpenQuoteWithBrand('HPE Aruba Networking - Switches & Wi-Fi')}
                  className="btn-cobalt w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#0066FF]/25 transition-all active:scale-98 cursor-pointer"
                >
                  <span>Solicitar Cotação HPE Aruba</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleWhatsApp('HPE Aruba')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/30 transition-all active:scale-98 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#10B981]" />
                  <span>WhatsApp: Consultoria Aruba</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
