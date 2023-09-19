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
            Malování hennou
          </h2>
          <p className="p-4 text-xs">
            Termín konání: 5. 10. 2023 17:30 - 20:00
          </p>
          {/* <p className="pt-4">Na workshopu se spolu podíváme na to:</p> */}
          <p className="py-2">
            Chystá se pro vás další z již takřka pravidelných mělnických setkání
            s henna tvořením. Přijďte pobýt v ženské energii, odpočinout si,
            zpomalit s hennou.
          </p>
          <p className="py-2">
            Henna je nejstarší 100% přírodní barvivo na světě, jež už kdysi
            zdobilo krásnou Nefertiti či okouzlující Kleopatru. Pojďte se také
            ozdobit hennou.
          </p>
          <p className="py-2">
            Jelikož vnímám jako důležitý i čas strávený se svými dětmi nad
            společnými tématy a ve společné tvorbě, nabízím speciální slevu pro
            matky a jejich dcery. Pokud máte chuť na henna malování přijít s
            dcerou, vezměte ji a získáte výhodnou cenu pro vás obě.
          </p>
          <ul className="list-disc list-inside p-4 pt-0">
            Na workshopu:
            <li>si namalujete na své tělo vlastní motiv.</li>
            <li>se setkáte s úžasnými ženami.</li>
            <li>
              pokud přijdou nové tváře, zopakujeme si v krátkosti, co je henna,
              jak funguje na kůži, jak se s hennou pracuje a jaké jsou základní
              tvary a symboly.
            </li>
          </ul>
          <ul className="list-disc list-inside p-4 pt-0">
            Jako vždy pro vás připravím:
            <li>
              kornoutek mnou čerstvě namíchané henna pasty, kterým budete
              malovat na workshopu, a který vám poté zůstane i pro domácí tvorbu
            </li>
            <li>krycí náplast dle potřeby</li>
            <li>materiály na procvičování tahů</li>
            <li>vzory s motivy</li>
          </ul>

          <p className="py-2">
            Cena workshopu: 390,- (v ceně je kornoutek čerstvě namíchané henna
            pasty v hodnotě 150,-)
          </p>
          <p className="py-2">
            Zvýhodněná cena workshopu pro matku a dceru: 690,- (v ceně jsou dva
            kornoutky čerstvě namíchané henna pasty v hodnotě 300,-)
          </p>
          <p className="mt-2 mb-8 mx-auto text-center hover:scale-110 ease-in duration-300 py-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc1h5IAgc9otVCjhgmTCKG3yb9E_2iq1nxR1DrKpYa_D0FStg/viewform?fbclid=IwAR1fLswfG8IOGvmSRK0YN11jvsBnsL-JYIuHAlbmZkXN0cAfj0t3xRcU8YE"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>
          <p className="pb-2">Těším se na vás: Šárka Klicperová Živná.</p>

          <Image
            alt="spokojená rodina vstupuje do západu slunce, no kýč..."
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1695153313/zodpovedny_hub/henna5_10_rvlvhc.webp"
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
