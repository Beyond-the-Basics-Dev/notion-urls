import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { posts as postsData, type PostWithoutContent } from "../data/posts";
import { getSlugWithId } from "../utils/post-slug";

export const meta: MetaFunction = () => {
  return [
    { title: "Notion Like URL Architecture || By Arpit Dalal" },
    {
      name: "description",
      content: "A posts app demonstrating notion like url architecture",
    },
  ];
};

export const loader = () => {
  const posts = postsData.map((post) => ({
    ...post,
    id: getSlugWithId(post),
  }));
  return {
    posts,
  };
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-4 px-12">
        <h1 className="text-4xl font-bold">Notion Like URL Architecture</h1>
        <p className="text-lg">
          This is a posts app demonstrating notion like url architecture.
        </p>
        <div className="flex flex-col divide-y-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}

function PostCard({ post }: { post: PostWithoutContent }) {
  return (
    <Link
      to={`/${post.id}`}
      className="flex justify-between items-center py-4 group"
    >
      <h2 className="text-2xl font-bold hover:underline group-hover:underline">
        {post.title}
      </h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 inline-block ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </Link>
  );
}
