import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ResultadosEditorial } from "../components/ResultadosEditorial";
import { ArrowRight } from "lucide-react";

interface ResultadosProps {
  navigate?: (path: string) => void;
}

export function Resultados({ navigate: _navigate }: ResultadosProps) {
  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-20 sm:pb-28">
        <Breadcrumbs items={[{ label: "Resultados e Registros Clínicos" }]} />

        {/* Cabeçalho Editorial da Página */}
        <div className="max-w-3xl pt-8 sm:pt-12 mb-14 sm:mb-18">
          <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-3">
            Registros Clínicos Reais
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight mb-6">
            Cada registro documenta uma história de cuidado individual
          </h1>
          <p className="text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light mb-6">
            Apresentamos uma documentação sequencial de casos acompanhados pela
            Dra. Vânia Medeiros. Cada fotografia representa um planejamento
            individualizado voltado à harmonia global, proporção tecidual e respeito aos
            traços naturais da pessoa.
          </p>

          <p className="text-xs text-[#615346] leading-relaxed font-light border-l border-[#82622f] pl-3.5">
            Nota de responsabilidade técnica: os resultados apresentados
            constituem documentação clínica de casos individuais e não devem ser
            interpretados como garantia de resultado idêntico, dependendo
            exclusivamente da biologia tecidual e de consulta prévia.
          </p>
        </div>

        {/* Sequência Editorial Completa de Registros */}
        <ResultadosEditorial />

        {/* Bloco de Encerramento e Agendamento */}
        <div className="mt-24 pt-16 border-t border-[#ded5c7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold">
                Avaliação Individualizada
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
                Deseja conversar sobre o seu caso específico?
              </h2>
              <p className="text-sm sm:text-base text-[#4a3e35] font-light leading-relaxed max-w-2xl">
                Agende sua consulta presencial no consultório no Águas Claras Shopping
                para uma análise facial detalhada e elaboração de um plano sob medida.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href={contatoData.links.geral}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs uppercase tracking-widest font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] transition-all shadow-sm rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82622f]"
              >
                <span>Conversar no WhatsApp</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
