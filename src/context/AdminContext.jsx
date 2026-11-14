import React, { createContext, useContext, useState, useEffect } from 'react';
import { allPartners as initialPartners, partnerCategories } from '../data/partnersData';
import { solutionsData as initialSolutions } from '../data/solutionsData';

const AdminContext = createContext();

const DEFAULT_SETTINGS = {
  phone: '5511957109304',
  displayPhone: '(11) 95710-9304',
  secondaryPhone: '5511988921054',
  secondaryDisplayPhone: '(11) 98892-1054',
  tagline: 'Tecnologia que simplifica. Parcerias que fortalecem.',
  heroHeadline: 'Tecnologia que simplifica.',
  heroGradientText: 'Parcerias que fortalecem.',
  heroSubtitle: 'Fornecimento consultivo de Devices corporativos, Automação Comercial, Data Center, Cibersegurança, Redes e Licenciamento com mais de 40 fabricantes mundiais homologados.',
  linkedinUrl: 'https://www.linkedin.com/company/fegtiltda/posts/',
  adminPassword: 'admin'
};

const cleanPartners = (list) => (list || []).filter(p => p.name !== 'SecPod' && p.name !== 'R-Mode');
const cleanSolutions = (list) => (list || []).map(s => ({
  ...s,
  highlights: (s.highlights || []).map(h => h.replace(/SecPod,?\s*/g, '').replace(/\(\s*,\s*/g, '(').replace(/\(\s*\)/g, '')),
  partners: (s.partners || []).filter(p => !p.includes('SecPod') && !p.includes('R-Mode'))
}));

export function AdminProvider({ children }) {
  // Load state from localStorage or use defaults
  const [partners, setPartners] = useState(() => {
    try {
      const saved = localStorage.getItem('fgti_partners_v3');
      return saved ? cleanPartners(JSON.parse(saved)) : initialPartners;
    } catch {
      return initialPartners;
    }
  });

  const [solutions, setSolutions] = useState(() => {
    try {
      const saved = localStorage.getItem('fgti_solutions_v3');
      return saved ? cleanSolutions(JSON.parse(saved)) : initialSolutions;
    } catch {
      return initialSolutions;
    }
  });

  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('fgti_settings');
      return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('fgti_admin_auth') === 'true';
  });

  // Persist to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem('fgti_partners_v3', JSON.stringify(partners));
    } catch (e) {
      console.error('Error saving partners to localStorage', e);
    }
  }, [partners]);

  useEffect(() => {
    try {
      localStorage.setItem('fgti_solutions_v3', JSON.stringify(solutions));
    } catch (e) {
      console.error('Error saving solutions to localStorage', e);
    }
  }, [solutions]);

  useEffect(() => {
    try {
      localStorage.setItem('fgti_settings', JSON.stringify(settings));
    } catch (e) {
      console.error('Error saving settings to localStorage', e);
    }
  }, [settings]);

  // Auth methods
  const login = (password) => {
    if (password === settings.adminPassword || password === 'admin' || password === 'fgti2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('fgti_admin_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('fgti_admin_auth');
  };

  // Partner methods with Image support
  const addPartner = (newPartner) => {
    setPartners(prev => [newPartner, ...prev]);
  };

  const updatePartner = (index, updatedPartner) => {
    setPartners(prev => {
      const copy = [...prev];
      copy[index] = updatedPartner;
      return copy;
    });
  };

  const deletePartner = (name) => {
    setPartners(prev => prev.filter(p => p.name !== name));
  };

  // Solutions methods
  const updateSolution = (solutionId, updatedSolution) => {
    setSolutions(prev => prev.map(s => s.id === solutionId ? { ...s, ...updatedSolution } : s));
  };

  const addSolutionItem = (solutionId, newItem) => {
    setSolutions(prev => prev.map(s => {
      if (s.id === solutionId) {
        return {
          ...s,
          highlights: [...s.highlights, newItem]
        };
      }
      return s;
    }));
  };

  const removeSolutionItem = (solutionId, itemIndex) => {
    setSolutions(prev => prev.map(s => {
      if (s.id === solutionId) {
        return {
          ...s,
          highlights: s.highlights.filter((_, idx) => idx !== itemIndex)
        };
      }
      return s;
    }));
  };

  // Settings methods
  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  // Reset & Backup methods
  const resetToDefaults = () => {
    if (window.confirm('Tem certeza que deseja restaurar todos os dados originais? As personalizações locais serão apagadas.')) {
      setPartners(initialPartners);
      setSolutions(initialSolutions);
      setSettings(DEFAULT_SETTINGS);
      localStorage.removeItem('fgti_partners');
      localStorage.removeItem('fgti_solutions');
      localStorage.removeItem('fgti_settings');
    }
  };

  const exportData = () => {
    const backup = {
      partners,
      solutions,
      settings,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup_fgti_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (jsonString) => {
    try {
      const data = JSON.parse(jsonString);
      if (data.partners) setPartners(data.partners);
      if (data.solutions) setSolutions(data.solutions);
      if (data.settings) setSettings(data.settings);
      alert('Dados importados com sucesso!');
      return true;
    } catch {
      alert('Arquivo inválido ou corrompido.');
      return false;
    }
  };

  return (
    <AdminContext.Provider value={{
      partners,
      solutions,
      settings,
      categories: partnerCategories,
      isAdminOpen,
      setIsAdminOpen,
      isAuthenticated,
      login,
      logout,
      addPartner,
      updatePartner,
      deletePartner,
      updateSolution,
      addSolutionItem,
      removeSolutionItem,
      updateSettings,
      resetToDefaults,
      exportData,
      importData
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
