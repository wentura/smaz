// grab 10 posts
export const ALL_POSTS = `query AllPosts{
posts(where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      slug
      title
      content
    }
  }
}`;

export const ALL_ACTIONS = `query AllActions{posts(where: {orderby: {field: DATE, order: DESC}, categoryName: "kalendar"}) {
    nodes {
      slug
      title
      content
      excerpt
      contentTypeName
      date
      desiredSlug
      enclosure
      status
      template {
        templateName
        ... on DefaultTemplate {
          templateName
        }
      }
      comments {
        nodes {
          content
          approved
        }
      }
    }
  }}`;

// grab all slugs for static generation
export const ALL_ACTIONS_WITH_SLUG = `query AllActionWithSlug{posts(last:50){nodes{slug}}}`;
// post by a slug to display to visitor
export const ACTION_BY_SLUG = `query NewQuery($id: ID!, $idType: PostIdType!) {
  post(id: $id, idType: $idType) {
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
}`;
