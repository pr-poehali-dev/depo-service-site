import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TruckIcon, BarChart3Icon, UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const servicesData = [
  {
    icon: <TruckIcon className="h-12 w-12 text-primary" />,
    title: "Логистические решения",
    description: "Оптимизация доставки товаров, управление складскими запасами и минимизация затрат на логистику.",
    link: "/services/logistics"
  },
  {
    icon: <BarChart3Icon className="h-12 w-12 text-primary" />,
    title: "Аналитика рынка",
    description: "Подробные отчеты о трендах рынка, анализ конкурентов и выявление новых возможностей для вашего бизнеса.",
    link: "/services/analytics"
  },
  {
    icon: <UsersIcon className="h-12 w-12 text-primary" />,
    title: "Расширение клиентской базы",
    description: "Мы помогаем найти новых клиентов и развивать долгосрочные отношения с существующими партнерами.",
    link: "/services/clients"
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги для поставщиков</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем комплексные решения, которые помогут вам оптимизировать бизнес-процессы и увеличить прибыль.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to={service.link}>Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/services">Все услуги</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;