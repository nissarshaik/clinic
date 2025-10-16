import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

const Cta: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <Section className="bg-white">
      <div className="bg-primary-50 rounded-lg p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className={cn(
              "lg:w-2/3 mb-8 lg:mb-0",
              isRTL ? "lg:order-2 lg:pr-12 text-right" : "lg:pr-12"
            )}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {t('booking.title')}
            </h2>
            <p className="text-neutral-700 text-lg mb-6">
              {t('booking.description')}
            </p>
            <Link to="/book">
              <Button 
                size="lg" 
                className="bg-primary-600 hover:bg-primary-700 text-white"
              >
                {t('common.bookNow')}
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className={cn(
              "lg:w-1/3 flex justify-center",
              isRTL ? "lg:order-1" : ""
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-6 rounded-full shadow-lg">
              <Calendar className="w-24 h-24 text-primary-600" />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Cta;