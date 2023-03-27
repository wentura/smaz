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
            Bylinková setkání
          </h2>
          <p className="p-4 text-xs">
            Cyklus tří setkání: 20.4., 16.5., 15.6. 2023
          </p>
          <p>
            Pojďme se seznámit (nejen) s bylinami, pojďme se setkat.
            <br />
            Nahlédneme do říše rostlin divoce rostoucích i pěstovaných, poznáme
            rostliny léčivé i jedlé. Setkání jsou vhodná pro každého, kdo chce
            byliny zařadit do svého života, jídelníčku i domácí lékárničky.
            <br />
            Cyklus setkání nabízí ucelený pohled do světa bylin pro úplné
            začátečníky, ale i pokročilí bylinkáři si mohou odnést čerstvé
            poznatky, mnohdy vědecky potvrzené účinky rostlin.
            <br />
            Průběh večerů budeme částečně tvořit společně, každá skupina svými
            jedinečnými vhledy určí směr. Každé setkání se bude skládat z
            teoretické přednášky protkané praktickými tipy a ukázkou bylin,
            které si bude možné osahat, očichat, dobře prohlédnout. Poté budeme
            společně tvořit dle tématu workshopu a výsledné dílo si odnesete
            domů (v břiše nebo v jiném obalu).{" "}
          </p>
          <p className="py-2">
            Předávám především své osobní zkušenosti získané desetiletou praxí s
            bylinami.
          </p>
          <p className="py-2">Těším se na vás.</p>
          <p className="py-2">PharmDr. Lucie Vostatková, Ph.D.</p>
          <p className="py-2">
            Cyklus lze absolvovat celý za zvýhodněnou cenu 1300,- nebo pouze
            jednotlivé akce za 490,-.
          </p>
          <h3 className="py-2 pt-8 text-xl lg:text-2xl font-semibold">
            20.4. 2023 Divoké byliny ve stravě
          </h3>
          <ul className="list-disc list-inside">
            <li>Proč a jak zařadit byliny do našeho jídelníčku?</li>
            <li>
              Proč sbírat divoce rostoucí byliny? Jejich přínosy pro naše
              zdraví.
            </li>
            <li>Jak je zařadit do našeho jídelníčku?</li>
            <li>Pravidla sběru ve volné přírodě a na co dát pozor.</li>
          </ul>
          <p className="py-4">Praktický workshop: Zelené smoothie</p>
          <h3 className="py-2 text-xl lg:text-2xl font-semibold pt-8">
            16.5. 2023 Byliny jarního období nejen pro detoxikaci
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Které byliny a v jaké podobě podpoří naše detoxikační orgány?
            </li>
            <li>Jaké byliny na jaře sbírat?</li>
            <li>Jak je využít pro jarní očistu i obohacení jídelníčku?</li>
            <li>Seznam jarních bylin a jejich obsahových látek a účinků.</li>
            <li>Co dalšího je vhodné sbírat na jaře?</li>
          </ul>
          <p className="py-4">
            Praktický workshop: Pesto z divoce rostoucích i pěstovaných bylin
          </p>

          <h3 className="py-2 text-xl lg:text-2xl font-semibold pt-8">
            15.6. 2023 Letní (svatojánské) byliny
          </h3>

          <ul className="list-disc list-inside">
            <li>
              Jak udělat zásobu bylin na zimní období pro léčení svých blízkých?
            </li>
            <li>Jaké byliny sbírat v létě? Jaké části rostlin?</li>
            <li>
              Jak je správně sušit a uchovat pro pozdější využití při léčení?{" "}
            </li>
            <li>
              Seznámení s vybranými bylinami, jejich účinky i obsahovými
              látkami.
            </li>
            <li>Míchání čajových směsí.</li>
          </ul>
          <p className="py-4">Praktický workshop: Bylinková sůl </p>

          <p className="py-8 text-xl lg:text-2xl underline text-center">
            <a href="mailto:info@zodpovednyhub.cz">
              přihlaste se na akci zasláním e-mailu
            </a>
          </p>

          <Image
            alt="bilinkova setkani obrazek"
            src="/bylinkove_setkani.jpg"
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
