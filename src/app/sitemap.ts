import type { MetadataRoute } from 'next';
import { createClient } from '@/lib/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://yourdomain.com'; // Replace with your actual live domain

  // Fetch all published blog posts from Supabase
  const supabase = await createClient();
  const { data: posts } = await supabase.from('posts').select('slug, updated_at').eq('published', true);

  const blogPosts = (posts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at || Date.now()),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    ...blogPosts,
  ];
}