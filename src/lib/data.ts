export type SongProps = {
    name: string
    author: string
    url: string
    image?: string
}

export const songs: SongProps[] = [
    {
        name: "Sam Day Baby",
        author: "NoCopyrightSounds",
        url: "https://www.youtube.com/watch?v=e5DIBb6A02k&ab_channel=NoCopyrightSounds",
        image: "https://t3.ftcdn.net/jpg/04/79/95/36/360_F_479953686_TXbuY02ZzcLXf517UBPS7EAglP6Kb1D3.jpg"
    },
    {
        name: "Joxion RPM",
        author: "NoCopyrightSounds",
        url: "https://www.youtube.com/watch?v=4qLPHVOR8po&ab_channel=NCSArcade",
        image: "https://t3.ftcdn.net/jpg/04/79/95/36/360_F_479953686_TXbuY02ZzcLXf517UBPS7EAglP6Kb1D3.jpg"
    },
    {
        name: "4URA and VinDon",
        author: "NoCopyrightSounds",
        url: "https://www.youtube.com/watch?v=tlnIQoxxrhY&ab_channel=NoCopyrightSounds",
        image: "https://t3.ftcdn.net/jpg/04/79/95/36/360_F_479953686_TXbuY02ZzcLXf517UBPS7EAglP6Kb1D3.jpg"
    },
]

export const singers = [
    {
        name: "NoCopyrightSounds",
        image: "https://wallpaperset.com/w/full/6/8/7/393625.jpg",
        about: [
            "NCS (NoCopyrightSounds) is a UK-based record label, YouTube channel, and cross-platform creative and music community specialising in releasing and promoting free-to-use electronic music, and dedicated to providing opportunity for the next generation of artist and creators. NCS started as a YouTube channel in 2011 by Billy Woodford, who identified an opportunity to showcase music & artists he loved while simultaneously providing a comprehensive catalogue of contemporary electronic music for creators.",
        ]
    }
]