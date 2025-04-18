import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <Button type="submit" className="w-full" disabled={isSubmitting}>
      {isSubmitting ? "Отправка..." : "Отправить заявку"}
    </Button>
  );
};

export default SubmitButton;