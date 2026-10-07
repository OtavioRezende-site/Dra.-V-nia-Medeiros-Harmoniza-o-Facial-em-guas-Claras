import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { MetaTags } from "./components/MetaTags";

// Pages
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Tratamentos } from "./pages/Tratamentos";
import { FiosPdo } from "./pages/FiosPdo";
import { FullFace } from "./pages/FullFace";
import { LipoPapada } from "./pages/LipoPapada";
import { Preenchimento } from "./pages/Preenchimento";
import { Experiencia } from "./pages/Experiencia";
import { Faq } from "./pages/Faq";
import { Contato } from "./pages/Contato";
import { Privacidade } from "./pages/Privacidade";
import { Resultados } from "./pages/Resultados";
import { NotFound } from "./pages/NotFound";

function normalizePath(pathname: string): string {
  if (pathname === "" || pathname === "/") return "/";
  let p = pathname;
  if (!p.endsWith("/")) {
    p = p + "/";
  }
  return p;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() =>
    normalizePath(window.location.pathname)
  );

  useEffect(() => {
    const handleLocationChange = () => {
      const norm = normalizePath(window.location.pathname);
      setCurrentPath(norm);
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  const navigate = (path: string) => {
    const normalized = normalizePath(path);
    if (normalized !== currentPath) {
      window.history.pushState({}, "", path);
      setCurrentPath(normalized);
      window.scrollTo(0, 0);
    }
  };

  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <Home navigate={navigate} />;
      case "/sobre/":
        return <Sobre navigate={navigate} />;
      case "/tratamentos/":
        return <Tratamentos navigate={navigate} />;
      case "/tratamentos/fios-de-pdo-plla/":
        return <FiosPdo navigate={navigate} />;
      case "/tratamentos/full-face/":
        return <FullFace navigate={navigate} />;
      case "/tratamentos/lipo-de-papada-hd/":
        return <LipoPapada navigate={navigate} />;
      case "/tratamentos/preenchimento-facial/":
        return <Preenchimento navigate={navigate} />;
      case "/experiencia-de-atendimento/":
        return <Experiencia navigate={navigate} />;
      case "/perguntas-frequentes/":
        return <Faq navigate={navigate} />;
      case "/contato/":
        return <Contato />;
      case "/privacidade/":
        return <Privacidade navigate={navigate} />;
      case "/resultados/":
        return <Resultados navigate={navigate} />;
      default:
        return <NotFound navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#2d241e]">
      {/* Dynamic SEO Head and Structured Data */}
      <MetaTags path={currentPath} />

      {/* Main Top Navigation */}
      <Header currentPath={currentPath} navigate={navigate} />

      {/* Main Page Content */}
      <main className="flex-1 w-full" id="conteudo-principal">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppFloat />
    </div>
  );
}
