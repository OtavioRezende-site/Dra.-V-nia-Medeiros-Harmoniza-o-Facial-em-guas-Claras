import { useState } from "react";
import { Layers, Shield, Sparkles, Check, ArrowRight } from "lucide-react";

interface LayerInfo {
  id: string;
  level: string;
  name: string;
  anatomicalFocus: string;
  howWeAct: string;
  technique: string;
  resultFeeling: string;
}

export function FacialLayersExplainer({
  onSelectTreatment,
}: {
  onSelectTreatment?: (path: string) => void;
}) {
  const [selectedLayer, setSelectedLayer] = useState<string>("sustentacao");

  const layers: LayerInfo[] = [
    {
      id: "sustentacao",
      level: "Nível 01",
      name: "Sustentação & Reposicionamento Tecidual",
      anatomicalFocus: "Sistema Músculo-Aponeurótico (SMAS) e Ligamentos de Retenção",
      howWeAct:
        "Com o tempo, os ligamentos que sustentam a face cedem pela gravidade. Em vez de preencher com volume excessivo que deixaria o rosto pesado ou artificial, inserimos fios de PDO e PLLA para tração delicada e bioestímulo duradouro de colágeno.",
      technique: "Fios de PDO / PLLA",
      resultFeeling:
        "Efeito de firmeza natural, reposicionando o contorno sem alterar os seus traços característicos.",
    },
    {
      id: "contorno",
      level: "Nível 02",
      name: "Definição Mandibular & Ângulo Cervical",
      anatomicalFocus: "Região Submentual, Borda Mandibular e Platisma",
      howWeAct:
        "O acúmulo de gordura abaixo do queixo mascara a transição entre mandíbula e pescoço. A abordagem HD remove com precisão o excesso adiposo, permitindo que a pele se cole novamente à anatomia óssea bem desenhada.",
      technique: "Lipo de Papada HD",
      resultFeeling:
        "Rosto visualmente mais leve, perfil nítido e definição elegante mesmo ao sorrir ou inclinar a cabeça.",
    },
    {
      id: "volume",
      level: "Nível 03",
      name: "Proporções Áureas & Estruturação Óssea",
      anatomicalFocus: "Terço Médio (Maçãs do Rosto) e Terço Inferior (Mento e Mandíbula)",
      howWeAct:
        "A reabsorção óssea fisiológica diminui a projeção do queixo e da maxila. Com ácido hialurônico de alta viscosidade, restauramos micro-pontos de apoio milimetricamente calculados para trazer sustentação tridimensional.",
      technique: "Preenchimento Facial & Full Face",
      resultFeeling:
        "Harmonia equilibrada, olhar descansado e equilíbrio perfeito entre nariz, lábios e mento.",
    },
  ];

  const current = layers.find((l) => l.id === selectedLayer) || layers[0];

  return (
    <div className="w-full bg-[#ffffff] rounded-3xl border border-[#e0d8ce] p-8 sm:p-12 shadow-lg">
      <div className="max-w-3xl mb-8">
        <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block mb-2">
          Didática Anatômica
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#2d241e]">
          Por que não aplicamos &ldquo;fórmulas prontas&rdquo;?
        </h3>
        <p className="text-sm sm:text-base text-[#6b5d50] leading-relaxed mt-2 font-light">
          A harmonização bem-sucedida atua exatamente na camada anatômica que
          precisa de suporte. Clique nos níveis abaixo para entender como cada
          técnica se integra com lógica e propósito:
        </p>
      </div>

      {/* Abas dos Níveis Anatômicos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {layers.map((layer) => {
          const isSelected = layer.id === selectedLayer;
          return (
            <button
              key={layer.id}
              type="button"
              onClick={() => setSelectedLayer(layer.id)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#faf8f5] border-[#b89660] shadow-sm ring-1 ring-[#b89660]"
                  : "bg-white border-[#e0d8ce] hover:border-[#b89660]/40"
              }`}
            >
              <span className="text-[11px] font-mono font-bold text-[#b89660] block">
                {layer.level}
              </span>
              <p
                className={`text-sm font-semibold mt-1 ${
                  isSelected ? "text-[#2d241e]" : "text-[#6b5d50]"
                }`}
              >
                {layer.name}
              </p>
              <p className="text-xs text-[#977643] mt-1 font-medium">
                → {layer.technique}
              </p>
            </button>
          );
        })}
      </div>

      {/* Painel Explicativo da Camada Selecionada */}
      <div className="bg-[#f2eee8] rounded-2xl p-6 sm:p-8 border border-[#e0d8ce] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#977643]">
            <Layers size={16} />
            <span>Estrutura Alvo: {current.anatomicalFocus}</span>
          </div>

          <h4 className="text-xl sm:text-2xl font-serif-editorial text-[#2d241e]">
            {current.name}
          </h4>

          <p className="text-sm sm:text-base text-[#6b5d50] leading-relaxed">
            {current.howWeAct}
          </p>

          <div className="pt-2 flex items-start gap-2.5 text-xs text-[#2d241e]">
            <Check size={16} className="text-[#b89660] shrink-0 mt-0.5" />
            <span>
              <strong>Sensação do resultado:</strong> {current.resultFeeling}
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-[#e0d8ce] space-y-4">
          <span className="text-xs uppercase tracking-wider text-[#977643] font-bold block">
            Técnica Aplicada
          </span>
          <p className="text-lg font-serif-editorial text-[#2d241e]">
            {current.technique}
          </p>
          <p className="text-xs text-[#6b5d50] leading-relaxed">
            Planejada com dosagens individualizadas e materiais nobres de alta
            pureza biológica.
          </p>
          {onSelectTreatment && (
            <button
              type="button"
              onClick={() => onSelectTreatment("/tratamentos/")}
              className="text-xs font-semibold text-[#b89660] hover:text-[#977643] flex items-center gap-1 cursor-pointer pt-2"
            >
              <span>Ver detalhes na visão geral</span>
              <ArrowRight size={13} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
