'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = [
  'GRAPHIC DESIGNER',
  'MOTION ARTIST',
  'VIDEO EDITOR',
  'VISUAL STORYTELLER',
];

const currentYear = new Date().getFullYear();

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* ── Subtle grid ────────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      {/* ── Central glow — wider, softer ────────── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(233,69,96,0.065) 0%, transparent 65%)' }}
      />

      {/* ── Secondary warm glow bottom-right ──── */}
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(233,69,96,0.04) 0%, transparent 60%)' }}
      />

      {/* ── Large decorative BG letter ───────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display leading-none tracking-[0.15em] text-white whitespace-nowrap"
          style={{ fontSize: 'clamp(18vw, 26vw, 28vw)', opacity: 0.018 }}
        >
          DESIGN
        </span>
      </div>

      {/* ── Vertical location label left ─────── */}
      <div className="absolute left-7 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-5">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-brand/70" />
        <p
          className="text-[9px] tracking-[0.5em] text-white/30 uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Tirupur · Tamil Nadu
        </p>
      </div>

      {/* ── Scroll hint right ─────────────────── */}
      <div className="absolute right-7 bottom-12 hidden lg:flex flex-col items-center gap-3">
        <p
          className="text-[9px] tracking-[0.5em] text-white/30 uppercase"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </p>
        <div className="w-[1px] h-20 bg-gradient-to-b from-brand/60 to-transparent" />
      </div>

      {/* ── Main content ──────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-32">

        {/* Eyebrow */}
        <div className="opacity-0-init animate-fade-up delay-100 mb-10 flex items-center gap-4">
          <span className="w-12 h-px bg-brand" />
          <span className="text-[10px] tracking-[0.5em] text-brand/80 uppercase">
            Portfolio {currentYear}
          </span>
        </div>

        {/* ── Name ── */}
        <div className="opacity-0-init animate-fade-up delay-200 mb-5">
          <h1
            className="font-display leading-none tracking-wide whitespace-nowrap"
            style={{ fontSize: 'clamp(2.8rem, 9.4vw, 10rem)' }}
          >
            <span className="text-white inline-block align-baseline">
              {'PAVITHRAN\u00A0'}
            </span>
            <span
              className="inline-block align-baseline"
              style={{
                WebkitTextStroke: '2px rgba(233,69,96,0.75)',
                color: 'transparent',
              }}
            >
              E
            </span>
          </h1>
        </div>

        {/* Animated role */}
        <div className="opacity-0-init animate-fade-up delay-300 h-9 mb-8 overflow-hidden">
          <p
            className="text-sm md:text-base tracking-[0.4em] uppercase"
            style={{
              color: '#e94560',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            — {roles[roleIndex]}
          </p>
        </div>

        {/* Tagline */}
        <p className="opacity-0-init animate-fade-up delay-400 text-xl md:text-2xl text-white/45 font-light max-w-lg leading-relaxed mb-12">
          Design that speaks.{' '}
          <span className="text-white/80 font-normal">Motion that captivates.</span>
        </p>

        {/* CTA Buttons */}
        <div className="opacity-0-init animate-fade-up delay-500 flex flex-wrap items-center gap-4">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-3 bg-brand text-white text-xs tracking-[0.2em] uppercase px-9 py-4 hover:bg-white hover:text-dark transition-all duration-300 animate-pulse-glow"
          >
            Explore Portfolio
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 border border-white/18 text-white/70 text-xs tracking-[0.2em] uppercase px-9 py-4 hover:border-brand/60 hover:text-brand transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>

        {/* Social strip */}
        <div className="opacity-0-init animate-fade-up delay-700 mt-16 flex items-center gap-8">
          <span className="text-[9px] tracking-[0.4em] text-white/25 uppercase">Find me</span>
          <div className="w-px h-4 bg-white/15" />
          <div className="flex items-center gap-7">
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/ig_whitevamp/' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pavithran-e-wv9465445/' },
              { label: 'YouTube', href: 'https://www.youtube.com/@pvkcreationz' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.25em] text-white/35 hover:text-brand transition-colors duration-200 uppercase"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom marquee strip ─────────────── */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.07] py-3.5 overflow-hidden bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(10).fill(null).map((_, i) => (
            <span key={i} className="text-[9px] tracking-[0.55em] text-white/25 uppercase mx-10">
              Graphic Design
              <span className="text-brand/70 mx-5">✦</span>
              Motion Graphics
              <span className="text-brand/70 mx-5">✦</span>
              Video Editing
              <span className="text-brand/70 mx-5">✦</span>
              Branding
              <span className="text-brand/70 mx-5">✦</span>
              Social Media
              <span className="text-brand/70 mx-5">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
