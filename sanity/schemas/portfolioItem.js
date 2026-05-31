import {
  ComposeSparklesIcon,
  ImagesIcon,
  PublishIcon,
  UploadIcon,
} from '@sanity/icons';

const categories = [
  'Posters',
  'Flyer Designs',
  'Brochure Designs',
  'Standee Designs',
  'Business Cards',
  'Logos',
  'Reels / Shorts',
  'YouTube',
  'Social Media',
  'Branding',
];

const imageMediaTypes = [
  'poster',
  'flyer',
  'standee',
  'businessCard',
  'logo',
  'social',
  'brand',
];

const fileMediaTypes = ['reel', 'brochure'];

const mediaTypes = [
  { title: 'Poster / Artwork Image', value: 'poster' },
  { title: 'Flyer Image', value: 'flyer' },
  { title: 'Brochure PDF', value: 'brochure' },
  { title: 'Standee Image', value: 'standee' },
  { title: 'Business Card', value: 'businessCard' },
  { title: 'Logo Image', value: 'logo' },
  { title: 'Reel / Short Video', value: 'reel' },
  { title: 'YouTube Video', value: 'youtube' },
  { title: 'Social Media Image', value: 'social' },
  { title: 'Branding Image', value: 'brand' },
];

const mediaTypeTitleByValue = Object.fromEntries(
  mediaTypes.map((mediaType) => [mediaType.value, mediaType.title])
);

export const portfolioItem = {
  name: 'portfolioItem',
  title: 'Portfolio Work',
  type: 'document',
  icon: ImagesIcon,
  description: 'Upload and organize the creative work shown in the portfolio gallery.',
  groups: [
    {
      name: 'content',
      title: 'Content',
      icon: ComposeSparklesIcon,
      default: true,
    },
    {
      name: 'media',
      title: 'Media',
      icon: UploadIcon,
    },
    {
      name: 'publishing',
      title: 'Publishing',
      icon: PublishIcon,
    },
  ],
  initialValue: {
    featured: true,
    sortOrder: 100,
  },
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      group: 'content',
      description: 'Use a short name that will look good in the gallery and lightbox.',
      validation: (Rule) => Rule.required().min(2).max(120),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'content',
      options: {
        list: categories,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      group: 'content',
      description: 'Choose the format that matches how this item should open in the gallery.',
      options: {
        list: mediaTypes,
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imageAsset',
      title: 'Image Upload',
      type: 'image',
      group: 'media',
      description: 'Upload artwork for posters, flyers, standees, business cards, logos, social posts, and branding.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Short description for accessibility.',
        },
      ],
      hidden: ({ document }) =>
        ['reel', 'brochure', 'youtube'].includes(document?.mediaType),
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (
            imageMediaTypes.includes(context.document?.mediaType) &&
            !value?.asset?._ref
          ) {
            return 'Upload an image before publishing this gallery item.';
          }

          return true;
        }),
    },
    {
      name: 'fileAsset',
      title: 'Video / PDF Upload',
      type: 'file',
      group: 'media',
      description: 'Upload an MP4 for reels or a PDF for brochures.',
      options: {
        accept: 'video/*,application/pdf',
      },
      hidden: ({ document }) =>
        !['reel', 'brochure'].includes(document?.mediaType),
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (
            fileMediaTypes.includes(context.document?.mediaType) &&
            !value?.asset?._ref
          ) {
            return 'Upload the matching video or PDF before publishing this item.';
          }

          return true;
        }),
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube URL or Video ID',
      type: 'string',
      group: 'media',
      description: 'Only needed when Media Type is YouTube Video.',
      hidden: ({ document }) => document?.mediaType !== 'youtube',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.mediaType === 'youtube' && !value) {
            return 'Add a YouTube URL or video ID before publishing this item.';
          }

          return true;
        }),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'content',
      rows: 3,
      validation: (Rule) => Rule.max(240),
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      group: 'publishing',
      description: 'Featured items appear in the highlighted publishing workflow view.',
      initialValue: true,
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      group: 'publishing',
      description: 'Lower numbers appear first. Use 10, 20, 30 so it is easy to reorder later.',
      initialValue: 100,
    },
  ],
  orderings: [
    {
      title: 'Gallery Order',
      name: 'galleryOrder',
      by: [
        { field: 'sortOrder', direction: 'asc' },
        { field: '_createdAt', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      mediaType: 'mediaType',
      media: 'imageAsset',
    },
    prepare({ title, subtitle, mediaType, media }) {
      return {
        title: title || 'Untitled portfolio item',
        subtitle: [subtitle, mediaTypeTitleByValue[mediaType]]
          .filter(Boolean)
          .join(' - '),
        media,
      };
    },
  },
};
