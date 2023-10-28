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

      {/* dalsi-reverse*/}
      <div className="flex flex-col my-8 md:flex-row-reverse">
        <div className="flex-1">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1698504602/zodpovedny_hub/henna_pjledh.webp"
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
                2. 11. 2023 18:00-20:30
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Podzimní malování hennou
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                Podzimní čas s hennou a blízkými - další henna workshop v HUBu.
              </p>
              <Link
                href="/henna-11-23"
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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1698504602/zodpovedny_hub/seberizenevzdelavani_ult5dr.webp"
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
                7. 11. 2023 16:30-21:00
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Sebeřízené vzdělávání v praxi
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                S radostí vás zveme na setkání zaměřené na téma sebeřízeného
                vzdělávání, které je určeno pro všechny, jenž se zajímají o
                alternativní přístupy k vzdělávání.
              </p>
              <Link
                href="/seberizenevzdelavani-11-23"
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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1698504603/zodpovedny_hub/kostivalovyworkshop_ivgwqh.webp"
            alt="Henna"
            width="800"
            height="500"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                9. 11. 2023 17:30-19:30
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Kostivalový workshop
              </h3>
              <Link
                href="/kostivalovyworkshop-11-23"
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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1698504603/zodpovedny_hub/muzskykruh_awrwcw.webp"
            alt="Recitál"
            width="800"
            height="500"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                14. 11. 2023 18:00-20:30
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Mužský kruh - Téma: Zdroje
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                Pojďme se podívat na téma Zdroje v životě muže.
              </p>
              <Link
                href="/muzskekruhy-11-23"
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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1696275986/zodpovedny_hub/zkruh12_10_qxx06r.webp"
            alt="Ženský kruh"
            width="800"
            height="500"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                15. 11. 2023 18:00-20:30
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Setkání žen v kruhu - Téma: Zdroje
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                Co jsou mé zdroje?
              </p>
              <Link
                href="/zenskekruhy-11-23"
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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1698504603/zodpovedny_hub/posilakorenuledviny_qqrnip.webp"
            alt="Mužský kruh"
            width="800"
            height="500"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                16. 11. 2023 17:30-20:00
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Zima a posila kořenů - ledvin dle TČM{" "}
              </h3>
              <Link
                href="/zimaaposilakorenu-11-23"
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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1698504602/zodpovedny_hub/bachesence_btrd45.webp"
            alt="Zdravá snídaně"
            width="800"
            height="500"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                21. 11. 2023 (17:30 – 19:30)
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Bachovy esence - lékárnička (nejen) pro psychiku
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full"></p>
              <Link
                href="/bachovyesence-11-23"
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
      {/* <div className="flex flex-col md:flex-row my-8">
        <div className="flex-1">
          <Image
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1696275986/zodpovedny_hub/podzimpeceni26_10_lbbpc5.webp"
            alt="Zdravé pečení"
            width="800"
            height="500"
            className="w-full"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-visible z-0 relative">
          <div className="bg-neutral-100 md:h-4/5 md:w-[110%] md:ml-[-10%] md:z-2 md:absolute flex">
            <div className="flex flex-col items-center justify-center pt-4 md:px-20 w-full">
              <h4 className="uppercase font-light text-xs normalni pt-2">
                26. 10. 2023 17:30 - 20:00
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Workshop Zdravé pečení z podzimních darů přírody - dle TČM a
                ochutnávka 5elementových dezertů
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full"></p>
              <Link
                href="/zdrave_peceni"
                className="m-4 w-60 text-center py-2 bg-cta rounded-full cursor-pointer uppercase text-xs lg:text-md hover:scale-110 ease-in duration-300"
              >
                více informací
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* konec-dalsi*/}
    </>
  );
}
