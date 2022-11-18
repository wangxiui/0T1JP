const basePath = '/0T1JP'

interface Params {
  src?: string
  width?: string|number
  quality?: string|number
}
export default function ImageLoader({ src, width, quality }: Params) {
  return `https://example.com/${basePath}/${src}?w=${width}&q=${quality || 75}`
}
