export type GenresNameProps = "eletronica";

export type GenresProps = {
    name: GenresNameProps
    about: string[]
    image: string
}

export type SongProps = {
    name: string
    author: string
    genre: GenresNameProps
    url: string
    image?: string
}

export type SingersProps = {
    name: string
    about: string[]
    image: string
    genre: GenresNameProps
}

export const songs: SongProps[] = [
    {
        name: "Sam Day Baby",
        author: "NoCopyrightSounds", 
        genre: "eletronica",
        url: "https://www.youtube.com/watch?v=e5DIBb6A02k&ab_channel=NoCopyrightSounds",
        image: "https://t3.ftcdn.net/jpg/04/79/95/36/360_F_479953686_TXbuY02ZzcLXf517UBPS7EAglP6Kb1D3.jpg"
    },
    {
        name: "Joxion RPM",
        author: "NoCopyrightSounds",
        genre: "eletronica",
        url: "https://www.youtube.com/watch?v=4qLPHVOR8po&ab_channel=NCSArcade",
        image: "https://t3.ftcdn.net/jpg/04/79/95/36/360_F_479953686_TXbuY02ZzcLXf517UBPS7EAglP6Kb1D3.jpg"
    },
    {
        name: "4URA and VinDon",
        author: "NoCopyrightSounds",
        genre: "eletronica",
        url: "https://www.youtube.com/watch?v=tlnIQoxxrhY&ab_channel=NoCopyrightSounds",
        image: "https://t3.ftcdn.net/jpg/04/79/95/36/360_F_479953686_TXbuY02ZzcLXf517UBPS7EAglP6Kb1D3.jpg"
    },
]

export const musicGenres: GenresProps[] = [
    {
        name: "eletronica",
        image: "https://img.freepik.com/fotos-premium/audio-de-dj-player-mixando-musica-eletronica-em-uma-festa-de-boate-criado-com-tecnologia-generative-ai_67092-4068.jpg",
        about: [
            "A música eletrônica é um dos estilos musicais mais populares entre os jovens de todo o mundo e apesar de muitas pessoas acreditarem que esse ritmo tão presente nas baladas e nas festas de todos os gostos é uma criação de poucos anos atrás, a música eletrônica passou a ganhar forma há bastante tempo.",
            "O ritmo é produzido com o auxílio de computadores, gravadores digitais, softwares e sintetizadores. Essa diversidade de opções oferece uma grande possibilidade de sons capaz de agradar pessoas de todos os estilos, o que significa que a música eletrônica pode alcançar tribos de gostos e atitudes bem diferentes."
        ],
    },
]

export const singers: SingersProps[] = [
    {
        name: "NoCopyrightSounds",
        genre: "eletronica",
        image: "https://wallpaperset.com/w/full/6/8/7/393625.jpg",
        about: [
            "NCS (NoCopyrightSounds) is a UK-based record label, YouTube channel, and cross-platform creative and music community specialising in releasing and promoting free-to-use electronic music, and dedicated to providing opportunity for the next generation of artist and creators. NCS started as a YouTube channel in 2011 by Billy Woodford, who identified an opportunity to showcase music & artists he loved while simultaneously providing a comprehensive catalogue of contemporary electronic music for creators.",
        ]
    }
]