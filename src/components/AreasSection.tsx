import React from 'react';
import { CLINIC_INFO } from '../data/content';

export const AreasSection: React.FC = () => {
  return (
    <section id="atendimento" className="py-14 sm:py-16 lg:py-20 hairline-t bg-[#FAF7F2]">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
        {/* Título Centralizado no Estilo da Imagem de Referência */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14">
          <h2
            className="font-serif text-3xl sm:text-4xl text-[#3D342F] tracking-tight leading-[1.25] mb-3"
            style={{ textWrap: 'balance' }}
          >
            Como posso te ajudar?
          </h2>
          <p className="text-xs sm:text-sm text-[#7D726A]">
            Espaços dedicados de escuta e intervenção terapêutica para as suas necessidades.
          </p>
        </div>

        {/* Grade de Cards Arredondados com Fundo Bege Quente e Ícones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Card 1: Psicoterapia Individual */}
          <div className="bg-[#F4EFEA] border border-[#EAE2D9] rounded-2xl p-7 sm:p-8 flex flex-col items-center text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Ícone Suave */}
            <div className="w-12 h-12 rounded-full bg-[#EAE2D9]/70 text-[#C89467] flex items-center justify-center mb-5">
              <svg className="w-6 h-6 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-[#3D342F] mb-3">
              Psicoterapia Individual
            </h3>

            <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed font-normal">
              Em sessões individuais, ofereço um espaço seguro e acolhedor para que você possa explorar seus sentimentos, cuidar de suas dores emocionais, identificar padrões de pensamento e repetições de comportamento. Trabalharemos juntos para promover seu autoconhecimento e enfrentar os desafios da sua vida.
            </p>
          </div>

          {/* Card 2: Terapia de Casais */}
          <div className="bg-[#F4EFEA] border border-[#EAE2D9] rounded-2xl p-7 sm:p-8 flex flex-col items-center text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Ícone Suave */}
            <div className="w-12 h-12 rounded-full bg-[#EAE2D9]/70 text-[#C89467] flex items-center justify-center mb-5">
              <svg className="w-6 h-6 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-[#3D342F] mb-3">
              Terapia de Casais
            </h3>

            <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed font-normal">
              Se os conflitos e desentendimentos estão prejudicando a qualidade do seu relacionamento, a psicoterapia pode ser uma ferramenta poderosa para reconstruir a conexão e fortalecer a intimidade. Iremos explorar questões de comunicação, resolução de conflitos e construção de vínculos saudáveis.
            </p>
          </div>

          {/* Card 3: Autoconhecimento & Ansiedade */}
          <div className="bg-[#F4EFEA] border border-[#EAE2D9] rounded-2xl p-7 sm:p-8 flex flex-col items-center text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* Ícone Suave */}
            <div className="w-12 h-12 rounded-full bg-[#EAE2D9]/70 text-[#C89467] flex items-center justify-center mb-5">
              <svg className="w-6 h-6 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-[#3D342F] mb-3">
              Regulação da Ansiedade
            </h3>

            <p className="text-xs sm:text-sm text-[#7D726A] leading-relaxed font-normal">
              Aprenda a lidar com pensamentos acelerados, preocupações antecipatórias e a pressão constante por perfeccionismo. Com técnicas práticas da TCC, você conquista clareza mental e serenidade para o seu cotidiano pessoal e profissional.
            </p>
          </div>
        </div>

        {/* Botão em Pílula Caramelo Quente Centralizado */}
        <div className="text-center">
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#FFFFFF] bg-[#C89467] hover:bg-[#B88050] px-8 py-3.5 rounded-full shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89467] w-full sm:w-auto"
          >
            <span>AGENDAR ATENDIMENTO</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
