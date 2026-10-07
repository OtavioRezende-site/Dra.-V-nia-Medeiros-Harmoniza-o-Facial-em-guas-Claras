// Utility to resolve public asset paths across root domains, dev environments, and subfolders (e.g. GitHub Pages)

const KNOWN_ROUTES = [
  "sobre",
  "tratamentos",
  "experiencia-de-atendimento",
  "perguntas-frequentes",
  "contato",
  "privacidade",
  "resultados",
];

export function getBasePath(): string {
  if (typeof window === "undefined") return "";
  
  let pathname = window.location.pathname;
  try {
    pathname = decodeURIComponent(pathname);
  } catch {
    // Keep raw pathname if decoding fails
  }

  const segments = pathname.split("/").filter(Boolean);
  
  if (segments.length > 0) {
    const firstSegment = segments[0];
    // If the first segment is not one of our known routes and not index.html, it's the repo/subfolder name
    if (!KNOWN_ROUTES.includes(firstSegment) && firstSegment !== "index.html") {
      if (firstSegment === "docs") {
        return "/docs";
      }
      if (segments.length > 1 && segments[1] === "docs") {
        return `/${segments[0]}/docs`;
      }
      return `/${segments[0]}`;
    }
  }
  
  return "";
}

export function getAssetUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }
  
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const base = getBasePath();
  
  if (base) {
    return `${base}/${cleanPath}`;
  }
  
  return `/${cleanPath}`;
}
