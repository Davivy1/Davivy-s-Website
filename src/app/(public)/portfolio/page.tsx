'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Award, Code, Video, BookOpen, GraduationCap, Music, Palette } from 'lucide-react';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'web', label: 'Web Design' },
    { id: 'edu', label: 'Tech Education' },
    { id: 'content', label: 'Content Creation' },
    { id: 'journalism', label: 'Journalism' },
    { id: 'design', label: 'Graphic Design' },
    { id: 'music', label: 'Music' },
  ];

  const projects = [
    // WEB PROJECTS
    {
      category: 'web',
      icon: <Code size={22} />,
      title: 'Personal Web Hub',
      description: 'Responsive multi-faceted website for Davivy featuring an embedded Spotify & YouTube showcase, dynamic blog engine, and professional portfolio.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Supabase'],
      link: '/',
    },
    {
      category: 'web',
      icon: <Code size={22} />,
      title: 'Registration Form Web App',
      description: 'Fully functional dynamic web registration form with interactive JavaScript validation and data summary display without page reload.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      link: '#',
    },
    {
      category: 'web',
      icon: <Code size={22} />,
      title: 'Student Grades Analytics Table',
      description: 'Academic performance management interface displaying student grades across assignments and final examinations with automatic averages.',
      tech: ['HTML5', 'CSS3'],
      link: '#',
    },

    // EDUCATION PROJECTS
    {
      category: 'edu',
      icon: <GraduationCap size={22} />,
      title: 'Access Bank Tech Skill-Up Curriculum',
      description: 'Designed and implemented Scratch block-based coding lesson plans. Trained 100+ students aged 6–18 in programming and web design fundamentals.',
      tech: ['Scratch', 'Web Design', 'Curriculum Dev'],
      link: '#',
    },
    {
      category: 'edu',
      icon: <GraduationCap size={22} />,
      title: 'PSSA Numeracy Tutoring',
      description: 'Provided personalized 1-on-1 Numeracy tutoring to primary school learners via FlipLearnKids, leading to top academic exam performance.',
      tech: ['Tutoring', 'Numeracy', 'FlipLearnKids'],
      link: '#',
    },

    // CONTENT & JOURNALISM
    {
      category: 'content',
      icon: <Video size={22} />,
      title: 'FlipLearnKids Promotional Media',
      description: 'Filmed and edited high-engagement promotional video campaigns tailored for social media awareness and student enrollment.',
      tech: ['CapCut', 'Canva', 'Video Editing'],
      link: '#',
    },
    {
      category: 'journalism',
      icon: <BookOpen size={22} />,
      title: 'Look at Us Editorial Journalism',
      description: 'Sourcing, writing, and publishing headline news covering youth development, technology trends, and culture across Nigeria.',
      tech: ['Digital Journalism', 'Copywriting'],
      link: '#',
    },

    // DESIGN & MUSIC
    {
      category: 'design',
      icon: <Palette size={22} />,
      title: 'FLID Visual Design Campaigns',
      description: 'Created graphics and digital marketing materials for FLID supporting digital literacy and youth education campaigns.',
      tech: ['Canva', 'Brand Design'],
      link: '#',
    },
    {
      category: 'design',
      icon: <Palette size={22} />,
      title: 'WEFash Impact Fashion Project',
      description: 'Completed the WEFash Impact Project in Fashion and Design (2025). Served as Vice-Class President combining creativity with leadership.',
      tech: ['Fashion Design', 'Leadership'],
      link: '#',
    },
    {
      category: 'music',
      icon: <Music size={22} />,
      title: 'Davivy Discography & Singles',
      description: 'Pop-infused emotional singles including "I Wanna Be On Disney" streaming live on Spotify.',
      tech: ['Songwriting', 'Production', 'BandLab'],
      link: 'https://open.spotify.com/artist/7bCl5R23kGtoXP09Vpv0KL',
    },
  ];

  const certifications = [
    {
      title: 'WEFash Impact Project',
      subtitle: 'Fashion & Design · Certificate of Completion · 2025',
    },
    {
      title: 'Del-York Creative Academy',
      subtitle: 'Introduction to Animation & Post Production · 2024',
    },
    {
      title: 'Lagos State Robotics',
      subtitle: 'Certificate of Participation · 2022',
    },
    {
      title: 'Cadbury Bournvita Tech Boot Camp',
      subtitle: 'Certificate of Participation · Best Participant Award · 2020',
    },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <div className="w-full min-h-screen bg-black text-white pt-12 pb-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 border border-zinc-800 px-4 py-2 rounded-full">
            Professional Portfolio
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-6 mb-4">
            Projects & Work
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            A showcase of web development, tech education initiatives, content creation, editorial journalism, and creative projects.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all border ${
                activeTab === cat.id
                  ? 'bg-white text-black border-white'
                  : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-500 transition-all group"
            >
              <div>
                <div className="text-zinc-300 mb-4 group-hover:text-white transition-colors">
                  {project.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-medium tracking-wider text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.link !== '#' && (
                  <Link
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : '_self'}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
                  >
                    View Details <ExternalLink size={13} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS SECTION */}
        <div className="border-t border-zinc-800/80 pt-16">
          <div className="mb-10 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
              Credentials
            </span>
            <h2 className="text-3xl font-serif font-bold text-white mt-2">
              Certifications & Awards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-5 flex items-start gap-4 hover:border-zinc-600 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-zinc-400">
                    {cert.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}