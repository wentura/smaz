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
            Networking: Můj projekt
          </h2>
          <p className="p-4 text-xs">Termín konání: 31. 5. 2023 17:30-19:30</p>
          <ul className="list-disc list-inside p-4">
            <li>Máte svůj projekt v hlavě a váháte, jak a kde začít?</li>
            <li>Máte svůj projekt na papíře a sbíráte odvahu vykročit?</li>
            <li>Máte svůj projekt rozjetý a chcete, aby více ožil?</li>
          </ul>
          <p>Jste tu správně.</p>
          <p className="py-2">
            Podnikatelské networkingové akce jsou skvělým způsobem, jak navázat
            kontakty a vybudovat vztahy, které vám mohou dlouhodobě pomoci.
            Ostatní účastníci mají své zkušenosti, které mohou doplnit mozaiku
            toho, co hledáte nebo Vám chybí.
          </p>
          <p className="py-2">
            Networking Vám dá možnost spojit se s podobně smýšlejícími lidmi,
            hledat řešení a posunout Vaše podnikání o kus dál.
          </p>
          <p className="py-2">PODKLADY PRO SETKÁNÍ OBDRŽÍTE 2 DNY PŘEDEM</p>
          <p className="py-2">Příspěvek na setkání: 300 Kč</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300 py-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScFPFH4cyOLf1q4SYIQxHDQVr9thpHUjT_x2oAAdbpcySOAEQ/viewform"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>
          <p className="py-4">Společný program moderuje Kateřina Hrabíková</p>
          <p className="py-2">Jak to bude probíhat?</p>
          <ul className="list-disc list-inside p-4">
            <li>
              Každý bude mít časový prostor pro představení &quot;toho
              svého&quot; + co řeší.
            </li>
            <li>
              Následuje společný časově ohraničený brainstorming na dotyčného
              téma.
            </li>
            <li>
              Po skončení všech je prostor pro společný neformální networking a
              výměnu kontaktů.
            </li>
          </ul>
          <Image
            alt="spokojená rodina vstupuje do západu slunce, no kýč..."
            src="/networking.jpg"
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
