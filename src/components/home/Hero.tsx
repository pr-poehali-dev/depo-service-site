import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/90 to-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Расширяйте возможности вашего бизнеса с компанией "Депо"
          </h1>
          <p className="text-xl mb-8">
            Мы помогаем поставщикам оптимизировать логистику, находить новых клиентов и увеличивать прибыль.
            Станьте нашим партнером уже сегодня!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/services">Наши услуги</Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/partnership">Стать партнером</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[url('/placeholder.svg')] bg-no-repeat bg-right-bottom bg-contain opacity-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;