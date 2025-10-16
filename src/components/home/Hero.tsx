import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';
import { cn } from '../../utils/cn';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section className="relative h-screen min-h-[600px] flex items-center bg-neutral-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg)',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/40 to-neutral-900/90" />
      </div>

      <Container className="relative z-10 text-white">
        <div className={cn(
          "max-w-2xl",
          isRTL ? "ml-auto text-right" : ""
        )}>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Qatar Center for Diagnostic & Therapeutic Cupping
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-neutral-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Effective Diagnostic and Therapeutic Approach for Radiculopathy through Sudan Cupping Test
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/book">
              <Button 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-700 text-white mr-4 rtl:ml-4"
              >
                {t('home.hero.cta')}
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                {t('common.learnMore')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;