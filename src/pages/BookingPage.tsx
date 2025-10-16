import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import { cn } from '../utils/cn';

const BookingPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  // This would be your actual Calendly URL
  const calendlyUrl = "https://calendly.com/your-calendly-username";

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('booking.title')}
            </h1>
            <p className="text-xl text-primary-100">
              {t('booking.subtitle')}
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* Booking Section */}
      <Section className="bg-white">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Booking Info */}
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
                Booking Information
              </h2>
              
              <div className="space-y-6 text-neutral-700">
                <p>Select a service and a convenient time for your appointment using our online booking system.</p>
                
                <div className="border-t border-neutral-200 pt-6">
                  <h3 className="font-semibold text-neutral-900 mb-3">Available Services</h3>
                  <ul className="space-y-2">
                    <li>- {t('services.physicalTherapy.title')} (30, 45, or 60 min)</li>
                    <li>- {t('services.massage.title')} (30 or 60 min)</li>
                    <li>- {t('services.cupping.title')} (30 min)</li>
                    <li>- Initial Consultation (45 min)</li>
                  </ul>
                </div>
                
                <div className="border-t border-neutral-200 pt-6">
                  <h3 className="font-semibold text-neutral-900 mb-3">What to Bring</h3>
                  <ul className="space-y-2">
                    <li>- Any medical records or imaging results</li>
                    <li>- Referral documentation (if applicable)</li>
                    <li>- Insurance card (if using insurance)</li>
                    <li>- Comfortable clothing</li>
                  </ul>
                </div>
                
                <div className="border-t border-neutral-200 pt-6">
                  <h3 className="font-semibold text-neutral-900 mb-3">Cancellation Policy</h3>
                  <p>Please provide at least 24 hours notice if you need to cancel or reschedule your appointment. Late cancellations may be subject to a fee.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Calendly Widget */}
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
            <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden">
              <div className="h-[700px]">
                {/* This is a placeholder since we don't have a real Calendly account */}
                {/* In a real implementation, you would use the InlineWidget component */}
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-neutral-50">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Calendly Booking Widget</h3>
                  <p className="text-neutral-700 mb-6">
                    This is where the actual Calendly booking widget would be displayed, allowing patients to select services, dates, and times for their appointments.
                  </p>
                  <p className="text-neutral-500 text-sm mb-2">
                    To implement this in a production environment, you would use:
                  </p>
                  <code className="bg-neutral-100 p-2 rounded text-sm">
                    {`<InlineWidget url="${calendlyUrl}" />`}
                  </code>
                </div>
                
                {/* In production, uncomment this and use your actual Calendly URL */}
                {/* <InlineWidget url={calendlyUrl} styles={{ height: '100%' }} /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Additional Information */}
      <Section className="bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Frequently Asked Questions About Appointments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-neutral-900 mb-2">How early should I arrive?</h3>
              <p className="text-neutral-700">
                Please arrive 10-15 minutes before your first appointment to complete necessary paperwork. For follow-up appointments, 5 minutes is sufficient.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-neutral-900 mb-2">What should I wear?</h3>
              <p className="text-neutral-700">
                Wear comfortable, loose-fitting clothing that allows easy access to the area being treated. For lower body treatments, shorts are recommended.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-neutral-900 mb-2">How do I prepare for my appointment?</h3>
              <p className="text-neutral-700">
                Try to stay hydrated before your session. If possible, avoid heavy meals right before your appointment. Make a list of questions or concerns you want to discuss.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-neutral-900 mb-2">Can I book multiple sessions in advance?</h3>
              <p className="text-neutral-700">
                Yes, you can book multiple appointments in advance. This is recommended for ongoing treatment plans to secure your preferred times.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default BookingPage;