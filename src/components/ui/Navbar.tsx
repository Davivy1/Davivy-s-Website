'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Lock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800/80 px-6 md:px-14 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Davivy Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-zinc-700 transition-all group-hover:border-zinc-300 group-hover:scale-105">
            <Image
              src="/images/davivy.png"
              alt="Davivy / David Ibekwe"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-serif text-xl font-bold text-zinc-100 tracking-widest uppercase group-hover:text-white transition-colors">
            DAVIVY
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`text-xs font-semibold uppercase tracking-widest transition-all ${
                    isActive
                      ? 'text-white border-b border-zinc-200 pb-1'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          {/* Admin Portal Gateway Icon */}
          <li>
            <Link
              href="/login"
              title="Admin Portal"
              className="text-zinc-500 hover:text-zinc-200 transition-colors p-1 flex items-center"
            >
              <Lock size={15} />
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-300 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6 mt-4 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-semibold uppercase tracking-widest ${
                pathname === link.path ? 'text-white' : 'text-zinc-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="text-xs font-semibold uppercase tracking-widest text-zinc-400 flex items-center gap-2 pt-2 border-t border-zinc-800"
          >
            <Lock size={14} /> Admin Login
          </Link>
        </div>
      )}
    </nav>
  );
}