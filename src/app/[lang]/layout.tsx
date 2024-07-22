import NavBar from "@/components/navbar/NavBar";
import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";

import { Locale } from "@/i18n-config";
import FooterBar from "@/components/footerBar/FooterBar";
import { Metadata } from "next";
import { getDictionary } from "@/get-dictionary";

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  return {
    title: dictionary.title.title,
    description: "OpenIM Official",
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} data-theme="light">
      <body>
        <NavBar />
        {children}
        <FooterBar />
        <Analytics />
      </body>
    </html>
  );
}
