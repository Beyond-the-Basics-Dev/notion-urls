import { posts } from "../data/posts";

export function getPostById(postId: string) {
  return posts.find((post) => post.id === postId);
}

export function getSlugWithId({ title, id }: { title: string; id: string }) {
  // Validate inputs
  if (!title || !id) {
    throw new Error("Title and ID are required");
  }

  const slugifiedTitle = title
    .trim() // Trim the title for any leading/trailing spaces
    .replace(/[^a-zA-Z0-9]+/g, "-") // Replace special characters and spaces with hyphens
    .replace(/^-+|-+$/g, ""); // Trim any leading/trailing hyphens
  // You can lowercase the title too
  // I chose not to, to stay in parity with Notion's approach

  // Ensure we have valid content before creating slug
  if (!slugifiedTitle) {
    return id; // Fallback to just ID if title produces empty slug
  }

  return `${slugifiedTitle}-${id}`;
}

export function extractPostId(slugOrId: string): string {
  // Validate input
  if (!slugOrId) {
    throw new Error("Invalid post identifier");
  }

  // Split the slug-id combination
  const parts = slugOrId.split("-");
  const id = parts.at(-1);

  // Validate that we got a valid ID
  if (!id || id.length < 1) {
    throw new Error("Invalid post ID format");
  }

  // Optional: Add validation for expected ID format
  // For example, if IDs should be 12 characters:
  if (!/^[a-z0-9]{12}$/.test(id)) {
    throw new Error("Invalid post ID format");
  }

  return id;
}
