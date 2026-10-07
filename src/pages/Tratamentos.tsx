import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, Sparkles } from "lucide-react";

interface TratamentosProps {
  navigate: (path: string) => void;
}

export function Tratamentos({ navigate }: TratamentosProps) {
  const treatments = [
    {
      num: "01",
      title: "Fios de PDO / PLLA",
      subtitle: "Bioestímulo e Sustentação Tecidual",
      path: "/tratamentos/fios-de-pdo-plla/",
      summary:
        "Você encontrou referências a fios e quer entender se essa possibilidade merece ser discutida no seu caso? A página reúne questões para levar à avaliação, sem assumir uma indicação a partir de fotos ou de um interesse inicial.",
      badge: "Sustentação e Colágeno",
    },
    {
      num: "02",
      title: "Full Face",
      subtitle: "Harmonia e Planejamento Integrado",
      path: "/tratamentos/full-face/",
      summary:
        "O termo convida a conversar sobre o rosto como conjunto. Em vez de escolher uma região isolada por impulso, é possível organizar seus objetivos e perguntar como as prioridades são definidas durante a avaliação.",
      badge: "Planejamento Global",
    },
    {
      num: "03",
      title: "Lipo de Papada HD",
      subtitle: "Definição do Contorno Mandibular e Cervical",
      path: "/tratamentos/lipo-de-papada-hd/",
      summary:
        "Se sua dúvida envolve a região abaixo do queixo, comece buscando clareza sobre avaliação, indicação e alternativas. O nome do procedimento não determina, sozinho, o que é apropriado para cada pessoa.",
      badge: "Contorno do Queixo",
    },
    {
      num: "04",
      title: "Preenchimento Facial",
      subtitle: "Volumetria e Proporções com Ácido Hialurônico",
      path: "/tratamentos/preenchimento-facial/",
      summary:
        "Proporções, contorno e expectativas podem fazer parte dessa conversa. Nesta página você encontra um ponto de partida para perguntar sobre planejamento, limites e cuidados, sem uma receita pronta para todos os rostos.",
      badge: "Refinamento e Simetria",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs items={[{ label: "Tratamentos" }]} />

        {/* Cabeçalho da página */}
        <div className="max-w-3xl pt-6 sm:pt-10 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f2ea] text-[#977643] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#b89660]/30">
            <span>Harmonização Facial</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight mb-6">
            Conheça as possibilidades. Comece pela avaliação.
          </h1>
          <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
            Os nomes dos procedimentos ajudam a organizar a informação, mas não
            substituem a conversa sobre você. Aqui estão as frentes de
            atendimento apresentadas pela Dra. Vânia Medeiros, com orientações
            para preparar suas perguntas.
          </p>
        </div>

        {/* Grid de Tratamentos em Cards Nobres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((t) => (
            <div
              key={t.num}
              className="bg-[#ffffff] border border-[#e0d8ce] rounded-2xl p-8 sm:p-10 hover:border-[#b89660] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono font-bold text-[#b89660]">
                    {t.num}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#977643] bg-[#f7f2ea] px-3 py-1 rounded-full border border-[#b89660]/20">
                    {t.badge}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e] group-hover:text-[#b89660] transition-colors">
                  {t.title}
                </h2>
                <p className="text-xs font-medium text-[#977643] uppercase tracking-wide">
                  {t.subtitle}
                </p>
                <p className="text-sm sm:text-base text-[#6b5d50] leading-relaxed">
                  {t.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f2eee8] flex items-center justify-between">
                <a
                  href={t.path}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(t.path);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#b89660] group-hover:bg-[#977643] rounded-xl transition-colors shadow-sm"
                >
                  <span>Ver detalhes do procedimento</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Faixa de Orientação */}
        <div className="mt-16 bg-[#f2eee8] rounded-3xl p-8 sm:p-12 border border-[#e0d8ce] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              Ainda não sabe qual opção procurar?
            </h3>
            <p className="text-sm sm:text-base text-[#6b5d50] leading-relaxed">
              Não é necessário chegar ao contato inicial com uma decisão tomada.
              Você pode explicar o que deseja compreender e pedir informações
              sobre o agendamento da avaliação presencial.
            </p>
          </div>
          <a
            href={contatoData.links.geral}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#b89660] hover:bg-[#977643] rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span>Quero conversar sobre meu caso</span>
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </div>
  );
}
