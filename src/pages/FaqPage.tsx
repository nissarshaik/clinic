import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { cn } from '../utils/cn';

const FaqPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  // Enhanced FAQ list with more questions and answers
  const faqItems = [
    {
      id: 1,
      question: t('faq.q1'),
      answer: t('faq.a1'),
      category: 'services',
    },
    {
      id: 2,
      question: t('faq.q2'),
      answer: t('faq.a2'),
      category: 'general',
    },
    {
      id: 3,
      question: t('faq.q3'),
      answer: t('faq.a3'),
      category: 'appointments',
    },
    {
      id: 4,
      question: t('faq.q4'),
      answer: t('faq.a4'),
      category: 'services',
    },
    {
      id: 5,
      question: t('faq.q5'),
      answer: t('faq.a5'),
      category: 'payment',
    },
    {
      id: 6,
      question: t('faq.q6'),
      answer: t('faq.a6'),
      category: 'payment',
    },
    {
      id: 7,
      question: 'How do I prepare for my first appointment?',
      answer: 'For your first appointment, please arrive 15 minutes early to complete any necessary paperwork. Wear comfortable clothing that allows easy access to the area being treated. Bring any relevant medical records, imaging results, or referrals from other healthcare providers. Also, make a list of questions or concerns you want to discuss during your session.',
      category: 'appointments',
    },
    {
      id: 8,
      question: 'Is a doctor\'s referral required for physical therapy?',
      answer: 'In most cases, you do not need a doctor\'s referral to receive physical therapy at our clinic. We offer direct access to our services. However, some insurance plans may require a referral for coverage. We recommend checking with your insurance provider before scheduling your first appointment.',
      category: 'general',
    },
    {
      id: 9,
      question: 'How many therapy sessions will I need?',
      answer: 'The number of therapy sessions needed varies greatly depending on your specific condition, its severity, your overall health, and how well you respond to treatment. After your initial assessment, our therapist will provide a treatment plan that includes an estimated number of sessions. This plan may be adjusted as your treatment progresses.',
      category: 'services',
    },
    {
      id: 10,
      question: 'Do you offer home visits?',
      answer: 'Yes, we offer home visits for patients who have difficulty traveling to our clinic due to mobility issues or other health concerns. There is an additional fee for this service, and availability depends on your location and our therapist\'s schedule. Please contact us for more information about home visit services.',
      category: 'services',
    },
    {
      id: 11,
      question: 'What should I expect during my first session?',
      answer: 'Your first session will include a comprehensive assessment of your condition. The therapist will review your medical history, evaluate your current symptoms, assess your movement, strength, and flexibility, and discuss your goals for therapy. Based on this assessment, they will develop a personalized treatment plan. The session may also include some initial treatment techniques.',
      category: 'appointments',
    },
    {
      id: 12,
      question: 'Is physical therapy painful?',
      answer: 'While physical therapy should not be excessively painful, some discomfort may be experienced during certain techniques, especially when treating injured or inflamed areas. Our therapists work within your comfort level and will adjust techniques as needed. Some soreness after sessions is normal, but sharp or severe pain is not expected and should be reported to your therapist immediately.',
      category: 'general',
    },
  ];

  // Filter FAQs based on search query
  const filteredFaqs = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group FAQs by category
  const groupedFaqs: Record<string, typeof faqItems> = {};
  
  filteredFaqs.forEach(item => {
    if (!groupedFaqs[item.category]) {
      groupedFaqs[item.category] = [];
    }
    groupedFaqs[item.category].push(item);
  });

  // Category titles
  const categoryTitles: Record<string, string> = {
    general: 'General Questions',
    services: 'Our Services',
    appointments: 'Appointments',
    payment: 'Payment & Insurance'
  };

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
              {t('faq.title')}
            </h1>
            <p className="text-xl text-primary-100">
              {t('faq.subtitle')}
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
      </section>

      {/* Search and FAQ Section */}
      <Section className="bg-white">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neutral-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-neutral-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.keys(groupedFaqs).length > 0 ? (
            Object.entries(groupedFaqs).map(([category, items]) => (
              <div key={category} className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  {categoryTitles[category]}
                </h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div 
                      key={item.id}
                      className="border border-neutral-200 rounded-lg overflow-hidden"
                      variants={itemVariants}
                    >
                      <button
                        className={cn(
                          "w-full px-6 py-4 flex items-center justify-between text-left transition-colors",
                          openItemId === item.id
                            ? "bg-primary-50 text-primary-900"
                            : "bg-white hover:bg-neutral-50 text-neutral-900"
                        )}
                        onClick={() => toggleFaq(item.id)}
                      >
                        <span className="font-medium">{item.question}</span>
                        {openItemId === item.id ? (
                          <ChevronUp className="h-5 w-5 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 flex-shrink-0" />
                        )}
                      </button>
                      {openItemId === item.id && (
                        <div className="px-6 py-4 bg-white">
                          <p className="text-neutral-700">{item.answer}</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-neutral-600 mb-4">No results found for "{searchQuery}"</p>
              <p className="text-neutral-500">Try adjusting your search terms or browse all categories.</p>
            </div>
          )}
        </motion.div>
      </Section>

      {/* Still Have Questions */}
      <Section className="bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-neutral-700 mb-8">
            If you couldn't find the answer to your question, feel free to contact us directly. Our team is always ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">
                {t('common.contactUs')}
              </Button>
            </Link>
            <Link to="/book">
              <Button 
                size="lg" 
                variant="outline"
              >
                {t('common.bookNow')}
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default FaqPage;