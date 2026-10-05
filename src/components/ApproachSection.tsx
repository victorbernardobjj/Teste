import React, { useState } from 'react';
import { APPROACH_CONTENT } from '../data/content';

export const ApproachSection: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="abordagem" className="py-14 sm:py-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
        {/* Bloco Superior com Título e Descrição */}
        <div className="max-w-2xl mb-10 lg:mb-12">
          <div className="inline-flex items-center space-x-3 mb-3">
            <span className="w-5 h-px bg-[#C89467]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#C89467] font-semibold">
              {APPROACH_CONTENT.label}
            </span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] text-[#3D342F] tracking-tight leading-[1.2] mb-4"
            style={{ textWrap: 'balance' }}
          >
            {APPROACH_CONTENT.title}
          </h2>

          <p className="text-sm text-[#7D726A] leading-relaxed">
            {APPROACH_CONTENT.description}
          </p>
        </div>

        {/* Sequência em 3 Cards Suaves Arredondados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {APPROACH_CONTENT.steps.map((step, index) => {
            const isHovered = hoveredStep === index;
            const isAnotherHovered = hoveredStep !== null && hoveredStep !== index;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`bg-[#F4EFEA] border border-[#EAE2D9] rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                  isAnotherHovered ? 'opacity-50' : 'opacity-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#EAE2D9] text-[#C89467] font-mono text-xs font-semibold flex items-center justify-center">
                      0{step.number}
                    </span>
                    <span
                      className={`text-sm transition-transform duration-300 ${
                        isHovered ? 'translate-x-1 text-[#C89467]' : 'text-transparent'
                      }`}
                    >
                      →
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-xl sm:text-2xl text-[#3D342F] mb-3 transition-colors duration-300 ${
                      isHovered ? 'text-[#C89467]' : ''
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
