import { LucideIcon } from 'lucide-react';

type CardProps = {
    Icon: LucideIcon;
    title: string;
    label: string;
};

export const Card = ({ Icon, title, label }: CardProps) => {
    return (
        <div className="flex h-24 w-4/5  items-center gap-10 max-xl:w-full max-xl:flex-col">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-sky-950">
                <Icon className="max-xl:w-18 h-14 w-14 text-5xl text-indigo-600 max-xl:h-24" />
            </div>
            <div>
                <h2 className="mb-2 font-semibold max-xl:text-center max-xl:text-lg">{title}</h2>
                <p className="max-xl:text-center">{label}</p>
            </div>
        </div>
    );
};
