// import createClient from "wordpress-rest-api";

// const client = new createClient({
//   endpoint: "http://klient001.zbyneksvoboda.cz/wp-json/wp/v2/posts",
// });

// export async function getPosts() {
//   try {
//     const posts = await client.posts().get();
//     return posts;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

// export async function getStaticProps() {
//   const posts = await getPosts();
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default function Carousel({ posts }) {
  return (
    <div>
      <ul>
        <li>carousel / hero image + text v pretceni</li>
        <li>vsechno se z tohodle souboru da smazat az na Carousel fci</li>
      </ul>
      {/* {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title.rendered}</h2>
          </div>
        ))} */}
    </div>
  );
}
