import { Input } from '@/components/Input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type stepProps = {
    currentStepState: number;
    setCurrentStepState: (int: number) => void;
};

export const Step3 = ({ setCurrentStepState, currentStepState }: stepProps) => {
    return (
        <div className="">
            <div className="mt-20 flex flex-col items-center gap-5">
                <label htmlFor="" className="block text-black">
                    Escreva uma breve descrição do seu serviço
                </label>
                <Input placeholder="Digite aqui..." />
            </div>
            <div className="mt-20 flex flex-col items-start items-center gap-5">
                <label htmlFor="" className="block text-black">
                    Selecione sua área de atuação
                </label>
                <Select>
                    <SelectTrigger className="w-[180px] bg-white text-black">
                        <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent className="w-[180px] bg-white text-black">
                        <SelectItem value={'Advocacia'}>Advocacia</SelectItem>
                        <SelectItem value={'Saúde'}>Saúde</SelectItem>
                        <SelectItem value={'Design'}>Design</SelectItem>
                        <SelectItem value={'Tecnologia'}>Tecnologia</SelectItem>
                        <SelectItem value={'Logística'}>Logística</SelectItem>
                        <SelectItem value={'Construção'}>Construção</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="absolute bottom-10 mt-20  flex w-full justify-center gap-40">
                <Button variant={'costumize'} onClick={() => setCurrentStepState(currentStepState - 1)}>
                    Voltar
                </Button>
                <Button type="submit">Continuar</Button>
            </div>
        </div>
    );
};
