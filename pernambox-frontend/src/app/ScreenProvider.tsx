"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";

interface ScreenProviderProps {
    children: ReactNode
}

interface ScreenContextProps {
    isOpeningScreenShow: boolean
    setIsOpeningScreenShow: Dispatch<SetStateAction<boolean>> | null
}

const appContextDefaultValues: ScreenContextProps = {
    isOpeningScreenShow: true,
    setIsOpeningScreenShow: null
}

export const ScreenContext = createContext<ScreenContextProps>(appContextDefaultValues);

const ScreenProvider = ({ children }: ScreenProviderProps) => {
    const [ isOpeningScreenShow, setIsOpeningScreenShow ] = useState(true);
    
    return (
        <ScreenContext.Provider value={{ isOpeningScreenShow, setIsOpeningScreenShow }}>
            <NextUIProvider>
                { children }
            </NextUIProvider>
        </ScreenContext.Provider>
    );
}
 
export default ScreenProvider;