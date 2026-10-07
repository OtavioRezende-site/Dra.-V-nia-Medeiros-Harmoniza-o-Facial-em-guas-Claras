import { useState } from "react";
import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ChevronDown, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { getAssetUrl } from "../utils/asset";

interface PreenchimentoProps {
  navigate: (path: string) => void;
}

export function Preenchimento({ navigate }: PreenchimentoProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const objectives = [
    {
      title: "Restauração de Suporte Ósseo e Tecidual",
      desc: "Reposição milimétrica de pontos de projeção no queixo, mandíbula ou maçãs do rosto para compensar a perda volumétrica natural com o passar dos anos.",
    },
    {
      title: "Alinhamento das Linhas e Contornos",
      desc: "Definição sutil de transições na face, restaurando equilíbrio visual entre terço médio e inferior sem alargar ou distorcer traços.",
    },
    {
      title: "Preservação da Dinâmica Muscular",
      desc: "Aplicação nos planos anatômicos corretos (justaperiosteal ou subcutâneo profundo) para manter o movimento livre e espontâneo do sorriso e da fala.",
    },
  ];

  const planningSteps = [
    {
      num: "01",
      title: "Estudo de Proporções e Simetrias",
      desc: "Mapeamento das medidas áureas, padrão de oclusão e suporte labial/mentoniano em vistas frontal, perfil e oblíqua.",
    },
    {
      num: "02",
      title: "Seleção do Reológico do Ácido Hialurônico",
      desc: "Escolha da densidade (viscosidade e elasticidade) ideal do biomaterial para cada plano anatômico, priorizando integração natural aos tecidos.",
    },
    {
      num: "03",
      title: "Aplicação Delicada com Microcânulas",
      desc: "Uso de cânulas de ponta romba que preservam vasos e nervos, proporcionando procedimento seguro e com redução drástica de hematomas.",
    },
    {
      num: "04",
      title: "Revisão e Acompanhamento",
      desc: "Consulta de retorno em 15 a 30 dias para checagem do assentamento do produto e pequenos refinamentos caso necessários.",
    },
  ];

  const faqs = [
    {
      q: "O preenchimento facial pode deixar o rosto artificial ou inchado?",
      a: "O excesso e a aplicação em planos inadequados são os responsáveis pela perda de naturalidade. A abordagem da Dra. Vânia Medeiros prioriza micro-doses estruturantes, restaurando o suporte natural sem inflar tecidos ou criar traços que não pertencem à sua fisionomia.",
    },
    {
      q: "Quanto tempo dura o efeito do ácido hialurônico?",
      a: "O ácido hialurônico é biocompatível e reabsorvível. Sua durabilidade varia conforme a densidade do produto utilizado, a região anatômica tratada e o metabolismo de cada paciente, geralmente estendendo-se por vários meses antes de uma manutenção planejada.",
    },
    {
      q: "Posso escolher a quantidade de seringas antes da consulta?",
      a: "Não é seguro nem recomendado estipular quantidades sem exame físico. A dosagem é milimetricamente calculada durante a avaliação presencial após análise da deficiência de suporte real.",
    },
    {
      q: "Quais cuidados imediatos devo adotar após o procedimento?",
      a: "Evitar compressão ou massagem na área tratada nas primeiras 48 horas, não realizar atividades físicas intensas no mesmo dia e manter hidratação adequada conforme orientações fornecidas no consultório.",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs
          items={[
            { label: "Tratamentos", href: "/tratamentos/" },
            { label: "Preenchimento Facial" },
          ]}
        />

        {/* 1. ABERTURA EDITORIAL PRÓPRIA COM RETRATO/MÍDIA CONFIRMADA */}
        <section className="pt-6 sm:pt-10 pb-14 sm:pb-20 border-b border-[#ded5c7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Texto de Abertura (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block">
                  Volumetria & Estruturação Óssea
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-[1.18]">
                  Preenchimento Facial
                </h1>
                <p className="text-base sm:text-lg text-[#82622f] font-medium font-serif italic">
                  Restauração de suporte e proporções anatômicas com ácido hialurônico de alta biocompatibilidade.
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
                <p className="text-[#2d241e] font-normal">
                  A perda de suporte ósseo e a reabsorção dos compartimentos profundos de gordura são processos naturais do envelhecimento. O preenchimento com ácido hialurônico restabelece pontos estratégicos de ancoragem, trazendo frescor ao olhar e refinamento ao contorno.
                </p>
                <p>
                  No consultório da Dra. Vânia Medeiros no Águas Claras Shopping, cada aplicação é orientada pela delicadeza: não se trata de alterar sua identidade, mas de devolver à sua face a harmonia e o repouso que o tempo modificou.
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={contatoData.links.preenchimento}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82622f] min-h-[46px]"
                >
                  <span>Conversar sobre Preenchimento Facial</span>
                  <ArrowRight size={15} />
                </a>
                <span className="text-xs text-[#615346] font-light">
                  Procedimento com microcânulas e anestesia local
                </span>
              </div>
            </div>

            {/* Mídia Pertinente: Registro Clínico Validado de Preenchimento (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px]">
                <div className="bg-[#ede6dc] overflow-hidden border border-[#ded5c8]">
                  <img
                    src={getAssetUrl("/midias/casos/caso-29.jpg")}
                    alt="Registro clínico de perfilometria e estruturação mandibular com ácido hialurônico - Dra. Vânia Medeiros"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between text-xs text-[#615346] font-light">
                  <span className="font-serif-editorial text-sm text-[#2d241e]">Registro Documentado</span>
                  <span>Estruturação de Perfil</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. OBJETIVOS QUE PODEM SER DISCUTIDOS NA AVALIAÇÃO */}
        <section className="py-14 sm:py-20 border-b border-[#ded5c7]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-2">
              Harmonia & Proporções
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#2d241e] leading-tight mb-4">
              Objetivos a definir na consulta presencial
            </h2>
            <p className="text-base text-[#4a3e35] leading-relaxed font-light">
              Entenda como cada plano de suporte é avaliado para assegurar um resultado sutil e proporcional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {objectives.map((obj, i) => (
              <div key={i} className="border-t border-[#ded5c7] pt-6 space-y-3">
                <span className="text-xs font-mono font-medium text-[#82622f]">
                  0{i + 1} / FOCO
                </span>
                <h3 className="text-xl font-serif-editorial text-[#2d241e]">
                  {obj.title}
                </h3>
                <p className="text-sm text-[#4a3e35] leading-relaxed font-light">
                  {obj.desc}
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
                Como acontece o planejamento
              </h2>
              <p className="text-sm sm:text-base text-[#4a3e35] font-light leading-relaxed">
                Técnica baseada em microcânulas e produtos certificados para garantir conforto e previsibilidade.
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#ded5c7]">
              {planningSteps.map((step) => (
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
                  Limitações e Cuidados no Preenchimento
                </h2>
                <p className="text-sm sm:text-base text-[#4a3e35] leading-relaxed font-light">
                  A segurança anatômica é o alicerce de qualquer aplicação facial:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#ded5c8] text-sm text-[#4a3e35] font-light">
              <div className="space-y-2">
                <p className="font-medium text-[#2d241e]">Foco em Sustentação, Não Volume:</p>
                <p className="leading-relaxed">
                  Preenchimento não deve ser utilizado indiscriminadamente para compensar flacidez profunda. Em casos necessários, a associação com fios de sustentação é a conduta que garante naturalidade.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-[#2d241e]">Assentamento Biológico:</p>
                <p className="leading-relaxed">
                  Pequeno edema temporário pode ocorrer nos primeiros dias. O resultado definitivo e o toque macio dos tecidos se consolidam após o período de integração tecidual.
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
              Dúvidas comuns sobre Preenchimento Facial
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
                Deseja planejar a volumetria da sua face com delicadeza?
              </h2>
              <p className="text-sm sm:text-base text-[#ded4c8] leading-relaxed font-light">
                Agende sua consulta com a Dra. Vânia Medeiros no Águas Claras Shopping para análise facial personalizada e transparente.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a
                href={contatoData.links.preenchimento}
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
