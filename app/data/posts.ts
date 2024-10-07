export const posts = [
  {
    id: "aabbccddeeff",
    title: "First Post",
    content: "This is the content of my first post.",
  },
  {
    id: "bbccddeeffaa",
    title: "It's a Second Post",
    content: "This is the content of my second post.",
  },
  {
    id: "ccddeeffaabb",
    title: "3rd Post",
    content: "This is the content of my third post.",
  },
  {
    id: "ddeeffaabbcc",
    title: "Fourth Post: A subtitle",
    content: "This is the content of my fourth post.",
  },
  {
    id: "eeffaabbccdd",
    title: "Fifth Post || This is a test",
    content: "This is the content of my fifth post.",
  },
  {
    id: "ffaabbccddee",
    title: "-Sixth Post-",
    content: "This is the content of my sixth post.",
  },
];

export type Post = (typeof posts)[number];
export type PostWithoutContent = Omit<Post, "content">;
