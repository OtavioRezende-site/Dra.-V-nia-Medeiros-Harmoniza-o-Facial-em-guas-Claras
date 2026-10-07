import React, { useState, useEffect, useRef } from "react";
import { siteConfig, contatoData } from "../data/siteData";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { getAssetUrl } from "../utils/asset";

interface HeaderProps {
  currentPath: string;
  navigate: (path: string) => void;
}

export function Header({ currentPath, navigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileTreatmentsOpen, setMobileTreatmentsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect scroll to make navbar discreet on hero and solid when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeroMode = currentPath === "/" && !isScrolled;

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setTreatmentsOpen(false);
  }, [currentPath]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu or dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (treatmentsOpen) {
          setTreatmentsOpen(false);
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [treatmentsOpen, mobileMenuOpen]);

  // Handle outside click for treatments dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setTreatmentsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (path: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    setTreatmentsOpen(false);
    navigate(path);
  };

  const treatments = [
    { label: "Visão Geral de Tratamentos", path: "/tratamentos/" },
    { label: "Fios de PDO/PLLA", path: "/tratamentos/fios-de-pdo-plla/" },
    { label: "Full Face (Planejamento Global)", path: "/tratamentos/full-face/" },
    { label: "Lipo de Papada HD", path: "/tratamentos/lipo-de-papada-hd/" },
    { label: "Preenchimento Facial", path: "/tratamentos/preenchimento-facial/" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isHeroMode
            ? "bg-gradient-to-b from-[#211812]/80 via-[#2a1f17]/40 to-transparent border-b border-[#c5a36c]/20 backdrop-blur-[2px] shadow-[0_4px_30px_rgba(33,24,18,0.2)]"
            : "bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e5ded5] shadow-[0_2px_15px_-4px_rgba(0,0,0,0.03)]"
        }`}
      >
        <div className="max-w-[78rem] mx-auto px-5 sm:px-8 h-18 sm:h-20 flex items-center justify-between transition-all duration-300">
          {/* Zone 1: Brand Wordmark with Monograma VM */}
          <a
            href="/"
            onClick={(e) => handleNavClick("/", e)}
            className="flex items-center gap-2.5 sm:gap-3 group py-1 min-h-[44px]"
          >
            <img
              src={getAssetUrl("/midias/monogramas/monograma-vm-dourado.png")}
              alt=""
              aria-hidden="true"
              width={34}
              height={34}
              className="w-7 h-7 sm:w-[34px] sm:h-[34px] object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span
                className={`text-xl sm:text-[1.65rem] font-serif-editorial font-normal tracking-tight transition-colors leading-tight ${
                  isHeroMode
                    ? "text-white group-hover:text-[#d8c3a5]"
                    : "text-[#2d241e] group-hover:text-[#b89660]"
                }`}
              >
                Dra. Vânia Medeiros
              </span>
              <span
                className={`text-[9.5px] sm:text-[10.5px] tracking-widest uppercase font-medium leading-none transition-colors ${
                  isHeroMode ? "text-[#d8c3a5]" : "text-[#977643]"
                }`}
              >
                Harmonização Orofacial · Brasília
              </span>
            </div>
          </a>

          {/* Zone 2: Desktop Navigation Links (Clean & Essential) */}
          <nav
            aria-label="Navegação principal"
            className={`hidden lg:flex items-center gap-7 text-[14.5px] font-medium transition-colors ${
              isHeroMode ? "text-white/85" : "text-[#2d241e]"
            }`}
          >
            <a
              href="/"
              onClick={(e) => handleNavClick("/", e)}
              className={`transition-colors py-1 relative ${
                isHeroMode
                  ? "text-[#d8c3a5] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#d8c3a5]"
                  : currentPath === "/"
                    ? "text-[#b89660] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#b89660]"
                    : "text-[#6b5d50] hover:text-[#b89660]"
              }`}
            >
              Início
            </a>

            <a
              href="/sobre/"
              onClick={(e) => handleNavClick("/sobre/", e)}
              className={`transition-colors py-1 relative ${
                isHeroMode
                  ? "text-white/85 hover:text-white"
                  : currentPath === "/sobre/"
                    ? "text-[#b89660] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#b89660]"
                    : "text-[#6b5d50] hover:text-[#b89660]"
              }`}
            >
              Sobre
            </a>

            {/* Tratamentos dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                onMouseEnter={() => setTreatmentsOpen(true)}
                aria-expanded={treatmentsOpen}
                className={`flex items-center gap-1.5 py-1 text-[14.5px] transition-colors relative cursor-pointer ${
                  isHeroMode
                    ? "text-white/85 hover:text-white"
                    : currentPath.startsWith("/tratamentos")
                      ? "text-[#b89660] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#b89660]"
                      : "text-[#6b5d50] hover:text-[#b89660]"
                }`}
              >
                <span>Tratamentos</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    treatmentsOpen ? "rotate-180" : ""
                  } ${isHeroMode ? "text-[#d8c3a5]" : "text-current"}`}
                />
              </button>

              {treatmentsOpen && (
                <div
                  onMouseLeave={() => setTreatmentsOpen(false)}
                  className={`absolute left-0 mt-2 w-72 py-2 rounded-xl z-50 text-sm shadow-xl ${
                    isHeroMode
                      ? "bg-[#241c16]/95 backdrop-blur-md border border-[#c5a36c]/25 text-[#faf8f5]"
                      : "bg-[#ffffff] border border-[#e5ded5] text-[#2d241e]"
                  }`}
                >
                  {treatments.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => handleNavClick(item.path, e)}
                      className={`block px-5 py-3 transition-colors ${
                        isHeroMode
                          ? "text-[#faf8f5]/90 hover:bg-white/10 hover:text-[#d8c3a5]"
                          : currentPath === item.path
                            ? "font-semibold text-[#b89660] bg-[#faf8f5]"
                            : "text-[#2d241e] hover:bg-[#faf8f5] hover:text-[#b89660]"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Resultados — Limpo, apenas Resultados */}
            {siteConfig.resultsEnabled && (
              <a
                href="/resultados/"
                onClick={(e) => handleNavClick("/resultados/", e)}
                className={`transition-colors py-1 relative ${
                  isHeroMode
                    ? "text-white/85 hover:text-white"
                    : currentPath === "/resultados/"
                      ? "text-[#b89660] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#b89660]"
                      : "text-[#6b5d50] hover:text-[#b89660]"
                }`}
              >
                Resultados
              </a>
            )}

            <a
              href="/perguntas-frequentes/"
              onClick={(e) => handleNavClick("/perguntas-frequentes/", e)}
              className={`transition-colors py-1 relative ${
                isHeroMode
                  ? "text-white/85 hover:text-white"
                  : currentPath === "/perguntas-frequentes/"
                    ? "text-[#b89660] font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#b89660]"
                    : "text-[#6b5d50] hover:text-[#b89660]"
              }`}
            >
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: Primary Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={contatoData.links.geral}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide rounded-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap min-h-[40px] shadow-sm ${
                isHeroMode
                  ? "text-white bg-[#b89660] hover:bg-[#977643] border border-[#c5a36c]/40 backdrop-blur-sm shadow-md"
                  : "text-white bg-[#b89660] hover:bg-[#977643]"
              }`}
            >
              <span>Agendar Avaliação</span>
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            className={`lg:hidden shrink-0 flex items-center justify-center p-2 rounded-xl transition-colors min-w-[44px] min-h-[44px] cursor-pointer touch-manipulation z-50 ${
              isHeroMode
                ? "text-white hover:bg-white/15 active:bg-white/25"
                : "text-[#2d241e] hover:bg-[#f2eee8] active:bg-[#e8e2d8]"
            }`}
          >
            {mobileMenuOpen ? (
              <X size={26} className={isHeroMode ? "text-white" : "text-[#2d241e]"} />
            ) : (
              <Menu size={26} className={isHeroMode ? "text-white" : "text-[#2d241e]"} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu: Renderizado diretamente no DOM sem createPortal para suporte total a mobile */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          className="fixed inset-0 z-50 bg-[#faf8f5] flex flex-col justify-between overflow-y-auto lg:hidden"
          style={{ minHeight: "100svh" }}
        >
          {/* Top Bar do Menu Mobile com Botão Fechar e Monograma VM */}
          <div className="h-20 px-5 sm:px-8 flex items-center justify-between border-b border-[#e5ded5] shrink-0 bg-[#faf8f5]">
            <a
              href="/"
              onClick={(e) => handleNavClick("/", e)}
              className="flex items-center gap-2.5 group py-1"
            >
              <img
                src={getAssetUrl("/midias/monogramas/monograma-vm-dourado.png")}
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight">
                  Dra. Vânia Medeiros
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#977643] font-semibold leading-none">
                  Harmonização Orofacial · Brasília
                </span>
              </div>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
              className="flex items-center justify-center p-2.5 rounded-xl text-[#2d241e] hover:bg-[#f2eee8] active:bg-[#e8e2d8] transition-colors min-w-[48px] min-h-[48px] cursor-pointer touch-manipulation"
            >
              <X size={28} />
            </button>
          </div>

          {/* Links do Menu Mobile */}
          <div className="flex-1 px-6 py-6 overflow-y-auto">
            <nav aria-label="Navegação móvel" className="flex flex-col space-y-2">
              <a
                href="/"
                onClick={(e) => handleNavClick("/", e)}
                className={`text-xl font-serif-editorial py-3 border-b border-[#e5ded5] flex items-center justify-between ${
                  currentPath === "/"
                    ? "font-semibold text-[#b89660]"
                    : "text-[#2d241e]"
                }`}
              >
                <span>Início</span>
                {currentPath === "/" && (
                  <span className="text-xs font-sans text-[#b89660] uppercase tracking-wider font-semibold">
                    Atual
                  </span>
                )}
              </a>

              <a
                href="/sobre/"
                onClick={(e) => handleNavClick("/sobre/", e)}
                className={`text-xl font-serif-editorial py-3 border-b border-[#e5ded5] ${
                  currentPath === "/sobre/"
                    ? "font-semibold text-[#b89660]"
                    : "text-[#2d241e]"
                }`}
              >
                Sobre a Dra. Vânia
              </a>

              {/* Mobile Tratamentos Accordion */}
              <div className="border-b border-[#e5ded5] py-2.5">
                <button
                  type="button"
                  onClick={() => setMobileTreatmentsOpen(!mobileTreatmentsOpen)}
                  className="w-full flex items-center justify-between text-xl font-serif-editorial text-[#2d241e] py-1 cursor-pointer"
                  aria-expanded={mobileTreatmentsOpen}
                >
                  <span
                    className={
                      currentPath.startsWith("/tratamentos")
                        ? "font-semibold text-[#b89660]"
                        : ""
                    }
                  >
                    Tratamentos
                  </span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-200 text-[#6b5d50] ${
                      mobileTreatmentsOpen ? "rotate-180 text-[#b89660]" : ""
                    }`}
                  />
                </button>

                {mobileTreatmentsOpen && (
                  <div className="pl-4 mt-2 space-y-2.5 text-base border-l-2 border-[#b89660]/40">
                    {treatments.map((t) => (
                      <a
                        key={t.path}
                        href={t.path}
                        onClick={(e) => handleNavClick(t.path, e)}
                        className={`block py-1.5 font-sans text-sm ${
                          currentPath === t.path
                            ? "font-semibold text-[#b89660]"
                            : "text-[#6b5d50]"
                        }`}
                      >
                        {t.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Resultados */}
              {siteConfig.resultsEnabled && (
                <a
                  href="/resultados/"
                  onClick={(e) => handleNavClick("/resultados/", e)}
                  className={`text-xl font-serif-editorial py-3 border-b border-[#e5ded5] flex items-center justify-between ${
                    currentPath === "/resultados/"
                      ? "font-semibold text-[#b89660]"
                      : "text-[#2d241e]"
                  }`}
                >
                  <span>Resultados</span>
                </a>
              )}

              <a
                href="/perguntas-frequentes/"
                onClick={(e) => handleNavClick("/perguntas-frequentes/", e)}
                className={`text-xl font-serif-editorial py-3 border-b border-[#e5ded5] ${
                  currentPath === "/perguntas-frequentes/"
                    ? "font-semibold text-[#b89660]"
                    : "text-[#2d241e]"
                }`}
              >
                Dúvidas Frequentes
              </a>

              <a
                href="/contato/"
                onClick={(e) => handleNavClick("/contato/", e)}
                className={`text-xl font-serif-editorial py-3 border-b border-[#e5ded5] ${
                  currentPath === "/contato/"
                    ? "font-semibold text-[#b89660]"
                    : "text-[#2d241e]"
                }`}
              >
                Contato & Localização
              </a>
            </nav>
          </div>

          {/* Bottom Action Area */}
          <div className="p-6 border-t border-[#e5ded5] bg-[#faf8f5] space-y-3 shrink-0">
            <a
              href={contatoData.links.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 px-6 text-base font-semibold text-white bg-[#b89660] hover:bg-[#977643] rounded-xl shadow-md transition-colors min-h-[48px]"
            >
              <span>Agendar Avaliação no WhatsApp</span>
              <ArrowRight size={16} />
            </a>
            <p className="text-xs text-center text-[#6b5d50]">
              Águas Claras Shopping, Sala 566 · Brasília/DF
            </p>
          </div>
        </div>
      )}
    </>
  );
}
