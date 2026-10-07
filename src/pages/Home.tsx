import { useState, useEffect } from "react";
import { contatoData, casosClinicos, CasoClinico } from "../data/siteData";
import { getAssetUrl } from "../utils/asset";
import {
  ChevronDown,
  ArrowRight,
  MapPin,
  ZoomIn,
  X,
} from "lucide-react";
import { ClinicalJourney } from "../components/ClinicalJourney";
import { FacialLayersExplainer } from "../components/FacialLayersExplainer";

interface HomeProps {
  navigate: (path: string) => void;
}

export function Home({ navigate }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeModalCase, setActiveModalCase] = useState<CasoClinico | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalCase(null);
      }
    };
    if (activeModalCase) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalCase]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Como funciona a primeira consulta de avaliação?",
      a: "A consulta é um momento de escuta e diagnóstico. A Dra. Vânia analisa detalhadamente sua estrutura óssea, tônus muscular e proporções faciais, esclarecendo todas as suas dúvidas antes de apresentar um plano de cuidado personalizado.",
    },
    {
      q: "O procedimento dói? Como é o conforto clínico?",
      a: "Priorizamos o seu conforto absoluto. Utilizamos anestésicos tópicos potentes e bloqueios locais delicados, além de cânulas de ponta arredondada que tornam as aplicações praticamente indolores e seguras.",
    },
    {
      q: "Quanto tempo dura a recuperação? Posso voltar ao trabalho?",
      a: "A maioria dos procedimentos permite retorno imediato ou no dia seguinte às atividades habituais. Você receberá um guia completo de cuidados pós-atendimento para garantir cicatrização tranquila.",
    },
    {
      q: "Onde fica localizado o consultório?",
      a: "O atendimento acontece em ambiente privativo no Águas Claras Shopping, Av. das Araucárias, 1835, 5º andar, sala 566, Águas Claras, Brasília/DF.",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      {/* 1. HERO SECTION COM VÍDEO DE FUNDO EM LOOP - OCUPA 100% DA PRIMEIRA TELA EM TODOS OS FORMATOS */}
      <section className="relative overflow-hidden -mt-18 sm:-mt-20 h-svh min-h-svh flex flex-col justify-between border-b border-[#e5ded5]">
        {/* VÍDEO DESKTOP & TABLET (Horizontal 1920x1080) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="hidden md:block absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={getAssetUrl("/videos/hero-desktop.mp4")} type="video/mp4" />
        </video>

        {/* VÍDEO MOBILE (Vertical 720x1280) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="block md:hidden absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={getAssetUrl("/videos/hero-mobile.mp4")} type="video/mp4" />
        </video>

        {/* Overlays de Contraste e Elegância: Permitem visualização clara do vídeo e leitura impecável */}
        {/* Overlay Desktop: Gradiente lateral da esquerda para a direita (abre espaço para a doutora no centro/direita) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#211812]/85 via-[#2b1f17]/50 to-[#1e1610]/20 z-10 pointer-events-none" />

        {/* Overlay Mobile: Gradiente inferior suave (mantém a metade superior aberta para o vídeo) */}
        <div className="block md:hidden absolute inset-0 bg-gradient-to-t from-[#211812]/95 via-[#2b1f17]/50 to-transparent z-10 pointer-events-none" />

        {/* Conteúdo do Hero: DESKTOP & TABLET (À esquerda, deixando centro e direita livres) */}
        <div className="hidden md:flex relative z-20 flex-1 flex-col justify-center max-w-[78rem] mx-auto px-5 sm:px-8 w-full pt-22 pb-10">
          <div className="max-w-xl lg:max-w-2xl text-white space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#241c16]/70 border border-[#b89660]/50 text-xs font-semibold uppercase tracking-wider text-[#d8c3a5] backdrop-blur-md shadow-sm w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#b89660] animate-pulse" />
              <span>Atendimento Privativo · Águas Claras, Brasília</span>
            </div>

            <h1 className="text-4xl lg:text-[3.4rem] font-serif-editorial font-normal tracking-tight text-white leading-[1.12]">
              Harmonia facial que valoriza a sua{" "}
              <span className="italic text-[#d8c3a5] font-serif">
                verdadeira essência.
              </span>
            </h1>

            <p className="text-base md:text-lg text-[#e5ded5] leading-relaxed font-light max-w-xl">
              Mais do que procedimentos isolados, oferecemos uma experiência de
              cuidado baseada em ciência anatômica, escuta atenta e respeito
              absoluto à sua identidade.
            </p>

            {/* Ações principais */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={contatoData.links.geral}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#b89660] hover:bg-[#a8844f] shadow-lg rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[50px]"
              >
                <span>Iniciar conversa de avaliação</span>
                <ArrowRight size={16} />
              </a>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("jornada-clinica");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-[#f7f2ea] hover:text-white bg-[#241c16]/60 hover:bg-[#b89660] border border-[#c5a36c]/40 rounded-xl backdrop-blur-md transition-all shadow-sm cursor-pointer min-h-[50px]"
              >
                Conhecer o Processo
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#d8c3a5] pt-2">
              <MapPin size={14} className="text-[#b89660] shrink-0" />
              <span>
                Águas Claras Shopping, Sala 566 · Consultas com horário marcado
              </span>
            </div>
          </div>
        </div>

        {/* Conteúdo do Hero: MOBILE (Sem card no fundo, organizado na parte inferior) */}
        <div className="flex md:hidden relative z-20 flex-1 flex-col justify-end px-5 pt-20 pb-5 w-full">
          <div className="text-center space-y-3 drop-shadow-md">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d8c3a5] inline-block">
              Atendimento Privativo · Águas Claras, Brasília
            </span>

            <h1 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-white leading-tight">
              Harmonia facial que valoriza a sua{" "}
              <span className="italic text-[#d8c3a5]">verdadeira essência.</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#e5ded5] font-light leading-relaxed max-w-sm mx-auto">
              Avaliação individualizada e cuidado baseado em ciência e respeito
              aos seus traços.
            </p>

            <div className="pt-1">
              <a
                href={contatoData.links.geral}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#a8844f] rounded-xl shadow-lg transition-all active:scale-98 min-h-[46px]"
              >
                <span>Agendar Avaliação no WhatsApp</span>
                <ArrowRight size={15} />
              </a>
            </div>

            <p className="text-[11px] text-[#d8c3a5]/90 pt-1 flex items-center justify-center gap-1.5">
              <MapPin size={13} className="text-[#b89660] shrink-0" />
              <span>Águas Claras Shopping, Sala 566</span>
            </p>
          </div>
        </div>

        {/* Indicador sutil de rolagem no rodapé do Hero */}
        <div className="relative z-20 py-2.5 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-[#d8c3a5]/90 border-t border-[#c5a36c]/20 bg-[#211812]/40 backdrop-blur-sm">
          <span>Role para conhecer o processo clínico</span>
          <span className="animate-bounce text-[#b89660]">↓</span>
        </div>
      </section>

      {/* 2. COMPOSIÇÃO EDITORIAL: FRASE DE POSICIONAMENTO E PRINCÍPIOS CLÍNICOS */}
      <section className="bg-[#faf7f2] py-18 sm:py-24 border-b border-[#e8dfd5]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          {/* Frase de Posicionamento em Destaque */}
          <div className="max-w-4xl mb-14 sm:mb-18">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-4">
              Princípios Fundamentais
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-serif-editorial font-normal text-[#2d241e] leading-[1.28] tracking-tight">
              A harmonia facial duradoura não nasce do excesso de produto, mas da
              precisão do diagnóstico anatômico e do respeito absoluto à identidade
              de cada expressão.
            </h2>
          </div>

          {/* Três princípios curtos com tipografia refinada e divisórias discretas (sem cartões, sombras ou caixas) */}
          <div className="border-t border-[#e0d7cb] pt-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="space-y-3">
              <span className="text-xs font-mono font-medium text-[#82622f] tracking-wider block">
                01 / DIAGNÓSTICO
              </span>
              <h3 className="text-xl font-serif-editorial font-medium text-[#2d241e]">
                Diagnóstico Anatômico
              </h3>
              <p className="text-sm text-[#4a3e35] leading-relaxed font-light">
                Mapeamento detalhado dos planos teciduais antes de qualquer intervenção,
                compreendendo a real origem biomecânica de cada queixa.
              </p>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-[#e0d7cb] pt-8 md:pt-0 md:pl-10 space-y-3">
              <span className="text-xs font-mono font-medium text-[#82622f] tracking-wider block">
                02 / BIOSSEGURANÇA
              </span>
              <h3 className="text-xl font-serif-editorial font-medium text-[#2d241e]">
                Biomateriais & Rastreabilidade
              </h3>
              <p className="text-sm text-[#4a3e35] leading-relaxed font-light">
                Fios de PDO/PLLA e ácido hialurônico com certificação Anvisa,
                elevada pureza biológica e rastreabilidade individual completa.
              </p>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-[#e0d7cb] pt-8 md:pt-0 md:pl-10 space-y-3">
              <span className="text-xs font-mono font-medium text-[#82622f] tracking-wider block">
                03 / NATURALIDADE
              </span>
              <h3 className="text-xl font-serif-editorial font-medium text-[#2d241e]">
                Preservação da Sua Expressão
              </h3>
              <p className="text-sm text-[#4a3e35] leading-relaxed font-light">
                Nosso propósito é que ninguém aponte um procedimento realizado, mas
                perceba o frescor, o repouso e a elegância serena do seu rosto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APRESENTAÇÃO DA DRA. VÂNIA MEDEIROS (COMPARTILHA O MARFIM INICIAL) */}
      <section className="bg-[#faf7f2] py-18 sm:py-26 border-b border-[#e5ddd2]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Fotografia real em tamanho expressivo sem aparência de cartão */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="w-full max-w-[420px]">
                <div className="bg-[#ede6dc] overflow-hidden border border-[#ded5c8]">
                  <img
                    src={getAssetUrl("/midias/retratos/retrato-principal.png")}
                    alt="Dra. Vânia Medeiros"
                    width={455}
                    height={549}
                    className="w-full h-auto object-contain block"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-[#615346] font-light">
                  <span className="font-serif-editorial text-sm text-[#2d241e]">Dra. Vânia Medeiros</span>
                  <span>Águas Claras, Brasília</span>
                </div>
              </div>
            </div>

            {/* Conteúdo editorial ao lado */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block">
                  A Profissional
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif-editorial font-normal text-[#2d241e] leading-[1.2] tracking-tight">
                  Cuidado individual, olhar anatômico e escuta atenta
                </h2>
              </div>

              <div className="space-y-4 text-base sm:text-lg leading-relaxed font-light">
                <p className="text-[#2d241e] font-normal">
                  A condução de cada atendimento pela Dra. Vânia Medeiros parte de uma premissa clara: a harmonia duradoura exige respeito absoluto à anatomia e aos traços autênticos de cada paciente.
                </p>
                <p className="text-[#4a3e35]">
                  Na consulta de avaliação, o exame clínico detalhado analisa a dinâmica muscular, o suporte ósseo, as proporções da face e a resposta tecidual. Nenhum plano é genérico: cada intervenção é indicada apenas quando há real benefício para a naturalidade e o equilíbrio da sua expressão.
                </p>
                <p className="text-sm sm:text-base text-[#5c4e42]">
                  Com atendimento privativo no Águas Claras Shopping em Brasília, cada encontro é conduzido com tempo dedicado para ouvir suas expectativas, esclarecer todas as dúvidas e construir um planejamento transparente e consciente.
                </p>
              </div>

              <div className="pt-2 border-t border-[#e0d7cb] flex flex-wrap items-center gap-6">
                <a
                  href="/sobre/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/sobre/");
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#82622f] hover:text-[#2d241e] transition-colors group cursor-pointer"
                >
                  <span>Conhecer mais sobre a Dra. Vânia</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <span className="text-xs text-[#615346] font-light">
                  Consultas presenciais individuais com horário marcado
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. A JORNADA DO PACIENTE: CONEXÃO VISUAL EM AREIA SUAVE */}
      <section id="jornada-clinica" className="bg-[#f1ebe1] py-18 sm:py-28">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-3">
              O Método Dra. Vânia Medeiros
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#2d241e] leading-tight mb-4">
              Um cuidado pensado para você
            </h2>
            <p className="text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light max-w-2xl">
              Não tratamos procedimentos estéticos como mercadorias em uma
              prateleira. Conheça as 5 etapas do nosso protocolo clínico — desde a
              primeira conversa até o acompanhamento pós-procedimento.
            </p>
          </div>

          {/* Componente Interativo de Jornada Clínica */}
          <ClinicalJourney />
        </div>
      </section>

      {/* TRANSIÇÃO SUTIL DE ATMOSFERA: Areia Suave para Taupe Profundo */}
      <div className="h-6 sm:h-8 bg-gradient-to-b from-[#f1ebe1] to-[#362d26]" aria-hidden="true" />

      {/* 5. SEÇÃO ESPECIAL DE FILOSOFIA ANATÔMICA: TAUPE PROFUNDO */}
      <section className="bg-[#362d26] py-18 sm:py-28 text-[#faf6f0]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <FacialLayersExplainer
            theme="deep"
            onSelectTreatment={(path) => navigate(path)}
          />
        </div>
      </section>

      {/* TRANSIÇÃO SUTIL DE ATMOSFERA: Taupe Profundo para Marfim */}
      <div className="h-6 sm:h-8 bg-gradient-to-b from-[#362d26] to-[#faf7f2]" aria-hidden="true" />

      {/* 6. A PROVA VIVA DO PROCESSO: RETORNO AO MARFIM PARA LEITURA PRECISA DAS IMAGENS */}
      <section className="bg-[#faf7f2] py-20 sm:py-28 border-b border-[#e5ddd2]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-3">
              Registros Clínicos Reais
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#2d241e] leading-tight mb-4">
              Cada resultado reflete um planejamento individual
            </h2>
            <p className="text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
              Transformações autênticas documentadas em consultório. Não há fórmulas
              padronizadas: cada plano de cuidado respeita rigorosamente a anatomia,
              a proporção e a identidade de cada paciente.
            </p>
          </div>

          {/* DOIS CASOS SELECIONADOS EM COMPOSIÇÃO AMPLA SEM CARTÃO EXTERNO */}
          <div className="space-y-20 lg:space-y-28">
            {/* Caso 1: Imagem à esquerda e texto à direita */}
            {casosClinicos.find((c) => c.id === "caso-27") && (() => {
              const case1 = casosClinicos.find((c) => c.id === "caso-27")!;
              return (
                <article className="border-b border-[#e0d7cb] pb-20 lg:pb-28">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Imagem à esquerda */}
                    <div className="lg:col-span-7">
                      <div
                        onClick={() => setActiveModalCase(case1)}
                        className="group relative cursor-pointer bg-[#ede6dc] overflow-hidden border border-[#ded5c8]"
                      >
                        <img
                          src={getAssetUrl(case1.image)}
                          alt={`Registro clínico: ${case1.title}`}
                          className="w-full h-auto max-h-[560px] object-contain mx-auto block group-hover:scale-[1.015] transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#2d241e]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2d241e]/90 text-white text-xs font-light tracking-wide shadow-md border border-[#c5a36c]/40">
                            <ZoomIn size={14} className="text-[#c5a36c]" />
                            <span>Ampliar fotografia</span>
                          </span>
                        </div>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#615346]">
                        <span>Registro fotográfico documentado</span>
                        <button
                          type="button"
                          onClick={() => setActiveModalCase(case1)}
                          className="text-[#82622f] hover:text-[#2d241e] font-medium inline-flex items-center gap-1 cursor-pointer focus-visible:outline-none"
                        >
                          <ZoomIn size={12} />
                          <span>Ampliar fotografia</span>
                        </button>
                      </div>
                    </div>

                    {/* Texto à direita */}
                    <div className="lg:col-span-5 space-y-5">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="font-serif-editorial text-xs text-[#82622f] tracking-wider font-semibold">
                            CASO 01
                          </span>
                          <span className="w-6 h-px bg-[#d5cbbe]"></span>
                          <span className="text-xs tracking-wider text-[#5c4e42] uppercase">
                            {case1.category}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e] leading-snug">
                          {case1.title}
                        </h3>
                      </div>

                      <div className="space-y-2 pt-1">
                        <p className="text-xs uppercase tracking-widest text-[#82622f] font-semibold">
                          Objetivo do planejamento
                        </p>
                        <p className="text-base text-[#2d241e] font-light leading-relaxed">
                          {case1.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#e0d7cb] space-y-1.5">
                        <p className="text-xs uppercase tracking-widest text-[#5c4e42] font-semibold">
                          Observações anatômicas
                        </p>
                        <p className="text-sm text-[#4a3e35] font-light leading-relaxed">
                          {case1.notes}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })()}

            {/* Caso 2: Imagem à direita e texto à esquerda (disposição invertida) */}
            {casosClinicos.find((c) => c.id === "caso-28") && (() => {
              const case2 = casosClinicos.find((c) => c.id === "caso-28")!;
              return (
                <article className="border-b border-[#e0d7cb] pb-20 lg:pb-28">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                    {/* Imagem à direita em desktop (col-span-7, order-1 em mobile, order-2 em desktop) */}
                    <div className="lg:col-span-7 lg:order-2">
                      <div
                        onClick={() => setActiveModalCase(case2)}
                        className="group relative cursor-pointer bg-[#ede6dc] overflow-hidden border border-[#ded5c8]"
                      >
                        <img
                          src={getAssetUrl(case2.image)}
                          alt={`Registro clínico: ${case2.title}`}
                          className="w-full h-auto max-h-[560px] object-contain mx-auto block group-hover:scale-[1.015] transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#2d241e]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2d241e]/90 text-white text-xs font-light tracking-wide shadow-md border border-[#c5a36c]/40">
                            <ZoomIn size={14} className="text-[#c5a36c]" />
                            <span>Ampliar fotografia</span>
                          </span>
                        </div>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#615346]">
                        <span>Registro fotográfico documentado</span>
                        <button
                          type="button"
                          onClick={() => setActiveModalCase(case2)}
                          className="text-[#82622f] hover:text-[#2d241e] font-medium inline-flex items-center gap-1 cursor-pointer focus-visible:outline-none"
                        >
                          <ZoomIn size={12} />
                          <span>Ampliar fotografia</span>
                        </button>
                      </div>
                    </div>

                    {/* Texto à esquerda em desktop (col-span-5, order-2 em mobile, order-1 em desktop) */}
                    <div className="lg:col-span-5 lg:order-1 space-y-5">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="font-serif-editorial text-xs text-[#82622f] tracking-wider font-semibold">
                            CASO 02
                          </span>
                          <span className="w-6 h-px bg-[#d5cbbe]"></span>
                          <span className="text-xs tracking-wider text-[#5c4e42] uppercase">
                            {case2.category}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e] leading-snug">
                          {case2.title}
                        </h3>
                      </div>

                      <div className="space-y-2 pt-1">
                        <p className="text-xs uppercase tracking-widest text-[#82622f] font-semibold">
                          Objetivo do planejamento
                        </p>
                        <p className="text-base text-[#2d241e] font-light leading-relaxed">
                          {case2.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#e0d7cb] space-y-1.5">
                        <p className="text-xs uppercase tracking-widest text-[#5c4e42] font-semibold">
                          Observações anatômicas
                        </p>
                        <p className="text-sm text-[#4a3e35] font-light leading-relaxed">
                          {case2.notes}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })()}
          </div>

          {/* LINK PRINCIPAL / AÇÃO SECUNDÁRIA: DIFERENCIADO DA AÇÃO PRINCIPAL */}
          <div className="mt-14 sm:mt-18 text-center">
            <a
              href="/resultados/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/resultados/");
              }}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-xs uppercase tracking-widest font-semibold text-[#2d241e] hover:text-[#faf7f2] border border-[#2d241e] hover:bg-[#2d241e] bg-transparent transition-colors group cursor-pointer focus-visible:outline-none"
            >
              <span>Conhecer outros casos</span>
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          {/* OBSERVAÇÃO LEGÍVEL SOBRE INDIVIDUALIDADE DOS RESULTADOS */}
          <p className="text-xs text-[#615346] text-center max-w-2xl mx-auto mt-8 font-light leading-relaxed">
            * Registros documentados de atendimentos reais. Os resultados variam de
            acordo com as particularidades anatômicas de cada pessoa e dependem de
            avaliação e planejamento clínico prévio.
          </p>
        </div>
      </section>

      {/* 7. DÚVIDAS ESCLARECIDAS (COMPARTILHA O MARFIM COM CASOS PARA EVITAR ALTERNÂNCIA MECÂNICA) */}
      <section className="bg-[#faf7f2] py-16 sm:py-24">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block">
                Transparência
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-editorial font-normal text-[#2d241e]">
                Perguntas Frequentes
              </h2>
              <p className="text-base text-[#4a3e35] leading-relaxed font-light">
                Entenda como trabalhamos e tire suas dúvidas sobre segurança,
                conforto e planejamento.
              </p>
              <div className="pt-2">
                <a
                  href="/perguntas-frequentes/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/perguntas-frequentes/");
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#82622f] hover:text-[#2d241e] transition-colors group cursor-pointer focus-visible:outline-none"
                >
                  <span>Ver todas as perguntas respondidas</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#ffffff] rounded-xl border border-[#ded5c8] p-6 shadow-2xs transition-colors hover:border-[#c5a36c]/60"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaq === idx}
                    className="w-full flex items-center justify-between text-left text-base sm:text-lg font-medium text-[#2d241e] hover:text-[#82622f] transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#82622f] transition-transform duration-200 shrink-0 ml-4 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="pt-3 text-sm sm:text-base text-[#4a3e35] leading-relaxed border-t border-[#f1ebe1] mt-3 font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRANSIÇÃO SUTIL DE ATMOSFERA: Marfim para Encerramento Marrom */}
      <div className="h-6 sm:h-8 bg-gradient-to-b from-[#faf7f2] to-[#2e241d]" aria-hidden="true" />

      {/* 8. CONTATO & AGENDAMENTO - ENCERRAMENTO VISUAL COESO EM MARROM */}
      <section className="bg-[#2e241d] py-20 sm:py-28 text-[#faf6f0]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Lado 1: Texto e Endereço */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#d4ba90] font-semibold block">
                Atendimento Privativo
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#faf6f0] leading-tight">
                Vamos conversar sobre você?
              </h2>
              <p className="text-base sm:text-lg text-[#ded4c8] leading-relaxed max-w-xl font-light">
                A equipe de atendimento da Dra. Vânia está à disposição no
                WhatsApp para esclarecer dúvidas preliminares, apresentar os horários
                disponíveis e orientar sua chegada ao Águas Claras Shopping com total
                tranquilidade e discrição.
              </p>

              <div className="pt-6 border-t border-[#483b30] max-w-lg space-y-1">
                <p className="font-serif-editorial text-lg text-[#faf6f0]">
                  Águas Claras Shopping
                </p>
                <p className="text-sm text-[#ded4c8] leading-relaxed font-light">
                  Av. das Araucárias, 1835 · 5º andar · Sala 566<br />
                  Águas Claras · Brasília/DF · CEP 71936-250
                </p>
                <p className="text-xs text-[#d4ba90] font-medium pt-1">
                  Atendimento privativo com horário marcado. Estacionamento coberto no local.
                </p>
              </div>
            </div>

            {/* Lado 2: Ações com Hierarquia Clara (Ação Principal vs Ação Secundária) */}
            <div className="lg:col-span-5 flex flex-col gap-4 lg:pt-8">
              {/* Ação Principal: Dourado */}
              <a
                href={contatoData.links.geral}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 rounded-xl min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a36c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2e241d]"
              >
                <span>Conversar no WhatsApp</span>
                <ArrowRight size={17} />
              </a>

              {/* Ação Secundária: Contorno sobre fundo escuro */}
              <a
                href={contatoData.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-4 text-sm font-semibold text-[#faf6f0] bg-[#3a2f26]/60 border border-[#5a483a] hover:bg-[#3a2f26] hover:border-[#b89660] transition-colors rounded-xl min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a36c] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2e241d]"
              >
                Ver localização no Google Maps
              </a>
              <p className="text-xs text-[#b8a99a] text-center pt-1 font-light">
                Consultas presenciais e planos de tratamento individualizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Lightbox de Ampliação na Home */}
      {activeModalCase && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#1c1612]/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setActiveModalCase(null)}
        >
          <div
            className="relative bg-[#ffffff] max-w-4xl w-full border border-[#ded5c8] shadow-2xl my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Topbar */}
            <div className="px-6 py-4 bg-[#faf7f2] border-b border-[#ded5c8] flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#82622f]">
                  {activeModalCase.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-editorial text-[#2d241e]">
                  {activeModalCase.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalCase(null)}
                aria-label="Fechar ampliação"
                className="p-2 text-[#5c4e42] hover:text-[#2d241e] hover:bg-[#ede6dc] transition-colors cursor-pointer rounded-lg focus-visible:outline-none"
              >
                <X size={22} />
              </button>
            </div>

            {/* Imagem sem corte */}
            <div className="p-4 sm:p-8 space-y-6">
              <div className="bg-[#ede6dc] p-2 sm:p-4 flex items-center justify-center border border-[#ded5c8]">
                <img
                  src={getAssetUrl(activeModalCase.image)}
                  alt={activeModalCase.title}
                  className="max-h-[62vh] w-auto max-w-full object-contain mx-auto shadow-xs"
                />
              </div>

              {/* Informações detalhadas do caso */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-[#82622f] font-semibold">
                  Objetivo e Abordagem Clínica
                </p>
                <p className="text-base text-[#2d241e] font-light leading-relaxed">
                  {activeModalCase.description}
                </p>
                {activeModalCase.notes && (
                  <p className="text-sm text-[#4a3e35] font-light leading-relaxed bg-[#faf7f2] p-4 border border-[#ded5c8]">
                    {activeModalCase.notes}
                  </p>
                )}
                <p className="text-[11px] text-[#615346] italic pt-1">
                  * Registro fotográfico documentado para fins informativos. Resultados
                  individuais dependem da anatomia e planejamento clínico individual.
                </p>
              </div>

              {/* Ações do modal: Hierarquia clara */}
              <div className="pt-4 border-t border-[#ded5c8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={contatoData.links.geral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#b89660] hover:bg-[#a6834d] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-sm rounded-lg"
                >
                  <span>Conversar sobre este procedimento</span>
                  <ArrowRight size={14} />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalCase(null)}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs text-[#5c4e42] hover:text-[#2d241e] cursor-pointer"
                >
                  Fechar exame
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
