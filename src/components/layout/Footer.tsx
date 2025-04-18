import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">О компании "Депо"</h3>
            <p className="mb-4">
              Мы предлагаем комплексные решения для поставщиков, помогая им эффективно управлять бизнесом
              и расширять возможности сотрудничества с клиентами.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white/80">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white/80">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white/80">Главная</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white/80">Услуги</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white/80">О компании</Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-white/80">Контакты</Link>
              </li>
              <li>
                <Link to="/partnership" className="hover:text-white/80">Партнерская программа</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>123456, Москва, ул. Примерная, д. 10, офис 100</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+71234567890" className="hover:text-white/80">+7 (123) 456-78-90</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:info@depo-company.ru" className="hover:text-white/80">info@depo-company.ru</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} "Депо". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;