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
export async function getSinglePost(slug) {
  const query = {
    query: `query getSinglePost {
  post(idType: SLUG, id: "${slug}") {
    id
    title
    slug
    kalendarAkci {
      casAkce
      datumAkce
      cislobanky
      cislopreductu
      cislouctu
      vstupne
    }
    excerpt
    content
    featuredImage {
      node {
        sourceUrl
        mediaDetails {
          height
          width
        }
      }
    }
  }
}`,
  };
  const resJson = await graphqlRequest(query);
  // const resJson = await graphqlRequest(query);
  const singlePost = resJson.data.post;
  return singlePost;
}
// posts(where: {categoryName: "akce"}) {
export async function getPostSlugs() {
  const query = {
    query: `query getPostSlugs {
  posts {
    nodes {
      slug
    }
  }
}`,
  };
  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.posts.nodes;
  return slugs;
}
