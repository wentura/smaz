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
            Homeopatie rostlin
          </h2>
          <p className="p-4 text-xs">Termín konání: 18.5. 2023 17:30-20:00</p>
          <p>Chcete pěstovat zdravé rostliny pomocí homeopatie?</p>
          <ul className="list-disc list-inside p-4">
            <li>Zkuste úspěšně pěstovat rostliny bez chemických prostředků.</li>
            <li>Zlepšete klíčivost, růst a zdraví rostiny.</li>
            <li>Trápí vás škůdci na zahradě či na poli?</li>
            <li>Vaše pokojové rostliny neprospívají?</li>
            <li>Naučte se pracovat s homeopatiky.</li>
            <li>Buďte v harmonii s přírodou.</li>
            <li>Čeká na vás elixír pro posílení rostlin a balení křemeliny.</li>
          </ul>

          <p className="py-2">Ivana Přibáňová</p>
          <p className="py-2">
            Cena: 350,- (v ceně zahrnuto 100,- za elixír a křemelinu)
          </p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300 py-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeNPvlUyZ8qryL43TzhgUrNE0ZEHwh0ugZUCS7tGCYGFIkVzA/viewform"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>
          <p className="py-4">Co pro Vás mohu udělat?</p>
          <p className="py-2">
            Vyberu vhodný individuální homeopatický lék v případě akutních,
            chronických potíží, při paliaci, po operaci, porodu či očkování u
            dětí i dospělých.
          </p>
          <p className="py-2">
            Trápí něco Vašeho čtyřnohého parťáka? Řeším chronické i akutní
            potíže u koní, psů, koček a dalších zvířat (RAO, COPD, kožní potíže,
            rakoviny…).
          </p>
          <p className="py-2">
            Máte farmu s hospodářskými zvířaty? Neváhejte mne oslovit v případě
            jakýchkoliv zdravotních potíží vašich svěřenců (zánět vemene, úrazy,
            porody….).
          </p>
          <p className="py-2">
            Řešíte doma, na zahradě či na poli nemocné či neprospívající
            rostliny (kadeřavost, spála, svilušky, slimáci…)? Obraťte se na mne,
            ráda pomohu.
          </p>
          <p className="py-2">
            Připravím homeopatickou lékárničku dle individuálních potřeb Jsem tu
            pro Vás kdykoliv osobně či online.
          </p>
          <Image
            alt="spokojená rodina vstupuje do západu slunce, no kýč..."
            src="/homeo_rostlin.jpg"
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
