import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к сотням поставщиков, которые уже оценили преимущества работы с "Депо". 
          Заполните форму партнера и наш менеджер свяжется с вами в ближайшее время.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link to="/contacts">Связаться с нами</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
            <Link to="/partnership">Стать партнером</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;