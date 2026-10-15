import { notFound } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '../../../../lib/supabase/server';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return []; // Next.js will render slugs on demand at runtime
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from('posts')
    .select('title, excerpt')
    .eq('slug', slug)
    .single();

  if (!post) return {};

  return {
    title: `${post.title} | Davivy Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-black text-white pt-12 pb-24 px-6 md:px-14">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={15} /> Back to Blog
        </Link>

        {/* FEATURED COVER IMAGE */}
        {post.cover_image && (
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden border border-zinc-800 mb-10 bg-zinc-900">
            <img
              src={post.cover_image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <header className="mb-12 border-b border-zinc-800/80 pb-8">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest block mb-3">
            {new Date(post.created_at).toLocaleDateString()} · By David Ibekwe (Davivy)
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>
        </header>

        {/* ARTICLE CONTENT */}
        <div className="text-zinc-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap flex flex-col gap-4">
          {post.content.startsWith('<') ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <p>{post.content}</p>
          )}
        </div>
      </article>
    </div>
  );
}