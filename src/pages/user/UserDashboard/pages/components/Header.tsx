import { Separator } from '@radix-ui/react-separator';

interface HeaderProps {
    title: string;
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <div className="px-10 p-5 flex flex-col mt-[3%]">
            <h1 className="text-3xl font-bols">{title}</h1>
            <Separator orientation="horizontal" className="w-full h-0.5 my-10 bg-slate-700" />
        </div>
    );
};
