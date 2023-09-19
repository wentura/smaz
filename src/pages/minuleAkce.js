import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export default function VypisAkci() {
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
      <div className="container max-w-6xl mx-auto bg-white my-12">
        <div className="pt-20 pb-12" id="akce">
          <h3 className="uppercase text-xl md:text-2xl xl:text-4xl pb-2 xs:pb-4 nadpis text-center">
            MILULÉ AKCE
          </h3>
        </div>

        <div className="flex flex-col md:flex-row my-8">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539369/zodpovedny_hub/energeticky_bylinkovy_sperk_e6gzj1.webp"
              alt=""
              width="800"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  19. 6. 2023 17:30 - 19:30
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Energetický bylinkový šperk - tvoření a meditace
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                  Pojď si užít společné tvoření.
                  <br />
                  Načerpat novou energii a inspiraci z přírody!
                </p>
                {/* <Link
                  href="/jak_mit_dost_energie"
                  className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
                >
                  více informací
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row my-8 md:flex-row-reverse">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_700/v1685539369/zodpovedny_hub/bylinkove_setkani_bkwrx3.webp"
              alt=""
              width="700"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  Cyklus tří setkání: 20.4., 16.5., 15.6. 2023{" "}
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Bylinková setkání
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                  Cyklus setkání nabízí ucelený pohled do světa bylin pro úplné
                  začátečníky, ale i pokročilí bylinkáři si mohou odnést čerstvé
                  poznatky, mnohdy vědecky potvrzené účinky rostlin.
                </p>
                {/* <Link
                  href="/bylinkova_setkani"
                  className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
                >
                  více informací
                </Link> */}
                {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-8">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539370/zodpovedny_hub/jak_mit_dost_energie_ub7hct.webp"
              alt=""
              width="800"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  8. 6. 2023 17:30 - 20:00
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Jak mít dost energie na všechno, co potřebujeme zvládnout
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                  Jako ženy máme hodně rolí a s nimi souvisí spousta věcí, které
                  chceme nebo potřebujeme zvládnout. Přijďte prozkoumat, jak na
                  to mít dost energie.
                </p>
                {/* <Link
                  href="/jak_mit_dost_energie"
                  className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
                >
                  více informací
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-8 md:flex-row-reverse">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539372/zodpovedny_hub/vaginalni_mapovani_ipn0da.webp"
              alt=""
              width="800"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  7. 6. 2023 17:30 - 20:00
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Vaginální mapování a léčení jizev
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                  Co je a co není vaginální mapování.
                  <br />S čím vám může vaginální mapování pomoci. Máte svůj
                </p>
                {/* <Link
                  href="/vaginalni_mapovani"
                  className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
                >
                  více informací
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-8">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539367/zodpovedny_hub/bezpecne_online_cncmrp.webp"
              alt=""
              width="800"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  6. 6. 2023 17:30 - 19:30
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Bezpečně online
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                  Offline povídání o online hrozbách pro děti i dospělé s
                  trochou černého humoru a porcí nadsázky.
                </p>
                {/* <Link
                  href="/bezpecne_online"
                  className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
                >
                  více informací
                </Link> */}
                {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-8 md:flex-row-reverse">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539372/zodpovedny_hub/networking_km75gu.webp"
              alt=""
              width="800"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  31. 5. 2023 17:30-19:30
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Networking: Můj projekt
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                  Máte svůj projekt v hlavě a váháte, jak a kde začít?
                  <br />
                  Máte svůj projekt na papíře a sbíráte odvahu vykročit?
                </p>
                {/* <Link
                  href="/networking_muj_projekt"
                  className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
                >
                  více informací
                </Link> */}

                {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-8">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539370/zodpovedny_hub/homeo_rostlin_yuu9xg.webp"
              alt=""
              width="800"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  30.5. 2023 17:30-20:00
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Homeopatie rostlin
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                  Chcete pěstovat zdravé rostliny pomocí homeopatie?
                  <br />
                  Zkuste úspěšně pěstovat rostliny bez chemických prostředků.
                </p>
                {/* <Link
                  href="/homeopatie_rostlin"
                  className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
                >
                  více informací
                </Link> */}
                {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-8 md:flex-row-reverse">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_800/v1685539371/zodpovedny_hub/masaze_vlastnima_rukama_zaidsb.webp"
              alt=""
              width="800"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  25.5. 2023 18:00-20:00
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Masáž vlastníma rukama
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                  Staňte se sama/sám sobě masérem a ulevte si od bolesti. Za
                  večer toho stihneme opravdu hodně.
                </p>
                {/* <Link
                  href="/masaz_vlastnima_rukama"
                  className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
                >
                  více informací
                </Link> */}

                {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-8">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/c_scale,w_800/v1685539370/zodpovedny_hub/cyklicnost_zeny_wo6r69.webp"
              alt=""
              width="700"
              height="500"
              className="w-full"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  23.5. 2023 17:30-20:00
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Cykličnost ženy a ženská bylinná napářka
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                  Pojďte se potkat v kruhu s ostatními ženami a sama se sebou.
                  <br />
                  Každá z nás je jedinečná, přesto máme mnoho společného.
                </p>
                {/* <Link
                  href="/cyklicnost_zeny"
                  className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
                >
                  více informací
                </Link> */}
                {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-8 md:flex-row-reverse">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539369/zodpovedny_hub/bylinkove_setkani_bkwrx3.webp"
              alt=""
              width="800"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  Cyklus tří setkání: 20.4., 16.5. 2023{" "}
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Bylinková setkání
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                  Cyklus setkání nabízí ucelený pohled do světa bylin pro úplné
                  začátečníky, ale i pokročilí bylinkáři si mohou odnést čerstvé
                  poznatky, mnohdy vědecky potvrzené účinky rostlin.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-8">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539376/zodpovedny_hub/zdrava_snidane_pro_silne_traveni_wuhhcc.webp"
              alt=""
              width="800"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  18.5.2023{" "}
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Zdravá snídaně pro silné trávení
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                  Zveme Vás na pravidelné setkávání s tradiční čínskou medicínou
                  (TČM). Tentokrát na téma “zdravá snídaně pro silné trávení”.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-8 md:flex-row-reverse">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539371/zodpovedny_hub/montessori_doma_gfqcfv.webp"
              alt=""
              width="800"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  15.5.203{" "}
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Jak na Montessori doma?
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                  Připadá Vám, že je složité montessori principy využívat doma,
                  ale přesto Vás to táhne? Přijďte a uvidíte, že to tak není.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row my-8">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539376/zodpovedny_hub/rodicovstvi_v_pohode_phauh9.webp"
              alt=""
              width="800"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  9.5.2023{" "}
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Rodičovství v pohodě (konstelace)
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                  Konstelace přináší možnosti, jak nahlédnout na věci, které v
                  našem životě nefungují tak, jak bychom si přáli.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-8 md:flex-row-reverse">
          <div className="flex-1">
            <Image
              src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539370/zodpovedny_hub/henna_zzfkcs.webp"
              alt=""
              width="800"
              height="500"
              className="w-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
            <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
              <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
                <h4 className="uppercase font-light text-xs normalni pt-2">
                  4.5.2023{" "}
                </h4>
                <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                  Henna – umění na těle
                </h3>
                <p className="text-start lg:leading-7 text-xs lg:text-base px-4">
                  Henna je nejstarší 100% přírodní barvivo na světě, jež už
                  kdysi zdobilo hlavu krásné Nefertiti či okouzlující Kleopatry.
                </p>

                {/* <a
                href="https://www.zodpovednavyuka.cz/"
                target="_blank"
								className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                navštívit e-shop
              </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row-reverse my-8">
        <div className="flex-1">
          <img
            src="https://dummyimage.com/800x600.jpg"
            alt=""
            width="400"
            height="100"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center px-2 md:px-20">
              <h4 className="uppercase font-bold text-xs">malý nadpis</h4>
              <h3 className="uppercase font-mono font-extrabold lg:text-3xl xs:pb-4 nadpis">
                vetsi nadpis hub pismem
              </h3>
              <p className="text-start leading-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                sapiente nihil amet porro sed libero a quae fugiat error dolores
                quidem est corporis accusamus, quos veniam.
              </p>
              <a
                href="#"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase"
              >
                link do pryc
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
