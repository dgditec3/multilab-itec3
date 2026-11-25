/**
 * Cliente mínimo para la Fase 2 (2027): consumir el WordPress oficial
 * (itec3misiones.edu.ar, alojado en DonWeb) mediante la API REST estándar.
 *
 * ⚠️  Todavía NO se usa en la presentación de 2026. Está acá para demostrar la
 * continuidad técnica: el mismo repositorio y subdominio evolucionan hacia el
 * Portal de Contenidos sin rehacer infraestructura.
 *
 * Requisitos futuros en WordPress:
 *  - Permalinks distintos de "Simple" para que /wp-json/ esté disponible.
 *  - CORS permitido para https://multilab.itec3misiones.edu.ar (o consumir
 *    desde una función serverless de Vercel).
 *  - Categorías creadas para "cursos", "talleres" y "novedades".
 */

export const WP_BASE_URL: string =
  (import.meta.env.VITE_WP_BASE_URL as string | undefined) ?? 'https://itec3misiones.edu.ar'

const WP_API = `${WP_BASE_URL}/wp-json/wp/v2`

/** Subconjunto tipado de la respuesta de /wp/v2/posts (con ?_embed). */
export interface WpPost {
  id: number
  date: string
  slug: string
  link: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  categories: number[]
  featured_media: number
  _embedded?: {
    'wp:featuredmedia'?: { source_url: string; alt_text: string }[]
    'wp:term'?: { id: number; name: string; slug: string }[][]
  }
}

export interface WpCategory {
  id: number
  name: string
  slug: string
  count: number
}

export interface WpQuery {
  perPage?: number
  page?: number
  /** IDs de categorías (cursos, talleres, novedades). */
  categories?: number[]
  search?: string
}

async function wpFetch<T>(path: string, params: Record<string, string> = {}, signal?: AbortSignal): Promise<T> {
  const qs = new URLSearchParams(params).toString()
  const res = await fetch(`${WP_API}${path}${qs ? `?${qs}` : ''}`, { signal })
  if (!res.ok) throw new Error(`WordPress REST API: ${res.status} ${res.statusText}`)
  return res.json() as Promise<T>
}

/** GET /wp-json/wp/v2/posts — artículos, novedades y publicaciones del portal. */
export function fetchPosts(query: WpQuery = {}, signal?: AbortSignal): Promise<WpPost[]> {
  const params: Record<string, string> = {
    per_page: String(query.perPage ?? 10),
    page: String(query.page ?? 1),
    _embed: '1',
  }
  if (query.categories?.length) params.categories = query.categories.join(',')
  if (query.search) params.search = query.search
  return wpFetch<WpPost[]>('/posts', params, signal)
}

/** GET /wp-json/wp/v2/categories — para mapear cursos, talleres y novedades. */
export function fetchCategories(signal?: AbortSignal): Promise<WpCategory[]> {
  return wpFetch<WpCategory[]>('/categories', { per_page: '100' }, signal)
}

/** Ejemplo de uso (Fase 2):
 *
 *   const [cursos] = (await fetchCategories()).filter((c) => c.slug === 'cursos')
 *   const posts = await fetchPosts({ categories: [cursos.id], perPage: 6 })
 */
