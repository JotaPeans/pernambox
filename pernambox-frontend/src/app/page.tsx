"use client"

import handleChangeSection from "@/lib/functions/handleChangeSection";
import { useEffect, useState, useRef, useContext } from "react";
import { Shuffle } from "lucide-react";

import { ScreenContext } from "./ScreenProvider";
import Section from "./components/Section";
import Button from "./components/Button";
import useKey from "@/hooks/useKey";
import { singers, musicGenres, artists, artGenres } from "@/lib/dataset";
import { Dirs } from "@/lib/types";
import OpeningScreen from "./components/OpeningScreen";

const App = () => {
    const { isOpeningScreenShow, setIsOpeningScreenShow } = useContext(ScreenContext);

    const refs = typeof document !== "undefined" ? {
        surprise: document.getElementsByClassName("surprise"),
        singers: document.getElementsByClassName("singers"),
        musicGenres: document.getElementsByClassName("musicGenres"),
        artists: document.getElementsByClassName("artists"),
        artGenres: document.getElementsByClassName("artGenres"),
    } : {
        surprise: [],
        singers: [],
        musicGenres: [],
        artists: [],
        artGenres: [],
    }

    const refKeys = Object.keys(refs);

    const [ sectionSelected, setSectionSelected ] = useState("singers");
    const dataSelected = useRef(0);

    useEffect(() => {
        (refs[sectionSelected as keyof typeof refs][0] as any)?.focus();
    }, []);

    function handleChangeDataSelected(n: number) {
        dataSelected.current = n;
    }

    function handleKey(dir: Dirs) {
        if(isOpeningScreenShow && setIsOpeningScreenShow) setIsOpeningScreenShow(false);
        handleChangeSection(dir, refKeys, sectionSelected, setSectionSelected, refs, dataSelected.current, handleChangeDataSelected)
    }

    useKey("w", () => handleKey("up"));
    useKey("s", () => handleKey("down"));

    useKey("a", () => handleKey("left"));
    useKey("d", () => handleKey("right"));

    return (
        <>
            {/* <OpeningScreen/> */}

            <main className="flex flex-col gap-10 w-full min-h-full bg-background px-8">
                <h1 
                    className="text-center text-4xl font-bold text-custom-blue mt-8"
                >
                    O que você quer descobrir hoje?
                </h1>

                <div className="flex gap-5 items-center">
                    <Button className="shuffleButton surprise">
                        <Shuffle/>
                    </Button>

                    <div className="font-medium">
                        <h1 className="text-xl font-bold text-custom-blue">
                            Surpreenda-me
                        </h1>
                        <h1 className="text-sm font-bold text-custom-blue">
                            Músicas da semana
                        </h1>
                    </div>
                </div>

                <Section 
                    title="Artistas Musicas" 
                    data={singers} 
                    route="/singer/"
                    type="singers"
                />

                <Section
                    title="Gêneros Musicais" data={musicGenres}
                    route="/genre/" type="musicGenres"
                />

                <Section
                    title="Artistas Plásticos" data={artists}
                    route="/artist/" type="artists"
                />

                <Section
                    title="Gêneros Artísticos" data={artGenres}
                    route="/piece/" type="artGenres"
                />

            </main>
        </>
    );
}
 
export default App;