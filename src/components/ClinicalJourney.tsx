import { useState } from "react";
import { ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";

interface Step {
  id: string;
  number: string;
  shortLabel: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  inPractice: string;
  highlight: string;
}

export function ClinicalJourney() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      id: "escuta",
      number: "01",
      shortLabel: "Escuta",
      phase: "Primeiro Contato",
      title: "Acolhimento & Escuta Ativa",
      subtitle: "Compreender antes de propor",
      description:
        "O processo não começa com uma seringa ou agulha, mas com uma conversa atenta. Sentamos para ouvir o que incomoda você no espelho, suas expectativas, receios e, principalmente, aquilo que você faz questão de preservar na sua expressão.",
      inPractice:
        "Análise minuciosa dos seus hábitos, histórico de saúde e procedimentos anteriores para planejar o atendimento com máximo rigor técnico e tranquilidade.",
      highlight: "Você é ouvida(o) sem pressa e sem imposição de padrões.",
    },
    {
      id: "avaliacao",
      number: "02",
      shortLabel: "Avaliação",
      phase: "Diagnóstico Anatômico",
      title: "Mapeamento Facial & Estudo de Proporções",
      subtitle: "A ciência das linhas e volumes naturais",
      description:
        "A face humana envelhece em camadas — osso, compartimentos de gordura profunda e pele. Avaliamos as forças dinâmicas da sua mímica facial, as assimetrias naturais e a perda de sustentação para identificar a real causa de cada queixa.",
      inPractice:
        "Exame visual em múltiplos ângulos (frontal, perfil e 3/4) respeitando a proporção áurea e a harmonia particular dos seus traços.",
      highlight: "Tratamos a causa estrutural, não apenas o sintoma aparente.",
    },
    {
      id: "planejamento",
      number: "03",
      shortLabel: "Planejamento",
      phase: "Plano Integrado",
      title: "O Plano Terapêutico Sob Medida",
      subtitle: "Combinação precisa de técnicas",
      description:
        "Aqui o cuidado ganha forma: em vez de aplicar uma receita genérica, desenhamos uma estratégia integrada. Se há flacidez, indicamos fios de sustentação; se há perda de contorno ósseo, preenchedores biocompatíveis; se há gordura submentual, lipo de papada HD.",
      inPractice:
        "Você entende exatamente o 'porquê' de cada técnica escolhida, as quantidades sugeridas e o cronograma recomendado.",
      highlight: "Transparência total sobre possibilidades, etapas e limites.",
    },
    {
      id: "procedimento",
      number: "04",
      shortLabel: "Procedimento",
      phase: "O Procedimento",
      title: "Execução Delicada & Máximo Conforto",
      subtitle: "Biossegurança e precisão milimétrica",
      description:
        "No consultório no Águas Claras Shopping, cada procedimento é conduzido em ambiente calmo e rigorosamente estéril. Utilizamos anestesia tópica e local de alta eficácia para proporcionar uma experiência serena e indolor.",
      inPractice:
        "Técnicas com microcânulas que reduzem drasticamente o risco de hematomas e preservam os vasos sanguíneos da face.",
      highlight: "Conforto absoluto e respeito ao seu bem-estar durante todo o ato clínico.",
    },
    {
      id: "acompanhamento",
      number: "05",
      shortLabel: "Acompanhamento",
      phase: "Pós-Cuidado & Longevidade",
      title: "Acompanhamento Contínuo & Revelação",
      subtitle: "Ao seu lado em cada fase da regeneração",
      description:
        "Nosso compromisso não termina quando o procedimento acaba. Você recebe protocolo completo de cuidados em casa e canal direto de comunicação para qualquer dúvida nos dias seguintes, além de consulta de retorno para revisão.",
      inPractice:
        "Avaliação do assentamento tecidual, estímulo progressivo do colágeno e acompanhamento minucioso da evolução natural.",
      highlight: "Segurança de nunca estar desamparada(o) no pós-procedimento.",
    },
  ];

  const current = steps[activeStep];

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="w-full">
      {/* 1. MODO MOBILE (< 768px): ACORDEÃO VERTICAL ACESSÍVEL E DIRETO */}
      <div className="md:hidden space-y-3">
        {steps.map((step, idx) => {
          const isOpen = idx === activeStep;
          return (
            <div
              key={step.id}
              className={`border transition-colors duration-200 ${
                isOpen
                  ? "bg-[#faf7f2] border-[#ded5c7]"
                  : "bg-white/60 border-[#ded5c7] hover:border-[#82622f]"
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveStep(idx)}
                aria-expanded={isOpen}
                aria-controls={`step-content-${step.id}`}
                className="w-full flex items-center justify-between text-left p-4 sm:p-5 cursor-pointer touch-manipulation min-h-[52px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#82622f]"
              >
                <div className="flex items-center gap-3 pr-2">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isOpen ? "text-[#82622f]" : "text-[#8a7c6f]"
                    }`}
                  >
                    {step.number}
                  </span>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#82622f] block leading-none mb-1">
                      {step.phase}
                    </span>
                    <span
                      className={`text-base font-serif-editorial font-medium ${
                        isOpen ? "text-[#2d241e]" : "text-[#4a3e35]"
                      }`}
                    >
                      {step.shortLabel} · {step.title}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-[#82622f] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`step-content-${step.id}`}
                  className="px-4 pb-5 sm:px-5 sm:pb-6 pt-1 space-y-5 border-t border-[#ded5c7]"
                >
                  <p className="text-sm font-serif italic text-[#82622f]">
                    {step.subtitle}
                  </p>

                  <p className="text-sm text-[#4a3e35] leading-relaxed font-light">
                    {step.description}
                  </p>

                  <div className="space-y-4 pt-2 border-t border-[#ded5c7]">
                    <div className="space-y-1">
                      <span className="text-[11px] uppercase tracking-widest text-[#2d241e] font-bold block">
                        Como funciona na prática
                      </span>
                      <p className="text-xs text-[#5c4e42] leading-relaxed font-light">
                        {step.inPractice}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] uppercase tracking-widest text-[#82622f] font-bold block">
                        Pilar de Confiança
                      </span>
                      <p className="text-sm font-serif italic text-[#2d241e] leading-relaxed">
                        &ldquo;{step.highlight}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Ações de navegação anterior / próxima no mobile */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#ded5c7]">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5c4e42] hover:text-[#2d241e] py-2 cursor-pointer focus-visible:outline-none min-h-[44px]"
                    >
                      <ArrowLeft size={14} />
                      <span>Anterior</span>
                    </button>
                    <span className="text-xs font-mono text-[#8a7c6f]">
                      {step.number} / 05
                    </span>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#82622f] hover:text-[#2d241e] py-2 cursor-pointer focus-visible:outline-none min-h-[44px]"
                    >
                      <span>Próxima</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 2. MODO TABLET & DESKTOP (>= 768px): MASTER-DETAIL EDITORIAL */}
      <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-14 items-start">
        {/* COLUNA ESQUERDA: Lista vertical numerada com rótulos curtos */}
        <div className="md:col-span-5 lg:col-span-4 border-r border-[#ded5c7] pr-6 lg:pr-8 space-y-1">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#82622f] block mb-4">
            Etapas da Jornada
          </span>
          <div className="space-y-1.5">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`w-full flex items-baseline justify-between text-left py-3.5 px-4 transition-all cursor-pointer relative group rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#82622f] min-h-[48px] ${
                    isActive
                      ? "bg-[#faf7f2] text-[#2d241e] shadow-2xs"
                      : "hover:bg-[#e6dfd3]/70 text-[#5c4e42] hover:text-[#2d241e]"
                  }`}
                >
                  <div className="flex items-baseline gap-3.5">
                    <span
                      className={`text-xs font-mono font-medium transition-colors ${
                        isActive ? "text-[#82622f]" : "text-[#8a7c6f] group-hover:text-[#82622f]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`text-base font-serif-editorial transition-colors ${
                        isActive ? "text-[#2d241e] font-medium" : "text-[#4a3e35]"
                      }`}
                    >
                      {step.shortLabel}
                    </span>
                  </div>

                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#82622f] shrink-0 self-center" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* COLUNA DIREITA: Conteúdo aberto da etapa selecionada */}
        <div className="md:col-span-7 lg:col-span-8 space-y-7">
          <div>
            <div className="flex items-center gap-2.5 text-xs text-[#82622f] font-medium mb-3">
              <span className="font-mono">{current.number}</span>
              <span aria-hidden="true">·</span>
              <span className="uppercase tracking-wider font-semibold">{current.phase}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-serif-editorial font-normal text-[#2d241e] leading-[1.2]">
              {current.title}
            </h3>

            <p className="text-base sm:text-lg font-serif italic text-[#82622f] mt-2">
              {current.subtitle}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light max-w-2xl">
            {current.description}
          </p>

          {/* Camada editorial dividida por linhas sutis */}
          <div className="border-t border-[#ded5c7] pt-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#2d241e] font-bold">
                Como funciona na prática
              </h4>
              <p className="text-sm text-[#5c4e42] leading-relaxed font-light">
                {current.inPractice}
              </p>
            </div>

            <div className="border-t sm:border-t-0 sm:border-l border-[#ded5c7] pt-6 sm:pt-0 sm:pl-8 space-y-2">
              <h4 className="text-xs uppercase tracking-widest text-[#82622f] font-bold">
                Pilar de Confiança
              </h4>
              <p className="text-base font-serif italic text-[#2d241e] leading-relaxed">
                &ldquo;{current.highlight}&rdquo;
              </p>
            </div>
          </div>

          {/* Navegação entre etapas */}
          <div className="flex items-center justify-between pt-6 border-t border-[#ded5c7]">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#5c4e42] hover:text-[#2d241e] transition-colors cursor-pointer py-2 focus-visible:outline-none min-h-[44px]"
            >
              <ArrowLeft size={14} />
              <span>Etapa Anterior</span>
            </button>

            <span className="text-xs font-mono text-[#8a7c6f]">
              {current.number} / 05
            </span>

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#82622f] hover:text-[#2d241e] transition-colors cursor-pointer py-2 focus-visible:outline-none min-h-[44px]"
            >
              <span>Próxima Etapa</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
