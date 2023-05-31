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
            Jak mít dost energie na všechno, co potřebujeme zvládnout
          </h2>
          <p className="p-4 text-xs">Termín konání: 8. 6. 2023 17:30 - 20:00</p>
          <p className="pt-4">Na workshopu se spolu podíváme na to:</p>
          <ul className="list-disc list-inside p-4 pt-0">
            <li>jak poznat, že je toho na nás už moc,</li>
            <li>co nám energii dává a co bere,</li>
            <li>
              proč máme pocit, že bychom měly zvládnout úplně všechno a nejlíp
              samy,
            </li>
            <li>čemu a proč věnovat čas, abychom měly víc energie,</li>
            <li>o co všechno se můžeme ve svém životě opřít.</li>
          </ul>
          <p className="pt-4">Co od společného večera můžete čekat:</p>
          <ul className="list-disc list-inside p-4 pt-0">
            <li>moje praktické tipy a zkušenosti z koučování,</li>
            <li>
              vaše vzájemné sdílení (do té míry, do jaké se v tom budete cítit
              dobře),
            </li>
            <li>
              dvě praktická cvičení – z toho jedno na rychlé zklidnění a
              dočerpání energie,
            </li>
            <li>když bude čas a chuť, tak i krátkou vizualizaci.</li>
          </ul>
          <p>
            Setkání přizpůsobíme tomu, kam nás to společně povede. Tématu se
            podržíme, ale třeba nějaké téma přidáme a něčeho se jen dotkneme.
            <br />
            Udělejte si čas pro sebe, ráda vás na workshopu uvidím.
          </p>
          <p className="py-2">Šárka Mertová</p>
          <p className="py-2">
            Jsem koučka s praxí projektové manažerky.
            <br />
            Věnuji se tématům jako je cíle-vědomost, plánování a efektivita na
            jedné straně a životní rovnováha, energie a spokojenost na straně
            druhé.
          </p>
          <p className="py-2">Cena semináře: 350,-</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300 py-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfoEwcysxxoEW731QpuZtZDwQWxVmpIiunG757sQxYCC0Y8Lg/viewform"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>

          <Image
            alt="spokojená rodina vstupuje do západu slunce, no kýč..."
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539370/zodpovedny_hub/jak_mit_dost_energie_ub7hct.webp"
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
