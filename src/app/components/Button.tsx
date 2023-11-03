import { ButtonHTMLAttributes } from "react";
import { twMerge as tw } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = ({ ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={tw("bg-orange-500 p-3 px-10 rounded-xl flex items-center justify-center text-white", props.className)}
        >
            {props.children}
        </button>
    );
}
 
export default Button;