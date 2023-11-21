"use client"

import { useEffect, useRef, useState } from "react";
import handleChangeSection from "@/lib/functions/handleChangeSection";

import { songs as songsData, singers } from "@/lib/data";
import { Dirs } from "@/lib/types";
import BackButton from "@/app/components/BackButton";
import Section from "@/app/components/Section";
import useKey from "@/hooks/useKey";
import Title from "@/app/components/Title";

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
            <BackButton backUrl="/" className="bg-custom-green ring-offset-2"/>

            <Title className="text-center text-4xl">{ singer?.name }</Title>

            <section className="text-justify">
                <img src={ singer?.image } alt={ singer?.name } className="h-56 rounded-lg float-left mr-5 mb-2"/>

                { singer?.about.map((txt, k) => (
                    <p key={k} className="text-justify font-medium text-zinc-600 mb-3">{txt}</p>
                )) }
            </section>

            <Section data={songs} title="Conheça as músicas" type="song" route="/view/player/" overflow="wrap"></Section>
        </main>
    );
}
 
export default Singer;