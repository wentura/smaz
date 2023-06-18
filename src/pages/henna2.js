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
          <p className="p-4 text-xs">
            Termín konání: 22. 6. 2023 17:30 - 20:00
          </p>
          <ul className="list-disc list-inside p-4">
            <li>Víte, jaký význam v sobě nese symbol trojúhelníku?</li>
            <li>Proč jsou některé hvězdy pěticípé a jiné šesticípé?</li>
            <li>Co v sobě skrývá květ lotosu a co květ růže?</li>
            <li>Co symbolizuje ještěrka a co páv?</li>
          </ul>

          <p className="py-2">
            Pojďte se mnou poodhalit význam některých symbolů linoucích se
            napříč kulturami nejen v henna umění.
          </p>
          <p className="py-2">Srdečně vás zvu na další večer s hennou. </p>
          <p className="py-2">
            V úvodu se společně usadíme a naladíme, poodhalíme taje nejčastěji
            používaných symbolů při malování hennou a poté se ponoříme do
            vlastní tvorby.
          </p>
          <p className="py-2">
            Pro každého účastníka setkání bude opět připraven mnou vyrobený
            kornoutek čerstvé henna pasty, papíry a tužky, inspirace v podobě
            vzorů a knihy věnující se malování hennou, gelová tužka na
            předmalování a dostatek krycí náplasti.
          </p>
          <p className="py-2">
            Čaj a voda budou k dispozici na místě neomezeně.
          </p>
          <p className="py-2">
            Pokud přinesete drobné občerstvení na společný stůl, potěší to.
          </p>
          <p className="py-2">Těším se moc! Šárka</p>
          <p className="py-2">Cena: 390,-</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd4jjo7-GqCQrUFEb9s3fNbMAjT-yrN9GNxDPGuabvgKiHwWg/viewform?fbclid=IwAR3X1jw3QT38Mmt7IW7tu7q-ywWMt3W78dgaDznPUdQMyhSEbhejLdq7rCk"
              className="py-2 px-8 bg-cta rounded-full "
            >
              Přihlásit se na workshop
            </a>
          </p>

          <Image
            alt="henna"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1687073602/zodpovedny_hub/Henna_oxsnks.webp"
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
