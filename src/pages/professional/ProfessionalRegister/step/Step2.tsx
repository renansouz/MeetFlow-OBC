import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { z } from 'zod';

import { professionalAPI } from '@/api/professionalAPI';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const Step2 = () => {
    const dayHours: string[] = [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
    ];

    return (
        <form onSubmit={handleSubmit(createNewSchedule)}>
            <ToastContainer />
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
                <div className="flex gap-x-12">{errors.hourEnd1 && <p className="text-red-600">{errors.hourEnd1.message}</p>}</div>
            </div>
            <div>
                <h2 className="text-center text-black">Dias disponiveis</h2>
                <div className="mt-5 flex flex-wrap justify-center gap-5">
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
                <div className="absolute bottom-10 mt-20  flex w-full justify-center gap-40">
                    <Button variant={'costumize'} onClick={() => setCurrentStepState(currentStepState - 1)}>
                        Voltar
                    </Button>
                    <Button type="submit">Continuar</Button>
                </div>
            </div>
        </form>
    );
};
