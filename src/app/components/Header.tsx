import { HTMLAttributes } from "react";
import { twMerge as tw } from "tailwind-merge";

interface Header extends HTMLAttributes<HTMLDivElement> {

}

const Header = ({ ...props }: Header) => {
    return (
        <div
            {...props}
            className={tw("", props.className)}
        >
            
        </div>
    );
}
 
export default Header;