import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Activity, MessageCircle as Massage, Award, Video } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  
  const physicalTherapyRef = useRef<HTMLDivElement>(null);
  const massageRef = useRef<HTMLDivElement>(null);
  const cuppingRef = useRef<HTMLDivElement>(null);
  const onlineConsultationRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('services.title')}
            </h1>
            <p className="text-xl text-primary-100">
              {t('services.subtitle')}
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* Services Overview */}
      <Section className="bg-white" id="services-overview">
        <div className="text-center mb-16">
          <p className="text-neutral-700 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary-600 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            onClick={() => physicalTherapyRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Activity className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-neutral-900">
              {t('services.physicalTherapy.title')}
            </h3>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary-600 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            onClick={() => massageRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Massage className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-neutral-900">
              {t('services.massage.title')}
            </h3>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary-600 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            onClick={() => cuppingRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Award className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-neutral-900">
              {t('services.cupping.title')}
            </h3>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-md p-6 border-t-4 border-primary-600 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            onClick={() => onlineConsultationRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Video className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-neutral-900">
              {t('services.onlineConsultation.title')}
            </h3>
          </motion.div>
        </div>
      </Section>

      {/* Physical Therapy */}
      <Section 
        className="bg-neutral-50" 
        id="physical-therapy"
        ref={physicalTherapyRef}
      >
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {t('services.physicalTherapy.title')}
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              {t('services.physicalTherapy.description')}
            </p>
            <p className="text-neutral-700 leading-relaxed mb-8">
              Our physical therapy services include specialized treatment plans for various conditions, including sports injuries, chronic pain, post-surgical rehabilitation, and mobility issues. Our expert therapist uses evidence-based techniques to help you recover and improve your physical function.
            </p>
            <Link to="/book">
              <Button size="lg">
                {t('common.bookNow')}
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg"
                alt="Physical therapy session"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Therapeutic Massage */}
      <Section 
        className="bg-white" 
        id="massage"
        ref={massageRef}
      >
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {t('services.massage.title')}
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              {t('services.massage.description')}
            </p>
            <p className="text-neutral-700 leading-relaxed mb-8">
              Our therapeutic massage services are designed to alleviate muscle tension, improve circulation, and promote overall relaxation. We offer various massage techniques, including deep tissue, Swedish, sports, and relaxation massage, tailored to your specific needs and preferences.
            </p>
            <Link to="/book">
              <Button size="lg">
                {t('common.bookNow')}
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg"
                alt="Therapeutic massage"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Cupping Therapy */}
      <Section 
        className="bg-neutral-50" 
        id="cupping"
        ref={cuppingRef}
      >
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {t('services.cupping.title')}
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              {t('services.cupping.description')}
            </p>
            <p className="text-neutral-700 leading-relaxed mb-8">
              Cupping therapy (Hijama) is a traditional therapy that involves placing special cups on your skin to create suction. This ancient technique helps improve blood flow, relieve muscle tension, and promote healing. Our specialist is certified in both dry and wet cupping methods.
            </p>
            <Link to="/book">
              <Button size="lg">
                {t('common.bookNow')}
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7443916/pexels-photo-7443916.jpeg"
                alt="Cupping therapy session"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Online Consultations */}
      <Section 
        className="bg-white" 
        id="online-consultation"
        ref={onlineConsultationRef}
      >
        <div className="flex flex-col lg:flex-row-reverse items-center">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              {t('services.onlineConsultation.title')}
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              {t('services.onlineConsultation.description')}
            </p>
            <p className="text-neutral-700 leading-relaxed mb-8">
              Our online consultation services provide convenient access to professional therapy guidance from the comfort of your home. These virtual sessions are ideal for follow-up appointments, rehabilitation exercises guidance, and initial assessments for patients who cannot visit the clinic in person.
            </p>
            <Link to="/online-form">
              <Button size="lg">
                {t('common.bookNow')}
              </Button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7579375/pexels-photo-7579375.jpeg"
                alt="Online consultation"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('booking.title')}
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            {t('booking.subtitle')}
          </p>
          <Link to="/book">
            <Button 
              size="lg" 
              className="bg-white text-primary-600 hover:bg-neutral-100"
            >
              {t('booking.callToAction')}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default ServicesPage;