export type SongGenresNameProps = "ciranda" | "forro" | "mpb" | "samba";
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
        name: "Janaina",
        author: "Lia de Itamaraca", 
        genre: "ciranda",
        url: "https://www.youtube.com/watch?v=ZxZMx1SV_MI&ab_channel=LiadeItamarac%C3%A1-Topic",
        image: "https://i.ytimg.com/vi/ZxZMx1SV_MI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9Qw18VymzragT86SsKJPSRF8vyg"
    },
    {
        name: "Coco",
        author: "Lia de Itamaraca", 
        genre: "ciranda",
        url: "https://www.youtube.com/watch?v=GAHjSEox6uM&ab_channel=VariousArtists-Topic",
        image: "https://i.ytimg.com/vi/GAHjSEox6uM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwMkwK4Kmj0Urj3P-yAVkx3kCIUg"
    },
    {
        name: "Balanca Moreno Cirandeiro",
        author: "Lia de Itamaraca", 
        genre: "ciranda",
        url: "https://www.youtube.com/watch?v=eqQh0Qb2GY0&ab_channel=VariousArtists-Topic",
        image: "https://i.ytimg.com/vi/GAHjSEox6uM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwMkwK4Kmj0Urj3P-yAVkx3kCIUg"
    },
    
    {
        name: "Minervina",
        author: "Cia Cabelo de Maria", 
        genre: "ciranda",
        url: "https://www.youtube.com/watch?v=plWN_zehzUU&ab_channel=CiaCabelodeMaria-Topic",
        image: "https://s2-g1.glbimg.com/XMw1RdYCuTzyFbexM5M0oYOlmAY=/0x0:1622x1474/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/n/D/i9SQxyTWC7G5ZuIysIqw/cantosdetrabalho2capa.jpg"
    },
    {
        name: "Quero ver rodar",
        author: "Cia Cabelo de Maria", 
        genre: "ciranda",
        url: "https://www.youtube.com/watch?v=9-_iturh6CQ&ab_channel=ciacabelodemaria",
        image: "https://s2-g1.glbimg.com/XMw1RdYCuTzyFbexM5M0oYOlmAY=/0x0:1622x1474/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/n/D/i9SQxyTWC7G5ZuIysIqw/cantosdetrabalho2capa.jpg"
    },
    {
        name: "Ele avoou",
        author: "Cia Cabelo de Maria", 
        genre: "ciranda",
        url: "https://www.youtube.com/watch?v=oMqWhcz4N58&ab_channel=CiaCabelodeMaria-Topic",
        image: "https://s2-g1.glbimg.com/XMw1RdYCuTzyFbexM5M0oYOlmAY=/0x0:1622x1474/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/n/D/i9SQxyTWC7G5ZuIysIqw/cantosdetrabalho2capa.jpg"
    },

    {
        name: "Caboclinhos",
        author: "Toque Leoa", 
        genre: "ciranda",
        url: "https://www.youtube.com/watch?v=L3NT8uaUxcw&ab_channel=cavalcanti%2Cl.",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/78824/thumbnails/m_78824ca.jpg"
    },
    {
        name: "Brincadeiras",
        author: "Toque Leoa", 
        genre: "ciranda",
        url: "https://soundcloud.com/toque-leoa/brincadeiras?si=0e1c302c89ac44798e67cf30c4acd6ec&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/78824/thumbnails/m_78824ca.jpg"
    },
    {
        name: "Toadas",
        author: "Toque Leoa", 
        genre: "ciranda",
        url: "https://soundcloud.com/toque-leoa/toadas?si=f4645a8a180d4eca8f41ea19f7595bfe&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/78824/thumbnails/m_78824ca.jpg"
    },
    
    {
        name: "Laz Bar",
        author: "Orkestra Bandida", 
        genre: "ciranda",
        url: "https://soundcloud.com/orkestra-bandida/laz-bar?si=3a64d16b55594b538e81854b3e773b9d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/88197/thumbnails/m_88197ca.jpg"
    },
    {
        name: "Balada",
        author: "Orkestra Bandida", 
        genre: "ciranda",
        url: "https://soundcloud.com/orkestra-bandida/balada-1?si=ec1e1e0e531e4c86ab980ebdbed9ae38&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/88197/thumbnails/m_88197ca.jpg"
    },
    {
        name: "Rompi Rompi",
        author: "Orkestra Bandida", 
        genre: "ciranda",
        url: "https://soundcloud.com/orkestra-bandida/rompi-rompi-2?si=c14504f91c3542fcb1a8f06ed6f8ba7d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/88197/thumbnails/m_88197ca.jpg"
    },

    {
        name: "Vinde Vinde Mocos E Velhos",
        author: "Antonio Nobrega", 
        genre: "forro",
        url: "https://www.youtube.com/watch?v=imL72sxfWuo&ab_channel=AntonioN%C3%B3brega-Topic",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI01782.jpg"
    },
    {
        name: "Despedida",
        author: "Antonio Nobrega", 
        genre: "forro",
        url: "https://www.youtube.com/watch?v=0DRq5zb0P_U&ab_channel=AntonioN%C3%B3brega-Topic",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI01782.jpg"
    },

    {
        name: "Um Baiao Chamado Saudade",
        author: "Petrucio Amorim", 
        genre: "forro",
        url: "https://soundcloud.com/prefrecife/um-bai-o-chamado-saudade?in=mel-cris-brito/sets/petr-cio-amorim&si=6504742253214cae8c2f56399b73ecfb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        image: "https://i.scdn.co/image/ab67616d00001e021d923b27b74cf9e80b6aaa2b"
    },
    {
        name: "Voltando Pra Mim",
        author: "Petrucio Amorim", 
        genre: "forro",
        url: "https://soundcloud.com/prefrecife/voltando-pra-mim-petrucio?in=mel-cris-brito/sets/petr-cio-amorim&si=b8fb1b2102c14276bde0fd3a428618cd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        image: "https://i.scdn.co/image/ab67616d00001e021d923b27b74cf9e80b6aaa2b"
    },
    {
        name: "Meu Pai",
        author: "Petrucio Amorim", 
        genre: "forro",
        url: "https://soundcloud.com/prefrecife/meu-pai-petrucio-amorim?in=mel-cris-brito/sets/petr-cio-amorim&si=6a8462459b764f8abda29933b7e3b111&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        image: "https://i.scdn.co/image/ab67616d00001e021d923b27b74cf9e80b6aaa2b"
    },

    {
        name: "A Entrada",
        author: "Sandra Bele", 
        genre: "forro",
        url: "https://www.youtube.com/watch?v=7A4RrIRtrVs",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/78767/thumbnails/m_78767ca.jpg"
    },
    {
        name: "A Diana",
        author: "Sandra Bele", 
        genre: "forro",
        url: "https://www.youtube.com/watch?v=jVhYk6lwK5M",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/78767/thumbnails/m_78767ca.jpg"
    },
    {
        name: "Senhor Jose",
        author: "Sandra Bele", 
        genre: "forro",
        url: "https://www.youtube.com/watch?v=bOWzsoQzDaA",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/78767/thumbnails/m_78767ca.jpg"
    },

    {
        name: "Cai cai baiao",
        author: "Toninho Ferragutti", 
        genre: "forro",
        url: "https://www.youtube.com/watch?v=W3q1MOH7Q8A",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI05003.jpg"
    },
    {
        name: "Sapo Cururu",
        author: "Toninho Ferragutti", 
        genre: "forro",
        url: "https://www.youtube.com/watch?v=EKMqLf2CJSQ",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI05003.jpg"
    },
    {
        name: "A Canoa Virou",
        author: "Toninho Ferragutti", 
        genre: "forro",
        url: "https://www.youtube.com/watch?v=WpEJnIFlL5o",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI05003.jpg"
    },

    {
        name: "Noites Brasileiras",
        author: "Luiz Gonzaga", 
        genre: "forro",
        url: "https://www.youtube.com/watch?v=unPa8YN7Ch0&ab_channel=Pedro",
        image: "https://64.media.tumblr.com/a9c01409b0b3b7c2b91fd9cb2a62c5e0/tumblr_mr67dpqfhi1rbt4ufo2_r1_1280.jpg"
    },
    {
        name: "O Xote das Meninas",
        author: "Luiz Gonzaga", 
        genre: "forro",
        url: "https://www.youtube.com/watch?v=iRv9q0kmJpg",
        image: "https://64.media.tumblr.com/a9c01409b0b3b7c2b91fd9cb2a62c5e0/tumblr_mr67dpqfhi1rbt4ufo2_r1_1280.jpg"
    },

    {
        name: "Pedrinha Miudinha",
        author: "Maria Bethania", 
        genre: "mpb",
        url: "https://soundcloud.com/maria-bethania-official/pedrinha-miudinha-orixa-ao?si=528598d13e5742a5b6e321980de76c85&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI05633.jpg"
    },
    {
        name: "Feiticeira",
        author: "Maria Bethania", 
        genre: "mpb",
        url: "https://www.youtube.com/watch?v=72yZnrtkPsM",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI05633.jpg"
    },
    {
        name: "Mater Gracie",
        author: "Maria Bethania", 
        genre: "mpb",
        url: "https://www.youtube.com/watch?v=trXgE9jcf-I",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI05633.jpg"
    },

    {
        name: "Boa Noite Meus Senhores Todos",
        author: "Quinteto Violado", 
        genre: "mpb",
        url: "https://www.youtube.com/watch?v=31IbUb8hqK8&ab_channel=QuintetoViolado-Topic",
        image: "https://m.media-amazon.com/images/I/51mZR8UMj5L._UF1000,1000_QL80_.jpg"
    },
    {
        name: "Meu Sao Jose",
        author: "Quinteto Violado", 
        genre: "mpb",
        url: "https://www.youtube.com/watch?v=ikzfM_kSIxg",
        image: "https://m.media-amazon.com/images/I/51mZR8UMj5L._UF1000,1000_QL80_.jpg"
    },

    {
        name: "Marinheiro So Caetano",
        author: "Caetano Veloso", 
        genre: "mpb",
        url: "https://www.youtube.com/watch?v=4UDev71t_V8&ab_channel=oleiros70",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI00676.jpg"
    },
    {
        name: "Ia Omim Bum",
        author: "Caetano Veloso", 
        genre: "mpb",
        url: "https://www.youtube.com/watch?v=mDRi0WEU1_g",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI00676.jpg"
    },

    {
        name: "Ponto de Iemanja",
        author: "Rita Ribeiro", 
        genre: "mpb",
        url: "https://www.youtube.com/watch?v=RjY47W6ONa0",
        image: "https://www.vagalume.com.br/rita-ribeiro/discografia/tecnomacumba.jpg"
    },
    {
        name: "Ponto de Iansa",
        author: "Rita Ribeiro", 
        genre: "mpb",
        url: "https://www.youtube.com/watch?v=1wp0u54LMJw",
        image: "https://www.vagalume.com.br/rita-ribeiro/discografia/tecnomacumba.jpg"
    },

    {
        name: "Blocos de Samba de Roda 1",
        author: "Grupo Barlavento", 
        genre: "samba",
        url: "https://www.youtube.com/watch?v=XyeuhvNLYxA",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/93116/thumbnails/m_93116ca.jpg"
    },
    {
        name: "Blocos de Samba de Roda 2",
        author: "Grupo Barlavento", 
        genre: "samba",
        url: "https://www.youtube.com/watch?v=clXTbwOFKRo",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/93116/thumbnails/m_93116ca.jpg"
    },
    {
        name: "Na Beira do Rio",
        author: "Grupo Barlavento", 
        genre: "samba",
        url: "https://www.youtube.com/watch?v=jJu-z-S-qe8",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/93116/thumbnails/m_93116ca.jpg"
    },

    {
        name: "Eu Vou Dar Uma Festa",
        author: "Jorginho do Imperio", 
        genre: "samba",
        url: "https://www.youtube.com/watch?v=33yrSAigTN0",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI01294.jpg"
    },
    {
        name: "Viva Meu Samba",
        author: "Jorginho do Imperio", 
        genre: "samba",
        url: "https://www.youtube.com/watch?v=VPk1b21y1bI&ab_channel=MoacirSimpatia",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI01294.jpg"
    },

    {
        name: "Pertinho de Salvador",
        author: "Zeca Pagodinho", 
        genre: "samba",
        url: "https://www.youtube.com/watch?v=uP6sbfrt0BE",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI07300.jpg"
    },
    {
        name: "Coração Em Desalinho",
        author: "Zeca Pagodinho", 
        genre: "samba",
        url: "https://www.youtube.com/watch?v=5nlX1yEkqDU&ab_channel=ZecaPagodinhoVEVO",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_UziVvSn-hFv05qUXZzyTHLqB6LR4tHgkw&usqp=CAU"
    },

    {
        name: "Marinheiro So Beth",
        author: "Beth Carvalho", 
        genre: "samba",
        url: "https://www.youtube.com/watch?v=PhjMKtu8ZZ8",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI05718.jpg"
    },
    {
        name: "Guarda Civil",
        author: "Beth Carvalho", 
        genre: "samba",
        url: "https://www.youtube.com/watch?v=bKOiqWklPfU",
        image: "https://discografia.discosdobrasil.com.br/storage/capas/DI05718.jpg"
    },
]

export const musicGenres: GenresProps[] = [
    {
        name: "ciranda",
        image: "https://www.multirio.rj.gov.br/images/img_2021_07/ciranda_ivancruz1.jpg",
        about: [
            "Sua origem é portuguesa, que consistia numa dança de roda infantil. No Brasil, é dançada por pessoas de todas as idades, podendo ser encontrada tanto no litoral como na Zona da Mata Norte.",
            "As suas cantigas são o resultado de muitas influências (lusitana, espanhola, francesa, ameríndia e africana).",
            "No princípio, as apresentações ocorriam em locais populares como praias, terrenos de bodegas e armazéns, pontas de rua, e seus participantes eram basicamente trabalhadores rurais, pescadores, operários de construção, biscateiros, entre outros. Trata-se de uma dança simples e comunitária, de caráter espontâneo e que não exige nenhuma faixa etária, parâmetros cenográficos e vestimentas especiais."
        ],
    },
    {
        name: "forro",
        image: "https://img.freepik.com/vetores-gratis/colecao-cangaceiro-desenhada-a-mao_23-2149914048.jpg?w=740&t=st=1700856599~exp=1700857199~hmac=24ce81c14718a9ad93b447ab7855ba3e26a50115a6eec6d3f564a26a90c75d71",
        about: [
            "O forró surgiu em 1930, no nordeste brasileiro e se tornou popular em meados dos anos 1950. Esse estilo musical surgiu por criatividade do poeta, compositor e cantor Luiz Gonzaga, que nasceu em 1912 e faleceu em 1989. O artista apresentava o forró por meio de três instrumentos: sanfona, zabumba e triângulo.",
            "O estilo musical tornou-se ainda mais conhecido por consequência de diversos fatores, entre eles a apresentação das músicas nas rádios, o despertar das gravadoras referente ao novo modelo musical e a migração dos nordestinos para o sudeste do país, principalmente entre os anos 1960 e 1970. ",
            "A nomenclatura forró foi sugerida pelo folclorista e historiador Câmara Cascudo. Isso se deu devido ao termo ser uma derivação variante galego-portuguesa do vocabulário antigo “forbodó”."
        ],
    },
    {
        name: "mpb",
        image: "https://pm1.aminoapps.com/6681/2373f161e055d4355087fdf0a480b8abc322a527_00.jpg",
        about: [
            "A MPB, sigla derivada da expressão Música Popular Brasileira, é um gênero musical surgido no Brasil em meados da década de 1960. A MPB surgiu a partir de 1966 na cidade do Rio de Janeiro com a segunda geração da bossa nova, mas com uma forte influência do folclore brasileiro que já vinha desde 1932.",
            "Na prática, a sigla MPB anunciou uma fusão de dois movimentos musicais até então divergentes, a bossa nova e o engajamento folclórico dos Centros Populares de Cultura da União Nacional dos Estudantes.",
            "Os primeiros defendendo a sofisticação musical e os segundos, a fidelidade à música de raiz brasileira. Seus propósitos se misturaram e, com o golpe de 1964, os dois movimentos se tornaram uma frente ampla cultural contra o regime militar, adotando a sigla MPB na sua bandeira de luta."
        ],
    },
    {
        name: "samba",
        image: "https://www.anf.org.br/wp-content/uploads/2019/12/Samba-1-reprodu%C3%A7%C3%A3o-Internet.jpg",
        about: [
            "O samba de roda surgiu na Bahia, no século XVII, embora seus primeiros registros datem de 1860. Hoje, ele é patrimônio e herança cultural afro-brasileira.",
            "Esse tipo de samba brasileiro surgiu de um estilo musical africano, o semba, trazido para o Brasil com a chegada de escravizados angolanos.",
            "Está intimamente relacionado à roda de capoeira, que envolve música e luta, e aos orixás, entidades espirituais africanas.",
            "Atualmente, essa manifestação artística está presente em todas as partes do Brasil. Na Bahia, é no Recôncavo baiano que esse ritmo é mais popular. Isso porque essa região foi palco da chegada de escravizados africanos.",
            "Apesar de ser baseado nas tradições africanas, ele também envolve alguns aspectos da cultura portuguesa. Como exemplo, temos o uso de alguns instrumentos como a viola, e ainda, as letras das músicas, cantadas em português."
        ],
    },
    
]

export const singers: SingersArtitsProps[] = [
    {
        name: "Lia de Itamaraca",
        genre: "ciranda",
        image: "https://boomerangmusic.com.br/wp-content/uploads/2022/11/mini-CAPA_LIA-DE-ITAMARACA-CIRANDA-DE-RITMOS-3000px.jpg",
        about: [
            "A artista Lia sempre morou na Ilha de Itamaracá e ainda criança começou a participar de rodas de ciranda.",
            "Trabalhou como merendeira em uma escola pública da ilha.",
            "Ficou conhecida por Lia nos anos 1960, depois que Teca Calazans, incorporando versos cantados pela cirandeira."
        ]
    },
    {
        name: "Cia Cabelo de Maria",
        genre: "ciranda",
        image: "https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/d8/bf/fe/d8bffee1-0513-f478-3953-48e764497ae4/cover.jpg/1200x1200bb.jpg",
        about: [
            "Renata Mattar e Gustavo Finkler fundaram a Cia Cabelo de Maria no ano de 2007 com a proposta de compartilhar a pesquisa musical feita por Renata em seus mais de 20 anos de viagens pelo Brasil registrando músicas da tradição popular.",
            "Entre os principais trabalhos, estão o CD “Cantos de Trabalho”, lançado pelo selo SESC, São João do Carneirinho, contemplado no edital Rumos - Itaú Cultural, Baianás - Parece Cinema e a POIN - Pequena Orquestra Interativa",
            "Atualmente, a Cia tem sete espetáculos no repertótio."
        ]
    },
    {
        name: "Toque Leoa",
        genre: "ciranda",
        image: "https://i1.sndcdn.com/avatars-000006106327-rfzo4d-t500x500.jpg",
        about: [
            "TOQUE LEOA é um grupo cultural de Pernambuco, integrado unicamente por mulheres, que trabalha ritmos ligados às culturas populares de todo o país."
        ]
    },
    {
        name: "Orkestra Bandida",
        genre: "ciranda",
        image: "https://i1.sndcdn.com/avatars-000690165227-dm3wat-t240x240.jpg",
        about: [
            "A ORKESTRA BANDIDA é um grupo ligado ao Coletivo Tarab, formado por músicos multi-instrumentistas, estudiosos e pesquisadores da música cigana oriental presente nas culturas do Mediterrâneo, Turquia, Trácia e Balkãns e da música regional folclórica Brasileira.",
            "Através de uma instrumentação peculiar que inclui Alaúde clássico, Banjo Fretless Cigano, Clarinetes, Flauta Ney e Kaval, Rabeca e Keman, Sousafone, Darbuka, Davul e Riqq.",
            "A ORKESTRA BANDIDA se utiliza das escalas orientais e ritmos diversos, como por exemplo, os ímpares, que são comuns em diversos países que compartilham essa herança musical."
        ]
    },


    {
        name: "Antonio Nobrega",
        genre: "forro",
        image: "https://i.scdn.co/image/ab67616d0000b273b90b492505e925eafa877538",
        about: [
            "Antonio Nóbrega nasceu em Recife, Pernambuco, em 1952. Sua iniciação artística se deu através do violino, instrumento que sempre o acompanhará em suas diversas atividades artísticas. Entre 1968 e 1970, já participava da Orquestra de Câmara da Paraíba e da Orquestra Sinfônica do Recife.",
            "Em 1971 foi convidado por Ariano Suassuna para integrar o Quinteto Armorial, grupo precursor na criação de uma música de câmara brasileira de raízes populares.Fruto do seu envolvimento com o universo da cultura popular brasileira, a partir de 1976, começou a desenvolver um estilo próprio de criação em artes cênicas e música.",
            "A lista dos seus espetáculos é longa, dentre eles estão A Bandeira do Divino, A Arte da Cantoria, O Maracatu Misterioso, O Reino do Meio-Dia, Figural, Brincante, etc."
        ]
    },
    {
        name: "Petrucio Amorim",
        genre: "forro",
        image: "https://akamai.sscdn.co/uploadfile/letras/albuns/9/e/7/f/906221591819419.jpg",
        about: [
            "Nascido no bairro do Vassoural, em Caruaru, aos nove anos de idade juntava sons e palavras e fazia suas primeiras canções. Aos doze anos sonhava com suas músicas tocando nas emissoras locais. A devoção musical veio mesmo quando começou a participar dos festivais estudantis.",
            "Em 1979 participou do segundo encontro Latino Americano de folclore, festival realizado na Sala de Cultura Luiza Maciel, em Caruaru. Concorreu com três músicas e ganhou o festival com as três. Os prêmios foram entregues por Luiz Gonzaga (o Rei do Baião).",
            "Teve finalmente sua primeira música gravada por Azulão: “Confissão de um Nordestino”. Em 1981, conheceu Jorge de Altinho, que iniciava, também sua carreira de intérprete e com quem pasou a interagir musicalmente. Com ele compôs “Confidências” e “Disfarce”, incluídas no LP lançado por Jorge de Altinho naquele período e que se tornaram clássicos, lembrados e tocadas em bares e casas de shows de todo o Nordeste."
        ]
    },
    {
        name: "Sandra Bele",
        genre: "forro",
        image: "https://akamai.sscdn.co/letras/360x360/albuns/e/e/b/a/539691476190126.jpg",
        about: [
            "Sandra é de Zabelê no Cariri Paraibano e iniciou a carreira em 1998, aos 18 anos, cantando em Zabelê na banda Millenium formada por moradores da cidade e participando de shows de bandas de outras regiões, sempre cantando forró.",
            "Dentre as principais realizações de sua carreira, a cantora traz em seu currículo a participação como atriz e cantora da microssérie exibida pela Rede Globo, “A Pedra do Reino”; o recebimento do Troféu Gonzagão, o “Oscar” da música nordestina; a apresentação que recepcionou o Presidente do Banco Mundial em sua visita ao Brasil; o recebimento do prêmio Mulher Forte Anaíde Beiriz; a realização dos shows-homenagens a Zé do Norte e João do Vale pelo Projeto Sete Notas (SESC-PB); o encerramento da Semana Jose Lins do Rego em que cantou com Dominguinhos e a OSJPB; e a participação desde 2011 como apresentadora do programa junino “Arraial Itararé” da TV Itararé, filiada da TV Cultura na Paraíba."
        ]
    },
    {
        name: "Toninho Ferragutti",
        genre: "forro",
        image: "https://i.scdn.co/image/ab67616d0000b273707c5ac9029a160bd6c9c922",
        about: [
            "Toninho Ferragutti é acordeonista, compositor, arranjador e educador.",
            "Possui uma extensa participação em centenas de cds e shows de artistas importantes (Gilberto Gil, Maria Bethânia, Maria Schneider, Lenine, Spok Frevo, Orquestra Jazz Sinfônica, Osesp (Orquestra sinfônica do Estado de São Paulo), Orquestra jovem Tom Jobim, Orquestra Versátilis, entre tantos outros.",
            "Tem 15 cds solo e em parceria com 3 indicações ao Grammy Latino: Ano 2000-cd Sanfonemas, 2014-cd Festa na Roça(com Neymar Dias), 2019-Folia de tReis (com Edu Ribeiro e Fabio Peron), também tem indicações ao Prêmio Tim, Prêmio Governador do Estado de São Paulo, Prêmio da Música Brasileira. Recebeu o Troféu Açorianos de música 2014/2015 como melhor compositor Erudito, Troféu Cata-Vento 2015 cd Como Manda o Figurino (com Bebê Kramer). Em 19 de julho de 2017, foi premiado como melhor Solista na categoria instrumental no 28º Prêmio da Música brasileira."
        ]
    },
    {
        name: "Luiz Gonzaga",
        genre: "forro",
        image: "https://images-americanas.b2w.io/produtos/5389308061/imagens/cd-luiz-gonzaga-o-melhor-de/5389308061_1_large.jpg",
        about: [
            "Luiz Gonzaga do Nascimento, também conhecido como o Rei do Baião, foi considerado uma das mais completas, importantes e criativas figuras da música popular brasileira.",
            "Cantando acompanhado de sua sanfona, zabumba e triângulo (conjunto básico dos cantores de baião, que ele mesmo definiu[5]), levou para todo o país a cultura musical do nordeste, como o baião, o xaxado, o xote e o forró pé de serra. Suas composições também descreviam a pobreza, as tristezas e as injustiças de sua árida terra, o sertão nordestino. Era torcedor declarado do Santa Cruz Futebol Clube.",
            "Luiz Gonzaga ganhou notoriedade com as antológicas canções \"Asa Branca\" (1947), \"Juazeiro\" (1948) e \"Baião de Dois\" (1950)."
        ]
    },

    {
        name: "Maria Bethania",
        genre: "mpb",
        image: "https://images.tcdn.com.br/img/img_prod/817363/cd_duplo_maria_bethania_abracar_e_agradecer_421_1_b28eb77c14fd7d23ca68169a58a4ae8c.png",
        about: [
            "Maria Bethânia Viana Teles Veloso é uma cantora, compositora e poetisa brasileira.[2] É conhecida como \"Abelha Rainha\" e \"Rainha da MPB\".",
            "Na juventude, Maria Bethânia participou de peças teatrais ao lado de seu irmão, o também cantor e compositor Caetano Veloso, e de outros cantores proeminentes da época. Em 1965, mudou-se para o Rio de Janeiro, onde começou sua carreira musical substituindo a cantora Nara Leão no espetáculo Opinião. No mesmo ano, assinou contrato com a gravadora RCA e lançou seu homônimo álbum de estreia.",
            "Com mais de 26 milhões de discos vendidos ao longo de mais de 50 anos de carreira, Bethânia foi eleita em 2012, pela revista Rolling Stone Brasil, a quinta maior voz da música brasileira."
        ]
    },
    {
        name: "Quinteto Violado",
        genre: "mpb",
        image: "https://cdn.awsli.com.br/300x300/2279/2279925/produto/201483785/lp_quinteto-violado-kuire-o-concerto-pmyois.jpg",
        about: [
            "Inicialmente formado por Toinho, canto e baixo acústico; Marcelo, canto, viola e violão; Fernando Filizola; Luciano, percussão, e Sando, flautista, na década de 1990 passou a ser integrado por Toinho, baixo acústico, compositor, cantor e diretor musical do conjunto; Marcelo, violonista, violeiro, cantor e compositor; Ciano; Roberto Menescal, cantor e percussionista; e o tecladista e arranjador Dudu.",
            "Apresentou-se pela primeira vez, ainda sem a denominação que o tornou famoso, em janeiro de 1970, na Faculdade de Filosofia da Universidade Federal de Pernambuco. Em outubro de 1971, quando se apresentou no Teatro da Nova Jerusalém (Fazenda Nova PE), seus integrantes foram chamados de \"os violados\", nascendo dai o Quinteto Violado. Gilberto Gil os apresentou ao produtor Roberto Santana, da Phonogram, e o aparecimento do conjunto foi exaltado por Caetano Veloso."
        ]
    },
    {
        name: "Caetano Veloso",
        genre: "mpb",
        image: "https://image.disparada.com.br/wp-content/uploads/2018/05/11173956/img-caetano-veloso-hibridismos-da-liberdade.jpg",
        about: [
            "Caetano Emanuel Viana Teles Veloso OMC é um cantor, músico, produtor, arranjador e escritor brasileiro. Com uma carreira que ultrapassa cinco décadas, Caetano construiu uma obra musical marcada pela releitura e renovação e considerada amplamente como possuidora de grande valor intelectual e poético.",
            "Embora desde cedo tivesse aprendido a tocar violão em Salvador, escrito entre os anos de 1960 e 1962 críticas de cinema para o Diário de Notícias e conhecido o trabalho dos cantores de rádios e dos músicos de bossa nova (notavelmente João Gilberto, seu \"mestre supremo\" e com quem dividiria o palco anos mais tarde), Caetano iniciou seu trabalho profissionalmente apenas em 1965, com o compacto \"Cavaleiro/Samba em Paz\", enquanto acompanhava a irmã mais nova Maria Bethânia por suas apresentações nacionais do espetáculo Opinião, no Rio de Janeiro."
        ]
    },
    {
        name: "Rita Ribeiro",
        genre: "mpb",
        image: "https://s2-g1.glbimg.com/t2Ob_FLppfvG7EfmacyWRLw8a8g=/0x0:640x640/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/D/K/lTjVRjR1AnKPg76zkj6g/ritaribeiro.jpg",
        about: [
            "Rita Ribeiro nasceu em 16 de Abril de 1955 em Lisboa, filha dos actores Curado Ribeiro e Maria José. Era meia-irmã de António Semedo, fruto do anterior casamento de sua mãe com o ator e realizador Artur Semedo.",
            "Fez um curso de modelo e foi Miss Tenager. Foi importante para a sua auto-estima porque foi uma adolescente gordinha. À noite estava a fazer o curso de Artes Gerais da Escola António Arroio. Com 17 anos tinha uma mota Kawasaki.",
            "Começou a namorar com Victor Mamede aos 15 anos. Com 20 anos nasceu a sua primeira filha Joana. Separaram-se quando a filha tinha apenas dois meses.",
            "Fez parte dos Green Windows com quem participou no Festival RTP da Canção de 1974. Estreou-se no teatro em 1975, no espectáculo \"Godspell\"."
        ]
    },

    {
        name: "Grupo Barlavento",
        genre: "samba",
        image: "https://immub-space.nyc3.digitaloceanspaces.com/capas/93116/thumbnails/m_93116ca.jpg",
        about: [
            "Formado por Hamilton Reis (voz/violão), Davizinho de Mutá (voz), Aloísio do Cavaco (cavaquinho), Menino Henrique (congas), Ricardo Hardman (timbau) e Cuca (pandeiro/efeitos), o grupo Barlavento ganha o reforço dos músicos Júlio Caldas (violão 7 cordas/viola machete/banjo/guitarra baiana), Pinho (baixo) e Durval Caldas (vocal) na apresentação no \"Música no Parque\"."
        ]
    },
    {
        name: "Jorginho do Imperio",
        genre: "samba",
        image: "https://m.media-amazon.com/images/I/71l9+J8j+wL._UF1000,1000_QL80_.jpg",
        about: [
            "Jorge Antônio Carlos, ou Jorginho do Império é um cantor brasileiro, filho de Mano Décio da Viola, um dos fundadores da Império Serrano.",
            "Atualmente reside no bairro carioca de Madureira, na rua que tem o nome de seu pai e fica próxima à Império Serrano. Jorginho também é radialista, onde comanda o programa Barracão do Samba da Rádio Livre 1440, ao lado de Marcelo Pacífico."
        ]
    },
    {
        name: "Zeca Pagodinho",
        genre: "samba",
        image: "https://m.media-amazon.com/images/I/81CvOF-K-kL._UF1000,1000_QL80_.jpg",
        about: [
            "Zeca Pagodinho, batizado de Jessé Gomes da Silva Filho, nasceu no Irajá em 4 de fevereiro de 1959 e foi criado em Del Castilho.",
            "Filho de Seu Jessé e Dona Irinéa, quarto de uma família de cinco crianças, desde cedo já trocava as aulas por uma boa roda-de-samba. Por isso, depois da quarta-série, não quis mais saber de escola.",
            "Nos anos 70, o partido-alto começa a se tornar uma febre nos subúrbios do Rio. E entre um samba e outro, Zeca se virava como podia. Feirante, camelô, office-boy, contínuo e anotador de jogo do bicho. Fez de tudo. Desta época, surgiram amizades valorosas como Sérvula, Dorina, Paulão Sete Cordas, Monarco, Mauro Diniz, Almir Guineto, Bira Presidente, Beto Sem Braço e Arlindo Cruz. Freqüentava também as rodas do Cacique de Ramos."
        ]
    },
    {
        name: "Beth Carvalho",
        genre: "samba",
        image: "https://s2-g1.glbimg.com/vOz7GyLXy3FdQGJMyPTp5sY6m98=/0x0:621x600/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2013/06/14/beth-86.jpg",
        about: [
            "Elizabeth Santos Leal de Carvalho, mais conhecida como Beth Carvalho, foi uma cantora, compositora e instrumentista brasileira. Desde que começou a fazer sucesso, na década de 1970, Beth se tornou uma das maiores intérpretes do samba, ajudando a revelar nomes como Luiz Carlos da Vila, Jorge Aragão, Zeca Pagodinho, Almir Guineto, grupo Fundo de Quintal, Arlindo Cruz e Quinteto em Branco e Preto."
        ]
    },
]

export const arts: SongArtProps[] = [
    {
        name: "Apontar",
        author: "Jessica Muniz", 
        genre: "gravura",
        image: "https://img.freepik.com/free-vector/black-white-aztec-elements_1020-1124.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=sph",
        by: "Imagem de rawpixel.com no Freepik",
        byUrl: "br.freepik.com/fotos-gratis/ornamento-policromo_3686801.htm#query=gravura%20arte&position=1&from_view=search&track=ais&uuid=c2db94f1-bde2-4a7c-9765-d86c9ee3d260"
    },
    {
        name: "Volucres",
        author: "Jessica Muniz", 
        genre: "gravura",
        image: "https://img.freepik.com/premium-vector/set-birds-various-sizes-woodcut-style-cordel-literature_666452-196.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=sph",
        by: "Imagem de rawpixel.com no Freepik",
        byUrl: "br.freepik.com/fotos-gratis/ornamento-policromo_3686801.htm#query=gravura%20arte&position=1&from_view=search&track=ais&uuid=c2db94f1-bde2-4a7c-9765-d86c9ee3d260"
    },
    {
        name: "Nami",
        author: "Jessica Muniz", 
        genre: "gravura",
        image: "https://img.freepik.com/free-vector/vintage-diagonal-stripes-pattern-background-vector-remix-from-artworks-by-samuel-jessurun-de-mesquita_53876-127881.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=sph",
        by: "Imagem de rawpixel.com no Freepik",
        byUrl: "br.freepik.com/fotos-gratis/ornamento-policromo_3686801.htm#query=gravura%20arte&position=1&from_view=search&track=ais&uuid=c2db94f1-bde2-4a7c-9765-d86c9ee3d260"
    },

    {
        name: "Saudade",
        author: "Robson da Silva Junior", 
        genre: "pintura",
        image: "https://img.freepik.com/free-vector/beach-background-color-pencil-illustration_53876-100533.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=ais",
        by: "Imagem de stockgiu no Freepik",
        byUrl: "https://br.freepik.com/fotos-gratis/cenario-abstrato-com-cores-vibrantes-de-padrao-de-ondas-multicoloridas-fluindo-suavemente-geradas-pela-inteligencia-artificial_76317886.htm#query=pinturas&position=0&from_view=search&track=sph&uuid=e9958edc-3b2b-494b-9a64-462d82cf17a7"
    },
    {
        name: "Pinceladas da alma",
        author: "Robson da Silva Junior", 
        genre: "pintura",
        image: "https://img.freepik.com/free-photo/close-up-photo-oil-paints-canvas-wall_176420-2849.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=ais",
        by: "Imagem de pikisuperstar no Freepik",
        byUrl: "https://br.freepik.com/vetores-gratis/paisagem-de-floresta-em-aquarela_20287827.htm?query=pinturas"
    },
    {
        name: "Abstrato",
        author: "Robson da Silva Junior", 
        genre: "pintura",
        image: "https://img.freepik.com/free-photo/abstract-art-background-wallpaper-textured-acrylic-paint-with-mixed-colors_53876-134358.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=ais",
        by: "Imagem de vecstock no Freepik",
        byUrl: "https://br.freepik.com/fotos-gratis/jovem-na-natureza-exala-elegancia-e-beleza-gerada-por-ia_42180318.htm#query=pessoa%20em%20realismo%20pintura&position=32&from_view=search&track=ais&uuid=0db63490-64e5-43e2-99b6-a59866652ea8"
    },

    {
        name: "Amarelo",
        author: "Bruno Bucciarati", 
        genre: "escultura",
        image: "https://img.freepik.com/free-photo/minimal-modern-vases-arrangement_23-2149681088.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=ais",
        by: "Imagem de wirestock no Freepik",
        byUrl: "https://br.freepik.com/fotos-gratis/foto-em-tons-de-cinza-de-uma-estatua-de-marmore-de-uma-mulher-sob-as-luzes_9991795.htm#page=2&query=escultura%20arte&position=47&from_view=search&track=ais&uuid=99c787eb-cdb0-44cd-beab-69533d57e843"
    },
    {
        name: "Peças Diversas",
        author: "Bruno Bucciarati", 
        genre: "escultura",
        image: "https://img.freepik.com/free-photo/top-view-clay-pots-arrangement_23-2149644947.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=ais",
        by: "Imagem de vecstock no Freepik",
        byUrl: "https://br.freepik.com/fotos-gratis/escultura-feminina-nua-simbolo-de-beleza-e-sensualidade-gerada-por-ia_41147116.htm#page=3&query=escultura%20arte&position=8&from_view=search&track=ais&uuid=18dada9c-3527-469e-8127-210d94fc56b5"
    },
    {
        name: "Dupla",
        author: "Bruno Bucciarati", 
        genre: "escultura",
        image: "https://img.freepik.com/free-photo/front-view-two-vases_23-2148816286.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=ais",
        by: "Imagem de Freepik",
        byUrl: "https://br.freepik.com/fotos-gratis/busto-grego-no-templo_61131236.htm#page=4&query=escultura%20arte&position=10&from_view=search&track=ais&uuid=d7316af4-3761-44fc-a6cc-a70e0be30960"
    },
]

export const artGenres: GenresProps[] = [
    {
        name: "gravura",
        image: "https://img.freepik.com/free-photo/close-up-person-working-engraving_23-2149286547.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=ais",
        about: [
            "A gravura é uma forma de expressão artística que envolve a criação de imagens em uma superfície plana, geralmente de metal, madeira, pedra ou outro material, através da incisão, corrosão, ou aplicação de tinta. Essa técnica permite a reprodução da imagem em papel ou outro suporte, tornando possível a produção de múltiplas cópias da mesma obra. A gravura possui uma longa história e desempenha um papel significativo na arte e na cultura, tanto globalmente quanto localmente.",
            "Em Pernambuco, a gravura tem uma importância destacada, sendo parte integrante da rica tradição cultural e artística do estado. A influência da gravura em Pernambuco remonta ao período colonial, quando as técnicas de impressão foram introduzidas pelos colonizadores europeus. Desde então, a gravura tem evoluído e se adaptado, refletindo as mudanças na sociedade pernambucana."
        ],
    },
    {
        name: "pintura",
        image: "https://img.freepik.com/free-photo/close-up-hands-holding-different-brushes_23-2149050547.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=ais",
        about: [
            "A pintura é uma forma de expressão artística que utiliza pigmentos coloridos para criar imagens em uma superfície, como tela, papel, madeira ou parede. Ao longo da história, a pintura tem desempenhado um papel fundamental na comunicação cultural, na representação de ideias e na expressão individual. Ela abrange uma ampla variedade de estilos, técnicas e escolas artísticas, proporcionando um meio diversificado para os artistas explorarem suas visões e emoções.",
            "Em Pernambuco, a pintura desempenha um papel significativo na preservação e na transmissão da rica herança cultural do estado. A região nordeste do Brasil é conhecida por sua vibrante cena artística, e Pernambuco destaca-se por suas tradições culturais únicas, que incluem o frevo, o maracatu, o bolo de rolo e muitas outras manifestações artísticas e folclóricas."
        ],
    },
    {
        name: "escultura",
        image: "https://img.freepik.com/free-photo/assortment-pottery-elements-workshop_23-2148846453.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=ais",
        about: [
            "A escultura é uma forma de arte tridimensional que envolve a criação de formas e figuras através da manipulação de materiais como pedra, madeira, metal, argila ou outros elementos. Ela é uma expressão artística que existe desde tempos imemoriais e desempenha um papel significativo na cultura de diversas sociedades ao redor do mundo. No contexto de Pernambuco, a escultura é uma manifestação artística que tem desempenhado um papel vital na representação da identidade cultural e na preservação da história da região.",
            "A importância da escultura em Pernambuco é multifacetada. Em primeiro lugar, ela serve como um meio de preservação da rica herança cultural do estado. Através das esculturas, artistas pernambucanos capturam e perpetuam elementos importantes da história, tradições e identidade local. Esculturas podem representar figuras históricas, eventos marcantes ou símbolos culturais, ajudando a manter viva a memória coletiva da comunidade."
        ],
    },
]

export const artists: SingersArtitsProps[] = [
    {
        name: "Jessica Muniz",
        genre: "gravura",
        image: "https://img.freepik.com/free-photo/medium-shot-smiley-woman-posing-cv_23-2149927575.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=ais",
        about: [
            "Jéssica Muniz é uma artista visionária que se destaca no mundo da gravura com sua abordagem única e inovadora. Nascida de uma fusão entre as tradições artísticas e a contemporaneidade, as obras de Jéssica cativam os espectadores, levando-os a uma jornada emocional e introspectiva.",
            "Inspirada pela natureza, pelos contrastes urbanos e pelos matizes da vida cotidiana, as gravuras de Jéssica são um testemunho de sua habilidade em capturar a essência da existência humana. Suas obras são uma celebração da diversidade e da beleza encontrada na simplicidade do quotidiano.",
            "Sua técnica distintiva combina meticulosidade e liberdade expressiva, criando composições que são ao mesmo tempo detalhadas e impressionisticamente fluidas. Jéssica Muniz transforma simples folhas de papel em portais para mundos imaginários, onde as linhas e sombras dançam em harmonia.Seu legado na gravura é mais do que uma marca artística; é um convite para explorar as fronteiras da criatividade e da autenticidade.",
        ]
    },
    {
        name: "Robson da Silva Junior",
        genre: "pintura",
        image: "https://img.freepik.com/free-photo/young-man-painting-with-acrylics_23-2148854549.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=ais",
        about: [
            "Robson da Silva Junior, um pintor de alma vibrante e pincéis ágeis, traz à vida telas que transcendem a mera expressão artística. Nascido em um lar onde a paleta de cores era tão rica quanto as histórias contadas por seu pai, Robson encontrou sua musa nas lembranças que permeavam sua infância.",
            "Seu pai, um amante da natureza e das tradições, enchia os dias de Robson com passeios pelas montanhas, banhos de riachos e noites sob um céu estrelado. As histórias sussurradas ao redor da fogueira e os tons quentes dos entardeceres moldaram não apenas sua visão de mundo, mas também sua interpretação única da arte.",
            "As pinceladas de Robson carregam consigo a nostalgia de tardes ensolaradas e o frescor da brisa matinal. Cada obra é um testemunho das lições que seu pai lhe transmitiu, seja através da técnica apurada ou da escolha cuidadosa das cores. Seus quadros não são simples reproduções da realidade, mas sim janelas para o mundo interior de um artista que se conecta profundamente com suas raízes.",
            "Assim, Robson da Silva Junior continua a pintar não apenas para si mesmo, mas para compartilhar com o mundo as histórias que o moldaram. Cada pincelada é um tributo à sabedoria de seu pai, uma celebração das experiências que esculpiram sua sensibilidade artística e um convite para que todos mergulhem na riqueza de suas origens através de sua visão única.",
        ]
    },
    {
        name: "Bruno Bucciarati",
        genre: "escultura",
        image: "https://img.freepik.com/free-photo/mature-smiling-shoemaker-workshop_171337-12246.jpg?size=626&ext=jpg&uid=R116221194&ga=GA1.1.2004084372.1698098800&semt=ais",
        about: [
            "Bruno Bucciarati, um mestre da cerâmica nascido sob o sol da Itália, mas cujas mãos moldaram sua própria jornada na rica terra do Brasil. Desde tenra idade, Bruno encontrou nas cores vibrantes e nas formas encantadoras das cerâmicas pernambucanas a inspiração que impulsionaria sua paixão artística.",
            "Em sua infância, ele desembarcou nas praias brasileiras com sua família, trazendo consigo não apenas bagagem, mas também a herança da cerâmica italiana que fluía em suas veias. Foi nas ruas movimentadas e nas festas animadas do Brasil que Bruno descobriu o calor e a energia que moldariam sua arte.",
            "As tradições da cerâmica pernambucana, com suas figuras estilizadas e cores audaciosas, tornaram-se o alicerce sobre o qual Bruno construiu seu próprio estilo distinto. Suas peças exalam a fusão única de duas culturas, uma dança harmoniosa entre a tradição italiana e a exuberância brasileira.",
            "No estúdio de Bruno, a argila se transforma magicamente em expressões vivas da cultura que o acolheu. Seu trabalho não é apenas arte visual, mas um testemunho tangível da fusão de identidades, um tributo à diversidade que é o cerne da experiência brasileira.",
        ]
    },
]