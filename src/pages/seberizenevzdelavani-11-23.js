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
            Sebeřízené vzdělávání v praxi
          </h2>
          <p className="p-4 text-xs">Termín konání: 7. 11. 2023 16:30-21:00</p>
          <p className="py-2">
            S radostí vás zveme na setkání zaměřené na téma sebeřízeného
            vzdělávání, které je určeno pro všechny, jenž se zajímají o
            alternativní přístupy k vzdělávání.
          </p>
          <p className="py-2">
            Hlavní programem je přímý přenos Fóra sebeřízeného vzdělávání, což
            je debata s hosty, které se v této oblasti angažují či dlouhodobě
            pohybují.
          </p>
          <p className="py-2">
            <a
              className="underline underline-offset-2 text-blue-600"
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fseberizenevzdelavani.cz%2Fforum%2F%3Ffbclid%3DIwAR20gvy1w_xrSAnLKklzlmT-qzsK5oiD6biPGNbUOvLwW9fp8ZzvN5PJ9MA&h=AT2tm67D-BCR5cSE0tn_BhFdMLe39fP5VQv2wukbjtADnuMsRqrpxTWoXR9zhEnVS2h-h2OSgOdw_8VpiMw6z5SLQfBsWx0Zac6uFL58l1eVSbNJD64kDOwzYwsLAjui6hEmW5Adx8OBmQllVURmcQU&__tn__=q&c[0]=AT2TVTJUt6Lg_eYWuHoUHE14kRjLYVzyY8ktO09mBwBVqK_RgpnUiLPEFV-or1KmNZf1BIeuZY3naV7OJjJYs7OMYT2jWLpxIl0YAOObRyPVwDJOANkbdynhC6CV-8bVAoY"
              target="_blank"
            >
              Více info o účinkujících.
            </a>
          </p>
          <p className="py-2">
            Souběžně poběží diskuse, kde se budeme věnovat hlubším aspektům
            sebeřízeného vzdělávání - jaký má význam, jaké jsou jeho výhody a
            jak může napomoci rozvíjet kreativitu, samostatnost a zvídavost
            dětí.
          </p>
          <p className="py-2">
            Navíc budete mít jedinečnou příležitost setkat se se zástupci
            svobodné školy Safira, s rodiči, kteří své děti vzdělávají tímto
            způsobem, a také s jejich dětmi.
          </p>
          <p className="py-2">
            Beseda bude prostorem pro otevřenou debatu, inspiraci a sdílení
            zkušeností. Je určena nejen pro rodiče a pedagogy, ale také pro
            všechny, kteří se zajímají o inovace ve vzdělání.
          </p>
          <p className="py-2">
            Je součástí celorepublikového Týdenního Festivalu, jenž má za cíl
            šířit osvětu o vzdělávání, podpořit setkávání a spolupráci.
          </p>
          <p className="py-2">
            <a
              className="underline underline-offset-2 text-blue-600"
              href="https://l.facebook.com/l.php?u=https%3A%2F%2Fseberizenevzdelavani.cz%2Ffestival%2F%3Ffbclid%3DIwAR09FMHT2I99Sav6sgc0QEY4wFQzznNvCC62TIaHXC2l9qxwXJA6cRu1GPE&h=AT0lO-Q-V2w2XCk-jxmWCrtvoKRooptwyqtgjZELR6odn4njEm4kXX8rbkESj4hSvRHfsmc9lupEGUQVO1qxNJwPa9BeFwfmYYEwI9GsXXeWagRFSqTDT9qyrKwEmeKx9kh8k-wHS_3NHN43FLMIFiE&__tn__=q&c[0]=AT2TVTJUt6Lg_eYWuHoUHE14kRjLYVzyY8ktO09mBwBVqK_RgpnUiLPEFV-or1KmNZf1BIeuZY3naV7OJjJYs7OMYT2jWLpxIl0YAOObRyPVwDJOANkbdynhC6CV-8bVAoY"
              target="_blank"
            >
              Více o festivalu.
            </a>
          </p>
          <p className="py-2">
            Festival tvoříme společně jako oslavu svobody učení. Generace se
            propojují na cestě k budoucnosti.
          </p>
          <p className="py-2">Zástupci svobodné školy Safira</p>
          <p className="py-2">Gabriela Lipinová</p>
          <Image
            alt="zdravá snídaně"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1698504602/zodpovedny_hub/seberizenevzdelavani_ult5dr.webp"
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
