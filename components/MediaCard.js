'use client';

import { useRef } from 'react';
import { Play, Image as ImageIcon, ArrowUpRight } from 'lucide-react';
import PortfolioMockup from './PortfolioMockup';
import { getAspectFraction, categoryAccent, categoryBadge } from '../lib/galleryAspect';
import { resolveImage } from '../lib/cloudinaryHelpers';

function BizFaces({ item, accent }) {
  const front = item.cardFront || '#121212';
  const back = item.cardBack || '#1a1014';
  return (
    <>
      <div className="flip-face bg-black">
        <div className="absolute inset-0 flex flex-col border border-white/12" style={{ backgroundColor: front }}>
          <div className="flex-1 flex items-center justify-center">
            <div
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: `${accent}66` }}
            >
              <span className="font-display text-xl md:text-2xl tracking-wider" style={{ color: accent }}>
                PE
              </span>
            </div>
          </div>
          <div className="px-4 py-3 border-t border-white/10 flex justify-between items-center">
            <span className="text-[8px] tracking-[0.35em] uppercase text-white/40">Front</span>
            <span className="text-[8px] text-white/25 uppercase tracking-wider">Studio · Tirupur</span>
          </div>
        </div>
      </div>
      <div className="flip-face flip-face--back bg-black">
        <div
          className="absolute inset-0 flex flex-col justify-between p-4 md:p-5 border border-white/12"
          style={{ backgroundColor: back }}
        >
          <div className="space-y-3 pt-1">
            <div className="h-px bg-white/18 w-full" />
            <div className="h-1 rounded bg-white/12 w-4/5" />
            <div className="h-1 rounded bg-white/8 w-3/5" />
            <div className="h-1 rounded bg-white/6 w-2/4" />
          </div>
          <div className="flex justify-between items-center text-[8px] uppercase tracking-[0.25em] text-white/40">
            <span>@ig_whitevamp</span>
            <span>Tirupur, TN</span>
          </div>
          <p className="text-[7px] tracking-[0.3em] uppercase text-center text-white/28 hidden md:block">
            Hover to flip
          </p>
        </div>
      </div>
    </>
  );
}

function CardMetaFooter({ badge, category, title, accent, hint }) {
  return (
    <footer className="gallery-card-meta pointer-events-none">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p
            className="text-[8.5px] tracking-[0.3em] uppercase mb-2 font-medium"
            style={{ color: accent }}
          >
            {badge}
          </p>
          <p className="font-display text-lg md:text-xl tracking-wide text-white leading-tight line-clamp-2">
            {title}
          </p>
          <p className="text-[10px] tracking-[0.18em] text-white/45 uppercase mt-2 hidden sm:block">
            {category}
          </p>
        </div>
        <span className="hidden sm:inline-flex shrink-0 items-center gap-1.5 text-[9px] tracking-[0.2em] uppercase text-white/45 border border-white/15 px-2.5 py-1.5 mt-0.5 hover:border-white/35 hover:text-white/85 motion-safe:transition-[border-color,color] motion-safe:duration-250">
          Open
          <ArrowUpRight size={11} strokeWidth={1.5} />
        </span>
      </div>
      {hint && (
        <p className="text-[8px] tracking-[0.16em] uppercase text-white/35 mt-2.5 md:hidden">{hint}</p>
      )}
    </footer>
  );
}

function UploadedImagePreview({ item }) {
  const thumbUrl = resolveImage(item.cloudinaryImage, 'thumb');
  const alt = item.cloudinaryImage?.alt || item.title || 'Portfolio image';
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbUrl}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom, transparent 55%, ${item.base || '#000'}cc 100%)`,
        }}
      />
    </div>
  );
}

export default function MediaCard({ item, onOpen }) {
  const accent = categoryAccent[item.category] || item.accent || '#e94560';
  const [aw, ah] = getAspectFraction(item);
  const videoRef = useRef(null);
  const badge = categoryBadge[item.category] || item.category;

  const hasUploadedImage = !!(
    item.cloudinaryImage &&
    (item.cloudinaryImage.url || item.cloudinaryImage.publicId)
  );

  const handlePlayHover = () => {
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => {});
  };

  const handlePauseHover = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    try { el.currentTime = 0; } catch { /* ignore */ }
  };

  const handleActivate = () => { onOpen(item); };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen(item);
    }
  };

  const isBiz = item.mediaKind === 'businessCard';

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      className="
        group/card relative flex flex-col h-full min-h-0 overflow-hidden
        border border-white/11 bg-[#0d0d0f]/98
        shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_2px_10px_rgba(0,0,0,0.25)]
        card-hover cursor-pointer
        outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2
        focus-visible:ring-offset-[#0a0a0a]
        motion-safe:transition-[transform,box-shadow,border-color]
        motion-safe:duration-380
      "
      aria-label={`Open preview: ${item.title}`}
    >
      <div className="card-shimmer" />

      <div
        className="absolute top-0 left-0 right-0 h-[2.5px] z-30 pointer-events-none w-0 group-hover/card:w-full motion-safe:transition-[width] motion-safe:duration-500"
        style={{ background: `linear-gradient(90deg, ${accent}, ${accent}44, transparent)` }}
      />

      {isBiz ? (
        <>
          <div className="gallery-card-slot gallery-card-slot--compact flex-1 min-h-0">
            <div
              className="gallery-media-frame w-full mx-auto group/inner relative"
              style={{ '--ga-w': aw, '--ga-h': ah }}
            >
              <div className="gallery-media-abs flip-stage">
                <div className="flip-inner h-full w-full">
                  <BizFaces item={item} accent={accent} />
                </div>
              </div>
              <div className="absolute top-3 left-3 z-40 pointer-events-none">
                <span
                  className="text-[9px] tracking-[0.26em] uppercase px-2.5 py-1 border backdrop-blur-sm"
                  style={{ color: accent, borderColor: `${accent}44`, background: `${accent}12` }}
                >
                  {badge}
                </span>
              </div>
            </div>
          </div>
          <CardMetaFooter
            badge={badge}
            category={item.category}
            title={item.title}
            accent={accent}
            hint="Tap to preview · Hover flips card"
          />
        </>
      ) : (
        <>
          <div className="gallery-card-slot flex-1 min-h-0">
            <div
              className="gallery-media-frame mx-auto w-full relative group/inner max-w-[100%]"
              style={{ '--ga-w': aw, '--ga-h': ah }}
            >
              <div className="gallery-media-abs overflow-hidden bg-black">
                {item.mediaKind === 'reel' && item.videoSrc ? (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-neutral-950"
                    onMouseEnter={handlePlayHover}
                    onMouseLeave={handlePauseHover}
                  >
                    <video
                      ref={videoRef}
                      className="max-w-full max-h-full w-full h-full object-contain"
                      src={item.videoSrc}
                      muted loop playsInline preload="metadata"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-90 group-hover/inner:opacity-40 motion-safe:transition-opacity motion-safe:duration-400" />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-100 group-hover/inner:opacity-0 motion-safe:transition-opacity motion-safe:duration-300">
                      <div
                        className="w-14 h-14 rounded-full border-2 flex items-center justify-center shadow-lg"
                        style={{ borderColor: `${accent}77`, background: `${accent}22` }}
                      >
                        <Play size={20} style={{ color: accent }} fill={accent} />
                      </div>
                    </div>
                  </div>
                ) : hasUploadedImage ? (
                  <UploadedImagePreview item={item} />
                ) : (
                  <PortfolioMockup item={item} className="h-full w-full" />
                )}
              </div>

              <div className="absolute top-3 left-3 z-40 pointer-events-none">
                <span
                  className="text-[9px] tracking-[0.26em] uppercase px-2.5 py-1 border backdrop-blur-sm"
                  style={{ color: accent, borderColor: `${accent}44`, background: `${accent}12` }}
                >
                  {badge}
                </span>
              </div>

              <div className="absolute top-3 right-3 text-white/30 z-30 pointer-events-none hidden sm:flex">
                {item.mediaKind === 'youtube' || item.mediaKind === 'reel' ? (
                  <Play size={14} />
                ) : item.mediaKind === 'brochure' ? (
                  <span
                    className="text-[8px] tracking-widest uppercase text-white/35"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    pdf
                  </span>
                ) : (
                  <ImageIcon size={14} />
                )}
              </div>
            </div>
          </div>

          <CardMetaFooter badge={badge} category={item.category} title={item.title} accent={accent} />
        </>
      )}
    </article>
  );
}
