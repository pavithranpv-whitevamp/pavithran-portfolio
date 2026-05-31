/**
 * lib/cloudinary.js
 * ─────────────────────────────────────────────────────────────────
 * NOTE: The heavy server-side `cloudinary` npm package has been
 * removed. URL building is now done via lib/cloudinaryHelpers.js
 * which works on both client and server with zero config.
 *
 * For server-side admin operations (upload, delete), import from
 * this file only in API routes (app/api/...) — never in components.
 * ─────────────────────────────────────────────────────────────────
 */

// Re-export the lightweight helpers so old imports don't break
export {
  cloudinaryUrl,
  cloudinaryThumb,
  cloudinaryFull,
  cloudinaryBlur,
  cloudinarySquare,
  resolveImage,
} from './cloudinaryHelpers';
