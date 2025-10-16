import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Container from '../ui/Container';
import { cn } from '../../utils/cn';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white pt-12 pb-6" dir={isRTL ? 'rtl' : 'ltr'}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Therapy Clinic</h3>
            <p className="text-neutral-300 mb-4">
              {t('contact.address.line1')}<br />
              {t('contact.address.line2')}
            </p>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-neutral-300 mb-2">
              <Phone size={16} />
              <span>+359 2 123 4567</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-neutral-300">
              <Mail size={16} />
              <span>info@therapyclinic.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('nav.home')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/doctor" className="text-neutral-300 hover:text-white transition-colors">
                  {t('nav.doctor')}
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-neutral-300 hover:text-white transition-colors">
                  {t('nav.testimonials')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  {t('nav.contactUs')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  {t('services.physicalTherapy.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  {t('services.massage.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  {t('services.cupping.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">
                  {t('services.onlineConsultation.title')}
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-neutral-300 hover:text-white transition-colors">
                  {t('nav.bookAppointment')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact.hours.title')}</h3>
            <p className="text-neutral-300 mb-2">{t('contact.hours.weekdays')}</p>
            <p className="text-neutral-300 mb-2">{t('contact.hours.saturday')}</p>
            <p className="text-neutral-300 mb-4">{t('contact.hours.sunday')}</p>
            
            {/* Social Icons */}
            <div className={cn("flex space-x-4 rtl:space-x-reverse", isRTL ? "justify-start" : "")}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 p-2 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 p-2 rounded-full hover:bg-primary-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 p-2 rounded-full hover:bg-primary-500 transition-colors"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-6 text-neutral-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} {t('footer.rights')}</p>
          <div className="flex space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-white">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;