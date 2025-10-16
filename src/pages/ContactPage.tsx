import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { cn } from '../utils/cn';

const ContactPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      // Reset status after 5 seconds
      setTimeout(() => setFormStatus(null), 5000);
    }, 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-primary-100">
              {t('contact.subtitle')}
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* Contact Information and Form */}
      <Section className="bg-white">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div 
            className={cn(
              "lg:w-1/3",
              isRTL ? "lg:order-2" : ""
            )}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-neutral-50 rounded-lg p-8 h-full">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                {t('contact.subtitle')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mt-1">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4 rtl:mr-4 rtl:ml-0">
                    <h3 className="font-semibold text-neutral-900">{t('contact.address.title')}</h3>
                    <p className="text-neutral-700 mt-1">{t('contact.address.line1')}</p>
                    <p className="text-neutral-700">{t('contact.address.line2')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mt-1">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4 rtl:mr-4 rtl:ml-0">
                    <h3 className="font-semibold text-neutral-900">Phone</h3>
                    <p className="text-neutral-700 mt-1">+359 2 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mt-1">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4 rtl:mr-4 rtl:ml-0">
                    <h3 className="font-semibold text-neutral-900">Email</h3>
                    <p className="text-neutral-700 mt-1">info@therapyclinic.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mt-1">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="ml-4 rtl:mr-4 rtl:ml-0">
                    <h3 className="font-semibold text-neutral-900">{t('contact.hours.title')}</h3>
                    <p className="text-neutral-700 mt-1">{t('contact.hours.weekdays')}</p>
                    <p className="text-neutral-700">{t('contact.hours.saturday')}</p>
                    <p className="text-neutral-700">{t('contact.hours.sunday')}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-3">Follow Us</h3>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className={cn(
              "lg:w-2/3",
              isRTL ? "lg:order-1" : ""
            )}
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg p-8 border border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  ></textarea>
                </div>
                
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-md">
                    {t('contact.form.success')}
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-md">
                    {t('contact.form.error')}
                  </div>
                )}
                
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section className="bg-neutral-50 py-0">
        <div className="h-96">
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46659.47512456454!2d23.2975224!3d42.6975208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2sus!4v1632764413214!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;