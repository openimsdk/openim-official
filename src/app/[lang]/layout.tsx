import NavBar from "@/components/navbar/NavBar";
import "./globals.scss";

import { Locale } from "@/i18n-config";
import FooterBar from "@/components/footerBar/FooterBar";

export const metadata = {
  title: "OpenIM Official",
  description: "OpenIM Official",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body>
        <NavBar />
        {children}
        <FooterBar />
      </body>
    </html>
  );
}
