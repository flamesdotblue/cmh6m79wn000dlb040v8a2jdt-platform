import React from 'react';
import { Brain, Target, LineChart, Clock, Shield, Sparkles, Activity, Rocket } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Diagnostic Intelligence Engine',
    tagline: '20-question micro-concept finder with Bayesian inference',
    details: 'Pinpoints gaps across 200+ conceptual atoms, builds a heat map, and prescribes the shortest path to mastery.'
  },
  {
    icon: Target,
    title: 'Personalized Study Path',
    tagline: 'A unique 365-day battle plan for your brain',
    details: 'Schedules optimized by your peak times, prerequisites, rank target, and learning velocity.'
  },
  {
    icon: Sparkles,
    title: 'AI Doubt Solver (Socratic)',
    tagline: 'Hints → guided discovery → visuals → reinforcement',
    details: 'Builds thinking muscles with adaptive conversational guidance and immediate practice variants.'
  },
  {
    icon: LineChart,
    title: 'Intelligent Mock Tests',
    tagline: 'Tests that teach, not just score',
    details: 'Adaptive difficulty, in-test strategy cues, and deep post-test performance DNA analysis.'
  },
  {
    icon: Activity,
    title: 'Concept Connection Mapper',
    tagline: 'See the matrix of interdependent ideas',
    details: "Visualizes cross-chapter dependencies and generates integrated problems you'll actually face."
  },
  {
    icon: Clock,
    title: 'Memory Retention Engine',
    tagline: 'Spaced repetition tuned to you',
    details: 'Predicts your forgetting curves and auto-injects 10-min micro-revivals into your day.'
  },
  {
    icon: Brain,
    title: 'Weakest Link Identifier',
    tagline: 'Find the hidden blockers',
    details: 'Uncovers foundational skill gaps (even from Class 8/9) that silently sabotage Advanced topics.'
  },
  {
    icon: Shield,
    title: 'Peer Benchmarking (Private)',
    tagline: 'Anonymous, healthy competition',
    details: 'See percentile vs. similar aspirants without toxic comparison. Learn what toppers mastered by now.'
  },
  {
    icon: Target,
    title: 'Exam Strategy Simulator',
    tagline: 'Train decisions under pressure',
    details: 'Time-boxing, guessing optimization, section order, and fatigue-aware pacing drills.'
  },
  {
    icon: Rocket,
    title: 'Wellness & Motivation',
    tagline: 'The mentor who cares about you',
    details: 'Burnout prevention, mood-aware nudges, meaningful milestones, and a calm parent dashboard.'
  }
];

const FeatureCard = ({ icon: Icon, title, tagline, details }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/[0.08] transition">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-fuchsia-500/10 via-violet-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
    <div className="relative z-10">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-white/80">{tagline}</p>
      <p className="mt-3 text-sm text-white/70 leading-relaxed">{details}</p>
    </div>
  </div>
);

const FeatureShowcase = () => {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">10 Game-Changing Capabilities</h2>
        <p className="mt-2 text-white/75 max-w-2xl">Purpose-built for JEE: conceptual precision, adaptive planning, and strategy execution with wellness at the core.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </div>
    </section>
  );
};

export default FeatureShowcase;
