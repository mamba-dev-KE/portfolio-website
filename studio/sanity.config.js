import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';

export default defineConfig({
  title: 'portfolio website',
  projectId: 'inm1xupw',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  tools: (prev) => {
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== 'vision');
  },

  schema: {
    types: schemas,
  },
});
