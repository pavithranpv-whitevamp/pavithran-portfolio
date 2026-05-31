'use client';

import { useState, useMemo, useEffect } from 'react';
import GalleryFilter from '../../components/GalleryFilter';
import GalleryGrid from '../../components/GalleryGrid';
import PortfolioLightbox from '../../components/PortfolioLightbox';
import { fetchPortfolioItems } from '../../lib/sanity';
import { portfolioItems as fallbackItems, portfolioCategories } from '../../lib/portfolioData';

const portfolioYear = new Date().getFullYear();

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    async function loadPortfolioData() {
      try {
        const { data, error } = await fetchPortfolioItems();

        if (error || !data || data.length === 0) {
          // Sanity not yet configured — use the static data so the site still looks great
          console.info('ℹ️  Sanity returned no data — using static fallback portfolio.');
          setItems(fallbackItems);
          setUsingFallback(true);
        } else {
          setItems(data);
          setUsingFallback(false);
        }
      } catch (err) {
        console.warn('⚠️  Could not reach Sanity, using static portfolio:', err.message);
        setItems(fallbackItems);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    }

    loadPortfolioData();
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? items
        : items.filter((item) => item.category === activeCategory),
    [activeCategory, items]
  );

  return (
    <main className="min-h-screen py-20 md:py-28 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6 md:mb-7">
            <span className="line-accent" />
            <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase">
              Selected Works · {portfolioYear}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12">
            <h1 className="font-display text-7xl sm:text-8xl md:text-9xl leading-[0.92] tracking-wide text-white">
              PORT
              <span
                style={{
                  WebkitTextStroke: '2px rgba(233,69,96,0.55)',
                  color: 'transparent',
                }}
              >
                FOLIO
              </span>
            </h1>

            <p className="text-white/35 text-sm max-w-sm leading-relaxed border-l border-white/[0.08] pl-6">
              A studio wall of graphic systems, campaigns, motion, and print-ready deliverables —
              staged for clarity, built for deployment.
            </p>
          </div>
        </div>

        {/* Gallery surface */}
        <section className="gallery-surface px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14">
          {loading ? (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">Loading portfolio…</p>
            </div>
          ) : (
            <>
              {usingFallback && process.env.NODE_ENV === 'development' && (
                <div className="mb-6 px-4 py-3 border border-white/[0.08] bg-white/[0.02] text-white/30 text-[10px] tracking-[0.3em] uppercase">
                  Static data · Connect Sanity to publish live content
                </div>
              )}

              <GalleryFilter
                categories={portfolioCategories}
                active={activeCategory}
                onChange={setActiveCategory}
              />
              <GalleryGrid
                items={filtered}
                onItemOpen={setLightboxItem}
                filterKey={activeCategory}
              />
            </>
          )}
        </section>
      </div>

      <PortfolioLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </main>
  );
}
