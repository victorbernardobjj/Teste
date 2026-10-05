import React from 'react';
import { QUOTE_CONTENT } from '../data/content';

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F4EFEA]/80 hairline-t hairline-b">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        {/* Frase Principal com Tipografia Editorial */}
        <blockquote
          className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-[#3D342F] leading-[1.3] tracking-tight font-normal mb-6 max-w-3xl"
          style={{ textWrap: 'balance' }}
        >
          “{QUOTE_CONTENT.quote}”
        </blockquote>

        {/* Linha Fina Delicada de Separação em Caramelo Suave */}
        <div className="w-12 h-0.5 bg-[#C89467]/50 mb-6 rounded-full" />

        {/* Subtexto Reflexivo */}
        <p
          className="text-base sm:text-lg text-[#7D726A] max-w-xl font-normal leading-relaxed"
          style={{ textWrap: 'balance' }}
        >
          {QUOTE_CONTENT.subquote}
        </p>
      </div>
    </section>
  );
};
