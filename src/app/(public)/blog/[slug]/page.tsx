import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

// Define the interface that was missing
interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface PostSlug {
  slug: string;
}

export async function generateStaticParams() {
  try {
    const supabase = await createClient();
    const { data: posts } = await supabase.from('posts').select('slug');

    if (posts && posts.length > 0) {
      return posts.map((post: PostSlug) => ({
        slug: post.slug,
      }));
    }
  } catch (error) {
    // Fallback if Supabase fetch fails or table is empty during build
  }

  // Return at least one fallback slug so Next.js 16 Cache Components validation passes
  return [{ slug: 'welcome' }];
}

export default async function BlogPostPage({ params }: BlogPageProps) {
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
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
        <p className="text-zinc-400 text-sm mb-8">
          Published on {post.created_at ? post.created_at.split('T')[0] : ''}
        </p>
        <div 
          className="text-zinc-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>
    </main>
  );
}