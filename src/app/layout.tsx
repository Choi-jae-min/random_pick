import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "RandomPick - 랜덤 추첨 & 게임 생성기",
    description: "다양한 랜덤 게임을 한곳에서! 랜덤 추첨, 제비뽑기, 팀 나누기 등 다양한 기능 제공.",
    keywords: ["랜덤 추첨", "제비뽑기", "랜덤 게임", "팀 나누기", "이름 추첨기","게임"],
    authors: [{ name: "RandomPick", url: "https://www.random-pick.com" }],
    robots: "index, follow",
    openGraph: {
        title: "RandomPick - 랜덤 추첨 & 게임 생성기",
        description: "다양한 랜덤 게임을 한곳에서! 랜덤 추첨, 제비뽑기, 팀 나누기 등 다양한 기능 제공.",
        url: "https://www.random-pick.com",
        siteName: "RandomPick",
        // images: [
        //     {
        //         url: "https://randompick.com/og-image.jpg",
        //         width: 1200,
        //         height: 630,
        //         alt: "RandomPick 랜덤 추첨 서비스",
        //     },
        // ],
        locale: "ko_KR",
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "RandomPick - 랜덤 추첨 & 게임 생성기",
    //     description: "다양한 랜덤 게임을 한곳에서! 랜덤 추첨, 제비뽑기, 팀 나누기 등 다양한 기능 제공.",
    //     images: ["https://randompick.com/og-image.jpg"],
    // },
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ko">
        <head>
            <meta name="naver-site-verification" content="c4c0f2d5ee28d35c91b430aa55c29318e4ee8655" />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
        >
        {children}
        </body>
        </html>
    );
}
