import matter from 'gray-matter'

// Ensure Vite processes these at build time
const files = import.meta.glob('../content/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export interface BlogPost {
  title: string
  date: string
  image: string
  slug: string
  content: string
}

console.log(files)

export const posts: BlogPost[] = Object.entries(files).map(([path, raw]) => {
  const { data, content } = matter(raw as string)
  console.log(data)
  const slug = path.split('/').pop()?.replace('.md', '') || ''

  return {
    title: data.title,
    date: data.date,
    image: data.image,
    slug,
    content,
  }
})