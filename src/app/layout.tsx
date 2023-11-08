import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/Header"

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
      <body className="bg-zinc-200">
        <Header/>
        
        <div className="mt-28 max-w-5xl mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}
