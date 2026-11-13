import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export default function WhatsAppFloat() {
  const { settings } = useAdmin();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const text = encodeURIComponent('Olá! Gostaria de falar com um consultor da F&G TI sobre cotações e soluções corporativas.');
    window.open(`https://wa.me/${settings.phone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-end gap-2 sm:gap-3">
      
      {/* Tooltip message */}
      {showTooltip && (
        <div className="bg-[#0D1422] border border-white/10 p-3 rounded-2xl shadow-2xl max-w-[240px] sm:max-w-xs text-[11px] sm:text-xs text-slate-200 animate-fadeIn relative backdrop-blur-md">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-white cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-white mb-0.5">Consultor F&G TI Online</div>
          <p className="text-[#94A3B8] leading-snug">
            Dúvidas sobre marcas, cotação de equipamentos ou projetos de TI? Fale conosco agora!
          </p>
        </div>
      )}

      {/* Floating button in WhatsApp Emerald */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#10B981] hover:bg-[#059669] text-white flex items-center justify-center shadow-2xl shadow-[#10B981]/40 hover:scale-110 active:scale-95 transition-all duration-300 relative group cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-25" />
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
      </button>

    </div>
  );
}
