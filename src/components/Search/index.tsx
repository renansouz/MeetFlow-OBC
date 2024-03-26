import { Search as SearchIcon } from 'lucide-react';

type SearchProps = {
    placeholder: string;
};

export const Search = ({ placeholder }: SearchProps) => {
    return (
        <div className="flex items-center rounded-md border border-indigo-700">
            <input type="text" name="" id="" className="bg-transparent outline-none px-3 w-96" placeholder={placeholder} />
            <button className="bg-indigo-700 outline-none border-none py-2.5 px-2.5 rounded-md ">
                <SearchIcon />
            </button>
        </div>
    );
};
