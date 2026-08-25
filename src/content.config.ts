import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { POSTS_CONFIG } from '~/config'
import type { CoverLayout, PostType } from '~/types'

const posts = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/posts',
  }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        tags: z.array(z.string()).optional(),
        updatedDate: z.date().optional(),
        author: z.string().default(POSTS_CONFIG.author),
        cover: image().optional(),
        ogImage: image().optional(),
        recommend: z.boolean().default(false),
        postType: z.custom<PostType>().optional(),
        coverLayout: z.custom<CoverLayout>().optional(),
        pinned: z.boolean().default(false),
        draft: z.boolean().default(false),
        license: z.string().optional(),
      })
      .transform((data) => ({
        ...data,
        ogImage: POSTS_CONFIG.ogImageUseCover && data.cover ? data.cover : data.ogImage,
      })),
})

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      githubUrl: z.string(),
      website: z.string(),
      type: z.string(),
      icon: image().optional(),
      imageClass: z.string().optional(),
      star: z.number(),
      fork: z.number(),
      draft: z.boolean().default(false),
    }),
})

const photos = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/photos',
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      date: z.date(),
      icon: z.string().default('📷'),
      travel: z.string().optional(),
      draft: z.boolean().default(false),
      photos: z
        .array(
          z.object({
            image: image(),
            alt: z.string().optional(),
            variant: z.enum(['1x1', '4x5', '4x3', '3x4', '9x16']).default('4x3'),
          })
        )
        .min(1),
    }),
})

export const collections = { posts, projects, photos }
