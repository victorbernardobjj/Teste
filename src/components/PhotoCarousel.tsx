import React, { useState, useRef } from 'react';
import { GALLERY_SLIDES } from '../data/content';
import { PhotoPlaceholder } from './PhotoPlaceholder';

export const PhotoCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isHorizontalSwipe = useRef<boolean | null>(null);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? GALLERY_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === GALLERY_SLIDES.length - 1 ? 0 : prev + 1));
  };

  // Suporte a swipe & drag suave no mobile e desktop com preservação de scroll vertical
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const isTouch = 'touches' in e;
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;
    touchStartX.current = clientX;
    touchStartY.current = clientY;
    isHorizontalSwipe.current = isTouch ? null : true;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging || touchStartX.current === null) return;
    const isTouch = 'touches' in e;
    const clientX = isTouch ? e.touches[0].clientX : e.clientX;
    const clientY = isTouch ? e.touches[0].clientY : e.clientY;

    const diffX = clientX - touchStartX.current;
    const diffY = touchStartY.current !== null ? clientY - touchStartY.current : 0;

    // Detectar intenção de gesto no mobile: se for scroll vertical, não travar a página
    if (isHorizontalSwipe.current === null) {
      if (Math.abs(diffX) > 8 || Math.abs(diffY) > 8) {
        isHorizontalSwipe.current = Math.abs(diffX) > Math.abs(diffY);
      }
    }

    if (isHorizontalSwipe.current) {
      setDragOffset(diffX * 0.4);
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    const threshold = 35;

    if (isHorizontalSwipe.current && dragOffset < -threshold) {
      nextSlide();
    } else if (isHorizontalSwipe.current && dragOffset > threshold) {
      prevSlide();
    }

    touchStartX.current = null;
    touchStartY.current = null;
    isHorizontalSwipe.current = null;
    setDragOffset(0);
    setIsDragging(false);
  };

  // Navegação por teclado quando o carrossel estiver focado
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <section
      className="py-14 sm:py-16 lg:py-20 bg-[#F4EFEA]/60 hairline-t hairline-b focus-visible:outline-none overflow-hidden"
      aria-label="Carrossel editorial de fotografias"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
        {/* Cabeçalho do Carrossel */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center space-x-2 mb-2">
              <span className="w-4 h-px bg-[#C89467]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#C89467] font-semibold">
                AMBIENTAÇÃO & CONSULTÓRIO
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#3D342F] tracking-tight">
              O espaço do atendimento
            </h2>
          </div>

          {/* Controles de Navegação */}
          <div className="flex items-center space-x-3 mt-6 sm:mt-0">
            <span className="font-mono text-xs text-[#7D726A] tracking-widest mr-2">
              0{currentSlide + 1} / 0{GALLERY_SLIDES.length}
            </span>

            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#EAE2D9] bg-[#FAF7F2] hover:bg-[#C89467] hover:text-white hover:border-[#C89467] text-[#3D342F] transition-all duration-200 shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89467]"
              aria-label="Slide anterior"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#EAE2D9] bg-[#FAF7F2] hover:bg-[#C89467] hover:text-white hover:border-[#C89467] text-[#3D342F] transition-all duration-200 shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89467]"
              aria-label="Próximo slide"
            >
              →
            </button>
          </div>
        </div>

        {/* Viewport do Carrossel com Cards Perfeitamente Centralizados */}
        <div
          className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
        >
          <div
            className={`flex transition-transform duration-500 ease-out ${
              isDragging ? 'transition-none' : ''
            }`}
            style={{
              transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`,
            }}
          >
            {GALLERY_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 flex flex-col items-center"
                aria-hidden={currentSlide !== idx}
              >
                <div className="w-full relative">
                  <PhotoPlaceholder
                    slotId={`gallery-slide-${idx + 1}`}
                    label="SUA FOTO VAI AQUI"
                    sublabel={`Slide 0${idx + 1} · ${slide.subtitle}`}
                    aspectRatio="aspect-[16/10] md:aspect-[21/9]"
                    className="rounded-3xl shadow-[0_4px_24px_rgba(61,52,47,0.06)] border border-[#EAE2D9]"
                  />

                  {/* Legenda do Slide Centralizada */}
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#7D726A] gap-2 px-1">
                    <span className="font-serif italic text-base text-[#3D342F]">
                      {slide.subtitle}
                    </span>
                    <span className="font-light">{slide.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Abas e Indicadores de Navegação */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 pt-6 border-t border-[#EAE2D9]">
          {GALLERY_SLIDES.map((slide, i) => {
            const isActive = currentSlide === i;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`text-left py-2 transition-all duration-300 border-t-2 ${
                  isActive
                    ? 'border-[#C89467] opacity-100'
                    : 'border-transparent opacity-40 hover:opacity-75'
                }`}
                aria-label={`Ver slide 0${i + 1}: ${slide.subtitle}`}
              >
                <span className="font-mono text-[10px] tracking-widest block text-[#C89467] font-semibold">
                  0{i + 1}
                </span>
                <span className="font-serif text-xs sm:text-sm text-[#3D342F] truncate block">
                  {slide.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
