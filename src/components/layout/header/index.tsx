import { useState, useEffect } from 'react';
import { X, XIcon } from 'lucide-react';
import { cn } from '@/shared/utils/utils';
import { CustomButton } from '@/components/ui/custom-button';
import { useIsMobile } from '@/shared/hooks/use-mobile';
import LogoIcon from "@/components/ui/icons/LogoIcon";
import MenuIcon from "@/components/ui/icons/MenuIcon";
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PinIcon from "@/components/ui/icons/PinIcon";

const Header = () => {
  const navigate = useNavigate();
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

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

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

  return (
    <>
      <header className="relative">
        <div className="absolute top-0 left-0 right-0 z-40 text-hotel-off-white  font-montserrat  border-b border-hotel-off-white border-opacity-20 hidden lg:block">
          <div className="flex text-sm flex gap-6 max-w-content mx-auto flex justify-between items-center py-4 px-4 xl:px-0 ">
            <div className="flex items-center gap-2.5">
              <PinIcon />
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
          'fixed lg:top-14 top-0 left-0 right-0 z-40 w-full transition-all border-b duration-150 py-2.5 lg:py-4',
          isScrolled ? 'lg:top-0 bg-black/80 backdrop-blur-sm shadow-lg border-transparent' : 'bg-transparent border-white/20'
        )}>
          <div className="max-w-content mx-auto flex lg:justify-between items-center px-4 xl:px-0">

            {/* Menu Button - Mobile & Tablet only */}
            <div className="flex items-center xl:hidden">
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

            {/* Logo */}
            <div className="relative z-10 lg:mr-auto">
              <Link to="/" className="text-hotel-off-white tracking-wide max-w-[90px] max-h-[30px] lg:max-w-[168px] lg:max-h-[56px] block">
                <LogoIcon />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden xl:flex space-x-6 text-hotel-off-white font-montserrat">
              <Link to="https://reservationsteps.ru/rooms/index/e222bc26-37b1-4d47-a7b0-507f2654b884?lang=ru" target="_blank" className="hover:opacity-80 transition-opacity text-sm uppercase">Номера</Link>
              <Link to="/barbecue" className="hover:opacity-80 transition-opacity text-sm uppercase">Аренда беседок</Link>
              <Link to="/promotions" className="hover:opacity-80 transition-opacity text-sm uppercase">Акции</Link>
              <Link to="/services" className="hover:opacity-80 transition-opacity text-sm uppercase">Услуги</Link>
              <Link to="/restaurant" className="hover:opacity-80 transition-opacity text-sm uppercase">Ресторан и караоке</Link>
              <Link to="/contacts" className="hover:opacity-80 transition-opacity text-sm uppercase">Контакты</Link>
            </nav>

            {/* Desktop & Tablet Actions */}
            <div className="flex items-center space-x-4 md:space-x-6 ml-auto">
              <CustomButton
                variant="small"
                size="sm"
                className="tracking-wide"
                onClick={() => window.open('https://reservationsteps.ru/rooms/index/e222bc26-37b1-4d47-a7b0-507f2654b884?lang=ru', '_blank')}
              >
                Забронировать
              </CustomButton>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#050509] bg-opacity-95 backdrop-blur-sm pt-24 px-4 pb-6 max-h-[100vh] overflow-y-auto"
          >
            <nav className="flex flex-col text-hotel-off-white text-center justify-center items-center">
              <motion.div
                custom={0}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="max-h-[57px] max-w-[157px] mx-auto">
                  <LogoIcon />
                </div>
              </motion.div>
              <motion.div
                custom={1}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="max-h-[57px] max-w-[157px] mx-auto my-8">
                  <XIcon strokeWidth={1} className="w-7 h-7"
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  />
                </div>
              </motion.div>
              <motion.div
                custom={2}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link 
                  to="https://reservationsteps.ru/rooms/index/e222bc26-37b1-4d47-a7b0-507f2654b884?lang=ru" 
                  target="_blank" 
                  className="text-2xl tracking-wider py-2 border-opacity-20 block uppercase"
                  onClick={handleMobileMenuClose}
                >
                  Номера
                </Link>
              </motion.div>
              <motion.div
                custom={3}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link 
                  to="/barbecue" 
                  className="text-2xl tracking-wider py-2 border-opacity-20 block uppercase"
                  onClick={handleMobileMenuClose}
                >
                  Аренда беседок
                </Link>
              </motion.div>
              
              <motion.div
                custom={5}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link 
                  to="/promotions" 
                  className="text-2xl tracking-wider py-2 border-opacity-20 block uppercase"
                  onClick={handleMobileMenuClose}
                >
                  Акции
                </Link>
              </motion.div>
              <motion.div
                custom={6}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link 
                  to="/services" 
                  className="text-2xl tracking-wider py-2 border-opacity-20 block uppercase"
                  onClick={handleMobileMenuClose}
                >
                  Услуги
                </Link>
              </motion.div>
              <motion.div
                custom={7}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link 
                  to="/restaurant" 
                  className="text-2xl tracking-wider py-2 border-opacity-20 block uppercase"
                  onClick={handleMobileMenuClose}
                >
                  Ресторан и караоке
                </Link>
              </motion.div>
              <motion.div
                custom={8}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link 
                  to="/contacts" 
                  className="text-2xl tracking-wider py-2 border-opacity-20 block mb-5 uppercase"
                  onClick={handleMobileMenuClose}
                >
                  Контакты
                </Link>
              </motion.div>
              <motion.div
                custom={9}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link 
                  to="tel:+79299961669" 
                  className="text-base border-opacity-20 block mt-6"
                  onClick={handleMobileMenuClose}
                >
                  +7 (929) 996-16-69
                </Link>
              </motion.div>
              <motion.div
                custom={10}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link 
                  to="mailto:hotelpremium2016@yandex.ru" 
                  className="text-base border-opacity-20 block my-1"
                  onClick={handleMobileMenuClose}
                >
                  hotelpremium2016@yandex.ru
                </Link>
              </motion.div>
              <motion.div
                custom={10}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link 
                  to="https://yandex.ru/maps/-/C2WRRgs" 
                  target="_blank" 
                  className="text-base border-opacity-20 block my-1"
                  onClick={handleMobileMenuClose}
                >
                  МО, г. Щелково, улица Талсинская ул., дом 9/2
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
