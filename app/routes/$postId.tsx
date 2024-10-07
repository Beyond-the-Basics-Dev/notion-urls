import {
  isRouteErrorResponse,
  Link,
  redirect,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { extractPostId, getPostById, getSlugWithId } from "../utils/posts";

export async function loader({ params }: LoaderFunctionArgs) {
  const postIdRaw = params.postId;
  if (!postIdRaw) {
    throw new Response("Not Found", { status: 404 });
  }

  // Check if we need to redirect
  if (!postIdRaw.includes("-")) {
    // Attempt to fetch post details
    const post = getPostById(postIdRaw);

    if (!post) {
      throw new Response("Post not found", {
        status: 404,
        statusText: "Not Found",
      });
    }

    // Generate new slug and redirect
    const newSlug = getSlugWithId(post);

    // Add cache headers for better performance
    return redirect(`/${newSlug}`, {
      headers: {
        "Cache-Control": "public, max-age=3600",
        "X-Redirected-From": postIdRaw,
      },
    });
  }

  let postId: string;
  try {
    postId = extractPostId(postIdRaw);
  } catch (error) {
    // Handle error appropriately
    throw new Response("Invalid Post ID", { status: 400 });
  }

  const post = getPostById(postId);
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return { post };
}

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
