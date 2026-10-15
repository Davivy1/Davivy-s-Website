'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '../../../lib/supabase/client';
import { Plus, Edit, Trash2, LogOut, FileText, CheckCircle, Clock } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  created_at: string;
}

export default function DashboardPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    async function checkAuthAndFetchPosts() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
        return;
      }

      const { data, error } = await supabase
        .from('posts')
        .select('id, title, slug, published, created_at')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    }

    checkAuthAndFetchPosts();
  }, [router, supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    const { error } = await supabase.from('posts').delete().eq('id', id);
    if (!error) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center text-zinc-400 text-xs font-semibold uppercase tracking-widest">
        Loading Admin Dashboard...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black text-white pt-12 pb-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* DASHBOARD HEADER */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 border-b border-zinc-800/80 pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400">
              Admin Portal
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-white mt-2">
              Blog Manager
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/editor"
              className="bg-white text-black font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded-lg hover:bg-zinc-200 transition-all flex items-center gap-2"
            >
              <Plus size={16} /> New Article
            </Link>
            <button
              onClick={handleLogout}
              className="border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 font-semibold text-xs uppercase tracking-widest px-5 py-3.5 rounded-lg transition-all flex items-center gap-2"
            >
              <LogOut size={15} /> Sign Out
            </button>
          </div>
        </div>

        {/* POSTS LIST */}
        <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl overflow-hidden">
          {posts.length === 0 ? (
            <div className="p-12 text-center text-zinc-500 text-xs uppercase tracking-wider flex flex-col items-center gap-3">
              <FileText size={32} className="text-zinc-700" />
              <span>No articles created yet. Click &quot;New Article&quot; to publish your first post!</span>
            </div>
          ) : (
            <div className="divide-y divide-zinc-800/80">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-zinc-900/40 transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-lg font-bold text-white">
                        {post.title}
                      </h3>
                      {post.published ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                          <CheckCircle size={10} /> Published
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                          <Clock size={10} /> Draft
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-zinc-500">
                      Published on {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={`/editor?id=${post.id}`}
                      className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
                      title="Edit Post"
                    >
                      <Edit size={16} />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-red-400 hover:text-red-300 hover:border-red-500/50 transition-colors"
                      title="Delete Post"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}