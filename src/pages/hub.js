// import VypisAkci from "@/components/vypisAkci";
import Adresa from "@/components/adresa";
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
            ZODPOVĚDNÝ HUB
          </h2>
          <p className="py-4">
            Zkoušet nové věci, poznávat nové tváře, rozšiřovat své vědomosti –
            místo pro neomezenou kreativitu – to je Zodpovědný Hub. Koncept je
            jednoduchý – kdokoli může kohokoli naučit cokoli. Bez ohledu na
            dosažené vzdělání, věk nebo profesi.
          </p>
          <p className="py-4">
            Máš nadšení a zkušenosti s něčím, co by ostatní třeba také rádi
            uměli nebo znali? Nepochybuj o tom. Máš. Každý jdeme životem a
            sbíráme si to, co se před námi na cestě zrovna objeví a ladí s námi.
            To je naše jedinečné know how, které jiní mohou ocenit.
          </p>
          <p className="py-4">
            Lenka miluje rozhovory, které jdou do hloubky a poskytují prostor
            zamyslet se nad věcmi, nad kterými člověk nemá moc času v běhu
            všedních dní přemýšlet. Baví ji poslouchat lidské příběhy a nechat
            se jimi inspirovat. Skrze smysluplné rozhovory posouvá i ostatní.
          </p>
          <p className="py-4">
            Lucka je tělem i duší nejčastěji u svých bylin. Příroda ji uchvátila
            natolik, že svou celoživotní lásku (bylinky) s velkým entusiasmem
            předává dál.
          </p>
          <p className="py-4">
            Petra miluje souvislosti, tradiční čínská medicína je její doména.
            Žije předáváním zkušeností o celostní výživě.{" "}
          </p>
          <p className="py-4">
            Bělu už dávno uchvátila Montessori pedagogika a to natolik, že
            založila školku a školu. O montessori principech a přístupu ráda
            povídá a ukazuje konkrétní způsoby využití v běžném životě.{" "}
          </p>
          <p className="py-4">
            Renata je blázen do facebookové reklamy a zajímá ji zdravé vaření.
            Často ale ztrácí energii, když jde právě o vaření. Už s tím chce
            pohnout. Jistě ji zaujme seminář Petry.{" "}
          </p>
          <p className="py-4">
            Pepa miluje čaje, může o nich vykládat hodiny. A ty jeho čajové
            rituály. Ach. Rád se baví s lidmi do hloubky a ne jen o běžných
            provozních věcech. Určitě navštíví seminář smysluplné rozhovory.{" "}
          </p>
          <p className="py-4">
            Monika má malé děti a klasický systém školství, který se nabízí, ji
            nevyhovuje. Hledá alternativy. A tak s radostí zavítá na Běly
            seminář.
          </p>
          <p className="py-4">
            Pokud tedy máte chuť, tak můžete ostatní obohatit o to, co umíte
            dobře zrovna vy.{" "}
          </p>
          <p className="py-4">
            Zodpovědný Hub k tomu nabízí otevřený prostor.{" "}
          </p>
          <p className="py-4">
            Pusttě do světa svou fantazii, roztáhněte křídla kreativity a leťte.{" "}
          </p>
        </div>
        <div className="pt-12">
          <Adresa />
        </div>
      </div>
    </>
  );
}
