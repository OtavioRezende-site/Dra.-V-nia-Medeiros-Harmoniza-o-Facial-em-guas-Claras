export interface SiteConfig {
  environment: "preview" | "production";
  productionOrigin: string | null;
  basePath: string;
  brandPaletteStatus: string;
  brandColorsFromInstagram: boolean;
  colorWeights: {
    base: number;
    secondary: number;
    accent: number;
  };
  normalizedPercentages: {
    base: number;
    secondary: number;
    accent: number;
  };
  indexable: boolean;
  resultsEnabled: boolean;
  testimonialsEnabled: boolean;
  videosEnabled: boolean;
  formEnabled: boolean;
  analyticsEnabled: boolean;
  calendarEnabled: boolean;
  crmEnabled: boolean;
  faviconStatus: string;
  professionalReviewApproved: boolean;
  privacyImplementationReviewed: boolean;
  exportOnlyApprovedAssets: boolean;
}

export const siteConfig: SiteConfig = {
  environment: "preview",
  productionOrigin: null,
  basePath: "/",
  brandPaletteStatus: "pending_instagram_verification",
  brandColorsFromInstagram: false,
  colorWeights: {
    base: 60,
    secondary: 40,
    accent: 10,
  },
  normalizedPercentages: {
    base: 54.55,
    secondary: 36.36,
    accent: 9.09,
  },
  indexable: false,
  resultsEnabled: true,
  testimonialsEnabled: false,
  videosEnabled: false,
  formEnabled: false,
  analyticsEnabled: false,
  calendarEnabled: false,
  crmEnabled: false,
  faviconStatus: "provisional_vector_vm",
  professionalReviewApproved: false,
  privacyImplementationReviewed: false,
  exportOnlyApprovedAssets: true,
};

export const entidade = {
  displayName: "Dra. Vânia Medeiros",
  siteBrand: "Dra. Vânia Medeiros",
  language: "pt-BR",
  identityFocus: "pessoa_profissional",
  professionPublished: "Dentista",
  professionVerified: false,
  registrationCandidate: {
    council: "CRO-DF",
    number: "14743",
    verified: false,
    source: "https://lorena.ig.com.br/categoria/beleza/dra-vania-medeiros-harmonizacao-facial",
  },
  instagram: "https://www.instagram.com/dravaniamedeiros/",
  address: {
    venue: "Águas Claras Shopping",
    street: "Av. das Araucárias",
    number: "1835",
    floor: "5º andar",
    room: "566",
    district: "Águas Claras",
    city: "Brasília",
    state: "DF",
    postalCode: "71936-250",
    country: "BR",
    source: "informado_pelo_usuario",
    ownershipOfVenueClaimed: false,
  },
  experienceYears: null,
  education: [],
  credentials: [],
  speakerRole: null,
  testimonials: [],
  historicalClaimsForVerification: [
    {
      claim: "14 anos em estética e 8 anos em fios em 10/12/2025",
      publish: false,
    },
    {
      claim: "Speaker Webpharma",
      publish: false,
    },
  ],
  excludedClinicBrand: "Amazing HOF",
  notes: "Não transferir marca, história, CNPJ, equipe ou avaliações da clínica para a profissional.",
};

export const contatoData = {
  whatsapp: {
    e164: "+5561996749336",
    display: "(61) 99674-9336",
    source: "destino_dos_botoes_da_bio_e_dominio_proprio",
    confirmedByOwner: false,
  },
  conflictingDirectoryPhone: {
    display: "(61) 99979-4169",
    useOnWebsite: false,
  },
  messages: {
    geral: "Olá, Dra. Vânia! Vim pelo site e gostaria de informações sobre a avaliação.",
    fios: "Olá! Vim pelo site da Dra. Vânia e gostaria de informações sobre a avaliação para fios de PDO/PLLA.",
    fullFace: "Olá! Vim pelo site da Dra. Vânia e gostaria de conversar sobre a avaliação para Full Face.",
    lipoPapada: "Olá! Vim pelo site da Dra. Vânia e gostaria de informações sobre a avaliação para Lipo de Papada HD.",
    preenchimento: "Olá! Vim pelo site da Dra. Vânia e gostaria de conversar sobre avaliação para preenchimento facial.",
  },
  links: {
    geral:
      "https://wa.me/5561996749336?text=Ol%C3%A1%2C%20Dra.%20V%C3%A2nia%21%20Vim%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20avalia%C3%A7%C3%A3o.",
    fios:
      "https://wa.me/5561996749336?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Dra.%20V%C3%A2nia%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20avalia%C3%A7%C3%A3o%20para%20fios%20de%20PDO/PLLA.",
    fullFace:
      "https://wa.me/5561996749336?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Dra.%20V%C3%A2nia%20e%20gostaria%20de%20conversar%20sobre%20a%20avalia%C3%A7%C3%A3o%20para%20Full%20Face.",
    lipoPapada:
      "https://wa.me/5561996749336?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Dra.%20V%C3%A2nia%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20avalia%C3%A7%C3%A3o%20para%20Lipo%20de%20Papada%20HD.",
    preenchimento:
      "https://wa.me/5561996749336?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Dra.%20V%C3%A2nia%20e%20gostaria%20de%20conversar%20sobre%20avalia%C3%A7%C3%A3o%20para%20preenchimento%20facial.",
  },
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=%C3%81guas%20Claras%20Shopping%2C%20Av.%20das%20Arauc%C3%A1rias%2C%201835%2C%205%C2%BA%20andar%2C%20sala%20566%2C%20%C3%81guas%20Claras%2C%20Bras%C3%ADlia%20-%20DF%2C%2071936-250",
  instagram: "https://www.instagram.com/dravaniamedeiros/",
  email: null,
  openingHours: null,
  parking: null,
  accessibility: null,
};

export interface RouteMeta {
  path: string;
  navLabel: string;
  spec: string;
  title: string;
  description: string | null;
  publicationCondition: string;
  indexableInPreview: boolean;
}

export const rotasData: RouteMeta[] = [
  {
    path: "/",
    navLabel: "Início",
    spec: "paginas/01_INICIO.md",
    title: "Dra. Vânia Medeiros | Harmonização Facial em Águas Claras",
    description:
      "Conheça a Dra. Vânia Medeiros, os tratamentos apresentados e as informações para conversar sobre uma avaliação em Águas Claras, Brasília.",
    publicationCondition: "public_release",
    indexableInPreview: false,
  },
  {
    path: "/sobre/",
    navLabel: "Sobre",
    spec: "paginas/02_SOBRE.md",
    title: "Sobre a Dra. Vânia Medeiros | Águas Claras, Brasília",
    description:
      "Conheça a apresentação profissional da Dra. Vânia Medeiros e os canais para conversar sobre seu atendimento em harmonização facial.",
    publicationCondition: "public_release",
    indexableInPreview: false,
  },
  {
    path: "/tratamentos/",
    navLabel: "Tratamentos",
    spec: "paginas/03_TRATAMENTOS.md",
    title: "Tratamentos | Dra. Vânia Medeiros em Águas Claras",
    description:
      "Explore Fios de PDO/PLLA, Full Face, Lipo de Papada HD e preenchimento facial e saiba como iniciar uma conversa sobre avaliação.",
    publicationCondition: "public_release",
    indexableInPreview: false,
  },
  {
    path: "/tratamentos/fios-de-pdo-plla/",
    navLabel: "Fios de PDO/PLLA",
    spec: "paginas/04_FIOS.md",
    title: "Fios de PDO/PLLA em Águas Claras | Dra. Vânia Medeiros",
    description:
      "Conheça essa frente de atendimento da Dra. Vânia e prepare perguntas sobre avaliação, planejamento e acompanhamento com fios de PDO/PLLA.",
    publicationCondition: "public_release",
    indexableInPreview: false,
  },
  {
    path: "/tratamentos/full-face/",
    navLabel: "Full Face",
    spec: "paginas/05_FULL_FACE.md",
    title: "Full Face em Águas Claras | Dra. Vânia Medeiros",
    description:
      "Converse sobre Full Face com a Dra. Vânia Medeiros e entenda como preparar seus objetivos e perguntas para uma avaliação individual.",
    publicationCondition: "public_release",
    indexableInPreview: false,
  },
  {
    path: "/tratamentos/lipo-de-papada-hd/",
    navLabel: "Lipo de Papada HD",
    spec: "paginas/06_LIPO_PAPADA.md",
    title: "Lipo de Papada HD em Águas Claras | Dra. Vânia Medeiros",
    description:
      "Veja informações iniciais sobre a Lipo de Papada HD apresentada pela Dra. Vânia e converse sobre a avaliação em Águas Claras.",
    publicationCondition: "public_release",
    indexableInPreview: false,
  },
  {
    path: "/tratamentos/preenchimento-facial/",
    navLabel: "Preenchimento facial",
    spec: "paginas/07_PREENCHIMENTO.md",
    title: "Preenchimento Facial em Águas Claras | Dra. Vânia Medeiros",
    description:
      "Conheça essa frente de atendimento e converse com a Dra. Vânia sobre avaliação, objetivos e planejamento de preenchimento facial.",
    publicationCondition: "public_release",
    indexableInPreview: false,
  },
  {
    path: "/experiencia-de-atendimento/",
    navLabel: "Atendimento",
    spec: "paginas/08_EXPERIENCIA.md",
    title: "Prepare sua avaliação | Dra. Vânia Medeiros",
    description:
      "Organize suas dúvidas, conheça os canais de contato e veja o endereço de atendimento da Dra. Vânia Medeiros em Águas Claras.",
    publicationCondition: "public_release",
    indexableInPreview: false,
  },
  {
    path: "/resultados/",
    navLabel: "Resultados",
    spec: "paginas/09_RESULTADOS.md",
    title: "Resultados e registros | Dra. Vânia Medeiros",
    description:
      "Conheça registros autorizados de casos acompanhados pela Dra. Vânia, com contexto individual e informações sobre cada publicação.",
    publicationCondition: "resultsEnabled && approvedCases.length > 0",
    indexableInPreview: false,
  },
  {
    path: "/perguntas-frequentes/",
    navLabel: "Dúvidas",
    spec: "paginas/10_PERGUNTAS_FREQUENTES.md",
    title: "Dúvidas sobre atendimento | Dra. Vânia Medeiros",
    description:
      "Veja respostas sobre contato, localização e preparação para uma avaliação com a Dra. Vânia Medeiros em Águas Claras.",
    publicationCondition: "public_release",
    indexableInPreview: false,
  },
  {
    path: "/contato/",
    navLabel: "Contato",
    spec: "paginas/11_CONTATO.md",
    title: "Contato e localização | Dra. Vânia Medeiros em Águas Claras",
    description:
      "Fale com o atendimento da Dra. Vânia pelo WhatsApp e consulte o endereço no Águas Claras Shopping, 5º andar, sala 566, Brasília.",
    publicationCondition: "public_release",
    indexableInPreview: false,
  },
  {
    path: "/privacidade/",
    navLabel: "Privacidade",
    spec: "paginas/12_PRIVACIDADE.md",
    title: "Privacidade | Dra. Vânia Medeiros",
    description:
      "Saiba como funcionam os contatos e os serviços externos disponíveis neste site.",
    publicationCondition: "public_release",
    indexableInPreview: false,
  },
  {
    path: "/404.html",
    navLabel: "Página não encontrada",
    spec: "paginas/13_ERRO_404.md",
    title: "Página não encontrada | Dra. Vânia Medeiros",
    description: null,
    publicationCondition: "never_in_sitemap",
    indexableInPreview: false,
  },
];

export interface CasoClinico {
  id: string;
  title: string;
  category: "Full Face" | "Fios de PDO" | "Lipo de Papada" | "Preenchimento";
  image: string;
  description: string;
  notes: string;
}

export const casosClinicos: CasoClinico[] = [
  {
    id: "caso-27",
    title: "Harmonização e Contorno Facial",
    category: "Full Face",
    image: "/midias/casos/caso-27.jpg",
    description:
      "Alinhamento das proporções faciais, definição de contorno e harmonização das linhas do terço médio e inferior.",
    notes:
      "Registro facial frontal demonstrando a suavização de linhas e realce do contorno com naturalidade.",
  },
  {
    id: "caso-28",
    title: "Rejuvenescimento e Sustentação",
    category: "Fios de PDO",
    image: "/midias/casos/caso-28.jpg",
    description:
      "Estímulo de colágeno e sustentação tecidual com fios, proporcionando melhora da firmeza e definição.",
    notes:
      "Melhora evidente na firmeza da pele e no reposicionamento dos tecidos da face.",
  },
  {
    id: "caso-29",
    title: "Perfilometria e Ângulo Mandibular",
    category: "Preenchimento",
    image: "/midias/casos/caso-29.jpg",
    description:
      "Projeção sutil e estruturação do ângulo mandibular e queixo em vista de três quartos.",
    notes:
      "Harmonização de perfil trazendo elegância e proporção balanceada entre queixo e mandíbula.",
  },
  {
    id: "caso-30",
    title: "Harmonização Masculina",
    category: "Full Face",
    image: "/midias/casos/caso-30.jpg",
    description:
      "Estruturação dos traços mantendo a identidade e masculinidade, com definição de mandíbula e queixo.",
    notes:
      "Planejamento focado em reforçar a angulação natural sem perder a sutileza.",
  },
  {
    id: "caso-31",
    title: "Simetria e Equilíbrio Facial",
    category: "Preenchimento",
    image: "/midias/casos/caso-31.png",
    description:
      "Realce da luminosidade e proporção dos lábios e maçãs do rosto com preenchedores de alta biocompatibilidade.",
    notes:
      "Resultado focado na restauração de volumes e valorização da beleza individual.",
  },
  {
    id: "caso-32",
    title: "Definição de Linhas e Contorno",
    category: "Full Face",
    image: "/midias/casos/caso-32.jpg",
    description:
      "Tratamento integrado para suavizar sinais do tempo e redefinir o arco mandibular.",
    notes:
      "Harmonia global com aspecto descansado e rejuvenescido.",
  },
  {
    id: "caso-34",
    title: "Contorno Submentual e Papada",
    category: "Lipo de Papada",
    image: "/midias/casos/caso-34.jpg",
    description:
      "Redução da gordura localizada abaixo do queixo e definição da linha da mandíbula.",
    notes:
      "Acentuação do ângulo cervicofacial e contorno limpo da região cervical.",
  },
  {
    id: "caso-35",
    title: "Estruturação Cervical e Perfil",
    category: "Lipo de Papada",
    image: "/midias/casos/caso-35.jpg",
    description:
      "Abordagem para redefinição do perfil e eliminação do excesso submentual.",
    notes:
      "Perfil mais delineado e harmônico respeitando as características anatômicas.",
  },
  {
    id: "caso-36",
    title: "Sustentação e Linha Mandibular",
    category: "Fios de PDO",
    image: "/midias/casos/caso-36.jpg",
    description:
      "Tração delicada e bioestímulo na região lateral da face e ângulo da mandíbula.",
    notes: "Traços mais nítidos e melhora da qualidade da pele.",
  },
  {
    id: "caso-23",
    title: "Transformação e Redefinição Global",
    category: "Full Face",
    image: "/midias/casos/caso-23.png",
    description:
      "Planejamento global combinando sustentação, contorno e equilíbrio de volumes.",
    notes:
      "Harmonização completa com preservação da identidade única da paciente.",
  },
  {
    id: "caso-12",
    title: "Rejuvenescimento Facial Integrado",
    category: "Full Face",
    image: "/midias/casos/caso-12.png",
    description:
      "Atendimento focado em restaurar a firmeza e o viço natural de forma equilibrada.",
    notes:
      "Planejamento personalizado para devolver o suporte das estruturas faciais.",
  },
  {
    id: "caso-13",
    title: "Harmonia de Terço Inferior",
    category: "Preenchimento",
    image: "/midias/casos/caso-13.png",
    description:
      "Projeção e alinhamento do contorno inferior em vista frontal e perfil.",
    notes:
      "Linha de mandíbula bem desenhada e integrada às proporções do rosto.",
  },
];

