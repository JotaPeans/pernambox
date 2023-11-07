"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player"

import data from "@/lib/data";
import Button from "@/app/components/Button";
import { ChevronDown, ChevronUp, ChevronLeft, Play, Pause } from "lucide-react";
import Title from "@/app/components/Title";

import useKey from "@/hooks/useKey";

const Player = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const songData = data.find(d => d.id === parseInt(params.id) && d.type === "song");

    if(!songData) router.push("/")

    const [ showPlayer, setShowPlayer ] = useState(false);
    const [ volume, setVolume ] = useState(1);
    const [ playing, setPlaying ] = useState(false);

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

    useKey("w", () => handleVolume("up")); // tecla pra ir pra cima
    useKey("s", () => handleVolume("down")); // tecla pra ir pra baixo

    useKey("a", () => router.push("/")); // tecla pra ir pra direita
    useKey("Enter", () => setPlaying(playing => !playing)); // tecla pra ir pra esquerda

    return (
        <main className="w-full min-h-screen bg-zinc-200 flex items-center justify-center gap-10">

            <div className="flex flex-col items-center justify-center gap-5">
                <Title className="text-4xl">{songData?.name}</Title>
                <h2 className="text-lg font-semibold text-zinc-600">Por: {songData?.author}</h2>

                <div className="flex flex-col items-center justify-center gap-5 p-5 bg-white rounded-2xl">
                    <div className="rounded-xl overflow-hidden">
                        { showPlayer && <ReactPlayer
                            url={songData?.url}
                            volume={volume}
                            playing={playing}
                        /> }
                    </div>

                    <Button onClick={() => setPlaying(playing => !playing)}>
                        { !playing ? <Play/> : <Pause/> }
                    </Button>
                </div>

                <Button onClick={() => router.push("/")} className="gap-2 pl-7">
                    <ChevronLeft strokeWidth={2.2}/>
                    Voltar
                </Button>
            </div>

            <div className="flex justify-center items-center gap-5">
                <div className="flex flex-col items-center justify-center gap-5">
                    <Button disabled={volume === 1} onClick={() => setVolume(volume => parseFloat((volume += 0.05).toFixed(2)))} className="w-12 h-12 p-2">
                        <ChevronUp strokeWidth={2.2}/>
                    </Button>
                    <Button disabled={volume === 0} onClick={() => setVolume(volume => parseFloat((volume -= 0.05).toFixed(2)))} className="w-12 h-12 p-2">
                        <ChevronDown strokeWidth={2.2}/>
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-5">
                    <div className="w-2 h-[116px] bg-white shadow-lg rounded-full flex flex-col justify-end items-center">
                        <div className="bg-orange-500 rounded-full w-full transition-all" style={{
                            height: `${volume * 100}%`
                        }}></div>
                    </div>

                    <p className="text-zinc-600 font-medium text-lg">Volume <span className="text-orange-500">{(volume * 100).toFixed(0)}%</span></p>
                </div>
            </div>

        </main>
    );
}
 
export default Player;