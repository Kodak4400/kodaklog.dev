import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/header';
import Footer from '@/components/footer';

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-[#f5f5f5] text-[#333333]`}>
        <Header />
        <main className="min-h-screen max-w-[1200px] mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
