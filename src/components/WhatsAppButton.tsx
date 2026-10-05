import React from 'react';
import { CLINIC_INFO } from '../data/content';

export const WhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="Acesso rápido para agendamento">
      <a
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 group flex items-center space-x-2 bg-[#C89467] hover:bg-[#B88050] text-[#FFFFFF] px-4 py-2.5 sm:px-5 sm:py-3 rounded-full shadow-[0_6px_25px_rgba(200,148,103,0.35)] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89467]"
        aria-label="Conversar pelo WhatsApp"
      >
        <span className="w-2 h-2 rounded-full bg-[#FFFFFF] animate-pulse" />
        <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold">
          Conversar no WhatsApp
        </span>
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </a>
    </aside>
  );
};
