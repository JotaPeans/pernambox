import { HTMLAttributes } from "react";
import { twMerge as tw } from "tailwind-merge";
import Image from "next/image";

interface Header extends HTMLAttributes<HTMLDivElement> {

}

const Header = ({ ...props }: Header) => {
    return (
        <div
            {...props}
            className={tw("flex justify-center p-8 items-center fixed top-0 w-screen bg-zinc-200 shadow-lg", props.className)}
        >
            {/* <h1 className="text-3xl font-semibold text-zinc-600">Pernam<span className="font-bold text-orange-500">Box</span></h1>

            <Image src="/cesar_school.webp" alt="Cesar School" width={80} height={80} className="bg-white p-1 py-2 rounded-xl"/> */}

            <h1 className="text-5xl font-semibold text-zinc-600">Pernam<span className="font-bold text-orange-500">Box</span></h1>
        </div>
    );
}
 
export default Header;