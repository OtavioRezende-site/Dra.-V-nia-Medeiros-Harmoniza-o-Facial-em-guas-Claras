import { useState } from "react";
import { contatoData } from "../data/siteData";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ChevronDown, ArrowRight, Scissors, AlertCircle } from "lucide-react";
import { getAssetUrl } from "../utils/asset";

interface LipoPapadaProps {
  navigate: (path: string) => void;
}

export function LipoPapada({ navigate }: LipoPapadaProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const objectives = [
    {
      title: "Redução do Coxim Submentual",
      desc: "Remoção precisa do excesso de gordura localizada sob o queixo, diminuindo a sensação de peso visual no terço inferior da face.",
    },
    {
      title: "Definição do Ângulo Cervicomandibular",
      desc: "Evidenciação da linha mandibular e transição nítida com o pescoço, trazendo leveza ao perfil tanto em repouso quanto em movimento.",
    },
    {
      title: "Adesão Tecidual Controlada",
      desc: "Estímulo à retração da pele na região submentual com acompanhamento adequado para promover contorno firme e harmonioso.",
    },
  ];

  const planningSteps = [
    {
      num: "01",
      title: "Diagnóstico Diferencial Submentual",
      desc: "Avaliação criteriosa para diferenciar gordura pré-platismal (removível no consultório) de flacidez cutânea pura ou projeção do músculo platisma.",
    },
    {
      num: "02",
      title: "Planejamento das Linhas de Acesso",
      desc: "Definição milimétrica dos pontos de entrada mínimos e discretos para aspiração com cânulas delicadas sob anestesia local.",
    },
    {
      num: "03",
      title: "Procedimento Privativo em Consultório",
      desc: "Realização no consultório no Águas Claras Shopping com foco em biossegurança estrita, técnica atraumática e serenidade.",
    },
    {
      num: "04",
      title: "Protocolo Pós-Atendimento e Faixa Compressiva",
      desc: "Orientações indispensáveis para o uso da faixa elástica, drenagem local e cuidados que garantem a retração uniforme dos tecidos.",
    },
  ];

  const faqs = [
    {
      q: "Qualquer pessoa com queixa na papada pode realizar o procedimento?",
      a: "Não. A técnica de Lipo de Papada HD é indicada especificamente para acúmulo de gordura no plano submentual. Quando a queixa decorre unicamente de flacidez muscular ou excesso cutâneo, outras condutas (como bioestimuladores ou fios) podem ser mais adequadas, o que é esclarecido na avaliação.",
    },
    {
      q: "O procedimento exige sedação geral ou internação hospitalar?",
      a: "O procedimento é realizado em nível ambulatorial, sob anestesia local infiltrativa de alta eficácia, proporcionando conforto ao paciente e permitindo que ele retorne para sua casa no mesmo dia.",
    },
    {
      q: "Como é a recuperação nos primeiros dias?",
      a: "É comum haver edema (inchaço) e leve sensibilidade na região cervical nos primeiros dias. O uso correto da faixa compressiva e as orientações fornecidas no consultório são determinantes para o conforto e a acomodação tecidual.",
    },
    {
      q: "A gordura removida pode voltar com o tempo?",
      a: "As células adiposas aspiradas não se regeneram no local tratado. No entanto, variações substanciais de peso corporal podem levar ao aumento das células remanescentes, sendo fundamental manter hábitos saudáveis.",
    },
  ];

  return (
    <div className="w-full bg-[#faf8f5] text-[#2d241e]">
      <div className="max-w-[78rem] mx-auto px-5 sm:px-8 pt-4 pb-16 sm:pb-24">
        <Breadcrumbs
          items={[
            { label: "Tratamentos", href: "/tratamentos/" },
            { label: "Lipo de Papada HD" },
          ]}
        />

        {/* 1. ABERTURA EDITORIAL PRÓPRIA COM RETRATO/MÍDIA CONFIRMADA */}
        <section className="pt-6 sm:pt-10 pb-14 sm:pb-20 border-b border-[#ded5c7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Texto de Abertura (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block">
                  Contorno Cervicomandibular
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-normal tracking-tight text-[#2d241e] leading-[1.18]">
                  Lipo de Papada HD
                </h1>
                <p className="text-base sm:text-lg text-[#82622f] font-medium font-serif italic">
                  Definição do contorno submentual e refinamento do perfil da mandíbula.
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-[#4a3e35] leading-relaxed font-light">
                <p className="text-[#2d241e] font-normal">
                  O acúmulo de gordura abaixo do queixo compromete o contorno do pescoço e a definição do perfil facial. A Lipo de Papada HD realizada pela Dra. Vânia Medeiros remove com precisão o excesso adiposo pré-platismal, destacando a anatomia óssea mandibular.
                </p>
                <p>
                  No atendimento privativo no Águas Claras Shopping, a avaliação prévia é indispensável para diagnosticar se a queixa está associada a tecido adiposo, retrognatismo ou frouxidão do platisma, garantindo uma indicação sincera e segura.
                </p>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={contatoData.links.lipoPapada}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82622f] min-h-[46px]"
                >
                  <span>Conversar sobre Lipo de Papada HD</span>
                  <ArrowRight size={15} />
                </a>
                <span className="text-xs text-[#615346] font-light">
                  Ambiente privativo e biossegurança rigorosa
                </span>
              </div>
            </div>

            {/* Mídia Pertinente: Registro Clínico Validado de Lipo de Papada (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[420px]">
                <div className="bg-[#ede6dc] overflow-hidden border border-[#ded5c8]">
                  <img
                    src={getAssetUrl("/midias/casos/caso-34.jpg")}
                    alt="Registro clínico de contorno submentual e lipo de papada HD - Dra. Vânia Medeiros"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain block"
                    loading="eager"
                  />
                </div>
                <div className="mt-2.5 flex items-center justify-between text-xs text-[#615346] font-light">
                  <span className="font-serif-editorial text-sm text-[#2d241e]">Registro Documentado</span>
                  <span>Contorno Mandibular e Cervical</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. OBJETIVOS QUE PODEM SER DISCUTIDOS NA AVALIAÇÃO */}
        <section className="py-14 sm:py-20 border-b border-[#ded5c7]">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-2">
              Alinhamento de Expectativas
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#2d241e] leading-tight mb-4">
              Objetivos a esclarecer na consulta
            </h2>
            <p className="text-base text-[#4a3e35] leading-relaxed font-light">
              Entenda os propósitos anatômicos que motivam a indicação da abordagem na região submentual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {objectives.map((obj, i) => (
              <div key={i} className="border-t border-[#ded5c7] pt-6 space-y-3">
                <span className="text-xs font-mono font-medium text-[#82622f]">
                  0{i + 1} / FOCO
                </span>
                <h3 className="text-xl font-serif-editorial text-[#2d241e]">
                  {obj.title}
                </h3>
                <p className="text-sm text-[#4a3e35] leading-relaxed font-light">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. COMO ACONTECE O PLANEJAMENTO */}
        <section className="py-14 sm:py-20 border-b border-[#ded5c7]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block">
                Etapas do Protocolo
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e] leading-snug">
                Como acontece o planejamento
              </h2>
              <p className="text-sm sm:text-base text-[#4a3e35] font-light leading-relaxed">
                Cada conduta é planejada para minimizar o desconforto e assegurar cicatrização uniforme.
              </p>
            </div>

            <div className="lg:col-span-8 divide-y divide-[#ded5c7]">
              {planningSteps.map((step) => (
                <div key={step.num} className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
                  <span className="text-sm font-mono font-bold text-[#82622f] shrink-0">
                    {step.num}
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-lg sm:text-xl font-serif-editorial text-[#2d241e]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#4a3e35] font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. LIMITAÇÕES E CUIDADOS PERTINENTES */}
        <section className="py-14 sm:py-20 border-b border-[#ded5c7]">
          <div className="bg-[#f1ebe1] p-8 sm:p-12 border border-[#ded5c8]">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle size={22} className="text-[#82622f] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xl sm:text-2xl font-serif-editorial text-[#2d241e] mb-2">
                  Limitações e Cuidados Pós-Procedimento
                </h2>
                <p className="text-sm sm:text-base text-[#4a3e35] leading-relaxed font-light">
                  A compreensão das orientações de recuperação é parte essencial do resultado:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#ded5c8] text-sm text-[#4a3e35] font-light">
              <div className="space-y-2">
                <p className="font-medium text-[#2d241e]">Pós-Operatório Imediato:</p>
                <p className="leading-relaxed">
                  O uso da faixa compressiva submentual é essencial para moldar a pele e conter o inchaço nos primeiros dias. Atividades físicas intensas devem ser suspensas temporariamente conforme orientação clínica.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-[#2d241e]">Tempo de Acomodação:</p>
                <p className="leading-relaxed">
                  A redução do edema e a acomodação final da pele ocorrem gradualmente ao longo das semanas subsequentes, com acompanhamento em consulta de revisão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DÚVIDAS FREQUENTES */}
        <section className="py-14 sm:py-20 border-b border-[#ded5c7]">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest text-[#82622f] font-semibold block mb-2">
              Esclarecimentos
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-editorial font-normal text-[#2d241e]">
              Dúvidas comuns sobre Lipo de Papada HD
            </h2>
          </div>

          <div className="max-w-3xl divide-y divide-[#ded5c7]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full flex items-center justify-between text-left py-1 text-base sm:text-lg font-medium text-[#2d241e] hover:text-[#82622f] transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#82622f] transition-transform duration-200 shrink-0 ml-4 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="pt-3 pb-1 text-sm sm:text-base text-[#4a3e35] leading-relaxed font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 6. CONTATO E AÇÕES */}
        <section className="pt-14 sm:pt-20">
          <div className="bg-[#2e241d] text-[#faf6f0] p-8 sm:p-14 border border-[#483b30] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#d4ba90] font-semibold block">
                Atendimento em Brasília
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-editorial font-normal text-[#faf6f0]">
                Deseja avaliar o contorno do seu queixo e pescoço?
              </h2>
              <p className="text-sm sm:text-base text-[#ded4c8] leading-relaxed font-light">
                Agende sua avaliação presencial no Águas Claras Shopping para exame detalhado da região submentual e esclarecimento das suas dúvidas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a
                href={contatoData.links.lipoPapada}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#b89660] hover:bg-[#a6834d] rounded-xl shadow-sm transition-all focus-visible:outline-none min-h-[48px]"
              >
                <span>Agendar no WhatsApp</span>
                <ArrowRight size={15} />
              </a>
              <button
                type="button"
                onClick={() => navigate("/tratamentos/")}
                className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-[#faf6f0] border border-[#5a483a] hover:bg-[#3a2f26] rounded-xl transition-colors min-h-[48px] cursor-pointer"
              >
                Outros Tratamentos
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
