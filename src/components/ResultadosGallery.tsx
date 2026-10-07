import { useState, useEffect } from "react";
import { casosClinicos, CasoClinico, contatoData } from "../data/siteData";
import { ZoomIn, X, ArrowRight } from "lucide-react";

interface ResultadosGalleryProps {
  maxItems?: number;
  showFilters?: boolean;
  onViewAll?: () => void;
}

export function ResultadosGallery({
  maxItems,
  showFilters = true,
  onViewAll,
}: ResultadosGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [activeModalCase, setActiveModalCase] = useState<CasoClinico | null>(
    null
  );

  const categories = [
    "Todos",
    "Full Face",
    "Fios de PDO",
    "Lipo de Papada",
    "Preenchimento",
  ];

  const filteredCases = casosClinicos.filter((c) => {
    if (selectedCategory === "Todos") return true;
    return c.category === selectedCategory;
  });

  const displayedCases = maxItems
    ? filteredCases.slice(0, maxItems)
    : filteredCases;

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalCase(null);
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
  }, [activeModalCase]);

  return (
    <div className="w-full">
      {/* Category Filter Tabs */}
      {showFilters && (
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#b89660] text-white shadow-sm"
                  : "bg-[#ffffff] text-[#6b5d50] hover:text-[#2d241e] border border-[#e0d8ce] hover:border-[#b89660]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid of Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedCases.map((item) => (
          <div
            key={item.id}
            className="group bg-[#ffffff] rounded-2xl border border-[#e5ded5] overflow-hidden hover:border-[#b89660]/60 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Image Container with zoom trigger */}
            <div
              onClick={() => setActiveModalCase(item)}
              className="relative aspect-4/3 bg-[#f2eee8] overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#241c16]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#241c16]/85 text-white text-xs font-medium rounded-full backdrop-blur-sm border border-[#c5a36c]/30">
                  <ZoomIn size={14} />
                  <span>Ampliar foto</span>
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[#977643] rounded-md shadow-xs border border-[#b89660]/20">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-serif-editorial font-normal text-[#2d241e] group-hover:text-[#b89660] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6b5d50] leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#f2eee8] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalCase(item)}
                  className="text-xs font-semibold text-[#b89660] hover:text-[#977643] inline-flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>Ver detalhes e observações</span>
                  <ArrowRight
                    size={13}
                    className="group-hover/btn:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button to view all if on home */}
      {maxItems && onViewAll && filteredCases.length > maxItems && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[#b89660] hover:bg-[#977643] rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Ver Todos os 12 Casos Clínicos</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Modal Lightbox */}
      {activeModalCase && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#211812]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setActiveModalCase(null)}
        >
          <div
            className="relative bg-[#ffffff] max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#e5ded5] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Close Button */}
            <div className="px-6 py-4 bg-[#faf8f5] border-b border-[#e5ded5] flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#977643]">
                  {activeModalCase.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-editorial text-[#2d241e]">
                  {activeModalCase.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalCase(null)}
                aria-label="Fechar"
                className="p-2 text-[#6b5d50] hover:text-[#2d241e] hover:bg-[#f2eee8] rounded-full transition-colors cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Modal Body: Image & Information */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="bg-[#f2eee8] rounded-xl p-3 flex items-center justify-center border border-[#e5ded5]">
                <img
                  src={activeModalCase.image}
                  alt={activeModalCase.title}
                  className="max-h-[65vh] w-auto object-contain rounded-lg shadow-sm"
                />
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#2d241e]">
                  Contexto e Observações do Caso
                </h4>
                <p className="text-base text-[#2d241e] leading-relaxed">
                  {activeModalCase.description}
                </p>
                <p className="text-sm text-[#6b5d50] leading-relaxed bg-[#faf8f5] p-4 rounded-xl border border-[#e5ded5]">
                  {activeModalCase.notes}
                </p>
                <p className="text-xs text-[#6b5d50] italic">
                  * Registros reais documentados para fins informativos. Resultados
                  individuais dependem da anatomia e de planejamento prévio em
                  consulta com a profissional.
                </p>
              </div>

              {/* Actions inside modal */}
              <div className="pt-4 border-t border-[#e5ded5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={contatoData.links.geral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#b89660] hover:bg-[#977643] text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <span>Conversar sobre este procedimento no WhatsApp</span>
                  <ArrowRight size={15} />
                </a>
                <button
                  type="button"
                  onClick={() => setActiveModalCase(null)}
                  className="w-full sm:w-auto px-5 py-3 text-sm font-medium text-[#6b5d50] hover:text-[#2d241e] cursor-pointer"
                >
                  Fechar visualização
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
