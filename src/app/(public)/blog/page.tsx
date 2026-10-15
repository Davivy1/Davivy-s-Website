import { Suspense } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white pt-12 pb-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-6 mb-4">
            Davivy's Blog
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            What's Davivy saying today?
          </p>
        </div>

        <Suspense
          fallback={
            <div className="text-center py-16 text-zinc-500 text-xs uppercase tracking-widest">
              Loading posts...
            </div>
          }
        >
          <BlogPostsList />
        </Suspense>
      </div>
    </div>
  );
}

async function BlogPostsList() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16 text-zinc-500 text-xs uppercase tracking-widest flex flex-col items-center gap-3">
        <BookOpen size={32} className="text-zinc-700" />
        <span>No articles published yet. Check back soon!</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="bg-zinc-950 border border-zinc-800/80 rounded-xl overflow-hidden flex flex-col justify-between hover:border-zinc-500 transition-all group"
        >
          <div>
            {post.cover_image && (
              <div className="relative w-full h-48 bg-zinc-900 border-b border-zinc-800/80 overflow-hidden">
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            <div className="p-6">
              <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider block mb-3">
                {post.created_at ? post.created_at.split('T')[0] : ''}
              </span>
              <h2 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-zinc-200 transition-colors">
                {post.title}
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {post.excerpt}
              </p>
            </div>
          </div>

          <div className="p-6 pt-0">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors pt-4 border-t border-zinc-800/80 w-full">
              Read Article <ArrowRight size={14} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}