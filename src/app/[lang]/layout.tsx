import NavBar from "@/components/navbar/NavBar"
import "./globals.scss"
import { Inter } from "next/font/google"

import FooterBar from "@/components/footerBar/FooterBar"

// const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "OpenIM Official",
  description: "OpenIM Official",
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      {/*<body className={inter.className}>*/}
      {/*  <NavBar />*/}
      {/*  {children}*/}
      {/*</body>*/}
      <body>
        <NavBar />
        {children}
        <FooterBar />
      </body>
    </html>
  )
}
