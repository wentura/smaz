// import { useRouter } from "next/router";
// const Post = () => {
//   const router = useRouter();
//   const { pid } = router.query;
//   return <p>Posto: {pid}</p>;
// };
// export default Post;

import { useRouter } from "next/router";
import { getPostSlugs, getSinglePost } from "../../../lib/akceNahled";

export async function getStaticProps({ params }) {
  const postData = await getSinglePost(params.postSlug);
  console.log(postData);
  return {
    props: {
      postData,
    },
    revalidate: 10,
  };
}
export async function getStaticPaths() {
  const postSlugs = await getPostSlugs();
  return {
    paths: postSlugs.map((s) => ({
      params: {
        postSlug: s.slug,
      },
    })),
    fallback: "blocking",
  };
}
export default function Post({ postData }) {
  return (
    <>
      <div>{postData.title}</div>
      <div>{postData.slug}</div>
      <div>{postData.kalendarAkci.datumAkce}</div>
      <div>{postData.kalendarAkci.casAkce}</div>
      <div>{postData.title}</div>
      <div>{postData.title}</div>
    </>
  );
}
