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
            ZWorkshop Zdravé pečení z podzimních darů přírody - dle TČM a
            ochutnávka 5elementových dezertů
          </h2>
          <p className="p-4 text-xs">Termín konání: 26.10. 2023 17:30-20:00</p>
          <ul className="list-disc list-inside p-4">
            <p>Na co se můžete těšit:</p>
            <li>jak připravit zdravý vyvážený dezert dle celostní výživy</li>
            <li>jak vybrat vhodné sladidlo a mouku</li>
            <li>jak správně připravit ořechy a semínka</li>
            <li>
              jak využít podzimní dary přírody zdravě a lahodně - hrušky,
              jablka, švestky, dýni či řepu
            </li>
            <li>
              v ceně degustace pětielementových dobrot - ochutnáte ovocný koláč,
              obilný nákyp, domácí bezlepkové sušenky či fermentovaný rychlo
              dort
            </li>
            <li>odnesete si domů písemné materiály včetně receptů</li>
            <li>na místě si připravíme podzimní nápoj pro dobrý spánek</li>
          </ul>
          <p className="py-2">
            Cena včetně degustace: 650 Kč, s sebou krabičku na ochutnávku.
          </p>
          <p className="py-2">Těší se na vás Petra Mikesková.</p>

          {/* <p className="py-2">
            Cena: 590 Kč (cena zahrnuje tištěné materiály a ochutnávku)
          </p> */}

          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfX6wbrycPiy8YL20Tor_3EDbmRRJvNlTD2akn_uTVLDUfYoQ/viewform"
              className="py-2 px-8 bg-cta rounded-full "
            >
              Přihlásit se na setkání
            </a>
          </p>
          <Image
            alt="zdravá snídaně"
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1696275986/zodpovedny_hub/podzimpeceni26_10_lbbpc5.webp"
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
