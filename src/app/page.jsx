'use client'
import React, { useEffect, useRef, useState } from "react";
export default function ThemeLanding() {
  const statsRef = useRef(null);
  const sectionsRef = useRef([]);
  const videoRef = useRef(null);
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
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-16"
    }`;
  return (
    <div className="min-h-screen bg-[#020617] text-white px-6">
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
      {/* ── HERO WITH VIDEO BACKGROUND ── */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Hero */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`max-w-5xl mx-auto text-center pt-32 pb-20 space-y-10 ${revealClass(sectionsRef.current[0])}`}
      >
        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          Flow <br />
          <span className="text-emerald-400">WordPress Theme</span>
        </h1>
        {/* Video background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <p className="text-2xl md:text-3xl text-white/70 max-w-3xl mx-auto">
          Built with modern React architecture, completely free to use,
          and optimized for blazing fast performance.
        </p>
        {/* Layered overlay: dark base + emerald tint + soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/50 to-[#020617]/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/30 via-transparent to-cyan-900/20 pointer-events-none" />
        <div className="absolute inset-0"
          style={{background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #020617cc 100%)"}}
        />
        <button className="bg-emerald-500 hover:bg-emerald-400 px-10 py-4 rounded-xl text-xl font-semibold">
          Open WordPress
        </button>
      </section>
        {/* Glowing accent blobs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      {/* Features */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className={`max-w-6xl mx-auto py-20 grid md:grid-cols-3 gap-8 ${revealClass(sectionsRef.current[1])}`}
      >
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4">⚡ Fast Performance</h3>
          <p className="text-white/60">Optimized build ensures lightning fast load times.</p>
        </div>
        {/* Hero content */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className={`relative z-10 max-w-5xl mx-auto text-center px-6 space-y-8 ${revealClass(sectionsRef.current[0])}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Modern WordPress Theme
          </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4">🧩 React Powered</h3>
          <p className="text-white/60">Built using modern React workflows.</p>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            <span className="text-white drop-shadow-[0_0_40px_rgba(52,211,153,0.3)]">Flow</span>
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{backgroundImage: "linear-gradient(135deg, #34d399 0%, #06b6d4 50%, #34d399 100%)"}}
            >
              WordPress Theme
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/65 max-w-2xl mx-auto leading-relaxed">
            Built with modern React architecture, completely free to use,
            and optimized for blazing‑fast performance.
          </p>
          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              id="hero-cta-primary"
              className="group relative bg-emerald-500 hover:bg-emerald-400 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(52,211,153,0.35)] hover:shadow-[0_0_45px_rgba(52,211,153,0.55)] hover:-translate-y-0.5"
            >
              Open WordPress
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
            <button
              id="hero-cta-secondary"
              className="bg-white/5 hover:bg-white/10 border border-white/20 hover:border-emerald-500/50 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
            >
              Read Docs
            </button>
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4">🆓 Free to Use</h3>
          <p className="text-white/60">Use it freely for projects.</p>
        {/* Scroll-down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest uppercase z-10">
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
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
      {/* ── REST OF PAGE ── */}
      <div className="px-6">
      {/* CTA */}
      <section
        ref={(el) => (sectionsRef.current[3] = el)}
        className={`text-center pb-32 ${revealClass(sectionsRef.current[3])}`}
      >
        <button className="bg-emerald-500 hover:bg-emerald-400 px-12 py-5 rounded-xl text-xl font-semibold">
          Start Reading Docs
        </button>
      </section>
        {/* Features */}
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className={`max-w-6xl mx-auto py-24 grid md:grid-cols-3 gap-8 ${revealClass(sectionsRef.current[1])}`}
        >
          {[
            { icon: "⚡", title: "Fast Performance", desc: "Optimized build ensures lightning fast load times across all devices." },
            { icon: "🧩", title: "React Powered", desc: "Built using modern React workflows and Next.js for best developer experience." },
            { icon: "🆓", title: "Free to Use", desc: "Use it freely for personal and commercial projects with no restrictions." },
          ].map((f, i) => (
            <div key={i} className="group bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-emerald-500/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(52,211,153,0.08)]">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors duration-300">{f.title}</h3>
              <p className="text-white/55 leading-relaxed">{f.desc}</p>
            </div>
          ))}
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
        {/* Why choose */}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className={`max-w-4xl mx-auto text-center py-20 space-y-6 ${revealClass(sectionsRef.current[2])}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Why Choose This Theme?</h2>
          <p className="text-xl text-white/60 leading-relaxed">Clean code, seamless experience, and a design that stands out from the crowd.</p>
        </section>
        <div className="grid md:grid-cols-4 gap-10">
          {statsData.map((item, i) => {
            const circumference = 339;
            const offset = circumference - (circumference * progress[i]) / 100;
        {/* CTA */}
        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className={`text-center pb-32 ${revealClass(sectionsRef.current[3])}`}
        >
          <button
            id="docs-cta"
            className="bg-emerald-500 hover:bg-emerald-400 px-12 py-5 rounded-xl text-xl font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(52,211,153,0.3)] hover:shadow-[0_0_50px_rgba(52,211,153,0.5)] hover:-translate-y-0.5"
          >
            Start Reading Docs
          </button>
        </section>
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
        {/* Stats */}
        <section
          ref={(el) => {
            statsRef.current = el;
            sectionsRef.current[4] = el;
          }}
          className={`max-w-6xl mx-auto py-20 text-center ${revealClass(sectionsRef.current[4])}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Theme Performance Insights</h2>
          <p className="text-white/50 mb-16 text-lg">Benchmarked across real-world scenarios.</p>
          <div className="grid md:grid-cols-4 gap-10">
            {statsData.map((item, i) => {
              const circumference = 339;
              const offset = circumference - (circumference * progress[i]) / 100;
              return (
                <div key={i} className="flex flex-col items-center gap-4 group">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full -rotate-90">
                      <circle cx="64" cy="64" r="54" stroke="rgba(255,255,255,0.07)" strokeWidth="10" fill="none" />
                      <circle cx="64" cy="64" r="54" stroke="url(#grad)" strokeWidth="10" fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        style={{filter: "drop-shadow(0 0 6px rgba(52,211,153,0.5))"}}
                      />
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#34d399" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-emerald-400">
                      {progress[i]}%
                    </div>
                  </div>
                  <p className="text-base text-white/60 group-hover:text-white/90 transition-colors duration-300">{item.label}</p>
                </div>
                <p className="text-lg text-white/70">{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}