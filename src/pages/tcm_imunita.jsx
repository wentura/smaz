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
            Posilujeme imunitu <br />
            stravou, bylinami a cvičením
          </h2>
          <p className="p-4 text-xs">Termín konání: 21.9. 17:30 - 20:00</p>
          {/* <p className="pt-4">Na workshopu se spolu podíváme na to:</p> */}
          <ul className="list-disc list-inside p-4 pt-0">
            Dozvíte se:
            <li>co je weiqi a jak souvisí s imunitou a tělesnými orgány</li>
            <li>jak upravit na podzim jídelníček ku prospěchu našemu zdraví</li>
            <li>jaké bylinné směsi podporují obrannyschopnost</li>
            <li>
              osvojíte si první pomoc při prochladnutí (bylinky a pomocné
              techniky z TČM)
            </li>
            <li>naučíte se čínské cvičení čchi-kung pro silnou imunitu</li>
            <li>
              na místě si vyrobíme pětielementové přírodní antibiotikum, které
              si odnesete domů
            </li>
          </ul>
          <p className="py-2">
            Cena: 550Kč včetně tištěných materiálů a vlastního výrobku
          </p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300 py-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScJBU1uUlqnUAXtEarv_t6cPufrInwgQ56APaCqFiHyz6kVFg/viewform?fbclid=IwAR3hRdJbxr1T3b7kAG6w4hwWgWB2Vlts88Stn57c0yhYzmuhvGlyzJRr1v4"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>

          <Image
            alt="spokojená rodina vstupuje do západu slunce, no kýč..."
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1695153313/zodpovedny_hub/imunita21_9_txpeqy.webp"
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
