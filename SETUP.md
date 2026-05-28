# Pavithran Portfolio CMS Setup

This project keeps the existing Next.js 14 + Tailwind portfolio frontend and uses Sanity CMS for portfolio content.

## Local Setup

1. Install packages:

```bash
npm install
```

2. Confirm `.env.local` has these public Sanity values:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

3. Start the portfolio:

```bash
npm run dev
```

4. Open:

- Site: `http://localhost:3000`
- Studio: `http://localhost:3000/studio`

## Publishing Workflow

Create a `Portfolio Item`, then fill:

- `Title`
- `Category`
- `Media Type`
- `Image Upload` for image-based work
- `Video / PDF Upload` for reels and brochures
- `YouTube URL or Video ID` for YouTube items
- `Description`
- `Featured`
- `Sort Order`

Lower `Sort Order` values appear first. Use 10, 20, 30 so it is easy to reorder later.

## Media Guide

- Posters, flyers, standees, logos, social media, and branding: upload an image in `Image Upload`.
- Reels / Shorts: upload an MP4 in `Video / PDF Upload`.
- Brochure Designs: upload a PDF in `Video / PDF Upload`.
- YouTube: paste the full YouTube URL or video ID in `YouTube URL or Video ID`.

If Sanity is empty or unavailable, the portfolio automatically uses the existing static fallback data so localhost stays stable.

## Vercel

Add the same Sanity environment variables in Vercel project settings before deploying.
