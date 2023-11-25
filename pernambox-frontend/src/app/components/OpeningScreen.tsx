"use client"

import Image from "next/image";
import { useEffect, useContext } from "react";
import { ScreenContext } from "../ScreenProvider";

const OpeningScreen = () => {
    const { isOpeningScreenShow, setIsOpeningScreenShow } = useContext(ScreenContext);
    // const [ show, setShow ] = useState(isShowing);

    // useEffect(() => {
    //     if(typeof document !== undefined) {
    //         const opening = document.getElementById("opening");
            
    //         setTimeout(() => {
    //             if(opening) opening.style.display = "none"
    //         }, 3000);
    //     }

    //     setTimeout(() => {
    //         setShow(false);
    //     }, 2000);
    // }, []);

    useEffect(() => {
        if(typeof document !== undefined) {
            const opening = document.getElementById("opening");

            if(!isOpeningScreenShow) {
                setTimeout(() => {
                    if(opening) opening.style.display = "none"
                }, 1200);
            }
        }
    }, [isOpeningScreenShow]);


    return (
        <Image
            id="opening"
            src="/idle.svg"
            alt="idle"
            width={1080}
            height={1920}
            data-show={isOpeningScreenShow}
            onClick={() => {
                if(setIsOpeningScreenShow) setIsOpeningScreenShow(false);
            }}
            // data-show={show}
            className="absolute top-0 left-0 z-[9999] w-full data-[show=false]:scale-150 data-[show=false]:opacity-0 pointer-events-none transition-all duration-1000"
        />
    );
}
 
export default OpeningScreen;