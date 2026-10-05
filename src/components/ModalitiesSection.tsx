import React from 'react';
import { CLINIC_INFO } from '../data/content';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import imgConsultorio from '../assets/images/consultorio_presencial_1791160359080.jpg';
import imgOnline from '../assets/images/terapia_online_1791160371162.jpg';

export const ModalitiesSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 hairline-t bg-[#FAF7F2]">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
        {/* Título Centralizado */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <h2
            className="font-serif text-3xl sm:text-4xl text-[#3D342F] tracking-tight leading-[1.25] mb-3"
            style={{ textWrap: 'balance' }}
          >
            Formas de Atendimento
          </h2>
          <p className="text-xs sm:text-sm text-[#7D726A]">
            Duas modalidades pensadas para o seu conforto, segurança e conveniência.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Bloco 1: Atendimento Presencial */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F4EFEA] border border-[#EAE2D9] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="md:col-span-5 order-1">
              <PhotoPlaceholder
                slotId="presencial-photo"
                src={imgConsultorio}
                label="CONSULTÓRIO PRESENCIAL"
                sublabel="Ambiente sereno e privativo"
                aspectRatio="aspect-[4/3]"
                className="rounded-2xl shadow-sm border border-[#EAE2D9]"
              />
            </div>

            <div className="md:col-span-7 order-2 space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#C89467] font-semibold block">
                MODALIDADE PRESENCIAL
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#3D342F]">
                Atendimento Presencial
              </h3>

              <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed font-normal">
                Se preferir um contato mais próximo e presencial, você pode agendar uma consulta em meu consultório localizado no <strong className="font-semibold text-[#3D342F]">Rio de Janeiro — RJ</strong>. O ambiente é acolhedor e propício para o atendimento das suas sessões de psicoterapia, com total sigilo, privacidade e conforto.
              </p>

              <div className="pt-2">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#C89467] hover:text-[#B88050] transition-colors"
                >
                  <span>Agendar presencialmente</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bloco 2: Atendimento Online */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F4EFEA] border border-[#EAE2D9] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="md:col-span-7 order-2 md:order-1 space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-[#C89467] font-semibold block">
                MODALIDADE ONLINE
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#3D342F]">
                Atendimento Online
              </h3>

              <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed font-normal">
                Para sua conveniência e no conforto da sua casa, também disponibilizo sessões de <strong className="font-semibold text-[#3D342F]">terapia online para todo o Brasil e brasileiros no exterior</strong>, utilizando plataformas virtuais criptografadas e seguras. Essa modalidade permite que você receba suporte terapêutico de onde estiver, com a mesma qualidade, acolhimento e comprometimento.
              </p>

              <div className="pt-2">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#C89467] hover:text-[#B88050] transition-colors"
                >
                  <span>Agendar sessão online</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-5 order-1 md:order-2">
              <PhotoPlaceholder
                slotId="online-photo"
                src={imgOnline}
                label="SESSÃO ONLINE"
                sublabel="Atendimento seguro em qualquer lugar"
                aspectRatio="aspect-[4/3]"
                className="rounded-2xl shadow-sm border border-[#EAE2D9]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
