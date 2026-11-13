import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { 
  X, 
  Lock, 
  Plus, 
  Trash2, 
  Save, 
  RotateCcw, 
  Download, 
  Upload, 
  CheckCircle2, 
  Building2, 
  Layers, 
  Phone, 
  Settings, 
  Search,
  Image as ImageIcon
} from 'lucide-react';

export default function AdminModal() {
  const {
    partners,
    solutions,
    settings,
    categories,
    isAdminOpen,
    setIsAdminOpen,
    isAuthenticated,
    login,
    logout,
    addPartner,
    deletePartner,
    addSolutionItem,
    removeSolutionItem,
    updateSettings,
    resetToDefaults,
    exportData,
    importData
  } = useAdmin();

  const [activeTab, setActiveTab] = useState('partners');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState(false);

  // Search in partners list
  const [partnerSearch, setPartnerSearch] = useState('');

  // New Partner Form State with Image
  const [newPartner, setNewPartner] = useState({
    name: '',
    category: 'devices',
    badge: 'Corporativo',
    desc: '',
    image: ''
  });
  const [partnerSuccess, setPartnerSuccess] = useState(false);

  // New Solution Item State
  const [selectedSolutionId, setSelectedSolutionId] = useState('devices');
  const [newHighlightText, setNewHighlightText] = useState('');

  // Settings Form State
  const [tempSettings, setTempSettings] = useState(settings);
  const [settingsSuccess, setSettingsSuccess] = useState(false);

  if (!isAdminOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(passwordInput)) {
      setAuthError(false);
      setPasswordInput('');
    } else {
      setAuthError(true);
    }
  };

  // Image Upload Handler (converts to Base64)
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Por favor, selecione uma imagem menor que 2MB para garantir alta velocidade.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewPartner(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddPartner = (e) => {
    e.preventDefault();
    if (!newPartner.name.trim()) return;

    addPartner({ ...newPartner });
    setNewPartner({
      name: '',
      category: 'devices',
      badge: 'Corporativo',
      desc: '',
      image: ''
    });
    setPartnerSuccess(true);
    setTimeout(() => setPartnerSuccess(false), 3000);
  };

  const handleAddHighlight = (e) => {
    e.preventDefault();
    if (!newHighlightText.trim()) return;

    addSolutionItem(selectedSolutionId, newHighlightText.trim());
    setNewHighlightText('');
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    updateSettings(tempSettings);
    setSettingsSuccess(true);
    setTimeout(() => setSettingsSuccess(false), 3000);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result;
        if (typeof content === 'string') {
          importData(content);
        }
      };
      reader.readAsText(file);
    }
  };

  const filteredPartners = partners.filter(p => 
    p.name.toLowerCase().includes(partnerSearch.toLowerCase()) ||
    p.category.toLowerCase().includes(partnerSearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-[#071738] border border-white/15 shadow-2xl overflow-hidden text-slate-200">
        
        {/* Top Header */}
        <div className="px-5 py-4 sm:px-8 sm:py-5 border-b border-white/10 flex items-center justify-between bg-[#040E26]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/30 flex items-center justify-center text-[#FF6A00]">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Painel Administrativo</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  F&G TI
                </span>
              </h3>
              <p className="text-xs text-slate-400 hidden sm:block">
                Edite produtos, imagens de fabricantes e textos com atualização em tempo real
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={logout}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
              >
                Sair
              </button>
            )}
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* Login Screen */
          <div className="p-8 sm:p-14 text-center max-w-md mx-auto space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
              <Lock className="w-7 h-7" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl font-bold text-white">Área Restrita da Empresa</h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Digite a senha de administrador para gerenciar o catálogo e as informações do website.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                required
                placeholder="Senha de acesso (Padrão: admin ou fgti2026)"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#040E26] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00]"
              />

              {authError && (
                <p className="text-xs text-red-400 font-medium">
                  Senha incorreta. Tente "admin" ou "fgti2026".
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-[#FF6A00] hover:bg-[#E55A00] transition-all cursor-pointer shadow-lg shadow-[#FF6A00]/20"
              >
                Entrar no Painel
              </button>
            </form>
          </div>
        ) : (
          /* Dashboard Tabs & Panels */
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            
            {/* Tabs Bar */}
            <div className="flex items-center gap-2 px-5 sm:px-8 py-3 bg-[#040E26]/60 border-b border-white/[0.08] overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('partners')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  activeTab === 'partners' 
                    ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Fabricantes & Produtos ({partners.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('solutions')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  activeTab === 'solutions' 
                    ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Pilares de Soluções</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  activeTab === 'settings' 
                    ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Contatos & Textos</span>
              </button>

              <button
                onClick={() => setActiveTab('backup')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  activeTab === 'backup' 
                    ? 'bg-[#FF6A00] text-white shadow-md shadow-[#FF6A00]/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Backup & Banco de Dados</span>
              </button>
            </div>

            {/* Scrollable Tab Content Container */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8">
              
              {/* TAB 1: PARTNERS WITH IMAGE UPLOAD */}
              {activeTab === 'partners' && (
                <div className="space-y-8">
                  
                  {/* Add New Partner Form with Image */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#040E26] border border-white/10 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Plus className="w-4 h-4 text-[#FF6A00]" />
                        <span>Cadastrar Novo Fabricante / Produto com Imagem</span>
                      </h4>
                      {partnerSuccess && (
                        <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Cadastrado com sucesso!</span>
                        </span>
                      )}
                    </div>

                    <form onSubmit={handleAddPartner} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-end">
                        <div className="sm:col-span-4 space-y-1">
                          <label className="text-[11px] font-bold text-slate-300 uppercase">Nome da Marca / Produto *</label>
                          <input
                            type="text"
                            required
                            placeholder="Ex: Cisco, Fortinet, Asus..."
                            value={newPartner.name}
                            onChange={(e) => setNewPartner({ ...newPartner, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#071738] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6A00]"
                          />
                        </div>

                        <div className="sm:col-span-3 space-y-1">
                          <label className="text-[11px] font-bold text-slate-300 uppercase">Categoria</label>
                          <select
                            value={newPartner.category}
                            onChange={(e) => setNewPartner({ ...newPartner, category: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#071738] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6A00]"
                          >
                            {categories.filter(c => c.id !== 'all').map(c => (
                              <option key={c.id} value={c.id}>{c.name}</option>
                            ))}
                          </select>
                        </div>

                        <div className="sm:col-span-3 space-y-1">
                          <label className="text-[11px] font-bold text-slate-300 uppercase">Selo / Badge</label>
                          <input
                            type="text"
                            placeholder="Ex: Homologado, Oficial..."
                            value={newPartner.badge}
                            onChange={(e) => setNewPartner({ ...newPartner, badge: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#071738] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6A00]"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <button
                            type="submit"
                            className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#FF6A00] hover:bg-[#E55A00] transition-all cursor-pointer shadow-md shadow-[#FF6A00]/20 flex items-center justify-center gap-1.5"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Adicionar</span>
                          </button>
                        </div>

                        <div className="sm:col-span-12 space-y-1">
                          <label className="text-[11px] font-bold text-slate-300 uppercase">Descrição dos Equipamentos / Soluções</label>
                          <input
                            type="text"
                            placeholder="Ex: Switches gerenciáveis, roteadores de alta capacidade e firewalls corporativos."
                            value={newPartner.desc}
                            onChange={(e) => setNewPartner({ ...newPartner, desc: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#071738] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6A00]"
                          />
                        </div>
                      </div>

                      {/* Image Upload Row */}
                      <div className="p-3.5 rounded-xl bg-[#071738] border border-white/[0.08] flex flex-col sm:flex-row items-center gap-4">
                        <div className="flex-1 space-y-1 w-full">
                          <label className="text-[11px] font-bold text-slate-300 uppercase flex items-center gap-1.5">
                            <ImageIcon className="w-3.5 h-3.5 text-[#FF6A00]" />
                            <span>Logo / Imagem do Fabricante ou Produto (Opcional)</span>
                          </label>
                          
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                            <label className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-[#040E26] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:border-[#FF6A00] cursor-pointer transition-all">
                              <Upload className="w-3.5 h-3.5 text-[#FF6A00]" />
                              <span>Escolher Foto do Computador</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                              />
                            </label>

                            <span className="text-[11px] text-slate-500 text-center sm:text-left">ou cole uma URL de imagem:</span>

                            <input
                              type="url"
                              placeholder="https://exemplo.com/logo.png"
                              value={newPartner.image}
                              onChange={(e) => setNewPartner({ ...newPartner, image: e.target.value })}
                              className="flex-1 px-3 py-1.5 rounded-xl bg-[#040E26] border border-white/10 text-xs text-white focus:outline-none focus:border-[#FF6A00]"
                            />
                          </div>
                        </div>

                        {/* Image Preview */}
                        {newPartner.image && (
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="w-12 h-12 rounded-xl bg-[#040E26] border border-white/15 p-1 flex items-center justify-center overflow-hidden">
                              <img src={newPartner.image} alt="Preview" className="w-full h-full object-contain" />
                            </div>
                            <button
                              type="button"
                              onClick={() => setNewPartner({ ...newPartner, image: '' })}
                              className="text-xs text-red-400 hover:underline cursor-pointer"
                            >
                              Remover
                            </button>
                          </div>
                        )}
                      </div>
                    </form>
                  </div>

                  {/* List Existing Partners */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <h4 className="text-sm font-bold text-white">
                        Fabricantes Cadastrados ({filteredPartners.length})
                      </h4>
                      <div className="relative w-full sm:w-64">
                        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Filtrar marcas..."
                          value={partnerSearch}
                          onChange={(e) => setPartnerSearch(e.target.value)}
                          className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-[#040E26] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF6A00]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[380px] overflow-y-auto pr-1">
                      {filteredPartners.map((p, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-[#040E26] border border-white/[0.08] flex items-start justify-between gap-2 group"
                        >
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-2">
                              {p.image && (
                                <div className="w-6 h-6 rounded bg-[#071738] p-0.5 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                                  <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                                </div>
                              )}
                              <span className="font-bold text-sm text-white truncate">{p.name}</span>
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10 shrink-0">
                                {p.badge}
                              </span>
                            </div>
                            <span className="text-[10px] text-blue-400 font-medium uppercase block">
                              {p.category}
                            </span>
                            <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                              {p.desc}
                            </p>
                          </div>

                          <button
                            onClick={() => deletePartner(p.name)}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer shrink-0"
                            title="Excluir Fabricante"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2: SOLUTIONS & PRODUCTS HIGHLIGHTS */}
              {activeTab === 'solutions' && (
                <div className="space-y-6">
                  
                  {/* Select Pillar */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 uppercase">Selecione o Pilar para Editar</label>
                    <div className="flex flex-wrap gap-2">
                      {solutions.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setSelectedSolutionId(s.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors ${
                            selectedSolutionId === s.id
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-[#040E26] text-slate-400 hover:text-white border border-white/10'
                          }`}
                        >
                          {s.title.split('&')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Add New Item to Selected Solution */}
                  {(() => {
                    const currentSol = solutions.find(s => s.id === selectedSolutionId) || solutions[0];
                    return (
                      <div className="p-5 rounded-2xl bg-[#040E26] border border-white/10 space-y-4">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div>
                            <h4 className="text-sm font-bold text-white">{currentSol.title}</h4>
                            <p className="text-xs text-slate-400">{currentSol.subtitle}</p>
                          </div>
                        </div>

                        {/* Add new highlight item */}
                        <form onSubmit={handleAddHighlight} className="flex gap-2">
                          <input
                            type="text"
                            required
                            placeholder="Ex: Novos coletores industriais com leitor 2D de longo alcance..."
                            value={newHighlightText}
                            onChange={(e) => setNewHighlightText(e.target.value)}
                            className="flex-1 px-3.5 py-2 rounded-xl bg-[#071738] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6A00]"
                          />
                          <button
                            type="submit"
                            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#FF6A00] hover:bg-[#E55A00] cursor-pointer flex items-center gap-1.5 shrink-0"
                          >
                            <Plus className="w-4 h-4" />
                            <span>Adicionar Item</span>
                          </button>
                        </form>

                        {/* Existing Highlights */}
                        <div className="space-y-2 pt-2">
                          <p className="text-xs font-bold text-slate-300 uppercase">Equipamentos Atualmente em Destaque neste Pilar:</p>
                          <div className="space-y-1.5">
                            {currentSol.highlights.map((h, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between p-2.5 rounded-lg bg-[#071738] border border-white/[0.06] text-xs text-slate-300"
                              >
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                                  <span>{h}</span>
                                </div>
                                <button
                                  onClick={() => removeSolutionItem(selectedSolutionId, idx)}
                                  className="text-slate-500 hover:text-red-400 p-1 cursor-pointer"
                                  title="Remover item"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                </div>
              )}

              {/* TAB 3: CONTACTS & SITE TEXTS */}
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white">Editar Dados de Contato e Textos Institucionais</h4>
                    {settingsSuccess && (
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Configurações salvas no site!</span>
                      </span>
                    )}
                  </div>

                  <form onSubmit={handleSaveSettings} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-300 uppercase">WhatsApp 1 (Dígitos com DDD)</label>
                        <input
                          type="text"
                          required
                          value={tempSettings.phone || ''}
                          onChange={(e) => setTempSettings({ ...tempSettings, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#040E26] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6A00]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-300 uppercase">Texto Visível WhatsApp 1</label>
                        <input
                          type="text"
                          required
                          value={tempSettings.displayPhone || ''}
                          onChange={(e) => setTempSettings({ ...tempSettings, displayPhone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#040E26] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6A00]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-300 uppercase">WhatsApp 2 (Dígitos com DDD)</label>
                        <input
                          type="text"
                          value={tempSettings.secondaryPhone || ''}
                          onChange={(e) => setTempSettings({ ...tempSettings, secondaryPhone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#040E26] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6A00]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-300 uppercase">Texto Visível WhatsApp 2</label>
                        <input
                          type="text"
                          value={tempSettings.secondaryDisplayPhone || ''}
                          onChange={(e) => setTempSettings({ ...tempSettings, secondaryDisplayPhone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#040E26] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6A00]"
                        />
                      </div>

                      <div className="sm:col-span-2 space-y-1">
                        <label className="text-xs font-bold text-slate-300 uppercase">Slogan Oficial da Empresa</label>
                        <input
                          type="text"
                          required
                          value={tempSettings.tagline}
                          onChange={(e) => setTempSettings({ ...tempSettings, tagline: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#040E26] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6A00]"
                        />
                      </div>

                      <div className="sm:col-span-2 space-y-1">
                        <label className="text-xs font-bold text-slate-300 uppercase">Subtítulo do Hero</label>
                        <textarea
                          rows={3}
                          value={tempSettings.heroSubtitle}
                          onChange={(e) => setTempSettings({ ...tempSettings, heroSubtitle: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#040E26] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6A00]"
                        />
                      </div>

                      <div className="sm:col-span-2 space-y-1">
                        <label className="text-xs font-bold text-slate-300 uppercase">Link Oficial do LinkedIn</label>
                        <input
                          type="url"
                          value={tempSettings.linkedinUrl}
                          onChange={(e) => setTempSettings({ ...tempSettings, linkedinUrl: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#040E26] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#FF6A00]"
                        />
                      </div>

                    </div>

                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#FF6A00] hover:bg-[#E55A00] cursor-pointer shadow-lg shadow-[#FF6A00]/20 flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      <span>Salvar Alterações</span>
                    </button>
                  </form>

                </div>
              )}

              {/* TAB 4: BACKUP & DATABASE EXPLANATION */}
              {activeTab === 'backup' && (
                <div className="space-y-6">
                  
                  <div className="p-5 rounded-2xl bg-[#040E26] border border-white/10 space-y-4">
                    <h4 className="text-sm font-bold text-white">Como Funciona o Armazenamento Atual:</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Atualmente, as alterações feitas neste painel são salvas no <strong>armazenamento local (LocalStorage)</strong> do seu navegador de forma instantânea.
                    </p>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      💡 <strong>Deseja sincronizar com um Banco de Dados na Nuvem (ex: Supabase)?</strong> Se você quiser que as alterações feitas aqui apareçam automaticamente para todos os visitantes do mundo sem precisar atualizar código no GitHub, podemos plugar um banco de dados Supabase gratuito!
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        onClick={exportData}
                        className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 cursor-pointer flex items-center gap-2 shadow-md"
                      >
                        <Download className="w-4 h-4" />
                        <span>Baixar Backup Completo (.JSON)</span>
                      </button>

                      <label className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-200 bg-[#071738] border border-white/10 hover:text-white hover:bg-white/5 cursor-pointer flex items-center gap-2">
                        <Upload className="w-4 h-4 text-[#FF6A00]" />
                        <span>Restaurar Backup</span>
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-red-950/20 border border-red-900/30 space-y-3">
                    <h4 className="text-sm font-bold text-red-300">Restaurar Dados Originais de Fábrica</h4>
                    <p className="text-xs text-red-200/70 leading-relaxed">
                      Se desejar descartar todas as alterações e voltar ao catálogo original com os 40+ fabricantes da F&G TI:
                    </p>
                    <button
                      onClick={resetToDefaults}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-red-300 bg-red-900/40 hover:bg-red-800/60 border border-red-800/50 cursor-pointer flex items-center gap-2"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Restaurar Padrões Originais</span>
                    </button>
                  </div>

                </div>
              )}

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
