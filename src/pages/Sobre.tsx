import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import { getAssetUrl } from "../utils/asset";

interface SobreProps {
  navigate: (path: string) => void;
}

export function Sobre({ navigate }: SobreProps) {
  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs items={[{ label: "Sobre a Dra. Vânia" }]} />

        {/* Abertura da página */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6 sm:pt-10">
          {/* Faixa lateral com retrato (5 colunas) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[360px]">
              <div className="absolute -inset-2 rounded-2xl border border-[#b89660]/30 -z-10 translate-x-2 translate-y-2 pointer-events-none" />
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-[#e0d8ce]">
                <img
                  src={getAssetUrl("/midias/retratos/retrato-principal.png")}
                  alt="Dra. Vânia Medeiros"
                  width="455"
                  height="549"
                  className="w-full h-auto object-cover object-top"
                  loading="eager"
                />
                <div className="p-5 bg-[#f2eee8] border-t border-[#e0d8ce]">
                  <p className="font-serif-editorial text-xl text-[#2d241e]">
                    Dra. Vânia Medeiros
                  </p>
                  <p className="text-xs text-[#977643] uppercase tracking-wider font-semibold mt-1">
                    Harmonização Facial em Águas Claras, Brasília
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Texto editorial amplo (7 colunas) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f2ea] text-[#977643] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#b89660]/30">
                <span>Apresentação Profissional</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight mb-4">
                Dra. Vânia Medeiros
              </h1>
              <p className="text-lg text-[#977643] font-medium">
                Harmonização facial em Águas Claras, Brasília/DF
              </p>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
              <p className="text-[#2d241e] font-normal">
                Escolher quem vai orientar um cuidado com o rosto envolve
                confiança, informação e identificação. Esta página reúne a
                apresentação da Dra. Vânia Medeiros e os caminhos para conhecer
                melhor seu trabalho.
              </p>

              <div className="border-t border-[#e0d8ce] pt-8">
                <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e] mb-3">
                  Um olhar para a individualidade
                </h2>
                <p>
                  Nas informações que apresenta sobre seu trabalho, a Dra. Vânia
                  destaca o cuidado com a identidade de cada pessoa. A proposta
                  deste espaço é ajudar você a conhecer suas frentes de
                  atendimento e chegar à primeira conversa com mais clareza sobre
                  o que deseja perguntar.
                </p>
              </div>

              <div className="border-t border-[#e0d8ce] pt-8">
                <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e] mb-3">
                  Conheça as frentes de atendimento
                </h2>
                <p className="mb-6">
                  Fios de PDO/PLLA, Full Face, Lipo de Papada HD e preenchimento
                  facial estão entre as opções apresentadas no planejamento. A
                  escolha de um tratamento e a confirmação de sua indicação devem
                  acontecer na avaliação.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                  <a
                    href="/tratamentos/fios-de-pdo-plla/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/tratamentos/fios-de-pdo-plla/");
                    }}
                    className="p-5 rounded-xl bg-white hover:border-[#b89660] transition-colors border border-[#e0d8ce] shadow-2xs flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-serif-editorial text-lg text-[#2d241e]">
                        Fios de PDO/PLLA
                      </h3>
                      <p className="text-xs text-[#977643] mt-0.5">
                        Bioestímulo e sustentação
                      </p>
                    </div>
                    <ArrowRight size={16} className="text-[#b89660]" />
                  </a>

                  <a
                    href="/tratamentos/full-face/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/tratamentos/full-face/");
                    }}
                    className="p-5 rounded-xl bg-white hover:border-[#b89660] transition-colors border border-[#e0d8ce] shadow-2xs flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-serif-editorial text-lg text-[#2d241e]">
                        Full Face
                      </h3>
                      <p className="text-xs text-[#977643] mt-0.5">
                        Planejamento global da face
                      </p>
                    </div>
                    <ArrowRight size={16} className="text-[#b89660]" />
                  </a>

                  <a
                    href="/tratamentos/lipo-de-papada-hd/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/tratamentos/lipo-de-papada-hd/");
                    }}
                    className="p-5 rounded-xl bg-white hover:border-[#b89660] transition-colors border border-[#e0d8ce] shadow-2xs flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-serif-editorial text-lg text-[#2d241e]">
                        Lipo de Papada HD
                      </h3>
                      <p className="text-xs text-[#977643] mt-0.5">
                        Definição mandibular
                      </p>
                    </div>
                    <ArrowRight size={16} className="text-[#b89660]" />
                  </a>

                  <a
                    href="/tratamentos/preenchimento-facial/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/tratamentos/preenchimento-facial/");
                    }}
                    className="p-5 rounded-xl bg-white hover:border-[#b89660] transition-colors border border-[#e0d8ce] shadow-2xs flex items-center justify-between"
                  >
                    <div>
                      <h3 className="font-serif-editorial text-lg text-[#2d241e]">
                        Preenchimento facial
                      </h3>
                      <p className="text-xs text-[#977643] mt-0.5">
                        Proporções e limites naturais
                      </p>
                    </div>
                    <ArrowRight size={16} className="text-[#b89660]" />
                  </a>
                </div>
              </div>

              <div className="border-t border-[#e0d8ce] pt-8">
                <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e] mb-3">
                  Atendimento em Águas Claras
                </h2>
                <p className="mb-6">
                  O endereço informado para atendimento é no Águas Claras
                  Shopping, na Avenida das Araucárias, 1835, 5º andar, sala 566.
                  Antes de se deslocar, converse pelo WhatsApp para confirmar a
                  disponibilidade e as orientações de chegada.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 not-prose">
                  <a
                    href={contatoData.links.geral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#b89660] hover:bg-[#977643] rounded-xl transition-colors shadow-sm min-h-[48px]"
                  >
                    <span>Conversar sobre a avaliação</span>
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="/contato/"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/contato/");
                    }}
                    className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-[#2d241e] bg-white border border-[#b89660]/40 hover:bg-[#f7f2ea] hover:text-[#977643] rounded-xl transition-colors min-h-[48px]"
                  >
                    Ver detalhes de localização
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
