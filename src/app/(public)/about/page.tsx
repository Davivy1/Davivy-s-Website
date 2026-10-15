import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Globe, Music, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white pt-12 pb-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER BANNER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/*<span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 border border-zinc-800 px-4 py-2 rounded-full">
            Who I Am
          </span>*/}
          <h1 className="font-serif text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-6 mb-4">
            David Soromtochukwu Ibekwe
          </h1>
          <p className="text-sm text-zinc-400 uppercase tracking-widest font-semibold">
            Davivy · Singer, Songwriter 
          </p>
        </div>

        {/* BIO & PROFILE SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* LEFT: IMAGE & DIRECT LINKS */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-zinc-800 mb-6 bg-zinc-900 shadow-2xl">
              <Image
                src="/images/davivy.png"
                alt="David Soromtochukwu Ibekwe (Davivy)"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="w-full max-w-md bg-zinc-950 border border-zinc-800/80 rounded-xl p-6 flex flex-col gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-zinc-300" />
                <a href="mailto:davidpraiseibk@gmail.com" className="hover:text-white transition-colors">
                  davidpraiseibk@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-zinc-300" />
                <span>Lagos State, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-zinc-300" />
                <a href="https://www.linkedin.com/in/davidibekwe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  linkedin.com/in/davidibekwe
                </a>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-zinc-800">
                <Music size={16} className="text-zinc-300" />
                <a href="https://open.spotify.com/artist/7bCl5R23kGtoXP09Vpv0KL" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Spotify Discography
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: NARRATIVE BIO */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-zinc-300 text-sm md:text-base leading-relaxed">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2">
              The Journey So Far
            </h2>

            <p>
              David Soromtochukwu Ibekwe, known creatively as <strong className="text-white">Davivy</strong>, is a Lagos-based independent singer, songwriter, and product innovator blending soulful vocals with modern alternative indie-pop sounds. Driven by a childhood fascination with storytelling, his music explores themes of ambition, vulnerability, and navigating youth culture.
            </p>

            <p>
              Davivy gained traction among indie enthusiasts with his underground breakout track,<em className="text-white">&quot;I Wanna Be On Disney&quot;</em> and the atmospheric ballad <em className="text-white">&quot;Are You There?&quot;</em>. Championing the power of mobile music production, he frequently gives fans a raw look into his creative evolution, utilizing platforms like BandLab to transform bedroom melodies into fully realized digital singles.
            </p>

            <h3 className="font-serif text-xl font-bold text-white pt-4 border-t border-zinc-800">
              A Multifaceted Persona: Arts and Technology
            </h3>

            <p>
              Parallel to his musical artistry, David is deeply engaged in technology and product innovation. Pursuing a B.Tech in Information Technology at the Federal University of Technology, Owerri (FUTO), he approaches tech with the same curiosity and storytelling spirit that guides his music.
            </p>

            {/*<p>
              Whether structuring clean web code, facilitating digital skill-up programs for younger learners, or writing melodies late at night, David views music and tech as two sides of the same creative coin—both serving as powerful tools to connect, solve real-world problems, and inspire others.
            </p>*/}

            <div className="pt-6">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded-md hover:bg-zinc-200 transition-all"
              >
                Explore Professional Portfolio <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>

        {/* ACADEMIC BACKGROUND */}
        {/*<div className="border-t border-zinc-800/80 pt-16">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Education
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">
              Academic Background
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-6">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                2023 — Present
              </span>
              <h3 className="font-serif text-lg font-bold text-white mt-2">
                Federal University of Technology, Owerri (FUTO)
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                B.Tech in Information Technology · Expected Graduation: 2028
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-6">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">
                Graduated 2023
              </span>
              <h3 className="font-serif text-lg font-bold text-white mt-2">
                Government College Ikorodu
              </h3>
              {/* <p className="text-xs text-zinc-400 mt-1">
                West African Senior School Certificate Examination (WASSCE)
              </p> 
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
}