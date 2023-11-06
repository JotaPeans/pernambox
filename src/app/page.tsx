"use client"

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation"
import Header from "./components/Header";
import Title from "./components/Title";
import CardButton from "./components/CardButton";

import data from "@/lib/data";
import useKey from "@/hooks/useKey";

const App = () => {
    const router = useRouter();

    const songsData = data.filter(d => d.type === "song");
    const artsData = data.filter(d => d.type === "art");

    const refs = {
        song: document.getElementsByClassName("song"),
        art: document.getElementsByClassName("art"),
    }

    const [ sectionSelected, setSectionSelected ] = useState<"song" | "art">("song");
    const [ dataSelected, setDataSelected ] = useState(0);

    useEffect(() => {
        (refs[sectionSelected][0] as any).focus();
    }, []);

    function handleChangeSection(dir: "up" | "down" | "left" | "right") {
        let selected = dataSelected;

        switch(dir) {
            case "up":
                (refs.song[0] as any).focus();
                setSectionSelected("song");
                setDataSelected(0);
                break;
                
            case "down":
                (refs.art[0] as any).focus();
                setSectionSelected("art");
                setDataSelected(0);
                break;

            case "left":
                if(dataSelected > 0) {
                    selected--;
                    setDataSelected(selected);

                    (refs[sectionSelected][selected] as any).focus();
                }

                break;

            case "right":
                if(dataSelected < ( refs[sectionSelected].length - 1 )) {
                    selected++;
                    setDataSelected(selected);

                    (refs[sectionSelected][selected] as any).focus();
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
            <Header/>

            <section className="px-8 flex flex-col gap-4 w-full">
                <Title>Músicas</Title>

                <div className="w-full flex items-center gap-5">
                    {
                        songsData.map((d, k) => (
                            <CardButton className="song focus:outline-none focus:ring-4 ring-orange-500" key={k} onClick={() => router.push(`/view/player/${d.id}`)}>
                                {d.name}
                            </CardButton>
                        ))
                    }
                </div>
            </section>

            <section className="px-8 flex flex-col gap-4 w-full">
                <Title>Artes</Title>

                <div className="w-full flex items-center gap-5">
                    {
                        artsData.map((a, k) => (
                            <CardButton className="art focus:outline-none focus:ring-4 ring-orange-500" key={k} onClick={() => router.push(`/view/art/${a.id}`)}>
                                {a.name}
                            </CardButton>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}
 
export default App;