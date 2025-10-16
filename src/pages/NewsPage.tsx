import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CalendarDays, ChevronRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { cn } from '../utils/cn';

const NewsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Additional news articles for the dedicated page
  const newsArticles = [
    {
      title: t('news.news1.title'),
      date: t('news.news1.date'),
      summary: t('news.news1.summary'),
      image: 'https://images.pexels.com/photos/9322063/pexels-photo-9322063.jpeg',
      content: 'Our clinic has recently invested in state-of-the-art therapeutic equipment to enhance our physical therapy services. The new equipment includes advanced electrotherapy devices, a specialized traction system, and cutting-edge rehabilitation tools that allow for more precise and effective treatment protocols. These additions will enable our therapists to provide even more targeted and efficient care for a wide range of conditions, from sports injuries to chronic pain management.',
    },
    {
      title: t('news.news2.title'),
      date: t('news.news2.date'),
      summary: t('news.news2.summary'),
      image: 'https://images.pexels.com/photos/6129500/pexels-photo-6129500.jpeg',
      content: 'We are proud to announce that Dr. Wilson has recently completed advanced training in neurological rehabilitation techniques. This specialized training focused on the latest approaches to treating patients with neurological conditions, including stroke recovery, multiple sclerosis, and Parkinson\'s disease. The new skills and knowledge acquired will significantly enhance our ability to help patients with neurological challenges improve their mobility, function, and quality of life.',
    },
    {
      title: t('news.news3.title'),
      date: t('news.news3.date'),
      summary: t('news.news3.summary'),
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg',
      content: 'Last month, Dr. Wilson presented his research findings on innovative rehabilitation approaches at the International Physical Therapy Conference in Istanbul. His presentation, titled "Integrating Traditional and Modern Therapies for Enhanced Outcomes," was well-received by the international community. The conference provided an opportunity to exchange knowledge with leading experts in the field and bring back the latest advances in physical therapy to benefit our patients.',
    },
    {
      title: 'New Multilingual Services Launched',
      date: 'November 15, 2024',
      summary: 'We now offer therapy services in English, Bulgarian, and Arabic to better serve our diverse patient population.',
      image: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg',
      content: 'In response to the diverse needs of our growing patient community, we are pleased to announce the launch of our comprehensive multilingual services. Therapy sessions, consultations, and all patient materials are now available in English, Bulgarian, and Arabic. This initiative aims to ensure that language is never a barrier to receiving quality healthcare. Our multicultural team is committed to providing culturally sensitive care that respects the unique backgrounds and needs of all our patients.',
    },
    {
      title: 'Wellness Workshop Series Begins Next Month',
      date: 'October 5, 2024',
      summary: 'Join our upcoming workshop series focusing on preventative care and self-management techniques for common conditions.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      content: 'We are excited to announce our new Wellness Workshop Series starting next month. These interactive sessions will cover a range of topics including ergonomics for office workers, self-care techniques for chronic pain management, stress reduction strategies, and preventative exercises for common injuries. The workshops are designed to empower patients with knowledge and practical skills to maintain their health between therapy sessions and prevent future issues. Registration is now open with limited spots available.',
    },
    {
      title: 'Clinic Expansion to Offer Pediatric Services',
      date: 'September 22, 2024',
      summary: 'We are expanding our services to include specialized pediatric physical therapy for children of all ages.',
      image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
      content: 'We are thrilled to announce the upcoming expansion of our clinic to include specialized pediatric physical therapy services. This new department will focus on providing expert care for children with developmental delays, neurological conditions, sports injuries, and post-surgical rehabilitation needs. The pediatric wing will feature child-friendly equipment and spaces designed to make therapy engaging and effective for our youngest patients. Our pediatric specialists have extensive experience working with children of all ages and with various conditions.',
    }
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
              {t('news.title')}
            </h1>
            <p className="text-xl text-primary-100">
              {t('news.subtitle')}
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* News Grid */}
      <Section className="bg-white">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {newsArticles.map((article, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-neutral-500 text-sm mb-2">
                  <CalendarDays className="w-4 h-4 mr-1 rtl:ml-1 rtl:mr-0" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {article.summary}
                </p>
                <div className="mt-auto">
                  <button 
                    className={cn(
                      "inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors",
                      isRTL ? "flex-row-reverse" : ""
                    )}
                  >
                    {t('common.readMore')}
                    <ChevronRight className={cn("w-4 h-4", isRTL ? "mr-1 rtl:rotate-180" : "ml-1")} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Feature Article */}
      <Section className="bg-neutral-50">
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
            <span className="inline-block bg-primary-100 text-primary-800 text-xs px-3 py-1 rounded-full mb-4">
              Featured Article
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              The Future of Physical Therapy: Combining Traditional and Modern Approaches
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              In an age where technology is revolutionizing healthcare, our clinic is at the forefront of integrating traditional healing methods with modern therapeutic techniques. Dr. Wilson\'s extensive international experience has provided unique insights into how different cultures approach physical healing and rehabilitation.
            </p>
            <p className="text-neutral-700 leading-relaxed mb-6">
              This holistic approach combines the best of evidence-based modern physical therapy with traditional practices that have stood the test of time, such as cupping therapy (Hijama). The results have been remarkable, with patients experiencing faster recovery times and more comprehensive healing.
            </p>
            <button 
              className={cn(
                "inline-flex items-center text-primary-600 font-medium hover:text-primary-800 transition-colors",
                isRTL ? "flex-row-reverse" : ""
              )}
            >
              {t('common.readMore')}
              <ChevronRight className={cn("w-4 h-4", isRTL ? "mr-1 rtl:rotate-180" : "ml-1")} />
            </button>
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
                src="https://images.pexels.com/photos/8942442/pexels-photo-8942442.jpeg"
                alt="Modern and traditional therapy approaches"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section className="bg-primary-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive the latest news, health tips, and special offers from our clinic.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button 
                className="bg-white text-primary-600 hover:bg-neutral-100 sm:flex-shrink-0"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default NewsPage;