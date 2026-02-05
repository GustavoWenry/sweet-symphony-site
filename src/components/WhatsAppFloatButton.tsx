import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5515981283406?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20orçamento%20para%20um%20bolo%20ou%20doces";

const WhatsAppFloatButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="bg-card rounded-2xl shadow-xl p-4 max-w-[200px] relative"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <X size={14} />
                </button>
                <p className="text-sm text-foreground">
                  👋 Olá! Posso ajudar com seu orçamento?
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="relative w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center group"
            aria-label="Fale conosco pelo WhatsApp"
          >
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
            <span className="absolute inset-0 rounded-full bg-primary animate-pulse-glow" />
            
            <MessageCircle 
              size={28} 
              className="text-primary-foreground relative z-10 transition-transform group-hover:scale-110" 
            />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloatButton;
