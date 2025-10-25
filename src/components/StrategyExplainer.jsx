import React from 'react';

const CodeBlock = ({ children }) => (
  <pre className="mt-3 w-full overflow-x-auto rounded-xl border border-white/10 bg-black/60 p-4 text-xs leading-relaxed text-white/90">
    <code>{children}</code>
  </pre>
);

const StrategyExplainer = () => {
  return (
    <section id="how" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold">Diagnostic Intelligence Engine</h3>
          <p className="mt-2 text-white/80">The 20-Question Foundation Finder uses Bayesian inference to expose conceptual atoms and their dependencies.</p>
          <CodeBlock>{`Input: Student attempts "A block slides down an incline..."
AI Analysis:
- Wrong due to Free Body Diagram confusion (not friction)
- Root cause: Weak in "Resolving Forces" (Class 11)
- Ripple: Blocks 47 other JEE problems
- Action: 15-min targeted module on force resolution`}
          </CodeBlock>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold">Personalized Study Path</h3>
          <p className="mt-2 text-white/80">Your unique 365-day plan adapts daily to performance, energy cycles, and target rank.</p>
          <CodeBlock>{`Monday 6:00 AM - 7:30 AM
Physics: Rotational Dynamics - Problem Set #3
(You struggled here last week. Today we nail it.)

Why this now?
- 6 AM = peak focus time for Physics
- Unlocks 3 chapters scheduled this week
- JEE Advanced had 3 Qs from this last year
- Mastery: 62% -> Target: 85%`}
          </CodeBlock>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold">Intelligent Mock Tests</h3>
          <p className="mt-2 text-white/80">During-test strategy cues and post-test Performance DNA turn practice into compounding gains.</p>
          <CodeBlock>{`Speed Analysis:
- Physics: 2.8 min/Q (optimal: 2.5)
- Chemistry: 3.1 min/Q (overthinking easy ones)
- Math: 2.2 min/Q (great!)

Strategic Errors:
- Skipped 2 easy Qs in panic (8 marks)
- Spent 7 mins on an unsolved Q (cap at 4)
- Attempted all Qs (optimal: skip 8-10 hardest)`}
          </CodeBlock>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="text-xl font-semibold">Memory & Wellness</h3>
          <p className="mt-2 text-white/80">Spaced micro-revisions and burnout-aware nudges keep you sharp without sacrificing mental health.</p>
          <CodeBlock>{`Daily Micro-Revivals (10 mins):
- 5 Qs from 2 weeks ago (Bonding)
- 3 Qs from 2 months ago (Kinematics)
- 2 Qs from 6 months ago (Probability)

Wellness Check:
"Studied 11 hrs daily for 6 days. Take a break. Try lighter: Nomenclature practice, then a walk."`}
          </CodeBlock>
        </div>
      </div>
    </section>
  );
};

export default StrategyExplainer;
