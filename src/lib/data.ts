type TData = {
    id: number
    name: string
    type: "song" | "art"
    url?: string
    image?: string
}

const data: TData[] = [
    {
        id: 1,
        name: "Song to you",
        type: "song",
        url: "https://www.youtube.com/watch?v=3PLOb1c3nUI&ab_channel=VictoriousVEVO"
    }
]

export default data;