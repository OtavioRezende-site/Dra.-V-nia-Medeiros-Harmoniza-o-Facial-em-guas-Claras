import { contatoData, entidade } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Phone, Instagram, MapPin, ArrowRight, ShieldCheck } from "lucide-react";

export function Contato() {
  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs items={[{ label: "Contato e Localização" }]} />

        {/* Cabeçalho */}
        <div className="max-w-3xl pt-6 sm:pt-10 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f2ea] text-[#977643] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#b89660]/30">
            <span>Canais Diretos</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight mb-6">
            Vamos conversar sobre sua avaliação?
          </h1>
          <p className="text-base sm:text-lg text-[#6b5d50] leading-relaxed font-light">
            Entre em contato para apresentar seu interesse, consultar a
            disponibilidade de horários e receber orientações detalhadas sobre o
            atendimento presencial.
          </p>
        </div>

        {/* Layout de Contato */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Card WhatsApp Principal (5 colunas) */}
          <div className="lg:col-span-5 bg-[#ffffff] border border-[#e0d8ce] rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block">
              Atendimento no WhatsApp
            </span>

            <p className="text-sm text-[#6b5d50] leading-relaxed">
              Inicie uma conversa direta para consultar horários e tirar dúvidas:
            </p>

            <a
              href={contatoData.links.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#b89660] hover:bg-[#977643] rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[50px]"
            >
              <span>Falar pelo WhatsApp</span>
              <ArrowRight size={17} />
            </a>

            <div className="pt-6 border-t border-[#f2eee8] space-y-4 text-sm">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#faf8f5] border border-[#e0d8ce]">
                <span className="text-[#6b5d50] flex items-center gap-2">
                  <Phone size={15} className="text-[#b89660]" />
                  Telefone:
                </span>
                <a
                  href="tel:+5561996749336"
                  className="font-semibold text-[#2d241e] hover:text-[#b89660]"
                >
                  {contatoData.whatsapp.display}
                </a>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#faf8f5] border border-[#e0d8ce]">
                <span className="text-[#6b5d50] flex items-center gap-2">
                  <Instagram size={15} className="text-[#b89660]" />
                  Instagram:
                </span>
                <a
                  href={entidade.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#2d241e] hover:text-[#b89660]"
                >
                  @dravaniamedeiros
                </a>
              </div>
            </div>
          </div>

          {/* Endereço e Localização (7 colunas) */}
          <div className="lg:col-span-7 bg-[#ffffff] border border-[#e0d8ce] rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block mb-2">
                Local de Atendimento
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
                Águas Claras Shopping
              </h2>
            </div>

            <div className="text-base sm:text-lg text-[#2d241e] space-y-1.5 font-light">
              <p className="font-normal text-[#2d241e]">
                Av. das Araucárias, 1835
              </p>
              <p className="font-semibold text-[#977643]">
                5º andar · Sala 566
              </p>
              <p>Águas Claras · Brasília/DF</p>
              <p className="text-sm text-[#6b5d50]">CEP 71936-250</p>
            </div>

            <p className="text-sm text-[#6b5d50] leading-relaxed pt-3 border-t border-[#f2eee8]">
              Antes da visita, confirme a disponibilidade e as orientações de
              chegada pelo canal de WhatsApp.
            </p>

            <div className="pt-2">
              <a
                href={contatoData.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#2d241e] bg-[#f7f2ea] border border-[#b89660]/40 rounded-xl hover:bg-[#b89660] hover:text-white transition-all min-h-[44px]"
              >
                <MapPin size={16} />
                <span>Abrir rota no Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
