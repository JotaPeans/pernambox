import type { Metadata } from "next"
import "./globals.css"

import Header from "./components/Header"
import ScreenProvider from "./ScreenProvider"

export const metadata: Metadata = {
  title: "Pernambox",
  description: "Totem que tem como missão apresentar novos artistas pernambucanos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="w-full overflow-x-hidden flex flex-col gap-5 bg-background">
        <Header/>

        <div className="max-w-[1080px] w-full mx-auto ">
          <ScreenProvider>
            {children}
          </ScreenProvider>
        </div>
      </body>
    </html>
  )
}
