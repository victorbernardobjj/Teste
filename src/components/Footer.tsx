import React from 'react';
import { CLINIC_INFO, NAV_LINKS } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F2] hairline-t py-12 lg:py-16 text-xs text-[#7D726A]">
      <div className="max-w-[1140px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 hairline-b">
          {/* Identidade e CRP */}
          <div className="md:col-span-5 flex flex-col space-y-2">
            <span className="font-serif text-xl font-medium text-[#3D342F]">
              {CLINIC_INFO.name}
            </span>
            <span className="text-xs uppercase tracking-wider text-[#C89467] font-medium">
              {CLINIC_INFO.role} · {CLINIC_INFO.crp}
            </span>
            <p className="text-xs text-[#7D726A] max-w-sm pt-2 leading-relaxed font-normal">
              Atendimento psicológico acolhedor online e presencial para adultos em todo o Brasil. Espaço pautado no sigilo, ética profissional e compromisso com o seu desenvolvimento.
            </p>
          </div>

          {/* Links do Site */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#3D342F] font-semibold">
              Navegação
            </span>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#C89467] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato & Redes */}
          <div className="md:col-span-4 flex flex-col space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-[#3D342F] font-semibold">
              Canais diretos
            </span>
            <div className="space-y-2">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#7D726A]/70">
                  Instagram
                </span>
                <a
                  href={CLINIC_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C89467] transition-colors duration-200 text-[#3D342F] font-medium"
                >
                  {CLINIC_INFO.instagram}
                </a>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#7D726A]/70">
                  E-mail
                </span>
                <a
                  href={`mailto:${CLINIC_INFO.email}`}
                  className="hover:text-[#C89467] transition-colors duration-200 text-[#3D342F] font-medium"
                >
                  {CLINIC_INFO.email}
                </a>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#7D726A]/70">
                  Localização
                </span>
                <span>{CLINIC_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha Inferior com Copyright e Menção ao CFP */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#7D726A]/75">
          <span>
            © {CLINIC_INFO.year} {CLINIC_INFO.shortName}. Todos os direitos reservados.
          </span>
          <span>
            Em conformidade com as diretrizes do Conselho Federal de Psicologia (CFP).
          </span>
        </div>
      </div>
    </footer>
  );
};
