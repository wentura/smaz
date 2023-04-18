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
            Jak na Montessori doma?
          </h2>
          <p className="p-4 text-xs">Termín konání: 15.5. 2023 17:30-19:30</p>
          <p>
            Připadá Vám, že je složité montessori principy využívat doma, ale
            přesto Vás to táhne? Přijďte a uvidíte, že to tak není.
          </p>
          <ul className="list-disc list-inside p-4">
            <li>
              Jaké jsou konkrétní tipy a triky, jak můžete Montessori principy
              aplikovat v domácím prostředí?
            </li>
            <li>
              Jak podpořit rozvoj dítěte pomocí Montessori metody v oblasti
              motoriky a kognitivních schopností?
            </li>
            <li>V čem Vám Montessori pomůže v každodenním životě s dětmi?</li>
          </ul>

          <ul className="list-disc list-inside p-4">
            <p className="py-2">
              <a
                href="https://svoucestou.info/"
                target="_blank"
                className="underline"
              >
                Montessori škola a školka Svou cestou
              </a>
            </p>
            <li>
              Pomáháme dětem rozvíjet dětskou sebedůvěru a vnitřní touhu po
              poznání.
            </li>
            <li>
              Spoluvytváříme prostor respektující dětské potřeby, prostor, který
              umožní najít odpovědi na jejich otázky a který je otevřený
              jednotlivým osobnostem.
            </li>
            <li>
              Každý jdeme Svou cestou a my, jako průvodci, stojíme dětem oporou
              na té jejich.
            </li>
          </ul>
          <p className="py-2">Těšíme se na vás.</p>
          <p className="py-2">Běla Šestáková a Klára Dědková</p>
          <p className="py-2">Cena semináře: 190,-</p>
          <p className="py-2">Je potřeba se přihlásit předem.</p>
          <p className="mt-2 mb-16 mx-auto text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdFQhazBuv4GzAUluCkOAm_Kc9Qi91mcCZwMNj2pw0D6TlIpQ/viewform"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>

          <Image
            alt="montessori doma"
            src="/montessori_doma.jpg"
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
