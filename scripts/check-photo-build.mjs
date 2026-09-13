import { readFile, stat } from 'node:fs/promises'
import { resolve, sep } from 'node:path'

// Run against the exact files Netlify publishes, after Astro has generated images.
const root = resolve('dist')
const html = await readFile(resolve(root, 'photos/index.html'), 'utf8')
const decode = (value) =>
  value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
let count = 0
for (const island of html.matchAll(/<astro-island\b[^>]*>/g)) {
  if (!island[0].includes('PolaroidStack')) continue
  const attribute = island[0].match(/\bprops="([^"]*)"/)
  if (!attribute) throw new Error('照片组件缺少构建数据')
  const props = JSON.parse(decode(attribute[1]))
  for (const [, photo] of props.photos[1]) {
    for (const [field, limit] of [
      ['thumbnailSrc', 150_000],
      ['displaySrc', 500_000],
    ]) {
      const url = photo[field]?.[1]
      if (typeof url !== 'string' || !url.startsWith('/_astro/') || !url.endsWith('.webp')) {
        throw new Error(`照片缺少压缩版本 ${field}，停止部署：${url}`)
      }
      const path = resolve(root, url.slice(1))
      if (!path.startsWith(root + sep)) throw new Error('照片路径超出发布目录')
      const file = await stat(path)
      if (file.size > limit) throw new Error(`${url} 超出照片体积预算 ${limit} bytes；请检查压缩配置`)
    }
    count++
  }
}
console.log(`Photos check passed: ${count} photos have deployable WebP thumbnails and display images.`)
