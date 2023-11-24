"use client"

import { useEffect, useRef, useState } from "react";

import handleChangeSection from "@/lib/functions/handleChangeSection";
import BackButton from "@/app/components/BackButton";
import Section from "@/app/components/Section";
import useKey from "@/hooks/useKey";
import { artists as artistsData, artGenres } from "@/lib/dataset";
import { Dirs } from "@/lib/types";
import Title from "@/app/components/Title";

const Piece = ({ params }: { params: { pieceName: string } }) => {
    const artists = artistsData.filter(s => s.genre === params.pieceName);
    const artGenre = artGenres.find(m => m.name === params.pieceName);

    const refs = typeof document !== "undefined" ? {
        back: document.getElementsByClassName("back"),
        artists: document.getElementsByClassName("artists"),
    } : {
        back: [],
        artists: [],
    }

    const refKeys = Object.keys(refs);

    const [ sectionSelected, setSectionSelected ] = useState("artists");
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
        <main className="w-full min-h-full bg-background flex flex-col justify-center gap-10 pt-5 p-12 z-0">
            <BackButton backUrl="/" className="bg-custom-green ring-offset-2"/>

            <Title className="text-center text-4xl">{ artGenre?.name }</Title>

            <section className="text-justify">
                <img src={ artGenre?.image } alt={ artGenre?.name } className="h-56 rounded-lg float-left mr-5 mb-2"/>

                { artGenre?.about.map((txt, k) => (
                    <p key={k} className="text-justify font-medium text-zinc-600 mb-3">{txt}</p>
                )) }
            </section>

            <Section title="Artistas" data={artists} route="/artist/" type="artists"/>
        </main>
    );
}
 
export default Piece;