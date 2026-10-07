import { Breadcrumbs } from "../components/Breadcrumbs";

interface PrivacidadeProps {
  navigate: (path: string) => void;
}

export function Privacidade({ navigate }: PrivacidadeProps) {
  const sections = [
    { id: "whatsapp", title: "Contato pelo WhatsApp" },
    { id: "links-externos", title: "Links externos" },
    { id: "formularios", title: "Formulários e informações clínicas" },
    { id: "tecnico", title: "Funcionamento técnico" },
    { id: "duvidas", title: "Como tirar dúvidas" },
  ];

  return (
    <div className="w-full bg-[#faf8f5]">
      <div className="max-w-[52rem] mx-auto px-5 sm:px-8 pt-4 pb-20 sm:pb-28">
        <Breadcrumbs items={[{ label: "Privacidade" }]} />

        {/* Cabeçalho */}
        <div className="pt-6 sm:pt-10 mb-10">
          <span className="text-xs uppercase tracking-widest text-[#977643] font-semibold block mb-2">
            Transparência
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-tight mb-4">
            Privacidade e uso deste site.
          </h1>
          <p className="text-xs text-[#6b5d50]">
            Última atualização: 06 de outubro de 2026
          </p>
        </div>

        {/* Índice de âncoras */}
        <nav
          aria-label="Índice da política de privacidade"
          className="p-6 bg-[#f2eee8] rounded-2xl border border-[#e0d8ce] mb-12"
        >
          <span className="text-xs uppercase tracking-wider text-[#977643] font-semibold block mb-3">
            Índice
          </span>
          <ul className="space-y-2 text-sm">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  href={`#${sec.id}`}
                  className="text-[#6b5d50] hover:text-[#b89660] underline-offset-4 hover:underline transition-colors"
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Seções em coluna de leitura única */}
        <div className="space-y-12 text-[#2d241e] text-base leading-relaxed">
          <section id="whatsapp" className="scroll-mt-24 space-y-3">
            <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e]">
              Contato pelo WhatsApp
            </h2>
            <p className="text-[#6b5d50]">
              Os botões de contato direcionam você ao WhatsApp. A mensagem só é
              enviada quando você decide enviá-la nesse serviço. O atendimento
              recebe as informações que você escolher compartilhar na conversa.
            </p>
          </section>

          <section id="links-externos" className="scroll-mt-24 space-y-3 border-t border-[#e0d8ce] pt-8">
            <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e]">
              Links externos
            </h2>
            <p className="text-[#6b5d50]">
              Este site contém links para Instagram, WhatsApp e Google Maps. Ao
              abrir esses serviços, você passa a utilizar ambientes que possuem
              suas próprias condições e políticas de privacidade.
            </p>
          </section>

          <section id="formularios" className="scroll-mt-24 space-y-3 border-t border-[#e0d8ce] pt-8">
            <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e]">
              Formulários e informações clínicas
            </h2>
            <p className="text-[#6b5d50]">
              Esta versão do site não oferece formulário de cadastro nem envio de
              documentos ou fotos. Para orientações sobre o atendimento, utilize o
              canal de contato informado. Evite compartilhar informações clínicas
              em campos ou canais sem orientação da profissional.
            </p>
          </section>

          <section id="tecnico" className="scroll-mt-24 space-y-3 border-t border-[#e0d8ce] pt-8">
            <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e]">
              Funcionamento técnico
            </h2>
            <p className="text-[#6b5d50]">
              Este site foi estruturado para fornecer informações institucionais e
              orientações sobre o atendimento. Não são instalados rastreadores
              invisíveis de terceiros para publicidade nesta versão. Registros de
              conexão podem ser mantidos pelo servidor estático exclusivamente para
              fins operacionais de segurança, conformidade e integridade da rede.
            </p>
          </section>

          <section id="duvidas" className="scroll-mt-24 space-y-3 border-t border-[#e0d8ce] pt-8">
            <h2 className="text-2xl font-serif-editorial font-normal text-[#2d241e]">
              Como tirar dúvidas
            </h2>
            <p className="text-[#6b5d50]">
              Para dúvidas sobre o uso das informações enviadas ao atendimento,
              entre em contato pelo WhatsApp indicado na página de{" "}
              <a
                href="/contato/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contato/");
                }}
                className="text-[#977643] hover:text-[#b89660] font-semibold underline underline-offset-4"
              >
                Contato
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
