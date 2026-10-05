import React from 'react';
import { CLINIC_INFO } from '../data/content';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import imgMariana2 from '../assets/images/psicologa_atendimento_1791160395796.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-14 sm:py-16 lg:py-20 bg-[#FAF7F2]">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Lado da Fotografia com Moldura Arredondada Suave */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <PhotoPlaceholder
                slotId="about-profile"
                src={imgMariana2}
                label="FOTO DA DRA. MARIANA"
                sublabel="Dra. Mariana Almeida · Ambiente clínico"
                aspectRatio="aspect-[4/5]"
                className="rounded-3xl shadow-[0_8px_30px_rgba(61,52,47,0.06)] border border-[#EAE2D9]"
              />

              {/* Detalhe floral sutil de acolhimento no rodapé da foto */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#7D726A]/80 font-mono tracking-wider">
                <span>CRP 05/123456</span>
                <span>{CLINIC_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Lado Textual Editorial da Imagem de Referência */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4 order-1 lg:order-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3D342F] tracking-tight leading-[1.2] mb-2">
              Quem é {CLINIC_INFO.shortName}?
            </h2>

            <div className="space-y-3.5 text-xs sm:text-sm text-[#7D726A] leading-relaxed font-normal">
              <p>
                Sou psicóloga clínica e acredito profundamente que a psicoterapia é um espaço seguro de acolhimento, escuta atenta e reconstrução de caminhos saudáveis.
              </p>

              <p>
                Minha atuação parte de uma compreensão cuidadosa e individualizada, respeitando a história, as dores e o ritmo de cada pessoa. Através da <strong className="font-medium text-[#3D342F]">Terapia Cognitivo-Comportamental</strong>, trabalhamos juntos na identificação de padrões de pensamento repetitivos, regulação de emoções e desenvolvimento de autonomia emocional.
              </p>

              <p>
                Ofereço atendimento direcionado especialmente a adultos que buscam fortalecimento emocional, superação de crises de ansiedade, organização de rotinas e relações interpessoais mais autênticas e equilibradas.
              </p>
            </div>

            {/* Informações Estruturadas em Linhas Suaves */}
            <div className="pt-4 border-t border-[#EAE2D9]">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs">
                <div className="flex flex-col">
                  <dt className="text-[10px] uppercase tracking-wider text-[#C89467] font-semibold">
                    Atuação
                  </dt>
                  <dd className="font-medium text-[#3D342F]">
                    {CLINIC_INFO.role} · {CLINIC_INFO.crp}
                  </dd>
                </div>

                <div className="flex flex-col">
                  <dt className="text-[10px] uppercase tracking-wider text-[#C89467] font-semibold">
                    Abordagem Teórica
                  </dt>
                  <dd className="font-medium text-[#3D342F]">
                    {CLINIC_INFO.approach}
                  </dd>
                </div>

                <div className="flex flex-col">
                  <dt className="text-[10px] uppercase tracking-wider text-[#C89467] font-semibold">
                    Modalidades
                  </dt>
                  <dd className="font-medium text-[#3D342F]">
                    Atendimento Online e Presencial
                  </dd>
                </div>

                <div className="flex flex-col">
                  <dt className="text-[10px] uppercase tracking-wider text-[#C89467] font-semibold">
                    Público-Alvo
                  </dt>
                  <dd className="font-medium text-[#3D342F]">
                    {CLINIC_INFO.targetAudience}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
