import React from "react";
import { contatoData, entidade, siteConfig } from "../data/siteData";
import { MapPin, Phone, Instagram } from "lucide-react";
import { getAssetUrl } from "../utils/asset";

interface FooterProps {
  navigate: (path: string) => void;
}

export function Footer({ navigate }: FooterProps) {
  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <footer className="bg-[#241c16] text-[#faf8f5] border-t border-[#3d3126] mt-auto">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Brand & Introduction (5 cols) with Monograma VM */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={getAssetUrl("/midias/monogramas/monograma-vm-dourado.png")}
                alt=""
                aria-hidden="true"
                width={42}
                height={42}
                className="w-10 h-10 sm:w-[42px] sm:h-[42px] object-contain shrink-0"
              />
              <span className="text-3xl font-serif-editorial font-normal tracking-tight text-[#faf8f5] block">
                Dra. Vânia Medeiros
              </span>
            </div>
            <p className="text-sm text-[#d8c3a5] tracking-widest uppercase font-medium">
              Harmonização Orofacial · Brasília/DF
            </p>
            <p className="text-sm text-[#d6c9bd] leading-relaxed max-w-md font-light">
              Atendimento acolhedor, transparente e humanizado, focado na
              valorização da sua identidade única por meio de técnicas avançadas
              e seguras de harmonização facial.
            </p>
            <div className="pt-2 text-xs text-[#d6c9bd] space-y-1 border-t border-[#3d3126]">
              <p className="font-semibold text-[#faf8f5] flex items-center gap-1.5 pt-2">
                <MapPin size={14} className="text-[#b89660]" />
                Local de atendimento:
              </p>
              <p className="leading-relaxed pl-5 text-[#d6c9bd]">
                Águas Claras Shopping · Av. das Araucárias, 1835<br />
                5º andar · Sala 566 · Águas Claras · Brasília/DF<br />
                CEP 71936-250
              </p>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b89660] block mb-4">
              Navegação
            </span>
            <ul className="space-y-2.5 text-sm text-[#d6c9bd]">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNavClick("/", e)}
                  className="hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="/sobre/"
                  onClick={(e) => handleNavClick("/sobre/", e)}
                  className="hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Sobre a Dra. Vânia
                </a>
              </li>
              <li>
                <a
                  href="/tratamentos/"
                  onClick={(e) => handleNavClick("/tratamentos/", e)}
                  className="hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Tratamentos
                </a>
              </li>
              {siteConfig.resultsEnabled && (
                <li>
                  <a
                    href="/resultados/"
                    onClick={(e) => handleNavClick("/resultados/", e)}
                    className="hover:text-[#b89660] text-white font-medium hover:translate-x-0.5 transition-all inline-block py-0.5"
                  >
                    Resultados Clínicos (Fotos)
                  </a>
                </li>
              )}
              <li>
                <a
                  href="/experiencia-de-atendimento/"
                  onClick={(e) => handleNavClick("/experiencia-de-atendimento/", e)}
                  className="hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Experiência de Atendimento
                </a>
              </li>
              <li>
                <a
                  href="/perguntas-frequentes/"
                  onClick={(e) => handleNavClick("/perguntas-frequentes/", e)}
                  className="hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a
                  href="/contato/"
                  onClick={(e) => handleNavClick("/contato/", e)}
                  className="hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Contato & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Treatments Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b89660] block mb-4">
              Procedimentos
            </span>
            <ul className="space-y-2.5 text-sm text-[#d6c9bd]">
              <li>
                <a
                  href="/tratamentos/fios-de-pdo-plla/"
                  onClick={(e) => handleNavClick("/tratamentos/fios-de-pdo-plla/", e)}
                  className="hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Fios de PDO/PLLA
                </a>
              </li>
              <li>
                <a
                  href="/tratamentos/full-face/"
                  onClick={(e) => handleNavClick("/tratamentos/full-face/", e)}
                  className="hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Full Face
                </a>
              </li>
              <li>
                <a
                  href="/tratamentos/lipo-de-papada-hd/"
                  onClick={(e) => handleNavClick("/tratamentos/lipo-de-papada-hd/", e)}
                  className="hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Lipo de Papada HD
                </a>
              </li>
              <li>
                <a
                  href="/tratamentos/preenchimento-facial/"
                  onClick={(e) => handleNavClick("/tratamentos/preenchimento-facial/", e)}
                  className="hover:text-white hover:translate-x-0.5 transition-all inline-block py-0.5"
                >
                  Preenchimento Facial
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#b89660] block mb-4">
              Canais Diretos
            </span>
            <ul className="space-y-3 text-sm text-[#d6c9bd]">
              <li>
                <a
                  href={contatoData.links.geral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-2 group transition-colors"
                >
                  <Phone size={15} className="text-[#b89660] group-hover:scale-110 transition-transform" />
                  <span>{contatoData.whatsapp.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={entidade.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-2 group transition-colors"
                >
                  <Instagram size={15} className="text-[#b89660] group-hover:scale-110 transition-transform" />
                  <span>@dravaniamedeiros</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={contatoData.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs text-[#b89660] hover:text-[#d8c3a5] underline underline-offset-4"
                >
                  Abrir no Google Maps →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#3d3126] flex flex-col sm:flex-row items-center justify-between text-xs text-[#a89a8c] gap-4">
          <p>
            © {new Date().getFullYear()} Dra. Vânia Medeiros. Harmonização
            Orofacial em Águas Claras, Brasília/DF.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacidade/"
              onClick={(e) => handleNavClick("/privacidade/", e)}
              className="hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
