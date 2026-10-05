import React, { useState } from 'react';
import { FAQ_CONTENT } from '../data/content';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-14 sm:py-16 lg:py-20 hairline-t bg-[#FAF7F2]">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Lado Esquerdo: Título da Seção */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C89467] font-semibold block mb-2">
                DÚVIDAS FREQUENTES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3D342F] tracking-tight leading-[1.2] mb-3">
                {FAQ_CONTENT.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed max-w-sm">
                {FAQ_CONTENT.subtitle}
              </p>
            </div>
          </div>

          {/* Lado Direito: Accordion em Cards Suaves Arredondados */}
          <div className="lg:col-span-8 space-y-4">
            {FAQ_CONTENT.items.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-[#F4EFEA] border border-[#EAE2D9] rounded-2xl p-5 sm:p-6 transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89467] rounded-lg"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg text-[#3D342F] group-hover:text-[#C89467] transition-colors duration-200 pr-4">
                      {item.question}
                    </span>

                    <span
                      className={`w-7 h-7 rounded-full bg-[#EAE2D9] text-[#C89467] flex items-center justify-center text-sm font-semibold transition-transform duration-300 ease-out flex-shrink-0 ${
                        isOpen ? 'rotate-45 bg-[#C89467] text-white' : 'group-hover:scale-110'
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* Resposta com Transição Suave */}
                  <div
                    className={`grid transition-all duration-300 ease-out overflow-hidden ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-[#EAE2D9]'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed pr-2 font-normal">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
