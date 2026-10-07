import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ResultadosGallery } from "../components/ResultadosGallery";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface ResultadosProps {
  navigate?: (path: string) => void;
}

export function Resultados({ navigate: _navigate }: ResultadosProps) {
  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs items={[{ label: "Resultados e Registros Clínicos" }]} />

        {/* Cabeçalho da Página */}
        <div className="max-w-3xl pt-6 sm:pt-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f2ea] text-[#977643] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#b89660]/30">
            <span>Galeria de Casos Reais</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight mb-6">
            Cada registro conta uma história individual.
          </h1>
          <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
            Imagens de diferentes momentos ajudam a documentar uma trajetória de
            cuidado e autoestima. Elas refletem o compromisso da Dra. Vânia
            Medeiros com proporções equilibradas, anatomia preservada e
            resultados refinados.
          </p>

          <div className="mt-6 flex items-start gap-3 p-4 bg-[#f2eee8] rounded-xl border border-[#e0d8ce] text-xs text-[#6b5d50] leading-relaxed">
            <ShieldCheck size={18} className="text-[#b89660] shrink-0 mt-0.5" />
            <p>
              <strong>Aviso Ético e Informativo:</strong> Os resultados clínicos
              dependem das características anatômicas, qualidade tecidual e
              planejamento específico de cada paciente. Estas fotografias são
              apresentadas com propósito ilustrativo e não constituem garantia de
              reprodução idêntica.
            </p>
          </div>
        </div>

        {/* Galeria Completa com todos os casos e filtros */}
        <ResultadosGallery showFilters={true} />

        {/* Banner de Encerramento e Agendamento */}
        <div className="mt-20 p-8 sm:p-12 bg-[#ffffff] rounded-3xl border border-[#e0d8ce] shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              Deseja conversar sobre o seu caso específico?
            </h2>
            <p className="text-sm sm:text-base text-[#6b5d50] leading-relaxed">
              Agende sua consulta presencial no Águas Claras Shopping para uma
              análise facial individual e planejamento sob medida.
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
