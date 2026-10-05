import React from 'react';
import { FINAL_CTA_CONTENT, CLINIC_INFO } from '../data/content';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F4EFEA]/80 hairline-t">
      <div className="max-w-[900px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Título */}
        <h2
          className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-[#3D342F] tracking-tight leading-[1.2] mb-4 max-w-2xl"
          style={{ textWrap: 'balance' }}
        >
          {FINAL_CTA_CONTENT.title}
        </h2>

        {/* Texto descritivo */}
        <p className="text-sm sm:text-base text-[#7D726A] max-w-lg mb-8 font-normal">
          {FINAL_CTA_CONTENT.description}
        </p>

        {/* Botão em Pílula Caramelo Quente */}
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#FFFFFF] bg-[#C89467] hover:bg-[#B88050] px-9 py-4 rounded-full shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89467] w-full sm:w-auto text-center"
        >
          <span>Falar com Mariana</span>
          <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5">
            →
          </span>
        </a>

        {/* Micro-informação de acolhimento */}
        <span className="mt-6 text-xs text-[#7D726A] tracking-wider uppercase font-medium">
          {CLINIC_INFO.modality} · {CLINIC_INFO.crp}
        </span>
      </div>
    </section>
  );
};
