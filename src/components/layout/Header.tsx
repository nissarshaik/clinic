import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const isRTL = i18n.language === 'ar';
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/doctor', label: t('nav.doctor') },
    { to: '/testimonials', label: t('nav.testimonials') },
    { to: '/faq', label: t('nav.faq') },
    { to: '/contact', label: t('nav.contactUs') },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center"
          >
            <img 
              src="/logo.svg" 
              alt="Q.C.D.T.C Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  location.pathname === link.to
                    ? 'text-primary-600'
                    : !isScrolled
                    ? 'text-white hover:text-primary-200'
                    : 'text-neutral-700 hover:text-primary-600'
                )}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="relative ml-4 rtl:mr-4">
              <button
                onClick={toggleLanguageMenu}
                className={cn(
                  'flex items-center p-2 rounded-md',
                  !isScrolled ? 'text-white' : 'text-neutral-700'
                )}
              >
                <Globe size={20} />
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-md shadow-lg py-1 min-w-32 z-50">
                  <button
                    onClick={() => changeLanguage('en')}
                    className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  >
                    {t('languages.en')}
                  </button>
                  <button
                    onClick={() => changeLanguage('bg')}
                    className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  >
                    {t('languages.bg')}
                  </button>
                  <button
                    onClick={() => changeLanguage('ar')}
                    className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  >
                    {t('languages.ar')}
                  </button>
                </div>
              )}
            </div>
            
            <Link to="/book">
              <Button
                variant="primary"
                className={cn(
                  'ml-4 rtl:mr-4',
                  !isScrolled && 'bg-white text-primary-600 hover:bg-neutral-100'
                )}
              >
                {t('nav.bookAppointment')}
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleLanguageMenu}
              className={cn(
                'p-2 rounded-md mr-2 rtl:ml-2',
                !isScrolled ? 'text-white' : 'text-neutral-700'
              )}
            >
              <Globe size={20} />
            </button>
            
            <button
              onClick={toggleMenu}
              className={cn(
                'p-2 rounded-md',
                !isScrolled ? 'text-white' : 'text-neutral-700'
              )}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === link.to
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-600'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/book" className="block pt-4">
              <Button variant="primary" className="w-full">
                {t('nav.bookAppointment')}
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Language Menu */}
      {isLanguageMenuOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-white rounded-md shadow-lg py-1 min-w-32 z-50">
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
          >
            {t('languages.en')}
          </button>
          <button
            onClick={() => changeLanguage('bg')}
            className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
          >
            {t('languages.bg')}
          </button>
          <button
            onClick={() => changeLanguage('ar')}
            className="block w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
          >
            {t('languages.ar')}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;