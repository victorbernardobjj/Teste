import React from 'react';
import { HOW_IT_WORKS_CONTENT } from '../data/content';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C89467] font-semibold block mb-2">
            PASSO A PASSO
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl text-[#3D342F] tracking-tight leading-[1.2] mb-3"
            style={{ textWrap: 'balance' }}
          >
            {HOW_IT_WORKS_CONTENT.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#7D726A]">
            {HOW_IT_WORKS_CONTENT.subtitle}
          </p>
        </div>

        {/* 4 Etapas em Cards Suaves Arredondados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_IT_WORKS_CONTENT.steps.map((step) => (
            <div
              key={step.number}
              className="bg-[#F4EFEA] border border-[#EAE2D9] rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-[#EAE2D9] text-[#C89467] font-mono text-xs font-semibold flex items-center justify-center">
                  0{step.number}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#C89467] font-semibold">
                  ETAPA
                </span>
              </div>

              <div>
                <h3 className="font-serif text-lg lg:text-xl text-[#3D342F] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
