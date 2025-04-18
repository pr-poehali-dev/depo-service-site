import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TruckIcon, BarChart3Icon, UsersIcon, ShieldIcon, GlobeIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const servicesData = [
  {
    icon: <TruckIcon className="h-12 w-12 text-primary" />,
    title: "Логистические решения",
    description: "Оптимизация доставки товаров, управление складскими запасами и минимизация затрат на логистику. Мы предлагаем полный спектр услуг по транспортировке и хранению товаров.",
    link: "/services/logistics"
  },
  {
    icon: <BarChart3Icon className="h-12 w-12 text-primary" />,
    title: "Аналитика рынка",
    description: "Подробные отчеты о трендах рынка, анализ конкурентов и выявление новых возможностей для вашего бизнеса. Используйте данные для принятия стратегических решений.",
    link: "/services/analytics"
  },
  {
    icon: <UsersIcon className="h-12 w-12 text-primary" />,
    title: "Расширение клиентской базы",
    description: "Мы помогаем найти новых клиентов и развивать долгосрочные отношения с существующими партнерами. Увеличение продаж и создание прочных деловых связей.",
    link: "/services/clients"
  },
  {
    icon: <ShieldIcon className="h-12 w-12 text-primary" />,
    title: "Юридическая поддержка",
    description: "Полное юридическое сопровождение вашего бизнеса, включая составление договоров, защиту интеллектуальной собственности и правовые консультации для поставщиков.",
    link: "/services/legal"
  },
  {
    icon: <GlobeIcon className="h-12 w-12 text-primary" />,
    title: "Выход на международные рынки",
    description: "Помощь в освоении новых рынков за рубежом, сертификация продукции по международным стандартам и поиск зарубежных партнеров для расширения географии продаж.",
    link: "/services/international"
  },
  {
    icon: <PhoneIcon className="h-12 w-12 text-primary" />,
    title: "Консультации и поддержка",
    description: "Индивидуальные консультации по оптимизации бизнес-процессов, маркетинговые стратегии и постоянная поддержка на всех этапах сотрудничества.",
    link: "/services/consulting"
  }
];

const Services = () => {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Услуги для поставщиков</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Мы предлагаем комплексные решения, которые помогут вам оптимизировать бизнес-процессы,
                увеличить прибыль и расширить возможности вашего бизнеса.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="mt-2">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={service.link}>Подробнее</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">Нужны индивидуальные решения?</h2>
              <Button asChild size="lg">
                <Link to="/partnership">Стать партнером</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;