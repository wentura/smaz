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
            Bezpečně online
          </h2>
          <p className="p-4 text-xs">Termín konání: 6. 6. 2023 17:30 - 19:30</p>
          <p>
            Offline povídání o online hrozbách pro děti i dospělé s trochou
            černého humoru a porcí nadsázky.
            <br />
            Řekneme si trochu o nebezpečenstvích, pobavíme se nad vašimi
            postřehy a snad se zasmějeme &quot;historkám z natáčení&quot;.
          </p>
          <ul className="list-disc list-inside p-4">
            <li>Klikáš na odkazy v mobilu sebejistě?</li>
            <li>Je Ti jedno proč banka chce Tvé číslo karty?</li>
            <li>
              Věříš &quot;když to vypadá jako kachna, tak to bude kachna&quot;?
            </li>
            <li>Psal Ti Nigerijsky princ, že má pro Tebe nějaké peníze?</li>
            <li>Nakupuješ online neohroženě?</li>
            <li>
              Dal jsi telefon dítěti, protože ostatní kamarádi už ho mají?
            </li>
            <li>Má Tvě dítě telefon bez kontroly?</li>
            <li>Tráví na něm čas nejen hraním her? Nevíš?</li>
          </ul>
          <p className="py-2">
            Pokud jsi alespoň na dvě otázky odpověděl kladně, přijď.
          </p>
          <p className="py-2">Cena semináře: 190,-</p>
          <p className="py-2">Je potřeba se přihlásit předem.</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5utmcakjCQnkyis5oMNAYLOO94pPzlLul3qZ-gP12N-Sh8w/viewform?fbclid=IwAR3P5JGwRJrRo4NnGjqlga5wso4nMHWrBNdvXdh3c1_N_RtM6dRLUpAUMA0"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>
          <p className="py-2">Těším se na vás.</p>
          <p className="py-2">Zbyněk Svoboda</p>
          <p className="py-2">
            Jsem webový vývojář na volné noze, ale moje historie není jen tvorba
            webů...
          </p>
          <p className="py-2">
            <a
              href="https://www.zbyneksvoboda.cz"
              target="_blank"
              className="underline"
            >
              www.zbyneksvoboda.cz
            </a>
          </p>
          <p className="py-2">
            Navrhuji a realizuji tvorbu webovových stránek podle Vašich potřeb.
            <br />
            Optimalizuji a modernizuji Vaše stávající weby.
            <br />
            Ladím a zlepšuji e-shopy, aby Vaši zákazníci neodcházeli s prázdnou.
          </p>
          <a href="https://www.zbyneksvoboda.cz" target="_blank">
            <Image
              alt="Zbyněk Svoboda"
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685545267/zodpovedny_hub/zs_dsy9af.webp"
              width={800}
              height={400}
              className="mx-auto py-4"
            />
          </a>
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
