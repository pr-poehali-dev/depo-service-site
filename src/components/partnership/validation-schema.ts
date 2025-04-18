import * as z from "zod";

export const partnerFormSchema = z.object({
  companyName: z.string().min(2, {
    message: "Название компании должно содержать минимум 2 символа",
  }),
  contactName: z.string().min(2, {
    message: "Имя должно содержать минимум 2 символа",
  }),
  email: z.string().email({
    message: "Пожалуйста, введите корректный email",
  }),
  phone: z.string().min(10, {
    message: "Пожалуйста, введите корректный номер телефона",
  }),
  businessType: z.string({
    required_error: "Пожалуйста, выберите тип бизнеса",
  }),
  productsDescription: z.string().min(10, {
    message: "Описание должно содержать минимум 10 символов",
  }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "Необходимо принять условия сотрудничества" }),
  }),
});

export type PartnerFormValues = z.infer<typeof partnerFormSchema>;

export const DEFAULT_FORM_VALUES: PartnerFormValues = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  businessType: "",
  productsDescription: "",
  termsAccepted: false,
};