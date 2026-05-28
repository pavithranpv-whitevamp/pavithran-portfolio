'use client';

import MediaCard from './MediaCard';
import { getGalleryCellClass } from '../lib/galleryAspect';

export default function GalleryGrid({ items, onItemOpen, filterKey }) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-40 text-center">
        <p className="font-display text-6xl text-white/[0.07] mb-5 tracking-widest">EMPTY</p>
        <p className="text-muted text-sm tracking-[0.25em] uppercase">No pieces in this category yet.</p>
      </div>
    );
  }

  return (
    <div key={filterKey} className="gallery-reveal">
      {/* Count + divider */}
      <div className="gallery-count-label">
        <span>
          {items.length} {items.length === 1 ? 'piece' : 'pieces'}
        </span>
        <span className="text-white/20 text-[9px] tracking-[0.4em]">GALLERY</span>
      </div>

      <div
        className="
          gallery-grid-editorial
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-3
        "
      >
        {items.map((item) => (
          <div key={item.id} className={`${getGalleryCellClass(item)}`}>
            <MediaCard item={item} onOpen={onItemOpen} />
          </div>
        ))}
      </div>
    </div>
  );
}
