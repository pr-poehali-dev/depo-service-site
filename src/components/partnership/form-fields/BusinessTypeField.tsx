import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PartnerFormValues } from "../validation-schema";

interface BusinessTypeFieldProps {
  control: Control<PartnerFormValues>;
}

const BUSINESS_TYPES = [
  { value: "retail", label: "Розничная торговля" },
  { value: "wholesale", label: "Оптовая торговля" },
  { value: "manufacturing", label: "Производство" },
  { value: "services", label: "Услуги" },
  { value: "other", label: "Другое" },
];

const BusinessTypeField = ({ control }: BusinessTypeFieldProps) => {
  return (
    <FormField
      control={control}
      name="businessType"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Тип бизнеса</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип бизнеса" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {BUSINESS_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default BusinessTypeField;