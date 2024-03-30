import { MoveLeft, MoveRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

type stepProps = {
    currentStepState: number;
    setCurrentStepState: (int: number) => void;
};

export const Step3 = ({ setCurrentStepState, currentStepState }: stepProps) => {
    return (
        <div>
            <div className="flex flex-col items-center gap-5">
                <label htmlFor="" className="text-2xl text-foreground">
                    Escreva uma breve descrição do seu serviço
                </label>
                <Textarea className="row-span-35 h-32 w-[90%] resize-none  rounded-lg bg-card px-8 py-2 text-xl focus:border-indigo-400" placeholder="Digite aqui..." />
                <label htmlFor="" className="text-2xl text-foreground">
                    Selecione sua área de atuação
                </label>
                <Select>
                    <SelectTrigger className="h-14 w-[90%] rounded-lg bg-card text-xl hover:border-indigo-400">
                        <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg bg-card  text-xl">
                        <SelectItem value={'Advocacia'}>Advocacia</SelectItem>
                        <SelectItem value={'Saúde'}>Saúde</SelectItem>
                        <SelectItem value={'Design'}>Design</SelectItem>
                        <SelectItem value={'Tecnologia'}>Tecnologia</SelectItem>
                        <SelectItem value={'Logística'}>Logística</SelectItem>
                        <SelectItem value={'Construção'}>Construção</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="mt-20  flex w-full justify-center gap-40">
                <Button onClick={() => setCurrentStepState(currentStepState - 1)}>
                    <MoveLeft className="mr-3" />
                    Voltar
                </Button>
                <Button variant={'success'} type="submit">
                    Concluir
                </Button>
            </div>
        </div>
    );
};
