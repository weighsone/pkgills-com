/**
 * Prefix a site-root-relative path with BASE_URL so links work on both:
 *   - GitHub Pages staging: weighsone.github.io/pkgills-com/  (BASE_URL = /pkgills-com/)
 *   - Custom domain:        pkgills.com/                       (BASE_URL = /)
 *
 * Usage:  href={u('/contact')}  →  /pkgills-com/contact  or  /contact
 *
 * When the custom domain goes live, remove `base` from astro.config.mjs
 * and this function collapses back to a no-op (returns the path unchanged).
 */
export function u(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip trailing slash
  return `${base}${path}`;
}
