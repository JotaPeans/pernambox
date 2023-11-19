"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const OpeningScreen = () => {
    const [ show, setShow ] = useState(true);

    useEffect(() => {
        if(typeof document !== undefined) {
            const opening = document.getElementById("opening");
            
            setTimeout(() => {
                if(opening) opening.style.display = "none"
            }, 3000);
        }

        setTimeout(() => {
            setShow(false);
        }, 2000);
    }, []);


    return (
        <Image
            id="opening"
            src="/idle.svg"
            alt="idle"
            width={1080}
            height={1920}
            data-show={show}
            className="absolute top-0 left-0 z-[9999] w-full data-[show=false]:scale-150 data-[show=false]:opacity-0 pointer-events-none transition-all duration-1000"
        />
    );
}
 
export default OpeningScreen;