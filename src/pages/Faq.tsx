import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight } from "lucide-react";

interface FaqProps {
  navigate?: (path: string) => void;
}

export function Faq({ navigate: _navigate }: FaqProps) {
  const categories = [
    {
      id: "contato-e-localizacao",
      title: "Contato e Localização",
      items: [
        {
          id: "como-conversar",
          q: "Como posso conversar sobre uma avaliação?",
          a: "Use o botão de WhatsApp do site para pedir informações sobre o agendamento e apresentar seu interesse. O contato inicial não confirma uma consulta automaticamente.",
        },
        {
          id: "onde-fica",
          q: "Onde fica o atendimento?",
          a: "O endereço informado é Águas Claras Shopping, Avenida das Araucárias, 1835, 5º andar, sala 566, Águas Claras, Brasília/DF, CEP 71936-250. Confirme data e orientações de chegada antes de se deslocar.",
        },
        {
          id: "horario",
          q: "Qual é o horário de atendimento?",
          a: "Consulte a disponibilidade pelo WhatsApp. Os horários não estão publicados nesta versão do site.",
        },
        {
          id: "estacionamento",
          q: "Existe estacionamento ou acesso adaptado?",
          a: "Peça essas informações ao atendimento antes da visita, para receber orientações adequadas ao seu deslocamento.",
        },
        {
          id: "ordem-chegada",
          q: "O atendimento acontece por ordem de chegada?",
          a: "Confirme pelo WhatsApp como funciona o agendamento antes de ir ao endereço. O site não disponibiliza atendimento sem confirmação.",
        },
      ],
    },
    {
      id: "preparacao",
      title: "Preparação para a Consulta",
      items: [
        {
          id: "escolher-antes",
          q: "Preciso escolher o procedimento antes de entrar em contato?",
          a: "Não. Você pode começar explicando suas dúvidas e pedindo informações sobre a avaliação.",
        },
        {
          id: "referencias",
          q: "Posso levar referências de resultados que gostei?",
          a: "Você pode usá-las para explicar suas preferências à profissional. Elas não representam garantia de que um resultado poderá ser reproduzido identicamente.",
        },
        {
          id: "outros-tratamentos",
          q: "Já fiz outros tratamentos. Devo informar?",
          a: "Sim. Conte à profissional sobre procedimentos anteriores e leve essas informações para a avaliação.",
        },
        {
          id: "apenas-foto",
          q: "É possível definir um tratamento apenas por uma foto?",
          a: "Uma foto não substitui a avaliação individual presencial. Use o contato inicial para pedir informações sobre o atendimento.",
        },
      ],
    },
    {
      id: "planejamento-e-valores",
      title: "Planejamento e Valores",
      items: [
        {
          id: "quais-tratamentos",
          q: "Quais tratamentos são apresentados neste site?",
          a: "Fios de PDO/PLLA, Full Face, Lipo de Papada HD e preenchimento facial. A indicação e a disponibilidade devem ser confirmadas com a profissional.",
        },
        {
          id: "valores",
          q: "Qual é o valor da avaliação e dos procedimentos?",
          a: "Solicite informações pelo WhatsApp. Este site não apresenta uma tabela de preços pública fixa.",
        },
        {
          id: "formas-pagamento",
          q: "Quais formas de pagamento são aceitas?",
          a: "Confirme as condições diretamente no atendimento. Não há condições de parcelamento publicadas nesta versão.",
        },
        {
          id: "tempo-recuperacao",
          q: "Quanto tempo demora a recuperação?",
          a: "Essa informação depende do procedimento e da avaliação do caso. Peça orientações específicas à profissional antes de decidir.",
        },
        {
          id: "resultados-iguais",
          q: "Os resultados são iguais aos das fotos?",
          a: "Não. Cada caso tem características próprias, e fotos de outras pessoas não constituem promessa de resultado.",
        },
        {
          id: "remarcar",
          q: "Como remarcar uma consulta?",
          a: "Entre em contato pelo WhatsApp para consultar a possibilidade de remarcação e as condições aplicáveis ao seu agendamento.",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs items={[{ label: "Perguntas Frequentes" }]} />

        {/* Cabeçalho */}
        <div className="max-w-3xl pt-6 sm:pt-10 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f2ea] text-[#977643] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#b89660]/30">
            <span>Esclarecimentos</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight mb-6">
            Informação para dar o primeiro passo.
          </h1>
          <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
            Reunimos perguntas sobre o contato inicial e o atendimento. Questões
            sobre indicação, técnica e cuidados individuais devem ser conversadas
            com a profissional.
          </p>

          {/* Navegação textual por temas */}
          <div className="flex flex-wrap gap-2 pt-6">
            <span className="text-sm text-[#6b5d50] py-1.5 font-medium">Temas:</span>
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-3.5 py-1 text-xs font-semibold text-[#2d241e] bg-white rounded-full border border-[#e0d8ce] hover:border-[#b89660] hover:text-[#b89660] transition-colors"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>

        {/* Categorias e acordeões <details> nativos */}
        <div className="space-y-12 max-w-4xl">
          {categories.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              className="scroll-mt-24 bg-white rounded-2xl border border-[#e0d8ce] p-6 sm:p-8 shadow-xs"
            >
              <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e] mb-6">
                {cat.title}
              </h2>

              <div className="divide-y divide-[#f2eee8]">
                {cat.items.map((item) => (
                  <details
                    key={item.id}
                    id={item.id}
                    className="group py-4 transition-colors"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none text-base sm:text-lg font-medium text-[#2d241e] group-open:text-[#b89660] hover:text-[#b89660] focus:outline-none py-1">
                      <span>{item.q}</span>
                      <span className="ml-4 shrink-0 text-[#b89660] group-open:rotate-180 transition-transform duration-200">
                        ↓
                      </span>
                    </summary>
                    <div className="pt-3 pb-2 text-sm sm:text-base text-[#6b5d50] leading-relaxed pr-6">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Fechamento */}
        <div className="mt-16 bg-[#f2eee8] rounded-3xl p-8 sm:p-12 border border-[#e0d8ce] flex flex-col lg:flex-row items-center justify-between gap-8 max-w-4xl">
          <div className="space-y-2">
            <h3 className="text-2xl font-serif-editorial text-[#2d241e]">
              Sua pergunta não está aqui?
            </h3>
            <p className="text-sm text-[#6b5d50]">
              Fale diretamente pelo WhatsApp para receber orientações individuais.
            </p>
          </div>
          <a
            href={contatoData.links.geral}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#b89660] hover:bg-[#977643] rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Conversar pelo WhatsApp</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </div>
  );
}
