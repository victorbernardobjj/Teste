import React, { useState, useRef } from 'react';
import { TESTIMONIALS_CONTENT } from '../data/content';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isHorizontalSwipe = useRef<boolean | null>(null);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? TESTIMONIALS_CONTENT.items.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === TESTIMONIALS_CONTENT.items.length - 1 ? 0 : prevIdx + 1
    );
  };

  const handleStart = (clientX: number, clientY?: number, isTouch?: boolean) => {
    touchStartX.current = clientX;
    touchStartY.current = clientY ?? null;
    isHorizontalSwipe.current = isTouch ? null : true;
    setIsDragging(true);
  };

  const handleMove = (clientX: number, clientY?: number) => {
    if (!isDragging || touchStartX.current === null) return;
    const diffX = clientX - touchStartX.current;
    const diffY = touchStartY.current !== null && clientY !== undefined ? clientY - touchStartY.current : 0;

    if (isHorizontalSwipe.current === null) {
      if (Math.abs(diffX) > 8 || Math.abs(diffY) > 8) {
        isHorizontalSwipe.current = Math.abs(diffX) > Math.abs(diffY);
      }
    }

    if (isHorizontalSwipe.current) {
      setDragOffset(diffX * 0.4);
    }
  };

  const handleEnd = () => {
    if (touchStartX.current === null) return;
    const threshold = 35;

    if (isHorizontalSwipe.current && dragOffset < -threshold) {
      next();
    } else if (isHorizontalSwipe.current && dragOffset > threshold) {
      prev();
    }

    touchStartX.current = null;
    touchStartY.current = null;
    isHorizontalSwipe.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  return (
    <section
      className="py-14 sm:py-16 lg:py-20 bg-[#F4EFEA]/60 hairline-t hairline-b overflow-hidden"
      aria-label="Carrossel de relatos clínicos demonstrativos"
    >
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
        {/* Cabeçalho da Seção com Identificação Ética */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center space-x-2 mb-2">
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#C89467] font-mono font-semibold">
                {TESTIMONIALS_CONTENT.tag}
              </span>
              <span className="text-xs text-[#7D726A]/50">·</span>
              <span className="text-[11px] text-[#7D726A]/80">
                {TESTIMONIALS_CONTENT.note}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3D342F] tracking-tight">
              Experiências do processo
            </h2>
          </div>

          {/* Controles de Navegação */}
          <div className="flex items-center space-x-3 mt-6 sm:mt-0">
            <span className="font-mono text-xs text-[#7D726A] tracking-widest mr-2">
              0{currentIndex + 1} / 0{TESTIMONIALS_CONTENT.items.length}
            </span>

            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#EAE2D9] bg-[#FAF7F2] hover:bg-[#C89467] hover:text-white hover:border-[#C89467] text-[#3D342F] transition-all duration-200 shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89467]"
              aria-label="Depoimento anterior"
            >
              ←
            </button>

            <button
              type="button"
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#EAE2D9] bg-[#FAF7F2] hover:bg-[#C89467] hover:text-white hover:border-[#C89467] text-[#3D342F] transition-all duration-200 shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89467]"
              aria-label="Próximo depoimento"
            >
              →
            </button>
          </div>
        </div>

        {/* Depoimento em Destaque no Carrossel */}
        <div
          className="relative min-h-[200px] flex items-center cursor-grab active:cursor-grabbing select-none"
          onTouchStart={(e) => handleStart(e.touches[0].clientX, e.touches[0].clientY, true)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchEnd={handleEnd}
          onMouseDown={(e) => handleStart(e.clientX, e.clientY, false)}
          onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
        >
          <div
            className={`w-full transition-transform duration-400 ease-out ${
              isDragging ? 'transition-none' : ''
            }`}
            style={{ transform: `translateX(${dragOffset}px)` }}
          >
            {TESTIMONIALS_CONTENT.items.map((item, idx) => {
              const isCurrent = idx === currentIndex;

              return (
                <div
                  key={item.id}
                  className={`transition-opacity duration-500 ease-out ${
                    isCurrent ? 'block opacity-100' : 'hidden opacity-0'
                  }`}
                  aria-hidden={!isCurrent}
                >
                  <blockquote className="max-w-3xl mx-auto text-center">
                    <p
                      className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3D342F] leading-[1.3] tracking-tight font-normal mb-6"
                      style={{ textWrap: 'balance' }}
                    >
                      “{item.quote}”
                    </p>

                    <footer className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3 text-sm text-[#7D726A]">
                      <cite className="not-italic font-semibold text-[#3D342F]">
                        — {item.author}
                      </cite>
                      {item.context && (
                        <>
                          <span className="hidden sm:inline text-[#7D726A]/40">·</span>
                          <span className="text-xs uppercase tracking-wider text-[#C89467] font-semibold">
                            {item.context}
                          </span>
                        </>
                      )}
                    </footer>
                  </blockquote>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicadores Minimalistas de Posição do Carrossel */}
        <div className="flex items-center justify-center space-x-3 mt-10">
          {TESTIMONIALS_CONTENT.items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? 'w-10 bg-[#C89467]'
                  : 'w-3 bg-[#EAE2D9] hover:bg-[#C89467]/50'
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
