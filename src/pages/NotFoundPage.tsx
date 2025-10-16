import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { cn } from '../utils/cn';

const NotFoundPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  return (
    <Section className="bg-white pt-32">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-8xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-700 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/">
          <Button 
            size="lg" 
            className={cn(
              "inline-flex items-center",
              isRTL ? "flex-row-reverse" : ""
            )}
          >
            <ArrowLeft className={cn("w-5 h-5", isRTL ? "ml-2 rtl:rotate-180" : "mr-2")} />
            Back to Home
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default NotFoundPage;