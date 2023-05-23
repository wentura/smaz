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
            Cesta k opravdové intimitě
          </h2>
          <p className="p-4 text-xs">
            Termín konání: 20. 6. 2023 17:30 - 20:00
          </p>
          {/* <p className="pt-4">Na workshopu se spolu podíváme na to:</p> */}
          <ul className="list-disc list-inside p-4 pt-0">
            <li>Co všechno ovlivňuje sexualitu / intimitu</li>
            <li>Co všechno vstupuje do prožívání sexuality</li>
            <li>Co potřebuje duše a co tělo, aby byla sexualita lepší</li>
            <li>Jaký má na sexualitě podíl vztah k sobě i k druhému</li>
            <li>Co si zvědomit, aby se sexualita vylepšila</li>
            <li>Jak se přiblížit své vysněné sexualitě</li>
          </ul>
          <p className="py-2">
            Lze prožívat sexualitu tak, že je člověk vystřelen do vesmíru a tam
            si setrvá dobu, jaká mu vyhovuje? Tak, že může mít orgasmů, kolik
            jen chce a přitom být nabitý energií? Jde. Pokud to tak máte rovnou,
            gratuluji Vám. Já jsem se k tomu musela léty propracovat. A chci vám
            říct, s čím vším to souvisí a jak na to.
          </p>
          <p className="py-2">
            Sexuální prožívání nezávisí jenom na šikovnosti partnera. Naopak, je
            to ta méně důležitá část. Je spousta věcí, které můžeme udělat sami,
            abychom své prožívání vylepšili, pokud nám stávající stav připadá
            neuspokojivý.
          </p>
          <p className="py-2">
            Sexuální energie není nic špatného nebo zapovězeného. Sexuální
            energie je ta nejmocnější energie na světě. Je tvořivá tak moc, že
            dokáže vyrobit nového člověka. Když je v pořádku sexuální energie,
            je život barevnější, tvořivější, nestagnuje, plyne.
          </p>
          <p className="py-2">
            Přijďte zjistit tipy na vylepšení sexuálního života a prožívání
            sexu. Zjistila jsem, že věci, které zdánlivě se sexem nesouvisí, se
            do sexuality stejně přenáší. Ať už se dějí v posteli nebo úplně mimo
            ni. A že každá drobnost, kterou změním ve svém životě může mít svůj
            odraz právě i v prožívání vlastní sexuality.
          </p>
          <p className="py-2">
            Byť je seminář o sexu, nebudeme žádným způsobem používat nahotu.
          </p>
          <p className="py-2">
            Jedná se o přehledový seminář, na který bude volně navazovat řada
            workshopů, kde budeme pracovat s jednotlivými tématy.
          </p>
          <p className="py-2">Těším se na Vás.</p>
          <p className="py-2">Petra Viola Janoušková</p>

          <p className="py-2">
            Od dětství mě provází zájem o lidské tělo a od první mateřské (to už
            je 15 let) i o lidskou duši. Zabývám se skupinově vztahy (vztahy s
            dětmi, výchovou), ale i právě vztahem k sobě, sexualitě, partnerské
            komunikaci, apod. Individuálně se zabývám konzultacemi na tato
            témata a prací s tělem prostřednictvím terapeutických masáží,
            mapování, a dalších praktik. Píšu texty a knížky ke všemu tomu, co
            mě zajímá.
          </p>
          <p className="py-2">Cena semináře: 390,-</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300 py-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe0BlzAOW9SVuDMekyl7cd-7UnUY5wjqLaDsXEtkD8nmZVkMg/viewform?fbclid=IwAR29C81dbBNXnm6MHAsOx_N_bux20ouQdpz6NueZ9aeG1xUYePq21YlRxDk"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>

          <Image
            alt="spokojená rodina vstupuje do západu slunce, no kýč..."
            src="/cesta_k_opravdove_intimite.jpg"
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
