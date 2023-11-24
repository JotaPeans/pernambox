"use client"

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import handleChangeSection from "@/lib/functions/handleChangeSection";
import { arts as artsData, artists, SongArtProps } from "@/lib/dataset";
import { Dirs } from "@/lib/types";
import BackButton from "@/app/components/BackButton";
import Section from "@/app/components/Section";
import useKey from "@/hooks/useKey";
import Title from "@/app/components/Title";

const Artist = ({ params }: { params: { artistName: string } }) => {
    const arts = artsData.filter(s => s.author.toLowerCase() === params.artistName.toLowerCase());
    const artist = artists.find(s => s.name.toLowerCase() === params.artistName.toLowerCase());

    const [ showArt, setShowArt ] = useState(false);
    const [ artData, setArtData ] = useState<SongArtProps | null>(null);
    const artBySubAuthor = artData?.by?.split("de ")[1].split(" ")[0]

    const refs = typeof document !== "undefined" ? {
        back: document.getElementsByClassName("back"),
        arts: document.getElementsByClassName("arts"),
    } : {
        back: [],
        arts: [],
    }

    const refKeys = Object.keys(refs);

    const [ sectionSelected, setSectionSelected ] = useState("arts");
    const dataSelected = useRef(0);

    useEffect(() => {
        (refs[sectionSelected as keyof typeof refs][0] as any).focus();
    }, []);
    
    function handleChangeDataSelected(n: number) {
        dataSelected.current = n;
    }

    function handleKey(dir: Dirs) {
        if(artData && dir === "left") {
            setShowArt(false);
            setTimeout(() => {
                setArtData(null);
            }, 200);

            return
        }
        handleChangeSection(dir, refKeys, sectionSelected, setSectionSelected, refs, dataSelected.current, handleChangeDataSelected)
    }

    function handleClickImage(data: SongArtProps) {
        setArtData(data);
        setShowArt(true);
    }

    useKey("w", () => handleKey("up"));
    useKey("s", () => handleKey("down"));

    useKey("a", () => handleKey("left"));
    useKey("d", () => handleKey("right"));

    return (
        <>
            <div data-show={showArt} className="data-[show=false]:opacity-0 data-[show=false]:pointer-events-none transition-all fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm z-[9999] flex items-center justify-center p-10 select-none">
                <div className="bg-background rounded-2xl flex flex-col gap-3 p-4">
                    <X className="ml-auto cursor-pointer" onClick={() => {
                        setShowArt(false);
                        setTimeout(() => {
                            setArtData(null);
                        }, 200);
                    }}/>

                    <img className="rounded-lg" src={artData?.image} alt={artData?.name} />

                    <a className="text-center font-medium" href={artData?.byUrl} target="_blank" rel="noopener noreferrer">
                        Imagem de <span className="text-custom-green font-semibold">{ artBySubAuthor }</span> { artBySubAuthor !== "Freepik" && "no Freepik" }
                    </a>
                </div>
            </div>

            <main className="w-full min-h-full bg-background flex flex-col justify-center gap-10 pt-5 p-12 z-0">
                <BackButton backUrl={`/piece/${artist?.genre}`} className="bg-custom-green ring-offset-2"/>

                <Title className="text-center text-4xl">{ artist?.name }</Title>

                <section className="text-justify">
                    <img src={ artist?.image } alt={ artist?.name } className="h-56 object-cover object-center rounded-lg float-left mr-5 mb-2"/>

                    { artist?.about.map((txt, k) => (
                        <p key={k} className="text-justify font-medium text-zinc-600 mb-3">{txt}</p>
                    )) }
                </section>

                <Section data={arts} title="Conheça as obras" type="arts" route="" action={handleClickImage} overflow="wrap"></Section>
            </main>
        </>
    );
}
 
export default Artist;