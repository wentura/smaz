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
            Zima a posila kořenů - ledvin dle TČM
          </h2>
          <p className="p-4 text-xs">Termín konání: 16. 11. 2023 17:30-20:00</p>
          <ul className="list-disc list-inside p-4">
            <p>Dozvíte se:</p>
            <li>
              praktické tipy jak žít v rovnováze a neztrácet svou vitální
              energii během zimy
            </li>
            <li>proč jsou ledviny dle TČM tak důležité</li>
            <li>
              jak vařit dle TČM posilujicí pokrmy a také čemu se vyvarovat
            </li>
            <li>
              jak připravit vývar na posílení ledvin a krve včetně ochutnávky
            </li>
            <li>naučíte se zdravotní cvičení qigong na posilu ledvin</li>
            <li>
              jak pracovat s medicinálními houbami reishi, coriolus a cordyceps
            </li>
            <li>na místě si vyrobíte jeden posilující výrobek pro ledviny</li>
          </ul>
          <p className="py-2">
            Cena včetně ochutnávek: 590Kč (v ceně je jeden výrobek, ochutnávka a
            tištěné materiály), s sebou pohodlné oblečení na cvičení.
          </p>
          <p className="py-2">Těší se na vás Petra Mikesková.</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfAC4EdcKWb5_7HLgxpuCB9IucmEC3OgS6GYbkLYMtvtmxWQA/viewform?fbclid=IwAR0a5ZMzQyj_EDJVR0KE2WR9t7hMXB-TuvWsTO6Vl5Mf3Le69xyE7sN86f0"
              className="py-2 px-8 bg-cta rounded-full "
            >
              Přihlásit se...
            </a>
          </p>
          <Image
            alt="zdravá snídaně"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1698504603/zodpovedny_hub/posilakorenuledviny_qqrnip.webp"
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
