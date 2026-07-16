import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { assets } from '../../data/assets';

const images = [
  { src: assets.standard, alt: 'Detailing standard exterior wash' },
  { src: assets.deluxe, alt: 'Interior deep cleaning' },
  { src: assets.premium, alt: 'Premium detailing finish' },
  { src: assets.exterior, alt: 'Exterior wheel and tire cleaning' },
  { src: assets.membership, alt: 'Finished vehicle from membership care' },
  { src: assets.hero, alt: 'Mobile detailing setup at location' },
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className="group relative aspect-square md:aspect-[4/3] overflow-hidden bg-charcoal rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-primary"
            aria-label={`View full image: ${img.alt}`}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
            <img 
              src={img.src} 
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-page-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            <div 
              className="relative w-full max-w-6xl flex items-center justify-center"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-50 p-2 text-ivory/70 hover:text-white bg-black/50 rounded-full transition-colors"
                onClick={() => setSelectedIndex(null)}
                aria-label="Close gallery"
              >
                <X size={28} />
              </button>

              <button 
                className="absolute left-4 z-50 p-3 text-ivory/70 hover:text-white bg-black/50 rounded-full transition-colors hidden md:block"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>

              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="max-h-[85vh] object-contain rounded-lg shadow-2xl shadow-black/50"
              />

              <button 
                className="absolute right-4 z-50 p-3 text-ivory/70 hover:text-white bg-black/50 rounded-full transition-colors hidden md:block"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>
            </div>
            
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8 md:hidden">
              <button onClick={e => { e.stopPropagation(); handlePrev(); }} className="p-3 text-ivory/70 bg-black/50 rounded-full"><ChevronLeft size={24} /></button>
              <button onClick={e => { e.stopPropagation(); handleNext(); }} className="p-3 text-ivory/70 bg-black/50 rounded-full"><ChevronRight size={24} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
