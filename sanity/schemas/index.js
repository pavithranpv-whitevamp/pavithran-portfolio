/**
 * schemas/index.js
 * ─────────────────────────────────────────────────────────────────
 * Central export for all Sanity schemas.
 * Add future schemas here (e.g. siteSettings, testimonial, etc.)
 * ─────────────────────────────────────────────────────────────────
 */

import { portfolioItem } from './portfolioItem';

export const schemaTypes = [portfolioItem];
