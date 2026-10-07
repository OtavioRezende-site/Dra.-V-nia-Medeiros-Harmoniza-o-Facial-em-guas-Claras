import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { MetaTags } from "./components/MetaTags";
import { getBasePath } from "./utils/asset";

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
  if (!pathname || pathname === "" || pathname === "/") return "/";
  let p = pathname;
  if (!p.startsWith("/")) p = "/" + p;
  if (!p.endsWith("/")) {
    p = p + "/";
  }
  return p;
}

function resolveCurrentRoute(): string {
  if (typeof window === "undefined") return "/";

  // 1. Support hash-based routing (e.g., #/sobre/ or #sobre)
  if (window.location.hash) {
    const rawHash = window.location.hash.replace(/^#\/?/, "");
    const cleanHash = rawHash.split("?")[0];
    if (cleanHash) {
      return normalizePath(cleanHash);
    }
  }

  // 2. Support GitHub Pages SPA redirect query (?/sobre/)
  const search = window.location.search;
  if (search && search.startsWith("?/")) {
    const queryRoute = search.slice(2).split("&")[0];
    if (queryRoute) {
      return normalizePath(queryRoute);
    }
  }

  // 3. Pathname routing (supports root domain as well as repo subfolder e.g. /repo-name/sobre/)
  let pathname = window.location.pathname;
  try {
    pathname = decodeURIComponent(pathname);
  } catch {
    // Keep raw
  }

  const base = getBasePath();
  if (base && pathname.startsWith(base)) {
    pathname = pathname.slice(base.length);
  }

  // Strip index.html if present
  pathname = pathname.replace(/\/index\.html\/?$/, "");

  return normalizePath(pathname);
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(resolveCurrentRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      const resolved = resolveCurrentRoute();
      setCurrentPath(resolved);
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const navigate = (path: string) => {
    const normalized = normalizePath(path);
    if (normalized !== currentPath) {
      const base = getBasePath();
      const targetUrl = base ? `${base}${path}` : path;
      try {
        window.history.pushState({}, "", targetUrl);
      } catch {
        // Fallback for restricted environments
        window.location.hash = path;
      }
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
