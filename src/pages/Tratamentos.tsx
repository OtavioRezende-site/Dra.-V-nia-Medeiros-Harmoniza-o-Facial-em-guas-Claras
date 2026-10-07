import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, Layers, Sparkles, ShieldCheck } from "lucide-react";
import { getAssetUrl } from "../utils/asset";

interface TratamentosProps {
  navigate: (path: string) => void;
}

export function Tratamentos({ navigate }: TratamentosProps) {
  const treatments = [
    {
      num: "01",
      title: "Fios de PDO e PLLA",
      subtitle: "Bioestímulo & Sustentação dos Tecidos",
      path: "/tratamentos/fios-de-pdo-plla/",
      image: "/midias/casos/caso-28.jpg",
      summary:
        "Reposicionamento dos tecidos e estímulo gradual da síntese de colágeno nas camadas subdérmicas. Abordagem precisa para quem busca firmeza e definição sem conferir volume volumoso ou artificial.",
      badge: "Sustentação & Colágeno",
      aspect: "Sustentação Tecidual",
    },
    {
      num: "02",
      title: "Full Face",
      subtitle: "Planejamento Global Integrado",
      path: "/tratamentos/full-face/",
      image: "/midias/casos/caso-27.jpg",
      summary:
        "Visão integrada dos terços superior, médio e inferior da face. Em vez de tratar pontos isolados com risco de sobrecorreção, organiza-se uma estratégia coesa para preservar a identidade e o repouso natural.",
      badge: "Planejamento Global",
      aspect: "Harmonia Completa",
    },
    {
      num: "03",
      title: "Lipo de Papada HD",
      subtitle: "Contorno Cervicomandibular",
      path: "/tratamentos/lipo-de-papada-hd/",
      image: "/midias/casos/caso-34.jpg",
      summary:
        "Remoção cirúrgica ambulatorial da gordura pré-platismal abaixo do queixo. Procedimento delicado sob anestesia local que destaca o ângulo da mandíbula e traz leveza imediata ao perfil do pescoço.",
      badge: "Contorno do Queixo",
      aspect: "Definição de Perfil",
    },
    {
      num: "04",
      title: "Preenchimento Facial",
      subtitle: "Volumetria e Estruturação Óssea",
      path: "/tratamentos/preenchimento-facial/",
      image: "/midias/casos/caso-29.jpg",
      summary:
        "Restauração milimétrica de suporte com ácido hialurônico de alta biocompatibilidade. Aplicação nos planos profundos para compensar reabsorções ósseas e alinhar linhas sem alterar sua expressão.",
      badge: "Estruturação & Suporte",
      aspect: "Proporções Áureas",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs items={[{ label: "Tratamentos" }]} />

        {/* 1. CABEÇALHO EDITORIAL ABERTO */}
        <section className="pt-6 sm:pt-10 mb-14 sm:mb-20 max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-3">
            Harmonização Orofacial · Abordagem Clínica
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-[1.18] mb-6">
            Possibilidades de tratamento sob medida para o seu rosto
          </h1>
          <p className="text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
            Procedimentos estéticos não são mercadorias de catálogo. Cada técnica apresentada pela Dra. Vânia Medeiros responde a uma indicação anatômica precisa, orientada pela preservação absoluta da sua identidade.
          </p>
        </section>

        {/* 2. COMPOSIÇÃO EDITORIAL ABERTA DOS TRATAMENTOS (VARIAÇÃO DE ESCALA E IMAGEM REAL) */}
        <div className="space-y-16 sm:space-y-24">
          {treatments.map((t, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={t.num}
                className="border-b border-[#ded5c7] pb-16 sm:pb-24 last:border-b-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* Imagem Real de Referência Validada */}
                  <div
                    className={`lg:col-span-5 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div
                      onClick={() => navigate(t.path)}
                      className="group cursor-pointer bg-[#ede6dc] overflow-hidden border border-[#ded5c8]"
                    >
                      <img
                        src={getAssetUrl(t.image)}
                        alt={`Registro clínico: ${t.title}`}
                        width={460}
                        height={460}
                        className="w-full h-auto object-contain block group-hover:scale-[1.015] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-2.5 flex items-center justify-between text-xs text-[#615346] font-light">
                      <span className="font-serif-editorial text-sm text-[#2d241e]">{t.aspect}</span>
                      <span>Registro em Consultório</span>
                    </div>
                  </div>

                  {/* Conteúdo Editorial Aberto */}
                  <div
                    className={`lg:col-span-7 space-y-5 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-medium text-[#82622f]">
                          {t.num} / PROCEDIMENTO
                        </span>
                        <span className="w-5 h-px bg-[#ded5c7]"></span>
                        <span className="text-xs uppercase tracking-wider text-[#82622f] font-semibold">
                          {t.badge}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#2d241e] leading-snug">
                        {t.title}
                      </h2>
                      <p className="text-base text-[#82622f] font-serif italic">
                        {t.subtitle}
                      </p>
                    </div>

                    <p className="text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
                      {t.summary}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <a
                        href={t.path}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(t.path);
                        }}
                        className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl transition-all shadow-sm focus-visible:outline-none"
                      >
                        <span>Conhecer detalhes do tratamento</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* 3. BLOCO EDITORIAL DE DIRECIONAMENTO PARA AVALIAÇÃO */}
        <section className="mt-8 bg-[#f1ebe1] p-8 sm:p-14 border border-[#ded5c8] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block">
              Consulta Diagnóstica
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              Ainda não sabe qual abordagem é ideal para você?
            </h3>
            <p className="text-base text-[#4a3e35] leading-relaxed font-light">
              Você não precisa decidir antecipadamente. O primeiro passo é sentar com a Dra. Vânia Medeiros no consultório em Águas Claras para mapear sua face e receber uma indicação clínica embasada.
            </p>
          </div>

          <div className="shrink-0 w-full lg:w-auto">
            <a
              href={contatoData.links.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl shadow-sm transition-all focus-visible:outline-none min-h-[48px]"
            >
              <span>Conversar sobre a sua avaliação</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
