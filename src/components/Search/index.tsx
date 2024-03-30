import { Search as SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Skeleton } from '../ui/skeleton';

type SearchProps = {
    placeholder: string;
};

export const Search = ({ placeholder }: SearchProps) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div>
            {loading ? (
                <Skeleton className="h-10 w-96 rounded-md" />
            ) : (
                <div className="flex items-center rounded-md border border-primary">
                    <input type="text" name="" id="" className="w-96 bg-transparent px-3 outline-none max-sm:w-80" placeholder={placeholder} />
                    <button className="rounded-md border-none bg-primary px-2.5 py-2.5 outline-none ">
                        <SearchIcon />
                    </button>
                </div>
            )}
        </div>
    );
};
