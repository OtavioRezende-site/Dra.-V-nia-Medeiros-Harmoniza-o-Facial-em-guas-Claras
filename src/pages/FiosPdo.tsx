import { useState } from "react";
import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ChevronDown, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import { getAssetUrl } from "../utils/asset";

interface FiosPdoProps {
  navigate: (path: string) => void;
}

export function FiosPdo({ navigate }: FiosPdoProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const objectives = [
    {
      title: "Estímulo Autólogo de Colágeno",
      desc: "Promover a síntese gradual de colágeno nas camadas subdérmicas onde há perda de firmeza tecidual e densidade dérmica com o passar dos anos.",
    },
    {
      title: "Sustentação e Reposicionamento",
      desc: "Apoiar tecidos que sofreram ptose gravitacional sutil, restabelecendo vetores de tração anatômicos sem conferir volume volumoso ou artificial.",
    },
    {
      title: "Preservação da Expressão Dinâmica",
      desc: "Trabalhar em harmonia com a mímica facial da paciente, mantendo o movimento natural dos músculos e a leveza ao sorrir ou falar.",
    },
  ];

  const stepsPlanning = [
    {
      num: "01",
      title: "Avaliação do Plano e Vetores",
      desc: "Análise da espessura cutânea, mobilidade tecidual e identificação dos vetores anatômicos de tração e ancoragem específicos para sua face.",
    },
    {
      num: "02",
      title: "Seleção do Tipo de Fio",
      desc: "Definição técnica entre polidioxanona (PDO) e poli-L-lático (PLLA) — lisos, espiculados ou de tração — conforme o propósito clínico discutido.",
    },
    {
      num: "03",
      title: "Execução Delicada em Consultório",
      desc: "Procedimento realizado em ambiente clínico estéril no Águas Claras Shopping, com anestesia local para proporcionar conforto e serenidade.",
    },
    {
      num: "04",
      title: "Acompanhamento da Evolução",
      desc: "Consulta de retorno programada para avaliar o assentamento dos fios e o progresso gradual do estímulo de colágeno ao longo dos meses.",
    },
  ];

  const faqs = [
    {
      q: "Qual a diferença prática entre fios de PDO e PLLA?",
      a: "Ambos são polímeros absorvíveis de uso médico consagrado. Os fios de PDO estimulam colágeno e oferecem tração com absorção biológica média de alguns meses, enquanto o PLLA possui maior tempo de permanência tecidual e indução gradual de firmeza. A escolha do material é sempre fundamentada no exame clínico individual.",
    },
    {
      q: "O procedimento substitui uma cirurgia de lifting facial?",
      a: "Não. Fios de sustentação e bioestímulo atuam em casos de flacidez leve a moderada e perda inicial de firmeza. Em situações de excesso de pele acentuado, a indicação pode ser cirúrgica, o que é esclarecido com total transparência durante a consulta de avaliação.",
    },
    {
      q: "Como funciona a definição de valores e quantidades de fios?",
      a: "A quantidade de fios e o planejamento técnico dependem exclusivamente da análise do tônus cutâneo e das áreas que demandam sustentação. Por determinação ética e técnica, orçamentos precisos são apresentados após o diagnóstico presencial.",
    },
    {
      q: "Quais são os cuidados recomendados após a colocação?",
      a: "Recomenda-se evitar manipulação excessiva da face, atividades físicas de alto impacto nos primeiros dias e dormir de barriga para cima conforme orientado individualmente no consultório.",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs
          items={[
            { label: "Tratamentos", href: "/tratamentos/" },
            { label: "Fios de PDO / PLLA" },
          ]}
        />

        {/* 1. ABERTURA EDITORIAL PRÓPRIA COM RETRATO/MÍDIA CONFIRMADA */}
        <section className="pt-6 sm:pt-10 pb-14 sm:pb-20 border-b border-[#ded5c7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Texto de Abertura (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block">
                  Bioestímulo & Sustentação Facial
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-[1.18]">
                  Fios de PDO e PLLA
                </h1>
                <p className="text-base sm:text-lg text-[#82622f] font-medium font-serif italic">
                  Sustentação dos tecidos e estímulo gradual de colágeno sem volumização excessiva.
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
                <p className="text-[#2d241e] font-normal">
                  Com o tempo, a face sofre alterações na sustentação ligamentar e na produção natural de colágeno. O tratamento com fios absorvíveis (PDO e PLLA) atua no reposicionamento dos tecidos e no estímulo biológico contínuo, devolvendo firmeza e contorno com sutileza.
                </p>
                <p>
                  Na consulta conduzida pela Dra. Vânia Medeiros no Águas Claras Shopping, a indicação é baseada em estudo anatômico rigoroso, identificando se sua queixa se beneficia de tração mecânica, estímulo subdérmico ou da combinação harmoniosa de abordagens.
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={contatoData.links.fios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82622f] min-h-[46px]"
                >
                  <span>Conversar sobre avaliação para Fios</span>
                  <ArrowRight size={15} />
                </a>
                <span className="text-xs text-[#615346] font-light">
                  Atendimento privativo com horário marcado
                </span>
              </div>
            </div>

            {/* Mídia Pertinente: Registro Clínico Validado de Fios (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px]">
                <div className="bg-[#ede6dc] overflow-hidden border border-[#ded5c8]">
                  <img
                    src={getAssetUrl("/midias/casos/caso-28.jpg")}
                    alt="Registro clínico de reposicionamento e sustentação com fios - Dra. Vânia Medeiros"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between text-xs text-[#615346] font-light">
                  <span className="font-serif-editorial text-sm text-[#2d241e]">Registro Documentado</span>
                  <span>Sustentação Tecidual</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. OBJETIVOS QUE PODEM SER DISCUTIDOS NA AVALIAÇÃO */}
        <section className="py-14 sm:py-20 border-b border-[#ded5c7]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-2">
              Planejamento Anatômico
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#2d241e] leading-tight mb-4">
              Objetivos a alinhar durante a consulta
            </h2>
            <p className="text-base text-[#4a3e35] leading-relaxed font-light">
              Nenhum plano é padronizado. Durante a avaliação, os objetivos são delineados com base nas reais necessidades estruturais da sua pele.
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
                Cada etapa segue critérios de biossegurança, conforto e clareza para que você tenha total previsibilidade sobre o processo.
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#ded5c7]">
              {stepsPlanning.map((step) => (
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
                  Limitações e Cuidados Importantes
                </h2>
                <p className="text-sm sm:text-base text-[#4a3e35] leading-relaxed font-light">
                  A honestidade clínica é premissa de cada conduta da Dra. Vânia Medeiros. O tratamento com fios apresenta características biológicas específicas que devem ser compreendidas:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#ded5c8] text-sm text-[#4a3e35] font-light">
              <div className="space-y-2">
                <p className="font-medium text-[#2d241e]">Indicação e Resposta Biológica:</p>
                <p className="leading-relaxed">
                  Os resultados dependem da capacidade orgânica de biossíntese de colágeno, da espessura da derme e do grau de flacidez prévio. Fios não substituem procedimentos cirúrgicos quando há sobra excessiva de pele.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-[#2d241e]">Pós-Procedimento e Assentamento:</p>
                <p className="leading-relaxed">
                  Podem ocorrer edema leve, pequenas dobras temporárias e sensibilidade local nos primeiros dias, fenômenos esperados que regridem conforme o assentamento tecidual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DÚVIDAS FREQUENTES SOBRE FIOS */}
        <section className="py-14 sm:py-20 border-b border-[#ded5c7]">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-2">
              Esclarecimentos
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              Dúvidas comuns sobre Fios de PDO e PLLA
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
                Deseja avaliar a indicação de fios para você?
              </h2>
              <p className="text-sm sm:text-base text-[#ded4c8] leading-relaxed font-light">
                Agende uma conversa presencial com a Dra. Vânia Medeiros no Águas Claras Shopping para exame detalhado dos planos teciduais do seu rosto.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a
                href={contatoData.links.fios}
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
