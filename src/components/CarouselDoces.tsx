import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import sweet images
import sweetBrigadeiros from '@/assets/sweets/sweet-brigadeiros.png';
import sweetCherries from '@/assets/sweets/sweet-cherries.png';
import SweetCupyfrut from '@/assets/sweets/sweet-cupyfrut.png';
import sweetBombons from '@/assets/sweets/sweet-bombons.png';
import sweetCamafeunozes from '@/assets/sweets/sweet-camafeunozes.png';
import sweetMacadoamor from '@/assets/sweets/sweet-macadoamor.png';
import sweetBalabaiana from '@/assets/sweets/sweet-balabaiana.png';
import sweetBeijinho from '@/assets/sweets/sweet-beijinho.png';
import sweetPlaca from '@/assets/sweets/sweet-placa.png';
import sweetPirulito1 from '@/assets/sweets/sweet-pirulito1.png';
import sweetPirulito2 from '@/assets/sweets/sweet-pirulito2.png';

const sweets = [
  { id: 1, image: sweetBrigadeiros, title: 'Brigadeiros Gourmet', description: 'Clássico e irresistível' },
  { id: 2, image: sweetCherries, title: 'Cestinha de Cereja', description: 'Elegância artesanal' },
  { id: 3, image: sweetBombons, title: 'Bombons Finos', description: 'Sofisticação e sabor' },
  { id: 4, image: SweetCupyfrut, title: 'Copinho Phydalis', description: 'Sabor tropical e único' },
  { id: 5, image: sweetCamafeunozes, title: 'Camafeu de Nozes', description: 'Tradição e sabor em cada mordida' },
  { id: 6, image: sweetMacadoamor, title: 'Maçã do Amor', description: 'Doce clássico para todas as idades' },
  { id: 7, image: sweetBalabaiana, title: 'Bala Baiana', description: 'Explosão de sabor nordestino' },
  { id: 8, image: sweetBeijinho, title: 'Beijinho de Coco', description: 'Doce delicado e saboroso' },
  { id: 9, image: sweetPlaca, title: 'Plaquinha Comestivel Personalizada', description: 'Plaquinha de mesa personalizada' },
  { id: 10, image: sweetPirulito1, title: 'Decoração de Pirulito Personalizado', description: 'Pirulito Comestivel Personalizado' },
  { id: 11, image: sweetPirulito2, title: 'Pirulito de Mesa Personalizado', description: 'Pirulito Comestivel Personalizado' },
];

const ITEMS_PER_PAGE = 4;

const WHATSAPP_LINK = "https://wa.me/5515981283406?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20orçamento%20para%20uma%20celebração%20.";

const CarouselDoces = () => {

  // ======================
  // PAGINAÇÃO DESKTOP
  // ======================
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sweets.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = sweets.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Scroll suave ao trocar página
  useEffect(() => {
    const section = document.getElementById("doces");
    section?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  // ======================
  // CAROUSEL MOBILE
  // ======================
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

  return (
    <section id="doces" className="section-padding bg-background">
      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Sabores Especiais
          </span>
          <h2 className="heading-lg mt-2 mb-4">
            Doces <span className="gradient-text">Finos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Doces artesanais que encantam os olhos e conquistam o paladar.
          </p>
        </div>

        {/* =======================
           DESKTOP COM PAGINAÇÃO
        ======================== */}
        <div className="hidden md:block">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {currentItems.map((sweet) => (
              <div key={sweet.id} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-card shadow-lg">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={sweet.image}
                      alt={sweet.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="mt-4 text-center">
                  <h3 className="font-semibold">{sweet.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {sweet.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINAÇÃO */}
          <div className="flex justify-center items-center gap-2 mt-10">

            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded bg-pink-100 hover:bg-pink-200 disabled:opacity-50"
            >
              ←
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-1 rounded transition ${
                    currentPage === page
                      ? "bg-pink-500 text-white"
                      : "bg-pink-100 hover:bg-pink-200"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded bg-pink-100 hover:bg-pink-200 disabled:opacity-50"
            >
              →
            </button>

          </div>
        </div>

        {/* =======================
           MOBILE CAROUSEL
        ======================== */}
        <div className="md:hidden relative overflow-hidden rounded-2xl mt-6">
          <div className="aspect-square relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0"
              >
                <img
                  src={sweets[currentIndex].image}
                  alt={sweets[currentIndex].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 rounded-full flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/90 rounded-full flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default CarouselDoces;
