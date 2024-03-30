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
        <div className="h-13 mt-[3%] flex flex-col p-5 px-10">
            {loading ? <Skeleton className="z-0 my-10 h-10 w-48 gap-y-12 rounded-md" /> : <h1 className="font-bols">{title}</h1>}
            {loading ? <Skeleton className="z-0 h-1 w-full gap-y-12 rounded-md" /> : <Separator orientation="horizontal" className=" my-10 h-0.5 w-full bg-foreground max-sm:my-1" />}
        </div>
    );
};
