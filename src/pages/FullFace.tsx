import { useState } from "react";
import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ChevronDown, ArrowRight, Layers, AlertCircle } from "lucide-react";
import { getAssetUrl } from "../utils/asset";

interface FullFaceProps {
  navigate: (path: string) => void;
}

export function FullFace({ navigate }: FullFaceProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pillars = [
    {
      title: "Análise Tridimensional Global",
      desc: "Avaliação do terço superior, médio e inferior em conjunto, observando como a mímica, os ligamentos e o suporte ósseo interagem dinamicamente.",
    },
    {
      title: "Sinergia entre Técnicas",
      desc: "Combinação precisa de sustentação, reposicionamento tecidual e biovolumização discreta, evitando sobrecarregar qualquer ponto isolado da face.",
    },
    {
      title: "Equilíbrio e Identidade",
      desc: "Foco absoluto em manter os traços característicos e a expressividade da pessoa, priorizando aspecto descansado e fresco em vez de transformações artificiais.",
    },
  ];

  const planningProcess = [
    {
      num: "01",
      title: "Consulta de Mapeamento Diagnóstico",
      desc: "Exame clínico detalhado das assimetrias naturais, espessura cutânea e proporções em repouso e em movimento.",
    },
    {
      num: "02",
      title: "Definição de Prioridades Clínicas",
      desc: "Alinhamento transparente com a paciente sobre quais regiões trazem o maior benefício estético e estrutural a curto e médio prazo.",
    },
    {
      num: "03",
      title: "Execução em Etapas Conscientes",
      desc: "Planejamento que pode ser executado em uma ou mais sessões no consultório no Águas Claras Shopping, permitindo assentamento natural dos tecidos.",
    },
    {
      num: "04",
      title: "Revisão e Manutenção Longitudinal",
      desc: "Consultas de retorno programadas para avaliar a integração biológica dos materiais e planejar a longevidade da harmonia facial.",
    },
  ];

  const faqs = [
    {
      q: "Full Face significa preencher o rosto inteiro?",
      a: "Não. Full Face é uma filosofia de planejamento diagnóstico que enxerga o rosto como um todo harmônico. Isso não significa injetar produtos em todas as áreas, mas sim entender onde uma pequena intervenção trará o melhor equilíbrio visual sem excessos.",
    },
    {
      q: "O tratamento precisa ser realizado de uma única vez?",
      a: "Não necessariamente. Muitas vezes é mais seguro e natural conduzir o tratamento em etapas, permitindo que a resposta biológica de cada procedimento se estabilize antes de dar o próximo passo.",
    },
    {
      q: "Como é definido o orçamento de um plano Full Face?",
      a: "Não existem pacotes genéricos fechados. O valor depende exclusivamente das técnicas necessárias (fios, preenchedores, bioestimuladores) e das quantidades calculadas após a avaliação presencial minuciosa.",
    },
    {
      q: "Existe tempo de afastamento das atividades cotidianas?",
      a: "Em sua maioria, os procedimentos de consultório permitem retorno rápido à rotina, com orientações individuais sobre cuidados nas primeiras 48 a 72 horas para evitar hematomas e inchaço.",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs
          items={[
            { label: "Tratamentos", href: "/tratamentos/" },
            { label: "Full Face" },
          ]}
        />

        {/* 1. ABERTURA EDITORIAL PRÓPRIA COM RETRATO/MÍDIA CONFIRMADA */}
        <section className="pt-6 sm:pt-10 pb-14 sm:pb-20 border-b border-[#ded5c7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Texto de Abertura (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block">
                  Harmonia Global & Proporções
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-[1.18]">
                  Full Face: Planejamento Integrado
                </h1>
                <p className="text-base sm:text-lg text-[#82622f] font-medium font-serif italic">
                  Uma visão harmônica do conjunto para preservar a identidade e o frescor natural.
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
                <p className="text-[#2d241e] font-normal">
                  Tratar uma queixa pontual isolando-a do restante do rosto é o principal motivo de resultados artificiais. A abordagem Full Face concebida pela Dra. Vânia Medeiros compreende que cada proporção facial está conectada às demais por forças dinâmicas e planos de suporte.
                </p>
                <p>
                  No atendimento em Águas Claras, o foco não está em volumes exagerados, mas na reorganização sutil dos pontos de luz, sombras e vetores de sustentação que valorizam a elegância autêntica da sua expressão.
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={contatoData.links.fullFace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82622f] min-h-[46px]"
                >
                  <span>Conversar sobre avaliação Full Face</span>
                  <ArrowRight size={15} />
                </a>
                <span className="text-xs text-[#615346] font-light">
                  Consulta diagnóstica presencial e individualizada
                </span>
              </div>
            </div>

            {/* Mídia Pertinente: Registro Clínico Validado de Full Face (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px]">
                <div className="bg-[#ede6dc] overflow-hidden border border-[#ded5c8]">
                  <img
                    src={getAssetUrl("/midias/casos/caso-27.jpg")}
                    alt="Registro clínico de harmonização global Full Face - Dra. Vânia Medeiros"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between text-xs text-[#615346] font-light">
                  <span className="font-serif-editorial text-sm text-[#2d241e]">Registro Documentado</span>
                  <span>Harmonização Global</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. OBJETIVOS QUE PODEM SER DISCUTIDOS NA AVALIAÇÃO */}
        <section className="py-14 sm:py-20 border-b border-[#ded5c7]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-2">
              Visão Integral
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#2d241e] leading-tight mb-4">
              Pilares discutidos na avaliação integrada
            </h2>
            <p className="text-base text-[#4a3e35] leading-relaxed font-light">
              Entenda como cada ângulo da face é estudado para compor um planejamento coeso e sem exageros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {pillars.map((item, i) => (
              <div key={i} className="border-t border-[#ded5c7] pt-6 space-y-3">
                <span className="text-xs font-mono font-medium text-[#82622f]">
                  0{i + 1} / PILAR
                </span>
                <h3 className="text-xl font-serif-editorial text-[#2d241e]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4a3e35] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. COMO ACONTECE O PLANEJAMENTO */}
        <section className="py-14 sm:py-20 border-b border-[#ded5c7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block">
                Metodologia Clínica
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e] leading-snug">
                Etapas do planejamento integrado
              </h2>
              <p className="text-sm sm:text-base text-[#4a3e35] font-light leading-relaxed">
                Um plano seguro respeita o tempo da sua anatomia e coloca você no centro de todas as escolhas terapêuticas.
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#ded5c7]">
              {planningProcess.map((step) => (
                <div key={step.num} className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
                  <span className="text-sm font-mono font-bold text-[#82622f] shrink-0">
                    {step.num}
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-lg sm:text-xl font-serif-editorial text-[#2d241e]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#4a3e35] font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. LIMITAÇÕES E CUIDADOS PERTINENTES */}
        <section className="py-14 sm:py-20 border-b border-[#ded5c7]">
          <div className="bg-[#f1ebe1] p-8 sm:p-12 border border-[#ded5c8]">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle size={22} className="text-[#82622f] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-editorial text-[#2d241e] mb-2">
                  Limitações e Cuidados no Planejamento Global
                </h2>
                <p className="text-sm sm:text-base text-[#4a3e35] leading-relaxed font-light">
                  A excelência em harmonização facial exige limites claros entre o que valoriza o rosto e o que o descaracteriza:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#ded5c8] text-sm text-[#4a3e35] font-light">
              <div className="space-y-2">
                <p className="font-medium text-[#2d241e]">Individualidade Estrutural:</p>
                <p className="leading-relaxed">
                  Não é possível reproduzir o formato facial de outra pessoa. A avaliação respeita a estrutura óssea, a idade biológica e as proporções intrínsecas de cada paciente.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-[#2d241e]">Evolução Gradativa:</p>
                <p className="leading-relaxed">
                  Intervenções em excesso em uma única sessão aumentam o risco de sobrecorreção. A Dra. Vânia prioriza procedimentos calibrados com acompanhamento regular.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DÚVIDAS FREQUENTES */}
        <section className="py-14 sm:py-20 border-b border-[#ded5c7]">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-2">
              Esclarecimentos
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              Dúvidas comuns sobre Full Face
            </h2>
          </div>

          <div className="max-w-3xl divide-y divide-[#ded5c7]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full flex items-center justify-between text-left py-1 text-base sm:text-lg font-medium text-[#2d241e] hover:text-[#82622f] transition-colors focus:outline-none cursor-pointer"
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
                  <div className="pt-3 pb-1 text-sm sm:text-base text-[#4a3e35] leading-relaxed font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 6. CONTATO E AÇÕES */}
        <section className="pt-14 sm:pt-20">
          <div className="bg-[#2e241d] text-[#faf6f0] p-8 sm:p-14 border border-[#483b30] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#d4ba90] font-semibold block">
                Atendimento em Brasília
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#faf6f0]">
                Deseja planejar sua harmonia facial de forma global?
              </h2>
              <p className="text-sm sm:text-base text-[#ded4c8] leading-relaxed font-light">
                Converse com a Dra. Vânia Medeiros no Águas Claras Shopping para entender quais possibilidades fazem sentido para os seus traços.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a
                href={contatoData.links.fullFace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl shadow-sm transition-all focus-visible:outline-none min-h-[48px]"
              >
                <span>Agendar no WhatsApp</span>
                <ArrowRight size={15} />
              </a>
              <button
                type="button"
                onClick={() => navigate("/tratamentos/")}
                className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-[#faf6f0] border border-[#5a483a] hover:bg-[#3a2f26] rounded-xl transition-colors min-h-[48px] cursor-pointer"
              >
                Outros Tratamentos
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
