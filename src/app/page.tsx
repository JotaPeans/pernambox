"use client"

import handleChangeSection from "@/lib/functions/handleChangeSection";
import { useEffect, useState, useRef } from "react";
import { Shuffle } from "lucide-react";

import Section from "./components/Section";
import Button from "./components/Button";
import useKey from "@/hooks/useKey";
import { singers, musicGenres } from "@/lib/data";
import { Dirs } from "@/lib/types";
import OpeningScreen from "./components/OpeningScreen";

const App = () => {

    const refs = typeof document !== "undefined" ? {
        surprise: document.getElementsByClassName("surprise"),
        singers: document.getElementsByClassName("singers"),
        genres: document.getElementsByClassName("genres"),
    } : {
        surprise: [],
        singers: [],
        genres: [],
    }

    const refKeys = Object.keys(refs);

    const [ sectionSelected, setSectionSelected ] = useState("singers");
    const [ isOpeningScreenShow, setIsOpeningScreenShow ] = useState(true);
    const dataSelected = useRef(0);

    useEffect(() => {
        (refs[sectionSelected as keyof typeof refs][0] as any)?.focus();
    }, []);

    function handleChangeDataSelected(n: number) {
        dataSelected.current = n;
    }

    function handleKey(dir: Dirs) {
        if(isOpeningScreenShow) setIsOpeningScreenShow(false);
        handleChangeSection(dir, refKeys, sectionSelected, setSectionSelected, refs, dataSelected.current, handleChangeDataSelected)
    }

    useKey("w", () => handleKey("up"));
    useKey("s", () => handleKey("down"));

    useKey("a", () => handleKey("left"));
    useKey("d", () => handleKey("right"));

    return (
        <>
            <OpeningScreen isShowing={isOpeningScreenShow}/>

            <main className="flex flex-col gap-10 w-full min-h-full bg-background px-8">
                <h1 className="text-center text-4xl font-bold text-custom-blue mt-8">O que você quer descobrir hoje?</h1>

                <div className="flex gap-5 items-center">
                    <Button className="surprise max-w-fit p-3 outline-none focus:ring-4 ring-offset-2 ring-zinc-700 shadow-lg transition-all duration-300 bg-custom-green rounded-full">
                        <Shuffle/>
                    </Button>

                    <div className="font-medium">
                        <h1 className="text-xl font-bold text-custom-blue">Surpreenda-me</h1>
                        <h1 className="text-sm font-bold text-custom-blue">Músicas da semana</h1>
                    </div>
                </div>

                <Section title="Artistas" data={singers} route="/singer/" type="singers"/>

                <Section title="Gêneros Musicais" data={musicGenres} route="/genre/" type="genres"/>

            </main>
        </>
    );
}
 
export default App;