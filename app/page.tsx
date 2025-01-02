import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/button';
// import { Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="w-full max-w-2xl mx-auto py-16 space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800">
            こんにちは、私のブログへようこそ！
          </h1>
          <p className="text-xl text-gray-600">
            Webエンジニア / フロントエンド開発者
          </p>
        </div>

        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full" />
          <Image
            src="/assets/images/profile/kodak.jpeg"
            alt="kodak"
            fill
            className="object-cover rounded-full p-1"
          />
        </div>

        <div className="space-y-8 text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            私はWebエンジニアとして働いています。このブログでは、技術的な知見や日々の学びを共有していきます。
            主にフロントエンド開発、React、TypeScriptについて書いていく予定です。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/posts">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-700">
                記事を読む
              </Button>
            </Link>
            {/* <div className="flex gap-4">
              <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                <Github className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10 border-gray-800 hover:bg-gray-900">
                <Github className="w-5 h-5" />
              </button>
            </div> */}  
          </div>
        </div>
      </div>
    </div>
  );
}
