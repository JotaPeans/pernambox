"use client"

import { useEffect, useState, useRef } from "react";
import { Shuffle } from "lucide-react";

import { singers } from "@/lib/data";
import useKey from "@/hooks/useKey";
import Section from "./components/Section";
import Button from "./components/Button";

const App = () => {

    const refs = typeof document !== "undefined" ? {
        surprise: document.getElementsByClassName("surprise"),
        singers: document.getElementsByClassName("singers"),
    } : {
        surprise: [],
        singers: [],
    }

    const refKeys = Object.keys(refs);

    const [ sectionSelected, setSectionSelected ] = useState<keyof typeof refs>("singers");
    const dataSelected = useRef(0);

    useEffect(() => {
        (refs[sectionSelected][0] as any)?.focus();
    }, []);

    function handleChangeSection(dir: "up" | "down" | "left" | "right") {
        const currentRefIndex = refKeys.indexOf(sectionSelected);
        var key: typeof sectionSelected;

        switch(dir) {
            case "up":
                if(currentRefIndex === 0) break;
                key = refKeys[currentRefIndex - 1] as typeof sectionSelected;

                (refs[key][0] as any).focus();

                setSectionSelected(key);
                dataSelected.current = 0;
                break;
                
            case "down":
                if(currentRefIndex === (refKeys.length - 1)) break;
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
        <main className="flex flex-col gap-10 w-full min-h-full bg-zinc-200 px-8">
            <h1 className="text-center text-3xl font-semibold text-zinc-700 mt-5">O que você quer descobrir hoje?</h1>

            <div className="flex gap-5 items-center">
                <Button className="surprise max-w-fit p-3 outline-none focus:ring-4 ring-zinc-700 shadow-lg transition-all duration-300">
                    <Shuffle/>
                </Button>

                <div className="font-medium">
                    <h1 className="text-xl text-zinc-700">Surpreenda-me</h1>
                    <h1 className="text-sm text-zinc-600">Músicas da semana</h1>
                </div>
            </div>

            <Section title="Artistas" data={singers} route="/singer/" type="singers"/>

            {/* <Section title="Artes" data={artsData} route="/view/art/" type="art"/> */}

        </main>
    );
}
 
export default App;