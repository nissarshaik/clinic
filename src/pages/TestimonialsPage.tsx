import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const TestimonialsPage: React.FC = () => {
  const { t } = useTranslation();

  // Additional testimonials for the dedicated page
  const allTestimonials = [
    {
      quote: t('testimonials.testimonial1.quote'),
      author: t('testimonials.testimonial1.author'),
      location: t('testimonials.testimonial1.location'),
      service: 'Physical Therapy',
    },
    {
      quote: t('testimonials.testimonial2.quote'),
      author: t('testimonials.testimonial2.author'),
      location: t('testimonials.testimonial2.location'),
      service: 'Cupping Therapy',
    },
    {
      quote: t('testimonials.testimonial3.quote'),
      author: t('testimonials.testimonial3.author'),
      location: t('testimonials.testimonial3.location'),
      service: 'Online Consultation',
    },
    {
      quote: "Dr. Wilson's therapeutic massage techniques relieved my neck pain that I've been dealing with for months. His expertise is truly remarkable.",
      author: "Elena T.",
      location: "Varna",
      service: 'Therapeutic Massage',
    },
    {
      quote: "The combination of physical therapy and cupping has been life-changing for my lower back issues. Highly recommend this approach for chronic pain.",
      author: "Georgi S.",
      location: "Sofia",
      service: 'Combined Therapy',
    },
    {
      quote: "As an athlete, I've visited many physiotherapists, but Dr. Wilson's approach to sports injury rehabilitation is by far the most effective I've experienced.",
      author: "Yusuf A.",
      location: "Doha",
      service: 'Sports Rehabilitation',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('testimonials.title')}
            </h1>
            <p className="text-xl text-primary-100">
              {t('testimonials.subtitle')}
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* Testimonials Grid */}
      <Section className="bg-white">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {allTestimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-neutral-200 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <MessageSquare className="w-12 h-12 text-primary-600 mb-4" />
              <p className="text-neutral-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                  <p className="text-neutral-600 text-sm">{testimonial.location}</p>
                </div>
                <span className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Success Stories Section */}
      <Section className="bg-neutral-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Success Stories
          </h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Read about our patients' journeys to recovery and how our therapies have helped them regain mobility, reduce pain, and improve their quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="https://images.pexels.com/photos/7176325/pexels-photo-7176325.jpeg"
                  alt="Recovery story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  From Wheelchair to Walking
                </h3>
                <p className="text-neutral-700 mb-4">
                  After a severe car accident, Emma was told she might never walk normally again. Through dedicated physical therapy with Dr. Wilson, she regained full mobility within 8 months.
                </p>
                <p className="italic text-neutral-600">
                  "The personalized treatment plan and constant encouragement made all the difference in my recovery journey."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src="https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg"
                  alt="Recovery story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  Overcoming Chronic Pain
                </h3>
                <p className="text-neutral-700 mb-4">
                  Michael had suffered from debilitating back pain for over a decade. After trying numerous treatments, he found relief through a combination of physical therapy and cupping.
                </p>
                <p className="italic text-neutral-600">
                  "For the first time in years, I can play with my children without pain. It's been life-changing."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience Our Therapy Services
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Join our satisfied patients and start your journey to better health and well-being today.
          </p>
          <Link to="/book">
            <Button 
              size="lg" 
              className="bg-white text-primary-600 hover:bg-neutral-100 mr-4"
            >
              {t('common.bookNow')}
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              {t('common.contactUs')}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default TestimonialsPage;