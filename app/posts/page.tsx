import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { Card } from '@/components/card';
import { formatDate } from '@/lib/utils';

export default function Posts() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold text-gray-800 mt-4">Posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <Card className="p-5 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2 text-gray-600">{post.title}</h2>
              <p className="text-gray-600 text-sm">{formatDate(post.date)}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}