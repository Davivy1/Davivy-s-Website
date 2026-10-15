'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '../../../lib/supabase/client';
import { Lock, LogIn, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center px-6 py-12 bg-black text-white">
      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800/80 rounded-xl p-8 shadow-2xl">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 mb-4">
            <Lock size={22} />
          </div>
          <h1 className="font-serif text-2xl font-bold text-white">
            Admin Portal
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Sign in to manage blog posts and site content
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-950/60 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-400 text-xs font-medium">
            <AlertCircle size={16} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="admin@davivy.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'} <LogIn size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}