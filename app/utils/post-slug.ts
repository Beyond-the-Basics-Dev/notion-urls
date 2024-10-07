export function getSlugWithId({ title, id }: { title: string; id: string }) {
  return `${title.replace(/[^a-zA-Z0-9]+/g, "-")}-${id}`;
}
