'use client';

export default function MediaShowcase() {
  return (
    <section className="w-full py-16 px-6 md:px-14 max-w-7xl mx-auto border-t border-zinc-800/80">
      <div className="mb-10 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
          Music & Content
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">
          Davivy Discography & Media
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Spotify Player Embed */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 md:p-6 backdrop-blur-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-4 flex items-center gap-2">
            Spotify Releases
          </h3>
          <div className="rounded-xl overflow-hidden border border-zinc-800">
            <iframe
              src="https://open.spotify.com/embed/artist/7bCl5R23kGtoXP09Vpv0KL?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>

        {/* YouTube / Video Showcase Embed */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 md:p-6 backdrop-blur-sm flex flex-col justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-4 flex items-center gap-2">
            🎬 YouTube & Promotional Content
          </h3>
          <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-black">
            {/* Replace "VIDEO_ID" with your actual YouTube video or channel playlist ID */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/videoseries?si=gosWFYxfkvlCQ2Bp&amp;list=PLJeviSpuHQupE4_7iHkehFutbJFOEBw8q" 
              title="Davivy YouTube Channel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
            Featured promotional content, music videos, and storytelling produced by David Ibekwe.
          </p>
        </div>
      </div>
    </section>
  );
}