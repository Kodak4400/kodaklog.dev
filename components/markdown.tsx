import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className="prose prose-gray max-w-none text-gray-800 markdown"
    >
      {children}
    </ReactMarkdown>
  );
}

