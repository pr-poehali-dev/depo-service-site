import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { partnerFormSchema, PartnerFormValues, DEFAULT_FORM_VALUES } from "./validation-schema";

export const usePartnerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<PartnerFormValues>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const onSubmit = (data: PartnerFormValues) => {
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      
      toast({
        title: "Заявка отправлена",
        description: "Наш менеджер свяжется с вами в ближайшее время",
      });
      
      form.reset();
    }, 1500);
  };

  return {
    form,
    isSubmitting,
    onSubmit,
  };
};

export default usePartnerForm;