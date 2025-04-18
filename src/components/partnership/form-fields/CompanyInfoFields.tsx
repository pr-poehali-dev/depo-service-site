import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PartnerFormValues } from "../validation-schema";

interface CompanyInfoFieldsProps {
  control: Control<PartnerFormValues>;
}

const CompanyInfoFields = ({ control }: CompanyInfoFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="companyName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Название компании</FormLabel>
            <FormControl>
              <Input placeholder="ООО 'Компания'" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="contactName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Контактное лицо</FormLabel>
            <FormControl>
              <Input placeholder="Иван Иванов" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="email@example.com" type="email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Телефон</FormLabel>
            <FormControl>
              <Input placeholder="+7 (XXX) XXX-XX-XX" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CompanyInfoFields;