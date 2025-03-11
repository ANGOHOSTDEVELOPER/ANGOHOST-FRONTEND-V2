import { Button } from "@/components/ui/button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface ButtonOnPrevScreenProps {
  onPrevScreen: () => void;
  title?: string;
}
interface ButtonOnNextScreenProps {
  onNextScreen: () => void;
  title?: string;
}

export const ButtonOnNextScreen = ({
  onNextScreen,
  title = "Continuar",
}: ButtonOnNextScreenProps) => {
  return (
    <Button onClick={onNextScreen}>
      {title}
      <ArrowBigRight />
    </Button>
  );
};

export const ButtonOnPrevScreen = ({
  onPrevScreen,
  title = "Voltar",
}: ButtonOnPrevScreenProps) => {
  return (
    <Button onClick={onPrevScreen}>
      <ArrowBigLeft />

      {title}
    </Button>
  );
};
