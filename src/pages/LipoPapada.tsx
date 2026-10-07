import { useState } from "react";
import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ChevronDown, ArrowRight } from "lucide-react";

interface LipoPapadaProps {
  navigate: (path: string) => void;
}

export function LipoPapada({ navigate }: LipoPapadaProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const editorialQuestions = [
    {
      num: "01",
      text: "Por que essa opção seria considerada no meu caso?",
    },
    {
      num: "02",
      text: "Quais alternativas e limitações devo conhecer?",
    },
    {
      num: "03",
      text: "Que orientações receberei antes e depois?",
    },
    {
      num: "04",
      text: "Como serão explicadas as etapas e os valores?",
    },
  ];

  const faqs = [
    {
      q: "A técnica é indicada para todo mundo?",
      a: "A indicação não é definida pelo site ou por uma fotografia. Ela deve ser discutida após avaliação individual.",
    },
    {
      q: "Qual é o tempo de recuperação?",
      a: "As orientações dependem da abordagem proposta e do seu caso. Peça essas informações à profissional antes de decidir; este site não define um prazo universal.",
    },
    {
      q: "HD e 3D são a mesma técnica?",
      a: "A página da profissional utiliza a denominação Lipo de Papada HD. Para entender os detalhes da abordagem oferecida, confirme diretamente na avaliação.",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-14 sm:pb-20">
        <Breadcrumbs
          items={[
            { label: "Tratamentos", href: "/tratamentos/" },
            { label: "Lipo de Papada HD" },
          ]}
        />

        {/* Abertura */}
        <div className="max-w-3xl pt-6 sm:pt-10 mb-14 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block mb-2">
            Contorno Mandibular e Submentual
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight mb-6">
            Lipo de Papada HD: comece entendendo a indicação.
          </h1>
          <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed mb-8 font-light">
            A Lipo de Papada HD está entre as opções divulgadas pela Dra. Vânia
            Medeiros. Se você deseja conversar sobre a região abaixo do queixo, o
            primeiro passo é obter informações sobre a avaliação e esclarecer
            suas expectativas com a profissional.
          </p>
          <div>
            <a
              href={contatoData.links.lipoPapada}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#b89660] rounded-xl hover:bg-[#977643] shadow-sm transition-colors min-h-[44px]"
            >
              Conversar sobre Lipo de Papada HD
            </a>
          </div>
        </div>

        {/* Avaliação da região */}
        <section className="py-12 border-t border-[#e5ded5]">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              A região que você observa precisa ser avaliada.
            </h2>
            <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
              O que uma pessoa percebe em uma foto não é suficiente para definir a
              origem de sua queixa ou escolher uma abordagem. Converse sobre o
              que deseja compreender e permita que a avaliação estabeleça os
              limites e possibilidades do planejamento.
            </p>
          </div>
        </section>

        {/* Perguntas que ajudam a decidir com informação */}
        <section className="py-10 border-t border-[#e5ded5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e] mb-3">
                Perguntas que ajudam a decidir com informação.
              </h2>
              <p className="text-sm text-[#6b5d50] leading-relaxed">
                Tópicos essenciais para trazer à mesa durante a consulta de
                avaliação individual.
              </p>
            </div>
            <div className="lg:col-span-7 divide-y divide-[#e5ded5]">
              {editorialQuestions.map((q) => (
                <div key={q.num} className="py-4 flex items-baseline gap-4">
                  <span className="text-xs font-mono font-bold text-[#977643]">
                    {q.num}
                  </span>
                  <span className="text-base sm:text-lg font-serif-editorial text-[#2d241e]">
                    {q.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perguntas frequentes do procedimento */}
        <section className="py-10 border-t border-[#e5ded5]">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e]">
              Dúvidas frequentes sobre a Lipo de Papada HD
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
              Suas perguntas merecem uma resposta individual.
            </h2>
            <p className="text-base text-[#6b5d50] leading-relaxed">
              Consulte informações sobre a avaliação diretamente pelo WhatsApp da
              Dra. Vânia Medeiros.
            </p>
            <div>
              <a
                href={contatoData.links.lipoPapada}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#b89660] rounded-xl hover:bg-[#977643] shadow-sm transition-colors min-h-[44px]"
              >
                Consultar informações sobre a avaliação
              </a>
            </div>

            <div className="pt-6 border-t border-[#e0d8ce] flex flex-wrap gap-6 text-sm text-[#6b5d50]">
              <a
                href="/experiencia-de-atendimento/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/experiencia-de-atendimento/");
                }}
                className="hover:text-[#b89660] inline-flex items-center gap-1 transition-colors"
              >
                <span>Experiência de Atendimento</span>
                <ArrowRight size={14} />
              </a>
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
