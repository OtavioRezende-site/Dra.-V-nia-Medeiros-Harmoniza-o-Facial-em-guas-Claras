import { useState } from "react";
import { Sparkles, Compass, ShieldCheck, HeartHandshake, Eye, ArrowRight } from "lucide-react";

interface Step {
  id: string;
  number: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  inPractice: string;
  icon: typeof Sparkles;
  highlight: string;
}

export function ClinicalJourney() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      id: "escuta",
      number: "01",
      phase: "PRIMEIRO CONTATO",
      title: "Acolhimento & Escuta Ativa",
      subtitle: "Compreender antes de propor",
      description:
        "O processo não começa com uma seringa ou agulha, mas com uma conversa atenta. Sentamos para ouvir o que incomoda você no espelho, suas expectativas, receios e, principalmente, aquilo que você faz questão de preservar na sua expressão.",
      inPractice:
        "Análise dos seus hábitos, histórico de saúde e procedimentos anteriores para garantir conforto e segurança absoluta.",
      icon: HeartHandshake,
      highlight: "Você é ouvida(o) sem pressa e sem imposição de padrões.",
    },
    {
      id: "mapeamento",
      number: "02",
      phase: "DIAGNÓSTICO ANATÔMICO",
      title: "Mapeamento Facial & Estudo de Proporções",
      subtitle: "A ciência das linhas e volumes naturais",
      description:
        "A face humana envelhece em camadas — osso, compartimentos de gordura profunda e pele. Avaliamos as forças dinâmicas da sua mímica facial, as assimetrias naturais e a perda de sustentação para identificar a real causa de cada queixa.",
      inPractice:
        "Exame visual em múltiplos ângulos (frontal, perfil e 3/4) respeitando a proporção áurea e a harmonia particular dos seus traços.",
      icon: Compass,
      highlight: "Tratamos a causa estrutural, não apenas o sintoma aparente.",
    },
    {
      id: "planejamento",
      number: "03",
      phase: "PLANO INTEGRADO",
      title: "O Plano Terapêutico Sob Medida",
      subtitle: "Combinação precisa de técnicas",
      description:
        "Aqui o cuidado ganha forma: em vez de aplicar uma receita genérica, desenhamos uma estratégia integrada. Se há flacidez, indicamos fios de sustentação; se há perda de contorno ósseo, preenchedores biocompatíveis; se há gordura submentual, lipo de papada HD.",
      inPractice:
        "Você entende exatamente o 'porquê' de cada técnica escolhida, as quantidades sugeridas e o cronograma recomendado.",
      icon: Sparkles,
      highlight: "Transparência total sobre possibilidades, etapas e limites.",
    },
    {
      id: "execucao",
      number: "04",
      phase: "O PROCEDIMENTO",
      title: "Execução Delicada & Máximo Conforto",
      subtitle: "Biossegurança e precisão milimétrica",
      description:
        "No consultório no Águas Claras Shopping, cada procedimento é conduzido em ambiente calmo e rigorosamente estéril. Utilizamos anestesia tópica e local de alta eficácia para proporcionar uma experiência serena e indolor.",
      inPractice:
        "Técnicas com microcânulas que reduzem drasticamente o risco de hematomas e preservam os vasos sanguíneos da face.",
      icon: ShieldCheck,
      highlight: "Conforto absoluto e respeito ao seu bem-estar durante todo o ato clínico.",
    },
    {
      id: "acompanhamento",
      number: "05",
      phase: "PÓS-CUIDADO & LONGEVIDADE",
      title: "Acompanhamento Contínuo & Revelação",
      subtitle: "Ao seu lado em cada fase da regeneração",
      description:
        "Nosso compromisso não termina quando o procedimento acaba. Você recebe protocolo completo de cuidados em casa e canal direto de comunicação para qualquer dúvida nos dias seguintes, além de consulta de retorno para revisão.",
      inPractice:
        "Avaliação do assentamento tecidual, bioestímulo progressivo do colágeno e garantia da naturalidade desejada.",
      icon: Eye,
      highlight: "Segurança de nunca estar desamparada(o) no pós-procedimento.",
    },
  ];

  const current = steps[activeStep];
  const IconComponent = current.icon;

  return (
    <div className="w-full">
      {/* Navegador Didático de Etapas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`text-left p-4 rounded-xl border transition-all cursor-pointer relative ${
                isActive
                  ? "bg-[#ffffff] border-[#b89660] shadow-md ring-1 ring-[#b89660]"
                  : "bg-[#ffffff]/60 border-[#e0d8ce] hover:border-[#b89660]/50 hover:bg-[#ffffff]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-mono font-bold ${
                    isActive ? "text-[#b89660]" : "text-[#5e5953]"
                  }`}
                >
                  {step.number}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? "bg-[#b89660]" : "bg-transparent"
                  }`}
                />
              </div>
              <p
                className={`text-xs font-bold uppercase tracking-wider line-clamp-1 ${
                  isActive ? "text-[#977643]" : "text-[#8c8882]"
                }`}
              >
                {step.phase}
              </p>
              <p
                className={`text-sm font-serif-editorial font-medium mt-1 line-clamp-1 ${
                  isActive ? "text-[#2d241e]" : "text-[#6b5d50]"
                }`}
              >
                {step.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Card da Etapa Ativa: Grande, Didático e Envolvente */}
      <div className="bg-[#ffffff] border border-[#e0d8ce] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#f7f2ea] rounded-full blur-3xl opacity-70 pointer-events-none -z-0" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo: Conteúdo Narrativo */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 bg-[#f7f2ea] text-[#977643] rounded-full border border-[#b89660]/30">
                ETAPA {current.number} DE 05
              </span>
              <span className="text-xs uppercase tracking-widest text-[#8c8882] font-semibold">
                {current.phase}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#2d241e] leading-tight">
                {current.title}
              </h3>
              <p className="text-base font-medium text-[#977643] mt-1 italic font-serif">
                {current.subtitle}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
              {current.description}
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-[#e5ded5] space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-[#2d241e]">
                Como funciona na prática:
              </p>
              <p className="text-sm text-[#6b5d50] leading-relaxed">
                {current.inPractice}
              </p>
            </div>
          </div>

          {/* Lado Direito: Destaque de Valor e Próxima Etapa */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 bg-[#f2eee8] p-6 sm:p-8 rounded-2xl border border-[#e0d8ce]">
            <div className="w-14 h-14 rounded-2xl bg-[#ffffff] shadow-xs flex items-center justify-center border border-[#b89660]/30 text-[#b89660]">
              <IconComponent className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#977643] block">
                Pilar de Confiança
              </span>
              <p className="text-base font-serif-editorial text-[#2d241e] leading-snug">
                &ldquo;{current.highlight}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-[#e0d8ce] flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))
                }
                className="text-xs font-medium text-[#6b5d50] hover:text-[#2d241e] cursor-pointer"
              >
                ← Anterior
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))
                }
                className="text-xs font-bold text-[#b89660] hover:text-[#977643] flex items-center gap-1 cursor-pointer"
              >
                <span>Próxima Etapa</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
