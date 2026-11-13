import React, { useState } from 'react';
import { MessageCircle, X, ArrowRight, UserCheck } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export default function WhatsAppFloat() {
  const { settings } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWhatsApp = (phoneNumber) => {
    const text = encodeURIComponent('Olá! Gostaria de falar com a equipe de consultoria da F&G TI sobre soluções corporativas.');
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end">
      
      {/* Expanded Dual-Contact Card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 rounded-2xl bg-[#071738]/95 border border-blue-500/30 p-4 shadow-2xl backdrop-blur-xl text-slate-200 animate-fadeIn space-y-3">
          
          <div className="flex items-center justify-between border-b border-blue-500/20 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Consultores F&G TI Online
              </span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-300 leading-snug">
            Escolha um de nossos consultores corporativos para atendimento via WhatsApp:
          </p>

          <div className="space-y-2">
            {/* Opção 1: Contato Principal */}
            <button
              onClick={() => handleOpenWhatsApp(settings.phone || '5511957109304')}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#040E26] hover:bg-[#0A225A] border border-blue-500/20 hover:border-[#10B981]/60 transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white group-hover:text-[#10B981] transition-colors truncate">
                    Consultoria Comercial 1
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {settings.displayPhone || '(11) 95710-9304'}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#10B981] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
            </button>

            {/* Opção 2: Segundo Contato (+55 11 98892-1054) */}
            <button
              onClick={() => handleOpenWhatsApp(settings.secondaryPhone || '5511988921054')}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#040E26] hover:bg-[#0A225A] border border-blue-500/20 hover:border-[#10B981]/60 transition-all text-left group cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white group-hover:text-[#10B981] transition-colors truncate">
                    Consultoria Comercial 2
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {settings.secondaryDisplayPhone || '(11) 98892-1054'}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#10B981] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#10B981] hover:bg-[#059669] text-white flex items-center justify-center shadow-2xl shadow-[#10B981]/40 hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
        aria-label="Abrir contatos do WhatsApp"
        title="Falar com consultor no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-25" />
        {isOpen ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
        ) : (
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
        )}
      </button>

    </div>
  );
}
