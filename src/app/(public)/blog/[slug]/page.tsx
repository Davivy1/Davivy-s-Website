import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Static Page Shell (Prerenders cleanly at build time)
export default function BlogPostPage({ params }: BlogPageProps) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-white">
      <Suspense
        fallback={
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-zinc-800 rounded w-3/4"></div>
            <div className="h-4 bg-zinc-800 rounded w-1/4"></div>
            <div className="h-40 bg-zinc-900 rounded mt-8"></div>
          </div>
        }
      >
        <PostContent params={params} />
      </Suspense>
    </main>
  );
}

// 2. Async Data Fetcher Component (Streams data at runtime inside <Suspense>)
async function PostContent({ params }: BlogPageProps) {
  const { slug } = await params;

  const supabase = await createClient();
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-zinc-400 text-sm mb-8">
        Published on {post.created_at ? post.created_at.split('T')[0] : ''}
      </p>
      <div
        className="text-zinc-300 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}