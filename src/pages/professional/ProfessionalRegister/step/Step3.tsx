import { Input } from '@/components/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const Step3 = () => {
    return (
        <div className="px-10">
            <div className="mt-20 flex flex-col items-start gap-5">
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
            <div className="mt-20 flex flex-col gap-5 items-start">
                <label htmlFor="" className="block text-black">
                    Escreva uma breve descrição do seu serviço
                </label>
                <Input placeholder="Digite aqui..." />
            </div>
        </div>
    );
};
