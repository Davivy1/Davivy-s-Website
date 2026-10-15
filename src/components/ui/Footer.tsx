'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaSpotify, FaYoutube, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 py-12 px-6 md:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand & Persona Summary */}
        <div className="md:col-span-1 flex flex-col gap-3">
          <h2 className="font-serif text-2xl font-bold text-white tracking-widest uppercase">
            DAVIVY
          </h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Artist, Content Creator, and Tech Educator blending creative expression with digital innovation.
          </p>
          <p className="text-xs text-zinc-500 pt-2">
            &copy; {year ?? '2026'} David Ibekwe. All rights reserved.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200">
            Explore
          </h3>
          <ul className="flex flex-col gap-2 text-xs">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition-colors">Professional Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Updates</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Direct Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200">
            Get In Touch
          </h3>
          <ul className="flex flex-col gap-2 text-xs">
            <li className="flex items-center gap-2">
              <FiMail className="text-zinc-400 text-sm" />
              <a href="mailto:davidpraiseibk@gmail.com" className="hover:text-white transition-colors">
                davidpraiseibk@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-zinc-400 text-sm" />
              <a href="tel:+2349167421865" className="hover:text-white transition-colors">
                +234 916 742 1865
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-zinc-400 text-sm" />
              <span>Lagos State, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* Socials & Streaming */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-200">
            Connect & Listen
          </h3>
          <div className="flex flex-col gap-2 text-xs">
            <a
              href="https://www.linkedin.com/in/davidibekwe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-sm" /> LinkedIn
            </a>
            <a
              href="https://open.spotify.com/artist/7bCl5R23kGtoXP09Vpv0KL"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaSpotify className="text-sm" /> Spotify
            </a>
            <a
              href="https://www.youtube.com/@davivy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaYoutube className="text-sm" /> YouTube
            </a>
            <a 
              href="https://www.instagram.com/thedavivy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <FaInstagram className="text-sm" /> Instagram
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}