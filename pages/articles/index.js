import ArticleList from '../../components/ArticleList/ArticleList.js';
import { getSortedPostsData } from '../../lib/posts.js';

export default function ArticlesPage({ posts }) {
  return <ArticleList posts={posts} />;
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return { props: { posts } };
}
