import { useState } from "react";
import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ChevronDown, ArrowRight } from "lucide-react";

interface PreenchimentoProps {
  navigate: (path: string) => void;
}

export function Preenchimento({ navigate }: PreenchimentoProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const topics = [
    {
      num: "01",
      text: "O que quero valorizar ou preservar?",
    },
    {
      num: "02",
      text: "Que receios tenho sobre mudanças na aparência?",
    },
    {
      num: "03",
      text: "Quais tratamentos já realizei?",
    },
    {
      num: "04",
      text: "Que explicações preciso receber para decidir?",
    },
  ];

  const faqs = [
    {
      q: "Posso escolher a quantidade pelo site?",
      a: "O site não define quantidades ou planos de aplicação. Esse tipo de decisão exige avaliação profissional.",
    },
    {
      q: "É possível avaliar somente uma região?",
      a: "Explique qual é seu interesse ao entrar em contato. A profissional poderá orientar a avaliação e discutir as possibilidades apropriadas.",
    },
    {
      q: "O resultado de uma foto será igual ao meu?",
      a: "Não. Registros de outras pessoas não representam promessa de reprodução de resultado.",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-14 sm:pb-20">
        <Breadcrumbs
          items={[
            { label: "Tratamentos", href: "/tratamentos/" },
            { label: "Preenchimento Facial" },
          ]}
        />

        {/* Abertura */}
        <div className="max-w-3xl pt-6 sm:pt-10 mb-14 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block mb-2">
            Proporções e Harmonia
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight mb-6">
            Preenchimento facial com espaço para suas perguntas.
          </h1>
          <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed mb-8 font-light">
            Contorno, proporção e preferências pessoais podem motivar o interesse
            pelo preenchimento facial. Antes de escolher uma região ou buscar uma
            quantidade, converse sobre a avaliação e o que deseja compreender.
          </p>
          <div>
            <a
              href={contatoData.links.preenchimento}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#b89660] rounded-xl hover:bg-[#977643] shadow-sm transition-colors min-h-[44px]"
            >
              Conversar sobre preenchimento facial
            </a>
          </div>
        </div>

        {/* Sua referência não precisa virar uma fórmula */}
        <section className="py-12 border-t border-[#e5ded5]">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              Sua referência não precisa virar uma fórmula.
            </h2>
            <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
              Uma imagem pode expressar uma preferência, mas não determina o que
              faz sentido para outra pessoa. A conversa com a profissional é o
              momento de apresentar seus objetivos e perguntar sobre
              possibilidades, limitações e cuidados.
            </p>
          </div>
        </section>

        {/* Pergunte sobre o planejamento, além da quantidade */}
        <section className="py-10 border-t border-[#e5ded5]">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              Pergunte sobre o planejamento, além da quantidade.
            </h2>
            <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
              Um número isolado não explica uma proposta de cuidado. Antes de
              decidir, peça que sejam esclarecidos o objetivo, a região avaliada,
              as opções consideradas e a forma de acompanhamento. Informações
              sobre produto, técnica e valores devem ser apresentadas pela
              profissional para o seu caso.
            </p>
          </div>
        </section>

        {/* Questões para levar à avaliação */}
        <section className="py-10 border-t border-[#e5ded5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e] mb-3">
                Questões para levar à avaliação
              </h2>
              <p className="text-sm text-[#6b5d50] leading-relaxed">
                Pontos de reflexão que ajudam a orientar a conversa com clareza.
              </p>
            </div>
            <div className="lg:col-span-7 divide-y divide-[#e5ded5]">
              {topics.map((item) => (
                <div key={item.num} className="py-4 flex items-baseline gap-4">
                  <span className="text-xs font-mono font-bold text-[#977643]">
                    {item.num}
                  </span>
                  <span className="text-base sm:text-lg font-serif-editorial text-[#2d241e]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perguntas */}
        <section className="py-10 border-t border-[#e5ded5]">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e]">
              Dúvidas comuns sobre preenchimento
            </h2>
          </div>
          <div className="max-w-3xl divide-y divide-[#e5ded5]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full flex items-center justify-between text-left py-1 text-base font-medium text-[#2d241e] hover:text-[#b89660] transition-colors focus:outline-none cursor-pointer"
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
                  <div className="pt-3 pb-1 text-sm sm:text-base text-[#6b5d50] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Fechamento */}
      <section className="bg-[#f2eee8] py-14 sm:py-20 border-t border-[#e5ded5]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              Comece com informação sobre você.
            </h2>
            <p className="text-base text-[#6b5d50] leading-relaxed">
              Tire dúvidas e consulte horários de avaliação com a Dra. Vânia
              Medeiros.
            </p>
            <div>
              <a
                href={contatoData.links.preenchimento}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#b89660] rounded-xl hover:bg-[#977643] shadow-sm transition-colors min-h-[44px]"
              >
                Pedir informações pelo WhatsApp
              </a>
            </div>

            <div className="pt-6 border-t border-[#e0d8ce] flex flex-wrap gap-6 text-sm text-[#6b5d50]">
              <a
                href="/tratamentos/full-face/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/tratamentos/full-face/");
                }}
                className="hover:text-[#b89660] inline-flex items-center gap-1 transition-colors"
              >
                <span>Conhecer Full Face</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="/tratamentos/fios-de-pdo-plla/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/tratamentos/fios-de-pdo-plla/");
                }}
                className="hover:text-[#b89660] inline-flex items-center gap-1 transition-colors"
              >
                <span>Fios de PDO/PLLA</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="/contato/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contato/");
                }}
                className="hover:text-[#b89660] inline-flex items-center gap-1 transition-colors"
              >
                <span>Contato</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
