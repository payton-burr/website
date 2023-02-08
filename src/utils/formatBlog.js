export function formatBlog(posts) {
  return [...posts].sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
}
