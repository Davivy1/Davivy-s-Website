'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Globe, CheckCircle2, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    setSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white pt-12 pb-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 border border-zinc-800 px-4 py-2 rounded-full">
            Reach Out
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-6 mb-4">
            Get In Touch
          </h1>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Whether it&apos;s a music collaboration, web project, tutoring enquiry, or just a hello — I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: DIRECT CONTACT DETAILS */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-8">
              <h2 className="font-serif text-2xl font-bold text-white mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-xs text-zinc-400 leading-relaxed mb-8">
                Open for freelance web design projects, content creation, tutoring opportunities, music collaborations, and media engagements.
              </p>

              <div className="flex flex-col gap-6 text-xs">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5">
                      Email
                    </span>
                    <a href="mailto:davidpraiseibk@gmail.com" className="text-sm text-white hover:underline">
                      davidpraiseibk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5">
                      Phone
                    </span>
                    <a href="tel:+2349167421865" className="text-sm text-white hover:underline">
                      +234 916 742 1865
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5">
                      Location
                    </span>
                    <p className="text-sm text-white">
                      Lagos State, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300">
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-0.5">
                      LinkedIn
                    </span>
                    <a
                      href="https://www.linkedin.com/in/davidibekwe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:underline"
                    >
                      linkedin.com/in/davidibekwe
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* AVAILABILITY BANNER */}
            <div className="bg-zinc-950 border border-zinc-800/80 border-l-2 border-l-emerald-500 rounded-xl p-5 flex items-center gap-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="text-xs text-zinc-400">
                <strong className="text-white">Currently available</strong> for freelance web design, content creation, and online tutoring opportunities.
              </p>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800/80 rounded-xl p-8">
            <h3 className="font-serif text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Topic *
                </label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-400 transition-colors"
                >
                  <option value="" disabled>Select a topic...</option>
                  <option value="Music Collaboration">Music Collaboration</option>
                  <option value="Web Design Project">Web Design Project</option>
                  <option value="Tutoring / Education">Tutoring / Education</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="Media / Speaking">Media / Speaking</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or enquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-400 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-white text-black font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 mt-2"
              >
                Send Message <Send size={15} />
              </button>

              {submitted && (
                <div className="bg-emerald-950/60 border border-emerald-500/50 rounded-lg p-4 flex items-center gap-3 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 size={18} />
                  Message received! I&apos;ll get back to you as soon as possible.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}