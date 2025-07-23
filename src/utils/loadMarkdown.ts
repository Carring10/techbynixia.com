import matter from 'gray-matter'

// Ensure Vite processes these at build time
const files = import.meta.glob('../content/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export interface BlogPost {
  title: string
  description: string
  classification: string
  date: string
  image: string
  slug: string
  content: string
}

export const posts: BlogPost[] = Object.entries(files).map(([path, raw]) => {
  const { data, content } = matter(raw as string);
  const slug = path.split('/').pop()?.replace('.md', '') || '';

  return {
    title: data.title,
    description: data.description,
    classification: data.classification,
    date: data.date,
    image: data.image,
    slug,
    content,
  }
})