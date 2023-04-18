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
            Zdravá snídaně pro silné trávení
          </h2>
          <p className="p-4 text-xs">Termín konání: 18.5. 2023 17:30-20:00</p>
          <p className="py-2">
            Zveme Vás na pravidelné setkávání s tradiční čínskou medicínou
            (TČM).
            <br />
            Tentokrát na téma “zdravá snídaně pro silné trávení”.
          </p>
          <ul className="list-disc list-inside p-4">
            <p>Z pohledu TČM je silné trávení základem zdraví.</p>
            <li>Dozvíte se, jak své trávení posílit stravou.</li>
            <li>
              Ukážu vám základní pravidla pro zdravou snídani, která vám pomohou
              při nadváze, nadýmání či závislosti na sladkém.
            </li>
            <li>Naučím vás jak sestavit vyvážený sladký a slaný pokrm.</li>
            <li>Jaké jsou nejčastější chyby při přípavě a konzumaci obilí.</li>
            <li>Odnesete si tři nové recepty na oblíbené snídaně.</li>
          </ul>
          <p className="py-2">
            Praktický workshop: čínské cvičení pro dobré trávení + ukázka vaření
            s ochutnávkou
          </p>
          <p className="py-2">Těším se, že vám do toho světa otevřu dveře.</p>
          <p className="py-2">Petra Mikesková</p>
          <p className="py-2 text-sm">
            O lektorovi:
            <br />
            Mé první setkání s čínským pentagramem a vztahy mezi vnitřními
            orgány bylo před necelými 20 lety, kdy jsem se poprvé seznámila s
            bylinkami firmy Energy a s reflexní terapií manželů Julia Pataky a
            Beáty Patakyové. Nicméně můj život běžel po jiné koleji a čas k
            hlubšímu studiu TČM přišel, až když se mi narodil druhý syn. Od té
            doby se věnuji především čínské nauce o stravování a vaření v kruhu.
            <br />
            Od roku 2021 studuji celostní léčbu pomocí TČM, jejíž sílu jsem si
            mohla sama na sobě prověřit při obtížné nemoci. TČM vděčím za návrat
            ke zdraví.
            <br />
            Ve volném čase ráda cvičím qigong a zkouším nové recepty. Fascinuje
            mě svět souvislostí, které TČM spatřuje všude kolem nás i v nás.
          </p>

          <p className="py-2">
            Cena: 490,- (v ceně zahrnuto 100,- za suroviny a tisk)
          </p>

          <p className="mt-2 mb-16 mx-auto text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdSGvCqT3yP514C0d5t_6ijqGQg15KwfbXlxWe5wiA6T7swow/viewform"
              className="py-2 px-8 bg-cta rounded-full"
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
