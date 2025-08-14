import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostFileNames() {
  console.log(postsDirectory);
  return fs.readdirSync(postsDirectory).filter(fn => fn.endsWith(".md") || fn.endsWith(".mdx"));
}

export function getAllPostSlugs() {
  return getPostFileNames().map(fileName => ({
    params: { slug: fileName.replace(/\.mdx?$/, "") }
  }));
}

export function getSortedPostsData() {
  const fileNames = getPostFileNames();

  const posts = fileNames.map(fileName => {
    const slug = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    console.log(data);
    
    return { slug, ...data };
  });

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostData(slug) {
  const candidates = [path.join(postsDirectory, `${slug}.mdx`), path.join(postsDirectory, `${slug}.md`)];
  const fullPath = candidates.find(fs.existsSync);

  if (!fullPath) throw new Error(`Post not found: ${slug}`);

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { meta: data, content };
}
