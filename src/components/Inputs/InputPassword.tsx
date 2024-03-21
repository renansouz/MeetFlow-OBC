import { useState } from 'react';

type inputPasswordProps = {
    passwordAppearence: 'text' | 'password';
    id: string;
    placeholder: string;
};

export const InputPassword = ({ passwordAppearence, id, placeholder }: inputPasswordProps) => {
    return (
        <input
            type={passwordAppearence}
            className="w-96 px-4 py-1 text-base rounded-lg border focus:outline focus:outline-0 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cbcbcb]"
            id={id}
            placeholder={placeholder}
        />
    );
};
