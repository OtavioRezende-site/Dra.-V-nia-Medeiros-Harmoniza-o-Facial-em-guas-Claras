import React from "react";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Navegação estrutural" className="py-4 text-xs text-[#6b5d50]">
      <ol className="flex items-center flex-wrap gap-2">
        <li>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, "", "/");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
            className="hover:text-[#b89660] underline-offset-4 hover:underline transition-colors"
          >
            Início
          </a>
        </li>
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;
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
                    href={crumb.href}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, "", crumb.href!);
                      window.dispatchEvent(new PopStateEvent("popstate"));
                    }}
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
