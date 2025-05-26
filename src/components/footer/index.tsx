import { Link } from 'react-router-dom';
import LogoIcon from '../icons/LogoIcon';
import services from '../../lib/services';

const Footer = () => {
  return (
    <footer className="bg-[#192128]">
      <div className="text-white py-10 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 xl:px-0">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-[30px]">
            {/* Logo and Copyright Section */}
            <div className="flex flex-col space-y-6">
              <div className="w-48 h-auto">
                <LogoIcon />
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-sm font-normal font-montserrat">
                  Гостиничный комплекс<br />
                  «Premium» © 2016 – {new Date().getFullYear()}
                </p>
                <Link to="/privacy-policy" className="text-sm font-normal font-montserrat text-[#798591] hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
                <Link to="/personal" className="text-sm font-normal font-montserrat text-[#798591] hover:text-white transition-colors">
                  Согласие на обработку персональных данных
                </Link>
                <Link to="/terms" className="text-sm font-normal font-montserrat text-[#798591] hover:text-white transition-colors">
                  Правила использования сайта
                </Link>
              </div>
            </div>

            {/* Rooms Section */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-lg font-bold font-montserrat">Номера</h3>
              <div className="flex flex-col space-y-[15px]">
                <Link to="/booking" className="text-sm font-normal font-montserrat hover:text-[#6896BF] transition-colors">
                  Эконом с 1 двуспальной кроватью
                </Link>
                <Link to="/booking" className="text-sm font-normal font-montserrat hover:text-[#6896BF] transition-colors">
                  Стандарт с 1 двуспальной кроватью
                </Link>
                <Link to="/booking" className="text-sm font-normal font-montserrat hover:text-[#6896BF] transition-colors">
                  Стандарт с 2мя кроватями
                </Link>
                <Link to="/booking" className="text-sm font-normal font-montserrat hover:text-[#6896BF] transition-colors">
                  Комфорт с 1 двуспальной кроватью
                </Link>
                <Link to="/booking" className="text-sm font-normal font-montserrat hover:text-[#6896BF] transition-colors">
                  ВИП, 2 комнаты
                </Link>
                <Link to="/booking" className="text-sm font-normal font-montserrat hover:text-[#6896BF] transition-colors">
                  Апартаменты с 2 отдельными кроватями + диванчик
                </Link>
              </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-lg font-bold font-montserrat">Услуги</h3>
              <div className="flex flex-col space-y-[15px]">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    to={service.link}
                    className="text-sm font-normal font-montserrat hover:text-[#6896BF] transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contacts Section */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-lg font-bold font-montserrat">Контакты</h3>
              <div className="flex flex-col space-y-[15px]">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm font-normal font-montserrat">
                    МО, г. Щелково, улица<br />
                    Талсинская, дом 9/2
                  </p>
                  <a
                    href="https://maps.app.goo.gl/HnNFsyeBT7fT6L8d6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium font-montserrat text-[#6896BF] hover:text-white transition-colors"
                  >
                    Проложить маршрут
                  </a>
                </div>
                <a
                  href="tel:+79299961669"
                  className="text-sm font-semibold font-montserrat hover:text-[#6896BF] transition-colors"
                >
                  +7 929 996 16 69
                </a>
                <a
                  href="tel:+79268711669"
                  className="text-sm font-semibold font-montserrat hover:text-[#6896BF] transition-colors"
                >
                  +7 926 871 16 69
                </a>
                <a
                  href="mailto:hotelpremium2016@yandex.ru"
                  className="text-sm font-normal font-montserrat hover:text-[#6896BF] transition-colors"
                >
                  hotelpremium2016@yandex.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
