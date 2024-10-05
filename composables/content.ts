import { packMeta, unpackMeta } from '@zhead/vue'
import { useAsyncData } from '#app'
import { SiteName, groupBy } from '~/logic'
import { nextTick, queryContent, unref, useHead, watch } from '#imports'
import type { JsonParsedContent, Page, Post, ProjectList, NoteList, EmbedList } from '~/types'
import type { MaybeRef } from '@vueuse/schema-org'

// Fetch projects data
export const useProjects = () => {
  return useAsyncData('content:projects', () =>
    queryContent<JsonParsedContent<ProjectList>>('projects').findOne(),
  )
}

// Fetch notes data
export const useNotes = () => {
  return useAsyncData('content:notes', () =>
    queryContent<JsonParsedContent<NoteList>>('notes').findOne(),
  )
}

// Fetch navigation content
export const useHeaderNav = () => {
  return useAsyncData('content:navigation', () => 
    queryContent('pages')
      .where({ nav: true })
      .only(['title', 'icon', 'path'])
      .find()
  )
}

// Fetch post list content grouped by published year
export const usePostList = () => {
  return useAsyncData('content:post-partials', () => 
    queryContent<Post>()
      .where({ _path: /posts\/*/ })
      .without(['head', 'body', 'excerpt', '_'])
      .sort({ publishedAt: -1 })
      .find(), 
    {
      transform: posts => groupBy(posts, p => new Date(p.publishedAt).getFullYear()),
    }
  )
}

// Fetch specific route content for Post or Page
export const useRoutesContent = <T extends Post>(path?: string) => {
  if (!path) path = useRoute().path
  return useAsyncData(`content:${path}`, () => 
    queryContent<T>()
      .where({ path: new RegExp(path) })
      .without(['excerpt'])
      .findOne()
  )
}

// Fetch a single post based on the route path
export const usePost = async (path?: string) => useRoutesContent<Post>(path)

// Fetch a single page based on the route path
export const usePage = async (path?: string) => useRoutesContent<Page>(path)

// Set the document head with title and meta tags
export const useContentHead = (doc: MaybeRef<Partial<Page>>) => {
  watch(() => doc, (doc) => {
    doc = unref(doc)
    if (!doc) return

    const head = { ...doc.head } // Shallow copy of head
    head.title = `${head.title || doc.title}`

    // Ensure site name is included in title
    if (!head.title.endsWith(SiteName) && !head.title.startsWith(SiteName)) {
      head.title = `${head.title} - ${SiteName}`
    }

    // Prepare meta tags
    head.meta = head.meta || []
    const flatMeta = packMeta(head.meta)

    flatMeta.ogTitle = flatMeta.ogTitle || head.title
    flatMeta.description = flatMeta.description || doc.description
    flatMeta.ogDescription = flatMeta.ogDescription || flatMeta.description
    flatMeta.ogImage = flatMeta.ogImage || head.image

    head.meta = unpackMeta(flatMeta)

    // Update head in the client
    if (process.client) {
      nextTick(() => useHead(head))
    } else {
      useHead(head)
    }
  }, {
    immediate: true,
  })
}

// New function to fetch embed data for YouTube, Facebook, and m3u8 content
export const useEmbeds = () => {
  return useAsyncData('content:embeds', () => 
    queryContent<JsonParsedContent<EmbedList>>('embeds').find()  // Fetch multiple embeds
  )
}

// Generalized function to handle fetching content by type
export const useContentByType = (type: string) => {
  return useAsyncData(`content:${type}`, () => 
    queryContent<JsonParsedContent<any>>(type).find()  // Fetch content by specified type
  )
}
