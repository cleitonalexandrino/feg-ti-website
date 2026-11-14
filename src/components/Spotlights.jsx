import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  Cpu, 
  BarChart3, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall,
  Server,
  Wifi,
  Network,
  Layers,
  Zap,
  Check
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export default function Spotlights({ onOpenQuoteWithBrand }) {
  const { settings } = useAdmin();
  const [aristaVisualTab, setAristaVisualTab] = useState('hardware');

  const handleWhatsApp = (brand) => {
    const text = encodeURIComponent(`Olá! Gostaria de receber uma cotação e mais informações sobre soluções ${brand} com a F&G TI.`);
    const phone = settings?.phone || '5511957109304';
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="destaques" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-[#040E26] border-y border-blue-500/20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-12 sm:space-y-20 lg:space-y-24">
        
        {/* ============================================================== */}
        {/* Spotlight 1: Arista Networks (Data Center, Campus & SD-WAN)     */}
        {/* ============================================================== */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#071738] border border-cyan-500/40 p-5 sm:p-8 lg:p-12 shadow-2xl overflow-hidden">
          
          {/* Subtle Cyber Glow effect */}
          <div className="absolute top-0 right-10 w-72 sm:w-[480px] h-72 sm:h-[480px] bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-72 sm:w-[480px] h-72 sm:h-[480px] bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="space-y-8 sm:space-y-10 relative z-10">
            
            {/* Top Header Row */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 border-b border-blue-500/20 pb-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="eyebrow-pill text-[#00D2FF] border-[#00D2FF]/30 bg-[#091B42]">
                    <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>PARCERIA ESTRATÉGICA F&G TI | ARISTA NETWORKS</span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                    "It just works!" • Líder Global
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Arista Networks: A nova era para <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#0066FF] bg-clip-text text-transparent">
                    Data Center, Campus e SD-WAN Inteligente.
                  </span>
                </h3>

                <p className="text-xs sm:text-base lg:text-lg text-[#94A3B8] max-w-3xl leading-relaxed">
                  Líder mundial em redes de altíssima velocidade e <strong>#1 em market share de Data Center 10G+</strong>. A Arista une hardware de ultra performance a um sistema operacional único (<strong className="text-white">Arista EOS</strong>) e gerenciamento centralizado em nuvem (<strong className="text-white">CloudVision</strong>), descomplicando a infraestrutura de TI de ponta a ponta.
                </p>
              </div>

              {/* Fast Proof Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2 shrink-0 pt-2 lg:pt-0">
                <div className="px-3 py-2 rounded-xl bg-[#091B42] border border-blue-500/25 text-center">
                  <div className="text-xs sm:text-sm font-extrabold text-[#00D2FF]">#1 Market Share</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400">Data Center 10G+ (Crehan)</div>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#091B42] border border-blue-500/25 text-center">
                  <div className="text-xs sm:text-sm font-extrabold text-[#10B981]">Líder Gartner</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400">Magic Quadrant DC & Cloud</div>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#091B42] border border-blue-500/25 text-center">
                  <div className="text-xs sm:text-sm font-extrabold text-white">9.000+ Clientes</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400">Presença no índice S&P 500</div>
                </div>
                <div className="px-3 py-2 rounded-xl bg-[#091B42] border border-blue-500/25 text-center">
                  <div className="text-xs sm:text-sm font-extrabold text-[#FF6A00]">1 Sistema Operacional</div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400">Arista EOS (Zero Spaghetti)</div>
                </div>
              </div>
            </div>

            {/* 3 Executive Pillars: Data Center, Campus & SD-WAN */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              
              {/* Pilar 1: Data Center */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#091B42] border border-blue-500/30 hover:border-[#00D2FF]/50 transition-all flex flex-col justify-between space-y-4 group">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-[#00D2FF] group-hover:scale-110 transition-transform">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D2FF]">Pilar 1 • Missão Crítica</span>
                    <h4 className="text-lg sm:text-xl font-bold text-white">Data Center & IA de Ultra Velocidade</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Alta densidade para ambientes corporativos, inteligência artificial e computação em nuvem sem gargalos.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>Switches Leaf-Spine com portas de <strong>10G a 800G</strong> com latência ultrabaixa e buffers profundos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span><strong>AI Networking (Etherlink):</strong> Otimizado para clusters de treinamento e inferência de IA.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span><strong>Zero Downtime (ISSU):</strong> Atualização de software com o switch em produção, sem derrubar a rede.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-2 border-t border-blue-500/20">
                  <span className="text-[10px] text-slate-400 font-mono">Séries: 7050X, 7060X, 7280R, 7800R</span>
                </div>
              </div>

              {/* Pilar 2: Linha Campus & Wi-Fi */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#091B42] border border-blue-500/30 hover:border-[#00D2FF]/50 transition-all flex flex-col justify-between space-y-4 group">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[#00D2FF] group-hover:scale-110 transition-transform">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#00D2FF]">Pilar 2 • Escritórios & Prédios</span>
                    <h4 className="text-lg sm:text-xl font-bold text-white">Linha Campus Cognitiva & Wi-Fi 7</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Conectividade moderna para estações de trabalho, notebooks corporativos e dispositivos móveis.
                  </p>
                  <ul className="space-y-2 pt-1 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>Switches de acesso com <strong>PoE++ de até 90W</strong> e portas mGig (1G/2.5G/5G/10G) para alimentar qualquer equipamento.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span><strong>Wi-Fi 6, 6E e Wi-Fi 7</strong> com telemetria inteligente (AVA) que diagnostica lentidão antes do chamado do usuário.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span><strong>Zero Trust Sem Agentes:</strong> Microsegmentação e proteção de identidade (AGNI) sem instalar softwares nos computadores.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-2 border-t border-blue-500/20">
                  <span className="text-[10px] text-slate-400 font-mono">Séries: 710P, 720D, 720XP, APs C-460/C-360</span>
                </div>
              </div>

              {/* Pilar 3: SD-WAN VeloCloud */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#091B42] border border-blue-500/30 hover:border-[#FF6A00]/50 transition-all flex flex-col justify-between space-y-4 group">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[#FF6A00] group-hover:scale-110 transition-transform">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6A00]">Pilar 3 • Filiais & Nuvem</span>
                    <h4 className="text-lg sm:text-xl font-bold text-white">SD-WAN VeloCloud Inteligente</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Conexão ininterrupta entre matriz, filiais, lojas e nuvens públicas (AWS, Azure, Google Cloud).
                  </p>
                  <ul className="space-y-2 pt-1 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span><strong>Otimização Dinâmica de Links (DMPO):</strong> Soma banda larga comum, fibra, 5G e Starlink sem queda de chamadas ou ERP.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span><strong>Zero-Touch Provisioning (ZTP):</strong> Plugou na energia e na rede, o equipamento se autoconfigura sozinho em minutos.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span><strong>Redução drástica de custos</strong> em relação a links MPLS dedicados legados, com 10x mais agilidade.</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-2 border-t border-blue-500/20">
                  <span className="text-[10px] text-slate-400 font-mono">Arista VeloCloud Edge: Small, Medium, Large Branch & DC</span>
                </div>
              </div>

            </div>

            {/* Visual Showcase: Switch between Hardware Lineup and Integrated Topology */}
            <div className="rounded-2xl bg-[#091B42]/90 border border-blue-500/25 p-4 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-blue-500/20 pb-3">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#00D2FF]" />
                  <span className="text-xs sm:text-sm font-bold text-white">
                    Visão Técnica Oficial do Fabricante Arista Networks
                  </span>
                </div>
                
                {/* Visual Selector Tabs */}
                <div className="flex items-center gap-1.5 bg-[#071738] p-1 rounded-xl border border-blue-500/25">
                  <button
                    onClick={() => setAristaVisualTab('hardware')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      aristaVisualTab === 'hardware'
                        ? 'bg-[#0066FF] text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Equipamentos (SD-WAN, Campus & Wi-Fi)
                  </button>
                  <button
                    onClick={() => setAristaVisualTab('architecture')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      aristaVisualTab === 'architecture'
                        ? 'bg-[#0066FF] text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Topologia Unificada (Filiais, Campus & DC)
                  </button>
                </div>
              </div>

              {/* Graphic Display */}
              <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-white/10 shadow-inner">
                {aristaVisualTab === 'hardware' ? (
                  <div className="relative group">
                    <img 
                      src="/images/arista_portfolio_hardware.png" 
                      alt="Portfólio de Equipamentos Arista Networks: SD-WAN, Switches Campus PoE e Wi-Fi 7"
                      className="w-full h-auto max-h-[460px] object-contain mx-auto bg-white/95 rounded-lg p-2"
                      loading="lazy"
                    />
                    <div className="p-2 sm:p-3 text-center bg-[#071738]/95 border-t border-blue-500/20">
                      <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
                        <strong>Arista Cognitive Unified Edge (CUE):</strong> VeloCloud SD-WAN + Switches Séries 710P/720XP PoE++ + Wi-Fi 7 C-460/C-430 com gestão CloudVision
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative group">
                    <img 
                      src="/images/arista_slide_8.png" 
                      alt="Arquitetura Integrada Arista Networks e VeloCloud"
                      className="w-full h-auto max-h-[460px] object-contain mx-auto bg-white/95 rounded-lg p-2"
                      loading="lazy"
                    />
                    <div className="p-2 sm:p-3 text-center bg-[#071738]/95 border-t border-blue-500/20">
                      <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
                        <strong>Arquitetura Conectada:</strong> Filiais (Branch), Campus Corporativo e Data Center integrados via SD-WAN e Arista EOS
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTAs for Arista */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-blue-500/20 pt-6">
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>Apoio consultivo da F&G TI para dimensionamento, prova de conceito (PoC) e cotação corporativa Arista.</span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
                <button
                  onClick={() => onOpenQuoteWithBrand('Arista Networks - Data Center, Campus & SD-WAN')}
                  className="btn-cobalt w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#0066FF]/30 transition-all active:scale-98 cursor-pointer"
                >
                  <span>Solicitar Cotação Arista</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleWhatsApp('Arista Networks')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/30 transition-all active:scale-98 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#10B981]" />
                  <span>WhatsApp: Falar sobre Arista</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* Spotlight 2: Zebra Technologies (Warm Enterprise Solar Orange) */}
        {/* ============================================================== */}
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

        {/* ============================================================== */}
        {/* Spotlight 3: HPE Aruba Networking (Cobalt & Cyan Theme)        */}
        {/* ============================================================== */}
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
