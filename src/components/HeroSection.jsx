import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Brain, LineChart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black pointer-events-none" />

      <header className="relative z-10">
        <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-wide">AI Acharya</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#cta" className="hover:text-white transition">Get early access</a>
          </div>
        </nav>
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-16 lg:pt-24 lg:pb-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <LineChart className="h-3.5 w-3.5" />
            Personalized JEE learning and testing engine
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl leading-tight">
            Build your rank with an AI that diagnoses, plans, and trains
          </h1>
          <p className="mt-5 text-white/80 max-w-2xl">
            A futuristic platform that finds conceptual atoms you're missing, crafts a 365-day battle plan, runs tests that teach, and keeps your mind healthy for the long game.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a href="#cta" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 font-medium text-white shadow-lg shadow-fuchsia-500/20">
              <Rocket className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              Get early access
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 backdrop-blur hover:bg-white/10 transition">
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
