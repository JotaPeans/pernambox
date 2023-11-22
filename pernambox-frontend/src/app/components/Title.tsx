import { HTMLAttributes } from "react";
import { twMerge as tw } from "tailwind-merge";

interface TitleProps extends HTMLAttributes<HTMLHeadElement> {

}

const Title = ({ ...props }: TitleProps) => {
    return (
        <h1
            {...props}
            className={tw("text-2xl font-semibold text-zinc-600 capitalize", props.className)}
        >
            {props.children}
        </h1>
    );
}
 
export default Title;