import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/button';
import { Github, BookOpen, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-8 py-12">
      <div className="relative w-32 h-32 rounded-full overflow-hidden">
        <Image
          src="/assets/images/profile/kodak.jpeg"
          alt="kodak"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-bold mb-4">こんにちは、kodakです👋</h1>
        <p className="text-lg text-[#666666] mb-6">
          フルスタックエンジニアとして活動しています。
          主にTypeScript、React、Next.js、Node.jsを使用した開発を行っています。
          技術的な知見や日々の学びをブログで共有しています。
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link href="/posts">
          <Button size="lg" className="bg-gray-800 hover:bg-gray-700">
            記事を読む
          </Button>
        </Link>
      </div>

      <div className="flex space-x-6">
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#333333] hover:text-[#666666]"
          aria-label="GitHub"
        >
          <Github className="h-6 w-6" />
        </Link>
        <Link
          href="https://b.hatena.ne.jp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#333333] hover:text-[#666666]"
          aria-label="Hatena Blog"
        >
          <BookOpen className="h-6 w-6" />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#333333] hover:text-[#666666]"
          aria-label="Twitter"
        >
          <Twitter className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
