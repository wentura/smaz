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
            Energetický bylinkový šperk - tvoření a meditace
          </h2>
          <p className="p-4 text-xs">
            Termín konání: 19. 6. 2023 17:30 - 19:30
          </p>
          {/* <p className="pt-4">Na workshopu se spolu podíváme na to:</p> */}
          <ul className="list-disc list-inside p-4 pt-0">
            <li>
              Pojď si užít společné tvoření. Načerpat novou energii a inspiraci
              z přírody!
            </li>
            <li>
              Předám Ti své zkušenosti s energetickými dary přírody a poselstvím
              bylin pro pohodu a stabilitu v našich životech.
            </li>
            <li>
              Vytvoříš si osobní šperk či amulet z bylin a minerálů, které Tě
              osloví.
            </li>
            <li>Na závěr zharmonizujeme mysl i tělo při bylinkové meditaci.</li>
          </ul>
          <p className="py-2">
            Běžně používáme bylinky pro jejich léčivé vlastnosti – uděláme si
            čaj, použijeme tinkturu či macerát a uleví se nám na těle. Co když
            ale bylinky, rostliny, stromy a celá příroda umí uzdravit i naši
            duši? I my jsme tvořeni vesmírnou energií a vše okolo nás ovlivňuje.
          </p>
          <p className="py-2">
            Příroda nám nabízí neustálou podporu, útěchu i studnici pozitivní
            energie, kterou potřebujeme nejen v době krizí, ale pro šťastný a
            svobodný život každý den.
          </p>
          <p className="py-2">
            Věděli jste, že je vědecky dokázáno, že pobyt v lese snižuje hladiny
            stresových hormonů, působí proti depresi, posiluje imunitní systém
            či zvyšuje kvalitu spánku?
          </p>
          <p className="py-2">
            Co zažijete při společném bylinkovém tvoření a meditaci?
          </p>
          <p className="py-2">
            Setkáte se s bylinkami nejen z hlediska léčivých účinků, ale dozvíte
            se také o jejich energetickém využití a vlastnostech. Získáte další
            tipy, jak načerpat energii a harmonii pro svůj každodenní život z
            přírodních zdrojů, které jsou všude kolem nás a zcela zdarma!
            Dotkneme se např. moudrosti stromů, lesní lázně i jednoduché, ale o
            to účinnější metody harmonizace emocí pomocí Bachových květových
            esencí.
          </p>
          <p className="py-2">
            Poté probudíme naši kreativitu při tvoření osobního bylinkového
            šperku. K dispozici Vám budou skleněné baňky i amulety, do kterých
            dle Vašeho naladění i získaných informací poskládáte jedinečnou
            kombinaci bylin a minerálů k Vaší energetické podpoře. Pracovat
            budeme s pestrou paletou barev různých druhů bylin i minerálů vše
            přírodního původu. Většinu rostlinek jsem nasbírala na Kokořínsku.
          </p>
          <p className="py-2">
            Na závěr už se jen ponoříme do meditace (vizualizace) spojení s
            Matkou Zemí a setkání se „svou“ bylinou. Věřím, že budete odcházet
            svěží, radostní a plní energie!
          </p>
          <p className="py-2">Těším se na Vás.</p>
          <p className="py-2"> Kristýna Frelichová</p>
          <p className="py-2">
            Cena semináře: 490,- (včetně materiálu na tvoření)
          </p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300 py-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSerm_r1dUBct3ZyHm0rwq7DzcRPWPjwhTdLdQLQC0k-eFB3Ig/viewform?fbclid=IwAR1oEyQ6hBSyG2WGrrFIwngYKE9qLgEev3qW1jeB1psiMaWBHDW7fW0fS20"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>

          <Image
            alt="spokojená rodina vstupuje do západu slunce, no kýč..."
            src="/energeticky_bylinkovy_sperk.jpg"
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
