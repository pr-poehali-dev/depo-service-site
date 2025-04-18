import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { PartnerFormValues } from "../validation-schema";

interface TermsFieldProps {
  control: Control<PartnerFormValues>;
}

const TermsField = ({ control }: TermsFieldProps) => {
  return (
    <FormField
      control={control}
      name="termsAccepted"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
          <FormControl>
            <Checkbox 
              checked={field.value} 
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              Я принимаю условия сотрудничества и согласен на обработку персональных данных
            </FormLabel>
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
};

export default TermsField;