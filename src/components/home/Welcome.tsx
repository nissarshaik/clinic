import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { cn } from '../../utils/cn';

const Welcome: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  return (
    <Section className="bg-white">
      <div className="flex flex-col lg:flex-row items-center">
        <motion.div 
          className={cn(
            "lg:w-1/2 mb-8 lg:mb-0", 
            isRTL ? "lg:order-2 lg:pl-12" : "lg:pr-12"
          )}
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            {t('home.welcome.title')}
          </h2>
          <p className="text-neutral-700 leading-relaxed mb-8">
            {t('home.welcome.description')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-50 p-6 rounded-lg border-t-4 border-primary-600">
              <h3 className="font-semibold text-lg mb-2">{t('home.features.feature1.title')}</h3>
              <p className="text-neutral-600 text-sm">{t('home.features.feature1.description')}</p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg border-t-4 border-primary-600">
              <h3 className="font-semibold text-lg mb-2">{t('home.features.feature2.title')}</h3>
              <p className="text-neutral-600 text-sm">{t('home.features.feature2.description')}</p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-lg border-t-4 border-primary-600">
              <h3 className="font-semibold text-lg mb-2">{t('home.features.feature3.title')}</h3>
              <p className="text-neutral-600 text-sm">{t('home.features.feature3.description')}</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className={cn(
            "lg:w-1/2", 
            isRTL ? "lg:order-1" : ""
          )}
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
              alt="Professional therapy session"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Welcome;