"use client"

import { HTMLAttributes } from "react";
import CardButton from "./CardButton";
import Title from "./Title";
import { TData } from "@/lib/data";
import router from "next/router";
import { twMerge as tw } from "tailwind-merge"
import { useRouter } from "next/navigation";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    title: string
    data: TData[]
    route: string
    type: string
}

const Section = ({ title, data, route, type, ...props }: SectionProps) => {
    const router = useRouter();

    return (
        <section className={tw("px-8 flex flex-col gap-4 w-full", props.className)} { ...props }>
            <Title>{ title }</Title>

            <div className="w-full flex items-center gap-5 overflow-x-auto p-2">
                {
                    data.map((d, k) => (
                        <CardButton
                            className={type + " outline-none focus:ring-4 ring-orange-500 transition-all duration-300"}
                            key={k}
                            onClick={() => router.push(`${route}${d.id}`)}
                            // onClick={() => router.push(`/view/player/${d.id}`)}
                        >
                            {d.name}
                        </CardButton>
                    ))
                }
            </div>
        </section>
    );
}
 
export default Section;