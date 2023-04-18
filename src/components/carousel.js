import Image from "next/image";
import Link from "next/link";
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
    <div className="flex flex-col">
      <div className="flex-1">
        <Image
          alt="zodpovedny hub"
          src="/zh.jpg"
          width={800}
          height={500}
          className="w-full relative"
        />
      </div>
      <div className="relative flex flex-1 flex-col overflow-visible mb-44 md:mb-48 items-center">
        <div className="bg-neutral-100 md:w-4/5 h-auto md:py-8 mt-[-10px] mb:mt-[-150px] absolute z-20 md:mt-[-80px]">
          <div className="flex flex-col items-center justify-center pt-4 md:px-20">
            <h3 className="uppercase text-xl md:text-3xl xs:pb-4 nadpis">
              Zodpovědný hub
            </h3>
            <p className="text-start lg:leading-7 text-xs lg:text-base py-2 px-4">
              Hub je tu pro vás jako místo, kde se můžete od někoho dalšího
              dozvědět něco nového. Kde můžete ostatní obohatit o něco, co zase
              umíte dobře vy. A také kde si můžete vyzkoušet s dětmi hry a
              materiály od zodpovědné výuky.
            </p>
            <Link
              href="/hub"
              className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
            >
              pojďte dál{" "}
            </Link>
          </div>
        </div>
      </div>

      {/* {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title.rendered}</h2>
          </div>
        ))} */}
    </div>
  );
}
