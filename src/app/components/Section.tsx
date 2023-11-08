"use client"

import { HTMLAttributes } from "react";
import CardButton from "./CardButton";
import Title from "./Title";
import { SongProps, singers } from "@/lib/data";
import { twMerge as tw } from "tailwind-merge"
import { useRouter } from "next/navigation";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    title: string
    data: SongProps[] | typeof singers
    route: string
    type: string
    overflow?: "scroll" | "wrap"
}

const Section = ({ title, data, route, type, overflow = "scroll", ...props }: SectionProps) => {
    const router = useRouter();

    return (
        <section className={tw("flex flex-col gap-4 w-full", props.className)} { ...props }>
            <Title>{ title }</Title>

            <div data-overflow={overflow} className="w-full flex items-center gap-5 data-[overflow='scroll']:overflow-x-auto data-[overflow='wrap']:flex-wrap p-2">
                {
                    data.map((d, k) => (
                        <CardButton
                            name={d.name}
                            img={d.image}
                            className={type + " outline-none focus:ring-4 ring-orange-500 transition-all duration-300"}
                            key={k}
                            onClick={() => router.push(`${route}${d.name.split(" ").join("-").toLowerCase()}`)}
                        />
                    ))
                }
            </div>
        </section>
    );
}
 
export default Section;