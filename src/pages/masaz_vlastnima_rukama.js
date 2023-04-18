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
            Masáž vlastníma rukama
          </h2>
          <p className="p-4 text-xs">Termín konání: 25.5. 2023 18:00-20:00</p>
          <p>
            Staňte se sama/sám sobě masérem a ulevte si od bolesti. Za večer
            toho stihneme opravdu hodně.
          </p>
          <ul className="list-disc list-inside p-4">
            <li>
              Co s našimi svaly a klouby dělá jednotvárná pozice a zatížení?
            </li>
            <li>
              Ukážeme si jednoduché pomůcky, které můžou přinést úlevu od
              bolesti.
            </li>
            <li>Naučíte se automasáž nejpřetěžovanějších míst na těle.</li>
            <li>
              Odejdete uvolnění a bohatší o zkušenosti, jak si sami pomoci.
            </li>
          </ul>
          <p className="py-2">
            Masáže trénujeme v oblečení, sami na sobě, bez oleje. Nepotřebujete
            žádné další speciální pomůcky.
          </p>
          <p className="py-2">Cena semináře: 490,-</p>
          <p className="py-2">Je potřeba se přihlásit předem.</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScJBln0gQQLhoHsi7Ae93FGzlmLvW1DSFGtSy95NpjX9d9HBQ/viewform"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>
          <p className="py-2">Těším se na vás.</p>
          <p className="py-2">Radka Pavlová</p>
          <p className="py-2">
            Mám ráda přírodu a přirozené principy. Odpočívám v lese a na louce,
            s přáteli a zvířaty.
          </p>

          <ul className="list-disc list-inside p-4">
            <p className="py-2">Co Vám mohu nabídnout:</p>
            <li>masáže rekondiční, abyste se mohli lépe hýbat</li>
            <li>masáže relaxační, aby se vám lépe spalo</li>
            <li>masáže pro těhotné, protože potřebují zvláštní péči</li>
            <li>přípravu na porod a péči o miminko pro nastávající rodiče</li>
            <li>pomohu při potížích s kojením</li>
            <li>naučím Vás masírovat své děti</li>
          </ul>

          <Image
            alt="masáž vlastníma rukama"
            src="/masaze_vlastnima_rukama.jpg"
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
