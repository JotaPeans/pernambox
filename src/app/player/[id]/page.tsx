"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player"

import data from "@/lib/data";
import Button from "@/app/components/Button";
import { ChevronDown, ChevronUp, ChevronLeft, Play, Pause } from "lucide-react";

const Player = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const songData = data.find(d => d.id === parseInt(params.id));

    const [ showPlayer, setShowPlayer ] = useState(false);
    const [ volume, setVolume ] = useState(1);
    const [ playing, setPlaying ] = useState(false);

    useEffect(() => {
        setShowPlayer(true);
    }, []);

    return (
        <main className="w-full min-h-screen bg-zinc-200 flex flex-col items-center justify-center gap-5">
            <div className="flex items-center justify-center gap-5">
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
            </div>

            <Button onClick={() => router.push("/")} className="gap-2 pl-7">
                <ChevronLeft strokeWidth={2.2}/>
                Voltar
            </Button>
        </main>
    );
}
 
export default Player;