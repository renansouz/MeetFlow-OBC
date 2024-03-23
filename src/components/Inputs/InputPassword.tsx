type inputPasswordProps = {
    passwordAppearence: 'text' | 'password';
    id: string;
    placeholder: string;
};

export const InputPassword = ({ passwordAppearence, id, placeholder }: inputPasswordProps) => {
    return (
        <input
            type={passwordAppearence}
            className="w-64 rounded-lg  border border-[#cbcbcb] bg-[#ffffff] px-4 py-1 text-base text-[#444444] focus:outline focus:outline-0 focus:outline-offset-2 focus:outline-[#aaaaaa] sm:w-96"
            id={id}
            placeholder={placeholder}
        />
    );
};
