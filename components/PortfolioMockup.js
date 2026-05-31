'use client';

/**
 * Realistic “studio board” placeholders — no external raster assets.
 */
export default function PortfolioMockup({ item, className = '' }) {
  const accent = item.accent || '#e94560';
  const base = item.base || '#0a0a0a';
  const mk = item.mediaKind;

  const vignette = (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(ellipse 85% 75% at 45% 38%, ${accent}14 0%, transparent 55%), radial-gradient(ellipse at 100% 100%, #000000aa 0%, transparent 45%)`,
      }}
    />
  );

  if (mk === 'poster') {
    return (
      <div className={`relative overflow-hidden h-full ${className}`} style={{ backgroundColor: base }}>
        {vignette}
        <div className="absolute inset-4 border border-white/[0.07] rounded-sm shadow-[inset_0_0_40px_rgba(0,0,0,0.45)]">
          <div className="absolute top-2 left-2 flex gap-1 opacity-30">
            <span className="w-2 h-2 rounded-full bg-[cyan]" />
            <span className="w-2 h-2 rounded-full bg-[magenta]" />
            <span className="w-2 h-2 rounded-full bg-[yellow]" />
          </div>
          <div className="absolute inset-x-5 top-14 space-y-2">
            <div className="h-2 rounded bg-white/15 w-3/5" />
            <div className="h-2 rounded bg-white/10 w-4/5" />
            <div className="h-2 rounded bg-white/8 w-2/5" />
          </div>
          <div className="absolute inset-x-6 bottom-12 h-28 rounded border border-white/[0.06]" style={{ boxShadow: `inset 0 -40px 90px ${accent}22` }}>
            <div className="absolute inset-3 border border-dashed border-white/10" />
          </div>
          <p className="absolute bottom-3 right-4 text-[7px] tracking-[0.35em] uppercase text-white/25">Print · 300dpi</p>
        </div>
      </div>
    );
  }

  if (mk === 'flyer' || mk === 'social') {
    return (
      <div className={`relative overflow-hidden h-full ${className}`} style={{ backgroundColor: base }}>
        {vignette}
        <div className="absolute inset-5 border border-white/[0.06] bg-black/20 rounded-sm">
          <div className="absolute top-4 left-4 right-4 h-24 rounded-sm" style={{ background: `linear-gradient(135deg, ${accent}33, transparent)` }} />
          <div className="absolute top-36 left-4 right-4 space-y-2">
            <div className="h-1.5 rounded bg-white/12 w-full" />
            <div className="h-1.5 rounded bg-white/8 w-11/12" />
            <div className="h-1.5 rounded bg-white/6 w-4/5" />
            <div className="h-1.5 rounded bg-white/6 w-full" />
          </div>
          <div className="absolute bottom-6 left-4 right-4 h-20 flex gap-2">
            <div className="flex-1 rounded bg-white/5 border border-white/[0.05]" />
            <div className="w-20 rounded bg-white/8 border border-white/[0.06]" style={{ background: `linear-gradient(180deg, ${accent}40, #0000)` }} />
          </div>
        </div>
        {mk === 'social' && (
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full border border-white/10 text-[7px] uppercase tracking-wider text-white/40 bg-black/40">
            1080×1350
          </div>
        )}
      </div>
    );
  }

  if (mk === 'brochure') {
    return (
      <div className={`relative overflow-hidden h-full ${className}`} style={{ backgroundColor: base }}>
        {vignette}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[58%] h-[78%] rounded-sm border border-white/[0.08] bg-white/[0.03] shadow-[-8px_8px_0_rgba(0,0,0,0.35)] translate-x-[-6%] rotate-[-3deg]">
            <div className="absolute inset-2 border border-white/[0.06]" />
            <div className="absolute top-6 left-5 right-5 h-16 rounded-sm" style={{ background: `linear-gradient(90deg, ${accent}44, transparent)` }} />
            <div className="absolute bottom-8 left-5 right-5 space-y-2">
              <div className="h-1 rounded-full bg-white/15 w-full" />
              <div className="h-1 rounded-full bg-white/10 w-10/12" />
              <div className="h-1 rounded-full bg-white/8 w-full" />
            </div>
          </div>
          <div className="absolute w-[56%] h-[76%] rounded-sm border border-white/[0.06] bg-black/30 translate-x-[18%] rotate-[4deg] opacity-90" />
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-white/35">
          <span className="px-2 py-1 rounded border border-white/15 bg-black/30">PDF</span>
          Multi-page
        </div>
      </div>
    );
  }

  if (mk === 'standee') {
    return (
      <div className={`relative overflow-hidden h-full ${className}`} style={{ backgroundColor: base }}>
        {vignette}
        <div className="absolute inset-x-[22%] bottom-[8%] top-[10%] rounded-sm border border-white/[0.07] bg-gradient-to-b from-white/[0.06] to-transparent shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
          <div className="absolute inset-x-4 top-10 h-24 rounded" style={{ background: `linear-gradient(180deg, ${accent}55, transparent)` }} />
          <div className="absolute inset-x-6 bottom-16 space-y-2">
            <div className="h-1.5 bg-white/15 rounded w-full" />
            <div className="h-1.5 bg-white/10 rounded w-5/6" />
            <div className="h-1.5 bg-white/8 rounded w-full" />
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-14 h-2 rounded-full bg-white/10" />
        </div>
        <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[44%] h-3 bg-black/50 rounded-sm border border-white/10" />
      </div>
    );
  }

  if (mk === 'logo') {
    return (
      <div className={`relative overflow-hidden h-full flex items-center justify-center ${className}`} style={{ backgroundColor: base }}>
        {vignette}
        <div className="relative w-[62%] aspect-square rounded-2xl border border-white/[0.07] bg-black/25 flex items-center justify-center">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
          <svg viewBox="0 0 120 120" className="w-[55%] h-[55%]" fill="none">
            <path d="M60 18 L98 95 H22 Z" stroke={accent} strokeWidth="3" opacity="0.9" />
            <circle cx="60" cy="58" r="10" fill={accent} fillOpacity="0.35" />
          </svg>
        </div>
        <span className="absolute bottom-5 text-[8px] tracking-[0.4em] uppercase text-white/30">Vector system</span>
      </div>
    );
  }

  if (mk === 'reel') {
    return (
      <div className={`relative overflow-hidden h-full ${className}`} style={{ backgroundColor: base }}>
        {vignette}
        <div className="absolute inset-[10%] mx-auto max-w-[72%] rounded-[1.25rem] border-4 border-white/10 bg-black shadow-2xl overflow-hidden">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-4 rounded-full bg-black/80 border border-white/10 z-10" />
          {item.videoSrc ? (
            <video
              className="w-full h-full object-cover scale-[1.02]"
              src={item.videoSrc}
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ background: `linear-gradient(180deg, ${accent}33, ${base})` }}>
              <div className="w-14 h-14 rounded-full border-2 flex items-center justify-center" style={{ borderColor: accent }}>
                <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] ml-1" style={{ borderLeftColor: accent }} />
              </div>
            </div>
          )}
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[7px] tracking-[0.35em] uppercase text-white/35">9:16 cut</div>
      </div>
    );
  }

  if (mk === 'youtube') {
    return (
      <div className={`relative overflow-hidden h-full ${className}`} style={{ backgroundColor: base }}>
        {vignette}
        <div className="absolute inset-[14%_8%_18%_8%] rounded border border-white/[0.08] bg-black overflow-hidden shadow-inner">
          <div className="absolute inset-0" style={{ background: `linear-gradient(120deg, ${accent}40, transparent 60%)` }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-[20px] bg-red-600/90 flex items-center justify-center shadow-lg border border-white/20">
              <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-white ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-10 bg-black/70 border-t border-white/10 flex items-center px-3 gap-2">
            <div className="h-1 rounded-full bg-white/25 flex-1" />
            <span className="text-[7px] uppercase tracking-widest text-white/40">HD</span>
          </div>
        </div>
      </div>
    );
  }

  if (mk === 'brand') {
    return (
      <div className={`relative overflow-hidden h-full ${className}`} style={{ backgroundColor: base }}>
        {vignette}
        <div className="absolute inset-6 grid grid-cols-2 gap-3">
          <div className="rounded border border-white/[0.07] bg-white/[0.03] flex flex-col p-4">
            <div className="flex gap-2 mb-4">
              <span className="w-6 h-6 rounded-full border-2 border-white/20" />
              <div className="flex-1 space-y-2 pt-1">
                <div className="h-1.5 bg-white/15 rounded w-3/5" />
                <div className="h-1 bg-white/8 rounded w-4/5" />
              </div>
            </div>
            <div className="flex-1 rounded border border-dashed border-white/10 flex items-center justify-center text-[8px] uppercase tracking-widest text-white/25">
              Identity
            </div>
          </div>
          <div className="rounded border border-white/[0.07] p-3 flex flex-col gap-2">
            <div className="h-10 rounded" style={{ background: `linear-gradient(90deg, ${accent}, #fff2)` }} />
            <div className="flex-1 grid grid-cols-3 gap-2">
              <div className="rounded bg-white/8" />
              <div className="rounded bg-white/6" />
              <div className="rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden h-full ${className}`} style={{ backgroundColor: base }}>
      {vignette}
      <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xs tracking-widest uppercase">
        Preview
      </div>
    </div>
  );
}
