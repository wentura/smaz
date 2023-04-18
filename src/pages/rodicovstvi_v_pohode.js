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
            Rodičovství v pohodě (konstelace)
          </h2>
          <p className="p-4 text-xs">Termín konání: 9.5. 2023 17:30-20:00</p>
          <p>
            Konstelace přináší možnosti, jak nahlédnout na věci, které v našem
            životě nefunguj tak, jak bychom si přáli. Pojďte to vyzkoušet.
          </p>
          <ul className="list-disc list-inside p-4">
            <li>
              Občas se Ti nedaří komunikace s dítětem nebo s partnerem ohledně
              rodičovství?
            </li>
            <li>Máš pocit neustálé vyčerpanosti nebo někdy i vzteku?</li>
            <li>
              Naučím Tě segeregulační techniku, kterou využiješ pro sebe,
              případně partnerství a rodičovství.
            </li>
            <li>
              Vyzkoušíš si, jak na tom jsi jako rodič bez toho, aniž bys musel
              něco odkrývat před skupinou.
            </li>
            <li>
              Zajímají vás konstelace a chtěli jste to vyzkoušet? Máte možnost.
            </li>
          </ul>

          <ul className="list-disc list-inside p-4">
            <p>Pomocí konstelací nebo jiných technik:</p>
            <li>Odkryjeme psychosomatické vlivy zdravotního problému.</li>
            <li>Vyřešíme komunikaci mezi partnery nebo jinde v rodině.</li>
            <li>Posuneme podnikání, rozproudíme objednávky.</li>
            <li>
              Zbouráme stará přesvědčení o sobě a tím přijde stabilita a
              sebehodnota.
            </li>
            <li>Podíváme se a upravíme finanční toky.</li>
            <li>
              Nalezneme seberegulaci pro Tvé tělo a přijde více klidu a energie
            </li>
            <li>Skoncujeme s vyčerpáním - většinou stačí jedno setkání.</li>
          </ul>
          <p className="py-2">
            Učím a vedu konstelace, byznys a vztahové poradenství se zaměřením
            na terapii.Hýbej se vnitřně i venku nebo se naopak zastav a načerpej
            síly. (Lze i on-line).
          </p>
          <p className="py-2">
            Vezmi si prostor pro Tvou regeneraci, podporu změny a rozpohybuj
            současnou situaci.
          </p>
          <p className="py-2">Těším se na společné setkání.</p>
          <p className="py-2">Nadiya J. Jindrová</p>
          <p className="py-2">Cena semináře je 390,-</p>
          <p className="mt-2 mb-16 mx-auto text-center hover:scale-110 ease-in duration-300">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeviQ8iasykpIa3BaOXBSZL6cgQB4hukz27q4_bi8wHYVwaVA/viewform"
              className="py-2 px-8 bg-cta rounded-full"
            >
              Přihlásit se na seminář
            </a>
          </p>

          <Image
            alt="spokojená rodina vstupuje do západu slunce, no kýč..."
            src="/rodicovstvi_v_pohode.jpg"
            width={800}
            height={400}
            className="mx-auto"
          />
          <p className="py-8">Co se děje na konstelacích?</p>
          <p>
            Technika konstelací spočívá v sestavení jakéhosi „modelu“ rodiny,
            vztahu nebo jiného systému ze „zástupců“ vybraných z ostatních
            účastníků semináře.
            <br />
            <br /> Klient terapeutovi popíše podstatu problému, který ho na
            konstelace přivedl. Terapeut klientovi navrhne, kteří lidé z jeho
            příběhu by měli v konstelaci vystupovat, a klient si mezi účastníky
            semináře vybere takové zástupce skutečných osob, kteří mu dotyčné
            pocitově nejvíc připomínají.
            <br />
            <br />
            Ukazuje se, že v osobních příbězích jsou důležití nejen rodiče,
            sourozenci, prarodiče, ale mnohdy i vzdálenější příbuzní nebo lidé s
            rodinou nějak spjatí. V příbězích mívají zvlášť velký význam rodinní
            příslušníci, kteří jsou z vědomí rodiny vytěsněni nebo se na ně
            zapomnělo. Mohou to být potracené nebo brzy zemřelé děti, nežádoucí
            členové systému či příbuzní s tragickým osudem.
            <br />
            <br />
            Klient si rovněž zvolí zástupce, který bude v situaci zastupovat
            jeho samého. Takto vybrané zástupce klient rozestaví tak, jak si
            myslí, že by se rozestavili sami, kdyby byli přítomni. Výchozí
            rozestavení tedy odpovídá jeho vnitřnímu obrazu dotyčného systému.
            Proto to musí dělat soustředěně a bez ohledu na formální očekávání.
            <br />
            <br />
            Od chvíle, kdy zástupci zaujmou své pozice, se u nich začínají
            projevovat charakteristické pocitové reakce. Jejich pocity v
            konstelaci jsou překvapivě autentické a silné. Konstelace umožňují
            spatřit situaci v její podstatě a často vynesou na světlo skrytou
            dynamiku systému. Tento jev je základem metody.
            <br />
            <br />
            Pozorováním reakcí a dotazováním zástupců dostáváme řadu informací o
            systému a procesech, které pod povrchem systému probíhají. Zároveň
            vychází najevo, zda v rozestavené konstelaci nechybí někdo, kdo ve
            skutečnosti v systému byl důležitý, či zda v systému nepřevzal někdo
            roli jiného člena rodiny. Přeskupováním systému, hledáním
            „správného“ místa pro jednotlivé členy a doplněním systému o další
            vyloučené anebo zapomenuté členy rodiny začíná proces, jehož hojivý
            účinek pociťuje nejen klient, nýbrž později celý jeho rodinný
            systém. Pro ostatní účastníky semináře je jejich „práce“ v rolích
            zástupců, ale i sama účast na semináři neobyčejně intenzívní a
            přináší vždy hluboké prožitky a překvapivé náhledy do jejich
            vlastního života.
          </p>
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
