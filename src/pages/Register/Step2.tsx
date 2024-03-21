import { stepProps } from '@/types/StepsTypes';
import { StepNavigator } from './StepNavigator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const Step2 = () => {
    return (
        <div>
            <h2 className="">Horários disponíveis</h2>
            <div className="flex items-center justify-center py-10 mt-20 gap-10">
                <Select>
                    <SelectTrigger className="w-[180px] bg-white text-black">
                        <SelectValue placeholder="00:00" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">
                            Light
                        </SelectItem>
                        <SelectItem value="dark">
                            Dark
                        </SelectItem>
                        <SelectItem value="system">
                            System
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px] bg-white text-black">
                        <SelectValue placeholder="00:00" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};
