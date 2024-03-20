import { LucideIcon } from "lucide-react";

type CardProps = {
    Icon: LucideIcon;
    title: string;
    label: string;
};

export const Card = ({ Icon, title, label }: CardProps) => {
    return (
        <div className="w-4/5 h-24 flex  items-center gap-10">
            <div className="bg-sky-950 w-24 h-24 flex justify-center items-center rounded-full">
                <Icon className="w-14 h-14 text-5xl text-indigo-600" />
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p>{label}</p>
            </div>
        </div>
    );
};
