import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, NAV_LINKS } from '../data/content';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onScheduleClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-2.5 sm:top-4 lg:top-5 left-0 right-0 z-40 px-2 sm:px-4 lg:px-6 pointer-events-none flex justify-center">
        <header
          className={`pointer-events-auto w-full max-w-[1140px] rounded-full transition-all duration-300 ease-out border ${
            isScrolled
              ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-[#EAE2D9] py-2 px-3.5 sm:px-7 shadow-[0_8px_30px_rgba(61,52,47,0.08)]'
              : 'bg-[#FAF7F2]/85 backdrop-blur-sm border-[#EAE2D9]/80 py-2.5 sm:py-3.5 px-4 sm:px-7 shadow-[0_4px_20px_rgba(61,52,47,0.05)]'
          } flex items-center justify-between`}
        >
          {/* Esquerda: Identidade Clínica */}
          <a
            href="#"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89467] rounded-sm max-w-[200px] sm:max-w-none"
            aria-label="Mariana Almeida - Página inicial"
          >
            <span className="font-serif text-sm sm:text-base lg:text-xl font-medium tracking-tight text-[#3D342F] transition-colors duration-200 group-hover:text-[#C89467] leading-tight truncate">
              {CLINIC_INFO.shortName}
            </span>
            <span className="text-[9px] sm:text-[11px] text-[#7D726A] tracking-wider uppercase font-light leading-none truncate">
              {CLINIC_INFO.role}
            </span>
          </a>

          {/* Centro: Links de Navegação (Desktop) */}
          <nav
            className="hidden md:flex items-center space-x-7 lg:space-x-9"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-[13px] tracking-wide text-[#7D726A] hover:text-[#3D342F] transition-colors duration-200 py-1 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89467]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89467] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Direita: CTA em Pílula Caramelo Quente */}
          <div className="hidden md:flex items-center">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs tracking-wider uppercase font-medium text-[#FFFFFF] bg-[#C89467] hover:bg-[#B88050] px-5 py-2.5 rounded-full shadow-xs transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C89467]"
            >
              <span>Agendar conversa</span>
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Mobile: Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-[#3D342F] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89467] rounded-full"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu de navegação"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-5 h-3.5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-px bg-[#3D342F] transition-all duration-300 ease-out origin-center ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
                  }`}
                />
                <span
                  className={`w-full h-px bg-[#3D342F] transition-opacity duration-200 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`w-full h-px bg-[#3D342F] transition-all duration-300 ease-out origin-center ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </header>
      </div>

      {/* Menu Mobile */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
