import { useEffect, useRef } from "react";

export default function useKey(key: string, callback: (e: KeyboardEvent) => void) {
    const callbackRef = useRef(callback);

    // useEffect(() => {
    //     callbackRef.current = callback
    // }, []);

    callbackRef.current = callback;

    useEffect(() => {
        function handleKeyPress(e: KeyboardEvent) {
            if(e.key === key) {
                callbackRef.current(e);
            }
        }

        document.addEventListener("keypress", handleKeyPress);
        return () => document.removeEventListener("keypress", handleKeyPress);
    }, [key]);
}