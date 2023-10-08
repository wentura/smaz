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
            Zdravá snídaně pro silné trávení dle TČM
          </h2>
          <p className="p-4 text-xs">Termín konání: 19.10. 2023 17:30-20:00</p>
          <ul className="list-disc list-inside p-4">
            <p>Dozvíte se:</p>
            <li>proč je snídaně nejdůležitější jídlo dne</li>
            <li>jaké jsou nejčastější chyby při přípravě snídaně</li>
            <li>
              jaké potraviny jsou vhodné na podzim a jak je správně připravit
            </li>
            <li>jak sestavit vyváženou sladkou či slanou snídani</li>
            <li>naučíte se čínský čchi-kung na podporu trávicích orgánů</li>
            <li>odnesete si domů 3 recepty na oblíbené podzimní snídaně</li>
            <li>na místě si jeden recept uvaříme a ochutnáme</li>
          </ul>
          <p className="py-2">
            Pro účastníky květnového workshopu Zdravá snídaně sleva 25%. Obsah
            workshopu nebude totožný s květnovým (čekají vás jiné recepty, jiné
            cvičení, jiná ochutnávka).
          </p>
          <p className="py-2">Těší se na vás Petra Mikesková.</p>

          <p className="py-2">
            Cena: 590 Kč (cena zahrnuje tištěné materiály a ochutnávku)
          </p>

          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfAC4EdcKWb5_7HLgxpuCB9IucmEC3OgS6GYbkLYMtvtmxWQA/viewform"
              className="py-2 px-8 bg-cta rounded-full "
            >
              Přihlásit se na setkání
            </a>
          </p>
          <Image
            alt="zdravá snídaně"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1696275986/zodpovedny_hub/snidane19_10_uvqgus.webp"
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
