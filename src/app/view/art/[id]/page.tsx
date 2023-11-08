// "use client"

// import { useRouter } from "next/navigation";
// import Image from "next/image";

// import data from "@/lib/data";
// import Button from "@/app/components/Button";
// import { ChevronDown, ChevronUp, ChevronLeft, Play, Pause } from "lucide-react";
// import Title from "@/app/components/Title";
// import useKey from "@/hooks/useKey";

const Art = ({ params }: { params: { id: string } }) => {
    // const router = useRouter();
    // const artData = data.find(d => d.id === parseInt(params.id) && d.type === "art");

    // if(!artData) router.push("/");

    // useKey("a", () => router.push("/")); // tecla pra ir pra direita
        
    return (
        <main className="w-full min-h-screen bg-zinc-200 flex flex-col items-center justify-center gap-5">
            {/* <Title className="text-5xl text-zinc-700">{artData?.name}</Title>
            <h2 className="text-lg font-semibold text-zinc-600">Por: {artData?.author}</h2>

            <div className="flex flex-col items-center justify-center gap-5 p-5 bg-white rounded-2xl w-1/2">
                <img src={artData?.url} alt={artData?.name} className="w-full rounded-lg"/>
            </div>

            <Button onClick={() => router.push("/")} className="gap-2 pl-7">
                <ChevronLeft strokeWidth={2.2}/>
                Voltar
            </Button> */}
        </main>
    );
}
 
export default Art;