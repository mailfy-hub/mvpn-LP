import type { Metadata } from "next";
import { Locale, i18n } from "../../../i18n.config";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { getDictionary } from "@/lib/dictionary";
import DictionaryProvider from "./dictionary-provider";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MVPN",
  description: "Seu parceiro de investimentos",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={raleway.className}>
          <DictionaryProvider dictionary={dictionary}>
            <main>{children}</main>
          </DictionaryProvider>
      </body>
    </html>
  );
}
