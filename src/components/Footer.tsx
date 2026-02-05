import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.png';

const WHATSAPP_LINK = "https://wa.me/5515981283406?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20orçamento%20para%20um%20bolo%20ou%20doces";
const INSTAGRAM_LINK = "https://www.instagram.com/deliciasdatha87/";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <img
              src={logo}
              alt="Delícias da Tha"
              className="h-20 w-auto mb-6"
            />
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Confeitaria artesanal especializada em bolos decorados e doces finos. 
              Transformamos seus momentos especiais em memórias doces e inesquecíveis.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-primary-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </motion.a>
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-primary-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={22} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone size={20} className="mt-0.5 flex-shrink-0" />
                  <span>(15) 98128-3406</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  Rua Domingues, Nº 260<br />
                  Bairro Jardim América<br />
                  CEP 18167-138
                </address>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {['Início', 'Bolos', 'Doces', 'Depoimentos'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex btn-primary mt-6"
            >
              Fazer Orçamento
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>
              © {currentYear} Delícias da Tha. Todos os direitos reservados.
            </p>
            <p>
              Feito com{' '}
              <span className="text-primary">♥</span>
              {' '}para adoçar sua vida
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
