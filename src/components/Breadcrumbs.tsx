import React from "react";
import { getBasePath } from "../utils/asset";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const base = getBasePath();

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = base ? `${base}${href}` : href;
    window.history.pushState({}, "", target);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  return (
    <nav aria-label="Navegação estrutural" className="py-4 text-xs text-[#6b5d50]">
      <ol className="flex items-center flex-wrap gap-2">
        <li>
          <a
            href={base ? `${base}/` : "/"}
            onClick={(e) => handleNavigate(e, "/")}
            className="hover:text-[#b89660] underline-offset-4 hover:underline transition-colors"
          >
            Início
          </a>
        </li>
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;
          const href = crumb.href ? (base ? `${base}${crumb.href}` : crumb.href) : undefined;
          return (
            <React.Fragment key={crumb.label}>
              <li aria-hidden="true" className="text-[#c2b5a5]">/</li>
              <li>
                {isLast || !crumb.href ? (
                  <span className="text-[#2d241e] font-semibold" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <a
                    href={href}
                    onClick={(e) => handleNavigate(e, crumb.href!)}
                    className="hover:text-[#b89660] underline-offset-4 hover:underline transition-colors"
                  >
                    {crumb.label}
                  </a>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
