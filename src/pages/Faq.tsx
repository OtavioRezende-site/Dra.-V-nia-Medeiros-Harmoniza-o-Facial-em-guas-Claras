import { useState } from "react";
import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ChevronDown, ArrowRight } from "lucide-react";

interface FaqProps {
  navigate?: (path: string) => void;
}

export function Faq({ navigate: _navigate }: FaqProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "como-conversar": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const categories = [
    {
      id: "contato-e-localizacao",
      title: "Contato e Localização",
      description: "Orientações sobre endereço, agendamento e chegada ao consultório.",
      items: [
        {
          id: "como-conversar",
          q: "Como funciona o agendamento de uma consulta de avaliação?",
          a: "O primeiro contato é realizado pelo canal de WhatsApp. Nossa equipe apresenta os horários disponíveis, esclarece dúvidas preliminares e reserva sua consulta presencial com a Dra. Vânia Medeiros.",
        },
        {
          id: "onde-fica",
          q: "Onde o consultório está localizado?",
          a: "O atendimento ocorre no Águas Claras Shopping, Avenida das Araucárias, 1835, 5º andar, sala 566, Águas Claras, Brasília/DF (CEP 71936-250).",
        },
        {
          id: "estacionamento",
          q: "Há estacionamento no local?",
          a: "Sim. O Águas Claras Shopping possui estacionamento coberto com acesso direto aos elevadores da torre de consultórios.",
        },
        {
          id: "ordem-chegada",
          q: "O atendimento acontece por ordem de chegada?",
          a: "Não. Todos os atendimentos são privativos e ocorrem exclusivamente com horário marcado, garantindo pontualidade, discrição e dedicação total ao seu caso.",
        },
      ],
    },
    {
      id: "preparacao",
      title: "Preparação para a Consulta",
      description: "Como se organizar para o momento da avaliação diagnóstica.",
      items: [
        {
          id: "escolher-antes",
          q: "Preciso ter escolhido o procedimento antes de comparecer?",
          a: "Não. A indicação clínica é estabelecida pela Dra. Vânia durante a avaliação, após exame detalhado das camadas da face, proporções e dinâmica muscular.",
        },
        {
          id: "referencias",
          q: "Posso levar fotografias de referências que aprecio?",
          a: "Sim, fotografias ajudam a demonstrar o estilo estético que você admira. No entanto, cada anatomia é única, e a consulta servirá para alinhar o que é anatomicamente viável e natural para o seu rosto.",
        },
        {
          id: "outros-tratamentos",
          q: "Devo relatar procedimentos estéticos que já realizei no passado?",
          a: "Sim, isso é fundamental. Informar o histórico de preenchedores, fios ou bioestimuladores anteriores permite planejar a intervenção com máxima segurança e respeito aos tecidos.",
        },
      ],
    },
    {
      id: "planejamento-e-valores",
      title: "Planejamento e Valores",
      description: "Informações sobre condutas, orçamentos e recuperação.",
      items: [
        {
          id: "quais-tratamentos",
          q: "Quais procedimentos são realizados pela profissional?",
          a: "A Dra. Vânia Medeiros atua em Fios de PDO/PLLA (sustentação e bioestímulo), Full Face (harmonização global integrada), Lipo de Papada HD (contorno cervicomandibular) e preenchimento com ácido hialurônico.",
        },
        {
          id: "valores",
          q: "É possível saber o orçamento exato antes da avaliação?",
          a: "A precificação é individualizada e depende das técnicas selecionadas, quantidades de produto e complexidade do caso. Por determinação ética e técnica, o plano de tratamento completo é apresentado na consulta presencial.",
        },
        {
          id: "tempo-recuperacao",
          q: "Como é o período de recuperação após as aplicações?",
          a: "A maioria dos procedimentos ambulatoriais permite retorno breve à rotina. Pequeno edema ou sensibilidade leve podem ocorrer nos primeiros dias, e você receberá um protocolo detalhado de cuidados para casa.",
        },
        {
          id: "resultados-iguais",
          q: "O resultado será idêntico às fotos que vi?",
          a: "Cada organismo possui uma resposta biológica singular. As imagens demonstram a qualidade do trabalho da Dra. Vânia, mas os resultados individuais dependem da anatomia e do planejamento exclusivo de cada paciente.",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs items={[{ label: "Perguntas Frequentes" }]} />

        {/* 1. CABEÇALHO EDITORIAL ABERTO */}
        <section className="pt-6 sm:pt-10 mb-12 sm:mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-3">
            Transparência & Informação
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-[1.18] mb-6">
            Perguntas Frequentes
          </h1>
          <p className="text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
            Reunimos as respostas para as principais dúvidas sobre nossa conduta clínica, o preparo para a consulta e a localização em Brasília.
          </p>

          {/* Navegação Rápida por Temas */}
          <div className="flex flex-wrap items-center gap-2 pt-6">
            <span className="text-xs uppercase tracking-widest text-[#615346] font-semibold mr-2">
              Navegar por tema:
            </span>
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-1.5 text-xs font-semibold text-[#2d241e] bg-[#f1ebe1] border border-[#ded5c8] hover:border-[#82622f] hover:text-[#82622f] rounded-full transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </section>

        {/* 2. CATEGORIAS AGRUPADAS COM ACORDEÕES ACESSÍVEIS */}
        <div className="space-y-14 sm:space-y-20 max-w-4xl">
          {categories.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              className="scroll-mt-28 border-t border-[#ded5c7] pt-8 sm:pt-10"
            >
              <div className="mb-6 space-y-1">
                <span className="text-xs font-mono font-medium text-[#82622f] uppercase tracking-wider block">
                  Assunto
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
                  {cat.title}
                </h2>
                <p className="text-sm text-[#615346] font-light">
                  {cat.description}
                </p>
              </div>

              <div className="divide-y divide-[#ded5c7]">
                {cat.items.map((item) => {
                  const isOpen = Boolean(openItems[item.id]);
                  return (
                    <div key={item.id} className="py-4 sm:py-5">
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                        className="w-full flex items-center justify-between text-left gap-4 text-base sm:text-lg font-medium text-[#2d241e] hover:text-[#82622f] transition-colors focus-visible:outline-none cursor-pointer py-1"
                      >
                        <span>{item.q}</span>
                        <ChevronDown
                          size={18}
                          className={`text-[#82622f] shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div
                          id={`faq-answer-${item.id}`}
                          className="pt-3 pb-1 text-sm sm:text-base text-[#4a3e35] leading-relaxed font-light"
                        >
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* 3. BLOCO DE FECHAMENTO */}
        <section className="mt-16 sm:mt-24 bg-[#2e241d] text-[#faf6f0] p-8 sm:p-14 border border-[#483b30] flex flex-col lg:flex-row items-center justify-between gap-8 max-w-4xl">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#d4ba90] font-semibold block">
              Dúvidas Adicionais
            </span>
            <h3 className="text-2xl font-serif-editorial text-[#faf6f0]">
              Sua dúvida não foi respondida acima?
            </h3>
            <p className="text-sm text-[#ded4c8] font-light">
              Nossa equipe está à disposição no WhatsApp para esclarecer perguntas específicas sobre seu caso.
            </p>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <a
              href={contatoData.links.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl shadow-sm transition-all focus-visible:outline-none min-h-[48px]"
            >
              <span>Conversar no WhatsApp</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
