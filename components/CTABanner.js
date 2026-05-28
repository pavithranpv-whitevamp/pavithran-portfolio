import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-36 px-6 relative overflow-hidden">

      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(233,69,96,0.07) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 40% 40% at 50% 50%, rgba(233,69,96,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Top border line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(233,69,96,0.6))' }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Label */}
        <div className="flex items-center justify-center gap-5 mb-10">
          <span className="w-10 h-px bg-brand/50" />
          <span className="text-[10px] tracking-[0.5em] text-white/35 uppercase">
            Let&apos;s Work Together
          </span>
          <span className="w-10 h-px bg-brand/50" />
        </div>

        {/* Heading */}
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none tracking-wide text-white mb-7">
          GOT A
          <br />
          <span className="text-brand">PROJECT?</span>
        </h2>

        <p className="text-white/35 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-14">
          Whether it&apos;s a brand identity, a motion reel, or social content — I turn ideas into
          visuals that{' '}
          <span className="text-white/70">move people</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-brand text-white text-xs tracking-[0.2em] uppercase px-10 py-5 hover:bg-white hover:text-dark transition-all duration-300"
          >
            <Mail size={15} />
            Get In Touch
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 border border-white/[0.12] text-white/60 text-xs tracking-[0.2em] uppercase px-10 py-5 hover:border-brand/50 hover:text-brand transition-all duration-300"
          >
            Explore Portfolio
          </Link>
        </div>

        {/* Email */}
        <a
          href="mailto:Pavithranwv@gmail.com"
          className="inline-block mt-12 text-xs text-white/25 hover:text-brand transition-colors tracking-[0.2em]"
        >
          Pavithranwv@gmail.com
        </a>
      </div>
    </section>
  );
}
