import React, { useEffect } from 'react';
import { CLINIC_INFO, NAV_LINKS } from '../data/content';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Trancar scroll do body quando o menu estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fechar no ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden bg-[#FAF7F2] flex flex-col justify-between p-6 sm:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação móvel"
    >
      {/* Topo do Menu com botão fechar */}
      <div className="flex items-center justify-between border-b border-[#EAE2D9] pb-4">
        <div>
          <span className="font-serif text-lg font-medium text-[#3D342F]">
            {CLINIC_INFO.shortName}
          </span>
          <p className="text-[10px] text-[#C89467] tracking-wider uppercase font-semibold">
            {CLINIC_INFO.role}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 text-[#3D342F] text-xs tracking-wider uppercase flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89467] rounded-full"
          aria-label="Fechar menu"
        >
          <span>Fechar</span>
          <span className="text-xl leading-none">×</span>
        </button>
      </div>

      {/* Lista de Navegação Principal */}
      <nav className="flex flex-col space-y-4 my-auto py-6">
        {NAV_LINKS.map((link, idx) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="group flex items-baseline justify-between py-3 border-b border-[#EAE2D9] text-left transition-colors hover:text-[#C89467]"
          >
            <span className="font-serif text-2xl text-[#3D342F] group-hover:text-[#C89467] transition-colors">
              {link.label}
            </span>
            <span className="font-mono text-xs text-[#C89467] font-semibold">
              0{idx + 1}
            </span>
          </a>
        ))}
      </nav>

      {/* Rodapé do Menu com Dados Clínicos e CTA Caramelo */}
      <div className="space-y-4 pt-4 border-t border-[#EAE2D9]">
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="group w-full flex items-center justify-center gap-2 text-xs tracking-wider uppercase font-semibold text-[#FFFFFF] bg-[#C89467] hover:bg-[#B88050] px-5 py-3.5 rounded-full shadow-sm transition-all duration-200"
        >
          <span>Agendar conversa</span>
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>

        <div className="flex flex-col space-y-0.5 text-xs text-[#7D726A] text-center">
          <span>{CLINIC_INFO.modality}</span>
          <span className="text-[11px]">{CLINIC_INFO.crp} · {CLINIC_INFO.location}</span>
        </div>
      </div>
    </div>
  );
};
