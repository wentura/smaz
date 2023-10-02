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
            Setkání žen v kruhu
          </h2>
          <p className="p-4 text-xs">Termín konání: 12. 10. 2023 18:00-20:30</p>
          <p className="py-2">
            Srdečně zvu na setkání v kruhu, jehož kořeny sahají do dávné
            minulosti, ale jehož moudrost a léčivá síla neztrácí na aktuálnosti.
            Kruh postavený na principech poradního kruhu dává pocit bezpečí a v
            bezpečném prostoru je možné se uvolnit, vydechnout (nebo naopak
            nadechnout) a zavnímat sebe sama i ostatní ženy způsobem, který není
            běžně možný. V kruhu je možné být pravdivá i zranitelná. Kruh
            přináší blízkost a sounáležitost. Kruh umožňuje zpomalit a
            naslouchat srdcem. Sdílením jedinečných příběhů našeho života se
            můžeme vzájemně inspirovat a nebýt na to, co nám život přináší,
            sama. V kruhu je každý hlas stejně důležitý, ale stejně tak je možné
            v kruhu mlčet.
          </p>
          <p className="py-2">
            Kruh rozvíjí soucítění a tím kultivuje naše lidství. Usednutím do
            kruhu rozvíjíme komunikační dovednosti, které můžeme zdokonalovat v
            každém našem vztahu. Vede to k většímu porozumění i respektu k
            ostatním lidem a k sobě samé.
          </p>
          <p className="pt-12 text-center text-xl md:text-2xl font-bold">
            Nepřítel je ten, jehož příběh neznám.
          </p>
          <p className="pb-12 text-right text-sm md:text-md font-thin">
            (autor neznámý)
          </p>
          <p className="py-2">Lucie Vostatková</p>
          <p className="py-2 text-sm">
            Jsem žena svého muže, máma 2 divokých kluků Ondřeje a Tobiáše, kteří
            jsou mými velkými učiteli. Dopřávám jim svobodné domácí vzdělávání a
            kvalitní stravu z naší přírodní zahrady s příměsí divokých bylin
            Kokořínska, kde žijeme. Mojí vášní je žití a bytí v souladu s
            přírodou, kruhová komunikace, všímavost a byliny. Jsem facilitátor
            kruhové komunikace.
          </p>
          <p className="py-2 text-sm">
            Kruh má velikou moudrost a jeho léčivá síla mě fascinuje a proměňuje
            život mé rodiny. Pokud bys ráda zjistila, co se v kruhu děje, jaké
            je bytí v něm, láká Tě to, pak se těším na setkání. První kruh bude
            o přítomnosti, o tom, v jakém místě ve svém životě se nacházíš právě
            teď. Další kruhy budou mít svá témata. Každý kruh tvoříme společně.
          </p>

          <p className="py-2">Cena: 350,-</p>

          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdJReDk4O_1tsjayZjt1-DnCRXWSCXrluBKjVRyhEwgpJ-XxQ/viewform?fbclid=IwAR3CFauR3Z939Quschw2qb1OevtTi5N4d4zglXsOpG78x-Yn2DJoGRcJbSc"
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
