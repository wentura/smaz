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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539369/zodpovedny_hub/energeticky_bylinkovy_sperk_e6gzj1.webp"
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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1685539367/zodpovedny_hub/cesta_k_opravdove_intimite_uuyk3y.webp"
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
