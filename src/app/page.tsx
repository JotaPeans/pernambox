"use client"

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation"
// import * as io from "socket.io-client";

import Button from "./components/Button";
import Header from "./components/Header";
import Title from "./components/Title";
import CardButton from "./components/CardButton";

import data from "@/lib/data";
import useKey from "@/hooks/useKey";

const App = () => {
    const router = useRouter();
    // const [ serialData, setSerialData ] = useState<string>();
    const songs = data.filter(d => d.type === "song");
    const arts = data.filter(d => d.type === "art");
    
    // useEffect(() => {
    //     socket.on("data", data => {
    //         setData(data);
    //     });
    // }, []);

    function handleChangeSection(dir: "up" | "down") {
        const songs = document.getElementsByClassName("song");
        const arts = document.getElementsByClassName("art");
        
        switch(dir) {
            case "up":
                (songs[0] as any).focus();
                break;
                
            case "down":
                (arts[0] as any).focus();
                break;
        }
    }

    useKey("w", () => handleChangeSection("up")); // tecla pra ir pra cima
    useKey("s", () => handleChangeSection("down")); // tecla pra ir pra baixo

    return (
        <main className="flex flex-col gap-10 w-full min-h-screen bg-zinc-200">
            <Header/>

            <section className="px-8 flex flex-col gap-4 w-full">
                <Title>Músicas</Title>

                <div className="w-full flex items-center gap-5">
                    {
                        songs.map((d, k) => (
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
                        arts.map((a, k) => (
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