import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    avatar: 'MS',
    text: 'O bolo do aniversário da minha filha ficou perfeito! Além de lindo, estava delicioso. Todos os convidados elogiaram!',
    rating: 5,
    event: 'Aniversário infantil',
  },
  {
    id: 2,
    name: 'João Santos',
    avatar: 'JS',
    text: 'Contratamos para o casamento e foi a melhor decisão. Os doces estavam incríveis e a apresentação impecável.',
    rating: 5,
    event: 'Casamento',
  },
  {
    id: 3,
    name: 'Ana Oliveira',
    avatar: 'AO',
    text: 'Sempre peço os doces para minhas festas. Qualidade incomparável e atendimento nota 10. Super recomendo!',
    rating: 5,
    event: 'Confraternização',
  },
  {
    id: 4,
    name: 'Pedro Costa',
    avatar: 'PC',
    text: 'Bolo temático ficou exatamente como eu imaginava! Meu filho amou. Trabalho impecável e muito profissional.',
    rating: 5,
    event: 'Festa temática',
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding bg-secondary/30 overflow-hidden">
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
            Depoimentos
          </span>
          <h2 className="heading-lg mt-2 mb-4">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Confira alguns depoimentos de quem já provou nossas delícias.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 h-full transition-shadow duration-300 hover:shadow-xl">
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-2 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.event}
                    </div>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-md border border-border/50">
            <div className="flex -space-x-2">
              {['MS', 'JS', 'AO', 'PC'].map((avatar, i) => (
                <div
                  key={avatar}
                  className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center text-xs text-primary-foreground font-medium border-2 border-card"
                  style={{ zIndex: 4 - i }}
                >
                  {avatar}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 ml-2">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="font-semibold">5.0</span>
            </div>
            <span className="text-muted-foreground text-sm">
              +100 clientes satisfeitos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
