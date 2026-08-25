import { getCollection } from 'astro:content'
import type { PhotoData } from '~/types'

export async function getPhotosList(): Promise<PhotoData[]> {
  const entries = await getCollection('photos', ({ data }) => !data.draft)

  return entries
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map(({ data }) => ({
      title: data.title,
      icon: { type: 'emoji' as const, value: data.icon },
      description: data.description,
      date: data.date.toISOString().slice(0, 10),
      travel: data.travel,
      photos: data.photos.map((photo) => ({
        src: photo.image,
        alt: photo.alt || data.title,
        width: photo.image.width,
        height: photo.image.height,
        variant: photo.variant,
      })),
    }))
}
