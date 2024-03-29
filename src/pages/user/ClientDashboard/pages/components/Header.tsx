import { Separator } from '@radix-ui/react-separator';
import { useEffect, useState } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

interface HeaderProps {
    title: string;
}

export const Header = ({ title }: HeaderProps) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className="px-10 p-5 flex h-13 flex-col mt-[3%]">
            {loading ? <Skeleton className="w-48 h-10 rounded-md z-0 gap-y-12 my-10" /> : <h1 className="text-3xl font-bols">{title}</h1>}
            {loading ? <Skeleton className="w-full h-1 rounded-md z-0 gap-y-12" /> : <Separator orientation="horizontal" className=" w-full h-0.5 bg-foreground my-10" />}
        </div>
    );
};
