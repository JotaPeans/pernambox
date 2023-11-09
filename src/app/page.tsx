"use client"

import handleChangeSection from "@/lib/functions/handleChangeSection";
import { useEffect, useState, useRef } from "react";
import { Shuffle } from "lucide-react";

import Section from "./components/Section";
import Button from "./components/Button";
import useKey from "@/hooks/useKey";
import { singers } from "@/lib/data";
import { Dirs } from "@/lib/types";

const App = () => {

    const refs = typeof document !== "undefined" ? {
        surprise: document.getElementsByClassName("surprise"),
        singers: document.getElementsByClassName("singers"),
    } : {
        surprise: [],
        singers: [],
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
        handleChangeSection(dir, refKeys, sectionSelected, setSectionSelected, refs, dataSelected.current, handleChangeDataSelected)
    }

    useKey("w", () => handleKey("up"));
    useKey("s", () => handleKey("down"));

    useKey("a", () => handleKey("left"));
    useKey("d", () => handleKey("right"));

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