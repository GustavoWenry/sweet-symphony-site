import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import logo from '@/assets/logo.png';

const WHATSAPP_LINK = "https://wa.me/5515981283406?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20orçamento%20para%20um%20bolo%20ou%20doces";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent" />
      
      {/* Decorative elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container-custom relative z-10 text-center px-4"
      >
        <div className="max-w-4xl mx-auto">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 100, 
              damping: 15,
              delay: 0.2 
            }}
            className="mb-8"
          >
            <img
              src={logo}
              alt="Delícias da Tha"
              className="w-40 h-40 md:w-52 md:h-52 mx-auto object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-xl mb-6"
          >
            <span className="text-foreground">Doces que </span>
            <span className="gradient-text">encantam</span>
            <br />
            <span className="text-foreground">momentos que </span>
            <span className="gradient-text">marcam</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            Bolos e doces artesanais feitos com amor, dedicação e os melhores 
            ingredientes. Transforme sua celebração em uma experiência inesquecível.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Peça seu Orçamento
            </motion.a>
            
            <motion.a
              href="#bolos"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#bolos')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline text-lg px-8 py-4"
            >
              Ver Criações
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto"
          >
            {[
              { value: '500+', label: 'Bolos Criados' },
              { value: '100%', label: 'Artesanal' },
              { value: '5★', label: 'Avaliação' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
