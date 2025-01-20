import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kodaklog-dev.pages.dev/"),
  title: "kodaklog",
  description: "kodak の Tech Blog.",
  openGraph: {
    type: "website",
    title: "kodaklog",
    description: "kodak の Tech Blog.",
    siteName: `${process.env.siteName}`,
    images: [{
      url: `${process.env.thumbnail}`,
    }]
  },
  other: {
    'thumbnail': `${process.env.thumbnail}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} min-h-screen bg-gray-200 text-gray-600`}>
        <Header />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
