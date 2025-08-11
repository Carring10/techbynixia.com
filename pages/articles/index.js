import ArticleList from '../../components/ArticleList.js';
import { getSortedPostsData } from '../../lib/posts.js';

export default function ArticlesPage({ posts }) {
  console.log(posts)
  return <ArticleList posts={posts} />;
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return { props: { posts } };
}
