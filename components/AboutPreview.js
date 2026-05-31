import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const skills = [
  { name: 'Adobe Photoshop',       level: 'Proficient' },
  { name: 'Adobe Illustrator',     level: 'Proficient' },
  { name: 'Adobe Premiere Pro',    level: 'Proficient' },
  { name: 'After Effects',         level: 'Proficient' },
  { name: 'WordPress (Elementor)', level: 'Intermediate' },
  { name: 'DaVinci Resolve',       level: 'Learning' },
  { name: 'Blender',               level: 'Learning' },
];

const levelColor = {
  Proficient:   'text-brand border-brand/35 bg-brand/[0.06]',
  Intermediate: 'text-amber-400 border-amber-400/30 bg-amber-400/[0.06]',
  Learning:     'text-sky-400 border-sky-400/30 bg-sky-400/[0.06]',
};

export default function AboutPreview() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ─────────────────── */}
        <div className="flex items-center gap-4 mb-20">
          <span className="line-accent" />
          <span className="text-[10px] tracking-[0.5em] text-muted uppercase">
            About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ── Left: Text ────────────────────── */}
          <div>
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl leading-none tracking-wide text-white mb-10">
              THE MIND
              <br />
              <span
                style={{
                  WebkitTextStroke: '1px rgba(233,69,96,0.5)',
                  color: 'transparent',
                }}
              >
                BEHIND
              </span>
              <br />
              THE WORK
            </h2>

            <div className="space-y-5 text-white/45 text-base leading-[1.85] font-light">
              <p>
                I&apos;m a{' '}
                <span className="text-white font-normal">
                  Graphic Designer and Motion Graphics Video Editor
                </span>{' '}
                skilled in Adobe Photoshop, Illustrator, Premiere Pro, and After Effects — crafting
                visuals that demand attention.
              </p>
              <p>
                I also bring hands-on knowledge of{' '}
                <span className="text-white font-normal">WordPress with Elementor</span>, building
                and managing websites without writing a single line of code. Currently expanding into{' '}
                <span className="text-white font-normal">DaVinci Resolve</span> and{' '}
                <span className="text-white font-normal">Blender</span> to push creative boundaries
                further.
              </p>
              <p>
                My foundation in{' '}
                <span className="text-white font-normal">
                  Computer Engineering (Diploma) and BCA
                </span>{' '}
                gives me a technical edge — I understand both the art and the machine behind it.
                Based in{' '}
                <span className="text-white font-normal">Tirupur, Tamil Nadu</span>.
              </p>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 mt-12 text-xs tracking-[0.2em] uppercase text-brand hover:text-white transition-colors"
            >
              <span>Full Story</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* ── Right: Skills ─────────────────── */}
          <div>
            <p className="text-[9px] tracking-[0.5em] text-white/25 uppercase mb-10">
              Tools & Skills
            </p>

            <div className="flex flex-col gap-2.5">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="skill-badge flex items-center justify-between px-5 py-4 cursor-default"
                >
                  <span className="text-sm text-white/75 tracking-wide">
                    {skill.name}
                  </span>
                  <span
                    className={`text-[9px] tracking-[0.3em] uppercase border px-3 py-1.5 ${levelColor[skill.level]}`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>

            {/* Currently learning panel */}
            <div className="mt-8 border border-white/[0.08] p-7 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, #e94560, transparent 70%)' }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(233,69,96,0.05) 0%, transparent 60%)' }}
              />
              <p className="text-[9px] tracking-[0.4em] text-white/30 uppercase mb-3">
                Currently learning
              </p>
              <p className="text-white text-sm tracking-wide">
                DaVinci Resolve · Blender 3D
              </p>
              <p className="text-white/35 text-xs mt-2 leading-relaxed">
                Expanding into 3D motion and professional colour grading.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
