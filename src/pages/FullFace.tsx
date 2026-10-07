import { useState } from "react";
import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ChevronDown, ArrowRight } from "lucide-react";

interface FullFaceProps {
  navigate: (path: string) => void;
}

export function FullFace({ navigate }: FullFaceProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const checklistItems = [
    "Suas principais dúvidas",
    "Experiências anteriores com tratamentos",
    "Aquilo que você quer preservar no seu rosto",
    "Questões sobre etapas, valores e acompanhamento",
  ];

  const faqs = [
    {
      q: "Full Face é um procedimento único?",
      a: "O termo é usado aqui como uma frente de planejamento divulgada pela profissional. A composição de uma proposta precisa ser explicada na avaliação; não há pacote fixo confirmado.",
    },
    {
      q: "Preciso fazer tudo de uma vez?",
      a: "Não existe uma sequência ou quantidade de etapas definida neste site. Pergunte à profissional quais possibilidades e limites se aplicam ao seu caso.",
    },
    {
      q: "Preciso escolher os procedimentos antes?",
      a: "Não. Você pode iniciar o contato explicando seus objetivos e pedindo informações sobre a avaliação.",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-14 sm:pb-20">
        <Breadcrumbs
          items={[
            { label: "Tratamentos", href: "/tratamentos/" },
            { label: "Full Face" },
          ]}
        />

        {/* Abertura */}
        <div className="max-w-3xl pt-6 sm:pt-10 mb-14 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block mb-2">
            Visão Global
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight mb-6">
            Full Face: uma conversa sobre o conjunto.
          </h1>
          <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed mb-8 font-light">
            Nem toda pergunta sobre o rosto começa em uma única região. O Full
            Face está entre as frentes apresentadas pela Dra. Vânia e é um ponto
            de partida para conversar sobre prioridades e planejamento.
          </p>
          <div>
            <a
              href={contatoData.links.fullFace}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#b89660] rounded-xl hover:bg-[#977643] shadow-sm transition-colors min-h-[44px]"
            >
              Conversar sobre Full Face
            </a>
          </div>
        </div>

        {/* Estrutura visual: Destaque tipográfico */}
        <section className="py-12 border-t border-[#e5ded5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            <div className="lg:col-span-5">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#2d241e] leading-tight block">
                Planejamento começa com entendimento.
              </span>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-xl sm:text-2xl font-serif-editorial font-normal text-[#2d241e]">
                Organize o que você deseja compreender.
              </h2>
              <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
                Pode ser difícil transformar uma percepção sobre o rosto em uma
                pergunta específica. Você pode começar descrevendo o que percebe,
                o que gostaria de valorizar e o que tem receio de mudar. Essa
                conversa ajuda a esclarecer expectativas antes de discutir
                possibilidades.
              </p>
            </div>
          </div>
        </section>

        {/* Um nome não define um pacote */}
        <section className="py-10 border-t border-[#e5ded5]">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              Um nome não define um pacote para todos.
            </h2>
            <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
              Neste site, Full Face não significa um conjunto fixo de produtos,
              quantidades ou procedimentos. O que pode compor um planejamento
              depende da avaliação e das informações apresentadas pela
              profissional. Não há uma proposta universal que deva ser aplicada a
              todas as pessoas.
            </p>
          </div>
        </section>

        {/* O que levar para a conversa */}
        <section className="py-10 border-t border-[#e5ded5]">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e] mb-6">
              O que levar para a conversa
            </h2>
            <div className="divide-y divide-[#e5ded5] mb-6">
              {checklistItems.map((item, idx) => (
                <div key={idx} className="py-3.5 flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#977643]">
                    0{idx + 1}
                  </span>
                  <span className="text-base sm:text-lg text-[#2d241e]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#6b5d50] leading-relaxed italic">
              Referências visuais podem ajudar a explicar uma preferência, mas não
              representam uma promessa de reprodução do rosto de outra pessoa.
            </p>
          </div>
        </section>

        {/* Perguntas */}
        <section className="py-10 border-t border-[#e5ded5]">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e]">
              Dúvidas sobre o planejamento Full Face
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
              Quero entender as possibilidades.
            </h2>
            <p className="text-base text-[#6b5d50] leading-relaxed">
              Entre em contato para apresentar seu interesse e receber
              orientações sobre como agendar sua avaliação.
            </p>
            <div>
              <a
                href={contatoData.links.fullFace}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#b89660] rounded-xl hover:bg-[#977643] shadow-sm transition-colors min-h-[44px]"
              >
                Conversar sobre meu caso
              </a>
            </div>

            <div className="pt-6 border-t border-[#e0d8ce] flex flex-wrap gap-6 text-sm text-[#6b5d50]">
              <a
                href="/tratamentos/preenchimento-facial/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/tratamentos/preenchimento-facial/");
                }}
                className="hover:text-[#b89660] inline-flex items-center gap-1 transition-colors"
              >
                <span>Preenchimento Facial</span>
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
                href="/sobre/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/sobre/");
                }}
                className="hover:text-[#b89660] inline-flex items-center gap-1 transition-colors"
              >
                <span>Sobre a Dra. Vânia</span>
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
