import { existsSync } from 'node:fs'
import { glob, type LoaderContext } from 'astro/loaders'

/** Remove deleted files even when a collection becomes completely empty. */
export function contentFiles(base: string) {
  const loader = glob({ pattern: '**/*.{md,mdx}', base })
  return {
    ...loader,
    async load(context: LoaderContext) {
      // Astro's glob loader returns before pruning stale entries if no files match.
      // Keep the cache for existing entries, but never publish a deleted CMS file.
      for (const [id, entry] of context.store.entries()) {
        if (entry.filePath && !existsSync(new URL(entry.filePath, context.config.root))) {
          context.store.delete(id)
        }
      }
      await loader.load(context)
    },
  }
}
