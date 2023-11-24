"use client"

import { HTMLAttributes } from "react";
import Title from "./Title";
import { GenresProps, SingersArtitsProps, SongArtProps } from "@/lib/dataset";
import { twMerge as tw } from "tailwind-merge"
import { useRouter } from "next/navigation";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    title: string
    data: SongArtProps[] | SingersArtitsProps[] | GenresProps[]
    route: string
    action?: (data: SongArtProps) => void
    type: string
    overflow?: "scroll" | "wrap"
}

const Section = ({ title, data, route, action, type, overflow = "scroll", ...props }: SectionProps) => {
    const router = useRouter();

    return (
        <section className={tw("flex flex-col gap-4 w-full", props.className)} { ...props }>
            <Title className="text-orange-500">{ title }</Title>

            <div data-overflow={overflow} className="w-full flex items-start gap-5 data-[overflow='scroll']:overflow-x-auto data-[overflow='wrap']:flex-wrap p-2">
                {
                    data.map((d, k) => (
                        <div key={k} className="max-w-[14rem] flex flex-col gap-3 justify-center items-center">
                            <button 
                                className={type + " outline-none focus:ring-4 ring-offset-4 ring-custom-green transition-all duration-300 rounded-lg overflow-clip"}
                                onClick={() => {
                                    if(action) action(d as any);
                                    else router.push(`${route}${d.name.split(" ").join("-").toLowerCase()}`)
                                }}
                            >
                                { d.image && <img src={d.image} alt={d.name} className="min-w-[14rem] min-h-[14rem] max-h-[14rem] h-full object-cover object-center rounded-xl"/> }
                            </button>

                            <h5 className="text-custom-blue font-semibold text-xl capitalize text-center">{ d.name }</h5>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
 
export default Section;