import graphqlRequest from "./greaphqlRequest";
export async function getAllActions() {
  const query = {
    query: `query NewQuery {
  posts(where: {categoryName: "akce"}) {
    nodes {
			id
			slug
      title
      excerpt
      featuredImage {
        node {
          altText
          uri
          title
          mediaDetails {
            height
            width
          }
          sourceUrl
        }
      }
      kalendarAkci {
        casAkce
        datumAkce
				vstupne
      }
    }
  }
}
`,
  };
  const resJson = await graphqlRequest(query);
  const allActions = resJson.data.posts;

  return allActions;
}
