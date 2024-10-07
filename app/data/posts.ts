export const posts = [
  {
    id: "aabbccddeeff",
    title: "First Post",
    content: "This is the content of my first post.",
  },
  {
    id: "bbccddeeffaa",
    title: "Second Post",
    content: "This is the content of my second post.",
  },
  {
    id: "ccddeeffaabb",
    title: "Third Post",
    content: "This is the content of my third post.",
  },
  {
    id: "ddeeffaabbcc",
    title: "Fourth Post",
    content: "This is the content of my fourth post.",
  },
  {
    id: "eeffaabbccdd",
    title: "Fifth Post",
    content: "This is the content of my fifth post.",
  },
  {
    id: "ffaabbccddee",
    title: "Sixth Post",
    content: "This is the content of my sixth post.",
  },
];

export type Post = (typeof posts)[number];
export type PostWithoutContent = Omit<Post, "content">;
