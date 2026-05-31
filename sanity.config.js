import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { DashboardIcon, GroqIcon } from '@sanity/icons';
import { schemaTypes } from './sanity/schemas/index';
import { PVStudioIcon, StudioLogo } from './sanity/components/StudioLogo';
import { studioStructure } from './sanity/structure';
import { pvStudioTheme } from './sanity/studioTheme';

export default defineConfig({
  name: 'pv_creationz',
  title: 'PV Creationz',
  subtitle: 'Creative Control Center',
  basePath: '/studio',
  icon: PVStudioIcon,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'replaceprojectid',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  theme: pvStudioTheme,
  components: {
    logo: StudioLogo,
  },
  plugins: [
    structureTool({
      name: 'creative-desk',
      title: 'Creative Desk',
      icon: DashboardIcon,
      structure: studioStructure,
    }),
    visionTool({
      title: 'Query Lab',
      icon: GroqIcon,
      defaultApiVersion: '2024-06-01',
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
