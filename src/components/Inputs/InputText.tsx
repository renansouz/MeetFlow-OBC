type inputTextProps = {
    placeholder: string;
    id: string;
};

export const InputText = ({ placeholder, id }: inputTextProps) => {
    return (
        <input
            type="text"
            id={id}
            className=" w-96 rounded-lg border border-[#cbcbcb] bg-[#ffffff] px-4 py-1 text-base text-[#444444] focus:outline focus:outline-0 focus:outline-offset-2 focus:outline-[#aaaaaa] max-sm:w-64"
            placeholder={placeholder}
        />
    );
};
