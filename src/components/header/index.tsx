import React, { useState, useEffect } from 'react';
import { Phone, Calendar, X, Route } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CustomButton } from '@/components/ui/custom-button';
import { useIsMobile } from '@/hooks/use-mobile';
import LogoIcon from '../icons/LogoIcon';
import WhatsAppIcon from '../icons/WhatsAppIcon';
import TelegramIcon from '../icons/TelegramIcon';
import MenuIcon from '../icons/MenuIcon';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const isTablet = window.innerWidth < 1024 && window.innerWidth >= 768;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const contactInfoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <header className="relative">
        <div className="absolute top-0 left-0 right-0 z-40 text-hotel-off-white  font-montserrat  border-b border-hotel-off-white border-opacity-20 hidden lg:block">
          <div className="flex text-sm flex gap-6 max-w-content mx-auto flex justify-between items-center py-4  ">
            <div>
              <p>МО, г. Щелково, улица Талсинская ул., дом 9/2</p>
            </div>
            <div>
              <p>hotelpremium2016@yandex.ru</p>
            </div>
            <div className="font-bold ml-auto">
              <p>+7 (929) 996-16-69</p>
            </div>
            <div className="font-bold">
              <p>+7 (926) 871-16-69</p>
            </div>
          </div>
        </div>
        <div className={cn(
          'fixed lg:top-14 top-0 left-0 right-0 z-40 w-full transition-all duration-150 py-2.5 lg:py-4',
          isScrolled ? 'lg:top-0 bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        )}>
          <div className="max-w-content mx-auto flex lg:justify-between items-center px-4 lg:px-0">

            {/* Menu Button - Mobile & Tablet only */}
            {(isMobile || isTablet) && (
              <div className="flex items-center">
                <CustomButton
                  variant="menu"
                  size="icon"
                  className="mr-4"
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon />}
                </CustomButton>
              </div>
            )}

            {/* Logo */}
            <div className="relative z-10 lg:mr-auto">
              <Link to="/" className="text-hotel-off-white tracking-wide max-w-[90px] max-h-[30px] lg:max-w-[168px] lg:max-h-[56px] block">
                <LogoIcon />
              </Link>
            </div>

            {/* Desktop Menu */}
            {!isMobile && !isTablet && (
              <nav className="hidden lg:flex space-x-6 text-hotel-off-white font-montserrat">
                <Link to="/booking" className="hover:opacity-80 transition-opacity text-sm uppercase">Номера</Link>
                <Link to="/barbecue" className="hover:opacity-80 transition-opacity text-sm uppercase">Аренда беседок</Link>
                <Link to="/sauna" className="hover:opacity-80 transition-opacity text-sm uppercase">Сауна и хаммам</Link>
                <Link to="/promotions" className="hover:opacity-80 transition-opacity text-sm uppercase">Акции</Link>
                <Link to="/services" className="hover:opacity-80 transition-opacity text-sm uppercase">Услуги</Link>
                <Link to="/restaurant" className="hover:opacity-80 transition-opacity text-sm uppercase">Ресторан и караоке</Link>
                <Link to="/contacts" className="hover:opacity-80 transition-opacity text-sm uppercase">Контакты</Link>
              </nav>
            )}

            {/* Desktop & Tablet Actions */}
            <div className="flex items-center space-x-4 md:space-x-6 ml-auto">
              <CustomButton
                variant="small"
                size="sm"
                className="tracking-wide"
                onClick={() => window.scrollTo({ top: document.getElementById('booking')?.offsetTop, behavior: 'smooth' })}
              >
                Забронировать
              </CustomButton>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (isMobile || isTablet) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-hotel-darkest-blue bg-opacity-95 backdrop-blur-sm pt-24 px-4 pb-6 max-h-[100vh] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-3 text-hotel-off-white">
              <motion.div
                custom={0}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to="/about" className="text-xl font-medium py-2 border-opacity-20 block uppercase font-tt-drugs-trial">О нас</Link>
              </motion.div>
              <motion.div
                custom={1}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to="/rooms" className="text-xl font-medium py-2 border-opacity-20 block uppercase font-tt-drugs-trial">Номера</Link>
              </motion.div>
              <motion.div
                custom={2}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to="/promotions" className="text-xl font-medium py-2 border-opacity-20 block uppercase font-tt-drugs-trial">Акции</Link>
              </motion.div>
              <motion.div
                custom={3}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to="/services" className="text-xl font-medium py-2 border-opacity-20 block uppercase font-tt-drugs-trial">Услуги</Link>
              </motion.div>
              <motion.div
                custom={4}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to="/contacts" className="text-xl font-medium py-2 border-opacity-20 block uppercase font-tt-drugs-trial">Контакты</Link>
              </motion.div>
              <motion.div
                custom={5}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link to="/faq" className="text-xl font-medium py-2 border-opacity-20 block mb-5 uppercase font-tt-drugs-trial">FAQ</Link>
              </motion.div>

              {/* Mobile phone & booking button */}
              <motion.div
                variants={contactInfoVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-4 border-t border-hotel-off-white border-opacity-20 pt-10"
              >
                {/* Contact Information */}
                <div className="">
                  <div className="grid grid-cols-1 gap-5">
                    {/* Phone Numbers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1">
                        <a href="tel:+74965744272" className="text-xl font-tt-drugs-trial">+7 496 574 42 72</a>
                        <p className="text-xs text-hotel-off-white tracking-wider font-smoothing-auto">Звоните по бронированию отеля</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <a href="https://wa.clck.bar/79963652330?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9C%D0%BE%D0%B6%D0%BD%D0%BE%20%D0%BB%D0%B8%20%D0%B7%D0%B0%D0%B1%D1%80%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%20%D0%BD%D0%B0%20" className="text-xl font-tt-drugs-trial" target="_blank" rel="noopener noreferrer">+7 996 365 23 30</a>
                        <p className="text-xs text-hotel-off-white tracking-wider font-smoothing-auto">Пишите в WhatsApp и Telegram</p>
                      </div>
                    </div>

                    {/* Email and Address */}
                    <div className="grid grid-cols-1 gap-5">
                      <div className="flex flex-col gap-1">
                        <a href="mailto:UTShotel@yandex.ru" className="text-xl font-tt-drugs-trial">UTShotel@yandex.ru</a>
                        <p className="text-xs text-hotel-off-white tracking-wider font-smoothing-auto">Пишите по любым вопросам</p>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-xl font-tt-drugs-trial">г. Электросталь, ул. Расковой, д. 6</p>
                        <p className="text-xs text-hotel-off-white tracking-wider font-smoothing-auto">Приезжайте в наш отель</p>
                      </div>
                    </div>
                  </div>
                </div>
                <CustomButton
                  variant="small"
                  className="tracking-wide mt-4"
                  onClick={() => {
                    setMobileMenuOpen(!mobileMenuOpen);
                    window.scrollTo({ top: document.getElementById('booking')?.offsetTop, behavior: 'smooth' });
                  }}
                >
                  Забронировать
                </CustomButton>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
