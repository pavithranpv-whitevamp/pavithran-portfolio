import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const currentYear = new Date().getFullYear();

const categories = [
  { title: 'Posters', description: 'Key art · print & campaign walls', accent: '#e94560', icon: '◆' },
  { title: 'Flyer Designs', description: 'A4 handouts · event & retail', accent: '#fb923c', icon: '▣' },
  { title: 'Brochure Designs', description: 'Multi-page PDF stories', accent: '#eab308', icon: '▤' },
  { title: 'Standee Designs', description: 'Tall vertical retail placements', accent: '#22c55e', icon: '┃' },
  { title: 'Business Cards', description: 'Printed pairs · tactile brand', accent: '#f43f5e', icon: '▭' },
  { title: 'Logos', description: 'Marks that scale everywhere', accent: '#a855f7', icon: '◎' },
  { title: 'Reels / Shorts', description: '9:16 kinetic social cuts', accent: '#7c6aff', icon: '▶' },
  { title: 'YouTube', description: 'Title packages & widescreen edits', accent: '#ef4444', icon: '►' },
  { title: 'Social Media', description: 'Feeds, grids, and story ladders', accent: '#ff9f43', icon: '☐' },
  { title: 'Branding', description: 'Guidelines & rollout systems', accent: '#26de81', icon: '✦' },
];

export default function PortfolioPreview() {
  return (
    <section className="py-32 px-6 bg-surface/20">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="line-accent" />
              <span className="text-[10px] tracking-[0.5em] text-muted uppercase">
                Portfolio · {currentYear}
              </span>
            </div>
            <h2 className="font-display text-6xl md:text-8xl leading-none tracking-wide text-white">
              SELECTED
              <br />
              <span
                style={{
                  WebkitTextStroke: '1px rgba(233,69,96,0.5)',
                  color: 'transparent',
                }}
              >
                WORKS
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-muted text-sm max-w-xs leading-relaxed text-right hidden md:block">
              A curated selection across design categories — from print to motion.
            </p>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-brand hover:text-white transition-colors self-start md:self-auto"
            >
              View full gallery
              <ArrowRight
                size={14}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <Link
              key={i}
              href="/portfolio"
              className="card-hover group relative border border-white/[0.09] bg-[#0e0e10] p-7 md:p-8 flex flex-col justify-between min-h-[190px] overflow-hidden"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${cat.accent}, transparent)` }}
              />

              {/* Icon */}
              <span
                className="text-2xl mb-5 block"
                style={{ color: cat.accent, opacity: 0.8 }}
                aria-hidden
              >
                {cat.icon}
              </span>

              {/* Text */}
              <div>
                <p className="font-display text-2xl md:text-3xl tracking-wider text-white mb-2 group-hover:text-brand transition-colors duration-300 leading-tight">
                  {cat.title}
                </p>
                <p className="text-[11px] text-white/35 leading-relaxed tracking-wide">
                  {cat.description}
                </p>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={15}
                className="absolute bottom-6 right-6 text-white/20 group-hover:text-brand group-hover:translate-x-1 transition-all duration-300"
              />

              {/* Subtle glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${cat.accent}0a 0%, transparent 60%)` }}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
