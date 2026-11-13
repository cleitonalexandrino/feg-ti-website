import React, { useState, useEffect } from 'react';
import { PhoneCall, ShieldCheck, Building2, User, Mail, MessageSquare, CheckCircle2, Sparkles, Check } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export default function QuoteForm({ preselectedCategory, preselectedBrand, preselectedChallenge }) {
  const { settings } = useAdmin();
  const [sendTo1, setSendTo1] = useState(true);
  const [sendTo2, setSendTo2] = useState(true);
  const [pendingSecondUrl, setPendingSecondUrl] = useState(null);
  const [formData, setFormData] = useState({
    nome: '',
    cargo: '',
    empresa: '',
    cnpj: '',
    email: '',
    telefone: '',
    categoria: 'Devices & Endpoints',
    mensagem: ''
  });

  const [dispatched, setDispatched] = useState(false);

  // Handle preselection changes
  useEffect(() => {
    if (preselectedCategory) {
      setFormData(prev => ({ ...prev, categoria: preselectedCategory }));
    }
  }, [preselectedCategory]);

  useEffect(() => {
    if (preselectedBrand) {
      setFormData(prev => ({
        ...prev,
        categoria: preselectedBrand.includes('Zebra') ? 'Automação Comercial & Logística (Zebra)' : 
                   preselectedBrand.includes('Aruba') ? 'Data Center & Redes (HPE Aruba)' : prev.categoria,
        mensagem: `Gostaria de uma cotação para produtos/soluções da marca: ${preselectedBrand}.`
      }));
    }
  }, [preselectedBrand]);

  useEffect(() => {
    if (preselectedChallenge) {
      setFormData(prev => ({
        ...prev,
        mensagem: `Nosso maior desafio atual é relacionado a: ${preselectedChallenge}. Gostaria do apoio consultivo da F&G TI para avaliar soluções.`
      }));
    }
  }, [preselectedChallenge]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const categories = [
    'Devices & Endpoints (Laptops, Desktops, Workstations)',
    'Automação Comercial & Logística (Zebra, Coletores, Impressoras Térmicas)',
    'Data Center & Cibersegurança (Servidores, Firewalls, Storages)',
    'HPE Aruba Networking (Switches, Wi-Fi 6/7, Redes)',
    'Energia & Conectividade (No-breaks APC/Vertiv, Racks)',
    'Print Solutions & Scanners (Epson, Ricoh, Xerox, Brother)',
    'Imagem & Salas de Reunião (Logitech Rally, Poly, Displays)',
    'Soluções Digitais & Licenciamento (Microsoft 365, Ubuntu Pro, Antivírus)',
    'Outra Demanda / Múltiplas Categorias'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = 
`*Solicitação de Cotação F&G TI*
👤 *Nome:* ${formData.nome || 'Não informado'}
💼 *Cargo:* ${formData.cargo || 'Não informado'}
🏢 *Empresa:* ${formData.empresa || 'Não informado'}
📄 *CNPJ:* ${formData.cnpj || 'Não informado'}
✉️ *E-mail:* ${formData.email || 'Não informado'}
📱 *Telefone/WhatsApp:* ${formData.telefone || 'Não informado'}
📦 *Categoria de Interesse:* ${formData.categoria}
📝 *Detalhes da Demanda / SKUs:*
${formData.mensagem || 'Gostaria de falar com um consultor comercial.'}`;

    const phone1 = settings.phone || '5511957109304';
    const phone2 = settings.secondaryPhone || '5511988921054';

    if (sendTo1 && sendTo2) {
      const url1 = `https://wa.me/${phone1}?text=${encodeURIComponent(text)}`;
      const url2 = `https://wa.me/${phone2}?text=${encodeURIComponent(text)}`;
      setDispatched(true);
      setPendingSecondUrl(url2);
      
      // Abre o primeiro WhatsApp diretamente
      window.open(url1, '_blank');
      
      // Tenta abrir a segunda aba para o segundo consultor
      setTimeout(() => {
        try {
          window.open(url2, '_blank');
        } catch (e) {
          console.log('Navegador bloqueou abertura da segunda aba simultânea');
        }
      }, 500);
    } else if (sendTo1) {
      const url1 = `https://wa.me/${phone1}?text=${encodeURIComponent(text)}`;
      setDispatched(true);
      setPendingSecondUrl(null);
      window.open(url1, '_blank');
    } else if (sendTo2) {
      const url2 = `https://wa.me/${phone2}?text=${encodeURIComponent(text)}`;
      setDispatched(true);
      setPendingSecondUrl(null);
      window.open(url2, '_blank');
    }
  };

  return (
    <section id="contato" className="py-16 sm:py-24 lg:py-28 relative bg-[#020817] border-t border-blue-500/20">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#0066FF]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Eyebrow Pill */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <div className="eyebrow-pill text-[#FF6A00] border-[#FF6A00]/30 bg-[#071738]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6A00]" />
            <span>ENGENHARIA COMERCIAL & COTAÇÃO B2B</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Solicite sua cotação <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-[#FFAA44] to-[#FF6A00] bg-clip-text text-transparent">
              corporativa com a F&G TI
            </span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-[#94A3B8] px-2">
            Preencha os dados abaixo e envie diretamente para o WhatsApp da equipe técnica da F&G TI para receber atendimento ágil e proposta sob medida.
          </p>
        </div>

        {/* Structured Dark Form Card */}
        <div className="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl bg-[#071738] border border-blue-500/25 p-5 sm:p-8 lg:p-12 shadow-2xl backdrop-blur-md">
          
          {dispatched && (
            <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/30 text-xs sm:text-sm text-emerald-300 animate-fadeIn space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0" />
                  <span className="font-semibold text-white">
                    {sendTo1 && sendTo2
                      ? 'Solicitação formatada e direcionada para ambos os consultores da F&G TI!'
                      : sendTo1
                      ? `Solicitação formatada e direcionada para o Consultor 1 (${settings.displayPhone || '(11) 95710-9304'})!`
                      : `Solicitação formatada e direcionada para o Consultor 2 (${settings.secondaryDisplayPhone || '(11) 98892-1054'})!`
                    }
                  </span>
                </div>
                <button 
                  onClick={() => setDispatched(false)}
                  className="text-xs underline text-emerald-200 hover:text-white cursor-pointer ml-2 shrink-0"
                >
                  Editar
                </button>
              </div>

              {pendingSecondUrl && (
                <div className="pt-2 border-t border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                  <span className="text-[11px] text-emerald-200">
                    💡 Caso o navegador tenha bloqueado a abertura simultânea do segundo WhatsApp:
                  </span>
                  <button
                    type="button"
                    onClick={() => window.open(pendingSecondUrl, '_blank')}
                    className="px-3.5 py-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-900/40 cursor-pointer active:scale-95 transition-all"
                  >
                    <span>Abrir Chat com Consultor 2 agora</span>
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
              
              {/* Nome */}
              <div className="space-y-1">
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                  <span>Nome Completo *</span>
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#040E26] border border-blue-500/25 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all"
                />
              </div>

              {/* Cargo */}
              <div className="space-y-1">
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                  <span>Cargo / Função</span>
                </label>
                <input
                  type="text"
                  name="cargo"
                  placeholder="Ex: Gestor de TI, Gerente de Infraestrutura, Compras"
                  value={formData.cargo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#040E26] border border-blue-500/25 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all"
                />
              </div>

              {/* Empresa */}
              <div className="space-y-1">
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                  <span>Nome da Empresa *</span>
                </label>
                <input
                  type="text"
                  name="empresa"
                  required
                  placeholder="Razão social ou nome fantasia"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#040E26] border border-blue-500/25 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all"
                />
              </div>

              {/* CNPJ */}
              <div className="space-y-1">
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                  <span>CNPJ (para faturamento corporativo PJ)</span>
                </label>
                <input
                  type="text"
                  name="cnpj"
                  placeholder="00.000.000/0000-00"
                  value={formData.cnpj}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#040E26] border border-blue-500/25 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all"
                />
              </div>

              {/* Email Corporativo */}
              <div className="space-y-1">
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                  <span>E-mail Corporativo *</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="voce@suaempresa.com.br"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#040E26] border border-blue-500/25 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all"
                />
              </div>

              {/* Telefone / WhatsApp */}
              <div className="space-y-1">
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>Telefone / WhatsApp com DDD *</span>
                </label>
                <input
                  type="tel"
                  name="telefone"
                  required
                  placeholder="(11) 90000-0000"
                  value={formData.telefone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#040E26] border border-blue-500/25 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all"
                />
              </div>

            </div>

            {/* Categoria */}
            <div className="space-y-1">
              <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
                <span>Pilar ou Solução de Maior Interesse *</span>
              </label>
              <select
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#040E26] border border-blue-500/25 text-base sm:text-sm text-white focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all"
              >
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat} className="bg-[#040E26] text-white">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Mensagem / Demanda */}
            <div className="space-y-1">
              <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                <span>Descrição da Demanda / Lista de Equipamentos Desejada</span>
              </label>
              <textarea
                name="mensagem"
                rows={3}
                placeholder="Ex: Cotação de 20 coletores de dados Zebra TC21, 5 switches gerenciáveis HPE Aruba CX 6100 e 15 notebooks corporativos Dell com faturamento PJ 30/60 dias."
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#040E26] border border-blue-500/25 text-base sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-all"
              />
            </div>

            {/* Escolha do(s) Consultor(es) WhatsApp - Permite Habilitar Ambos */}
            <div className="space-y-2 pt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>Enviar para qual Consultor da F&G TI?</span>
                </label>
                <button
                  type="button"
                  onClick={() => {
                    if (sendTo1 && sendTo2) {
                      setSendTo1(true);
                      setSendTo2(false);
                    } else {
                      setSendTo1(true);
                      setSendTo2(true);
                    }
                  }}
                  className="text-[11px] font-bold text-[#00D2FF] hover:text-cyan-300 transition-colors cursor-pointer text-left sm:text-right"
                >
                  {sendTo1 && sendTo2 ? '• Habilitar apenas um' : '✓ Habilitar os dois WhatsApps'}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {/* Consultor 1 */}
                <button
                  type="button"
                  onClick={() => {
                    if (sendTo1 && !sendTo2) {
                      // Se só o 1 estava ativo, ativa o 2
                      setSendTo2(true);
                    } else {
                      setSendTo1(!sendTo1);
                    }
                  }}
                  className={`p-3.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                    sendTo1
                      ? 'bg-[#10B981]/15 border-[#10B981] text-white shadow-md shadow-[#10B981]/25 ring-1 ring-[#10B981]/50'
                      : 'bg-[#040E26] border-blue-500/20 text-slate-400 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                      sendTo1 ? 'bg-[#10B981] border-[#10B981] text-white' : 'border-slate-500 bg-transparent'
                    }`}>
                      {sendTo1 && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold flex items-center gap-1.5 flex-wrap">
                        <span>Consultor Comercial 1</span>
                        {sendTo1 && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#10B981]/30 text-emerald-300 font-bold uppercase tracking-wider">
                            Habilitado
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {settings.displayPhone || '(11) 95710-9304'}
                      </div>
                    </div>
                  </div>
                </button>

                {/* Consultor 2 */}
                <button
                  type="button"
                  onClick={() => {
                    if (sendTo2 && !sendTo1) {
                      // Se só o 2 estava ativo, ativa o 1
                      setSendTo1(true);
                    } else {
                      setSendTo2(!sendTo2);
                    }
                  }}
                  className={`p-3.5 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                    sendTo2
                      ? 'bg-[#10B981]/15 border-[#10B981] text-white shadow-md shadow-[#10B981]/25 ring-1 ring-[#10B981]/50'
                      : 'bg-[#040E26] border-blue-500/20 text-slate-400 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                      sendTo2 ? 'bg-[#10B981] border-[#10B981] text-white' : 'border-slate-500 bg-transparent'
                    }`}>
                      {sendTo2 && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold flex items-center gap-1.5 flex-wrap">
                        <span>Consultor Comercial 2</span>
                        {sendTo2 && (
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#10B981]/30 text-emerald-300 font-bold uppercase tracking-wider">
                            Habilitado
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {settings.secondaryDisplayPhone || '(11) 98892-1054'}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Submit Button (Direct to WhatsApp) */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-[#10B981] hover:bg-[#059669] shadow-lg shadow-[#10B981]/25 hover:shadow-[#10B981]/40 transition-all active:scale-98 group cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform shrink-0" />
                <span className="truncate">
                  {sendTo1 && sendTo2
                    ? 'Enviar Cotação para Ambos os Consultores no WhatsApp'
                    : sendTo1
                    ? `Enviar Cotação para Consultor 1 (${settings.displayPhone || '(11) 95710-9304'})`
                    : `Enviar Cotação para Consultor 2 (${settings.secondaryDisplayPhone || '(11) 98892-1054'})`
                  }
                </span>
              </button>
            </div>

            <div className="text-center pt-1">
              <p className="text-[10px] sm:text-[11px] text-[#94A3B8] flex items-center justify-center gap-1.5 px-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>
                  {sendTo1 && sendTo2
                    ? `Seus dados serão enviados aos dois consultores oficiais: ${settings.displayPhone || '(11) 95710-9304'} e ${settings.secondaryDisplayPhone || '(11) 98892-1054'}.`
                    : `Seus dados são protegidos e enviados diretamente para o atendimento da F&G TI.`
                  }
                </span>
              </p>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
