import { getCollection, type CollectionEntry } from 'astro:content'
import type { PhotoData } from '~/types'

export async function getPhotosList(): Promise<PhotoData[]> {
  return toPhotoData(await getCollection('photos', ({ data }) => !data.draft))
}

// 首页照片集：优先展示勾选了「首页展示」的照片集；一个都没勾选时展示最新的照片集
export async function getHomePhotos(limit: number): Promise<PhotoData[]> {
  const entries = await getCollection('photos', ({ data }) => !data.draft)
  const picked = entries.filter(({ data }) => data.homepage)
  return toPhotoData(picked.length > 0 ? picked : entries).slice(0, limit)
}

function toPhotoData(entries: CollectionEntry<'photos'>[]): PhotoData[] {
  return entries
    .slice()
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
