import React, { useState } from 'react';
import { itChallenges } from '../data/challengesData';
import { 
  Coins, 
  ShieldCheck, 
  Server, 
  FileCheck, 
  Clock, 
  Handshake, 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle,
  Sparkles,
  PhoneCall
} from 'lucide-react';

const iconMap = {
  Coins: Coins,
  ShieldCheck: ShieldCheck,
  Server: Server,
  FileCheck: FileCheck,
  Clock: Clock,
  Handshake: Handshake
};

export default function Challenges({ onSelectChallenge }) {
  const [activeChallengeId, setActiveChallengeId] = useState('orcamento');

  const activeChallenge = itChallenges.find(c => c.id === activeChallengeId) || itChallenges[0];

  const handleWhatsAppForChallenge = (challengeTitle) => {
    const text = encodeURIComponent(`Olá! Gostaria de conversar com a F&G TI sobre o desafio de "${challengeTitle}" na minha empresa.`);
    window.open(`https://wa.me/5511957109304?text=${text}`, '_blank');
  };

  return (
    <section id="desafios" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-[#080D16] border-y border-white/[0.08]">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header with Eyebrow Pill */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="eyebrow-pill text-blue-400 border-blue-500/30">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>CONSULTORIA ESPECIALIZADA F&G TI</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Gestor de TI: Qual é o seu <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-[#FB923C] to-[#F97316] bg-clip-text text-transparent">
              maior desafio hoje?
            </span>
          </h2>

          <p className="text-xs sm:text-base md:text-lg text-[#94A3B8] px-2 leading-relaxed">
            Sabemos que a rotina de um gestor de TI vai muito além de manter tudo funcionando. São muitas responsabilidades, prazos curtos e decisões estratégicas todos os dias.
          </p>
        </div>

        {/* 6 Clickable Executive Pain-Point Selector Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3.5 mb-8 sm:mb-10">
          {itChallenges.map((item) => {
            const Icon = iconMap[item.iconName] || Server;
            const isActive = activeChallengeId === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveChallengeId(item.id)}
                className={`p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 flex flex-col justify-between relative group cursor-pointer ${
                  isActive
                    ? 'enterprise-card-active scale-[1.02]'
                    : 'enterprise-card hover:border-slate-700'
                }`}
              >
                <div className="space-y-2.5 sm:space-y-3">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors ${
                    isActive 
                      ? 'bg-[#F97316] text-white shadow-md shadow-[#F97316]/30' 
                      : 'bg-[#111927] text-slate-300 group-hover:text-blue-400'
                  }`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className={`text-xs sm:text-sm font-bold leading-snug ${isActive ? 'text-white' : 'text-slate-200'}`}>
                    {item.title}
                  </h3>
                </div>

                <div className="mt-3 flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-slate-400 group-hover:text-white">
                  <span>{isActive ? 'Ativo' : 'Analisar'}</span>
                  <ArrowRight className="w-3 h-3 text-[#F97316]" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Split Detail Panel */}
        <div className="relative rounded-2xl bg-[#0D1422] border border-white/[0.08] p-5 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
          
          <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-[#F97316]/10 rounded-full blur-[110px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start relative z-10">
            
            {/* Left Column: Diagnosis & Common Pain Points */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30">
                  DIAGNÓSTICO EXECUTIVO
                </span>
                <span className="text-[11px] sm:text-xs text-[#64748B]">Desafio em Foco</span>
              </div>

              <h4 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                {activeChallenge.title}
              </h4>

              <p className="text-xs sm:text-sm lg:text-base text-slate-300 italic border-l-2 border-[#F97316] pl-3 sm:pl-4 py-1">
                "{activeChallenge.question}"
              </p>

              <div className="space-y-2.5 pt-1 sm:pt-2">
                <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>▲ Dores Comuns Enfrentadas no seu Dia a Dia:</span>
                </p>
                <ul className="space-y-2">
                  {activeChallenge.painPoints.map((pain, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#94A3B8] leading-snug">
                      <span className="text-red-400 font-bold mt-0.5 shrink-0">•</span>
                      <span>{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Engineering Prescription Card */}
            <div className="lg:col-span-6 rounded-xl bg-[#111927] border border-white/[0.08] p-5 sm:p-6 space-y-4 sm:space-y-5">
              <div className="space-y-1.5 sm:space-y-2">
                <h5 className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{activeChallenge.solutionTitle}</span>
                </h5>
                <p className="text-xs sm:text-sm lg:text-base text-slate-200 leading-relaxed">
                  {activeChallenge.solutionText}
                </p>
              </div>

              {/* Action tags */}
              <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                <p className="text-[11px] sm:text-xs font-semibold text-slate-400">
                  Ações e Soluções Recomendadas:
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activeChallenge.recommendedActions.map((action, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-[11px] sm:text-xs font-medium text-blue-300"
                    >
                      <CheckCircle className="w-3 h-3 text-[#10B981] shrink-0" />
                      <span>{action}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => onSelectChallenge(activeChallenge.title)}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#F97316] hover:bg-[#EA580C] shadow-lg shadow-[#F97316]/20 transition-all active:scale-98 cursor-pointer"
                >
                  <span>Solicitar Cotação p/ este Desafio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleWhatsAppForChallenge(activeChallenge.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#10B981] bg-[#10B981]/10 hover:bg-[#10B981]/20 border border-[#10B981]/30 transition-all active:scale-98 cursor-pointer"
                  title="Falar no WhatsApp"
                >
                  <PhoneCall className="w-4 h-4 text-[#10B981]" />
                  <span>WhatsApp Especialista</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
