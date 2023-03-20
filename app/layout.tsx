import "./global.css";
import clsx from "clsx";
import localFont from "next/font/local";
import { Metadata } from "next";

const ddin = localFont({
  variable: "--font-d-din",
  src: [
    {
      path: "../public/fonts/d-din.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/d-din-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Elon Reads",
    template: "%s | Elon Reads",
  },
  description: "📚🚀 A showcase of books that inspire Elon Musk.",
  openGraph: {
    title: "Elon Reads",
    description: "📚🚀 A showcase of books that inspire Elon Musk.",
    url: "https://elonreads.com",
    siteName: "Elon Reads",
    images: [
      {
        url: "https://hecker.vc/images/og.jpg",
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
    title: "Elon Reads",
    card: "summary_large_image",
  },
  icons: {
    icon: "/icons/favicon/icon.png",
    shortcut: "icons/favicon/favicon.png",
    apple: "/icons/favicon/apple-icon.png",
    other: {
      rel: "/icons/favicon/apple-icon-precomposed",
      url: "/icons/favicon/apple-icon-precomposed.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "text-black bg-white dark:text-white dark:bg-black",
        ddin.variable
      )}
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto font-body font-ddin">
        <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-6 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
