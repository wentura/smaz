import Link from "next/link";
import fetcher from "../../lib/fetcher";
import { ALL_POSTS } from "../../lib/wordpress/api";
import { compress } from "../../next.config";

const blog = ({ allPosts }) => {
  const posts = allPosts;

  return (
    <div>
      blog posts
      <main>
        <div>
          {posts.map((post) => {
            return <h3 key={post.slug}>{post.title}</h3>;
          })}
        </div>
      </main>
    </div>
  );
};
export default blog;
export async function getStaticProps() {
  const res = await fetcher(ALL_POSTS);
  const allPosts = res.data.posts.nodes;
  return {
    props: { allPosts },
    revalidate: 1,
  };
}
