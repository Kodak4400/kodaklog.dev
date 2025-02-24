import type { Metadata } from "next";
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { Card } from '@/components/card';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: `Posts | ${process.env.siteName}`,
  description: "kodak が post した Blog 一覧.",
};

export default function Posts() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mt-4">記事一覧</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <h2 className="font-bold text-xl font-semibold mb-2">{post.title}</h2>
              <time dateTime={post.date} className="text-sm mb-2">{formatDate(post.date)}</time>
              <div className="prose prose-lg max-w-none">{post.description}</div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}