"use client"

import useKey from "@/hooks/useKey";
import { twMerge as tw } from "tailwind-merge";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { ChevronLeft } from "lucide-react";
import { HTMLAttributes } from "react";
import { CharString } from "@/lib/types";

interface BackButtonProps extends HTMLAttributes<HTMLButtonElement> {
    backUrl: string
    keyToBack?: CharString
}

const BackButton = ({ backUrl, keyToBack, ...props }: BackButtonProps) => {
    const router = useRouter();
    
    if(keyToBack) useKey(keyToBack, () => router.push(backUrl));
    
    return (
        <Button 
            className={tw("max-w-fit p-3 pr-[13px] back outline-none focus:ring-4 ring-zinc-700 shadow-lg transition-all duration-300", props.className)}
            onClick={() => router.push(backUrl)} 
        >
            <ChevronLeft strokeWidth={2.2}/>
        </Button>
    );
}
 
export default BackButton;