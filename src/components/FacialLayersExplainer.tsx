import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface LayerInfo {
  id: string;
  level: string;
  name: string;
  shortName: string;
  anatomicalFocus: string;
  howWeAct: string;
  technique: string;
  resultFeeling: string;
}

export function FacialLayersExplainer({
  onSelectTreatment,
  theme = "deep",
}: {
  onSelectTreatment?: (path: string) => void;
  theme?: "light" | "deep";
}) {
  const [selectedLayer, setSelectedLayer] = useState<string>("sustentacao");

  const layers: LayerInfo[] = [
    {
      id: "sustentacao",
      level: "Nível 01",
      shortName: "Sustentação & Reposicionamento",
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
      shortName: "Definição & Ângulo Cervical",
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
      shortName: "Proporções & Estruturação Óssea",
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
  const isDeep = theme === "deep";

  return (
    <div className="w-full">
      {/* Cabeçalho da Seção */}
      <div className="max-w-3xl mb-12">
        <span
          className={`text-xs uppercase tracking-widest font-semibold block mb-3 ${
            isDeep ? "text-[#d4ba90]" : "text-[#82622f]"
          }`}
        >
          Didática Anatômica
        </span>
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal leading-tight ${
            isDeep ? "text-[#faf6f0]" : "text-[#2d241e]"
          }`}
        >
          Por que não aplicamos fórmulas prontas?
        </h2>
        <p
          className={`text-base sm:text-lg leading-relaxed font-light mt-4 ${
            isDeep ? "text-[#ded4c8]" : "text-[#4a3e35]"
          }`}
        >
          A harmonização bem-sucedida atua exatamente na camada anatômica que
          precisa de suporte. Cada plano da face demanda uma técnica com propósito
          biofísico e estrutural claro.
        </p>
      </div>

      {/* Navegação Discreta das Camadas (Sem caixas ou molduras) */}
      <div
        className={`border-b flex flex-wrap gap-2 sm:gap-8 mb-10 ${
          isDeep ? "border-[#4f4237]" : "border-[#ded5c7]"
        }`}
      >
        {layers.map((layer) => {
          const isSelected = layer.id === selectedLayer;
          return (
            <button
              key={layer.id}
              type="button"
              onClick={() => setSelectedLayer(layer.id)}
              className={`pb-4 text-left transition-all cursor-pointer relative focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a36c] ${
                isSelected
                  ? isDeep
                    ? "text-[#faf6f0]"
                    : "text-[#2d241e]"
                  : isDeep
                  ? "text-[#b8a896] hover:text-[#faf6f0]"
                  : "text-[#695b4e] hover:text-[#2d241e]"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-mono font-medium ${
                    isSelected
                      ? isDeep
                        ? "text-[#d4ba90]"
                        : "text-[#82622f]"
                      : isDeep
                      ? "text-[#9e8f80]"
                      : "text-[#8a7b6e]"
                  }`}
                >
                  {layer.level}
                </span>
                <span
                  aria-hidden="true"
                  className={isDeep ? "text-[#5e5043]" : "text-[#c7bdb0]"}
                >
                  ·
                </span>
                <span
                  className={`text-sm sm:text-base font-serif-editorial ${
                    isSelected ? "font-medium" : "font-normal"
                  }`}
                >
                  {layer.shortName}
                </span>
              </div>

              {/* Linha indicadora discreta */}
              {isSelected && (
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                    isDeep ? "bg-[#c5a36c]" : "bg-[#82622f]"
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Área Aberta com o Conteúdo Correspondente */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Coluna Principal: Análise Anatômica */}
        <div className="lg:col-span-8 space-y-6">
          <div>
            <span
              className={`text-xs uppercase tracking-widest font-semibold block mb-2 ${
                isDeep ? "text-[#d4ba90]" : "text-[#82622f]"
              }`}
            >
              Estrutura Alvo: {current.anatomicalFocus}
            </span>
            <h3
              className={`text-2xl sm:text-3xl font-serif-editorial font-normal ${
                isDeep ? "text-[#faf6f0]" : "text-[#2d241e]"
              }`}
            >
              {current.name}
            </h3>
          </div>

          <p
            className={`text-base sm:text-lg leading-relaxed font-light ${
              isDeep ? "text-[#ded4c8]" : "text-[#4a3e35]"
            }`}
          >
            {current.howWeAct}
          </p>

          <div
            className={`pt-4 border-t ${
              isDeep ? "border-[#4f4237]" : "border-[#ded5c7]"
            }`}
          >
            <p
              className={`text-xs uppercase tracking-widest font-bold mb-1.5 ${
                isDeep ? "text-[#d4ba90]" : "text-[#82622f]"
              }`}
            >
              Sensação do resultado
            </p>
            <p
              className={`text-base font-serif italic leading-relaxed ${
                isDeep ? "text-[#f5ede3]" : "text-[#2d241e]"
              }`}
            >
              &ldquo;{current.resultFeeling}&rdquo;
            </p>
          </div>
        </div>

        {/* Coluna Lateral: Resumo da Técnica Aplicada */}
        <div
          className={`lg:col-span-4 border-t lg:border-t-0 lg:border-l pt-8 lg:pt-0 lg:pl-10 space-y-5 ${
            isDeep ? "border-[#4f4237]" : "border-[#ded5c7]"
          }`}
        >
          <span
            className={`text-xs uppercase tracking-widest font-bold block ${
              isDeep ? "text-[#d4ba90]" : "text-[#82622f]"
            }`}
          >
            Técnica Aplicada
          </span>
          <p
            className={`text-xl sm:text-2xl font-serif-editorial ${
              isDeep ? "text-[#faf6f0]" : "text-[#2d241e]"
            }`}
          >
            {current.technique}
          </p>
          <p
            className={`text-sm leading-relaxed font-light ${
              isDeep ? "text-[#cbbdaf]" : "text-[#5c4f43]"
            }`}
          >
            Planejada com dosagens individualizadas e biomateriais de comprovada
            biocompatibilidade e registro na Anvisa, em sintonia com a anatomia da sua face.
          </p>
          {onSelectTreatment && (
            <button
              type="button"
              onClick={() => onSelectTreatment("/tratamentos/")}
              className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer pt-2 group focus-visible:outline-none ${
                isDeep
                  ? "text-[#d4ba90] hover:text-[#faf6f0]"
                  : "text-[#82622f] hover:text-[#2d241e]"
              }`}
            >
              <span>Conhecer todos os tratamentos</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
