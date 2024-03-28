import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { dayHours } from '@/utils/dayHours';
import { useState } from 'react';






type stepProps = {
    currentStepState: number;
    setCurrentStepState: (int: number) => void;
};

export const Step2 = ({ setCurrentStepState, currentStepState }: stepProps) => {

    const[startTime,setStartTime] = useState<string>();
    const[endTime,setEndTime] = useState<string>();




    return (
        <form>
            <div className="flex flex-col items-center justify-center">
                <h2 className="mt-20 text-black">Horários disponíveis</h2>
                <div className="flex items-center justify-center gap-10 py-10 ">
                    <Select>
                        <SelectTrigger className="w-[180px] bg-white text-black">
                            <SelectValue placeholder="00:00" />
                        </SelectTrigger>
                        <SelectContent className="w-[180px] bg-white text-black">
                            {dayHours.map((day) => (
                                <SelectItem value={day}>{day}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <div>
                        <p className="text-black">até</p>
                    </div>
                    <Select>
                        <SelectTrigger className="w-[180px] bg-white text-black">
                            <SelectValue placeholder="00:00" />
                        </SelectTrigger>
                        <SelectContent className="w-[180px] bg-white text-black">
                            {dayHours.map((day) => (
                                <SelectItem value={day}>{day}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div>
                <h2 className="text-center text-black">Dias disponiveis</h2>
                <div className="mt-5 flex justify-center gap-5 flex-wrap">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className="block text-black">
                            Domingo
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className="block text-black">
                            Segunda
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className="block text-black">
                            Terça
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className="block text-black">
                            Quarta
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className="block text-black">
                            Quinta
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className="block text-black">
                            Sexta
                        </label>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className="block text-black">
                            Sábado
                        </label>
                    </div>
                </div>
                {startTime}
                {endTime}
                <div className="flex justify-center mt-20  gap-40 absolute bottom-10 w-full">
                    <Button variant={'costumize'} onClick={() => setCurrentStepState(currentStepState - 1)}>
                        Voltar
                    </Button>
                    <Button type="submit">Continuar</Button>
                </div>
            </div>
        </form>
    );
};
