import { Form } from "@/components/ui/form";
import usePartnerForm from "./usePartnerForm";
import CompanyInfoFields from "./form-fields/CompanyInfoFields";
import BusinessTypeField from "./form-fields/BusinessTypeField";
import ProductsDescriptionField from "./form-fields/ProductsDescriptionField";
import TermsField from "./form-fields/TermsField";
import SubmitButton from "./form-fields/SubmitButton";

/**
 * Компонент формы для партнеров компании "Депо"
 * Позволяет заполнить и отправить информацию о компании для партнерского сотрудничества
 */
const PartnerForm = () => {
  const { form, isSubmitting, onSubmit } = usePartnerForm();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Информация о компании и контактных данных */}
        <CompanyInfoFields control={form.control} />
        
        {/* Выбор типа бизнеса */}
        <BusinessTypeField control={form.control} />
        
        {/* Описание продуктов/услуг */}
        <ProductsDescriptionField control={form.control} />
        
        {/* Принятие условий сотрудничества */}
        <TermsField control={form.control} />
        
        {/* Кнопка отправки формы */}
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
};

export default PartnerForm;