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
            Kostivalový workshop{" "}
          </h2>
          <p className="p-4 text-xs">Termín konání: 9. 11. 2023 17:30-19:30</p>
          <p className="py-2">
            Bylinky a jejich užívání provází lidstvo celé věky. Jejich účinné
            látky byly v minulosti většinou to jediné, co lidé mohli na své
            neduhy použít.
          </p>
          <p className="py-2">
            V posledních sto letech jsme bylinky, jak nepotřebné svršky,
            odkládali a nechávali je ležet v zapomnění. Dnes iluze
            technologického léčení něčeho tak přírodního, jako je lidská
            schránka, již trochu opadává a možnosti fytoterapie (jak se teď
            užívání bylin říká ) jsou opět brány v potaz.
          </p>
          <p className="py-2">
            Jestli jste naladěni na podobné vlně návratu k přirozenému žití a
            přirozenému léčení sebe sama, bude se vám naše setkání líbit.
          </p>
          <p className="py-2">
            Budeme se věnovat jednomu ze způsobů využití bylinek pro naše blaho
            a sice mastem a jejich přípravě.
          </p>
          <p className="py-2">
            Protože je hluboký podzim a tedy ideální čas na sklizeň kořenů,
            připravila jsem si kostivalové téma. A stejně jako je kostival
            impozantní rostlina, podobně silné jsou i jeho účinky na náš
            pohybový aparát.
          </p>
          <p className="py-2">
            Nenechte si ujít příležitost uvařit si vlastní kouzelný „lektvar“ a
            odnést si domů skvělého pomocníka v podobě kostivalové masti!
          </p>
          <p className="py-2">Budu se na vás a naše setkání moc těšit!</p>
          <p className="py-2">Helena Korecká</p>
          <ul className="list-disc list-inside p-4">
            <li>
              Dozvíte se základní informace o bylinných mastech, jejich přípravě
              a využití
            </li>
            <li>Seznámím vás s „panem“ Kostivalem a jeho schopnostmi</li>
            <li>Prakticky si vyzkoušíte přípravu kostivalové masti</li>
            <li>
              Odnesete si domů nejen nabyté znalosti, ale i kelímek vlastní
              kostivalové masti
            </li>
          </ul>

          <p className="py-2">Cena: 490,-</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf2_j2VBwXUhDNOPxI7_Ve2o_tbgsJWu9mFgGlU2yh3m2QlVQ/viewform?fbclid=IwAR0lba0OWlUheUOpF52Lgy-EXZSjQ-FGY0lL1acVcKM0RAiBfCM0ZYyAfbk"
              className="py-2 px-8 bg-cta rounded-full "
            >
              Přihlásit se...
            </a>
          </p>
          <Image
            alt="zdravá snídaně"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1698504603/zodpovedny_hub/kostivalovyworkshop_ivgwqh.webp"
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
