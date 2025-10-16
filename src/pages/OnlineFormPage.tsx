import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { cn } from '../utils/cn';

const OnlineFormPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: 'en',
    symptoms: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with emailjs
    setTimeout(() => {
      setFormStatus('success');
      setIsSubmitting(false);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        language: 'en',
        symptoms: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('onlineForm.title')}
            </h1>
            <p className="text-xl text-primary-100">
              {t('onlineForm.subtitle')}
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* Online Form Section */}
      <Section className="bg-white">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Information */}
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
                Online Consultation
              </h2>
              
              <div className="space-y-6 text-neutral-700">
                <p>{t('onlineForm.description')}</p>
                
                <div className="border-t border-neutral-200 pt-6">
                  <h3 className="font-semibold text-neutral-900 mb-3">Benefits of Online Consultation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-primary-600 mr-2 rtl:ml-2 rtl:mr-0 mt-0.5" />
                      <span>Convenient access to professional advice from your home</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-primary-600 mr-2 rtl:ml-2 rtl:mr-0 mt-0.5" />
                      <span>Personalized assessment of your condition</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-primary-600 mr-2 rtl:ml-2 rtl:mr-0 mt-0.5" />
                      <span>Guidance on self-management techniques</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-primary-600 mr-2 rtl:ml-2 rtl:mr-0 mt-0.5" />
                      <span>Preliminary advice before in-person sessions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t border-neutral-200 pt-6">
                  <h3 className="font-semibold text-neutral-900 mb-3">What to Expect</h3>
                  <p className="mb-3">
                    After submitting your consultation request, our specialist will review your information and contact you within 24-48 hours to schedule a video consultation.
                  </p>
                  <p>
                    During the consultation, you'll discuss your symptoms, receive an initial assessment, and get recommendations for the next steps in your treatment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Consultation Form */}
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
                {t('onlineForm.subtitle')}
              </h2>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 p-8 rounded-lg text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Request Submitted!</h3>
                  <p className="text-green-700 mb-6">
                    {t('onlineForm.form.success')}
                  </p>
                  <Button 
                    type="button" 
                    onClick={() => setFormStatus(null)} 
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="name" className="block text-neutral-700 font-medium mb-2">
                        {t('onlineForm.form.name')} *
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
                    
                    <div>
                      <label htmlFor="email" className="block text-neutral-700 font-medium mb-2">
                        {t('onlineForm.form.email')} *
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
                    
                    <div>
                      <label htmlFor="phone" className="block text-neutral-700 font-medium mb-2">
                        {t('onlineForm.form.phone')} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="language" className="block text-neutral-700 font-medium mb-2">
                        {t('onlineForm.form.language')} *
                      </label>
                      <select
                        id="language"
                        name="language"
                        value={formData.language}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="en">English</option>
                        <option value="bg">Bulgarian</option>
                        <option value="ar">Arabic</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="symptoms" className="block text-neutral-700 font-medium mb-2">
                        {t('onlineForm.form.symptoms')} *
                      </label>
                      <textarea
                        id="symptoms"
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      ></textarea>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-neutral-700 font-medium mb-2">
                        {t('onlineForm.form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      ></textarea>
                    </div>
                  </div>
                  
                  {formStatus === 'error' && (
                    <div className="mt-6 p-4 bg-red-50 text-red-800 rounded-md">
                      {t('onlineForm.form.error')}
                    </div>
                  )}
                  
                  <div className="mt-8">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : t('onlineForm.form.submit')}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-neutral-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            How Online Consultations Work
          </h2>
          <p className="text-neutral-700 max-w-2xl mx-auto">
            Our online consultation process is designed to be simple, effective, and convenient for all patients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm relative">
            <div className="absolute -top-5 left-6 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              1
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3 pt-4">
              Submit Request
            </h3>
            <p className="text-neutral-700">
              Fill out the online consultation form with details about your condition and symptoms.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm relative">
            <div className="absolute -top-5 left-6 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              2
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3 pt-4">
              Schedule Appointment
            </h3>
            <p className="text-neutral-700">
              Our team will contact you to schedule a convenient time for your video consultation.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm relative">
            <div className="absolute -top-5 left-6 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              3
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3 pt-4">
              Video Consultation
            </h3>
            <p className="text-neutral-700">
              Meet with our specialist via secure video call for assessment and personalized advice.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm relative">
            <div className="absolute -top-5 left-6 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
              4
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3 pt-4">
              Treatment Plan
            </h3>
            <p className="text-neutral-700">
              Receive a detailed treatment plan and follow-up recommendations after your consultation.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default OnlineFormPage;