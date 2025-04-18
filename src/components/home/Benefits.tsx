import { CheckCircle2 } from "lucide-react";

const benefitsData = [
  {
    title: "Увеличение объемов продаж",
    description: "В среднем наши партнеры увеличивают свои продажи на 30% в течение первого года сотрудничества"
  },
  {
    title: "Оптимизация затрат",
    description: "Мы помогаем снизить логистические расходы на 15-25% благодаря оптимизации маршрутов и складского хранения"
  },
  {
    title: "Быстрый доступ к новым рынкам",
    description: "Наша экспертиза и сеть контактов помогают быстро осваивать новые рыночные ниши"
  },
  {
    title: "Профессиональный анализ",
    description: "Наши аналитики помогают выявить слабые места и новые возможности для развития вашего бизнеса"
  },
  {
    title: "Индивидуальный подход",
    description: "Для каждого партнера мы разрабатываем персональную стратегию сотрудничества"
  },
  {
    title: "Техническая поддержка 24/7",
    description: "Наша команда специалистов готова помочь вам в любое время дня и ночи"
  }
];

const Benefits = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Преимущества сотрудничества</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Работая с компанией "Депо", вы получаете целый ряд конкурентных преимуществ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex">
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-3" />
              <div>
                <h3 className="font-medium text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;