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
            Naše vnitřní dětská zranění
          </h2>
          <p className="p-4 text-xs">Termín konání: 26.9. 2023 17:30 - 19:30</p>
          {/* <p className="pt-4">Na workshopu se spolu podíváme na to:</p> */}
          <p className="py-2">
            Moje práce je mým koníčkem, dlouhodobě se věnuji psychosomatice a
            terapeutické práci s lidmi.
          </p>
          <ul className="list-disc list-inside p-4 pt-0">
            <li>Najdeme psychosomatickou příčinu vaší ne-moci.</li>
            <li>
              Identifikujeme vaše hlavní zranění z dětství a povíme si o něm.
            </li>
            <li>Povíme i o egu a maskách, které v našem životě vytváří.</li>
            <li>
              Zkusíme si seberegulační techniku, kterou pak budete moci užívat
              samostatně.
            </li>
            <li>Změníme vaše vnímání pro vás stresové situace.</li>
          </ul>
          <p className="py-2">Cena besedy: 450,-</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300 py-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdG28_Z5Bsh9EDMbNDzcc_IUnDHriv6DatrSXZpUxxatSp0YQ/viewform?fbclid=IwAR1_XZv-j76FocnlhXNLOhKHYEr3E8uSpdkccu-_I-Wq_cMca7iJre3f5f0"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>
          <p className="py-2">
            Jmenuji se Nikola Smejkalová, jsem facilitátorka metody PSYCH-K,
            věnuji se psychosomatice, jsem fotografka, máma dvou dětí a považuji
            se i tak trochu za umělce. Na této besedě, bych vás ráda seznámila s
            vaším prvotním vnitřním zraněním (traumatem) z dětství, které
            později ovlivňuje celý váš život. Bohužel naprosto každý takové
            zranění má, akorát každý jinak hluboké.
          </p>
          <p className="py-2">
            Víte, když jsme ještě malé děti, prožíváme situace, které jsou v té
            době pro nás vysoce emočně zabarvené (tzv. je hodně prožíváme). A
            tyto emoce, z těchto vypjatých situací, si uložíme do podvědomí.
            Tyto, pro nás nežádoucí emoce pak vytvářejí např. nějaký zdravotní
            nebo psychický problém. Nejčastěji to bývá alergie, astma, ekzém a
            hlavně také spousta ,,programů,, - nejsem dost dobrý, nezasloužím
            si, nemůžu si dovolit, nejde to, nemám na to, aj.
          </p>
          <p className="py-2">
            Později nás tyto programy a emoce ovládají, je to něco jako nahraný
            program v PC, který se při startu spustí a prostě jede. Naprostou
            většinu z toho co děláme, děláme z podvědomí. Bohužel cca 70%
            podvědomých přesvědčeních jsou negativní. Tyto negativní přesvědčení
            lze ale i docela snadno změnit, když víme jak na to.
          </p>
          <p className="py-2">
            Z této naší besedy si taky odnesete praktický dárek a to ,,změnu
            vnímání stresové situace,,. Tzn., že změníme v podvědomí nějaké vaše
            negativní přesvědčení, změníme něco, co vám ve vašem životě působí
            stres, strach, paniku v něco, co budete zvládat v klidu a míru sami
            se sebou.
          </p>
          <p className="py-2">
            Když stihneme více, bude i meditace k odpuštění.
          </p>

          <Image
            alt="spokojená rodina vstupuje do západu slunce, no kýč..."
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1695153313/zodpovedny_hub/detskazraneni26_9_fnxpt7.webp"
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
