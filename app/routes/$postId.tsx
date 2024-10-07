import {
  isRouteErrorResponse,
  Link,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { posts } from "../data/posts";
import { getSlugWithId } from "../utils/post-slug";

export const loader = ({ params }: LoaderFunctionArgs) => {
  const postIdRaw = params.postId;
  if (!postIdRaw) {
    throw new Response("Not Found", { status: 404 });
  }

  if (!postIdRaw.includes("-")) {
    // post id doesn't have slug, redirect to the post with slug
    const post = posts.find((post) => post.id === postIdRaw);
    if (!post) {
      throw new Response("Not Found", { status: 404 });
    }
    return redirect(`/${getSlugWithId(post)}`);
  }

  const postId = postIdRaw.split("-").at(-1);
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return { post };
};

export default function Post() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-4 px-12">
        <Link to="/" className="flex items-center gap-2 hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to home
        </Link>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-lg">{post.content}</p>
      </div>
    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>Post not found</div>;
    }
    return <div>An error occurred: {error.statusText}</div>;
  } else if (error instanceof Error) {
    return <div>An error occurred: {error.message}</div>;
  } else {
    return <div>An error occurred</div>;
  }
}
