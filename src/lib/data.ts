type TData = {
    id: number
    name: string
    type: "song" | "art"
    url?: string
    image?: string
    author: string
}

const data: TData[] = [
    {
        id: 1,
        name: "Song to you",
        type: "song",
        url: "https://www.youtube.com/watch?v=3PLOb1c3nUI&ab_channel=VictoriousVEVO",
        author: "Victoria Justice"
    },
    {
        id: 2,
        name: "Stuck",
        type: "song",
        url: "https://www.youtube.com/watch?v=lCWUXiMhQ70&ab_channel=BigTimeRush-Topic",
        author: "Big Time Rush"
    },
    {
        id: 3,
        name: "Painel Frei Caneca",
        type: "art",
        url: "https://www.aponte.com.br/site/wp-content/uploads/2016/02/16592427410_46d006df11_o-1024x683.jpg",
        author: "Cícero Dias"
    },
]

export default data;