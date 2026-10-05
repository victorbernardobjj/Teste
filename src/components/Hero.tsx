import React from 'react';
import { HERO_CONTENT, CLINIC_INFO } from '../data/content';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import imgMariana1 from '../assets/images/psicologa_mariana_1791160382823.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Coluna Editorial de Texto */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 lg:space-y-6 order-1">
            {/* Pequeno Label */}
            <div
              className="inline-flex items-center space-x-3 opacity-0 animate-[fadeDown_0.7s_ease-out_0.1s_forwards]"
            >
              <span className="w-6 h-px bg-[#C89467]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#C89467] font-semibold">
                {HERO_CONTENT.label}
              </span>
            </div>

            {/* Headline H1 */}
            <h1
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.25rem] leading-[1.18] lg:leading-[1.15] text-[#3D342F] tracking-tight opacity-0 animate-[fadeDown_0.8s_ease-out_0.25s_forwards]"
              style={{ textWrap: 'balance' }}
            >
              {HERO_CONTENT.headline}
            </h1>

            {/* Texto Descritivo */}
            <p
              className="text-base sm:text-lg text-[#7D726A] leading-relaxed max-w-xl font-normal opacity-0 animate-[fadeDown_0.8s_ease-out_0.4s_forwards]"
            >
              {HERO_CONTENT.description}
            </p>

            {/* Bloco de Ação & Micro-metadados */}
            <div
              className="pt-1 flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 opacity-0 animate-[fadeDown_0.8s_ease-out_0.55s_forwards]"
            >
              <a
                href={HERO_CONTENT.ctaTarget}
                className="group inline-flex items-center justify-center gap-3 text-xs uppercase tracking-widest font-semibold text-[#FFFFFF] bg-[#C89467] hover:bg-[#B88050] px-8 py-3.5 rounded-full shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89467] w-full sm:w-auto text-center"
              >
                <span>{HERO_CONTENT.ctaText}</span>
                <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1.5">
                  →
                </span>
              </a>

              <span className="text-xs text-[#7D726A] tracking-wider uppercase font-medium text-center sm:text-left">
                {HERO_CONTENT.meta}
              </span>
            </div>
          </div>

          {/* Coluna Editorial de Fotografia */}
          <div
            className="lg:col-span-5 order-2 lg:order-2 opacity-0 animate-[fadeInScale_1s_cubic-bezier(0.16,1,0.3,1)_0.35s_forwards]"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Moldura de Fotografia Principal com Bordas Suaves Arredondadas */}
              <div className="relative">
                <PhotoPlaceholder
                  slotId="hero-profile"
                  src={imgMariana1}
                  label="FOTO DA DRA. MARIANA"
                  sublabel="Dra. Mariana Almeida · Retrato principal"
                  aspectRatio="aspect-[3/4]"
                  className="rounded-3xl shadow-[0_8px_30px_rgba(61,52,47,0.06)] border border-[#EAE2D9]"
                />

                {/* Selo Redondo Giratório com Efeito Vidro Translúcido (Glassmorphism) */}
                <div
                  className="group absolute -bottom-5 -left-3 sm:-bottom-7 sm:-left-5 z-20 w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center cursor-default select-none transition-transform duration-300 hover:scale-105"
                  aria-label={`Selo Profissional Oficial: ${CLINIC_INFO.name}, ${CLINIC_INFO.crp}`}
                >
                  {/* Fundo Translúcido com Efeito Vidro Fosco (Frosted Glass) */}
                  <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-xl backdrop-saturate-150 border border-white/50 shadow-[0_8px_32px_rgba(61,52,47,0.12)] ring-1 ring-white/30" />

                  {/* Brilho Especular Reflexivo do Vidro */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/35 via-transparent to-transparent pointer-events-none" />

                  {/* Anel Interno Fino de Vidro Polido */}
                  <div className="absolute inset-2 sm:inset-3 rounded-full border border-white/40 pointer-events-none" />

                  {/* SVG com Tipografia Curvada que Gira Continuamente */}
                  <svg
                    className="w-full h-full animate-spin-slow group-hover:[animation-play-state:paused] motion-reduce:animate-none origin-center relative z-10"
                    viewBox="0 0 200 200"
                    aria-hidden="true"
                  >
                    <defs>
                      {/* Raio 72px => Comprimento = 2 * π * 72 ≈ 452.4px */}
                      <path
                        id="sealCirclePath"
                        d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                      />
                    </defs>
                    <text
                      className="text-[12.5px] uppercase tracking-[0.24em] font-semibold"
                      fill="#3D342F"
                    >
                      <textPath href="#sealCirclePath" startOffset="0%">
                        • DRA. MARIANA ALMEIDA • CRP 05/123456 • ATENDIMENTO CLÍNICO
                      </textPath>
                    </text>
                  </svg>

                  {/* Lente Central Translúcida Efeito Vidro (Sem logo de psicologia) */}
                  <div className="absolute inset-0 m-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/50 shadow-inner flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#C89467]/75 shadow-xs" />
                  </div>
                </div>
              </div>

              {/* Legenda institucional sutil abaixo da foto */}
              <div className="mt-7 sm:mt-8 flex items-center justify-between text-[11px] text-[#7D726A]/80 font-mono tracking-wider">
                <span>RETRATO CLÍNICO</span>
                <span>{CLINIC_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
