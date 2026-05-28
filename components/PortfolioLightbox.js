'use client';

import { useEffect, useCallback } from 'react';
import { X, ExternalLink, FileText } from 'lucide-react';
import PortfolioMockup from './PortfolioMockup';
import { categoryAccent } from '../lib/galleryAspect';
import { resolveImage } from '../lib/cloudinaryHelpers';

export default function PortfolioLightbox({ item, onClose }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!item) return;
    document.addEventListener('keydown', handleKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prev;
    };
  }, [item, handleKey]);

  if (!item) return null;

  const accent = categoryAccent[item.category] || item.accent || '#e94560';
  const imageUrl = resolveImage(item.cloudinaryImage, 'full');

  const openPdfTab = () => {
    if (item.pdfUrl) window.open(item.pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/82 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-label="Close preview"
      />

      <div
        className="relative modal-panel-enter w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col border border-white/12 bg-[#0c0c0c] shadow-[0_40px_120px_rgba(0,0,0,0.75)]"
      >
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-20"
          style={{ background: `linear-gradient(90deg, ${accent}, transparent 70%)` }}
        />

        <div className="flex items-start justify-between gap-4 px-5 py-4 md:px-8 md:py-5 border-b border-white/[0.07] relative z-10 bg-black/40">
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-muted mb-1">{item.category}</p>
            <h2 id="lightbox-title" className="font-display text-2xl md:text-4xl tracking-wide text-white">
              {item.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 p-2.5 border border-white/15 text-muted hover:text-white hover:border-brand transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="relative flex-1 overflow-y-auto overscroll-contain">
          <div className="p-5 md:p-8 space-y-6">

            {/* Media region */}
            <div className="relative rounded-sm border border-white/[0.08] overflow-hidden bg-black/50 min-h-[200px]">
              {item.mediaKind === 'youtube' && item.youtubeId && (
                <div className="aspect-video w-full bg-black">
                  <iframe
                    title={item.title}
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {item.mediaKind === 'reel' && item.videoSrc && (
                <div className="max-w-sm mx-auto aspect-[9/16] bg-black">
                  <video className="w-full h-full object-cover" src={item.videoSrc} controls playsInline preload="metadata" />
                </div>
              )}

              {item.mediaKind === 'brochure' && item.pdfUrl && (
                <div className="space-y-4">
                  <div className="aspect-[8.5/11] max-h-[55vh] w-full border border-white/[0.06] bg-[#111]">
                    <iframe title="PDF preview" src={item.pdfUrl} className="w-full h-full" />
                  </div>
                  <div className="flex flex-wrap gap-3 justify-center pb-2">
                    <button
                      type="button"
                      onClick={openPdfTab}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors"
                    >
                      <ExternalLink size={16} />
                      Open PDF in new tab
                    </button>
                  </div>
                </div>
              )}

              {item.mediaKind === 'businessCard' && (
                <div className="grid md:grid-cols-2 gap-6 p-6 md:p-10">
                  <div>
                    <p className="text-[9px] tracking-[0.35em] uppercase text-muted mb-3 text-center">Front</p>
                    <div
                      className="mx-auto w-full max-w-sm rounded-lg border border-white/10 shadow-2xl overflow-hidden"
                      style={{ aspectRatio: '3.5 / 2', backgroundColor: item.cardFront || '#121212' }}
                    >
                      <div className="h-full flex items-center justify-center">
                        <div
                          className="w-16 h-16 rounded-full border flex items-center justify-center"
                          style={{ borderColor: `${accent}55` }}
                        >
                          <span className="text-2xl font-display tracking-wider" style={{ color: accent }}>
                            PE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.35em] uppercase text-muted mb-3 text-center">Back</p>
                    <div
                      className="mx-auto w-full max-w-sm rounded-lg border border-white/10 shadow-2xl p-6 flex flex-col justify-between"
                      style={{ aspectRatio: '3.5 / 2', backgroundColor: item.cardBack || '#1a1014' }}
                    >
                      <div className="space-y-2">
                        <div className="h-px bg-white/15 w-full" />
                        <p className="text-[11px] text-white/70 tracking-[0.2em] uppercase">creative.studio</p>
                      </div>
                      <div className="flex justify-between items-end text-[9px] text-muted tracking-wider">
                        <span>IG / LI / YT</span>
                        <FileText size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!['youtube', 'reel', 'brochure', 'businessCard'].includes(item.mediaKind) && imageUrl && (
                <div className="w-full max-w-3xl mx-auto" style={{ minHeight: 'min(48vh, 420px)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt={item.cloudinaryImage?.alt || item.title}
                    className="w-full max-h-[68vh] object-contain"
                  />
                </div>
              )}

              {!['youtube', 'reel', 'brochure', 'businessCard'].includes(item.mediaKind) && !imageUrl && (
                <div className="w-full max-w-3xl mx-auto" style={{ minHeight: 'min(48vh, 420px)' }}>
                  <PortfolioMockup item={item} className="min-h-[280px] md:min-h-[360px]" />
                </div>
              )}

              {item.mediaKind === 'reel' && !item.videoSrc && (
                <div className="w-full max-w-sm mx-auto aspect-[9/16]">
                  <PortfolioMockup item={item} className="h-full" />
                </div>
              )}
            </div>

            {item.blurb && (
              <p className="text-sm text-muted leading-relaxed max-w-3xl border-l-2 border-brand/50 pl-5">
                {item.blurb}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
