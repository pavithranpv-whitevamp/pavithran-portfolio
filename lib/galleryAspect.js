const RATIOS = {
  poster: [4, 5],
  a4: [210, 297],
  document: [8.5, 11],
  standee: [2, 5],
  card: [3.5, 2],
  logo: [5, 4],
  reel: [9, 16],
  youtube: [16, 9],
  social: [4, 5],
  brand: [4, 3],
  flyer: [210, 297],
  brochure: [8.5, 11],
  businessCard: [3.5, 2],
};

// [numerator, denominator] for framing — avoids cropping inside the gallery slot.

export function getAspectFraction(item) {
  const hint = item.aspectHint || item.mediaKind;
  return RATIOS[hint] || [4, 3];
}

// Legacy helper — CSS aspect-ratio string.

export function getAspectStyle(item) {
  const [aw, ah] = getAspectFraction(item);
  return { aspectRatio: `${aw} / ${ah}` };
}

/**
 * Editorial grid spans — spacious 3-column cinematic rhythm.
 * Mobile: full width · sm+: 2-col · lg+: 3-col
 * YouTube gets a full-width cinematic row.
 * Business cards span 2 columns for breathing room.
 */
export function getGalleryCellClass(item) {
  const mk = item.mediaKind;

  if (mk === 'youtube') {
    /* Full-band cinematic row */
    return 'gallery-cell col-span-full';
  }

  if (mk === 'businessCard') {
    /* Wide — shows front/back flip with room to breathe */
    return 'gallery-cell col-span-full sm:col-span-2 lg:col-span-2';
  }

  if (mk === 'reel' || mk === 'standee') {
    /* Tall narrow formats — 1 of 3 columns each */
    return 'gallery-cell col-span-full sm:col-span-1 lg:col-span-1';
  }

  /* Default: 1 of 3 columns */
  return 'gallery-cell col-span-full sm:col-span-1 lg:col-span-1';
}

export const categoryAccent = {
  Posters: '#e94560',
  'Flyer Designs': '#f97316',
  'Brochure Designs': '#eab308',
  'Standee Designs': '#22c55e',
  'Business Cards': '#e94560',
  Logos: '#a855f7',
  'Reels / Shorts': '#7c6aff',
  YouTube: '#ef4444',
  'Social Media': '#ff9f43',
  Branding: '#26de81',
};

export const categoryBadge = {
  Posters: 'Poster',
  'Flyer Designs': 'Flyer',
  'Brochure Designs': 'Brochure',
  'Standee Designs': 'Standee',
  'Business Cards': 'Card',
  Logos: 'Logo',
  'Reels / Shorts': 'Reel',
  YouTube: 'YouTube',
  'Social Media': 'Social',
  Branding: 'Brand',
};
