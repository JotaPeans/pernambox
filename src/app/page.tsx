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
    const [ serialData, setSerialData ] = useState<string>();

    const songs = data.filter(d => d.type === "song");
    const arts = data.filter(d => d.type === "art");
    
    
    // useEffect(() => {
    //     socket.on("data", data => {
    //         setData(data);
    //     });
    // }, []);

    useKey("o", e => console.log(e.key))

    return (
        <main className="flex flex-col gap-10 w-full min-h-screen bg-zinc-200">
            <Header/>

            <section className="px-8 flex flex-col gap-4 w-full">
                <Title>Músicas</Title>

                <div className="w-full flex items-center gap-5">
                    {
                        songs.map((d, k) => (
                            <CardButton key={k} onClick={() => router.push(`/player/${d.id}`)}>
                                {d.name}
                            </CardButton>
                        ))
                    }
                </div>
            </section>

            <section className="px-8 flex flex-col gap-4 w-full">
                <Title>Artes</Title>

                <div className="w-full flex items-center gap-5">
                    <CardButton></CardButton>
                </div>
            </section>
        </main>
    );
}
 
export default App;