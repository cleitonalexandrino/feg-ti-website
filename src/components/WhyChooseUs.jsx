import React from 'react';
import { Award, Truck, ShieldCheck, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const differentiators = [
    {
      icon: Headphones,
      title: 'Atendimento Consultivo Especializado',
      desc: 'Nossos consultores entendem o projeto técnico antes de elaborar qualquer cotação. Você fala com quem compreende as complexidades do seu negócio.'
    },
    {
      icon: ShieldCheck,
      title: 'Procedência & Garantia Oficial',
      desc: 'Canal direto com os distribuidores oficiais no Brasil. Todos os produtos possuem garantia de fábrica homologada e nota fiscal corporativa.'
    },
    {
      icon: Award,
      title: 'Condições Comerciais & Faturamento PJ',
      desc: 'Faturamento direto faturado, prazos diferenciados e suporte na estruturação de compras para projetos corporativos de grande porte.'
    },
    {
      icon: Truck,
      title: 'Agilidade Logística & Pronta Entrega',
      desc: 'Acesso imediato aos maiores estoques do país, garantindo resposta rápida para demandas emergenciais e manutenções críticas de operação.'
    }
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-24 lg:py-28 relative bg-[#080D16] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* Header with Eyebrow Pill */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <div className="eyebrow-pill text-[#F97316] border-[#F97316]/30">
            <Award className="w-3.5 h-3.5 text-[#F97316]" />
            <span>DIFERENCIAIS CONSULTIVOS B2B</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Por que empresas e gestores de TI <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-blue-400 to-[#3B82F6] bg-clip-text text-transparent">
              escolhem a F&G TI?
            </span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#94A3B8] px-2">
            Mais do que fornecer equipamentos, estabelecemos parcerias de longo prazo para garantir a estabilidade e o crescimento da sua infraestrutura.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <div 
                key={idx}
                className="enterprise-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#3B82F6] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F97316] transition-colors leading-snug">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action strip */}
        <div className="text-center pt-2">
          <button
            onClick={() => onOpenQuote()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-[#F97316] hover:bg-[#EA580C] shadow-xl shadow-[#F97316]/25 transition-all active:scale-98 cursor-pointer"
          >
            <span>Iniciar Projeto com a F&G TI</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
