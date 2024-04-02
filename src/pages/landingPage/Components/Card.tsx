import { LucideIcon } from 'lucide-react';

type CardProps = {
    Icon: LucideIcon;
    title: string;
    label: string;
};

export const Card = ({ Icon, title, label }: CardProps) => {
    return (
        <div className="flex items-center  gap-10">
            <div className="flex items-center justify-center rounded-full bg-indigo-600 p-4">
                <Icon className="max-xl:w-18 h-10 w-10 text-5xl text-indigo-400" />
            </div>
            <div>
                <h2 className="mb-2 text-xl font-bold">{title}</h2>
                <p className="text-start text-xl font-light text-foreground max-xl:text-sm">{label}</p>
            </div>
        </div>
    );
};
