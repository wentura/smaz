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
            Henna – umění na těle
          </h2>
          <p className="p-4 text-xs">Termín konání: 4.5. 2023 17:30-20:30</p>
          <p>
            Henna je nejstarší 100% přírodní barvivo na světě, jež už kdysi
            zdobilo krásnou Nefertiti či okouzlující Kleopatru. Pojďte se také
            ozdobit hennou.
          </p>
          <ul className="list-disc list-inside p-4">
            <p>Na workshopu se dozvíte:</p>
            <li>Co je henna a jak funguje na kůži.</li>
            <li>Jak se s hennou pracuje.</li>
            <li>Tipy nákladní tvary a nejčastěji používané prvky.</li>
            <li>Namalujete si na své tělo vlastní motiv.</li>
          </ul>

          <ul className="list-disc list-inside p-4">
            <p>Připravím pro Vás:</p>
            <li>
              kornoutek (10g) čerstvě namíchané henny, s kterou budete malovat a
              zbytek si odnesete domů
            </li>
            <li>gelové pero na předkreslení</li>
            <li>krycí náplast dle potřeby</li>
            <li>materiály na procvičování tahů</li>
            <li>vzory s motivy</li>
          </ul>
          <p className="py-2">
            Před workshopem si kůži řádně umyjte a už ničím nemažte. A po něm
            neplánujte už žádné fyzické aktivity, u kterých se zpotíte. Henna se
            na kůži nechává několik hodin, nejlépe přes noc (až pak se olupuje).
          </p>
          <p className="py-2">
            Workshop je vhodný pro začátečníky, kteří s malováním hennou ještě
            nepřišli do kontaktu, ale chtějí si to vyzkoušet a své dovednosti
            třeba i nadále rozvíjet.{" "}
          </p>
          <p className="py-2">Těším se na vás.</p>
          <p className="py-2">Šárka Klicperová</p>
          <p className="py-2">
            Cena workshopu je 490,- (zahrnuje kornoutek henny a tiskové
            materiály)
          </p>
          <p className="mt-2 mb-16 mx-auto text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScZ-bUIrDN_M5Aa_DmDmoJvRrm6BN8QdS5VNNRNT4cn0d3yIg/viewform"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na workshop
            </a>
          </p>

          <Image
            alt="henna"
            src="/henna.jpg"
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
