import graphqlRequest from "./greaphqlRequest";
export async function getAllPosts() {
  const query = {
    query: `query NewQuery {
  posts {
    nodes {
      title,
			id,
			slug,
    }
  }
}
`,
  };
  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.posts;

  return allPosts;
}
