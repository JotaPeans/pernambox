export type SongGenresNameProps = "eletronica";
export type ArtGenresNameProps = "gravura" | "pintura" | "escultura";

export type GenresProps = {
    name: SongGenresNameProps | ArtGenresNameProps
    about: string[]
    image: string
}

export type SongArtProps = {
    name: string
    author: string
    genre: SongGenresNameProps | ArtGenresNameProps
    url?: string
    image?: string
    by?: string
    byUrl?: string
}

export type SingersArtitsProps = {
    name: string
    about: string[]
    image: string
    genre: SongGenresNameProps | ArtGenresNameProps
}


export const songs: SongArtProps[] = [
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

export const singers: SingersArtitsProps[] = [
    {
        name: "NoCopyrightSounds",
        genre: "eletronica",
        image: "https://wallpaperset.com/w/full/6/8/7/393625.jpg",
        about: [
            "NCS (NoCopyrightSounds) is a UK-based record label, YouTube channel, and cross-platform creative and music community specialising in releasing and promoting free-to-use electronic music, and dedicated to providing opportunity for the next generation of artist and creators. NCS started as a YouTube channel in 2011 by Billy Woodford, who identified an opportunity to showcase music & artists he loved while simultaneously providing a comprehensive catalogue of contemporary electronic music for creators.",
        ]
    }
]

export const arts: SongArtProps[] = [
    {
        name: "Ornamento Policromo",
        author: "FreePik-Gravura", 
        genre: "gravura",
        image: "https://img.freepik.com/fotos-gratis/ornamento-policromo_53876-71292.jpg?w=826&t=st=1700758716~exp=1700759316~hmac=d0c772bb6458ebd57cef7a4a644296c4a740460b149ac8cbcb9c4a2943656098",
        by: "Imagem de rawpixel.com no Freepik",
        byUrl: "br.freepik.com/fotos-gratis/ornamento-policromo_3686801.htm#query=gravura%20arte&position=1&from_view=search&track=ais&uuid=c2db94f1-bde2-4a7c-9765-d86c9ee3d260"
    },
    {
        name: "Athene Maculate",
        author: "FreePik-Gravura", 
        genre: "gravura",
        image: "https://img.freepik.com/fotos-gratis/coruja-malhada-athene-maculate-ilustrada-por-elizabeth-gould_53876-65161.jpg?w=740&t=st=1700760472~exp=1700761072~hmac=01b783fd732594e61f4a0295fe3406c52104434694880b9aa0c7d6a46a3872d9",
        by: "Imagem de rawpixel.com no Freepik",
        byUrl: "br.freepik.com/fotos-gratis/ornamento-policromo_3686801.htm#query=gravura%20arte&position=1&from_view=search&track=ais&uuid=c2db94f1-bde2-4a7c-9765-d86c9ee3d260"
    },
    {
        name: "Rosa Gravada",
        author: "FreePik-Gravura", 
        genre: "gravura",
        image: "https://img.freepik.com/fotos-gratis/papel-de-parede-rosa-gravado-com-flores-desenhadas-a-mao-em-bw_53876-147805.jpg?w=1380&t=st=1700760572~exp=1700761172~hmac=88fadda8b660b8cb6fb576ccb46ceaba7d399c5f39884046d55156acf6a5baab",
        by: "Imagem de rawpixel.com no Freepik",
        byUrl: "br.freepik.com/fotos-gratis/ornamento-policromo_3686801.htm#query=gravura%20arte&position=1&from_view=search&track=ais&uuid=c2db94f1-bde2-4a7c-9765-d86c9ee3d260"
    },

    {
        name: "Cenário Abstrato",
        author: "FreePik-Pintura", 
        genre: "pintura",
        image: "https://img.freepik.com/fotos-gratis/cenario-abstrato-com-cores-vibrantes-de-padrao-de-ondas-multicoloridas-fluindo-suavemente-geradas-pela-inteligencia-artificial_24640-131097.jpg?w=1380&t=st=1700761283~exp=1700761883~hmac=d2cbfacb748f43cfb1d04b4cc8ca80427ce2fe0d4761029a0324b5a33c65924e",
        by: "Imagem de stockgiu no Freepik",
        byUrl: "https://br.freepik.com/fotos-gratis/cenario-abstrato-com-cores-vibrantes-de-padrao-de-ondas-multicoloridas-fluindo-suavemente-geradas-pela-inteligencia-artificial_76317886.htm#query=pinturas&position=0&from_view=search&track=sph&uuid=e9958edc-3b2b-494b-9a64-462d82cf17a7"
    },
    {
        name: "Floresta em Aquarela",
        author: "FreePik-Pintura", 
        genre: "pintura",
        image: "https://img.freepik.com/vetores-gratis/paisagem-de-floresta-em-aquarela_52683-77215.jpg?w=1380&t=st=1700761434~exp=1700762034~hmac=d86ea39a556298c1437099c61530ae108975cd41c369a54379e56be360447adb",
        by: "Imagem de pikisuperstar no Freepik",
        byUrl: "https://br.freepik.com/vetores-gratis/paisagem-de-floresta-em-aquarela_20287827.htm?query=pinturas"
    },
    {
        name: "Jovem na Natureza",
        author: "FreePik-Pintura", 
        genre: "pintura",
        image: "https://img.freepik.com/fotos-gratis/jovem-na-natureza-exala-elegancia-e-beleza-gerada-por-ia_188544-30661.jpg?w=1380&t=st=1700761601~exp=1700762201~hmac=324e00a6d5207eb7fd963ba2bc331f8a6f79b63ee9d2f487ed2e78f1b78c1a3e",
        by: "Imagem de vecstock no Freepik",
        byUrl: "https://br.freepik.com/fotos-gratis/jovem-na-natureza-exala-elegancia-e-beleza-gerada-por-ia_42180318.htm#query=pessoa%20em%20realismo%20pintura&position=32&from_view=search&track=ais&uuid=0db63490-64e5-43e2-99b6-a59866652ea8"
    },

    {
        name: "Estátua de Mármore",
        author: "FreePik-Escultura", 
        genre: "escultura",
        image: "https://img.freepik.com/fotos-gratis/foto-em-tons-de-cinza-de-uma-estatua-de-marmore-de-uma-mulher-sob-as-luzes_181624-12177.jpg?w=1380&t=st=1700761810~exp=1700762410~hmac=bedb7724a5b12b12f7ba32f7f5c2516af51a1634f8ca608cb3b548ee645fbc2f",
        by: "Imagem de wirestock no Freepik",
        byUrl: "https://br.freepik.com/fotos-gratis/foto-em-tons-de-cinza-de-uma-estatua-de-marmore-de-uma-mulher-sob-as-luzes_9991795.htm#page=2&query=escultura%20arte&position=47&from_view=search&track=ais&uuid=99c787eb-cdb0-44cd-beab-69533d57e843"
    },
    {
        name: "Escultura Feminina",
        author: "FreePik-Escultura", 
        genre: "escultura",
        image: "https://img.freepik.com/fotos-gratis/escultura-feminina-nua-simbolo-de-beleza-e-sensualidade-gerada-por-ia_188544-13344.jpg?w=1380&t=st=1700761879~exp=1700762479~hmac=1769cd0541b47d95b36c8bca6144e1ccf28184859d81b9f02880c665d4c97d1d",
        by: "Imagem de vecstock no Freepik",
        byUrl: "https://br.freepik.com/fotos-gratis/escultura-feminina-nua-simbolo-de-beleza-e-sensualidade-gerada-por-ia_41147116.htm#page=3&query=escultura%20arte&position=8&from_view=search&track=ais&uuid=18dada9c-3527-469e-8127-210d94fc56b5"
    },
    {
        name: "Grego no Templo",
        author: "FreePik-Escultura", 
        genre: "escultura",
        image: "https://img.freepik.com/fotos-gratis/busto-grego-no-templo_23-2150719188.jpg?w=740&t=st=1700761945~exp=1700762545~hmac=d24a667612467a54e0714d729d4487b78a14307a7ad265a3c6de20181cac0436",
        by: "Imagem de Freepik",
        byUrl: "https://br.freepik.com/fotos-gratis/busto-grego-no-templo_61131236.htm#page=4&query=escultura%20arte&position=10&from_view=search&track=ais&uuid=d7316af4-3761-44fc-a6cc-a70e0be30960"
    },
]

export const artGenres: GenresProps[] = [
    {
        name: "gravura",
        image: "https://img.freepik.com/fotos-gratis/jovem-trabalhando-em-uma-oficina-de-gravura-em-madeira_23-2149185411.jpg?w=1380&t=st=1700760990~exp=1700761590~hmac=45b8954967d1031ce68d244ae234634dec6fdaaa7f40459f476894f9a5653fb0",
        about: [
            "Gravura é o termo que designa, em geral, desenhos feitos em superfícies duras - como madeira, pedra e metal - com base em incisões, corrosões e talhos realizados com instrumentos e materiais especiais."
        ],
    },
    {
        name: "pintura",
        image: "https://img.freepik.com/fotos-gratis/close-up-de-tintas-a-oleo-e-pinceis-na-paleta_176420-2835.jpg?w=1380&t=st=1700761130~exp=1700761730~hmac=0da6711bb99bca33a54849f741b761ddd9845497b4459eb2b0601186a49338a1",
        about: [
            "Pintura é uma técnica que utiliza pigmentos em forma líquida para colorir uma superfície, atribuindo tons e texturas, esta superfície pode ser tela, papel ou parede.",
            "A pintura é diferente do desenho por usar pigmentos líquidos. A cor é o elemento essencial da pintura."
        ],
    },
    {
        name: "escultura",
        image: "https://img.freepik.com/fotos-gratis/fundo-estetico-do-busto-grego_23-2150705125.jpg?w=1380&t=st=1700761170~exp=1700761770~hmac=0240a555544db31444f6488db8aaf532dd67ead129487674140aaf9db478a437",
        about: [
            "Escultura é uma forma de expressão artística que consiste na manipulação da matéria com intenção de criar formas tridimensionais.",
            "Toda peça escultórica supõe um volume no espaço, que tem valor tanto em si mesmo como em sua relação com o entorno."
        ],
    },
]

export const artists: SingersArtitsProps[] = [
    {
        name: "FreePik-Gravura",
        genre: "gravura",
        image: "https://www.publicitarioscriativos.com/wp-content/uploads/2020/03/freepik-oferece-3-meses-gratis-de-premium-para-profissionais-durante-a-quarentena.png",
        about: [
            "A Freepik é uma empresa especializada na criação e distribuição de recursos gráficos editáveis para facilitar, bem como contribuir com as suas ideias.",
            "Além disso, você pode colaborar disponibilizando suas próprias criações e ganhar muitas vantagens, assim como fazer parte da equipe sendo de qualquer lugar do mundo.",
        ]
    },
    {
        name: "FreePik-Pintura",
        genre: "pintura",
        image: "https://www.publicitarioscriativos.com/wp-content/uploads/2020/03/freepik-oferece-3-meses-gratis-de-premium-para-profissionais-durante-a-quarentena.png",
        about: [
            "A Freepik é uma empresa especializada na criação e distribuição de recursos gráficos editáveis para facilitar, bem como contribuir com as suas ideias.",
            "Além disso, você pode colaborar disponibilizando suas próprias criações e ganhar muitas vantagens, assim como fazer parte da equipe sendo de qualquer lugar do mundo.",
        ]
    },
    {
        name: "FreePik-Escultura",
        genre: "escultura",
        image: "https://www.publicitarioscriativos.com/wp-content/uploads/2020/03/freepik-oferece-3-meses-gratis-de-premium-para-profissionais-durante-a-quarentena.png",
        about: [
            "A Freepik é uma empresa especializada na criação e distribuição de recursos gráficos editáveis para facilitar, bem como contribuir com as suas ideias.",
            "Além disso, você pode colaborar disponibilizando suas próprias criações e ganhar muitas vantagens, assim como fazer parte da equipe sendo de qualquer lugar do mundo.",
        ]
    },
]