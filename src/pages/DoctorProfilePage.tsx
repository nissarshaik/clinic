import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Medal, GraduationCap, Check } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { cn } from '../utils/cn';

const DoctorProfilePage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Doctor
            </h1>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* Doctor Profile */}
      <Section className="bg-white">
        <div className="flex flex-col lg:flex-row items-start">
          <motion.div 
            className={cn(
              "lg:w-1/3 mb-8 lg:mb-0",
              isRTL ? "lg:order-2 lg:pl-12" : "lg:pr-12"
            )}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/doctor.jpg"
                alt="DR. Waeil Mohamed"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-6 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="text-xl font-bold mb-4 text-neutral-900">
                DR. Waeil Mohamed
              </h3>
              <p className="text-neutral-700 mb-4">
                The founder of unique newly diagnostic test
              </p>
              <Link to="/book">
                <Button className="w-full">
                  {t('common.bookNow')}
                </Button>
              </Link>
            </div>
          </motion.div>
          
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
            <div className="prose max-w-none">
              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                For the first time in the world using suction cups for diagnostic purposes & primary evaluation of patients complaining for cervical and lumbosacral radiculopathy. The test is essential part of the medical examination, positive sudan cupping test always means radiculopathy.
              </p>
            
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary-600 mr-2 rtl:ml-2 rtl:mr-0" />
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Qualifications
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold">2009:</h3>
                    <p>Intensive course and cardiopulmonary resuscitation in sport. Department of anesthesia, reanimation and resuscitation – Tracian university-Stara Zagora- Bulgaria.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">2006:</h3>
                    <p>Specialization in sport physiotherapy-department of physiotherapy and rehabilitation- Tracian university-Stara Zagora- Bulgaria.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">1995-1999:</h3>
                    <p>Specialization in department of operative and pediatric surgery – Tracian University -Stara Zagora - Bulgaria.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">1987-1993:</h3>
                    <p>Master degree in medicine from the Higher Medical University of Stara Zagora – Medical Academy – Bulgaria, including State Practice and State Examination up to February 1994.</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Medal className="w-6 h-6 text-primary-600 mr-2 rtl:ml-2 rtl:mr-0" />
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Professional Experience
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold">1995-2000:</h3>
                    <p>Registrar and assistant at department of general & pediatric surgery-Tracian university-Stara Zagora-Bulgaria</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">2000-2002:</h3>
                    <p>Care medical clinic RAK-united Arab emirates</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">2002-2003:</h3>
                    <p>Houseman ship in federal ministry of health-Sudan</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">2003-2006:</h3>
                    <p>Medical commission at ministry of defense -Sudan</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">2006-up to date:</h3>
                    <p>Assistant head department of physiotherapy at faculty of medical technical sciences at Al zaim al azhari university –Sudan</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">2015:</h3>
                    <p>Registered PHD in sport medicine at department of sport medicine at the national sport academy ( Vasil levski ) Sofia - Bulgaria</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Medal className="w-6 h-6 text-primary-600 mr-2 rtl:ml-2 rtl:mr-0" />
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Work Experience
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold">2005-2008:</h3>
                    <p>Doctor of physiotherapy and sport medicine of Almourada sport club – Sudan</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">2006 up to date:</h3>
                    <p>Lecturer at faculty of medical technical sciences at Alzaim Alazhary University – Sudan.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">2009 up to 2016:</h3>
                    <p>Doctor of physiotherapy and sport medicine at the Sudanese Olympic team.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">2008 up to 2016:</h3>
                    <p>Head department of physiotherapy at alazim Alazhary University.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">2008 up to date:</h3>
                    <p>Coordinator of physiotherapy at faculty of medical technical sciences at Alzaim Alazhary University – Sudan.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">2007 up to 2008:</h3>
                    <p>Director of physiotherapy program at the Academy of health sciences – federal ministry of health – Sudan.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">2008 up 2016:</h3>
                    <p>Doctor of physiotherapy and sport medicine of ALHILAL sport club – Sudan. Work as field doctor in seven CAF champions league. Attending of 14 preseason camps.</p>
                  </div>
                  <div>
                    <p>Director of alazhary physiotherapy sport medicine and traditional medicine center at the university of alazim alazhary Khartoum – Sudan</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Since 2015:</h3>
                    <p>Member of the south Africa sport medicine association S.A.S.M.A.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Book an Appointment?
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Schedule a session with DR. Waeil Mohamed and start your journey to recovery today.
          </p>
          <Link to="/book">
            <Button 
              size="lg" 
              className="bg-white text-primary-600 hover:bg-neutral-100"
            >
              {t('common.bookNow')}
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export default DoctorProfilePage;