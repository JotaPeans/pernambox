"use client"

import BackButton from "@/app/components/BackButton";
import Section from "@/app/components/Section";
import useKey from "@/hooks/useKey";
import { songs as songsData, singers } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

const Singer = ({ params }: { params: { singerName: string } }) => {
    const songs = songsData.filter(s => s.author.toLowerCase() === params.singerName.toLowerCase());
    const singer = singers.find(s => s.name.toLowerCase() === params.singerName.toLowerCase());

    const refs = typeof document !== "undefined" ? {
        back: document.getElementsByClassName("back"),
        songs: document.getElementsByClassName("song"),
    } : {
        back: [],
        songs: [],
    }

    const refKeys = Object.keys(refs);

    const [ sectionSelected, setSectionSelected ] = useState<keyof typeof refs>("songs");
    const dataSelected = useRef(0);

    useEffect(() => {
        (refs[sectionSelected][0] as any).focus();
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
        <main className="w-full min-h-full bg-zinc-200 flex flex-col justify-center gap-10 pt-5 p-12 z-0">
            <BackButton backUrl="/"/>

            <section className="text-justify">
                <img src={singer?.image} alt={singer?.name} className="h-56 rounded-lg float-left mr-5 mb-2"/>

                {singer?.about.map((txt, k) => (
                    <p key={k} className="text-justify font-medium text-zinc-600">{txt}</p>
                ))}
            </section>

            <Section data={songs} title="Conheça as músicas" type="song" route="/view/player/" overflow="wrap"></Section>
        </main>
    );
}
 
export default Singer;