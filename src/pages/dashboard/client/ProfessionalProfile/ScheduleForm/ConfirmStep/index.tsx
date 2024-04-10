/* eslint-disable prettier/prettier */
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import dayjs from 'dayjs';
import utc from 'dayjs-plugin-utc';
import { CalendarDays, Clock } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { z } from 'zod';

import { createClient, ServiceInResponse } from '@/api';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/context/auth-provider';

import { ConfirmForm, FormActions, FormError, FormHeader } from './styles';

dayjs.extend(utc);
const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa no mínimo 3 caracteres' }),
  email: z.string().email({ message: 'Digite um e-mail válido' }),
  phone: z.string().regex(/^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/, { message: 'Digite um número de telefone válido' }),
  mensagem: z.string().nullable(),
});

type ConfirmFormData = z.infer<typeof confirmFormSchema>;

interface ConfirmStepProps {
  schedulingDate: Date;
  serviceSelected: ServiceInResponse;
  onCancelConfirmation: () => void;
}

export function ConfirmStep({ schedulingDate, onCancelConfirmation, serviceSelected }: ConfirmStepProps) {
  const { user } = useAuth();
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [formData, setFormData] = useState<ConfirmFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone: '',
      mensagem: '',
    },
  });

  const { mutateAsync: client } = useMutation({
    mutationFn: createClient,
  });
  async function handleConfirmScheduling(data: ConfirmFormData) {
    await client(data);

    setFormData(data); // Armazene os dados do formulário no estado
    setDialogVisible(true); // é usado para mostrar o dialog
    // onCancelConfirmation(); // é usado para redirecionar
  }

  const describedDate = dayjs(schedulingDate).format('DD[ de ]MMMM[ de ]YYYY');
  const describedTime = dayjs.utc(schedulingDate).format('HH:mm[h]');

  return (
    <>
      <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
        <FormHeader>
          <p>
            <CalendarDays />
            {describedDate}
          </p>
          <p>
            <Clock />
            {describedTime}
          </p>
        </FormHeader>

        <label>
          <p>Nome completo</p>
          <Input placeholder="Seu nome" {...register('name')} />
          {errors.name && <FormError >{errors.name.message}</FormError>}
        </label>

        <label>
          <p >Endereço de e-mail</p>
          <Input
            type="email"
            placeholder="johndoe@example.com"
            {...register('email')}
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}
        </label>

        <label>
          <p>Telefone</p>
          <InputMask
            mask="(99) 99999-9999"
            placeholder="31 91111-1111"
            {...register('phone')}
          >
            {(inputProps: any) => {
              return <Input {...inputProps} />;
            }}
          </InputMask>
          {errors.phone && <FormError >{errors.phone.message}</FormError>}
        </label>

        <label>
          <p>Mensagem</p>
          <Textarea {...register('mensagem')} placeholder='Gostaria de agendar um horário urgente ...' />
        </label>

        <FormActions>
          <Button type="button" variant="destructive" onClick={onCancelConfirmation}>
            Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            Confirmar
          </Button>
        </FormActions>
      </ConfirmForm>


      <Dialog open={isDialogVisible} onOpenChange={setDialogVisible}>
        <DialogContent>
          <DialogTitle className='text-center'>Confirmação de agendamento</DialogTitle>

          <p><span className='font-bold'>Titulo: </span> {serviceSelected.name}</p>
          <p><span className='font-bold'>Serviço: </span> {serviceSelected.description}</p>
          <p><span className='font-bold'>Valor:</span> R$ {serviceSelected.price}</p>
          <p><span className='font-bold'>Data:</span> {describedDate} as {describedTime}</p>
          <Separator />

          <p><span className='font-bold'>Nome: </span>{formData?.name}</p>
          <p><span className='font-bold'>Email: </span>{formData?.email} </p>
          <p><span className='font-bold'>Telefone: </span>{formData?.phone} </p>
          <p><span className='font-bold'>Mensagem: </span>{formData?.mensagem}</p>

          <Button variant={'success'} >
            Confirmar agendamento
          </Button>
        </DialogContent>

      </Dialog>
    </>
  );
}
