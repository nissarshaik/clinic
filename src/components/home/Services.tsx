import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Stethoscope } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

const Services: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const services = [
    {
      icon: Activity,
      title: 'Pain Relief',
      description: 'Experience a natural and effective solution for pain relief through specialized cupping techniques.',
      link: '/services#pain-relief',
      image: 'https://images.pexels.com/photos/4046567/pexels-photo-4046567.jpeg'
    },
    {
      icon: Heart,
      title: 'Muscle and Joint Treatment',
      description: 'Targeted therapy to alleviate muscle and joint discomfort and improve mobility.',
      link: '/services#muscle-joint',
      image: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg'
    },
    {
      icon: Stethoscope,
      title: 'Cupping Therapy',
      description: 'Discover the ancient art of cupping for holistic healing and relaxation, tailored to your needs.',
      link: '/services#cupping',
      image: 'https://images.pexels.com/photos/7319316/pexels-photo-7319316.jpeg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Section className="bg-neutral-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 mb-3">
          {t('services.title')}
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          {t('services.description')}
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            variants={itemVariants}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="p-3 bg-primary-50 rounded-full w-fit mb-4">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                {service.title}
              </h3>
              <p className="text-neutral-600 mb-4">
                {service.description}
              </p>
              <Link 
                to={service.link}
                className={cn(
                  "inline-flex items-center font-medium text-primary-600 hover:text-primary-800 transition-colors",
                  isRTL ? "flex-row-reverse" : ""
                )}
              >
                More
                <ArrowRight className={cn("w-4 h-4", isRTL ? "mr-1 rtl:rotate-180" : "ml-1")} />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-12 text-center">
        <Link to="/services">
          <Button size="lg">
            More
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default Services;