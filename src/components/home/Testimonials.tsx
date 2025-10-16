import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Section from '../ui/Section';
import { cn } from '../../utils/cn';

const Testimonials: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const testimonials = [
    {
      quote: t('testimonials.testimonial1.quote'),
      author: t('testimonials.testimonial1.author'),
      location: t('testimonials.testimonial1.location'),
    },
    {
      quote: t('testimonials.testimonial2.quote'),
      author: t('testimonials.testimonial2.author'),
      location: t('testimonials.testimonial2.location'),
    },
    {
      quote: t('testimonials.testimonial3.quote'),
      author: t('testimonials.testimonial3.author'),
      location: t('testimonials.testimonial3.location'),
    },
  ];

  return (
    <Section className="bg-primary-600 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-3">
          {t('testimonials.title')}
        </h2>
        <p className="text-primary-100 max-w-2xl mx-auto">
          {t('testimonials.subtitle')}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            className="bg-primary-700 rounded-lg p-6 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Quote className={cn(
              "w-10 h-10 text-primary-300 absolute",
              isRTL ? "right-4" : "left-4"
            )} />
            <div className="mt-8">
              <p className="text-primary-50 mb-6 text-lg font-light leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className={cn(
                "flex items-center", 
                isRTL ? "justify-end" : ""
              )}>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-primary-200 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;