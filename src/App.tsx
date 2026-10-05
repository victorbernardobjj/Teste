/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IdentificationSection } from './components/IdentificationSection';
import { AboutSection } from './components/AboutSection';
import { AreasSection } from './components/AreasSection';
import { ModalitiesSection } from './components/ModalitiesSection';
import { QuoteSection } from './components/QuoteSection';
import { PhotoCarousel } from './components/PhotoCarousel';
import { ApproachSection } from './components/ApproachSection';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3D342F] flex flex-col font-sans selection:bg-[#C89467]/25 selection:text-[#3D342F]">
      {/* Barra de Navegação Superior Flutuante */}
      <Navbar />

      {/* Conteúdo Principal com Estrutura Semântica */}
      <main id="conteudo-principal" className="flex-grow">
        {/* 1. Hero Principal */}
        <Hero />

        {/* 2. Seção "Você se identifica com alguma dessas situações?" */}
        <IdentificationSection />

        {/* 3. Seção "Quem é Mariana Almeida?" (Sobre) */}
        <AboutSection />

        {/* 4. Seção "Como posso te ajudar?" (Áreas e Serviços) */}
        <AreasSection />

        {/* 5. Seção "Formas de Atendimento" (Presencial e Online) */}
        <ModalitiesSection />

        {/* 6. Frase Reflexiva e Acolhedora */}
        <QuoteSection />

        {/* 7. Galeria Editorial e Consultório (Carrossel) */}
        <PhotoCarousel />

        {/* 8. Abordagem TCC */}
        <ApproachSection />

        {/* 9. Relatos e Depoimentos (Carrossel) */}
        <TestimonialsCarousel />

        {/* 10. Passo a Passo Inicial */}
        <HowItWorks />

        {/* 11. Perguntas Frequentes */}
        <FAQ />

        {/* 12. Chamada Final para Contato */}
        <FinalCTA />
      </main>

      {/* Rodapé */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}
