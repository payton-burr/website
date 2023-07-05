export const prerender = false;

export async function get() {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `query {
        user(login: "payton-burr") {
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              id
              url
              description
              languages(first: 10) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
      }`,
    }),
  });

  const responseData = await response.json();
  return new Response(JSON.stringify(responseData));
}
