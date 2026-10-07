import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, MapPin, ShieldCheck, HeartHandshake, Compass, Sparkles, Eye } from "lucide-react";

interface ExperienciaProps {
  navigate: (path: string) => void;
}

export function Experiencia({ navigate }: ExperienciaProps) {
  const steps = [
    {
      num: "01",
      icon: HeartHandshake,
      phase: "Fase 01 · Acolhimento",
      title: "Escuta Ativa & Compreensão das Expectativas",
      desc: "Você é recebida(o) em ambiente privativo. Antes de qualquer exame, conversamos sobre o que motivou sua visita, seu histórico de procedimentos e o que você faz questão de preservar na sua fisionomia.",
      details: "Sem julgamentos, sem pressão e com total sigilo médico/odontológico.",
    },
    {
      num: "02",
      icon: Compass,
      phase: "Fase 02 · Diagnóstico",
      title: "Mapeamento Anatômico & Análise Facial Tridimensional",
      desc: "Avaliamos a face de forma dinâmica: expressões em repouso e em movimento, simetria, perda de suporte ósseo e compartimentos de gordura. Isso nos permite tratar a causa do envelhecimento, e não apenas disfarçar linhas.",
      details: "Estudo detalhado em três ângulos (frente, perfil e 3/4).",
    },
    {
      num: "03",
      icon: Sparkles,
      phase: "Fase 03 · Estratégia",
      title: "Construção do Plano Terapêutico Sob Medida",
      desc: "Apresentamos um plano individualizado com clareza absoluta sobre cada técnica proposta (fios de sustentação, preenchedores, lipo de papada HD), quantidades, etapas recomendadas e investimentos.",
      details: "Você decide no seu próprio tempo, com todas as informações nas mãos.",
    },
    {
      num: "04",
      icon: ShieldCheck,
      phase: "Fase 04 · Realização",
      title: "Execução Segura, Delicada e com Conforto Clínico",
      desc: "Utilizamos protocolos anestésicos modernos para que o momento do procedimento seja calmo e confortável. O emprego de microcânulas reduz o trauma tecidual e praticamente elimina o risco de hematomas severos.",
      details: "Biossegurança rigorosa com materiais biocompatíveis de primeira linha.",
    },
    {
      num: "05",
      icon: Eye,
      phase: "Fase 05 · Acompanhamento",
      title: "Protocolo Pós-Atendimento & Consulta de Revisão",
      desc: "Nossa equipe acompanha você de perto após a aplicação. Você recebe orientações práticas para sua rotina e retorna ao consultório para conferência do assentamento do produto e bioestímulo do colágeno.",
      details: "Canal aberto e direto para qualquer dúvida nos dias seguintes.",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs items={[{ label: "Experiência de Atendimento" }]} />

        {/* Cabeçalho */}
        <div className="max-w-3xl pt-6 sm:pt-10 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f2ea] text-[#977643] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#b89660]/30">
            <span>Protocolo Clínico Humanizado</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight mb-6">
            O processo por trás de cada resultado.
          </h1>
          <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
            Entenda como cada detalhe do atendimento da Dra. Vânia Medeiros é
            planejado para oferecer segurança técnica, transparência ética e
            absoluto conforto emocional.
          </p>
        </div>

        {/* Sequência vertical contínua em cards nobres */}
        <div className="space-y-8 max-w-4xl">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#ffffff] border border-[#e0d8ce] rounded-3xl p-8 sm:p-10 shadow-sm hover:border-[#b89660] transition-colors relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#f7f2ea] flex items-center justify-center border border-[#b89660]/30 text-[#b89660] shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#b89660]">
                        {step.num}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#977643]">
                        {step.phase}
                      </span>
                    </div>

                    <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e]">
                      {step.title}
                    </h2>

                    <p className="text-base text-[#6b5d50] leading-relaxed font-light">
                      {step.desc}
                    </p>

                    <div className="pt-2 text-xs font-medium text-[#2d241e] bg-[#faf8f5] p-3.5 rounded-xl border border-[#e5ded5]">
                      ✓ {step.details}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Faixa de Localização */}
        <div className="mt-16 bg-[#f2eee8] rounded-3xl p-8 sm:p-12 border border-[#e0d8ce] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              Agende sua visita ao consultório
            </h3>
            <div className="text-sm text-[#2d241e] space-y-1">
              <p className="font-semibold text-base text-[#2d241e]">
                Águas Claras Shopping
              </p>
              <p className="text-[#6b5d50]">
                Av. das Araucárias, 1835 · 5º andar · Sala 566<br />
                Águas Claras · Brasília/DF · CEP 71936-250
              </p>
            </div>
            <p className="text-sm text-[#6b5d50] leading-relaxed pt-2">
              Atendimento com hora marcada para assegurar privacidade e dedicação
              exclusiva ao seu caso.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto">
            <a
              href={contatoData.links.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#b89660] hover:bg-[#977643] rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Conversar pelo WhatsApp</span>
              <ArrowRight size={16} />
            </a>
            <a
              href={contatoData.mapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-[#2d241e] bg-white border border-[#b89660]/40 hover:bg-[#f7f2ea] hover:text-[#977643] rounded-xl transition-colors whitespace-nowrap"
            >
              <MapPin size={16} />
              <span>Ver localização no mapa</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
