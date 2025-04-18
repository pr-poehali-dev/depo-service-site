import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">ДЕПО</span>
        </Link>

        {/* Десктопное меню */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-foreground hover:text-primary font-medium">
            Главная
          </Link>
          <Link to="/services" className="text-foreground hover:text-primary font-medium">
            Услуги
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary font-medium">
            О компании
          </Link>
          <Link to="/contacts" className="text-foreground hover:text-primary font-medium">
            Контакты
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+71234567890" className="flex items-center text-foreground hover:text-primary">
            <PhoneCall className="mr-2 h-4 w-4" />
            <span>+7 (123) 456-78-90</span>
          </a>
          <Button>Стать партнером</Button>
        </div>

        {/* Мобильное меню */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>

        {/* Мобильная навигация */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/services" 
                className="text-foreground hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                О компании
              </Link>
              <Link 
                to="/contacts" 
                className="text-foreground hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              
              <div className="pt-2 border-t border-gray-200">
                <a href="tel:+71234567890" className="flex items-center text-foreground hover:text-primary">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  <span>+7 (123) 456-78-90</span>
                </a>
                <Button className="mt-4 w-full">Стать партнером</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;