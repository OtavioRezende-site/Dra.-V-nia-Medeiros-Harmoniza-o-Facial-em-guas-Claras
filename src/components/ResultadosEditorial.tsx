import { useState, useEffect } from "react";
import { ArrowRight, ZoomIn, X, ChevronRight, ChevronLeft } from "lucide-react";
import { casosClinicos, CasoClinico, contatoData } from "../data/siteData";
import { getAssetUrl } from "../utils/asset";

interface ResultadosEditorialProps {
  initialFilter?: string;
}

export function ResultadosEditorial({ initialFilter = "Todos" }: ResultadosEditorialProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialFilter);
  const [activeModalCase, setActiveModalCase] = useState<CasoClinico | null>(null);

  const categories = [
    "Todos",
    "Full Face",
    "Fios de PDO",
    "Lipo de Papada",
    "Preenchimento",
  ];

  // Casos válidos com documentação
  const validCases = casosClinicos.filter(
    (c) => c.id !== "caso-23" // exclui caso com resolução inadequada
  );

  const filteredCases = validCases.filter((c) => {
    if (selectedCategory === "Todos") return true;
    return c.category === selectedCategory;
  });

  // Modal com suporte a ESC e navegação anterior/próximo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalCase(null);
      } else if (e.key === "ArrowRight" && activeModalCase) {
        const currentIndex = filteredCases.findIndex((c) => c.id === activeModalCase.id);
        if (currentIndex < filteredCases.length - 1) {
          setActiveModalCase(filteredCases[currentIndex + 1]);
        }
      } else if (e.key === "ArrowLeft" && activeModalCase) {
        const currentIndex = filteredCases.findIndex((c) => c.id === activeModalCase.id);
        if (currentIndex > 0) {
          setActiveModalCase(filteredCases[currentIndex - 1]);
        }
      }
    };

    if (activeModalCase) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalCase, filteredCases]);

  return (
    <div className="w-full">
      {/* Filtros discretos e secundários */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pb-8 mb-12 border-b border-[#ded5c7]">
        <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold">
          Filtrar registros:
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors cursor-pointer border rounded-md focus-visible:outline-none ${
                  isSelected
                    ? "bg-[#2d241e] text-[#faf7f2] border-[#2d241e]"
                    : "bg-transparent text-[#5c4e42] hover:text-[#2d241e] border-[#ded5c7] hover:border-[#82622f]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <span className="text-xs text-[#615346] ml-auto">
          {filteredCases.length} {filteredCases.length === 1 ? "registro documentado" : "registros documentados"}
        </span>
      </div>

      {/* Sequência editorial de registros */}
      <div className="space-y-20 lg:space-y-28">
        {filteredCases.map((item, index) => {
          const isEven = index % 2 === 1;
          const sequenceNumber = String(index + 1).padStart(2, "0");

          return (
            <article
              key={item.id}
              className="pt-4 border-b border-[#ded5c7] pb-20 lg:pb-28 last:border-b-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Imagem ampla e sem corte */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div
                    onClick={() => setActiveModalCase(item)}
                    className="group relative cursor-pointer bg-[#ede6dc] overflow-hidden border border-[#ded5c8]"
                  >
                    <img
                      src={getAssetUrl(item.image)}
                      alt={`Registro clínico: ${item.title}`}
                      className="w-full h-auto max-h-[560px] object-contain mx-auto block group-hover:scale-[1.015] transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Botão sutil de ampliação */}
                    <div className="absolute inset-0 bg-[#2d241e]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#2d241e]/90 text-white text-xs font-light tracking-wide shadow-md border border-[#c5a36c]/40">
                        <ZoomIn size={14} className="text-[#c5a36c]" />
                        <span>Examinar em tela cheia</span>
                      </span>
                    </div>
                  </div>

                  {/* Legenda técnica logo abaixo da imagem */}
                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#615346]">
                    <span>Registro fotográfico padronizado</span>
                    <button
                      type="button"
                      onClick={() => setActiveModalCase(item)}
                      className="text-[#82622f] hover:text-[#2d241e] font-medium inline-flex items-center gap-1 cursor-pointer focus-visible:outline-none"
                    >
                      <ZoomIn size={12} />
                      <span>Ampliar fotografia</span>
                    </button>
                  </div>
                </div>

                {/* Bloco de texto editorial contextual */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-serif-editorial text-xs text-[#82622f] tracking-wider font-semibold">
                        CASO {sequenceNumber}
                      </span>
                      <span className="w-6 h-px bg-[#d5cbbe]"></span>
                      <span className="text-xs tracking-wider text-[#5c4e42] uppercase">
                        {item.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e] leading-snug">
                      {item.title}
                    </h2>
                  </div>

                  <div className="space-y-3 pt-1">
                    <p className="text-xs uppercase tracking-widest text-[#82622f] font-semibold">
                      Objetivo do planejamento
                    </p>
                    <p className="text-base text-[#2d241e] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {item.notes && (
                    <div className="pt-3 border-t border-[#ded5c7] space-y-2">
                      <p className="text-xs uppercase tracking-widest text-[#5c4e42] font-semibold">
                        Observações anatômicas
                      </p>
                      <p className="text-sm text-[#4a3e35] font-light leading-relaxed">
                        {item.notes}
                      </p>
                    </div>
                  )}

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveModalCase(item)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#82622f] hover:text-[#2d241e] transition-colors cursor-pointer group focus-visible:outline-none"
                    >
                      <span>Examinar detalhes do caso</span>
                      <ArrowRight
                        size={13}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Observação ética ao final dos registros */}
      <div className="mt-16 pt-8 border-t border-[#e5ded5]">
        <p className="text-xs text-[#8c7b6c] leading-relaxed max-w-3xl">
          * Fotografias clínicas documentadas com consentimento. Cada anatomia
          facial apresenta respostas biológicas particulares; os resultados
          ilustrados representam casos individuais e não garantem desfecho
          idêntico para outros pacientes. A indicação definitiva depende de
          avaliação presencial minuciosa.
        </p>
      </div>

      {/* Modal Lightbox Editorial com navegação de casos */}
      {activeModalCase && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#1c1612]/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setActiveModalCase(null)}
        >
          <div
            className="relative bg-[#ffffff] max-w-4xl w-full border border-[#ded5c8] shadow-2xl my-auto overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra superior de identificação */}
            <div className="px-6 py-4 bg-[#faf7f2] border-b border-[#ded5c8] flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#82622f]">
                  {activeModalCase.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-editorial text-[#2d241e]">
                  {activeModalCase.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalCase(null)}
                aria-label="Fechar ampliação"
                className="p-2 text-[#5c4e42] hover:text-[#2d241e] hover:bg-[#ede6dc] transition-colors cursor-pointer rounded-lg focus-visible:outline-none"
              >
                <X size={22} />
              </button>
            </div>

            {/* Conteúdo da foto sem cortes ou distorções */}
            <div className="p-4 sm:p-8 space-y-6">
              <div className="bg-[#ede6dc] p-2 sm:p-4 flex items-center justify-center border border-[#ded5c8] relative">
                <img
                  src={getAssetUrl(activeModalCase.image)}
                  alt={activeModalCase.title}
                  className="max-h-[62vh] w-auto max-w-full object-contain mx-auto shadow-xs"
                />

                {/* Navegação entre casos no modal */}
                {filteredCases.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Caso anterior"
                      onClick={(e) => {
                        e.stopPropagation();
                        const idx = filteredCases.findIndex(
                          (c) => c.id === activeModalCase.id
                        );
                        if (idx > 0) {
                          setActiveModalCase(filteredCases[idx - 1]);
                        } else {
                          setActiveModalCase(filteredCases[filteredCases.length - 1]);
                        }
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-white/95 hover:bg-white text-[#2d241e] border border-[#ded5c8] shadow-sm transition-colors cursor-pointer rounded-md focus-visible:outline-none"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      aria-label="Próximo caso"
                      onClick={(e) => {
                        e.stopPropagation();
                        const idx = filteredCases.findIndex(
                          (c) => c.id === activeModalCase.id
                        );
                        if (idx < filteredCases.length - 1) {
                          setActiveModalCase(filteredCases[idx + 1]);
                        } else {
                          setActiveModalCase(filteredCases[0]);
                        }
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-white/95 hover:bg-white text-[#2d241e] border border-[#ded5c8] shadow-sm transition-colors cursor-pointer rounded-md focus-visible:outline-none"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>

              {/* Informações detalhadas do caso */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-[#82622f] font-semibold">
                  Objetivo e Abordagem Clínica
                </p>
                <p className="text-base text-[#2d241e] font-light leading-relaxed">
                  {activeModalCase.description}
                </p>
                {activeModalCase.notes && (
                  <p className="text-sm text-[#4a3e35] font-light leading-relaxed bg-[#faf7f2] p-4 border border-[#ded5c8]">
                    {activeModalCase.notes}
                  </p>
                )}
                <p className="text-[11px] text-[#615346] italic pt-1">
                  * Registro clínico documentado para fins informativos. Resultados
                  individuais dependem da anatomia e de consulta diagnóstica prévia.
                </p>
              </div>

              {/* Ações do modal */}
              <div className="pt-4 border-t border-[#ded5c8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={contatoData.links.geral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#b89660] hover:bg-[#a6834d] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-sm rounded-lg"
                >
                  <span>Conversar sobre este procedimento</span>
                  <ArrowRight size={14} />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalCase(null)}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs text-[#5c4e42] hover:text-[#2d241e] cursor-pointer"
                >
                  Fechar exame
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
