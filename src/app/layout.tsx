import NavBar from "@/components/navbar/NavBar"
import "./globals.scss"
import { Inter } from "next/font/google"
import FooterBar from "@/components/footerBar/FooterBar"

// const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "OpenIM Official",
  description: "OpenIM Official",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
