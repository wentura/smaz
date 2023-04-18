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
            Jarmak dětí svobodné školy Safira
          </h2>
          <p className="p-4 text-xs">Termín konání: 13.5. 2023 8:00-12:00</p>
          <p className="py-2">
            Zajímá Vás, jak probíhá svobodné vzdělávání v praxi? Přijďte si o
            tom popovídat.
          </p>
          <p className="py-2">
            Děti z přírodní svobodné školy Safira si v rámci “školní rady”, že
            zorganizují dobročinný jarmark. Vyrobily spoustu užitečných věcí,
            které právě Vám na svém jarmarku nabídnou.
          </p>
          <p className="py-2">
            Účastnit se budou také zakladatelé školy a rodiče. Máte-li zájem o
            svobodné vzdělávání, určitě se zastavte a proberte s nimi Vaše přání
            či obavy.
          </p>
          <ul className="list-disc list-inside p-4">
            <li>Přijďte si popovídat s dětmi ze svobodné školy.</li>
            <li>Přijďte vyzpovídat jejich rodiče, jaké to je. </li>
            <li>Přijďte se zeptat průvodců, jak se jim tam pracuje.</li>
            <li>Přijďte nakoupit výrobky s přesahem :)</li>
          </ul>
          <p className="py-2">Budeme se na Vás těšit.</p>
          <p className="py-2">všichni z přírodní svobodné školy Safira</p>

          <Image
            alt="fotka všech ze svobodné školy Safira"
            src="/jarmark_svobodne_skoly.jpg"
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
