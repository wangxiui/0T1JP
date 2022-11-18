const basePath = '/0T1JP'
export default function ImageLoader({ src, width, quality }) {
  return `https://example.com/${basePath}/${src}?w=${width}&q=${quality || 75}`
}
