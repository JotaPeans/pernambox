"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { OnProgressProps } from "react-player/base";
import ReactPlayer from "react-player"


import { songs, singers } from "@/lib/dataset";
import useKey from "@/hooks/useKey";
import BackButton from "@/app/components/BackButton";
import Button from "@/app/components/Button";

const Player = ({ params }: { params: { songName: string } }) => {
    const router = useRouter();
    const songData = songs.find(d => d.name.toLowerCase() === params.songName.split("-").join(" "));
    const singer = singers.find(s => s.name === songData?.author)

    if(!songData) router.push("/");

    const [ showPlayer, setShowPlayer ] = useState(false);
    const [ volume, setVolume ] = useState(1);
    const [ playing, setPlaying ] = useState(false);

    const currentTime = useRef<HTMLDivElement>(null);
    const currentTimeText = useRef<HTMLParagraphElement>(null);
    const totalTimeText = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        setShowPlayer(true);
    }, []);

    function handleVolume(dir: "up" | "down") {
        switch(dir) {
            case "up":
                setVolume(volume => volume < 1 ? parseFloat((volume += 0.05).toFixed(2)) : volume);
                break;
            case "down":
                setVolume(volume => volume > 0 ? parseFloat((volume -= 0.05).toFixed(2)) : volume);
                break;
        }
    }

    function handleProgress(progress: OnProgressProps) {
        let time = new Date();
        time.setHours(0, 0, 0, 0);
        time.setTime(time.getTime() + (progress.playedSeconds * 1000));

        let timeString = time.toLocaleTimeString("pt-BR", {
            minute: "2-digit",
            second: "2-digit"
        });

        currentTimeText.current!.innerText = timeString;
        progress.played !== 0 ? currentTime.current!.style.width = `${progress.played * 100}%` : null;
    }

    function handleDuration(duration: number) {
        let time = new Date();
        time.setHours(0, 0, 0, 0);

        time.setTime(time.getTime() + (duration * 1000));

        let timeString = time.toLocaleTimeString("pt-BR", {
            minute: "2-digit",
            second: "2-digit"
        });

        totalTimeText.current!.innerText = timeString
    }

    useKey("w", () => handleVolume("up")); // tecla pra ir pra cima
    useKey("s", () => handleVolume("down")); // tecla pra ir pra baixo

    useKey("a", () => router.push(`/singer/${songData?.author}`)); // tecla pra ir pra direita
    useKey("Enter", () => setPlaying(playing => !playing)); // tecla pra ir pra esquerda

    return (
        <main className="w-full min-h-full bg-background flex flex-col justify-center gap-10 pt-5 p-12 z-0">
            
            <div className="flex items-center gap-2">
                <BackButton className="bg-custom-green" backUrl={`/singer/${songData?.author}`} keyToBack='a'/>
                <p className="font-medium text-zinc-600">Botão da esquerda para voltar!</p>
            </div>

            <section className="relative flex items-center justify-center gap-5 w-full">
                <div className="flex max-w-fit flex-col items-center justify-center gap-5 p-5 shadow-lg bg-white/30 rounded-2xl">
                    <div className="rounded-xl overflow-hidden hidden">
                        { showPlayer && currentTime.current ? <ReactPlayer
                            url={songData?.url}
                            volume={volume}
                            playing={playing}
                            onEnded={() => setPlaying(playing => !playing)}
                            onProgress={handleProgress}
                            onDuration={handleDuration}
                        /> : null }
                    </div>

                    <img src={songData?.image} alt={songData?.name} className="rounded-lg"/>

                    <div className="flex flex-col w-full">
                        <h1 className="font-semibold text-zinc-700 text-lg">{songData?.name}</h1>
                        <h1 className="font-semibold text-zinc-400 text-xs">{songData?.author}</h1>
                    </div>
                    
                    <div className="flex flex-col items-center gap-1 w-full">
                        <div className="w-full h-2 bg-zinc-200 shadow-lg rounded-full flex items-center">
                            <span className="bg-orange-500 rounded-full h-full transition-all flex items-center justify-end relative" ref={currentTime}>
                                <span className="min-w-[12px] min-h-[12px] bg-zinc-700 rounded-full absolute -right-1.5"></span>
                            </span>
                        </div>
                        
                        <div className="flex items-center justify-between w-full">
                            <p className="font-semibold text-zinc-600" ref={currentTimeText}>00:00</p>

                            <p className="font-semibold text-zinc-600" ref={totalTimeText}>00:00</p>
                        </div>
                    </div>

                    <Button onClick={() => setPlaying(playing => !playing)}>
                        { !playing ? <Play/> : <Pause/> }
                    </Button>
                </div>

                <div className="absolute right-0 flex items-center justify-center gap-2">
                    <div className="text-zinc-600 font-medium text-lg flex flex-col items-end gap-0">
                        <p>Volume</p>
                        <span className="text-orange-500">{(volume * 100).toFixed(0)}%</span>
                    </div>

                    <div className="w-2 h-[116px] bg-white shadow-lg rounded-full flex flex-col justify-end items-center">
                        <div className="bg-orange-500 rounded-full w-full transition-all" style={{
                            height: `${volume * 100}%`
                        }}></div>
                    </div>
                </div>
            </section>

            <section className="font-semibold text-zinc-600">
                {singer?.about.map((txt, k) => (
                    <p key={k} className="text-justify">{txt}</p>
                ))}
            </section>

        </main>
    );
}
 
export default Player;