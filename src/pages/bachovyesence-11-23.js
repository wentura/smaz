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
            Bachovy esence - lékárnička (nejen) pro psychiku
          </h2>
          <p className="p-4 text-xs">
            Termín konání: 21. 11. 2023 (17:30 – 19:30)
          </p>
          <p className="py-2">Co jsou Bachovy esence a jak nám mohou pomoci?</p>
          <p className="py-2">
            Přijď se seznámit s jednoduchou ale velmi účinnou přírodní metodou
            pro harmonizaci našich emocí a pocitů, která již 80 let pomáhá lidem
            po celém světě! Na závěr si můžeš zkusit lahvičku esencí namíchat
          </p>
          <p className="py-2">
            Přijďte se seznámit s jednoduchou přírodní metodou pro psychickou
            pohodu - Bachovými esencemi!
          </p>
          <p className="py-2">
            Představím Vám 38 esencí z volně rostoucích rostlin i stromů, které
            dokážou harmonizovat naše emoce i Krizovou esenci pro první pomoc v
            náročných situacích.
          </p>
          <p className="py-2">
            Prezentaci doprovodí praktické příklady a možnost namíchat si svou
            lahvičku Bachovek.
          </p>
          <p className="py-2">
            Bachovy esence objevil v 30. letech 20. století britský lékař Edward
            Bach. Filosofie Dr. Bacha vycházela z myšlenky, že nemoc je
            důsledkem nerovnováhy v člověku samotném a že důležité je léčit
            příčinu nemoci, tj. duševní potíže pacienta. Rozhodl se poznávat
            souvislosti mezi náladou člověka a jeho nemocí, mezi disharmonií v
            duši a projevem této disharmonie na těle v podobě nemoci. Po mnoha
            letech výzkumů, kdy usiloval o jednoduchý systém samoléčby, přišel s
            uceleným přehledem 38 přírodních esencí z volně rostoucích rostlin i
            stromů. Každá z nich dokáže harmonizovat určitý druh negativních
            emocí, či stavů způsobujících celkovou nerovnováhu energetického
            systému člověka.
          </p>
          <p className="py-2">
            Přírodní způsob léčení pomocí Bachových esencí se rychle rozšířil po
            celém světě. V naší uspěchané době, kdy na trhu chybí léky nebo mají
            řadu negativních vedlejších účinků, ordinace psychologů i psychiatrů
            praskají ve švech, stává se odkaz Dr. Bacha velmi aktuálním.
            Bachovky jsou účinnou a zároveň jednoduchou alternativou pro řešení
            našich psychických potažmo i fyzických problémů. Přesto však nejsou
            pro každého. Pokud hledáte červenou pilulku, která rychle a
            bezbolestně vyřeší všechna Vaše trápení, pravděpodobně ani tady
            neuspějete. Bachovy esence otevírají dveře do naší duše, odkrývají
            jiné úhly pohledu na problém, který právě řešíme a jsou nám průvodci
            na cestě ke změně nefunkčních návyků či vzorců. Předpokladem pro
            účinnost je tedy naše touha situaci vyřešit, něco změnit, vrátit se
            zpět do rovnováhy. Výhodou je, že Bachovky mohou ovlivnit naši
            situaci pouze pozitivně, nemají žádné vedlejší účinky a mohou je
            užívat bez obav i děti, těhotné ženy a miminka, dokonce i domácí
            zvířata. Jejich užívání nijak neovlivňuje účinnost chemických léků,
            je to léčba založená na energetickém působení rostlin.
          </p>
          <p className="py-2">
            Na workshopu Vás seznámím se základními pravidly užívání Bachových
            esencí a představím Vám jejich rozdělení do skupin dle symptomů, na
            které působí. U vybraných esencí projdeme i praktické příklady
            použití, abyste pochopili jejich energetický potenciál. Nejedná se
            však o kurz (esence si stihneme pouze jednoduše představit)! Dám Vám
            tipy pro další studium, pokud Vás téma zaujme. Mohu odpovědět i na
            jednoduché dotazy k namíchání esencí (pro složitější bude možné
            dohodnout konzultaci). Kdo bude chtít, může si v závěru zkusit
            namíchat svou vlastní lahvičku.
          </p>
          <p className="py-2">
            Cena workshopu je 390 Kč (zahrnuje lahvičku esencí)
          </p>
          <p className="py-2">Kristýna Frelichová</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScNaqyh7xPTJOgeTC6ejMUaPGYFOzBf1D2wJo0QpInwM7e3QQ/viewform"
              className="py-2 px-8 bg-cta rounded-full "
            >
              Přihlásit se...
            </a>
          </p>
          <Image
            alt="zdravá snídaně"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1698504602/zodpovedny_hub/bachesence_btrd45.webp"
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
