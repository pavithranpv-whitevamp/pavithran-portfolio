import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replaceprojectid';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

function isSanityConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'replaceprojectid'
  );
}

function getYouTubeId(url = '') {
  if (!url) return '';
  if (!url.includes('youtube') && !url.includes('youtu.be')) return url;

  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.replace('/', '');
    }
    return parsed.searchParams.get('v') || '';
  } catch {
    return url;
  }
}

function getAspectHint(mediaType) {
  const hints = {
    flyer: 'a4',
    brochure: 'document',
    businessCard: 'card',
  };

  return hints[mediaType] || mediaType || 'poster';
}

function normalizePortfolioItem(item) {
  const mediaKind = item.mediaType || 'poster';
  const imageUrl = item.imageAsset?.asset?.url || '';
  const fileUrl = item.fileAsset?.asset?.url || '';
  const mediaUrl = imageUrl || fileUrl || item.youtubeUrl || item.mediaUrl || '';

  const normalized = {
    id: item._id,
    title: item.title,
    category: item.category,
    mediaType: mediaKind,
    mediaKind,
    mediaUrl,
    blurb: item.description,
    featured: item.featured,
    sortOrder: item.sortOrder,
    aspectHint: getAspectHint(mediaKind),
  };

  // Keep the gallery's existing internal field names unchanged.
  if (mediaKind === 'reel') normalized.videoSrc = fileUrl || mediaUrl;
  if (mediaKind === 'brochure') normalized.pdfUrl = fileUrl || mediaUrl;
  if (mediaKind === 'youtube') normalized.youtubeId = getYouTubeId(item.youtubeUrl || item.mediaUrl);

  if (!['reel', 'brochure', 'youtube', 'businessCard'].includes(mediaKind) && mediaUrl) {
    normalized.cloudinaryImage = {
      url: mediaUrl,
      alt: item.imageAsset?.alt || item.title,
      width: item.imageAsset?.asset?.metadata?.dimensions?.width,
      height: item.imageAsset?.asset?.metadata?.dimensions?.height,
    };
  }

  return normalized;
}

export async function fetchPortfolioItems() {
  if (!isSanityConfigured()) {
    return { data: [], error: 'Sanity project ID is not configured.' };
  }

  const query = /* groq */ `
    *[_type == "portfolioItem"]
      | order(coalesce(sortOrder, 100) asc, _createdAt desc) {
        _id,
        title,
        category,
        mediaType,
        youtubeUrl,
        mediaUrl,
        imageAsset {
          alt,
          asset->{
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          }
        },
        fileAsset {
          asset->{
            url,
            originalFilename,
            mimeType
          }
        },
        description,
        featured,
        sortOrder
      }
  `;

  try {
    const data = await client.fetch(query);
    return { data: (data || []).map(normalizePortfolioItem), error: null };
  } catch (err) {
    return { data: [], error: err.message };
  }
}
