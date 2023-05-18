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
            Cykličnost ženy a ženská bylinná napářka{" "}
          </h2>
          <p className="p-4 text-xs">Termín konání: 23.5. 2023 17:30-20:00</p>
          <p>
            Pojďte se potkat v kruhu s ostatními ženami a sama se sebou. Každá z
            nás je jedinečná, přesto máme mnoho společného.
          </p>
          <p className="py-4">
            Menstruační cyklus je to, co máme všechny a je krásné svůj cyklus
            znát a užít si jeho potenciál. Když zjistíte, že každá z jeho 4 fází
            skrývá určité schopnosti a dary ale i výzvy, usnadní vám to život.
          </p>
          <p className="py-4">
            Také ženy, těhotné, kojící, v klimakteriu či po operativním zásahu
            mají své cykly a mohou s nimi pracovat a naučit se rozeznat
            jednotlivé fáze. Stručné shrnutí fází našeho měsíčního cyklu bude
            tento večer především podkladem pro to, abyste věděly, kdy a proč
            můžete použít metodu vaginálního napařování.
          </p>
          <p className="py-4">
            Bylinná napářka je krásný voňavý rituál, který si může téměř každá z
            nás dopřát a opečovat nejen své tělo, ale i smysly a duši. Napářka
            je mocná metoda s léčebným i preventivním potenciálem. Přijďte a
            získáte podrobné informace o praktickém provedení a spoustu teorie
            (pro motivaci a chuť jít do toho).
          </p>
          <p className="py-4">
            Získáte informace o zdravotních přínosech, kontraindikacích, typech
            napařování, vhodných bylinách i o napařování ve specifických
            chvílích v životě žen - těhotenství, porod, šestinedělí.
          </p>
          <p className="py-4">
            Cílem je, abyste odcházely s pocitem, že víte, jak na to a abyste to
            chtěly zkusit. Jako podporu a motivaci k vaší (možná první) napářce
            si každá z vás odnese voňavou čerstvě připravenou směs bylin z čisté
            přírody, od Lucie, z lůna Kokořínska :)
          </p>
          <p className="py-2">Těším se na společné setkání.</p>
          <p className="py-2">Lucie</p>
          <p className="py-2">
            Cena semináře: 490,- (součástí je směs bylin na jednu léčivou
            proceduru)
          </p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScrMJUjSXPfgg4YEunHnzknEZX1d6QCrTkxxLdus2-JcPDpJA/viewform"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>

          <Image
            alt="spokojená rodina vstupuje do západu slunce, no kýč..."
            src="/cyklicnost_zeny.jpg"
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
