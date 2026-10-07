import { useState } from "react";
import { contatoData } from "../data/siteData";
import { getAssetUrl } from "../utils/asset";
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  MapPin,
  ShieldCheck,
  Heart,
  Clock,
  Compass,
} from "lucide-react";
import { ResultadosGallery } from "../components/ResultadosGallery";
import { ClinicalJourney } from "../components/ClinicalJourney";
import { FacialLayersExplainer } from "../components/FacialLayersExplainer";

interface HomeProps {
  navigate: (path: string) => void;
}

export function Home({ navigate }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const clinicPillars = [
    {
      icon: <Compass className="w-5 h-5 text-[#b89660]" />,
      title: "Diagnóstico Anatômico",
      text: "Mapeamento das camadas da face antes de qualquer intervenção, compreendendo a real origem de cada queixa.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#b89660]" />,
      title: "Biossegurança & Materiais Nobres",
      text: "Fios de PDO/PLLA e ácido hialurônico de padrão ouro internacional com rastreabilidade completa.",
    },
    {
      icon: <Heart className="w-5 h-5 text-[#b89660]" />,
      title: "Preservação da Sua Expressão",
      text: "Nosso objetivo é que ninguém perceba que você fez um procedimento, apenas notem o seu semblante descansado e harmônico.",
    },
  ];

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

      {/* 2. PILARES DE SEGURANÇA E CONFIANÇA */}
      <section className="bg-[#f2eee8] py-14 sm:py-16 border-b border-[#e5ded5]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinicPillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#e0d8ce] shadow-xs hover:border-[#b89660]/50 transition-colors space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f7f2ea] flex items-center justify-center mb-4 border border-[#b89660]/20">
                  {p.icon}
                </div>
                <h3 className="text-xl font-serif-editorial font-semibold text-[#2d241e]">
                  {p.title}
                </h3>
                <p className="text-sm text-[#6b5d50] leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. A JORNADA DO PACIENTE: O PROCESSO CLÍNICO PASSO A PASSO */}
      <section id="jornada-clinica" className="py-18 sm:py-28 border-b border-[#e5ded5]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f2ea] text-[#977643] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#b89660]/30">
              <Sparkles size={13} />
              <span>O Método Dra. Vânia Medeiros</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#2d241e] leading-tight mb-4">
              Como cuidamos de você: a história de cada atendimento
            </h2>
            <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
              Não tratamos procedimentos estéticos como mercadorias em uma
              prateleira. Conheça as 5 etapas do nosso protocolo clínico — desde a
              primeira conversa até o acompanhamento pós-procedimento.
            </p>
          </div>

          {/* Componente Interativo de Jornada Clínica */}
          <ClinicalJourney />
        </div>
      </section>

      {/* 4. DIDÁTICA ANATÔMICA: COMO CADA TÉCNICA ATUA NAS CAMADAS DA FACE */}
      <section className="bg-[#f2eee8] py-18 sm:py-28 border-b border-[#e5ded5]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <FacialLayersExplainer
            onSelectTreatment={(path) => navigate(path)}
          />
        </div>
      </section>

      {/* 5. A PROVA VIVA DO PROCESSO: CASOS CLÍNICOS REAIS */}
      <section className="bg-[#ffffff] py-18 sm:py-28 border-b border-[#e5ded5]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f2ea] text-[#977643] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#b89660]/30">
              <span>Evidência Clínica</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#2d241e] leading-tight mb-4">
              Resultados que refletem o método
            </h2>
            <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
              A verdadeira comprovação de um processo rigoroso está nas
              transformações sutis e elegantes dos nossos pacientes. Veja
              registros documentados de casos reais:
            </p>
          </div>

          <ResultadosGallery
            maxItems={6}
            showFilters={true}
            onViewAll={() => navigate("/resultados/")}
          />
        </div>
      </section>

      {/* 6. SOBRE A PROFISSIONAL & O ESPAÇO */}
      <section className="bg-[#faf8f5] py-18 sm:py-26 border-b border-[#e5ded5]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[360px]">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-[#e0d8ce]">
                  <img
                    src={getAssetUrl("/midias/retratos/retrato-principal.png")}
                    alt="Dra. Vânia Medeiros"
                    width="455"
                    height="549"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="p-5 bg-[#f2eee8] border-t border-[#e0d8ce]">
                    <p className="font-serif-editorial text-xl text-[#2d241e]">
                      Dra. Vânia Medeiros
                    </p>
                    <p className="text-xs text-[#977643] font-semibold mt-0.5 uppercase tracking-wide">
                      Responsável Técnica · Águas Claras, Brasília
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block">
                Dedicação & Ética
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#2d241e] leading-tight">
                Um olhar refinado para a sua individualidade
              </h2>
              <p className="text-lg text-[#2d241e] font-light leading-relaxed">
                A Dra. Vânia Medeiros conduz seu consultório pautada na
                honestidade diagnóstica. Antes de indicar qualquer tratamento, é
                fundamental avaliar a saúde tecidual e esclarecer exatamente o que
                pode ser alcançado com segurança.
              </p>
              <p className="text-base text-[#6b5d50] leading-relaxed font-light">
                O ambiente no Águas Claras Shopping foi estruturado para garantir
                sua privacidade e tranquilidade durante todas as etapas do
                atendimento.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="/sobre/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/sobre/");
                  }}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#977643] rounded-xl transition-colors shadow-sm min-h-[44px]"
                >
                  Conhecer mais sobre a Dra. Vânia
                </a>
                <a
                  href="/experiencia-de-atendimento/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/experiencia-de-atendimento/");
                  }}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#2d241e] bg-white border border-[#b89660]/40 hover:bg-[#f7f2ea] hover:text-[#977643] rounded-xl transition-colors min-h-[44px]"
                >
                  Ver protocolo de consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DÚVIDAS ESCLARECIDAS */}
      <section className="bg-[#f2eee8] py-16 sm:py-24 border-b border-[#e5ded5]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block">
                Transparência
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-editorial font-normal text-[#2d241e]">
                Perguntas Frequentes
              </h2>
              <p className="text-base text-[#6b5d50] leading-relaxed">
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
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b89660] hover:text-[#977643]"
                >
                  <span>Ver todas as perguntas respondidas</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#e0d8ce] p-6 shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={openFaq === idx}
                    className="w-full flex items-center justify-between text-left text-base sm:text-lg font-medium text-[#2d241e] hover:text-[#b89660] transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#b89660] transition-transform duration-200 shrink-0 ml-4 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="pt-3 text-sm sm:text-base text-[#6b5d50] leading-relaxed border-t border-[#f2eee8] mt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTATO & AGENDAMENTO DA JORNADA */}
      <section className="bg-[#faf8f5] py-18 sm:py-26">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="bg-[#ffffff] rounded-3xl border border-[#e0d8ce] p-8 sm:p-14 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block">
                  Seu Próximo Passo
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal text-[#2d241e]">
                  Pronta(o) para iniciar sua conversa de avaliação?
                </h2>
                <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed max-w-xl font-light">
                  A equipe de atendimento da Dra. Vânia está à disposição no
                  WhatsApp para explicar os horários disponíveis e orientar sua
                  chegada no Águas Claras Shopping.
                </p>
                <div className="pt-2 text-sm text-[#3d3228] space-y-1">
                  <p className="font-semibold text-base text-[#2d241e]">
                    Águas Claras Shopping
                  </p>
                  <p className="text-[#6b5d50]">
                    Av. das Araucárias, 1835 · 5º andar · Sala 566<br />
                    Águas Claras · Brasília/DF · CEP 71936-250
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-4">
                <a
                  href={contatoData.links.geral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#b89660] hover:bg-[#977643] rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[52px]"
                >
                  <span>Conversar no WhatsApp</span>
                  <ArrowRight size={17} />
                </a>
                <a
                  href={contatoData.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-4 text-sm font-semibold text-[#2d241e] bg-white border border-[#b89660]/40 hover:bg-[#f7f2ea] hover:text-[#977643] rounded-xl transition-colors min-h-[52px]"
                >
                  Ver rota no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
