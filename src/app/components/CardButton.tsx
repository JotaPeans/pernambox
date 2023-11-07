import { HTMLAttributes } from "react";
import { twMerge as tw } from "tailwind-merge";

interface CardButtonProps extends HTMLAttributes<HTMLButtonElement> {

}

const CardButton = ({ ...props }: CardButtonProps) => {
    return (
        <button
            {...props}
            className={tw("min-w-[10rem] h-40 bg-white shadow-md rounded-2xl p-2", props.className)}
        >   
            <div className="w-full h-full flex items-center justify-center rounded-xl">
                {props.children}
            </div>
        </button>
    );
}
 
export default CardButton;