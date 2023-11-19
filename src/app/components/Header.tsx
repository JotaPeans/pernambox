import { HTMLAttributes } from "react";
import { twMerge as tw } from "tailwind-merge";
import Image from "next/image";

interface Header extends HTMLAttributes<HTMLDivElement> {

}

const Header = ({ ...props }: Header) => {
    return (
        <div
            {...props}
            className={tw("flex justify-center items-center w-full max-w-[1080px] mx-auto bg-zinc-200 h-40 shadow-lg z-50", props.className)}
        >
            <Image src="/Header.svg" alt="Pernambox" width={1080} height={40} className="w-full h-40 object-cover"></Image>
        </div>
    );
}
 
export default Header;