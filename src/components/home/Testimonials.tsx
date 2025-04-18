import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonialsData = [
  {
    name: "Михаил Петров",
    position: "Директор, ООО \"ТехноПоставка\"",
    content: "Сотрудничество с компанией \"Депо\" позволило нам оптимизировать логистическую цепочку и сократить расходы на доставку товаров на 23%. Рекомендую их услуги всем поставщикам, которые хотят вывести свой бизнес на новый уровень.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Елена Смирнова",
    position: "Коммерческий директор, \"ПродуктПлюс\"",
    content: "Благодаря аналитическим отчетам от \"Депо\" мы смогли выявить новые перспективные ниши для нашей продукции. За первый год партнерства наш оборот вырос на 35%. Профессиональный подход и внимание к деталям - вот что отличает эту компанию.",
    avatar: "/placeholder.svg"
  },
  {
    name: "Алексей Иванов",
    position: "Основатель, \"МебельТрейд\"",
    content: "\"Депо\" помогли нам наладить поставки в регионы, с которыми раньше было сложно работать из-за логистических проблем. Теперь мы присутствуем в 12 новых городах, и наши продажи растут каждый месяц.",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших партнеров</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Узнайте, что говорят о нас поставщики, которые уже работают с компанией "Депо"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <p className="italic">{testimonial.content}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;