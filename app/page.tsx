import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/button';
// import { Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[calc(90vh-4rem)] flex items-center">
      <div className="w-full max-w-2xl mx-auto py-16 space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800">
            About me
          </h1>
          <p className="text-xl text-gray-600">
            Hey, I am kodak @ Cloud Engineer
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
            このブログでは、技術的な知見や日々の学びをPostしていきます。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/posts">
              <Button size="lg" className="bg-gray-800 hover:bg-gray-700">
                記事を読む
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
