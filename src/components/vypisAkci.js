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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1695153313/zodpovedny_hub/imunita21_9_txpeqy.webp"
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
                21.9. 17.30-20:00
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Posilujeme imunitu
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                Workshop TČM.
                <br />
                Posilujeme imunitu - stravou, bylinami a cvičením.
              </p>
              <Link
                href="/tcm_imunita"
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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1695153313/zodpovedny_hub/detskazraneni26_9_fnxpt7.webp"
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
                24.10. 2023 17:30 - 19:30
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Naše vnitřní dětská zranění
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                Moje práce je mým koníčkem, dlouhodobě se věnuji psychosomatice
                a terapeutické práci s lidmi.
              </p>
              <Link
                href="/psych-k"
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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1695153313/zodpovedny_hub/daryprirody_oopmcq.webp"
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
                3. 10. 2023 18:00 - 20:30
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Podzimní dary přírody
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                I v čase podzimu nám příroda štědře nabízí byliny...
              </p>
              <Link
                href="/podzimni_dary_prirody"
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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1695153313/zodpovedny_hub/henna5_10_rvlvhc.webp"
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
                5. 10. 2023 17:30 - 20:00
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Malování hennou
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                Chystá se pro vás další z již takřka pravidelných mělnických
                setkání s henna tvořením.
              </p>
              <Link
                href="/henna3"
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
                12. 10. 2023 18:00 - 20:30
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Setkání žen v kruhu
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                Srdečně zvu na setkání v kruhu, jehož kořeny sahají do dávné
                minulosti...
              </p>
              <Link
                href="/zensky_kruh"
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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1696275986/zodpovedny_hub/mkruh17_10_f7qzed.webp"
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
                17. 10. 2023 18:00 - 20:30
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Setkání v mužském kruhu
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full">
                Nepřítel je ten, jehož příběh neznám. (autor neznámý)
              </p>
              <Link
                href="/muzsky_kruh"
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
            src="https://res.cloudinary.com/dam7wdzvx/image/upload/v1696275986/zodpovedny_hub/snidane19_10_uvqgus.webp"
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
                19.10. 2023 17:30 - 20:00
              </h4>
              <h3 className="uppercase text-md md:text-xl xl:text-3xl pb-2 xs:pb-4 nadpis text-center">
                Zdravá snídaně pro silné trávení
              </h3>
              <p className="text-start lg:leading-7 text-xs lg:text-base px-4 w-full"></p>
              <Link
                href="/zdrava_snidane10"
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
      </div>
      {/* konec-dalsi*/}
    </>
  );
}
