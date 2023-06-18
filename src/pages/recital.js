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
            Recitál Marie Tilšarové
          </h2>
          <p className="p-4 text-xs">
            Termín konání: 29. 6. 2023 17:30 - 20:00
          </p>

          <p className="py-2">
            Co žiju, zpívám.
            <br />
            Co zpívám, žiju.
            <br />V mých písních se odráží má životní cesta.
            <br />
            Každý si mezi nimi najde „tu svou“.
            <br />
            Některé jsou veselé, některé k zamyšlení.
            <br />
            Jiné zase meditační.
            <br />
            Však se zaposlouchej.
          </p>
          <p className="py-2">Těším se na setkání.</p>
          <p className="py-2">Marie Tilšarová</p>
          <p className="py-2">Cena: 300,-</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe2Lndy23fiNcedBSdQ5x5Yo0U2idRGSzYAmuQGZZ-1_FUaRw/viewform?fbclid=IwAR0ffSHABzJEjtBcEwVCDfvhqIHtxhYXNh9LINuOaFKWGkz6djKGW3ckJU8"
              className="py-2 px-8 bg-cta rounded-full "
            >
              Přihlásit se na workshop
            </a>
          </p>

          <Image
            alt="Marie Tilšarová foto"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1687074100/zodpovedny_hub/Recital_yi5vmr.webp"
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
