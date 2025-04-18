import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PartnerForm from "@/components/partnership/PartnerForm";
import { Briefcase, CheckCircle, TrendingUp } from "lucide-react";

const Partnership = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Заголовок */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Станьте партнером компании "Депо"</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Заполните форму, и мы свяжемся с вами для обсуждения деталей сотрудничества
            </p>
          </div>
        </section>

        {/* Преимущества партнерства */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Почему стоит стать нашим партнером</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">Рост продаж</h3>
                <p className="text-muted-foreground">
                  Наши партнеры в среднем увеличивают объемы продаж на 30% в первый год сотрудничества.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <Briefcase className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">Новые рынки</h3>
                <p className="text-muted-foreground">
                  Мы открываем доступ к новым каналам сбыта и помогаем выйти на перспективные рынки.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">Простая интеграция</h3>
                <p className="text-muted-foreground">
                  Мы предлагаем удобные инструменты для быстрой интеграции с нашей системой.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Форма партнерства */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-8 text-center">Заявка на партнерство</h2>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <PartnerForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partnership;