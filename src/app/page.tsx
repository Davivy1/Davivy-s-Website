import Link from 'next/link';
import MediaShowcase from '../components/davivy/MediaShowcase';
import { ArrowRight, Code, Video, Globe, BookOpen } from 'lucide-react';

export default function HomePage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'David Ibekwe',
    alternateName: 'Davivy',
    url: 'https://davivy.com',
    jobTitle: 'Tech Educator & Content Creator',
    sameAs: [
      'https://www.linkedin.com/in/davidibekwe',
      'https://open.spotify.com/artist/7bCl5R23kGtoXP09Vpv0KL',
    ],
  };

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 md:px-14 max-w-7xl mx-auto flex flex-col items-center text-center justify-center min-h-[80vh]">
        {/*<span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 border border-zinc-800 px-4 py-2 rounded-full mb-6">
          Artist · Tech Educator · Content Creator
        </span>*/}

        <h1 className="font-serif text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-6">
          DAVIVY
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
          Making music, building digital experiences, and empowering the next generation of tech enthusiasts. Explore my portfolio, discography, and creative journey.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link
            href="/portfolio"
            className="bg-white text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-md hover:bg-zinc-200 transition-all flex items-center gap-2"
          >
            View Portfolio <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="border border-zinc-700 text-zinc-200 font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-md hover:border-zinc-300 hover:text-white transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* SPOTIFY & YOUTUBE EMBEDS */}
      <MediaShowcase />

      {/* WHAT I DO SECTION */}
      {/* <section className="w-full py-20 px-6 md:px-14 max-w-7xl mx-auto border-t border-zinc-800/80">
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Areas of Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">
            What I Do
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 hover:border-zinc-500 transition-all">
            <Code className="text-zinc-300 mb-4" size={28} />
            <h3 className="font-serif text-lg font-bold text-white mb-2">Tech Education</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Facilitating coding, web design, and digital literacy for learners aged 6–18 via FlipLearnKids and Access Bank Tech Skill-Up.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 hover:border-zinc-500 transition-all">
            <Video className="text-zinc-300 mb-4" size={28} />
            <h3 className="font-serif text-lg font-bold text-white mb-2">Content Creation</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Filming and editing promotional content for digital platforms. Experienced with CapCut, Canva, and social media storytelling.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 hover:border-zinc-500 transition-all">
            <Globe className="text-zinc-300 mb-4" size={28} />
            <h3 className="font-serif text-lg font-bold text-white mb-2">Web Design</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Building structured, styled web pages using modern web frameworks with clean layouts, accessibility, and responsiveness.
            </p>
          </div>

          <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-6 hover:border-zinc-500 transition-all">
            <BookOpen className="text-zinc-300 mb-4" size={28} />
            <h3 className="font-serif text-lg font-bold text-white mb-2">Digital Journalism</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Sourcing and writing headline news as an Editorial Intern at Look at Us, covering Pop Culture with clarity and accuracy.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}