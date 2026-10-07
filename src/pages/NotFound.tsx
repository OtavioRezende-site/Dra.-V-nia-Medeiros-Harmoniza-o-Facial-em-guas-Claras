import { contatoData } from "../data/siteData";

interface NotFoundProps {
  navigate: (path: string) => void;
}

export function NotFound({ navigate }: NotFoundProps) {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center bg-[#faf8f5] px-5 py-20 text-[#2d241e]">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Monograma Provisório SVG */}
        <div className="w-16 h-16 mx-auto flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96 96"
            role="img"
            aria-label="Monograma VM"
            className="w-16 h-16"
          >
            <rect width="96" height="96" rx="20" fill="#b89660" />
            <path
              d="M16 29L30 67L44 29 M51 67V29L65 52L79 29V67"
              fill="none"
              stroke="#faf8f5"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block">
          Erro 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-serif-editorial font-normal text-[#2d241e]">
          Não encontramos esta página.
        </h1>

        <p className="text-base text-[#6b5d50] leading-relaxed">
          O endereço pode ter mudado. Você pode voltar ao início ou conversar
          pelo canal de atendimento.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-[#b89660] rounded-xl hover:bg-[#977643] shadow-sm transition-colors min-h-[44px]"
          >
            Voltar ao início
          </a>
          <a
            href={contatoData.links.geral}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-[#2d241e] bg-white border border-[#b89660]/40 rounded-xl hover:bg-[#f7f2ea] hover:text-[#977643] transition-colors min-h-[44px]"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
