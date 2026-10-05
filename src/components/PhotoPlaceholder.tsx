import React, { useState, useEffect, useRef } from 'react';
import imgConsultorio from '../assets/images/consultorio_presencial_1791160359080.jpg';
import imgOnline from '../assets/images/terapia_online_1791160371162.jpg';
import imgMariana1 from '../assets/images/psicologa_mariana_1791160382823.jpg';
import imgMariana2 from '../assets/images/psicologa_atendimento_1791160395796.jpg';

export interface GalleryPhoto {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  category: 'profissional' | 'ambiente';
}

export const PRESET_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'mariana-1',
    title: 'Dra. Mariana Almeida',
    subtitle: 'Retrato institucional (Blazer bege)',
    src: imgMariana1,
    category: 'profissional',
  },
  {
    id: 'mariana-2',
    title: 'Dra. Mariana Almeida',
    subtitle: 'Atendimento clínico (Suéter linho)',
    src: imgMariana2,
    category: 'profissional',
  },
  {
    id: 'consultorio',
    title: 'Consultório Presencial',
    subtitle: 'Poltrona e luz natural acolhedora',
    src: imgConsultorio,
    category: 'ambiente',
  },
  {
    id: 'online',
    title: 'Terapia Online',
    subtitle: 'Home office aconchegante e sereno',
    src: imgOnline,
    category: 'ambiente',
  },
];

interface PhotoPlaceholderProps {
  label?: string;
  sublabel?: string;
  aspectRatio?: string;
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  slotId?: string; // ID único para persistir a foto no navegador via localStorage
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  label = "SUA FOTO VAI AQUI",
  sublabel = "Retrato profissional · Proporção editorial",
  aspectRatio = "aspect-[4/5]",
  className = "",
  src: initialSrc,
  alt = "Fotografia profissional",
  slotId,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | undefined>(initialSrc);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState('');
  const [activeTab, setActiveTab] = useState<'galeria' | 'dispositivo' | 'url'>('galeria');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Carregar foto salva no localStorage se houver slotId
  useEffect(() => {
    if (slotId && typeof window !== 'undefined') {
      const saved = localStorage.getItem(`custom_photo_${slotId}`);
      if (saved) {
        setPhotoUrl(saved);
      } else if (initialSrc) {
        setPhotoUrl(initialSrc);
      }
    } else if (initialSrc) {
      setPhotoUrl(initialSrc);
    }
  }, [slotId, initialSrc]);

  // Selecionar foto da Galeria Pré-definida
  const handleSelectFromGallery = (src: string) => {
    setPhotoUrl(src);
    if (slotId) {
      try {
        localStorage.setItem(`custom_photo_${slotId}`, src);
      } catch (err) {
        console.warn('Erro ao salvar foto:', err);
      }
    }
    setIsModalOpen(false);
  };

  // Manipular upload de arquivo local da galeria do celular/computador
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          if (slotId) {
            try {
              localStorage.setItem(`custom_photo_${slotId}`, result);
            } catch (err) {
              console.warn('Não foi possível salvar no localStorage:', err);
            }
          }
          setIsModalOpen(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Manipular inserção de URL externa
  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      setPhotoUrl(inputUrl.trim());
      if (slotId) {
        try {
          localStorage.setItem(`custom_photo_${slotId}`, inputUrl.trim());
        } catch (err) {
          console.warn('Erro ao salvar URL:', err);
        }
      }
      setIsModalOpen(false);
      setInputUrl('');
    }
  };

  // Remover foto personalizada
  const handleRemovePhoto = () => {
    setPhotoUrl(initialSrc);
    if (slotId) {
      localStorage.removeItem(`custom_photo_${slotId}`);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`group relative overflow-hidden bg-[#F4EFEA] ${aspectRatio} ${className}`}>
        {photoUrl ? (
          <>
            <img
              src={photoUrl}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />

            {/* Botão sutil para trocar a foto / escolher da galeria */}
            <div className="absolute top-3 right-3 z-10 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2]/95 backdrop-blur-md border border-[#EAE2D9] text-[#3D342F] hover:bg-[#C89467] hover:text-white hover:border-[#C89467] text-[11px] font-medium shadow-xs transition-all duration-200"
                title="Trocar foto / Escolher da galeria"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
                <span>Trocar foto</span>
              </button>
            </div>
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-b from-[#F4EFEA] to-[#EAE2D9]">
            {/* Ícone de Câmera e Galeria */}
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#EAE2D9] text-[#C89467] flex items-center justify-center mb-4 shadow-xs">
              <svg className="w-6 h-6 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
            </div>

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#3D342F] font-semibold mb-1">
              {label}
            </span>

            <span className="text-[11px] text-[#7D726A] max-w-[200px] leading-tight mb-5">
              {sublabel}
            </span>

            {/* Botão de Ação para Abrir Galeria / Inserir Foto */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#C89467] hover:bg-[#B88050] text-[#FFFFFF] text-xs uppercase tracking-wider font-semibold rounded-full shadow-xs transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>Escolher foto da galeria</span>
            </button>
          </div>
        )}
      </div>

      {/* Modal de Seleção de Foto (Galeria, Upload do Dispositivo ou URL) */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3D342F]/50 backdrop-blur-xs animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-lg bg-[#FAF7F2] border border-[#EAE2D9] rounded-3xl p-6 sm:p-7 shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Cabeçalho do Modal */}
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE2D9] mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C89467] font-semibold block">
                  PERSONALIZAÇÃO
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#3D342F]">
                  Escolher fotografia
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#F4EFEA] hover:bg-[#EAE2D9] text-[#7D726A] hover:text-[#3D342F] flex items-center justify-center text-lg leading-none transition-colors"
                aria-label="Fechar"
              >
                ×
              </button>
            </div>

            {/* Abas: Galeria Pronta / Arquivo do Celular / Link */}
            <div className="grid grid-cols-3 gap-1 bg-[#F4EFEA] p-1 rounded-full mb-5 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('galeria')}
                className={`py-1.5 px-2 rounded-full font-medium transition-all ${
                  activeTab === 'galeria'
                    ? 'bg-[#C89467] text-white shadow-xs'
                    : 'text-[#7D726A] hover:text-[#3D342F]'
                }`}
              >
                Galeria Pronta
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('dispositivo')}
                className={`py-1.5 px-2 rounded-full font-medium transition-all ${
                  activeTab === 'dispositivo'
                    ? 'bg-[#C89467] text-white shadow-xs'
                    : 'text-[#7D726A] hover:text-[#3D342F]'
                }`}
              >
                Meu Celular / PC
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('url')}
                className={`py-1.5 px-2 rounded-full font-medium transition-all ${
                  activeTab === 'url'
                    ? 'bg-[#C89467] text-white shadow-xs'
                    : 'text-[#7D726A] hover:text-[#3D342F]'
                }`}
              >
                Link (URL)
              </button>
            </div>

            {/* Conteúdo da Aba 1: Galeria de Fotos Prontas */}
            {activeTab === 'galeria' && (
              <div className="space-y-3">
                <p className="text-xs text-[#7D726A]">
                  Selecione uma foto profissional com 1 clique para aplicar instantaneamente:
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {PRESET_GALLERY_PHOTOS.map((item) => {
                    const isSelected = photoUrl === item.src;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectFromGallery(item.src)}
                        className={`group relative text-left rounded-2xl overflow-hidden border-2 transition-all p-1.5 bg-[#FFFFFF] ${
                          isSelected
                            ? 'border-[#C89467] shadow-md ring-2 ring-[#C89467]/30'
                            : 'border-[#EAE2D9] hover:border-[#C89467]/60 hover:shadow-xs'
                        }`}
                      >
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#F4EFEA] mb-2 relative">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {isSelected && (
                            <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[#C89467] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                              ✓
                            </span>
                          )}
                        </div>
                        <span className="block font-medium text-xs text-[#3D342F] truncate">
                          {item.title}
                        </span>
                        <span className="block text-[10px] text-[#7D726A] truncate">
                          {item.subtitle}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Conteúdo da Aba 2: Upload Direto do Dispositivo */}
            {activeTab === 'dispositivo' && (
              <div className="space-y-4 py-2 text-xs text-[#7D726A]">
                <p className="leading-relaxed">
                  Envie uma foto salva em seu smartphone ou computador. Ela será salva no seu navegador e exibida em alta qualidade.
                </p>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-3 px-4 bg-[#C89467] hover:bg-[#B88050] text-[#FFFFFF] text-xs uppercase tracking-wider font-semibold rounded-full shadow-xs transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span>Abrir galeria de fotos do dispositivo</span>
                </button>
              </div>
            )}

            {/* Conteúdo da Aba 3: Link de Imagem */}
            {activeTab === 'url' && (
              <form onSubmit={handleSaveUrl} className="space-y-3 py-2 text-xs text-[#7D726A]">
                <p className="leading-relaxed">
                  Cole o endereço direto de uma imagem (JPG, PNG ou WebP):
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="url"
                    placeholder="https://exemplo.com/minha-foto.jpg"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    className="flex-1 bg-[#F4EFEA] border border-[#EAE2D9] rounded-xl px-3 py-2 text-xs text-[#3D342F] focus:outline-none focus:border-[#C89467]"
                  />
                  <button
                    type="submit"
                    className="py-2.5 px-5 bg-[#C89467] hover:bg-[#B88050] text-white rounded-full text-xs uppercase tracking-wider font-semibold transition-colors duration-200"
                  >
                    Salvar
                  </button>
                </div>
              </form>
            )}

            {/* Rodapé com botão de remover se já tiver foto */}
            {photoUrl && (
              <div className="pt-4 mt-4 border-t border-[#EAE2D9] flex justify-between items-center text-xs">
                <span className="text-[11px] text-[#7D726A]">Foto ativa nesta seção</span>
                <button
                  type="button"
                  onClick={handleRemovePhoto}
                  className="text-red-700 hover:underline text-[11px] uppercase tracking-wider font-medium"
                >
                  Restaurar foto padrão
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
