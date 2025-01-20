import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
            {process.env.siteName}
          </Link>
          <div className="space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link href="/posts" className="text-gray-600 hover:text-gray-800">
              Posts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
