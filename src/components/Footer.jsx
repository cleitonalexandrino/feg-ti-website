import React from 'react';
import { PhoneCall, MapPin, ExternalLink, ShieldCheck, Lock } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { settings, setIsAdminOpen } = useAdmin();

  return (
    <footer className="bg-[#020612] border-t border-blue-500/20 text-[#94A3B8] text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10 sm:space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Brand Col */}
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <img 
                src="/images/logo_fgti.png" 
                alt="F&G TI - Soluções em Tecnologia" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
                B2B
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              <strong className="text-white">F&G TECNOLOGIA DA INFORMACAO LTDA</strong>. Tecnologia que simplifica. Parcerias que fortalecem. Fornecimento corporativo de hardware, infraestrutura de rede, cibersegurança, automação e licenciamento com os maiores fabricantes globais.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href={settings.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0077B5]/15 border border-[#0077B5]/30 text-xs font-semibold text-[#38BDF8] hover:bg-[#0077B5]/25 transition-all"
              >
                <span>LinkedIn F&G TI</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Botão de Acesso Administrativo para o Cliente */}
              <button
                onClick={() => setIsAdminOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#071738] hover:bg-[#091B42] border border-blue-500/25 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Acessar painel para editar produtos, marcas e informações"
              >
                <Lock className="w-3.5 h-3.5 text-[#FF6A00]" />
                <span>Área Restrita / Admin</span>
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-[#00D2FF] transition-colors py-1 inline-block">Início</a></li>
              <li><a href="#desafios" className="hover:text-[#00D2FF] transition-colors py-1 inline-block">Dores do Gestor de TI</a></li>
              <li><a href="#solucoes" className="hover:text-[#00D2FF] transition-colors py-1 inline-block">7 Pilares de Soluções</a></li>
              <li><a href="#fabricantes" className="hover:text-[#00D2FF] transition-colors py-1 inline-block">Ecossistema de Fabricantes</a></li>
              <li><a href="#destaques" className="hover:text-[#00D2FF] transition-colors py-1 inline-block">Destaques Zebra & Aruba</a></li>
              <li><a href="#diferenciais" className="hover:text-[#00D2FF] transition-colors py-1 inline-block">Por que a F&G TI?</a></li>
              <li><a href="#contato" className="hover:text-[#00D2FF] transition-colors py-1 inline-block">Solicitar Cotação</a></li>
            </ul>
          </div>

          {/* Principais Marcas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Marcas Homologadas
            </h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-white font-medium">Zebra Technologies</span> (Coletores & Impressoras)</li>
              <li><span className="text-white font-medium">HPE Aruba Networking</span> (Switches & Wi-Fi)</li>
              <li><span className="text-white font-medium">Dell Technologies</span> (Servidores & Endpoints)</li>
              <li><span className="text-white font-medium">Lenovo</span> (ThinkPad Corporativo)</li>
              <li><span className="text-white font-medium">APC by Schneider</span> (UPS / No-breaks)</li>
              <li><span className="text-white font-medium">Microsoft</span> (365, Azure & Windows Pro)</li>
              <li><span className="text-white font-medium">Epson & Ricoh</span> (Print Solutions)</li>
            </ul>
          </div>

          {/* Atendimento e Contato */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Canais Oficiais
            </h4>
            <div className="space-y-3 text-xs">
              <a 
                href={`https://wa.me/${settings.phone}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#10B981] hover:text-emerald-300 transition-colors py-1"
              >
                <PhoneCall className="w-4 h-4 shrink-0" />
                <span>WhatsApp: {settings.displayPhone}</span>
              </a>

              <div className="flex items-start gap-2 text-[#94A3B8]">
                <ShieldCheck className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                <span>Atendimento Consultivo Especializado para Empresas (B2B)</span>
              </div>

              <div className="flex items-start gap-2 text-[#94A3B8]">
                <MapPin className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                <span>Atendimento e Distribuição em Todo o Território Nacional</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-6 sm:pt-8 border-t border-blue-500/15 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#64748B] text-center sm:text-left">
          <div>
            © {currentYear} F&G TECNOLOGIA DA INFORMACAO LTDA. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span>Privacidade & LGPD</span>
            <span>•</span>
            <span>Termos de Uso</span>
            <span>•</span>
            <span className="text-slate-300 font-medium">Tecnologia que simplifica. Parcerias que fortalecem.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
