import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

type AlertDialogContainerProps = {
  triger: string;
  alertMessage: string;
  description: string;
  callback: () => void;
};

export const AlertDialogContainer = ({
  triger,
  alertMessage,
  description,
  callback,
}: AlertDialogContainerProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="w-full">
        <Button variant={'ghost'} className="">
          <p className="text-left text-red-600">{triger}</p>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{alertMessage}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => callback()}>Continuar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
