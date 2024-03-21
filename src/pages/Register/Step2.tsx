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
        <div>
            <div className="">
                <h2 className="text-black">Horários disponíveis</h2>
                <div className="flex items-center justify-center py-10 mt-20 gap-10 ">
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
            </div>
            <h2 className="text-black">Dias disponiveis</h2>
            <div className="flex justify-center">
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-black">
                        Domingo
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-black">
                        Segunda-feira
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-black">
                        Terça-feira
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-black">
                        Quarta-feira
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-black">
                        Quinta-feira
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-black">
                        Sexta-feira
                    </label>
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="text-black">
                        Sábado
                    </label>
                </div>
            </div>
        </div>
    );
};
