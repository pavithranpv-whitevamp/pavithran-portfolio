import {
  AddDocumentIcon,
  DocumentPdfIcon,
  FolderIcon,
  ImageIcon,
  ImagesIcon,
  PlayIcon,
  PresentationIcon,
  PublishIcon,
  SparklesIcon,
  StackCompactIcon,
  StackIcon,
  StarIcon,
  TagIcon,
  UploadIcon,
  VideoIcon,
} from '@sanity/icons';

const portfolioType = 'portfolioItem';

const categoryViews = [
  { title: 'Posters', value: 'Posters', icon: ImageIcon },
  { title: 'Flyer Designs', value: 'Flyer Designs', icon: AddDocumentIcon },
  { title: 'Brochure Designs', value: 'Brochure Designs', icon: DocumentPdfIcon },
  { title: 'Standee Designs', value: 'Standee Designs', icon: PresentationIcon },
  { title: 'Business Cards', value: 'Business Cards', icon: TagIcon },
  { title: 'Logos', value: 'Logos', icon: SparklesIcon },
  { title: 'Reels / Shorts', value: 'Reels / Shorts', icon: VideoIcon },
  { title: 'YouTube', value: 'YouTube', icon: PlayIcon },
  { title: 'Social Media', value: 'Social Media', icon: StackCompactIcon },
  { title: 'Branding', value: 'Branding', icon: StackIcon },
];

const galleryOrdering = [
  { field: 'sortOrder', direction: 'asc' },
  { field: '_createdAt', direction: 'desc' },
];

const portfolioList = (S, title, filter, params = {}) =>
  S.documentList()
    .title(title)
    .schemaType(portfolioType)
    .filter(filter)
    .params(params)
    .defaultOrdering(galleryOrdering);

export const studioStructure = (S) =>
  S.list()
    .title('PV Creationz')
    .items([
      S.listItem()
        .title('All Portfolio Work')
        .icon(ImagesIcon)
        .child(
          S.documentTypeList(portfolioType)
            .title('All Portfolio Work')
            .defaultOrdering(galleryOrdering)
        ),
      S.divider(),
      S.listItem()
        .title('Creative Formats')
        .icon(FolderIcon)
        .child(
          S.list()
            .title('Creative Formats')
            .items(
              categoryViews.map(({ title, value, icon }) =>
                S.listItem()
                  .title(title)
                  .icon(icon)
                  .child(
                    portfolioList(
                      S,
                      title,
                      '_type == $type && category == $category',
                      { type: portfolioType, category: value }
                    )
                  )
              )
            )
        ),
      S.listItem()
        .title('Publishing Workflow')
        .icon(PublishIcon)
        .child(
          S.list()
            .title('Publishing Workflow')
            .items([
              S.listItem()
                .title('Featured Work')
                .icon(StarIcon)
                .child(
                  portfolioList(
                    S,
                    'Featured Work',
                    '_type == $type && featured == true',
                    { type: portfolioType }
                  )
                ),
              S.listItem()
                .title('Needs Media')
                .icon(UploadIcon)
                .child(
                  portfolioList(
                    S,
                    'Needs Media',
                    '_type == $type && !defined(imageAsset.asset) && !defined(fileAsset.asset) && !defined(youtubeUrl)',
                    { type: portfolioType }
                  )
                ),
              S.listItem()
                .title('Drafts')
                .icon(AddDocumentIcon)
                .child(
                  portfolioList(
                    S,
                    'Drafts',
                    '_type == $type && _id in path("drafts.**")',
                    { type: portfolioType }
                  )
                ),
            ])
        ),
    ]);
