'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '../../../lib/supabase/client';
import { Save, ArrowLeft, Send } from 'lucide-react';

function EditorContent() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [published, setPublished] = useState(true);
  const [saving, setSaving] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get('id');
  const supabase = createClient();

  useEffect(() => {
    async function loadPost() {
      if (!postId) return;
      const { data } = await supabase
        .from('posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (data) {
        setTitle(data.title);
        setSlug(data.slug);
        setExcerpt(data.excerpt || '');
        setContent(data.content);
        setCoverImage(data.cover_image || '');
        setPublished(data.published);
      }
    }
    loadPost();
  }, [postId, supabase]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!postId) {
      setSlug(
        val
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)+/g, '')
      );
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const postData = {
      title,
      slug,
      excerpt,
      content,
      cover_image: coverImage,
      published,
      updated_at: new Date().toISOString(),
    };

    if (postId) {
      await supabase.from('posts').update(postData).eq('id', postId);
    } else {
      await supabase.from('posts').insert([postData]);
    }

    setSaving(false);
    router.push('/dashboard');
    router.refresh();
  };

  return (
    <div className="w-full min-h-screen bg-black text-white pt-12 pb-24 px-6 md:px-14">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push('/dashboard')}
            className="text-xs font-semibold uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Dashboard
          </button>

          <h1 className="font-serif text-2xl font-bold text-white">
            {postId ? 'Edit Article' : 'Write New Article'}
          </h1>
        </div>

        <form onSubmit={handleSave} className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-8 flex flex-col gap-6">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Title *
            </label>
            <input
              type="text"
              required
              placeholder="Article title..."
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-base text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
              URL Slug *
            </label>
            <input
              type="text"
              required
              placeholder="article-url-slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-xs font-mono text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Excerpt / Brief Preview
            </label>
            <input
              type="text"
              placeholder="Short 1-2 sentence description..."
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Cover Image URL (Optional)
            </label>
            <input
              type="text"
              placeholder="https://example.com/cover.jpg"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Article Content (HTML / Markdown) *
            </label>
            <textarea
              required
              rows={12}
              placeholder="Write article content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors resize-y"
            ></textarea>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input
              type="checkbox"
              id="published"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-4 h-4 rounded border-zinc-800 bg-zinc-900 text-white focus:ring-0"
            />
            <label htmlFor="published" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Publish immediately
            </label>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="bg-white text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
          >
            {saving ? 'Saving Article...' : 'Save & Publish'} <Send size={15} />
          </button>
        </form>

      </div>
    </div>
  );
}

export default function EditorPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs uppercase tracking-widest text-zinc-500">Loading Editor...</div>}>
      <EditorContent />
    </Suspense>
  );
}