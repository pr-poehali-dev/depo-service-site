import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { PartnerFormValues } from "../validation-schema";

interface ProductsDescriptionFieldProps {
  control: Control<PartnerFormValues>;
}

const ProductsDescriptionField = ({ control }: ProductsDescriptionFieldProps) => {
  return (
    <FormField
      control={control}
      name="productsDescription"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Описание товаров/услуг</FormLabel>
          <FormControl>
            <Textarea 
              placeholder="Опишите ваши товары или услуги, которые вы хотели бы поставлять через нашу компанию" 
              rows={4}
              {...field} 
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ProductsDescriptionField;