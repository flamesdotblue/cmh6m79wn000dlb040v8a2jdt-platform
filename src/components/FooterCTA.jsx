import React from 'react';

const FooterCTA = () => {
  return (
    <section id="cta" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-violet-600/20 to-cyan-500/20 p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_40%)]" />
        <div className="relative">
          <h3 className="text-2xl sm:text-3xl font-bold">Ready to train with an AI mentor built for JEE?</h3>
          <p className="mt-2 text-white/80 max-w-2xl">Join the early access list to get the diagnostic engine, personalized plan, and strategy simulator as we roll out.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full sm:flex-1 rounded-xl border border-white/15 bg-black/60 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button type="submit" className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 font-medium text-white shadow-lg shadow-fuchsia-500/20">
              Get early access
            </button>
          </form>
          <p className="mt-3 text-xs text-white/60">No spam. We'll invite in batches and share product updates.</p>
        </div>
      </div>

      <footer className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div>© {new Date().getFullYear()} AI Acharya. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
        </div>
      </footer>
    </section>
  );
};

export default FooterCTA;
