import { LucideIcon } from 'lucide-react';

type CardProps = {
  Icon: LucideIcon;
  title: string;
  label: string;
};

export const Card = ({ Icon, title, label }: CardProps) => {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center">
      <div className="flex h-full w-10/12 flex-col items-center justify-center gap-3 rounded-2xl bg-card p-10  pb-12 text-center shadow-xl shadow-muted hover:opacity-80">
        <div className="flex items-center justify-center rounded-full bg-indigo-600/20 p-4">
          <Icon className="max-xl:w-18 h-10 w-10 text-5xl text-indigo-700" />
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold">{title}</h2>
          <p className="w-full text-base font-light text-foreground max-xl:text-sm">{label}</p>
        </div>
      </div>
    </div>
  );
};
