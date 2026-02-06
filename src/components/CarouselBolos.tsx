import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import cake images
import cakeFarm from '@/assets/cakes/cake-farm.png';
import cakeRedvelvet from '@/assets/cakes/cake-redvelvet.png';
import cakeButterfly from '@/assets/cakes/cake-butterfly.png';
import cakeBirthday from '@/assets/cakes/cake-birthday.png';
import cakeRosegold from '@/assets/cakes/cake-rosegold.png';
import cakeOreo from '@/assets/cakes/cake-oreo.png';
import cakeParabens from '@/assets/cakes/cake-parabens.png'; 
import cakeLaco from '@/assets/cakes/cake-laco.png'; 
import cakeAngel from '@/assets/cakes/cake-angel.png';
import cakeMario from '@/assets/cakes/cake-mario.png';

const cakes = [
  { id: 1, image: cakeFarm, title: 'Bolo Fazendinha', description: 'Perfeito para festas temáticas' },
  { id: 2, image: cakeRedvelvet, title: 'Bolo Red Velvet', description: 'Clássico e irresistível' },
  { id: 3, image: cakeButterfly, title: 'Bolo Borboletas', description: 'Delicado e encantador' },
  { id: 4, image: cakeBirthday, title: 'Bolo Aniversário', description: 'Elegância em cada detalhe' },
  { id: 5, image: cakeRosegold, title: 'Bolo Rosé Gold', description: 'Sofisticação e charme' },
  { id: 6, image: cakeOreo, title: 'Bolo Oreo', description: 'Sabor clássico com um toque especial' },
  { id: 7, image: cakeParabens, title: 'Bolo Parabéns', description: 'Celebre com estilo e sabor' },
  { id: 8, image: cakeLaco, title: 'Bolo Laço', description: 'Doce elegância para qualquer ocasião' },
  { id: 9, image: cakeAngel, title: 'Bolo Anjo', description: 'Pureza e delicadeza em cada fatia' },
  { id: 10, image: cakeMario, title: 'Bolo Mario Bros', description: 'Aventura e diversão em cada pedaço' },
];

const WHATSAPP_LINK = "https://wa.me/5515981283406";

const CarouselBolos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cakes.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cakes.length) % cakes.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="bolos" className="section-padding bg-secondary/30">
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
            Nossas Criações
          </span>
          <h2 className="heading-lg mt-2 mb-4">
            Bolos <span className="gradient-text">Artesanais</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada bolo é uma obra de arte única, criada especialmente para tornar 
            seu momento ainda mais especial e memorável.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="aspect-[4/3] md:aspect-[16/9] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full group flex items-center justify-center bg-secondary/50">
                    <img
                      src={cakes[currentIndex].image}
                      alt={cakes[currentIndex].title}
                      className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                    
                    {/* Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-primary-foreground"
                    >
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {cakes[currentIndex].title}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm md:text-base mb-4">
                        {cakes[currentIndex].description}
                      </p>
                      <motion.a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex btn-primary text-sm"
                      >
                        Quero um assim!
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors z-10"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {cakes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-5 gap-2 md:gap-4 mt-8 max-w-3xl mx-auto"
        >
          {cakes.map((cake, index) => (
            <motion.button
              key={cake.id}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-primary shadow-lg'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={cake.image}
                alt={cake.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CarouselBolos;
