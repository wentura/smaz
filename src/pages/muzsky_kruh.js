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
            Setkání v mužském kruhu
          </h2>
          <p className="p-4 text-xs">Termín konání: 17. 10. 2023 18:00-20:30</p>
          <p className="py-2">
            Zvu tě na setkání v kruhu, jehož kořeny sahají do dávné minulosti,
            ale jeho moudrost a léčivá síla neztrácí na aktuálnosti. Kruh je
            bezpečné místo, kde je možné se pravdivě setkat se sebou samým i s
            ostatními způsobem, který není běžně možný. V kruhu lze odložit
            všechny masky a být sám sebou. Kruh přináší blízkost a
            sounáležitost. Kruh umožnuje zpomalit a vydechnout/nadechnout se,
            vnímat své tělo a pocity, naslouchat srdcem.
          </p>
          <p className="py-2">
            Sdílením jedinečných příběhů našeho života se můžeme vzájemně
            inspirovat a nebýt na to, co nám život přináší sami. V kruhu je
            každý hlas stejně důležitý, ale stejně tak je možné v kruhu mlčet.
            Kruh rozvíjí soucítění a tím kultivuje naše lidství. Usednutím do
            kruhu rozvíjíme komunikační dovednosti, které si můžeme odnést a
            zdokonalovat v každém našem vztahu.
          </p>
          <p className="py-2">
            Vede to k většímu porozumění i respektu k ostatním lidem a k sobě
            samému.
          </p>
          <p className="pt-12 text-center text-xl md:text-2xl font-bold">
            Nepřítel je ten, jehož příběh neznám.
          </p>
          <p className="pb-12 text-right text-sm md:text-md font-thin">
            (autor neznámý)
          </p>
          <p className="py-2">Štěpán Vostatek</p>
          <p className="py-2 text-sm">
            Kdo jsem?
            <br />
            Lidská bytost, muž, manžel, otec, syn a také ten, kdo miluje život,
            matku zem, vodu, stromy a příběhy, kterým rád naslouchám a sdílím.
            Rád se setkávám v kruhu, kde jsou si všichni rovni. Mám rád svou
            práci (péče o stromy), která mi dává možnost trávit čas v korunách
            stromů a nahlížet z jiné perspektivy než je obvyklé. Jsem
            facilitátor kruhové komunikace.
          </p>
          <p className="py-2 text-sm">
            Jsem přírodní zahradník s dvacetiletou praxí a evropský
            certifikovaný arborista (ETW). To, co bych s Tebou rád sdílel je můj
            hluboký vztah ke kruhu, který umožňuje setkat se v bezpečí,
            rovnosti, pravdivosti a zranitelnosti. V kruhu jsi viděn, slyšen a
            respektován takový, jaký jsi.
            <br />
            <br />
            Pokud Tě pozvání zaujalo, moc rád se s Tebou v kruhu setkám.
          </p>

          <p className="py-2">Cena: 350,-</p>

          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeOXx5LOiuKcPCg7f62CwU933cEZ0RcLIOU5uT6jN0Sg2gRqA/viewform"
              className="py-2 px-8 bg-cta rounded-full "
            >
              Přihlásit se na setkání
            </a>
          </p>
          <Image
            alt="zdravá snídaně"
            src="/zdrava_snidane_pro_silne_traveni.jpg"
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
