import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ArrowRight, MapPin, Sparkles, HeartHandshake, Eye, CheckCircle2 } from "lucide-react";
import { getAssetUrl } from "../utils/asset";

interface SobreProps {
  navigate: (path: string) => void;
}

export function Sobre({ navigate }: SobreProps) {
  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-20 sm:pb-28">
        <Breadcrumbs items={[{ label: "Sobre a Dra. Vânia" }]} />

        {/* 1. APRESENTAÇÃO & RETRATO DA PROFISSIONAL */}
        <section className="pt-6 sm:pt-10 pb-16 sm:pb-20 border-b border-[#ded5c7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Fotografia real em tamanho expressivo sem moldura de cartão */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="w-full max-w-[420px]">
                <div className="bg-[#ede6dc] overflow-hidden border border-[#ded5c8]">
                  <img
                    src={getAssetUrl("/midias/retratos/retrato-principal.png")}
                    alt="Dra. Vânia Medeiros"
                    width={455}
                    height={549}
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-[#615346] font-light">
                  <span className="font-serif-editorial text-sm text-[#2d241e]">Dra. Vânia Medeiros</span>
                  <span>Harmonização Facial · Brasília/DF</span>
                </div>
              </div>
            </div>

            {/* Apresentação direta à paciente */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-3">
                  Apresentação
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-[1.18] mb-4">
                  Dra. Vânia Medeiros
                </h1>
                <p className="text-base sm:text-lg text-[#82622f] font-medium font-serif italic">
                  Harmonização facial com foco em anatomia, naturalidade e respeito à sua expressão.
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
                <p className="text-[#2d241e] font-normal">
                  Cuidar do próprio rosto é uma decisão que envolve confiança, segurança e sintonia mútua. A proposta do meu consultório é acolher você com serenidade, compreendendo suas motivações e oferecendo um direcionamento clínico sincero e embasado.
                </p>
                <p>
                  Acredito que a verdadeira harmonia facial não busca transformar quem você é, mas realçar seus traços mais elegantes, restaurar suportes que o tempo suavizou e devolver o frescor natural ao olhar e ao contorno facial.
                </p>
                <p>
                  Aqui, cada paciente é atendida de forma individualizada, em um ambiente privativo onde suas dúvidas são ouvidas com tempo e atenção.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={contatoData.links.geral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl transition-all shadow-sm min-h-[46px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82622f]"
                >
                  <span>Conversar sobre a sua avaliação</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TRAJETÓRIA CONFIRMADA */}
        <section className="py-16 sm:py-20 border-b border-[#ded5c7]">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-3">
              Trajetória & Compromisso
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#2d241e] leading-tight mb-6">
              Rigor técnico e aperfeiçoamento contínuo
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
              <p>
                Com atuação clínica consolidada em Brasília no Distrito Federal, dedico minha rotina profissional exclusivamente aos procedimentos de harmonização e rejuvenescimento facial.
              </p>
              <p>
                Minha prática é orientada pela atualização técnica constante nas abordagens de diagnóstico facial, dinâmica muscular e aplicação precisa de biomateriais. Cada técnica adotada no consultório passa por criteriosa avaliação de biossegurança, priorizando sempre produtos com respaldo científico comprovado, pureza garantida e rastreabilidade individual.
              </p>
              <p>
                A honestidade diagnóstica é o pilar central desse trabalho: quando um procedimento não é clinicamente indicado ou não trará o benefício estético almejado com naturalidade, essa conclusão é apresentada de forma clara e transparente à paciente.
              </p>
            </div>
          </div>
        </section>

        {/* 3. ABORDAGEM DE ATENDIMENTO */}
        <section className="py-16 sm:py-20 border-b border-[#ded5c7]">
          <div className="max-w-4xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-3">
              Abordagem Clínica
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#2d241e] leading-tight mb-4">
              Como conduzimos o seu atendimento
            </h2>
            <p className="text-base sm:text-lg text-[#4a3e35] font-light leading-relaxed">
              O processo clínico foi desenhado para assegurar previsibilidade, tranquilidade e resultados harmoniosos em todas as etapas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            <div className="space-y-3">
              <span className="text-xs font-mono font-medium text-[#82622f] tracking-wider block">
                01 / ESCUTA & ACOLHIMENTO
              </span>
              <h3 className="text-xl font-serif-editorial font-medium text-[#2d241e]">
                Escuta atenta e sem pressa
              </h3>
              <p className="text-sm sm:text-base text-[#4a3e35] leading-relaxed font-light">
                A primeira conversa é dedicada a entender o que incomoda você no espelho, seu histórico de procedimentos e quais expressões você faz questão de manter intactas. Sem fórmulas prontas ou pressões comerciais.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-medium text-[#82622f] tracking-wider block">
                02 / DIAGNÓSTICO ANATÔMICO
              </span>
              <h3 className="text-xl font-serif-editorial font-medium text-[#2d241e]">
                Análise tridimensional da face
              </h3>
              <p className="text-sm sm:text-base text-[#4a3e35] leading-relaxed font-light">
                Avaliamos os compartimentos de gordura, o suporte ósseo e a atividade dos músculos da mímica em movimento e em repouso. Esse mapeamento permite atuar na causa anatômica da queixa, e não apenas disfarçar linhas superficiais.
              </p>
            </div>

            <div className="border-t border-[#ded5c7] pt-8 space-y-3">
              <span className="text-xs font-mono font-medium text-[#82622f] tracking-wider block">
                03 / PLANEJAMENTO PERSONALIZADO
              </span>
              <h3 className="text-xl font-serif-editorial font-medium text-[#2d241e]">
                Plano em etapas e sob medida
              </h3>
              <p className="text-sm sm:text-base text-[#4a3e35] leading-relaxed font-light">
                Construímos uma proposta individualizada, definindo a sequência ideal de intervenções (como estímulo de colágeno com fios de sustentação ou volumização sutil com preenchedores), sempre respeitando seu tempo e seus limites naturais.
              </p>
            </div>

            <div className="border-t border-[#ded5c7] pt-8 space-y-3">
              <span className="text-xs font-mono font-medium text-[#82622f] tracking-wider block">
                04 / ACOMPANHAMENTO ATENTO
              </span>
              <h3 className="text-xl font-serif-editorial font-medium text-[#2d241e]">
                Cuidado no pós-procedimento
              </h3>
              <p className="text-sm sm:text-base text-[#4a3e35] leading-relaxed font-light">
                O cuidado não termina na aplicação. Mantemos canal direto para orientação imediata nos primeiros dias e realizamos consultas de revisão presencial para acompanhar a evolução tecidual e o resultado final consolidado.
              </p>
            </div>
          </div>
        </section>

        {/* 4. LOCALIZAÇÃO & ATENDIMENTO PRIVATIVO */}
        <section className="pt-16 sm:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block">
                Localização & Consultório
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#2d241e] leading-tight">
                Atendimento privativo em Águas Claras
              </h2>
              <p className="text-base sm:text-lg text-[#4a3e35] font-light leading-relaxed">
                O consultório da Dra. Vânia Medeiros está localizado no Águas Claras Shopping, com fácil acesso pelo metrô e estacionamento no local. O espaço foi organizado para oferecer total privacidade, silêncio e conforto durante sua consulta.
              </p>

              <div className="pt-2 space-y-2 text-sm text-[#2d241e]">
                <div className="flex items-start gap-2.5">
                  <MapPin size={18} className="text-[#82622f] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2d241e]">Águas Claras Shopping</p>
                    <p className="text-[#4a3e35] font-light">
                      Av. das Araucárias, 1835 · 5º andar · Sala 566 · Águas Claras, Brasília – DF
                    </p>
                    <p className="text-xs text-[#615346] mt-1 font-light">
                      CEP: 71936-250 · Consultas exclusivamente com horário marcado
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={contatoData.links.geral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl transition-all shadow-sm min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82622f]"
                >
                  <span>Iniciar conversa no WhatsApp</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href={contatoData.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-[#2d241e] bg-white border border-[#ded5c8] hover:border-[#82622f] hover:bg-[#faf7f2] rounded-xl transition-colors min-h-[48px] focus-visible:outline-none"
                >
                  <MapPin size={16} className="text-[#82622f]" />
                  <span>Ver no Google Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#f1ebe1] p-8 sm:p-10 border border-[#ded5c8]">
              <h3 className="font-serif-editorial text-xl text-[#2d241e] mb-3">
                Agendamento de Consultas
              </h3>
              <p className="text-sm text-[#4a3e35] leading-relaxed font-light mb-6">
                Para assegurar dedicação completa e atenção individual a cada atendimento, as consultas ocorrem apenas com agendamento prévio. Entre em contato para verificar datas disponíveis e receber as orientações de chegada.
              </p>
              <div className="space-y-3 border-t border-[#ded5c8] pt-5 text-xs text-[#5c4e42]">
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#82622f]" />
                  <span>Consulta com horário privativo e reservado</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#82622f]" />
                  <span>Planejamento diagnóstico transparente</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#82622f]" />
                  <span>Estacionamento coberto no shopping</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
