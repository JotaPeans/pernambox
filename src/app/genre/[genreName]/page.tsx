"use client"

import { useEffect, useRef, useState } from "react";

import handleChangeSection from "@/lib/functions/handleChangeSection";
import BackButton from "@/app/components/BackButton";
import Section from "@/app/components/Section";
import useKey from "@/hooks/useKey";
import { singers as singersData, musicGenres } from "@/lib/data";
import { Dirs } from "@/lib/types";
import Title from "@/app/components/Title";

const Genre = ({ params }: { params: { genreName: string } }) => {
    const singers = singersData.filter(s => s.genre === params.genreName);
    const musicGenre = musicGenres.find(m => m.name === params.genreName);

    const refs = typeof document !== "undefined" ? {
        back: document.getElementsByClassName("back"),
        songs: document.getElementsByClassName("singers"),
    } : {
        back: [],
        songs: [],
    }

    const refKeys = Object.keys(refs);

    const [ sectionSelected, setSectionSelected ] = useState("songs");
    const dataSelected = useRef(0);

    useEffect(() => {
        (refs[sectionSelected as keyof typeof refs][0] as any).focus();
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
        <main className="w-full min-h-full bg-background flex flex-col justify-center gap-10 pt-5 p-12 z-0">
            <BackButton backUrl="/" className="bg-custom-green"/>

            <Title className="text-center text-4xl">{ musicGenre?.name }</Title>

            <section className="text-justify">
                <img src={musicGenre?.image} alt={musicGenre?.name} className="h-56 rounded-lg float-left mr-5 mb-2"/>

                {musicGenre?.about.map((txt, k) => (
                    <p key={k} className="text-justify font-medium text-zinc-600 mb-3">{txt}</p>
                ))}
            </section>

            <Section title="Artistas" data={singers} route="/singer/" type="singers"/>
        </main>
    );
}
 
export default Genre;