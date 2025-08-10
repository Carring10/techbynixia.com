// pages/posts/[slug].js
import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { getAllPostSlugs, getPostData } from "../../lib/posts";
import SEO from "../../components/SEO";

export default function Post({ source, meta }) {
  return (
    <>
      <SEO title={meta.title} description={meta.description} />
      <article className="container">
        <h1>{meta.title}</h1>
        <small>{meta.date}</small>
        <MDXRemote {...source} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { meta, content } = getPostData(params.slug);

  // convert the raw MDX into a serialized object for rendering
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
  });

  return {
    props: {
      source: mdxSource,
      meta,
    },
  };
}
