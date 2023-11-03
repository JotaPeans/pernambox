import { HTMLAttributes } from "react";
import { twMerge as tw } from "tailwind-merge";

interface CardButtonProps extends HTMLAttributes<HTMLButtonElement> {

}

const CardButton = ({ ...props }: CardButtonProps) => {
    return (
        <button
            {...props}
            className={tw("", props.className)}
        >
            {props.children}
        </button>
    );
}
 
export default CardButton;