export function formatBlog(posts) {
  return [...posts].sort(
    (a, b) => new Date(b.data.date) - new Date(a.data.date)
  );
}
