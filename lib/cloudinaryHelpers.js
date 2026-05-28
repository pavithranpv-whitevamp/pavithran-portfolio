/**
 * lib/cloudinaryHelpers.js
 * ─────────────────────────────────────────────────────────────────
 * Lightweight Cloudinary URL builder — no server SDK needed.
 * Works entirely in the browser using your cloud name from .env.local.
 *
 * WHY: The `cloudinary` npm package (v2) is server-only.
 *      These helpers run on both server and client.
 *
 * HOW TO USE:
 *   import { cloudinaryUrl, cloudinaryThumb } from '../lib/cloudinaryHelpers';
 *   <img src={cloudinaryUrl('portfolio/posters/my-poster')} alt="..." />
 * ─────────────────────────────────────────────────────────────────
 */

const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';

if (!CLOUD && typeof window !== 'undefined') {
  console.warn('⚠️  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME not set in .env.local');
}

// ── Core URL builder ───────────────────────────────────────────────────────

/**
 * Build an optimised Cloudinary delivery URL.
 *
 * @param {string} publicId   - Cloudinary public ID (e.g. "portfolio/posters/synthwave")
 * @param {object} transforms - Cloudinary transformation options
 * @param {number}  transforms.width   - Resize width
 * @param {number}  transforms.height  - Resize height
 * @param {string}  transforms.crop    - Crop mode (default: 'fill')
 * @param {string}  transforms.gravity - Gravity (default: 'auto')
 * @param {string}  transforms.quality - Quality (default: 'auto')
 * @param {string}  transforms.format  - Format  (default: 'auto')
 * @returns {string} Full Cloudinary delivery URL
 */
export function cloudinaryUrl(publicId, transforms = {}) {
  if (!publicId) return '';
  if (!CLOUD) return publicId; // fallback: return as-is if no cloud name

  const {
    width,
    height,
    crop    = 'fill',
    gravity = 'auto',
    quality = 'auto',
    format  = 'auto',
    ...rest
  } = transforms;

  // Build transformation string
  const parts = [];
  if (width)   parts.push(`w_${width}`);
  if (height)  parts.push(`h_${height}`);
  if (width || height) {
    parts.push(`c_${crop}`);
    parts.push(`g_${gravity}`);
  }
  parts.push(`q_${quality}`);
  parts.push(`f_${format}`);

  // Extra transforms (e.g. { blur: 200 })
  Object.entries(rest).forEach(([k, v]) => parts.push(`${k}_${v}`));

  const t = parts.join(',');
  return `https://res.cloudinary.com/${CLOUD}/image/upload/${t}/${publicId}`;
}

// ── Preset helpers ─────────────────────────────────────────────────────────

/**
 * Gallery card thumbnail — optimised for the masonry grid.
 * Width: 800px, auto-height, WebP when supported.
 */
export function cloudinaryThumb(publicId) {
  return cloudinaryUrl(publicId, { width: 800, quality: 'auto', format: 'auto' });
}

/**
 * Lightbox full image — larger, still optimised.
 */
export function cloudinaryFull(publicId) {
  return cloudinaryUrl(publicId, { width: 1600, quality: 'auto', format: 'auto' });
}

/**
 * Low-quality placeholder — tiny blurry image for lazy-loading shimmer.
 */
export function cloudinaryBlur(publicId) {
  return cloudinaryUrl(publicId, { width: 30, quality: 10, format: 'auto', blur: 200 });
}

/**
 * Square social preview.
 */
export function cloudinarySquare(publicId, size = 400) {
  return cloudinaryUrl(publicId, { width: size, height: size, crop: 'fill', quality: 'auto' });
}

// ── Raw URL passthrough (for items that already have a full URL) ───────────

/**
 * If a Sanity item has a full cloudinaryImage.url, use it directly.
 * Otherwise build from publicId. Falls back to empty string.
 */
export function resolveImage(cloudinaryImage, size = 'thumb') {
  if (!cloudinaryImage) return '';
  if (cloudinaryImage.url) return cloudinaryImage.url;
  if (cloudinaryImage.publicId) {
    if (size === 'full')  return cloudinaryFull(cloudinaryImage.publicId);
    if (size === 'blur')  return cloudinaryBlur(cloudinaryImage.publicId);
    return cloudinaryThumb(cloudinaryImage.publicId);
  }
  return '';
}
