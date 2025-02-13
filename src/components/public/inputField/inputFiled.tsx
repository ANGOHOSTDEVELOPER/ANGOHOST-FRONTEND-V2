import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IProps extends ComponentProps<'input'> {
    className?: string
}

export function Input ({className, ...props}: IProps) {
    return (
        <input {...props} className={twMerge('w-full py-4 border rounded-[20px] border-[#222] bg-transparent text-white outline-none placeholder:text-[#777] placeholder:sato-light sato px-6', className)}/>
    )
}