import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import sweet images
import sweetBrigadeiros from '@/assets/sweets/sweet-brigadeiros.png';
import sweetCherries from '@/assets/sweets/sweet-cherries.png';
import SweetCupyfrut from '@/assets/sweets/sweet-cupyfrut.png'; 
import sweetBombons from '@/assets/sweets/sweet-bombons.png';

const sweets = [
  { id: 1, image: sweetBrigadeiros, title: 'Brigadeiros Gourmet', description: 'Clássico e irresistível' },
  { id: 2, image: sweetCherries, title: 'Copinhos de Cereja', description: 'Elegância artesanal' },
  { id: 3, image: sweetBombons, title: 'Bombons Finos', description: 'Sofisticação e sabor' },
  { id: 4, image: SweetCupyfrut, title: 'Copinhos da Delícia', description: 'Sabor tropical único' },
];

const WHATSAPP_LINK = "https://wa.me/5515981283406";
const WHATSAPP_VER_DOCES = "https://wa.me/5515981283406";

const CarouselDoces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % sweets.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + sweets.length) % sweets.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="doces" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Sabores Especiais
          </span>
          <h2 className="heading-lg mt-2 mb-4">
            Doces <span className="gradient-text">Finos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Doces artesanais que encantam os olhos e conquistam o paladar. 
            Perfeitos para complementar sua festa com elegância.
          </p>
        </motion.div>

        {/* Carousel - Grid Style */}
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {sweets.map((sweet, index) => (
              <motion.div
                key={sweet.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg card-hover">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={sweet.image}
                      alt={sweet.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <h3 className="text-primary-foreground font-semibold text-lg">
                      {sweet.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm mb-3">
                      {sweet.description}
                    </p>
                    <motion.a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary text-sm py-2"
                    >
                      Encomendar
                    </motion.a>
                  </motion.div>
                </div>
                
                {/* Title below for desktop */}
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-foreground">{sweet.title}</h3>
                  <p className="text-sm text-muted-foreground">{sweet.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative overflow-hidden rounded-2xl">
            <div className="aspect-square relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={sweets[currentIndex].image}
                    alt={sweets[currentIndex].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <h3 className="text-xl font-bold mb-1">
                      {sweets[currentIndex].title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm mb-4">
                      {sweets[currentIndex].description}
                    </p>
                    <motion.a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary text-sm"
                    >
                      Encomendar
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {sweets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href={WHATSAPP_VER_DOCES}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Ver Todos os Doces
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CarouselDoces;
