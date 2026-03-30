'use client'
import React, { useEffect, useRef, useState } from "react";

export default function ThemeLanding() {

  const statsRef = useRef(null);
  const sectionsRef = useRef([]);
  const statsData = [
    { label: "Performance", value: 95 },
    { label: "React Integration", value: 100 },
    { label: "SEO Score", value: 92 },
    { label: "Ease of Use", value: 98 },
  ];

  const [progress, setProgress] = useState(statsData.map(() => 0));
  const [visible, setVisible] = useState(false);
  const [revealed, setRevealed] = useState([]);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed((prev) => [...new Set([...prev, entry.target])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Stats observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  // Stats animation
  useEffect(() => {
    if (!visible) return;

    statsData.forEach((stat, i) => {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setProgress((prev) => {
          const updated = [...prev];
          updated[i] = Math.min(start, stat.value);
          return updated;
        });
        if (start >= stat.value) clearInterval(interval);
      }, 20);
    });
  }, [visible]);

  const revealClass = (el) =>
    `transform transition-all duration-700 ease-out ${
      revealed.includes(el)
        ? "opacity-100 translate-y-0 rotate-x-0"
        : "opacity-0 translate-y-16 rotate-x-6"
    }`;

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6">

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Hero */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`max-w-5xl mx-auto text-center pt-32 pb-20 space-y-10 ${revealClass(sectionsRef.current[0])}`}
      >
        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          Flow <br />
          <span className="text-emerald-400">WordPress Theme</span>
        </h1>

        <p className="text-2xl md:text-3xl text-white/70 max-w-3xl mx-auto">
          Built with modern React architecture, completely free to use,
          and optimized for blazing fast performance.
        </p>

        <button className="bg-emerald-500 hover:bg-emerald-400 px-10 py-4 rounded-xl text-xl font-semibold">
          Open WordPress
        </button>
      </section>

      {/* Features */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className={`max-w-6xl mx-auto py-20 grid md:grid-cols-3 gap-8 ${revealClass(sectionsRef.current[1])}`}
      >
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4">⚡ Fast Performance</h3>
          <p className="text-white/60">Optimized build ensures lightning fast load times.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4">🧩 React Powered</h3>
          <p className="text-white/60">Built using modern React workflows.</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4">🆓 Free to Use</h3>
          <p className="text-white/60">Use it freely for projects.</p>
        </div>
      </section>

      {/* Why choose */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className={`max-w-4xl mx-auto text-center py-20 space-y-8 ${revealClass(sectionsRef.current[2])}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold">Why Choose This Theme?</h2>
        <p className="text-xl text-white/70">Clean code and seamless experience.</p>
      </section>

      {/* CTA */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className={`text-center pb-32 ${revealClass(sectionsRef.current[3])}`}
      >
        <button className="bg-emerald-500 hover:bg-emerald-400 px-12 py-5 rounded-xl text-xl font-semibold">
          Start Reading Docs
        </button>
      </section>

      {/* Stats */}
      <section
        ref={(el) => {
          statsRef.current = el;
          sectionsRef.current[4] = el;
        }}
        className={`max-w-6xl mx-auto py-20 text-center ${revealClass(sectionsRef.current[4])}`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Theme Performance Insights</h2>

        <div className="grid md:grid-cols-4 gap-10">
          {statsData.map((item, i) => {
            const circumference = 339;
            const offset = circumference - (circumference * progress[i]) / 100;

            return (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="64" cy="64" r="54" stroke="rgba(255,255,255,0.1)" strokeWidth="10" fill="none" />
                    <circle cx="64" cy="64" r="54" stroke="#34d399" strokeWidth="10" fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                    {progress[i]}%
                  </div>
                </div>
                <p className="text-lg text-white/70">{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}