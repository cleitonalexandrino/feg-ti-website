import React, { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
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
  Layers3,
  Edit,
  Server,
  Wifi,
  Network,
  Sparkles,
  PhoneCall,
  ShieldCheck,
  X
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
  const { solutions, settings, setIsAdminOpen } = useAdmin();
  const [activeTab, setActiveTab] = useState('devices');
  const [aristaVisualTab, setAristaVisualTab] = useState(null);

  const toggleAristaVisualTab = (tab) => {
    setAristaVisualTab(prev => (prev === tab ? null : tab));
  };

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#datacenter' || hash === '#arista') {
        setActiveTab('datacenter');
        const el = document.getElementById('solucoes');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleAristaWhatsApp = () => {
    const text = encodeURIComponent('Olá! Gostaria de falar com um consultor da F&G TI sobre soluções Arista Networks (Data Center, Campus e SD-WAN).');
    const phone = settings?.phone || '5511957109304';
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  const currentSolution = solutions.find(s => s.id === activeTab) || solutions[0];
  const CurrentIcon = iconMap[currentSolution.icon] || Laptop;

  return (
    <section id="solucoes" className="py-16 sm:py-24 lg:py-28 relative bg-[#020817]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Title with Eyebrow Pill */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="eyebrow-pill text-[#FF6A00] border-[#FF6A00]/30 bg-[#071738]">
            <Layers3 className="w-3.5 h-3.5 text-[#FF6A00]" />
            <span>PORTFÓLIO ESTRATÉGICO COMPLETO</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            7 Pilares Estratégicos para <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-[#00D2FF] to-[#0066FF] bg-clip-text text-transparent">
              impulsionar sua operação
            </span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#94A3B8] px-2">
            Da estação de trabalho do colaborador à nuvem, cibersegurança e redes de alta performance: conheça nossas linhas de produtos corporativos homologados.
          </p>
        </div>

        {/* Horizontal Category Pill Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto pb-3 sm:pb-4 no-scrollbar justify-start xl:justify-center mb-6 sm:mb-10 px-1">
          {solutions.map((item) => {
            const Icon = iconMap[item.icon] || Laptop;
            const isSelected = activeTab === item.id;
            const isDataCenter = item.id === 'datacenter';
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 ${
                  isSelected
                    ? 'btn-cobalt text-white shadow-lg shadow-[#0066FF]/35 scale-[1.02]'
                    : isDataCenter
                    ? 'bg-[#071738] text-white hover:bg-[#0A225A] border border-[#00D2FF]/40 shadow-sm'
                    : 'bg-[#071738] text-slate-300 hover:text-white hover:bg-[#091B42] border border-blue-500/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#00D2FF]'}`} />
                <span>{item.title.split('&')[0]}</span>
                {isDataCenter && !isSelected && (
                  <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded bg-cyan-500/20 text-[#00D2FF] border border-cyan-500/30">
                    Arista
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Content Container */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-[#071738] border border-blue-500/20 p-5 sm:p-8 lg:p-12 shadow-2xl overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start lg:items-center">
            
            {/* Left Column: Pillar Detail & Homologated Equipment */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/15 border border-blue-500/35 flex items-center justify-center text-[#00D2FF] shrink-0">
                    <CurrentIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#FF6A00]">
                      PILAR HOMOLOGADO
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                      {currentSolution.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  title="Editar equipamentos deste pilar no Admin"
                >
                  <Edit className="w-3.5 h-3.5 text-[#FF6A00]" />
                  <span className="hidden sm:inline">Editar Pilar</span>
                </button>
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

              {/* Solar Orange Primary CTA Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={() => onSelectCategory(currentSolution.title)}
                  className="btn-solar w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#FF6A00]/25 transition-all active:scale-98 cursor-pointer"
                >
                  <span>Solicitar Cotação para {currentSolution.title.split('&')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Authorized Vendor Badges Card */}
            <div className="lg:col-span-5 rounded-2xl bg-[#091B42] border border-blue-500/20 p-5 sm:p-7 space-y-4 sm:space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D2FF] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-white">
                    Fabricantes Oficiais neste Pilar
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded bg-blue-500/20 text-[#38BDF8] border border-blue-500/35 whitespace-nowrap">
                  {currentSolution.partners.length} Fabricantes
                </span>
              </div>

              <p className="text-[11px] sm:text-xs text-[#94A3B8]">
                A F&G TI possui canal direto e condições corporativas oficiais com os principais fabricantes deste segmento:
              </p>

              {/* Partners Chips Grid */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {currentSolution.partners.map((partner, idx) => {
                  const isArista = partner.toLowerCase().includes('arista');
                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[11px] sm:text-xs font-semibold transition-all ${
                        isArista 
                          ? 'bg-[#00D2FF]/15 border-[#00D2FF]/50 text-white shadow-sm'
                          : 'bg-[#071738] border-blue-500/20 text-slate-200 hover:text-white hover:border-[#FF6A00]/60 hover:bg-[#0A225A]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isArista ? 'bg-[#00D2FF]' : 'bg-[#FF6A00]'}`} />
                      <span>{partner}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] sm:text-xs text-[#94A3B8]">
                <span>Precisa de homologação técnica?</span>
                <a href="#contato" className="text-[#00D2FF] font-semibold hover:underline flex items-center gap-1">
                  <span>Falar com especialista</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

          {/* ============================================================== */}
          {/* DESTAQUE OFICIAL ARISTA NETWORKS EMBARCADO NA ABA DATA CENTER   */}
          {/* ============================================================== */}
          {activeTab === 'datacenter' && (
            <div className="mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-blue-500/25 space-y-6 sm:space-y-8">
              
              {/* Header da Seção Arista dentro da Aba Data Center */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 border-b border-blue-500/20 pb-5">
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="eyebrow-pill text-[#00D2FF] border-[#00D2FF]/30 bg-[#091B42]">
                      <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
                      <span>DESTAQUE OFICIAL DATA CENTER & REDES: ARISTA NETWORKS</span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                      "It just works!" • Líder Global
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    Arista Networks: A nova era para <br className="hidden sm:inline" />
                    <span className="bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#0066FF] bg-clip-text text-transparent">
                      Data Center, Linha Campus e SD-WAN Inteligente.
                    </span>
                  </h4>

                  <p className="text-xs sm:text-sm lg:text-base text-[#94A3B8] max-w-3xl leading-relaxed">
                    Líder mundial em redes de altíssima velocidade e <strong>#1 em market share de Data Center 10G+</strong>. A Arista une hardware de ultra performance a um sistema operacional único (<strong className="text-white">Arista EOS</strong>) e gerenciamento centralizado em nuvem (<strong className="text-white">CloudVision</strong>), simplificando a infraestrutura de TI corporativa.
                  </p>
                </div>

                {/* Proof Metrics */}
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

              {/* 3 Pilares Arista: Data Center, Linha Campus e SD-WAN */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                
                {/* Pilar 1: Data Center */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#091B42] border border-blue-500/30 hover:border-[#00D2FF]/50 transition-all flex flex-col justify-between space-y-3 group">
                  <div className="space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-[#00D2FF] group-hover:scale-110 transition-transform">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#00D2FF]">Pilar 1 • Missão Crítica</span>
                      <h5 className="text-base sm:text-lg font-bold text-white leading-snug">Data Center & IA de Ultra Velocidade</h5>
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Alta densidade para ambientes corporativos, inteligência artificial e computação em nuvem sem gargalos.
                    </p>
                    <ul className="space-y-2 pt-1 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>Switches Leaf-Spine com portas de <strong>10G a 800G</strong> com latência ultrabaixa e buffers profundos.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span><strong>AI Networking (Etherlink):</strong> Otimizado para clusters de treinamento e inferência de IA.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span><strong>Zero Downtime (ISSU):</strong> Atualização de software com o switch em produção, sem derrubar a rede.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-blue-500/20">
                    <span className="text-[10px] text-slate-400 font-mono">Séries: 7050X, 7060X, 7280R, 7800R</span>
                  </div>
                </div>

                {/* Pilar 2: Linha Campus */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#091B42] border border-blue-500/30 hover:border-[#00D2FF]/50 transition-all flex flex-col justify-between space-y-3 group">
                  <div className="space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-[#00D2FF] group-hover:scale-110 transition-transform">
                      <Wifi className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#00D2FF]">Pilar 2 • Escritórios & Prédios</span>
                      <h5 className="text-base sm:text-lg font-bold text-white leading-snug">Linha Campus Cognitiva & Wi-Fi 7</h5>
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Conectividade moderna para estações de trabalho, notebooks corporativos e dispositivos móveis.
                    </p>
                    <ul className="space-y-2 pt-1 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>Switches de acesso com <strong>PoE++ de até 90W</strong> e portas mGig (1G/2.5G/5G/10G) para alimentar qualquer equipamento.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span><strong>Wi-Fi 6, 6E e Wi-Fi 7</strong> com telemetria inteligente (AVA) que diagnostica lentidão antes do chamado do usuário.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span><strong>Zero Trust Sem Agentes:</strong> Microsegmentação e proteção de identidade (AGNI) sem instalar softwares nos computadores.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-blue-500/20">
                    <span className="text-[10px] text-slate-400 font-mono">Séries: 710P, 720D, 720XP, APs C-460/C-360</span>
                  </div>
                </div>

                {/* Pilar 3: SD-WAN VeloCloud */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#091B42] border border-blue-500/30 hover:border-[#FF6A00]/50 transition-all flex flex-col justify-between space-y-3 group">
                  <div className="space-y-2.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[#FF6A00] group-hover:scale-110 transition-transform">
                      <Network className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#FF6A00]">Pilar 3 • Filiais & Nuvem</span>
                      <h5 className="text-base sm:text-lg font-bold text-white leading-snug">SD-WAN VeloCloud Inteligente</h5>
                    </div>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      Conexão ininterrupta entre matriz, filiais, lojas e nuvens públicas (AWS, Azure, Google Cloud).
                    </p>
                    <ul className="space-y-2 pt-1 text-xs text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span><strong>Otimização Dinâmica de Links (DMPO):</strong> Soma banda larga comum, fibra, 5G e Starlink sem queda de chamadas ou ERP.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span><strong>Zero-Touch Provisioning (ZTP):</strong> Plugou na tomada e no cabo de rede, o equipamento se autoconfigura em minutos.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span><strong>Redução drástica de custos</strong> em relação a links MPLS dedicados legados, com 10x mais agilidade.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-blue-500/20">
                    <span className="text-[10px] text-slate-400 font-mono">Arista VeloCloud Edge: Small, Medium, Large Branch & DC</span>
                  </div>
                </div>

              </div>

              {/* Visualizador Gráfico Oficial com Abas */}
              <div className="rounded-2xl bg-[#091B42]/90 border border-blue-500/25 p-4 sm:p-5 space-y-4">
                <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${aristaVisualTab ? 'border-b border-blue-500/20 pb-3' : ''}`}>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#00D2FF]" />
                    <span className="text-xs sm:text-sm font-bold text-white">
                      Visão Técnica Oficial do Fabricante Arista Networks
                    </span>
                  </div>
                  
                  {/* Seletor de Abas Gráficas */}
                  <div className="flex items-center gap-1.5 bg-[#071738] p-1 rounded-xl border border-blue-500/25">
                    <button
                      onClick={() => toggleAristaVisualTab('hardware')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        aristaVisualTab === 'hardware'
                          ? 'bg-[#0066FF] text-white shadow'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                      title={aristaVisualTab === 'hardware' ? "Clique para ocultar imagem" : "Clique para visualizar equipamentos"}
                    >
                      Equipamentos (SD-WAN, Campus & Wi-Fi)
                    </button>
                    <button
                      onClick={() => toggleAristaVisualTab('architecture')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        aristaVisualTab === 'architecture'
                          ? 'bg-[#0066FF] text-white shadow'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                      title={aristaVisualTab === 'architecture' ? "Clique para ocultar imagem" : "Clique para visualizar topologia"}
                    >
                      Topologia Unificada (Filiais, Campus & DC)
                    </button>
                    
                    {aristaVisualTab && (
                      <button
                        onClick={() => setAristaVisualTab(null)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
                        title="Ocultar imagem"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Exibição da Imagem Técnica (Aparece APENAS quando clicado nos botões; enquanto não clicado, fica oculto) */}
                {aristaVisualTab && (
                  <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-white/10 shadow-inner">
                    {aristaVisualTab === 'hardware' ? (
                      <div className="relative group">
                        <img 
                          src="/images/arista_portfolio_hardware.png" 
                          alt="Portfólio de Equipamentos Arista Networks: SD-WAN, Switches Campus PoE e Wi-Fi 7"
                          className="w-full h-auto max-h-[440px] object-contain mx-auto bg-white/95 rounded-lg p-2"
                          loading="lazy"
                        />
                        <div className="p-2 sm:p-3 flex items-center justify-between text-center bg-[#071738]/95 border-t border-blue-500/20">
                          <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
                            <strong>Arista Cognitive Unified Edge (CUE):</strong> VeloCloud SD-WAN + Switches Séries 710P/720XP PoE++ + Wi-Fi 7 C-460/C-430 com gestão CloudVision
                          </span>
                          <button
                            onClick={() => setAristaVisualTab(null)}
                            className="hidden sm:inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-all shrink-0 cursor-pointer"
                          >
                            <X className="w-3 h-3" />
                            <span>Fechar</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="relative group">
                        <img 
                          src="/images/arista_slide_8.png" 
                          alt="Arquitetura Integrada Arista Networks e VeloCloud"
                          className="w-full h-auto max-h-[440px] object-contain mx-auto bg-white/95 rounded-lg p-2"
                          loading="lazy"
                        />
                        <div className="p-2 sm:p-3 flex items-center justify-between text-center bg-[#071738]/95 border-t border-blue-500/20">
                          <span className="text-[11px] sm:text-xs text-slate-300 font-medium">
                            <strong>Arquitetura Conectada:</strong> Filiais (Branch), Campus Corporativo e Data Center integrados via SD-WAN e Arista EOS
                          </span>
                          <button
                            onClick={() => setAristaVisualTab(null)}
                            className="hidden sm:inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-all shrink-0 cursor-pointer"
                          >
                            <X className="w-3 h-3" />
                            <span>Fechar</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Rodapé e CTAs da Seção Arista */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-blue-500/20 pt-4">
                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Apoio consultivo da F&G TI para dimensionamento, prova de conceito (PoC) e cotação corporativa Arista.</span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0">
                  <button
                    onClick={() => onSelectCategory('Arista Networks (Data Center, Campus & SD-WAN VeloCloud)')}
                    className="btn-cobalt w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#0066FF]/30 transition-all active:scale-98 cursor-pointer"
                  >
                    <span>Solicitar Cotação Arista</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleAristaWhatsApp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/30 transition-all active:scale-98 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-[#10B981]" />
                    <span>WhatsApp: Falar sobre Arista</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
