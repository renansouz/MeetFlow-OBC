import { forwardRef } from 'react';

export const InputPassword = forwardRef<HTMLInputElement, { passwordAppearence: string; placeholder: string }>(({ passwordAppearence, placeholder, ...rest }, ref) => {
    return (
        <input
            ref={ref}
            type={passwordAppearence}
            className="w-64 rounded-lg  border border-[#cbcbcb] bg-[#ffffff] px-4 py-1 text-base text-[#444444] focus:outline focus:outline-0 focus:outline-offset-2 focus:outline-[#aaaaaa] sm:w-96"
            placeholder={placeholder}
            {...rest}
        />
    );
});
