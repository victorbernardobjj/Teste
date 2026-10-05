import React from 'react';
import { CLINIC_INFO } from '../data/content';

export const IdentificationSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 hairline-t bg-[#FAF7F2]">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
        {/* Título Centralizado no Estilo da Referência */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2
            className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] text-[#3D342F] leading-[1.25] tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Você se identifica com alguma dessas situações?
          </h2>
        </div>

        {/* Grade de 3 Cards Arredondados com Fundo Quente e Ícones Delicados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Card 1: Sobrecarga mental */}
          <div className="bg-[#F4EFEA] border border-[#EAE2D9] rounded-2xl p-7 sm:p-8 flex flex-col items-center text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Ícone Suave de Mente/Cuidado */}
            <div className="w-12 h-12 rounded-full bg-[#EAE2D9]/70 text-[#C89467] flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 stroke-[1.5]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>

            <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed font-normal">
              Você se sente constantemente <strong className="font-semibold text-[#3D342F]">sobrecarregada pelas demandas da vida</strong> e não consegue encontrar tempo para cuidar de si mesma?
            </p>
          </div>

          {/* Card 2: Relacionamentos e estresse */}
          <div className="bg-[#F4EFEA] border border-[#EAE2D9] rounded-2xl p-7 sm:p-8 flex flex-col items-center text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Ícone de Relógio / Dinâmica de Tempo */}
            <div className="w-12 h-12 rounded-full bg-[#EAE2D9]/70 text-[#C89467] flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 stroke-[1.5]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed font-normal">
              Os relacionamentos em sua vida estão trazendo <strong className="font-semibold text-[#3D342F]">mais estresse do que felicidade</strong>, e você não sabe como mudar essa dinâmica?
            </p>
          </div>

          {/* Card 3: Autoestima e inadequação */}
          <div className="bg-[#F4EFEA] border border-[#EAE2D9] rounded-2xl p-7 sm:p-8 flex flex-col items-center text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Ícone de Coração / Autoestima */}
            <div className="w-12 h-12 rounded-full bg-[#EAE2D9]/70 text-[#C89467] flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 stroke-[1.5]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>

            <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed font-normal">
              Você luta diariamente contra <strong className="font-semibold text-[#3D342F]">sentimentos de inadequação e baixa autoestima</strong>, mesmo sabendo que é capaz de muito mais?
            </p>
          </div>
        </div>

        {/* Frase e Botão Central no Estilo Exato da Imagem */}
        <div className="text-center max-w-xl mx-auto flex flex-col items-center space-y-6">
          <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed font-normal" style={{ textWrap: 'balance' }}>
            Se você respondeu <span className="font-semibold text-[#3D342F]">“sim”</span> a alguma dessas perguntas, saiba que não está sozinha. Muitas pessoas enfrentam desafios semelhantes todos os dias, e estou pronta para te ajudar.
          </p>

          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#FFFFFF] bg-[#C89467] hover:bg-[#B88050] px-8 py-3.5 rounded-full shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89467] w-full sm:w-auto"
          >
            <span>QUERO SABER MAIS</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
