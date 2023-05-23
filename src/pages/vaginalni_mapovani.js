// import VypisAkci from "@/components/vypisAkci";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
// import { getAllActions } from "../../lib/akceNahled";
// import Actions from "../components/actions";
// import Carousel from "../components/carousel";
// import Clanky from "../components/clanky";

// export async function getStaticProps() {
//   const allActions = await getAllActions();
//   return {
//     props: {
//       allActions: allActions,
//     },
//     revalidate: 10,
//   };
// }

export default function Home({ allActions }) {
  return (
    <>
      <Head>
        <title>Zodpovědný hub</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Zodpovědný hub" />
        <meta
          name="description"
          content="Hub je tu pro vás jako místo, kde se můžete od někoho dalšího dozvědět něco nového. Kde můžete ostatní obohatit o něco, co zase umíte dobře vy. A také kde si můžete vyzkoušet s dětmi hry a materiály od zodpovědné výuky."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zodpovednyhub.cz/" />
        <meta property="og:title" content="Zodpovědný hub" />
        <meta
          property="og:description"
          content="Hub je tu pro vás jako místo, kde se můžete od někoho dalšího dozvědět něco nového. Kde můžete ostatní obohatit o něco, co zase umíte dobře vy. A také kde si můžete vyzkoušet s dětmi hry a materiály od zodpovědné výuky."
        />
        <meta property="og:image" content="/og.jpg" />
      </Head>
      <div className="container max-w-[800px] mx-auto bg-white my-12">
        <div className="mx-4 md:mx-2">
          <h2 className="nadpis text-2xl md:text-5xl font-extrabold text-center">
            Vaginální mapování a léčení jizev
          </h2>
          <p className="p-4 text-xs">Termín konání: 7. 6. 2023 17:30 - 20:00</p>
          <ul className="list-disc list-inside p-4">
            <li>Co je a co není vaginální mapování.</li>
            <li>S čím vám může vaginální mapování pomoci.</li>
            <li>Jak probíhá vaginální mapování.</li>
            <li>Co je a jak vzniká jizva.</li>
            <li>Jak nás jizvy mohou ovlivňovat.</li>
            <li>Jak se o jizvu mohu sama starat.</li>
          </ul>
          <p>
            Inspirujte se přečtením tohoto článku:{" "}
            <a
              href="https://www.dama.cz/clanek/vaginalni-mapovani---revolucni-novinka-v-sexuologii-bylo-by-vhodne-i-pro-vas"
              target="_blank"
              className="underline"
            >
              https://www.dama.cz/clanek/vaginalni-mapovani---revolucni-novinka-v-sexuologii-bylo-by-vhodne-i-pro-vas
            </a>
          </p>
          <p className="py-2">Workshopem vás provede Gabriela Nerudová.</p>
          <p className="py-2">Cena semináře: 350,-</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300 py-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe6IhvqJEN3lJwwbaKx9Fv4H6jnbBLVaaSdSF4eYbrqodciIg/viewform?fbclid=IwAR1B7f8tZwdiyZK5Ktmz2h9wslBiPqdc0QFikS9fkVfNJzJq9QvoCe_ZnsA"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>
          <Image
            alt="spokojená rodina vstupuje do západu slunce, no kýč..."
            src="/vaginalni_mapovani.jpg"
            width={800}
            height={400}
            className="mx-auto"
          />

          {/* {allPosts.nodes.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))} */}
          {/* <Carousel /> */}
          {/* <Clanky /> */}
          {/* <VypisAkci /> */}
          {/* <Actions allActions={allActions} /> */}
        </div>
      </div>
    </>
  );
}
