export const posts = [
  {
    id: "aabbccddeeff",
    title: "First Post",
    content: "This is the content of my first post.",
  },
  {
    id: "bbccddeeffgg",
    title: "It's a Second Post",
    content: "This is the content of my second post.",
  },
  {
    id: "ccddeeffgghh",
    title: "3rd Post",
    content: "This is the content of my third post.",
  },
  {
    id: "ddeeffgghhii",
    title: "Fourth Post: A subtitle",
    content: "This is the content of my fourth post.",
  },
  {
    id: "eeffgghhiijj",
    title: "Fifth Post || This is a test",
    content: "This is the content of my fifth post.",
  },
  {
    id: "ffgghhiijjkk",
    title: "-Sixth Post-",
    content: "This is the content of my sixth post.",
  },
  {
    title: "Normal Title",
    id: "gghhiijjkkll",
    content: "This is the content of my seventh post.",
  },
  {
    title: "Title with spaces",
    id: "hhiijjkkllmm",
    content: "This is the content of my eighth post.",
  },
  {
    title: "Title-with-hyphens",
    id: "iijjkkllmmnn",
    content: "This is the content of my ninth post.",
  },
  {
    title: "Title_with_underscores",
    id: "jjkkllmmnnoo",
    content: "This is the content of my tenth post.",
  },
  {
    title: "Title with !@#$%^&*() symbols",
    id: "kkllmmnnoopp",
    content: "This is the content of my eleventh post.",
  },
  {
    title: "   Trimmed   Title   ",
    id: "qqrrssttuuvv",
    content: "This is the content of my twelfth post.",
  },
  {
    title: "UPPERCASE TITLE",
    id: "rrssttuuvvww",
    content: "This is the content of my thirteenth post.",
  },
  {
    title: "mixed CASE tiTLe",
    id: "ssttuuvvwwxx",
    content: "This is the content of my fourteenth post.",
  },
  {
    title: "Title with números 123",
    id: "ttuuvvwwxxyy",
    content: "This is the content of my fifteenth post.",
  },
  {
    title: "  ",
    id: "uuvvwwxxyyzz",
    content: "This is the content of my sixteenth post.",
  },
  {
    title: "!@#$%^&*()",
    id: "vvwwxxyyzzaa",
    content: "This is the content of my seventeenth post.",
  },
  {
    title:
      "Very-long-title-that-might-exceed-certain-length-limits-in-some-systems",
    id: "wwxxyyzzaabb",
    content: "This is the content of my eighteenth post.",
  },
  {
    title: "Title with trailing hyphen-",
    id: "xxyyzzaabbcc",
    content: "This is the content of my nineteenth post.",
  },
  {
    title: "-Title with leading hyphen",
    id: "yyzzaabbccdd",
    content: "This is the content of my twentieth post.",
  },
  {
    title: "Título con acentos y ñ",
    id: "zzaabbccddee",
    content: "This is the content of my twenty-first post.",
  },
];

export type Post = (typeof posts)[number];
export type PostWithoutContent = Omit<Post, "content">;
