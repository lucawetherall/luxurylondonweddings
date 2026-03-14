import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const venues = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/venues',
    generateId: ({ entry }) => {
      // Use full path as ID to avoid collisions across locales
      return entry.replace(/\.md$/, '');
    },
  }),
  schema: z.object({
    name: z.string(),
    location: z.string(),
    region: z.enum(['london', 'oxbridge', 'cotswolds', 'bath', 'scotland', 'lake-district']),
    type: z.enum(['church', 'chapel', 'cathedral', 'estate', 'castle']),
    features: z.array(z.string()),
    priceRange: z.enum(['standard', 'premium', 'luxury']),
    locale: z.enum(['en', 'zh', 'ja']),
    slug: z.string(),
    founded: z.string().optional(),
    exclusive: z.boolean().default(false),
  }),
});

export const collections = { venues };
