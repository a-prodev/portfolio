import "@/global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { i18n } from '@/i18n-config'

export const metadata: Metadata = {
  title: {
    default: "prodev",
    template: "%s | prodev",
  },
  description: "Web Developer",
  openGraph: {
    title: "prodev",
    description:
      "Web Developer",
    url: "https://aprodev.com.br",
    siteName: "aprodev.com.br",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Prodev",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string }
}) {
  return (
    <html lang={params.lang} className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
