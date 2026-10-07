import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { getAssetUrl } from "../utils/asset";

interface ExperienciaProps {
  navigate: (path: string) => void;
}

export function Experiencia({ navigate: _navigate }: ExperienciaProps) {
  const narrativeSteps = [
    {
      num: "01",
      phase: "Primeiro Encontro",
      title: "Escuta atenta e compreensão das suas motivações",
      lead: "Você é recebida(o) em ambiente calmo e privativo. Antes de qualquer exame ou espelho, dedicamos tempo para conversar sobre suas expectativas e o que você faz questão de preservar.",
      detail:
        "Analisamos seu histórico clínico, experiências com procedimentos anteriores e a rotina do seu dia a dia, construindo uma relação de confiança mútua e transparência ética.",
    },
    {
      num: "02",
      phase: "Diagnóstico Clínico",
      title: "Mapeamento anatômico e estudo dinâmico da mímica",
      lead: "A face envelhece em camadas — sustentação óssea, compartimentos de gordura profunda e pele. Avaliamos a dinâmica das suas expressões em repouso, ao sorrir e em múltiplos ângulos.",
      detail:
        "Esse diagnóstico profundo permite tratar a real origem do cansaço facial ou da flacidez, evitando aplicações desnecessárias ou sobreposições de produto.",
    },
    {
      num: "03",
      phase: "Alinhamento Estratégico",
      title: "Construção conjunta do plano terapêutico",
      lead: "Apresentamos uma proposta clara, explicando exatamente o porquê de cada técnica recomendada, a ordem cronológica ideal e as dosagens calculadas.",
      detail:
        "Você decide com tranquilidade e no seu próprio ritmo, tendo em mãos todas as orientações, limites e previsibilidade do planejamento.",
    },
    {
      num: "04",
      phase: "Ato Clínico",
      title: "Execução delicada com foco em conforto absoluto",
      lead: "No consultório no Águas Claras Shopping, o procedimento é realizado com anestesia local de alta eficácia, ambiente rigorosamente estéril e uso de microcânulas atraumáticas.",
      detail:
        "O emprego de cânulas de ponta romba preserva vasos sanguíneos e nervos, reduzindo drasticamente o risco de hematomas e garantindo uma experiência serena.",
    },
    {
      num: "05",
      phase: "Cuidado Contínuo",
      title: "Acompanhamento pós-procedimento e consulta de retorno",
      lead: "O cuidado não se encerra ao sair da sala. Você recebe suporte direto pelo canal de comunicação para sanar dúvidas e retorna para revisão clínica presencial.",
      detail:
        "Acompanhamos o assentamento tecidual, a integração dos biomateriais e o estímulo do colágeno, garantindo a longevidade dos resultados com total assistência.",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs items={[{ label: "Experiência de Atendimento" }]} />

        {/* 1. CABEÇALHO EDITORIAL ABERTO COM RETRATO DA DRA. VÂNIA */}
        <section className="pt-6 sm:pt-10 pb-14 sm:pb-20 border-b border-[#ded5c7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block">
                Jornada do Paciente · Método Clínico
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-[1.18]">
                Um ambiente sereno, uma condução transparente
              </h1>
              <div className="space-y-4 text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
                <p className="text-[#2d241e] font-normal">
                  Cuidar do rosto exige acolhimento e respeito. A experiência de atendimento com a Dra. Vânia Medeiros foi desenhada para que você se sinta compreendida(o) desde a primeira mensagem até o acompanhamento após a consulta.
                </p>
                <p>
                  No Águas Claras Shopping em Brasília, o consultório oferece atendimento privativo e com horário reservado, garantindo discrição, tranquilidade e dedicação total ao seu momento.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={contatoData.links.geral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl shadow-sm transition-all focus-visible:outline-none min-h-[46px]"
                >
                  <span>Agendar Consulta de Avaliação</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px]">
                <div className="bg-[#ede6dc] overflow-hidden border border-[#ded5c8]">
                  <img
                    src={getAssetUrl("/midias/retratos/retrato-principal.png")}
                    alt="Dra. Vânia Medeiros em atendimento em Brasília"
                    width={455}
                    height={549}
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between text-xs text-[#615346] font-light">
                  <span className="font-serif-editorial text-sm text-[#2d241e]">Dra. Vânia Medeiros</span>
                  <span>Águas Claras Shopping, Sala 566</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. NARRATIVA EDITORIAL CONTÍNUA DA JORNADA (SEM CARDS FECHADOS) */}
        <section className="py-14 sm:py-20 border-b border-[#ded5c7]">
          <div className="max-w-3xl mb-14 sm:mb-18">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-2">
              As 5 Etapas do Cuidado
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#2d241e] leading-tight mb-4">
              A narrativa de cada consulta
            </h2>
            <p className="text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
              Conheça o passo a passo ético e clínico que sustenta cada indicação em nosso consultório.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {narrativeSteps.map((step) => (
              <article
                key={step.num}
                className="border-t border-[#ded5c7] pt-8 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline"
              >
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#82622f]">
                      ETAPA {step.num}
                    </span>
                    <span className="w-4 h-px bg-[#ded5c7]"></span>
                    <span className="text-xs uppercase tracking-wider text-[#5c4e42]">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-editorial font-normal text-[#2d241e] leading-snug">
                    {step.title}
                  </h3>
                </div>

                <div className="lg:col-span-8 space-y-4">
                  <p className="text-base sm:text-lg text-[#2d241e] font-light leading-relaxed">
                    {step.lead}
                  </p>
                  <p className="text-sm sm:text-base text-[#4a3e35] font-light leading-relaxed border-l border-[#ded5c7] pl-4">
                    {step.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. LOCALIZAÇÃO E AMBIENTE (APENAS DADOS REAIS CONFIRMADOS) */}
        <section className="pt-14 sm:pt-20">
          <div className="bg-[#2e241d] text-[#faf6f0] p-8 sm:p-14 border border-[#483b30]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-widest text-[#d4ba90] font-semibold block">
                  Localização Confirmada
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#faf6f0]">
                  Águas Claras Shopping
                </h2>
                <div className="space-y-2 text-sm sm:text-base text-[#ded4c8] font-light leading-relaxed">
                  <p className="text-base font-normal text-[#faf6f0]">
                    Av. das Araucárias, 1835 · 5º andar · Sala 566
                  </p>
                  <p>Águas Claras · Brasília/DF · CEP 71936-250</p>
                  <p className="text-xs text-[#d4ba90] pt-1">
                    Atendimento exclusivamente com horário marcado. O shopping conta com estacionamento coberto no local.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#483b30] flex flex-wrap gap-4">
                  <a
                    href={contatoData.links.geral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl shadow-sm transition-all focus-visible:outline-none min-h-[46px]"
                  >
                    <span>Conversar no WhatsApp</span>
                    <ArrowRight size={15} />
                  </a>
                  <a
                    href={contatoData.mapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#faf6f0] border border-[#5a483a] hover:bg-[#3a2f26] rounded-xl transition-colors min-h-[46px]"
                  >
                    <MapPin size={15} className="text-[#d4ba90]" />
                    <span>Abrir Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#3a2f26] p-6 sm:p-8 border border-[#5a483a] space-y-4">
                <h3 className="font-serif-editorial text-xl text-[#faf6f0]">
                  Orientações para o dia da visita
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#ded4c8] font-light leading-relaxed">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#d4ba90] shrink-0 mt-0.5" />
                    <span>Acesso pelos elevadores da torre comercial até o 5º andar.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#d4ba90] shrink-0 mt-0.5" />
                    <span>Chegada tranquila com horário pré-reservado sem fila de espera.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="text-[#d4ba90] shrink-0 mt-0.5" />
                    <span>Tempo suficiente para conversar com calma e esclarecer dúvidas.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
