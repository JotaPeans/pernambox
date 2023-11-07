"use client"

import { useEffect, useState, useRef } from "react";
import { Shuffle } from "lucide-react";

import data from "@/lib/data";
import useKey from "@/hooks/useKey";
import Section from "./components/Section";
import Button from "./components/Button";

const App = () => {
    const songsData = data.filter(d => d.type === "song");
    const artsData = data.filter(d => d.type === "art");

    const refs = typeof document !== "undefined" ? {
        surprise: document.getElementsByClassName("surprise"),
        song: document.getElementsByClassName("song"),
        art: document.getElementsByClassName("art"),
    } : {
        surprise: [],
        song: [],
        art: []
    }

    const refKeys = Object.keys(refs);

    const [ sectionSelected, setSectionSelected ] = useState<"surprise" | "song" | "art">("song");
    const dataSelected = useRef(0);

    useEffect(() => {
        (refs[sectionSelected][0] as any)?.focus();
    }, []);

    function handleChangeSection(dir: "up" | "down" | "left" | "right") {
        const currentRefIndex = refKeys.indexOf(sectionSelected);
        var key: typeof sectionSelected;

        switch(dir) {
            case "up":
                key = refKeys[currentRefIndex - 1] as typeof sectionSelected;

                (refs[key][0] as any).focus();

                setSectionSelected(key);
                dataSelected.current = 0;
                break;
                
            case "down":
                key = refKeys[currentRefIndex + 1] as typeof sectionSelected;

                (refs[key][0] as any).focus();

                setSectionSelected(key);
                dataSelected.current = 0;
                break;

            case "left":
                if(dataSelected.current > 0) {
                    dataSelected.current--;

                    (refs[sectionSelected][dataSelected.current] as any).focus();
                }

                break;

            case "right":
                if(dataSelected.current < ( refs[sectionSelected].length - 1 )) {
                    dataSelected.current++

                    (refs[sectionSelected][dataSelected.current] as any).focus();
                }

                break;
        }
    }

    useKey("w", () => handleChangeSection("up")); // tecla pra ir pra cima
    useKey("s", () => handleChangeSection("down")); // tecla pra ir pra baixo

    useKey("a", () => handleChangeSection("left")); // tecla pra ir pra direita
    useKey("d", () => handleChangeSection("right")); // tecla pra ir pra esquerda

    return (
        <main className="flex flex-col gap-10 w-full min-h-screen bg-zinc-200">
            <h1 className="text-center text-3xl font-semibold text-zinc-700 mt-5">O que você quer descobrir hoje?</h1>

            <div className="px-8 flex gap-5 items-center">
                <Button className="surprise max-w-fit p-3 outline-none focus:ring-4 ring-zinc-700 shadow-lg transition-all duration-300">
                    <Shuffle/>
                </Button>

                <div className="font-medium">
                    <h1 className="text-xl text-zinc-700">Surpreenda-me</h1>
                    <h1 className="text-sm text-zinc-600">Músicas da semana</h1>
                </div>
            </div>

            <Section title="Músicas" data={songsData} route="/view/player/" type="song"/>

            <Section title="Artes" data={artsData} route="/view/art/" type="art"/>

        </main>
    );
}
 
export default App;