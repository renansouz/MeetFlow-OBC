import { forwardRef } from 'react';
import { ComponentProps } from 'react';

type InputControlProps = ComponentProps<'input'> & {
    icon?: React.ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputControlProps>(({ icon, ...props }, ref) => {
    return (
        <div className="relative">
            {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400">{icon}</div>}
            <input
                ref={ref}
                className="w-96 rounded-lg border border-[#cbcbcb] bg-[#ffffff] px-4 py-1 pl-10 text-base text-[#444444] focus:outline focus:outline-0 focus:outline-offset-2 focus:outline-[#aaaaaa] max-sm:w-64"
                {...props}
            />
        </div>
    );
});
