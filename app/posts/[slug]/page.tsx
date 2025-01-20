import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Markdown } from '@/components/markdown';
import { formatDate } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  console.log(posts.map((post) => ({
    slug: post.slug,
  })));
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const generateMetadata = async ({ params }: { params: Promise<{
  slug: string;
}> }): Promise<Metadata> => {
  const p = await params
  const post = getPostBySlug(p.slug);

  if (!post) {
    notFound();
  }

  return {
    title: `${post.title} | ${process.env.siteName}`,
    description: `${post.description}`,
  };
}

export default async function Post({ params }: { params: Promise<{
  slug: string;
}> }) {
  const p = await params
  const post = getPostBySlug(p.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-4">
      <div className="mb-7">
        <Link 
          href="/posts" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          記事一覧に戻る
        </Link>
      </div>

      <article className="space-y-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <time className="text-gray-600" dateTime={post.date.toString()}>
          {formatDate(post.date)}
        </time>
        <div className="prose prose-gray max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
      </article>
    </div>
  );
}