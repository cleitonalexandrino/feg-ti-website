export const partnerCategories = [
  { id: 'all', name: 'Todos os Fabricantes' },
  { id: 'devices', name: 'Devices', count: 5 },
  { id: 'automacao', name: 'Automação', count: 16 },
  { id: 'datacenter', name: 'Data Center & Cybersec', count: 6 },
  { id: 'energia', name: 'Energia & Conectividade', count: 10 },
  { id: 'print', name: 'Print Solutions', count: 9 },
  { id: 'colaboracao', name: 'Imagem e Colaboração', count: 9 },
  { id: 'digitais', name: 'Soluções Digitais', count: 6 }
];

export const allPartners = [
  // Devices
  { name: 'Lenovo', category: 'devices', badge: 'Corporativo', desc: 'ThinkPad, ThinkCentre e Workstations de alta performance' },
  { name: 'Samsung Business', category: 'devices', badge: 'Galaxy Enterprise', desc: 'Smartphones robustos, tablets e displays B2B' },
  { name: 'Acer', category: 'devices', badge: 'Comercial', desc: 'Notebooks corporativos, monitores e all-in-ones' },
  { name: 'Motorola', category: 'devices', badge: 'Enterprise Mobility', desc: 'Smartphones corporativos e soluções de produtividade móvel' },
  { name: 'Dell Technologies', category: 'devices', badge: 'Distribuidor Autorizado', desc: 'Laptops Latitude, OptiPlex e Precision Workstations' },

  // Automação
  { name: 'Zebra Technologies', category: 'automacao', badge: 'Destaque Oficial', desc: 'Coletores de dados, impressoras térmicas e leitores 2D omnidirecionais' },
  { name: 'Honeywell', category: 'automacao', badge: 'Industrial', desc: 'Scanners industriais, coletores de dados e automação' },
  { name: 'Datalogic', category: 'automacao', badge: 'Especialista', desc: 'Leitores de alta precisão e sensores industriais' },
  { name: 'Dimep Sistemas', category: 'automacao', badge: 'Ponto & Acesso', desc: 'Relógios de ponto biométricos e controle de acesso' },
  { name: 'Sato', category: 'automacao', badge: 'Auto-ID', desc: 'Impressoras de código de barras e etiquetas RFID' },
  { name: 'Jetway', category: 'automacao', badge: 'PDV', desc: 'Terminais de ponto de venda e periféricos comerciais' },
  { name: 'Elgin', category: 'automacao', badge: 'Varejo', desc: 'Impressoras não fiscais, gavetas de dinheiro e leitores' },
  { name: 'Gerbo Norky', category: 'automacao', badge: 'Comercial', desc: 'Soluções completas de automação e suprimentos' },
  { name: 'Tanca', category: 'automacao', badge: 'PDV Tech', desc: 'Computadores touch PDV e periféricos de automação' },
  { name: 'Toshiba', category: 'automacao', badge: 'Enterprise POS', desc: 'Sistemas de autoatendimento e faturamento comercial' },
  { name: 'Bematech', category: 'automacao', badge: 'Referência BR', desc: 'Impressoras fiscais, gavetas e leitores para o comércio' },
  { name: 'Epson', category: 'automacao', badge: 'Impressão Fiscal', desc: 'Impressoras de cupom térmicas TM-T20 e soluções de ponto de venda' },
  { name: 'Custom', category: 'automacao', badge: 'Intelligent Solutions', desc: 'Mecanismos de impressão para totens e self-service' },
  { name: 'Gertec', category: 'automacao', badge: 'Meios de Pagamento', desc: 'Terminais POS inteligentes, pinpads e teclados dedicados' },
  { name: 'POSTech', category: 'automacao', badge: 'Hardware Comercial', desc: 'Monitores touchscreen e computadores compactos para PDV' },
  { name: 'Unitech', category: 'automacao', badge: 'Coletores', desc: 'Coletores robustos Android para centros de distribuição' },

  // Data Center & Cybersec
  { name: 'Arista Networks', category: 'datacenter', badge: 'Destaque Oficial', desc: 'Líder em switches Data Center 10G a 800G, IA, Campus Cognitivo e SD-WAN VeloCloud' },
  { name: 'HPE Aruba Networking', category: 'datacenter', badge: 'Destaque Oficial', desc: 'Switches gerenciáveis, Access Points Wi-Fi 6/7 e segurança Zero Trust' },
  { name: 'HPE', category: 'datacenter', badge: 'Enterprise', desc: 'Servidores ProLiant, storages modulares e soluções de nuvem híbrida' },
  { name: 'Dell Technologies', category: 'datacenter', badge: 'Distribuidor Autorizado', desc: 'Servidores PowerEdge, Storages PowerStore e switches de data center' },
  { name: 'Huawei', category: 'datacenter', badge: 'Telecom & Infra', desc: 'Servidores de alto desempenho, storages OceanStor e switches ópticos' },
  { name: 'Hillstone Networks', category: 'datacenter', badge: 'Cybersecurity', desc: 'Next-Generation Firewalls (NGFW) e prevenção contra intrusões' },

  // Energia & Conectividade
  { name: 'APC by Schneider Electric', category: 'energia', badge: 'Líder Mundial', desc: 'No-breaks senoidais Smart-UPS, PDUs de rack e infraestrutura crítica' },
  { name: 'Vertiv', category: 'energia', badge: 'Alta Densidade', desc: 'UPS trifásicos modulares, refrigeração de precisão e racks técnicos' },
  { name: 'SMS Legrand', category: 'energia', badge: 'Nacional', desc: 'No-breaks corporativos, estabilizadores e módulos de baterias' },
  { name: 'Intelbras', category: 'energia', badge: 'Conectividade', desc: 'Switches empresariais, roteadores de alta densidade e no-breaks' },
  { name: 'Ubiquiti', category: 'energia', badge: 'UniFi', desc: 'Switches PoE, gateways de segurança e Access Points de alto tráfego' },
  { name: 'TP-Link', category: 'energia', badge: 'Omada SDN', desc: 'Redes empresariais gerenciadas na nuvem e switches corporativos' },
  { name: 'Huawei eKit', category: 'energia', badge: 'SME Solutions', desc: 'Soluções de conectividade simplificada e roteamento corporativo' },
  { name: 'Delta', category: 'energia', badge: 'Industrial', desc: 'Sistemas de alimentação ininterrupta para missões críticas' },
  { name: 'Mercusys', category: 'energia', badge: 'Redes', desc: 'Roteadores e switches ágeis para pequenos e médios escritórios' },
  { name: 'CSB', category: 'energia', badge: 'Baterias VRLA', desc: 'Baterias seladas de chumbo-ácido de alta durabilidade para no-breaks' },

  // Print Solutions
  { name: 'Epson', category: 'print', badge: 'EcoTank Pro', desc: 'Multifuncionais de alta produtividade, scanners e plotters SureColor' },
  { name: 'Ricoh', category: 'print', badge: 'Distribuidor Autorizado', desc: 'Multifuncionais departamentais A3/A4 de grande volume' },
  { name: 'Xerox', category: 'print', badge: 'Distribuidor Autorizado', desc: 'Sistemas de impressão a laser de alta confiabilidade corporativa' },
  { name: 'Brother', category: 'print', badge: 'At Your Side', desc: 'Impressoras laser monocromáticas e coloridas, rotuladores e scanners' },
  { name: 'HP', category: 'print', badge: 'LaserJet & Office', desc: 'Multifuncionais corporativas com recursos avançados de segurança' },
  { name: 'Creality', category: 'print', badge: 'Impressão 3D', desc: 'Impressoras 3D de precisão para prototipagem rápida e engenharia' },
  { name: 'Roland', category: 'print', badge: 'Grande Formato', desc: 'Plotters de impressão e recorte para comunicação visual e sinalização' },
  { name: 'Kodak Alaris', category: 'print', badge: 'Digitalização', desc: 'Scanners de produção de altíssima velocidade e processamento documental' },
  { name: 'Acco Brands', category: 'print', badge: 'Acabamento', desc: 'Equipamentos de acabamento gráfico, plastificadoras e trituradores' },

  // Imagem e Colaboração
  { name: 'Logitech', category: 'colaboracao', badge: 'Video Collaboration', desc: 'Rally Bar, câmeras MeetUp e salas inteligentes para Teams e Zoom' },
  { name: 'Poly', category: 'colaboracao', badge: 'HP Company', desc: 'Headsets executivos, telefones IP e videoconferência profissional' },
  { name: 'LG Business Solutions', category: 'colaboracao', badge: 'Telas Profissionais', desc: 'Painéis digitais, videowalls e monitores ultra-wide' },
  { name: 'Philips', category: 'colaboracao', badge: 'Displays', desc: 'Monitores profissionais corporativos e telas de sinalização digital' },
  { name: 'AOC', category: 'colaboracao', badge: 'Monitores', desc: 'Monitores ergonômicos corporativos para produtividade no escritório' },
  { name: 'NovaStar', category: 'colaboracao', badge: 'LED Controllers', desc: 'Controladoras de vídeo e processadores de sinal para painéis de LED' },
  { name: 'Dahua', category: 'colaboracao', badge: 'Smart Displays', desc: 'Telas interativas para salas de reunião e treinamentos corporativos' },
  { name: 'Toshiba', category: 'colaboracao', badge: 'Audiovisual', desc: 'Painéis corporativos e soluções visuais para conferências' },
  { name: 'Epson', category: 'colaboracao', badge: 'Projeção Laser', desc: 'Projetores laser interativos para salas de reunião e auditórios' },

  // Soluções Digitais
  { name: 'Microsoft', category: 'digitais', badge: 'Cloud & Office', desc: 'Microsoft 365, Windows 11 Pro, Windows Server e licenças Azure' },
  { name: 'Canonical', category: 'digitais', badge: 'Ubuntu Pro', desc: 'Suporte de nível empresarial e segurança estendida para servidores Linux' },
  { name: 'Avast Business', category: 'digitais', badge: 'Endpoint Protection', desc: 'Proteção contra ransomwares e gerenciamento centralizado de endpoints' },
  { name: 'McAfee', category: 'digitais', badge: 'Cybersecurity', desc: 'Segurança abrangente para estações de trabalho e redes locais' },
  { name: 'Norton', category: 'digitais', badge: 'Segurança', desc: 'Blindagem digital de dispositivos e prevenção de ameaças web' },
  { name: 'TeamViewer', category: 'digitais', badge: 'Suporte Remoto', desc: 'Conectividade remota segura para equipes de TI e helpdesk' }
];
