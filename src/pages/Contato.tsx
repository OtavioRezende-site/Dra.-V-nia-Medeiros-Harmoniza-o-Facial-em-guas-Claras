import { contatoData, entidade } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Phone, Instagram, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export function Contato() {
  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs items={[{ label: "Contato e Localização" }]} />

        {/* 1. CABEÇALHO EDITORIAL ABERTO */}
        <section className="pt-6 sm:pt-10 mb-12 sm:mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-3">
            Atendimento Privativo em Brasília
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-[1.18] mb-6">
            Vamos conversar sobre a sua avaliação?
          </h1>
          <p className="text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
            O canal direto no WhatsApp está à disposição para esclarecer dúvidas preliminares, verificar a disponibilidade de datas e fornecer as orientações detalhadas de chegada ao consultório no Águas Claras Shopping.
          </p>
        </section>

        {/* 2. COMPOSIÇÃO EDITORIAL ABERTA: TEXTO & ORIENTAÇÕES DE UM LADO, AÇÕES DO OUTRO */}
        <section className="pt-8 border-t border-[#ded5c7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Lado Esquerdo: Localização, Orientações de Chegada Confirmadas (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block">
                  Endereço Confirmado
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
                  Águas Claras Shopping
                </h2>
                <div className="text-base sm:text-lg text-[#2d241e] space-y-1 font-light">
                  <p className="font-normal text-[#2d241e]">Av. das Araucárias, 1835</p>
                  <p className="font-semibold text-[#82622f]">5º andar · Sala 566</p>
                  <p>Águas Claras · Brasília – DF</p>
                  <p className="text-sm text-[#615346]">CEP: 71936-250</p>
                </div>
              </div>

              {/* Orientações de Chegada Confirmadas */}
              <div className="border-t border-[#ded5c7] pt-6 space-y-4">
                <h3 className="text-lg font-serif-editorial font-medium text-[#2d241e]">
                  Orientações para o dia do atendimento
                </h3>
                <div className="space-y-3 text-sm text-[#4a3e35] font-light leading-relaxed">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#82622f] shrink-0 mt-0.5" />
                    <span>
                      <strong>Agendamento Prévio:</strong> O atendimento ocorre com hora marcada para assegurar dedicação e privacidade sem sala de espera cheia.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#82622f] shrink-0 mt-0.5" />
                    <span>
                      <strong>Estacionamento:</strong> O shopping possui vagas cobertas com acesso fácil por elevador até a torre de consultórios.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#82622f] shrink-0 mt-0.5" />
                    <span>
                      <strong>Localização no Prédio:</strong> Dirija-se aos elevadores e suba ao 5º andar, sala 566.
                    </span>
                  </div>
                </div>
              </div>

              {/* Informações de Contato Telefônico e Redes */}
              <div className="border-t border-[#ded5c7] pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-[#f1ebe1] border border-[#ded5c8] space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#82622f] font-semibold flex items-center gap-1.5">
                    <Phone size={13} />
                    WhatsApp / Telefone
                  </span>
                  <a
                    href={`tel:${contatoData.whatsapp.e164}`}
                    className="block text-base font-semibold text-[#2d241e] hover:text-[#82622f] transition-colors"
                  >
                    {contatoData.whatsapp.display}
                  </a>
                </div>

                <div className="p-4 bg-[#f1ebe1] border border-[#ded5c8] space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#82622f] font-semibold flex items-center gap-1.5">
                    <Instagram size={13} />
                    Instagram Profissional
                  </span>
                  <a
                    href={entidade.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base font-semibold text-[#2d241e] hover:text-[#82622f] transition-colors"
                  >
                    @dravaniamedeiros
                  </a>
                </div>
              </div>
            </div>

            {/* Lado Direito: Ações Principais e Mapa (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#2e241d] text-[#faf6f0] p-8 sm:p-10 border border-[#483b30] space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#d4ba90] font-semibold block">
                    Canal Principal
                  </span>
                  <h3 className="text-2xl font-serif-editorial font-normal text-[#faf6f0]">
                    Inicie sua conversa
                  </h3>
                  <p className="text-sm text-[#ded4c8] leading-relaxed font-light">
                    Envie uma mensagem para verificar datas disponíveis e agendar sua avaliação presencial.
                  </p>
                </div>

                <a
                  href={contatoData.links.geral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl shadow-sm transition-all focus-visible:outline-none min-h-[50px]"
                >
                  <span>Conversar no WhatsApp</span>
                  <ArrowRight size={17} />
                </a>

                <a
                  href={contatoData.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#faf6f0] bg-[#3a2f26] border border-[#5a483a] hover:bg-[#483b30] rounded-xl transition-colors min-h-[46px]"
                >
                  <MapPin size={15} className="text-[#d4ba90]" />
                  <span>Traçar rota no Google Maps</span>
                </a>
              </div>

              <div className="p-6 bg-[#ede6dc] border border-[#ded5c8] text-xs text-[#5c4e42] leading-relaxed font-light">
                <p className="font-serif-editorial text-sm text-[#2d241e] mb-1 font-normal">
                  Atendimento Responsável
                </p>
                <p>
                  As consultas são individuais e exclusivas. Para alterações de horário, solicitamos aviso prévio pelo WhatsApp para remanejamento de agenda.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
