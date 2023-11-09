import { HTMLAttributes } from "react";
import { twMerge as tw } from "tailwind-merge";

interface CardButtonProps extends HTMLAttributes<HTMLButtonElement> {
    name?: string
    img?: string
}

const CardButton = ({ img, name, ...props }: CardButtonProps) => {
    return (
        <button
            {...props}
            className={tw("min-w-[10rem] max-w-[12rem] min-h-[10rem] bg-white shadow-md rounded-2xl p-2 flex flex-col justify-start items-center", props.className)}
        >   
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 rounded-xl">
                { img && <img src={img} alt={name} className="h-full object-cover object-left rounded-lg"/> }

                { name && <h1 className="font-semibold text-zinc-700 capitalize">{ name }</h1> }
                {props.children}
            </div>
        </button>
    );
}
 
export default CardButton;