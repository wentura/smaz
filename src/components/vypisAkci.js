import Image from "next/image";
import Link from "next/link";

export default function VypisAkci() {
  return (
    <>
      <div className="pt-20 pb-12" id="akce">
        <h3 className="uppercase text-xl md:text-2xl xl:text-4xl pb-2 xs:pb-4 nadpis text-center">
          KALENDÁŘ AKCÍ
        </h3>
        <div className="mx-auto max-w-[600px] p-2">
          <p className="text-center text-sm ">
            Buďte odvážní a přijďte načerpat informace
            <span className="sm:hidden">.</span>
            <span className="hidden sm:inline">
              &nbsp;z nějaké úplně nové oblasti.
              <br />
              Zajímá vás zdraví, příroda, výchova, péče o tělo, osobní rozvoj.
            </span>
            <br />
            Nakoukněte do kalendáře. Vyberte a doražte.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row my-8 md:flex-row-reverse">
        <div className="flex-1">
          <Image
            src="/bylinkove_setkani.jpg"
            alt=""
            width="400"
            height="100"
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
              <Link
                href="/bylinkova_setkani"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
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
            src="/cyklicnost_zeny.jpg"
            alt=""
            width="400"
            height="100"
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
              <Link
                href="/cyklicnost_zeny"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
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
            src="/masaze_vlastnima_rukama.jpg"
            alt=""
            width="400"
            height="100"
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
                Staňte se sama/sám sobě masérem a ulevte si od bolesti. Za večer
                toho stihneme opravdu hodně.
              </p>
              <Link
                href="/masaz_vlastnima_rukama"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>

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
            src="/homeo_rostlin.jpg"
            alt=""
            width="400"
            height="100"
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
              <Link
                href="/homeopatie_rostlin"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
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
            src="/networking.jpg"
            alt=""
            width="400"
            height="100"
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
              <Link
                href="/networking_muj_projekt"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>

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
            src="/bezpecne_online.jpg"
            alt=""
            width="400"
            height="100"
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
                Offline povídání o online hrozbách pro děti i dospělé s trochou
                černého humoru a porcí nadsázky.
              </p>
              <Link
                href="/bezpecne_online"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
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

      {/* dalsi-reverse*/}
      <div className="flex flex-col my-8 md:flex-row-reverse">
        <div className="flex-1">
          <Image
            src="/vaginalni_mapovani.jpg"
            alt=""
            width="400"
            height="100"
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
              <Link
                href="/vaginalni_mapovani"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* konec-dalsi-reverse*/}
      {/* dalsi*/}
      <div className="flex flex-col md:flex-row my-8">
        <div className="flex-1">
          <Image
            src="/jak_mit_dost_energie.jpg"
            alt=""
            width="400"
            height="100"
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
                chceme nebo potřebujeme zvládnout. Přijďte prozkoumat, jak na to
                mít dost energie.
              </p>
              <Link
                href="/jak_mit_dost_energie"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* konec-dalsi*/}
      {/* dalsi-reverse*/}
      <div className="flex flex-col my-8 md:flex-row-reverse">
        <div className="flex-1">
          <Image
            src="/energeticky_bylinkovy_sperk.jpg"
            alt=""
            width="400"
            height="100"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
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
              <Link
                href="/energeticky_bylinkovy_sperk"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* konec-dalsi-reverse*/}
      {/* dalsi*/}
      <div className="flex flex-col md:flex-row my-8">
        <div className="flex-1">
          <Image
            src="/cesta_k_opravdove_intimite.jpg"
            alt=""
            width="400"
            height="100"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                20. 6. 2023 17:30 - 20:00
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Cesta k opravdové intimitě
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                Lze prožívat sexualitu tak, že je člověk vystřelen do vesmíru a
                tam si setrvá dobu, jaká mu vyhovuje?
              </p>
              <Link
                href="/cesta_k_opravdove_intimite"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* konec-dalsi*/}
    </>
  );
}
