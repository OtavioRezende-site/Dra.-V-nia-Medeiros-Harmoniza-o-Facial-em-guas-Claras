import { useState } from "react";
import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ChevronDown, ArrowRight } from "lucide-react";

interface FiosPdoProps {
  navigate: (path: string) => void;
}

export function FiosPdo({ navigate }: FiosPdoProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const questions = [
    {
      num: "01",
      text: "Qual é o objetivo do planejamento no meu caso?",
    },
    {
      num: "02",
      text: "Quais opções serão consideradas?",
    },
    {
      num: "03",
      text: "Que limitações preciso compreender?",
    },
    {
      num: "04",
      text: "Como receberei orientações de preparo e acompanhamento?",
    },
  ];

  const faqs = [
    {
      q: "Posso escolher o tipo de fio pelo site?",
      a: "O site apresenta informações iniciais. A indicação e o planejamento precisam ser discutidos com a profissional na avaliação.",
    },
    {
      q: "Consigo saber o valor antes de conversar?",
      a: "Entre em contato para entender como funciona a avaliação e a apresentação de valores. Não há tabela pública confirmada neste site.",
    },
    {
      q: "Já fiz outros tratamentos. O que devo informar?",
      a: "Conte à profissional sobre procedimentos anteriores e leve suas dúvidas à avaliação. As orientações individuais devem ser fornecidas por ela.",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-14 sm:pb-20">
        <Breadcrumbs
          items={[
            { label: "Tratamentos", href: "/tratamentos/" },
            { label: "Fios de PDO/PLLA" },
          ]}
        />

        {/* Abertura */}
        <div className="max-w-3xl pt-6 sm:pt-10 mb-14 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block mb-2">
            Tratamento de Harmonização
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight mb-6">
            Fios de PDO/PLLA: informação antes da decisão.
          </h1>
          <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed mb-8 font-light">
            O tratamento com fios de PDO/PLLA está entre as opções apresentadas
            pela Dra. Vânia Medeiros. Se esse é seu interesse, a avaliação é o
            momento de conversar sobre seus objetivos e entender quais
            possibilidades podem ser consideradas para você.
          </p>
          <div>
            <a
              href={contatoData.links.fios}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#b89660] rounded-xl hover:bg-[#977643] shadow-sm transition-colors min-h-[44px]"
            >
              Conversar sobre fios de PDO/PLLA
            </a>
          </div>
        </div>

        {/* O que esclarecer na avaliação */}
        <section className="py-10 border-t border-[#e5ded5]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e] mb-4">
                O nome do tratamento é só o começo.
              </h2>
              <p className="text-base text-[#6b5d50] leading-relaxed">
                Uma referência vista na internet não contém as informações
                necessárias para definir um planejamento individual. Histórico de
                procedimentos, dúvidas e expectativas merecem ser apresentados à
                profissional antes de qualquer decisão.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-[#e5ded5]">
              {questions.map((item) => (
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

        {/* Sobre os materiais e a proposta */}
        <section className="py-10 border-t border-[#e5ded5]">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e] mb-4">
              Peça clareza sobre cada etapa.
            </h2>
            <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
              PDO e PLLA aparecem na nomenclatura divulgada pela profissional.
              Na conversa de avaliação, peça uma explicação sobre o material
              proposto, a razão da escolha e os cuidados pertinentes ao seu
              caso. Não é adequado concluir que os materiais ou as técnicas são
              intercambiáveis apenas pelo nome.
            </p>
          </div>
        </section>

        {/* Perguntas desta página */}
        <section className="py-10 border-t border-[#e5ded5]">
          <div className="max-w-3xl mb-6">
            <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e]">
              Dúvidas comuns sobre este procedimento
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

      {/* Fechamento em faixa secundária */}
      <section className="bg-[#f2eee8] py-14 sm:py-20 border-t border-[#e5ded5]">
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              Converse sobre suas dúvidas com calma.
            </h2>
            <p className="text-base text-[#6b5d50] leading-relaxed">
              Consulte a disponibilidade de horário e tire dúvidas iniciais
              diretamente com o canal de atendimento.
            </p>
            <div>
              <a
                href={contatoData.links.fios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#b89660] rounded-xl hover:bg-[#977643] shadow-sm transition-colors min-h-[44px]"
              >
                Pedir informações sobre a avaliação
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
                href="/experiencia-de-atendimento/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/experiencia-de-atendimento/");
                }}
                className="hover:text-[#b89660] inline-flex items-center gap-1 transition-colors"
              >
                <span>Como funciona a consulta</span>
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
                <span>Endereço e Contato</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
